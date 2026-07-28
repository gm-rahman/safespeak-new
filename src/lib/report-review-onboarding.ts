"use client";

import type { Route } from "next";

import type { ReportBuilderOverview } from "@/lib/report-builder-view-model";
import type { ReportDestinationPreview } from "@/lib/reports-client";

/**
 * Canonical step ids for the guided "Review your incident" onboarding that
 * runs entirely under `view=reportsubmissiondetails`. Distinct from the
 * details page's own pre-report onboarding steps (language/community/
 * information/privacy/services/report) and from `report`, which already
 * names the editable Incident Builder form step - "preview" is used instead
 * of the reference wording "report" for stage 3 to avoid colliding with
 * that existing step id.
 */
export type ReportReviewOnboardingStepId =
  | "review"
  | "next"
  | "preview"
  | "destination"
  | "consent"
  | "complete";

export type ReportReviewOnboardingStepConfig = {
  id: ReportReviewOnboardingStepId;
  label: string;
  queryValue: string;
  previous: ReportReviewOnboardingStepId | null;
  next: ReportReviewOnboardingStepId | null;
  order: number;
  requiresDestination: boolean;
  requiresConsent: boolean;
  allowDirectAccess: boolean;
};

export const REPORT_REVIEW_ONBOARDING_STEPS: Record<
  ReportReviewOnboardingStepId,
  ReportReviewOnboardingStepConfig
> = {
  review: {
    id: "review",
    label: "Review",
    queryValue: "review",
    previous: null,
    next: "next",
    order: 0,
    requiresDestination: false,
    requiresConsent: false,
    allowDirectAccess: true,
  },
  next: {
    id: "next",
    label: "Next",
    queryValue: "next",
    previous: "review",
    next: "preview",
    order: 1,
    requiresDestination: false,
    requiresConsent: false,
    allowDirectAccess: true,
  },
  preview: {
    id: "preview",
    label: "Report",
    queryValue: "preview",
    previous: "next",
    next: "destination",
    order: 2,
    requiresDestination: false,
    requiresConsent: false,
    allowDirectAccess: true,
  },
  destination: {
    id: "destination",
    label: "Destination",
    queryValue: "destination",
    previous: "preview",
    next: "consent",
    order: 3,
    requiresDestination: false,
    requiresConsent: false,
    allowDirectAccess: true,
  },
  consent: {
    id: "consent",
    label: "Consent",
    queryValue: "consent",
    previous: "destination",
    next: "complete",
    order: 4,
    requiresDestination: true,
    requiresConsent: false,
    allowDirectAccess: false,
  },
  complete: {
    id: "complete",
    label: "Complete",
    queryValue: "complete",
    previous: "consent",
    next: null,
    order: 5,
    requiresDestination: true,
    requiresConsent: true,
    allowDirectAccess: false,
  },
};

export const REPORT_REVIEW_ONBOARDING_STEP_ORDER: ReportReviewOnboardingStepConfig[] =
  Object.values(REPORT_REVIEW_ONBOARDING_STEPS).sort(
    (a, b) => a.order - b.order
  );

export function isReportReviewOnboardingStep(
  value: string | null | undefined
): value is ReportReviewOnboardingStepId {
  return Boolean(value) && value! in REPORT_REVIEW_ONBOARDING_STEPS;
}

export function reportReviewOnboardingStepHref(
  step: ReportReviewOnboardingStepId,
  fromTriage: boolean
): Route {
  const suffix = fromTriage ? "&fromTriage=1" : "";
  return `/dashboard?view=reportsubmissiondetails&step=${step}${suffix}` as Route;
}

/** Australian jurisdiction options for the Destination stage's jurisdiction selector. */
export const AU_JURISDICTIONS: Array<{ code: string; label: string }> = [
  { code: "auto", label: "Auto (use my current location)" },
  { code: "NSW", label: "New South Wales" },
  { code: "VIC", label: "Victoria" },
  { code: "QLD", label: "Queensland" },
  { code: "WA", label: "Western Australia" },
  { code: "SA", label: "South Australia" },
  { code: "TAS", label: "Tasmania" },
  { code: "ACT", label: "Australian Capital Territory" },
  { code: "NT", label: "Northern Territory" },
];

export type DestinationCapabilities = {
  information: boolean;
  reportPreparation: boolean;
  externalContact: boolean;
  secureSharing: boolean;
};

export type DestinationOption = {
  id: string;
  name: string;
  description: string;
  reason?: string;
  jurisdiction?: string;
  capabilities: DestinationCapabilities;
  source: "backend" | "manual";
  phoneDial?: string;
  phoneDisplay?: string;
  href?: string;
};

/**
 * Builds the manual/local-demo destination directory from the same
 * triage-derived services already shown on the editable report step
 * (Police Assistance Line, Victims Services, Healthdirect, Triple Zero,
 * etc.), so the Destination stage has a safe fallback that needs no
 * backend report id.
 */
export function buildManualDestinationOptions(
  overview: ReportBuilderOverview | null
): DestinationOption[] {
  if (!overview) return [];

  return overview.services.map((service) => ({
    id: `manual-${service.id}`,
    name: service.name,
    description: service.description,
    reason: service.reason,
    jurisdiction: service.jurisdiction,
    source: "manual" as const,
    phoneDial: service.phoneDial,
    phoneDisplay: service.phoneDisplay,
    href: service.url,
    capabilities: {
      information: true,
      reportPreparation: true,
      externalContact: Boolean(service.phoneDial || service.url),
      secureSharing: false,
    },
  }));
}

export function mapBackendDestinationPreview(
  preview: ReportDestinationPreview
): DestinationOption {
  const canAutoSend = Boolean(preview.deliveryReadiness?.canAutoSend);

  return {
    id: preview.destinationId,
    name: preview.destinationName,
    description: preview.reason,
    reason: preview.reason,
    jurisdiction: preview.jurisdiction,
    source: "backend",
    phoneDisplay: preview.contactPhone,
    href: preview.endpoint,
    capabilities: {
      information: true,
      reportPreparation: true,
      externalContact: Boolean(preview.contactPhone || preview.contactEmail),
      secureSharing: canAutoSend,
    },
  };
}
