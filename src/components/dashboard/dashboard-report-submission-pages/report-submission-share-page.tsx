"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  IconAlertCircle,
  IconArrowRight,
  IconCheck,
  IconChevronLeft,
  IconClock,
  IconInfoCircleFilled,
  IconLoader2,
  IconMail,
  IconPhone,
  IconShare,
  IconShieldCheck,
} from "@tabler/icons-react";

import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import { useConsentGate } from "@/hooks/use-consent-gate";
import {
  type AuthorityMatch,
  formatChannel,
  formatDestinationType,
  rankAuthorityMatches,
} from "@/lib/report-authority-routing";
import {
  type PreparedSubmissionStatus,
  getReportFlowDraft,
  mergeReportFlowDraft,
} from "@/lib/report-flow";
import {
  type ReportDestinationPreview,
  type ReportSubmissionRecord,
  getReport,
  getReportDestinations,
  getReportStatus,
  listReportSubmissions,
  submitReportToDestination,
} from "@/lib/reports-client";

function getSummaryText(
  draftSummary?: string,
  destination?: ReportDestinationPreview | null
): string {
  return (
    draftSummary?.trim() ||
    destination?.payloadPreview?.summary?.trim() ||
    "Prepared report summary"
  );
}

function getRequiredInfoLabel(match: AuthorityMatch | null): string {
  if (!match) {
    return "No recipient selected";
  }

  return match.missingRequiredInfo.length
    ? match.missingRequiredInfo.join(", ")
    : "Complete";
}

function isActualDeliveryStatus(status?: string): boolean {
  return status === "submitted" || status === "acknowledged";
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

  return "prepared_only";
}

function getDeliveryActionLabel(match: AuthorityMatch | null): string {
  if (match?.deliveryReadiness?.status === "config_missing") {
    return "Record attempt - no external send";
  }

  if (match?.deliveryReadiness?.status === "manual_action") {
    return "Prepare manual follow-up";
  }

  return "Confirm and send through SafeSpeak";
}

function getDeliveryReadinessCopy(match: AuthorityMatch | null): string | null {
  if (!match?.deliveryReadiness) {
    return null;
  }

  if (match.deliveryReadiness.status === "config_missing") {
    const issues = match.deliveryReadiness.configurationIssues.join(" ");

    return `This destination is not fully configured for outbound delivery yet. ${issues} SafeSpeak can record the attempt, but no external report will be sent.`;
  }

  if (match.deliveryReadiness.status === "manual_action") {
    return "This destination requires manual follow-up. SafeSpeak will prepare an auditable handoff record, but it will not send the report externally.";
  }

  return "This destination has an automated delivery channel configured. SafeSpeak will only send after your consent and final confirmation.";
}

function getShareNotice(submission: ReportSubmissionRecord): string {
  if (submission.actuallySent || isActualDeliveryStatus(submission.status)) {
    return submission.externalReference
      ? `Report sent and recorded with external reference ${submission.externalReference}.`
      : "Report sent through the configured SafeSpeak delivery channel.";
  }

  if (submission.status === "config_missing") {
    return "Sharing was recorded, but no external report was sent because partner delivery is not fully configured.";
  }

  if (submission.status === "requires_manual_action") {
    return "Sharing was recorded for manual follow-up. No external report was sent by SafeSpeak.";
  }

  return "Sharing outcome has been recorded in SafeSpeak.";
}

