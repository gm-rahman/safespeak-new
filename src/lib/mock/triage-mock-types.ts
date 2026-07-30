// Phase 6 — presentational types for the two Triage entity kinds that have
// no existing presentational type in `src/lib/triage-view-model.ts`
// (Advocates/Counsellors and Reporting Destinations). Everything else reuses
// the existing `TriageResourceItem` / `TriageSupportOption` shapes — see
// `src/lib/mock/triage-adapters.ts`.

export interface TriageAdvocateCard {
  id: string;
  displayName: string;
  /** Human label, e.g. "Advocate", "Counsellor" — derived from PublishedSupportProfessional.professionalType. */
  professionalType: string;
  roleTitle?: string;
  summary?: string;
  /** PublishedSupportProfessional.verificationStatus, passed through verbatim — the component decides display label/style. */
  verificationStatus: string;
  languages: string[];
  costType?: string;
  phoneDisplay?: string;
  phoneDial?: string;
  email?: string;
  bookingUrl?: string;
  /** Human-readable reason.detail strings. */
  reasons: string[];
}

export interface TriageReportingDestinationCard {
  id: string;
  name: string;
  destinationType: string;
  description?: string;
  anonymousReporting: "yes" | "no" | "unknown";
  emergencySuitability: "yes" | "no" | "unknown";
  reportingMethods: string[];
  phoneDisplay?: string;
  phoneDial?: string;
  onlineReportingUrl?: string;
  reportingInstructions?: string;
  publicDisclaimer?: string;
  reasons: string[];
}
