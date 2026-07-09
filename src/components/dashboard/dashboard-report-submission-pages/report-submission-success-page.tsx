"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  IconArrowRight,
  IconBoltFilled,
  IconBrain,
  IconCheck,
  IconChevronLeft,
  IconClock,
  IconEye,
  IconFolderFilled,
  IconInfoCircleFilled,
  IconLoader2,
  IconMail,
  IconPhone,
  IconShare,
  IconSparkles,
} from "@tabler/icons-react";

import {
  formatChannel,
  formatDestinationType,
  rankAuthorityMatches,
} from "@/lib/report-authority-routing";
import {
  buildReportFlowHref,
  type PreparedSubmissionStatus,
  getResolvedReportFlowDraft,
} from "@/lib/report-flow";
import {
  type ReportDestinationPreview,
  type ReportSubmissionRecord,
  getReport,
  getReportDestinations,
  getReportStatus,
  listReportSubmissions,
} from "@/lib/reports-client";
import { mergeReportFlowDraft } from "@/lib/report-flow";

function isActualDeliveryStatus(status?: string): boolean {
  return status === "submitted" || status === "acknowledged";
}

function getSubmissionOutcomeLabel(submission: ReportSubmissionRecord): string {
  if (submission.actuallySent || isActualDeliveryStatus(submission.status)) {
    return "Sent through SafeSpeak";
  }

  if (submission.status === "config_missing") {
    return "Not sent - partner setup needed";
  }

  if (submission.status === "requires_manual_action") {
    return "Prepared for manual follow-up";
  }

  if (submission.status === "failed") {
    return "Delivery failed";
  }

  return submission.status;
}

function getPreparedStatusLabel(status?: string): string {
  if (status === "ready_to_share") {
    return "Ready for secure sharing";
  }

  if (status === "config_missing") {
    return "Not sent - partner setup needed";
  }

  if (status === "requires_manual_action") {
    return "Prepared for manual follow-up";
  }

  if (status === "failed") {
    return "Delivery failed";
  }

  return "Prepared";
}

function toPreparedSubmissionStatus(status?: string): PreparedSubmissionStatus {
  if (isActualDeliveryStatus(status)) {
    return status as PreparedSubmissionStatus;
  }

  if (
    status === "requires_manual_action" ||
    status === "config_missing" ||
    status === "failed"
  ) {
    return status;
  }

  return "ready_to_share";
}

