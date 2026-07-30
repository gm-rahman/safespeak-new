import type {
  MockMatchReason,
  PublishedMicrocard,
  PublishedReportingDestination,
  PublishedRightsContent,
  PublishedSupportOrganisation,
  PublishedSupportProfessional,
} from "@/lib/contract/published-content-contract";
import type {
  TriageResourceItem,
  TriageSupportOption,
} from "@/lib/triage-view-model";
import type {
  TriageAdvocateCard,
  TriageReportingDestinationCard,
} from "@/lib/mock/triage-mock-types";

/**
 * Phase 6 — pure mapping functions from the canonical published-content
 * contract records (+ the matching engine's per-record match reasons) to the
 * presentational types the Triage page renders. No React, no side effects,
 * no fabricated data: a contact/action field is only ever set on the output
 * when the source record actually carries a non-empty value for it.
 */

/** Replace `_`/`-` with spaces, capitalise the first letter of each word. Exported for reuse by the new card components (e.g. `destinationType`, `reportingMethods`). */
export function humanizeKey(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Strips everything except digits and a leading `+` so the value is safe to use in a `tel:` href. Exported for reuse by the new card components. */
export function toDialablePhone(phone: string): string {
  return phone.replace(/[^0-9+]/g, "");
}

function joinReasonDetails(reasons: MockMatchReason[]): string | undefined {
  if (reasons.length === 0) return undefined;
  return reasons.map((r) => r.detail).join(" ");
}

export function microcardToResourceItem(
  record: PublishedMicrocard,
  _reasons: MockMatchReason[]
): TriageResourceItem {
  let href: string | undefined;
  if (record.cta.type === "open_safe_external_link" || record.cta.type === "open_internal_route") {
    href = record.cta.target;
  }

  return {
    id: record.id,
    title: record.title,
    category: record.cardType ? humanizeKey(record.cardType) : "Guidance",
    description: record.summary,
    actionLabel: "Open",
    href,
  };
}

/**
 * `record.publicDisclaimer` is intentionally NOT dropped, but a
 * `TriageResourceItem` has no disclaimer field of its own (and we must not
 * invent one on that shared type) — callers render this separately as
 * page-level supplementary text (e.g. once beneath the "Rights & Legal
 * Information" group heading) rather than per-card.
 */
export function rightsContentDisclaimer(record: PublishedRightsContent): string | undefined {
  return record.publicDisclaimer;
}

export function rightsContentToResourceItem(
  record: PublishedRightsContent,
  _reasons: MockMatchReason[]
): TriageResourceItem {
  return {
    id: record.id,
    title: record.title,
    category: "Know Your Rights",
    description: record.summary,
    actionLabel: "Open",
    href: "/dashboard?view=resources",
  };
}

export function organisationToSupportOption(
  record: PublishedSupportOrganisation,
  reasons: MockMatchReason[],
  order: number
): TriageSupportOption {
  const hasPhone = typeof record.phone === "string" && record.phone.trim().length > 0;
  const hasWebsite = typeof record.website === "string" && record.website.trim().length > 0;

  const jurisdiction =
    record.jurisdictions.length > 0
      ? record.jurisdictions.join(", ")
      : record.australiaWide
        ? "Australia-wide"
        : undefined;

  return {
    id: record.id,
    name: record.name,
    category: record.organisationType ? humanizeKey(record.organisationType) : "Support service",
    description: record.shortDescription ?? record.fullDescription ?? "",
    recommendationLabel: "Recommended for you",
    recommendationPriority: "recommended",
    phoneDisplay: hasPhone ? record.phone : undefined,
    phoneDial: hasPhone ? toDialablePhone(record.phone as string) : undefined,
    url: hasWebsite ? record.website : undefined,
    jurisdiction,
    availability: record.openingHours,
    reason: joinReasonDetails(reasons),
    emergencyOnly: record.emergencyService,
    order,
  };
}

export function professionalToAdvocateCard(
  record: PublishedSupportProfessional,
  reasons: MockMatchReason[]
): TriageAdvocateCard {
  const hasPhone = typeof record.phone === "string" && record.phone.trim().length > 0;
  const hasEmail = typeof record.email === "string" && record.email.trim().length > 0;
  const hasBookingUrl = typeof record.bookingUrl === "string" && record.bookingUrl.trim().length > 0;

  return {
    id: record.id,
    displayName: record.displayName ?? record.fullName,
    professionalType: humanizeKey(record.professionalType),
    roleTitle: record.jobTitle,
    summary: record.shortIntroduction,
    verificationStatus: record.verificationStatus,
    languages: record.languages,
    costType: record.costType,
    phoneDisplay: hasPhone ? record.phone : undefined,
    phoneDial: hasPhone ? toDialablePhone(record.phone as string) : undefined,
    email: hasEmail ? record.email : undefined,
    bookingUrl: hasBookingUrl ? record.bookingUrl : undefined,
    reasons: reasons.map((r) => r.detail),
  };
}

export function destinationToReportingCard(
  record: PublishedReportingDestination,
  reasons: MockMatchReason[]
): TriageReportingDestinationCard {
  const hasPhone = typeof record.phone === "string" && record.phone.trim().length > 0;
  const hasOnlineReportingUrl =
    typeof record.onlineReportingUrl === "string" && record.onlineReportingUrl.trim().length > 0;

  return {
    id: record.id,
    name: record.name,
    destinationType: humanizeKey(record.destinationType),
    description: record.description,
    // Passed through verbatim — never coerce "unknown" to "no" or omit it.
    anonymousReporting: record.anonymousReporting,
    emergencySuitability: record.emergencySuitability,
    reportingMethods: record.reportingMethods.map(humanizeKey),
    phoneDisplay: hasPhone ? record.phone : undefined,
    phoneDial: hasPhone ? toDialablePhone(record.phone as string) : undefined,
    onlineReportingUrl: hasOnlineReportingUrl ? record.onlineReportingUrl : undefined,
    reportingInstructions: record.reportingInstructions,
    publicDisclaimer: record.publicDisclaimer,
    reasons: reasons.map((r) => r.detail),
  };
}
