import type { MockIncidentContext, PublishedMockContentBundle } from "@/lib/contract/published-content-contract";
import { runMockMatching } from "@/lib/matching-rules/engine";
import { type ContentRepository, getContentRepository } from "@/lib/mock/content-repository";
import { buildMockIncidentContext } from "@/lib/mock/incident-context";
import {
  microcardToResourceItem,
  organisationToSupportOption,
  professionalToAdvocateCard,
  destinationToReportingCard,
  rightsContentDisclaimer,
  rightsContentToResourceItem,
} from "@/lib/mock/triage-adapters";
import type { TriageAdvocateCard, TriageReportingDestinationCard } from "@/lib/mock/triage-mock-types";
import type { TriageResourceGroup, TriageSupportOption } from "@/lib/triage-view-model";

/**
 * Phase 6 — deterministic mock-content-backed Triage recommendation service.
 * This is the Triage page's data source for the "no live backend session"
 * (demo) branch only — it never touches the Assistant conversation
 * components, routing, or the live-backend Triage transition logic.
 */

export interface TriageRecommendationRequest {
  topic?: string | null;
  timeline?: Record<string, string> | null;
}

export type TriageRecommendationResult =
  | { status: "loading" }
  | { status: "error"; message: string }
  | {
      status: "success";
      context: MockIncidentContext;
      triggeredRuleIds: string[];
      /** Matched Microcards + matched Rights Content, each as its own group — omitted entirely (not included with an empty `items` array) when empty. */
      resourceGroups: TriageResourceGroup[];
      /**
       * Additive, page-level-only supplementary text — `TriageResourceItem`
       * intentionally has no disclaimer field of its own (see
       * `rightsContentDisclaimer` in `triage-adapters.ts`), so any matched
       * Rights Content records' `publicDisclaimer` values are joined here
       * and rendered once beneath the "Rights & Legal Information" heading
       * instead of being dropped or duplicated per-card.
       */
      rightsContentDisclaimer?: string;
      /** Matched Organisations, `order` assigned by array index. */
      supportOptions: TriageSupportOption[];
      /** Matched Professionals. */
      advocates: TriageAdvocateCard[];
      /** Matched Reporting Destinations. */
      reportingDestinations: TriageReportingDestinationCard[];
    };

export interface TriageRecommendationService {
  getRecommendations(request: TriageRecommendationRequest): Promise<TriageRecommendationResult>;
}

function devWarn(message: string): void {
  // eslint-disable-next-line n/no-process-env
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console -- dev-only diagnostic, never shipped to production
    console.warn(message);
  }
}

export class MockTriageRecommendationService implements TriageRecommendationService {
  private readonly repository: ContentRepository;

  constructor(repository: ContentRepository = getContentRepository()) {
    this.repository = repository;
  }

  async getRecommendations(request: TriageRecommendationRequest): Promise<TriageRecommendationResult> {
    if (!this.repository.isReady()) {
      return {
        status: "error",
        message: this.repository.getLoadError() ?? "The mock content bundle is unavailable.",
      };
    }

    const context = buildMockIncidentContext(this.repository, {
      topic: request.topic,
      timeline: request.timeline,
    });

    const data: PublishedMockContentBundle["data"] = {
      incidentTypes: this.repository.list("incidentTypes"),
      triageLabels: this.repository.list("triageLabels"),
      resourceCategories: this.repository.list("resourceCategories"),
      legislationSources: this.repository.list("legislationSources"),
      microcards: this.repository.list("microcards"),
      rightsContent: this.repository.list("rightsContent"),
      supportOrganisations: this.repository.list("supportOrganisations"),
      supportProfessionals: this.repository.list("supportProfessionals"),
      reportingDestinations: this.repository.list("reportingDestinations"),
      matchingRules: this.repository.list("matchingRules"),
    };

    const result = runMockMatching(data, context);

    const microcardItems = result.recommendations.microcards.flatMap((match) => {
      const record = this.repository.getById("microcards", match.recordId);
      if (!record) {
        devWarn(`MockTriageRecommendationService: microcard "${match.recordId}" not found in bundle — skipped.`);
        return [];
      }
      return [microcardToResourceItem(record, match.reasons)];
    });

    const rightsContentDisclaimers: string[] = [];
    const rightsContentItems = result.recommendations.rightsContent.flatMap((match) => {
      const record = this.repository.getById("rightsContent", match.recordId);
      if (!record) {
        devWarn(`MockTriageRecommendationService: rightsContent "${match.recordId}" not found in bundle — skipped.`);
        return [];
      }
      const disclaimer = rightsContentDisclaimer(record);
      if (disclaimer && !rightsContentDisclaimers.includes(disclaimer)) {
        rightsContentDisclaimers.push(disclaimer);
      }
      return [rightsContentToResourceItem(record, match.reasons)];
    });

    const resourceGroups: TriageResourceGroup[] = [];
    if (microcardItems.length > 0) {
      resourceGroups.push({
        id: "matched-suggested-guides",
        heading: "Suggested guides",
        items: microcardItems,
      });
    }
    if (rightsContentItems.length > 0) {
      resourceGroups.push({
        id: "matched-rights-information",
        heading: "Rights & Legal Information",
        items: rightsContentItems,
      });
    }

    const supportOptions: TriageSupportOption[] = result.recommendations.supportOrganisations.flatMap(
      (match, index) => {
        const record = this.repository.getById("supportOrganisations", match.recordId);
        if (!record) {
          devWarn(
            `MockTriageRecommendationService: supportOrganisation "${match.recordId}" not found in bundle — skipped.`
          );
          return [];
        }
        return [organisationToSupportOption(record, match.reasons, index)];
      }
    );

    const advocates: TriageAdvocateCard[] = result.recommendations.supportProfessionals.flatMap((match) => {
      const record = this.repository.getById("supportProfessionals", match.recordId);
      if (!record) {
        devWarn(
          `MockTriageRecommendationService: supportProfessional "${match.recordId}" not found in bundle — skipped.`
        );
        return [];
      }
      return [professionalToAdvocateCard(record, match.reasons)];
    });

    const reportingDestinations: TriageReportingDestinationCard[] = result.recommendations.reportingDestinations.flatMap(
      (match) => {
        const record = this.repository.getById("reportingDestinations", match.recordId);
        if (!record) {
          devWarn(
            `MockTriageRecommendationService: reportingDestination "${match.recordId}" not found in bundle — skipped.`
          );
          return [];
        }
        return [destinationToReportingCard(record, match.reasons)];
      }
    );

    // Legislation-source matches (`result.recommendations.legislationSources`) are intentionally
    // resolved-and-ignored here: there is no legislation-source card slot on the current Triage
    // page (mirrors Rights Content's `relatedLegislationIds` being informational-only, not a
    // separate directly-rendered entity list on this page). Not surfaced as a new section.

    return {
      status: "success",
      context,
      triggeredRuleIds: result.triggeredRuleIds,
      resourceGroups,
      rightsContentDisclaimer:
        rightsContentDisclaimers.length > 0 ? rightsContentDisclaimers.join(" ") : undefined,
      supportOptions,
      advocates,
      reportingDestinations,
    };
  }
}