function ReportSubmissionSharePage() {
  const reportDraft = useMemo(() => getReportFlowDraft(), []);
  const preparedSubmission = reportDraft?.preparedSubmission ?? null;
  const {
    pendingConsentRequirement,
    isGrantingConsent,
    captureConsentError,
    clearPendingConsent,
    grantPendingConsent,
  } = useConsentGate();
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
  const [selectedDestinationId, setSelectedDestinationId] = useState<
    string | null
  >(reportDraft?.selectedDestinationId ?? preparedSubmission?.destinationId ?? null);
  const [pendingShareDestinationId, setPendingShareDestinationId] = useState<
    string | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);
  const [shareNotice, setShareNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!reportDraft?.reportId) {
      setIsLoadingDestinations(false);
      return;
    }

    let isActive = true;
    setIsLoadingDestinations(true);

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
        setLatestSubmission(
          matchedSubmission ??
            (shouldUseFallbackSubmission ? (submissions[0] ?? null) : null)
        );
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }

        setShareError(
          error instanceof Error
            ? error.message
            : "Admin-managed destinations could not be loaded."
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
  ]);

  const preferredDestinationId =
    selectedDestinationId ??
    latestSubmission?.destinationId ??
    preparedSubmission?.destinationId ??
    reportDraft?.selectedDestinationId;

  const authorityMatches = useMemo(
    () =>
      rankAuthorityMatches({
        destinations: destinationOptions,
        draft: reportDraft,
        preferredDestinationId,
        preparedSubmission,
      }),
    [
      destinationOptions,
      preferredDestinationId,
      preparedSubmission,
      reportDraft,
    ]
  );

  const primaryMatch = authorityMatches[0] ?? null;

  useEffect(() => {
    if (!authorityMatches.length) {
      return;
    }

    const hasSelectedMatch = authorityMatches.some(
      (match) => match.destinationId === selectedDestinationId
    );

    if (!selectedDestinationId || !hasSelectedMatch) {
      setSelectedDestinationId(authorityMatches[0].destinationId);
    }
  }, [authorityMatches, selectedDestinationId]);

  const selectedMatch =
    authorityMatches.find(
      (match) => match.destinationId === selectedDestinationId
    ) ??
    primaryMatch ??
    null;
  const selectedDestination = selectedMatch
    ? (destinationOptions.find(
        (destination) =>
          destination.destinationId === selectedMatch.destinationId
      ) ?? null)
    : null;
  const missingRequiredInfo =
    selectedDestination?.missingRequiredInfo ??
    selectedMatch?.missingRequiredInfo ??
    [];
  const summaryText = getSummaryText(reportDraft?.summary, selectedDestination);
  const evidenceCount =
    reportDraft?.evidenceIds?.length ??
    selectedDestination?.payloadPreview?.evidence?.length ??
    0;
  const requiredConsentFlags =
    selectedDestination?.requiredConsentFlags ??
    (selectedMatch?.consentRequired ? ["report_destination_submit"] : []);
  const canSubmit =
    Boolean(reportDraft?.reportId) &&
    Boolean(selectedDestination) &&
    !latestSubmission &&
    !missingRequiredInfo.length &&
    !isSubmitting;

  const submitToDestination = async (destinationId: string) => {
    if (!reportDraft?.reportId) {
      setShareError(
        "This draft needs a backend SafeSpeak report before it can be shared through the platform."
      );
      return;
    }

    const destination = destinationOptions.find(
      (option) => option.destinationId === destinationId
    );

    if (!destination) {
      setShareError(
        "This recipient is not available from the admin-managed destination list anymore."
      );
      return;
    }

    if (destination.missingRequiredInfo.length) {
      setShareError(
        `Review recipients first. This destination still needs: ${destination.missingRequiredInfo.join(", ")}.`
      );
      return;
    }

    setIsSubmitting(true);
    setShareError(null);
    setShareNotice(null);

    try {
      const submission = await submitReportToDestination(reportDraft.reportId, {
        destinationId,
        anonymityMode: "identified",
        notes: `Shared from SafeSpeak secure report sharing: ${destination.destinationName}`,
        confirmConsent: true,
      });

      mergeReportFlowDraft({
        selectedDestinationId: destination.destinationId,
        latestSubmissionId: submission._id,
        preparedSubmission: {
          destinationId: destination.destinationId,
          destinationName: destination.destinationName,
          destinationType: destination.destinationType,
          channel: destination.channel,
          status: toPreparedSubmissionStatus(submission.status),
          missingRequiredInfo: destination.missingRequiredInfo,
          reason: destination.reason,
          message: submission.deliveryMessage,
          actuallySent:
            submission.actuallySent ?? isActualDeliveryStatus(submission.status),
          updatedAt: new Date().toISOString(),
        },
      });
      setLatestSubmission(submission);
      setReportStatus(submission.status);
      setShareNotice(getShareNotice(submission));
      setPendingShareDestinationId(null);
    } catch (error) {
      if (captureConsentError(error)) {
        setPendingShareDestinationId(destinationId);
        return;
      }

      setShareError(
        error instanceof Error
          ? error.message
          : "Prepared information could not be shared."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShareSelected = () => {
    if (selectedDestination) {
      void submitToDestination(selectedDestination.destinationId);
    }
  };

  const handleAllowSharingConsent = async () => {
    try {
      const consent = await grantPendingConsent();

      if (!consent || !pendingShareDestinationId) {
        return;
      }

      await submitToDestination(pendingShareDestinationId);
    } catch (error) {
      if (captureConsentError(error)) {
        return;
      }

      setShareError(
        error instanceof Error
          ? error.message
          : "Sharing consent could not be saved."
      );
    }
  };

  const handleDeclineSharingConsent = () => {
    setPendingShareDestinationId(null);
    clearPendingConsent();
    setShareError("No report was sent. The report remains prepared only.");
  };
  const deliveryReadinessCopy = getDeliveryReadinessCopy(selectedMatch);
  const deliveryActionLabel = getDeliveryActionLabel(selectedMatch);

  return (
    <div className="px-6 pb-12 pt-12">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex h-[60px] items-center justify-between border-b border-[#d9e2ee] px-6 py-[10px]">
          <Link
            href="/dashboard?view=reportsubmissionsuccess"
            className="inline-flex items-center gap-2 text-[#111827]"
          >
            <IconChevronLeft size={18} stroke={2} />
            <span className="inline-block text-[13px] font-bold leading-[20px]">
              Prepared Report
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
          <div className="mx-auto max-w-[660px] text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
              Secure sharing
            </p>
            <h3 className="mt-1 text-[22px] font-bold text-[#10243d]">
              Share report securely
            </h3>
            <p className="mt-2 text-[12px] leading-[18px] text-[#7789a1]">
              Confirm the recommended authority, consent, and report package
              before SafeSpeak sends anything to an external department.
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                SafeSpeak reference
              </p>
              <p className="mt-1 text-[13px] font-bold text-[#1f2a3a]">
                {reportRef ?? "Draft only"}
              </p>
            </div>
            <div className="rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                Current status
              </p>
              <p className="mt-1 text-[13px] font-bold text-[#1f2a3a]">
                {reportStatus}
              </p>
            </div>
            <div className="rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                Evidence
              </p>
              <p className="mt-1 text-[13px] font-bold text-[#1f2a3a]">
                {evidenceCount} item{evidenceCount === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          {pendingConsentRequirement ? (
            <div className="mt-4">
              <ConsentRequiredCard
                requirement={pendingConsentRequirement}
                isSubmitting={isGrantingConsent || isSubmitting}
                onAllow={() => {
                  void handleAllowSharingConsent();
                }}
                onDecline={handleDeclineSharingConsent}
              />
            </div>
          ) : null}

          {shareError ? (
            <div className="mt-4 rounded-[12px] border border-[#fde2e2] bg-[#fff7f7] px-4 py-3 text-[11px] leading-[16px] text-[#b45353]">
              <span className="inline-flex items-start gap-2">
                <IconAlertCircle size={14} className="mt-0.5 shrink-0" />
                {shareError}
              </span>
            </div>
          ) : null}

          {shareNotice ? (
            <div className="mt-4 rounded-[12px] border border-[#d7f3e4] bg-[#f3fbf7] px-4 py-3 text-[11px] leading-[16px] text-[#0b8b54]">
              <span className="inline-flex items-start gap-2">
                <IconShieldCheck size={14} className="mt-0.5 shrink-0" />
                {shareNotice}
              </span>
            </div>
          ) : null}

          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="space-y-4">
              <article className="rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
                      Recommended recipient
                    </p>
                    <h4 className="mt-1 text-[20px] font-bold text-[#10243d]">
                      {selectedMatch?.destinationName ??
                        "No authority selected"}
                    </h4>
                  </div>
                  {isLoadingDestinations ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-[#f8fbff] px-3 py-1 text-[10px] font-semibold text-[#60728a]">
                      <IconLoader2 size={12} className="animate-spin" />
                      Checking admin records
                    </span>
                  ) : selectedMatch ? (
                    <span className="inline-flex h-8 items-center rounded-full bg-[#0f5d9f] px-3 text-[10px] font-bold text-white">
                      Match: {selectedMatch.confidence}%
                    </span>
                  ) : null}
                </div>

                {selectedMatch ? (
                  <>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedMatch.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex rounded-full border border-[#d6e4f4] bg-[#f8fbff] px-2.5 py-1 text-[10px] font-semibold text-[#526982]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-[12px] leading-[18px] text-[#60728a]">
                      {selectedMatch.reason}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                          Department type
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                          {formatDestinationType(selectedMatch.destinationType)}
                        </p>
                      </div>
                      <div className="rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                          Secure channel
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                          {formatChannel(selectedMatch.channel)}
                        </p>
                      </div>
                      <div className="rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                          Jurisdiction
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                          {selectedMatch.jurisdiction}
                        </p>
                      </div>
                      <div className="rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                          Required info
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                          {getRequiredInfoLabel(selectedMatch)}
                        </p>
                      </div>
                      <div className="rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2 sm:col-span-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                          Delivery readiness
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                          {selectedMatch.deliveryReadiness?.status ===
                          "config_missing"
                            ? "Needs partner setup"
                            : selectedMatch.deliveryReadiness?.status ===
                                "manual_action"
                              ? "Manual follow-up required"
                              : "Automated channel ready"}
                        </p>
                      </div>
                    </div>

                    {selectedMatch.contactPhone || selectedMatch.contactEmail ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedMatch.contactPhone ? (
                          <a
                            href={`tel:${selectedMatch.contactPhone.replace(/[^\d+]/g, "")}`}
                            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-white px-3 text-[10px] font-semibold text-[#526982]"
                          >
                            <IconPhone size={12} />
                            Call contact
                          </a>
                        ) : null}
                        {selectedMatch.contactEmail ? (
                          <a
                            href={`mailto:${selectedMatch.contactEmail}`}
                            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-white px-3 text-[10px] font-semibold text-[#526982]"
                          >
                            <IconMail size={12} />
                            Email contact
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <p className="mt-3 text-[12px] leading-[18px] text-[#60728a]">
                    No active admin-managed destination is available for this
                    report yet.
                  </p>
                )}
              </article>

              <article className="rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                    Other available matches
                  </p>
                  <Link
                    href="/dashboard?view=reportsubmissionreview"
                    className="text-[10px] font-semibold text-[#0f5d9f]"
                  >
                    Review recipients
                  </Link>
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {authorityMatches.length ? (
                    authorityMatches.slice(0, 4).map((match) => {
                      const isSelected =
                        match.destinationId === selectedMatch?.destinationId;

                      return (
                        <button
                          key={match.destinationId}
                          type="button"
                          onClick={() => {
                            setSelectedDestinationId(match.destinationId);
                            setShareError(null);
                          }}
                          className={`rounded-[12px] border p-3 text-left transition ${
                            isSelected
                              ? "border-[#0f5d9f] bg-[#eef6ff]"
                              : "border-[#e2ebf5] bg-white hover:bg-[#f8fbff]"
                          }`}
                        >
                          <span className="flex items-start justify-between gap-2">
                            <span className="text-[11px] font-bold leading-[15px] text-[#1f2a3a]">
                              {match.destinationName}
                            </span>
                            {isSelected ? (
                              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0f5d9f] text-white">
                                <IconCheck size={12} />
                              </span>
                            ) : null}
                          </span>
                          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]">
                            {formatDestinationType(match.destinationType)} -{" "}
                            {match.confidence}%
                          </span>
                        </button>
                      );
                    })
                  ) : (
                    <div className="rounded-[12px] border border-[#e2ebf5] bg-white p-3 text-[10px] leading-[16px] text-[#60728a] md:col-span-2">
                      Admin-managed police, legal, eSafety, and support
                      destinations will appear here when available.
                    </div>
                  )}
                </div>
              </article>
            </section>

            <section className="space-y-4">
              <article className="rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f7ef] text-[#0b8b54]">
                    <IconInfoCircleFilled size={14} />
                  </span>
                  <h4 className="text-[15px] font-bold text-[#1f2a3a]">
                    Report package
                  </h4>
                </div>
                <dl className="mt-4 space-y-3">
                  <div className="rounded-[12px] border border-[#edf2f8] bg-[#f9fbfe] px-3 py-2">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                      Summary
                    </dt>
                    <dd className="mt-1 line-clamp-4 text-[11px] leading-[16px] text-[#526982]">
                      {summaryText}
                    </dd>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-[12px] border border-[#edf2f8] bg-[#f9fbfe] px-3 py-2">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                        Anonymity
                      </dt>
                      <dd className="mt-1 text-[11px] font-semibold text-[#526982]">
                        Identified
                      </dd>
                    </div>
                    <div className="rounded-[12px] border border-[#edf2f8] bg-[#f9fbfe] px-3 py-2">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                        Consent flags
                      </dt>
                      <dd className="mt-1 text-[11px] font-semibold text-[#526982]">
                        {requiredConsentFlags.length
                          ? requiredConsentFlags.join(", ")
                          : "Standard sharing consent"}
                      </dd>
                    </div>
                  </div>
                </dl>
              </article>

              <article className="rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#eef6ff] text-[#0f5d9f]">
                    <IconShieldCheck size={14} />
                  </span>
                  <h4 className="text-[15px] font-bold text-[#1f2a3a]">
                    Final confirmation
                  </h4>
                </div>

                <div className="mt-4 space-y-2 text-[11px] leading-[16px] text-[#60728a]">
                  {!reportDraft?.reportId ? (
                    <p className="rounded-[10px] border border-[#fdeccf] bg-[#fff9ef] px-3 py-2 text-[#9a5b12]">
                      This draft needs a backend SafeSpeak report before it can
                      be shared through the platform.
                    </p>
                  ) : null}
                  {selectedMatch && !selectedDestination ? (
                    <p className="rounded-[10px] border border-[#fdeccf] bg-[#fff9ef] px-3 py-2 text-[#9a5b12]">
                      This prepared contact is not currently available in the
                      active admin destination list.
                    </p>
                  ) : null}
                  {missingRequiredInfo.length ? (
                    <p className="rounded-[10px] border border-[#fdeccf] bg-[#fff9ef] px-3 py-2 text-[#9a5b12]">
                      Review recipients first. This authority still needs:{" "}
                      {missingRequiredInfo.join(", ")}.
                    </p>
                  ) : null}
                  {latestSubmission ? (
                    <p className="rounded-[10px] border border-[#d7f3e4] bg-[#f3fbf7] px-3 py-2 text-[#0b8b54]">
                      {latestSubmission.actuallySent ||
                      isActualDeliveryStatus(latestSubmission.status)
                        ? "A sent delivery is already recorded for"
                        : "A non-sent delivery outcome is already recorded for"}{" "}
                      {latestSubmission.destinationName}.
                    </p>
                  ) : null}
                  {!latestSubmission && deliveryReadinessCopy ? (
                    <p className="rounded-[10px] border border-[#dbe7f4] bg-[#f8fbff] px-3 py-2 text-[#526982]">
                      {deliveryReadinessCopy}
                    </p>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={handleShareSelected}
                  disabled={!canSubmit}
                  className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#ff8f00] px-5 text-[11px] font-bold text-white shadow-[0_10px_22px_rgba(255,143,0,0.28)] transition hover:bg-[#ec8200] disabled:cursor-not-allowed disabled:bg-[#ffd39b] disabled:text-white/80"
                >
                  {isSubmitting ? (
                    <IconLoader2 size={14} className="animate-spin" />
                  ) : (
                    <IconShare size={13} />
                  )}
                  {deliveryActionLabel}
                </button>

                <Link
                  href="/dashboard?view=reportsubmissionsuccess"
                  className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-[#dbe7f4] bg-white px-5 text-[11px] font-bold text-[#526982] transition hover:bg-[#f8fbff]"
                >
                  Back to prepared summary
                  <IconArrowRight size={13} />
                </Link>
              </article>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionSharePage };
