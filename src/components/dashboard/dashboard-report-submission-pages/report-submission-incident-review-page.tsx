"use client";

import type { Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useRef } from "react";

import { IconArrowRight } from "@tabler/icons-react";

import { getAssistantTriageSource } from "@/lib/assistant-triage";
import { buildReportBuilderOverview } from "@/lib/report-builder-view-model";
import { getResolvedReportFlowDraft } from "@/lib/report-flow";

import { ReportSubmissionFrame } from "./report-submission-frame";

const toTitleCase = (value: string): string =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const safetyStatusLabel = (
  value: "safe" | "unsafe" | "unknown" | "" | undefined
): string | null => {
  switch (value) {
    case "safe":
      return "Safe now";
    case "unsafe":
      return "Not safe";
    case "unknown":
      return "Not sure";
    default:
      return null;
  }
};

export function readField(
  structuredFields: Record<string, unknown> | undefined,
  key: string
): string | null {
  const raw = structuredFields?.[key];

  if (typeof raw !== "string") {
    return null;
  }

  const trimmed = raw.trim();

  return trimmed.length > 0 ? trimmed : null;
}

export function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8]">
        {label}
      </p>
      <p className="mt-1 text-[13px] leading-[1.5] text-[#1f2a3a]">{value}</p>
    </div>
  );
}

/**
 * Read-only incident review summary: matched category, safety status,
 * "what happened", optional structured fields, and the triage indicator.
 * Pure/presentational so it can be reused both by the standalone
 * `reportsubmissionincidentreview` view (below) and by Stage 1 ("Review
 * your incident") of the guided onboarding under `reportsubmissiondetails`.
 */
function IncidentReviewSummary({
  onEditDetails,
  onContinue,
  editLabel = "Edit details",
  continueLabel = "Continue",
}: {
  onEditDetails: () => void;
  onContinue: () => void;
  editLabel?: string;
  continueLabel?: string;
}) {
  const reportDraft = useMemo(() => getResolvedReportFlowDraft(), []);
  const triageOverview = useMemo(
    () => buildReportBuilderOverview(getAssistantTriageSource()),
    []
  );

  const structuredFields = reportDraft?.structuredFields;
  const whatHappened = readField(structuredFields, "what");
  const injuryInfo = readField(structuredFields, "injuries");
  const locationInfo = readField(structuredFields, "where");
  const whenInfo = readField(structuredFields, "when");
  const personInvolved = readField(structuredFields, "who");
  const witnessOrEvidence = readField(structuredFields, "witnesses");

  const matchedCategory = reportDraft?.incidentType
    ? toTitleCase(reportDraft.incidentType)
    : null;
  const safetyStatus = safetyStatusLabel(reportDraft?.safetyStatus);

  const hasIncidentOverview = Boolean(matchedCategory || safetyStatus);
  const optionalFieldRows = [
    injuryInfo ? { label: "Injury", value: injuryInfo } : null,
    locationInfo ? { label: "Where it happened", value: locationInfo } : null,
    whenInfo ? { label: "When it happened", value: whenInfo } : null,
    personInvolved
      ? { label: "Person involved", value: personInvolved }
      : null,
    witnessOrEvidence
      ? { label: "Witnesses / evidence", value: witnessOrEvidence }
      : null,
  ].filter((row): row is { label: string; value: string } => row !== null);

  return (
    <div className="mt-4">
      <div className="mb-4 rounded-[16px] border border-[#dce5f1] bg-[#f8fbff] p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
          Review before you decide
        </p>
        <p className="mt-1 text-[12px] leading-[1.55] text-[#60728a]">
          SafeSpeak has organised the information you provided. Review it
          below before deciding what happens next. You can still edit
          anything, and nothing is submitted, shared, or sent merely by
          viewing this page. The classification below is not a formal legal
          finding.
        </p>
      </div>

      {hasIncidentOverview ? (
        <div
          className="mb-4 rounded-[16px] border border-[#dce5f1] bg-white p-4"
          data-testid="incident-review-overview"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Incident overview
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {matchedCategory ? (
              <SummaryRow label="Matched category" value={matchedCategory} />
            ) : null}
            {safetyStatus ? (
              <SummaryRow label="Safety status" value={safetyStatus} />
            ) : null}
          </div>
        </div>
      ) : null}

      <div
        className="mb-4 rounded-[16px] border border-[#dce5f1] bg-white p-4"
        data-testid="incident-review-details"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
          What you told SafeSpeak
        </p>
        <div className="mt-3 space-y-3">
          <SummaryRow
            label="What happened"
            value={whatHappened ?? "Not provided yet"}
          />
          {optionalFieldRows.length ? (
            <div className="grid gap-3 border-t border-[#eef2f7] pt-3 sm:grid-cols-2">
              {optionalFieldRows.map((row) => (
                <SummaryRow key={row.label} label={row.label} value={row.value} />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {triageOverview ? (
        <div
          className="mb-4 rounded-[16px] border border-[#dce5f1] bg-white p-4"
          data-testid="incident-review-triage-indicator"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Triage indicator
          </p>
          <p className="mt-2 text-[12px] leading-[1.55] text-[#60728a]">
            {triageOverview.incident.disclaimer}
          </p>
          {triageOverview.matchedPathway.destination ? (
            <p className="mt-2 text-[12px] leading-[1.55] text-[#60728a]">
              <span className="font-semibold text-[#1f2a3a]">
                Suggested destination:
              </span>{" "}
              {triageOverview.matchedPathway.destination}. This is a
              suggestion only &ndash; SafeSpeak has not contacted this
              destination and no report has been sent.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mb-6 rounded-[16px] border border-[#dce5f1] bg-[#fffaf0] p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#a15c00]">
          Information notice
        </p>
        <p className="mt-1 text-[12px] leading-[1.55] text-[#7a5d33]">
          SafeSpeak provides information and report preparation only. This
          is not legal advice, and nothing is shared with any service
          automatically. Please confirm the details above are accurate
          before you continue.
        </p>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-[#e3ebf5] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onEditDetails}
          className="inline-flex h-11 items-center justify-center rounded-full border border-[#d7e1ee] bg-white px-6 text-xs font-bold text-[#334155] transition hover:bg-[#f8fbff]"
        >
          {editLabel}
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#0f5d9f] px-8 text-xs font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.2)] transition hover:bg-[#0b528d]"
        >
          {continueLabel}
          <IconArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

function ReportSubmissionIncidentReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromTriage = searchParams.get("fromTriage") === "1";
  const isNavigatingRef = useRef(false);

  const editDetailsHref = (
    fromTriage
      ? "/dashboard?view=reportsubmissiondetails&step=report&fromTriage=1"
      : "/dashboard?view=reportsubmissiondetails&step=report"
  ) as Route;

  const continueHref = (
    fromTriage
      ? "/dashboard?view=reportsubmissionreview&fromTriage=1"
      : "/dashboard?view=reportsubmissionreview"
  ) as Route;

  function handleEditDetails(): void {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    router.push(editDetailsHref);
  }

  function handleContinue(): void {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    router.push(continueHref);
  }

  return (
    <ReportSubmissionFrame
      title="Review your incident"
      subtitle="Check the information below before continuing to Evidence Review."
      step="incidentreview"
      skipSupportStep={!fromTriage}
      backHref={editDetailsHref}
      backLabel="Report details"
    >
      <IncidentReviewSummary
        onEditDetails={handleEditDetails}
        onContinue={handleContinue}
      />
    </ReportSubmissionFrame>
  );
}

export { ReportSubmissionIncidentReviewPage, IncidentReviewSummary };