function ReportSubmissionSuccessPage() {
  const reportDraft = useMemo(() => getResolvedReportFlowDraft(), []);
  const preparedSubmission = reportDraft?.preparedSubmission ?? null;
  const [reportStatus, setReportStatus] = useState<string>("prepared");
  const [reportRef, setReportRef] = useState<string | null>(
    reportDraft?.reportId ?? null
  );
  const [latestSubmission, setLatestSubmission] =
    useState<ReportSubmissionRecord | null>(null);
  const [destinationOptions, setDestinationOptions] = useState<
    ReportDestinationPreview[]
  >([]);
  const [isLoadingDestinations, setIsLoadingDestinations] = useState(
    Boolean(reportDraft?.reportId)
  );
  const [loadNotice, setLoadNotice] = useState<string | null>(null);

  const preferredDestinationId =
    latestSubmission?.destinationId ??
    reportDraft?.selectedDestinationId;
  const preparedStatusLabel = getPreparedStatusLabel(
    preparedSubmission?.status
  );
  const shareHref = buildReportFlowHref("reportsubmissionshare", {
    reportId: reportDraft?.reportId,
    selectedDestinationId:
      latestSubmission?.destinationId ??
      reportDraft?.selectedDestinationId,
    latestSubmissionId:
      latestSubmission?._id ?? reportDraft?.latestSubmissionId,
  });
  const reviewHref = buildReportFlowHref("reportsubmissionreview", {
    reportId: reportDraft?.reportId,
    selectedDestinationId:
      latestSubmission?.destinationId ??
      reportDraft?.selectedDestinationId,
  });

  useEffect(() => {
    if (!reportDraft?.reportId) {
      setIsLoadingDestinations(false);
      return;
    }

    let isActive = true;
    setIsLoadingDestinations(true);
    setLoadNotice(null);

    void Promise.all([
      getReport(reportDraft.reportId),
      getReportStatus(reportDraft.reportId),
      listReportSubmissions(reportDraft.reportId),
      getReportDestinations(reportDraft.reportId),
    ])
      .then(([report, status, submissions, destinations]) => {
        if (!isActive) {
          return;
        }

        const matchedSubmission = reportDraft.latestSubmissionId
          ? (submissions.find(
              (submission) => submission._id === reportDraft.latestSubmissionId
            ) ?? null)
          : null;
        const shouldUseFallbackSubmission =
          !reportDraft.preparedSubmission ||
          [
            "submitted",
            "acknowledged",
            "requires_manual_action",
            "config_missing",
            "failed",
          ].includes(reportDraft.preparedSubmission.status);

        setReportRef(report.refNo ?? report._id);
        setReportStatus(status.current);
        setDestinationOptions(destinations);
        const resolvedLatestSubmission =
          matchedSubmission ??
          (shouldUseFallbackSubmission ? (submissions[0] ?? null) : null);
        setLatestSubmission(resolvedLatestSubmission);
        mergeReportFlowDraft({
          reportId: report._id,
          selectedDestinationId:
            resolvedLatestSubmission?.destinationId ??
            reportDraft.selectedDestinationId,
          latestSubmissionId: resolvedLatestSubmission?._id,
          preparedSubmission: resolvedLatestSubmission
            ? {
                destinationId: resolvedLatestSubmission.destinationId,
                destinationName: resolvedLatestSubmission.destinationName,
                destinationType: resolvedLatestSubmission.destinationType,
                channel: resolvedLatestSubmission.channel,
                status: toPreparedSubmissionStatus(
                  resolvedLatestSubmission.status
                ),
                missingRequiredInfo:
                  resolvedLatestSubmission.missingRequiredInfo,
                message: resolvedLatestSubmission.deliveryMessage,
                actuallySent:
                  resolvedLatestSubmission.actuallySent ??
                  isActualDeliveryStatus(resolvedLatestSubmission.status),
                updatedAt: new Date().toISOString(),
              }
            : reportDraft.preparedSubmission?.status === "ready_to_share"
              ? reportDraft.preparedSubmission
              : undefined,
        });
      })
      .catch(() => {
        if (!isActive) {
          return;
        }

        setReportStatus("prepared");
        setLoadNotice(
          "Admin-managed destinations could not be refreshed. Reopen secure sharing to refresh the latest recipient data."
        );
      })
      .finally(() => {
        if (isActive) {
          setIsLoadingDestinations(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [
    reportDraft?.latestSubmissionId,
    reportDraft?.preparedSubmission,
    reportDraft?.reportId,
    reportDraft?.selectedDestinationId,
  ]);

  const authorityMatches = useMemo(
    () =>
      rankAuthorityMatches({
        destinations: destinationOptions,
        draft: reportDraft,
        preferredDestinationId,
      }),
    [destinationOptions, preferredDestinationId, reportDraft]
  );

  const primaryMatch = authorityMatches[0] ?? null;
  const alternativeMatches = authorityMatches.slice(1, 4);
  const selectedDestination =
    destinationOptions.find(
      (destination) => destination.destinationId === preferredDestinationId
    ) ?? null;
  const selectedContactName =
    latestSubmission?.destinationName ?? selectedDestination?.destinationName;
  const selectedContactChannel =
    latestSubmission?.channel ?? selectedDestination?.channel;
  const checklistItems = [
    {
      label: "Confirm recipient",
      done: Boolean(selectedDestination ?? primaryMatch),
    },
    {
      label: "Review evidence",
      done: Boolean(reportDraft?.evidenceIds?.length || reportDraft?.summary),
    },
    {
      label: "Complete secure share",
      done: Boolean(latestSubmission),
    },
    {
      label: "Record delivery outcome",
      done: Boolean(latestSubmission),
    },
  ];

  return (
    <div className="px-6 pb-12 pt-12">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex h-[60px] items-center justify-between border-b border-[#d9e2ee] px-6 py-[10px]">
          <Link
            href={reviewHref}
            className="inline-flex items-center gap-2 text-[#111827]"
          >
            <IconChevronLeft size={18} stroke={2} />
            <span
              className="inline-block text-[13px] font-bold leading-[20px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Evidence Review
            </span>
          </Link>
          <Link
            href="/dashboard?view=reportsubmissionhistory"
            aria-label="View report history"
            className="inline-flex h-6 w-6 items-center justify-center text-[#7f91a8] transition hover:text-[#5f728a]"
          >
            <IconClock size={14} />
          </Link>
        </div>

        <article className="mt-5 rounded-[16px] border border-[#dce5f1] bg-[#f7fafe] p-4 sm:p-6">
          <p className="mx-auto max-w-[620px] text-center text-[12px] leading-[18px] text-[#7789a1]">
            SafeSpeak reviewed this report and matched it against
            admin-managed police, legal, eSafety, and support destinations.
            Open secure sharing when you are ready to confirm the recipient and
            final sharing step.
          </p>

          <div className="mt-4 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
              SafeSpeak reference
            </p>
            <p className="mt-1 text-[14px] font-bold text-[#1f2a3a]">
              {reportRef ?? "No backend report yet"}
            </p>
            <p className="mt-1 text-[10px] text-[#60728a]">
              Current status: {reportStatus}
            </p>
            {selectedContactName && selectedContactChannel ? (
              <p className="mt-1 text-[10px] text-[#60728a]">
                Selected contact: {selectedContactName} via{" "}
                {formatChannel(selectedContactChannel)}
              </p>
            ) : null}
            {!latestSubmission && selectedDestination ? (
              <p className="mt-1 text-[10px] font-semibold text-[#9a5b12]">
                {preparedStatusLabel}. No external sharing was recorded yet.
              </p>
            ) : null}
            {!latestSubmission && preparedSubmission?.message ? (
              <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                {preparedSubmission.message}
              </p>
            ) : null}
                  {latestSubmission?.externalReference ? (
              <p className="mt-1 text-[10px] font-semibold text-[#0b8b54]">
                External reference: {latestSubmission.externalReference}
              </p>
            ) : null}
            {latestSubmission ? (
              <p
                className={`mt-1 text-[10px] font-semibold ${
                  latestSubmission.actuallySent ||
                  isActualDeliveryStatus(latestSubmission.status)
                    ? "text-[#0b8b54]"
                    : "text-[#9a5b12]"
                }`}
              >
                {getSubmissionOutcomeLabel(latestSubmission)}
              </p>
            ) : null}
          </div>

          {loadNotice ? (
            <div className="mt-4 rounded-[12px] border border-[#fdeccf] bg-[#fff9ef] px-4 py-3 text-[11px] leading-[16px] text-[#9a5b12]">
              {loadNotice}
            </div>
          ) : null}

          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.35fr_0.9fr]">
            <article className="rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f2ff] text-[#0f5d9f]">
                    <IconBrain size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                      AI-assisted routing
                    </p>
                    <h4 className="text-[18px] font-bold text-[#1f2a3a]">
                      Recommended authority match
                    </h4>
                  </div>
                </div>
                {isLoadingDestinations ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-[#f8fbff] px-3 py-1 text-[10px] font-semibold text-[#60728a]">
                    <IconLoader2 size={12} className="animate-spin" />
                    Checking admin records
                  </span>
                ) : null}
              </div>

              {primaryMatch ? (
                <div className="mt-4 rounded-[14px] border border-[#cfe0f3] bg-[#f8fbff] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
                        Primary recommendation
                      </p>
                      <h5 className="mt-1 text-[20px] font-bold leading-[26px] text-[#10243d]">
                        {primaryMatch.destinationName}
                      </h5>
                    </div>
                    <span className="inline-flex h-8 items-center rounded-full bg-[#0f5d9f] px-3 text-[10px] font-bold text-white">
                      Best match: {primaryMatch.confidence}%
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {primaryMatch.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full border border-[#d6e4f4] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#526982]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-[12px] leading-[18px] text-[#60728a]">
                    {primaryMatch.reason}
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[12px] border border-[#e4edf7] bg-white px-3 py-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                        Admin channel
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                        {formatChannel(primaryMatch.channel)}
                      </p>
                    </div>
                    <div className="rounded-[12px] border border-[#e4edf7] bg-white px-3 py-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                        Jurisdiction
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                        {primaryMatch.jurisdiction}
                      </p>
                    </div>
                  </div>

                  {primaryMatch.contactPhone || primaryMatch.contactEmail ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {primaryMatch.contactPhone ? (
                        <a
                          href={`tel:${primaryMatch.contactPhone.replace(/[^\d+]/g, "")}`}
                          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-white px-3 text-[10px] font-semibold text-[#526982]"
                        >
                          <IconPhone size={12} />
                          Call contact
                        </a>
                      ) : null}
                      {primaryMatch.contactEmail ? (
                        <a
                          href={`mailto:${primaryMatch.contactEmail}`}
                          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-white px-3 text-[10px] font-semibold text-[#526982]"
                        >
                          <IconMail size={12} />
                          Email contact
                        </a>
                      ) : null}
                    </div>
                  ) : null}

                  {primaryMatch.missingRequiredInfo.length ? (
                    <p className="mt-3 rounded-[10px] border border-[#fdeccf] bg-[#fff9ef] px-3 py-2 text-[10px] font-semibold leading-[16px] text-[#9a5b12]">
                      This recipient still needs:{" "}
                      {primaryMatch.missingRequiredInfo.join(", ")}.
                    </p>
                  ) : null}
                </div>
              ) : destinationOptions.length === 0 && !isLoadingDestinations ? (
                <div className="mt-4 rounded-[14px] border border-[#dbe7f4] bg-[#f8fbff] p-5 text-center">
                  <p className="text-[13px] font-bold text-[#1f2a3a]">
                    No authority match is available yet.
                  </p>
                  <p className="mx-auto mt-2 max-w-[480px] text-[11px] leading-[17px] text-[#60728a]">
                    Create a backend report or add active destinations in the
                    admin dashboard so SafeSpeak can recommend where this report
                    should go.
                  </p>
                </div>
              ) : null}

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                    Other possible recipients
                  </p>
                  <Link
                    href="/dashboard?view=reportsubmissionreview"
                    className="text-[10px] font-semibold text-[#0f5d9f]"
                  >
                    Review recipients
                  </Link>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {alternativeMatches.length ? (
                    alternativeMatches.map((match) => (
                      <article
                        key={match.destinationId}
                        className="rounded-[12px] border border-[#e2ebf5] bg-white p-3"
                      >
                        <p className="text-[11px] font-bold leading-[15px] text-[#1f2a3a]">
                          {match.destinationName}
                        </p>
                        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]">
                          {formatDestinationType(match.destinationType)} -{" "}
                          {match.confidence}%
                        </p>
                        <p className="mt-2 line-clamp-3 text-[10px] leading-[15px] text-[#60728a]">
                          {match.reason}
                        </p>
                      </article>
                    ))
                  ) : (
                    <div className="rounded-[12px] border border-[#e2ebf5] bg-white p-3 text-[10px] leading-[16px] text-[#60728a] md:col-span-3">
                      Additional admin-managed destinations will appear here
                      when they match this incident type and jurisdiction.
                    </div>
                  )}
                </div>
              </div>
            </article>

            <div className="space-y-4">
              <article className="rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0da] text-[#ff8f00]">
                    <IconSparkles size={15} />
                  </span>
                  <h4 className="text-[15px] font-bold text-[#1f2a3a]">
                    Review checklist
                  </h4>
                </div>
                <div className="mt-4 space-y-2">
                  {checklistItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-[10px] border border-[#edf2f8] bg-[#f9fbfe] px-3 py-2"
                    >
                      <span className="text-[11px] font-semibold text-[#526982]">
                        {item.label}
                      </span>
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          item.done
                            ? "bg-[#dcfce7] text-[#16a34a]"
                            : "bg-[#edf2f8] text-[#90a3bb]"
                        }`}
                      >
                        <IconCheck size={12} />
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 rounded-[10px] border border-[#edf2f8] bg-[#f6f8fc] px-3 py-2 text-[10px] leading-[15px] text-[#60728a]">
                  Authority and department data is managed by admins. SafeSpeak
                  does not send anything until the user confirms sharing on the
                  next page.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[14px] bg-[#0f5d9f] p-4 text-white shadow-[0_10px_22px_rgba(15,93,159,0.28)]">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <IconInfoCircleFilled size={12} />
                </span>
                <h4 className="mt-6 text-[16px] font-bold leading-[22px]">
                  Cultural Support
                </h4>
                <p className="mt-2 max-w-[260px] text-[10px] leading-[15px] text-white/85">
                  Consider culturally safe support and interpreter needs before
                  deciding what to share.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[14px] bg-[#0f5d9f] p-4 text-white shadow-[0_10px_22px_rgba(15,93,159,0.28)]">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <IconEye size={12} />
                </span>
                <h4 className="mt-6 text-[16px] font-bold leading-[22px]">
                  What Happens Next
                </h4>
                <p className="mt-2 max-w-[260px] text-[10px] leading-[15px] text-white/85">
                  {latestSubmission
                    ? `This report is tracked as ${latestSubmission.status} for ${latestSubmission.destinationName}.`
                    : preparedSubmission?.status === "ready_to_share"
                      ? "This report is prepared and ready for secure sharing when you choose."
                      : primaryMatch
                        ? "Open secure sharing to confirm the recipient, consent, and final report submission."
                        : "Your report remains in SafeSpeak until a supported backend action changes it."}
                </p>
              </article>
            </div>
          </div>

          {latestSubmission || selectedDestination ? (
            <div className="mt-4 rounded-[12px] border border-[#e5ebf4] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                {latestSubmission ? "Submission record" : "Selected recipient"}
              </p>
              {latestSubmission ? (
                <>
                  <p className="mt-1 text-[12px] font-semibold text-[#1f2a3a]">
                    {latestSubmission.destinationName}
                  </p>
                  <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                    Status: {latestSubmission.status}
                    {latestSubmission.externalReference
                      ? ` - Ref ${latestSubmission.externalReference}`
                      : ""}
                  </p>
                  {latestSubmission.deliveryMessage ? (
                    <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                      Delivery note: {latestSubmission.deliveryMessage}
                    </p>
                  ) : null}
                  {latestSubmission.deliveryArtifacts?.length ? (
                    <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                      Delivery artifacts:{" "}
                      {latestSubmission.deliveryArtifacts.length}
                    </p>
                  ) : null}
                  {latestSubmission.status === "requires_manual_action" ? (
                    <p className="mt-1 text-[10px] font-semibold leading-[16px] text-[#9a5b12]">
                      Manual follow-up is required before this destination can
                      treat the report as sent.
                    </p>
                  ) : null}
                  {latestSubmission.status === "config_missing" ? (
                    <p className="mt-1 text-[10px] font-semibold leading-[16px] text-[#9a5b12]">
                      Partner delivery is not fully configured. SafeSpeak did
                      not send this report externally.
                    </p>
                  ) : null}
                  {latestSubmission.expectedNextSteps.length ? (
                    <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                      Next steps:{" "}
                      {latestSubmission.expectedNextSteps.join(" / ")}
                    </p>
                  ) : null}
                </>
              ) : selectedDestination ? (
                <>
                  <p className="mt-1 text-[12px] font-semibold text-[#1f2a3a]">
                    {selectedDestination.destinationName}
                  </p>
                  <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                    Status: {preparedStatusLabel}
                  </p>
                  {selectedDestination.missingRequiredInfo.length ? (
                    <p className="mt-1 text-[10px] font-semibold leading-[16px] text-[#9a5b12]">
                      Needs: {selectedDestination.missingRequiredInfo.join(", ")}
                    </p>
                  ) : null}
                  {preparedSubmission?.message ? (
                    <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                      {preparedSubmission?.message}
                    </p>
                  ) : null}
                </>
              ) : null}
            </div>
          ) : null}

          <div className="mt-4 rounded-[12px] border border-[#e5ebf4] bg-white">
            <div className="grid grid-cols-1 divide-y divide-[#edf2f8] lg:grid-cols-[0.75fr_1.25fr] lg:divide-x lg:divide-y-0">
              <Link
                href="/dashboard?view=reportsubmissionhistory"
                className="inline-flex min-h-[64px] items-center justify-center gap-2 px-4 text-[11px] font-semibold text-[#ff8f00]"
              >
                <IconFolderFilled size={13} />
                Save to History
              </Link>
              <div className="flex min-h-[64px] flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href={shareHref}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#ff8f00] px-5 text-[11px] font-bold text-white shadow-[0_10px_22px_rgba(255,143,0,0.28)] transition hover:bg-[#ec8200]"
                >
                  <IconShare size={13} />
                  Share report securely
                </Link>
                <Link
                  href={reviewHref}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#dbe7f4] bg-white px-5 text-[11px] font-bold text-[#526982] transition hover:bg-[#f8fbff]"
                >
                  Review recipients
                  <IconArrowRight size={13} />
                </Link>
                <span className="inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-[#9a5b12]">
                  <IconBoltFilled size={12} />
                  {latestSubmission
                    ? "Shared through SafeSpeak"
                    : selectedDestination
                      ? "Ready for secure sharing"
                      : "Awaiting recipient selection"}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[9px] text-[#a4b1c4]">
            {reportDraft?.reportId
              ? "Report status is synced with SafeSpeak."
              : "This draft remains local until a backend report is created."}
          </p>
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionSuccessPage };
