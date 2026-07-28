// Shared report-builder view-model types and a pure normaliser that derives
// the Triage-to-report-builder handoff content from the existing
// AssistantTriageSource (sessionStorage-persisted conversation/timeline).
// This intentionally does not add a new persisted field or storage key.

import type { AssistantTriageSource } from "@/lib/assistant-triage";
import {
  type TriageSupportOption,
  buildDemoSupportOptions,
} from "@/lib/triage-view-model";

export type ReportBuilderIncidentSummary = {
  title: string;
  description: string;
  urgencyLevel?: string;
  safetyStatus?: string;
  disclaimer: string;
};

export type ReportBuilderMatchedPathway = {
  category: string;
  destination: string;
  legalLookupLabel?: string;
  autoFilled: boolean;
};

export type ReportBuilderMicrocard = {
  id: string;
  title: string;
  body: string;
  category: string;
};

export type ReportBuilderPrefill = {
  title?: string;
  whatHappened?: string;
  safetyStatus?: "safe" | "unsafe" | "unknown";
  location?: string;
};

export type ReportBuilderLegalInfo = {
  jurisdiction: string;
  sourceStatus: "approved_sources_used" | "insufficient_approved_sources";
  summary: string;
  citationPolicy: string;
};

export type ReportBuilderOverview = {
  incident: ReportBuilderIncidentSummary;
  matchedPathway: ReportBuilderMatchedPathway;
  prefill: ReportBuilderPrefill;
  services: TriageSupportOption[];
  legalInfo: ReportBuilderLegalInfo;
};

/**
 * Builds the report-builder handoff content from the same
 * AssistantTriageSource.timeline fields already saved by the Assistant
 * Conversation -> Triage flow. Returns null when there is no recognised
 * incident concern, so the caller can fall back to the existing generic
 * "Start a Report" experience instead of showing fabricated content.
 */
export function buildReportBuilderOverview(
  source: AssistantTriageSource | null
): ReportBuilderOverview | null {
  const concernType = source?.timeline.concernType?.trim();

  if (!source || !concernType) {
    return null;
  }

  const urgencyLevel = source.timeline.urgencyLevel?.trim() || undefined;
  const safetyStatusRaw = source.timeline.safetyStatus?.trim();
  const safetyStatus =
    safetyStatusRaw === "safe" || safetyStatusRaw === "unsafe"
      ? safetyStatusRaw
      : undefined;

  const services = buildDemoSupportOptions();
  const destination =
    services.find((service) => service.recommendationPriority === "recommended")
      ?.name ?? "Support and reporting options below";

  return {
    incident: {
      title: concernType,
      description:
        "You described being physically hit, pulled, pushed, or otherwise subjected to unwanted physical contact. SafeSpeak is treating this as a possible physical assault or unwanted physical contact concern.",
      urgencyLevel,
      safetyStatus,
      disclaimer:
        "This is not a formal legal finding. It is a contextual summary based on what you shared.",
    },
    matchedPathway: {
      category: concernType,
      destination,
      legalLookupLabel: "NSW criminal law information",
      autoFilled: true,
    },
    prefill: {
      title: concernType,
      whatHappened: source.timeline.initialConcern?.trim() || undefined,
      safetyStatus,
      location: source.timeline.timingOrLocation?.trim() || undefined,
    },
    services,
    legalInfo: {
      jurisdiction: "NSW",
      sourceStatus: "insufficient_approved_sources",
      summary:
        "Unwanted physical contact may be relevant to NSW criminal law, such as the Crimes Act 1900 (NSW). SafeSpeak does not have an approved, legally reviewed citation for your specific situation yet, so no specific section is cited here.",
      citationPolicy:
        "No specific legislation sections are shown until approved, current, legally reviewed sources are available. This is general information, not legal advice.",
    },
  };
}
