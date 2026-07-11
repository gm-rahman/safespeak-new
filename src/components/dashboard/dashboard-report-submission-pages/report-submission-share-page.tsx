"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  IconAlertCircle,
  IconArrowRight,
  IconBoltFilled,
  IconCheck,
  IconChevronLeft,
  IconClock,
  IconFolderFilled,
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
  buildReportFlowHref,
  type PreparedSubmissionStatus,
  getResolvedReportFlowDraft,
  mergeReportFlowDraft,
} from "@/lib/report-flow";
import {
  createMockSubmission,
  getMockDestinations,
  getMockReportId,
  getMockReportRef,
  getMockReportStatus,
  REPORT_SUBMISSION_MOCK_MODE,
} from "@/lib/report-submission-mock";
import {
  type ReportDestinationPreview,
  type ReportSubmissionRecord,
  getReport,
  getReportDestinations,
  getReportStatus,
  listReportSubmissions,
  submitReportToDestination,
} from "@/lib/reports-client";

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

  return "ready_to_share";
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

function getPreparedStatusLabel(status?: PreparedSubmissionStatus): string {
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

  if (status === "submitted" || status === "acknowledged") {
    return "Shared through SafeSpeak";
  }

  return "Prepared";
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
  const reportDraft = useMemo(() => getResolvedReportFlowDraft(), []);
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
  >(reportDraft?.selectedDestinationId ?? null);
  const [pendingShareDestinationId, setPendingShareDestinationId] = useState<
    string | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);
  const [shareNotice, setShareNotice] = useState<string | null>(null);
  const [anonymityMode, setAnonymityMode] = useState<
    "identified" | "anonymous" | "pseudonymous"
  >(reportDraft?.shareAnonymityMode ?? "identified");
  const [shareNotes, setShareNotes] = useState(reportDraft?.shareNotes ?? "");

  useEffect(() => {
    if (REPORT_SUBMISSION_MOCK_MODE) {
      const mockDestinations = getMockDestinations(reportDraft);
      const selectedMockDestination =
        mockDestinations.find(
          (destination) =>
            destination.destinationId === reportDraft?.selectedDestinationId
        ) ??
        mockDestinations[0] ??
        null;
      const mockSubmission =
        selectedMockDestination && reportDraft?.latestSubmissionId
          ? createMockSubmission({
              draft: reportDraft,
              destination: selectedMockDestination,
              anonymityMode: reportDraft?.shareAnonymityMode ?? "identified",
              notes: reportDraft?.shareNotes,
            })
          : null;

      setReportRef(getMockReportRef());
      setReportStatus(getMockReportStatus(reportDraft));
      setDestinationOptions(mockDestinations);
      setLatestSubmission(mockSubmission);
      setSelectedDestinationId(
        reportDraft?.selectedDestinationId ??
          selectedMockDestination?.destinationId ??
          null
      );
      setShareError(null);
      setIsLoadingDestinations(false);
      mergeReportFlowDraft({
        reportId: getMockReportId(reportDraft),
        selectedDestinationId:
          reportDraft?.selectedDestinationId ??
          selectedMockDestination?.destinationId,
      });
      return;
    }

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
    reportDraft?.selectedDestinationId,
  ]);

  useEffect(() => {
    mergeReportFlowDraft({
      selectedDestinationId: selectedDestinationId ?? undefined,
      shareAnonymityMode: anonymityMode,
      shareNotes,
    });
  }, [anonymityMode, selectedDestinationId, shareNotes]);

  const preferredDestinationId =
    selectedDestinationId ??
    latestSubmission?.destinationId ??
    reportDraft?.selectedDestinationId;

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
  const evidenceCount =
    reportDraft?.evidenceIds?.length ??
    selectedDestination?.payloadPreview?.evidence?.length ??
    0;
  const alternativeMatches = authorityMatches
    .filter((match) => match.destinationId !== selectedMatch?.destinationId)
    .slice(0, 4);
  const canSubmit =
    Boolean(reportDraft?.reportId || REPORT_SUBMISSION_MOCK_MODE) &&
    Boolean(selectedDestination) &&
    !latestSubmission &&
    !missingRequiredInfo.length &&
    !isSubmitting;

  const submitToDestination = async (destinationId: string) => {
    if (REPORT_SUBMISSION_MOCK_MODE) {
      const destination = destinationOptions.find(
        (option) => option.destinationId === destinationId
      );

      if (!destination) {
        setShareError("This mock recipient is not available anymore.");
        return;
      }

      const submission = createMockSubmission({
        draft: reportDraft,
        destination,
        anonymityMode,
        notes:
          shareNotes.trim() ||
          `Mock shared from SafeSpeak: ${destination.destinationName}`,
      });

      mergeReportFlowDraft({
        reportId: getMockReportId(reportDraft),
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
          actuallySent: submission.actuallySent,
          updatedAt: new Date().toISOString(),
        },
      });
      setLatestSubmission(submission);
      setReportStatus(submission.status);
      setShareError(null);
      setShareNotice(getShareNotice(submission));
      setPendingShareDestinationId(null);
      return;
    }

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
        anonymityMode,
        notes:
          shareNotes.trim() ||
          `Shared from SafeSpeak secure report sharing: ${destination.destinationName}`,
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
          : "Sharing could not be completed."
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
    setShareError("No report was sent. The report remains ready for secure sharing.");
  };
  const deliveryReadinessCopy = getDeliveryReadinessCopy(selectedMatch);
  const deliveryActionLabel = getDeliveryActionLabel(selectedMatch);
  const preparedStatusLabel = getPreparedStatusLabel(
    latestSubmission
      ? toPreparedSubmissionStatus(latestSubmission.status)
      : reportDraft?.preparedSubmission?.status ?? "ready_to_share"
  );
  const selectedRecipientName =
    latestSubmission?.destinationName ??
    selectedDestination?.destinationName ??
    selectedMatch?.destinationName ??
    "No recipient selected";
  const selectedRecipientMessage = latestSubmission
    ? getShareNotice(latestSubmission)
    : missingRequiredInfo.length
      ? `Review recipients first. This authority still needs: ${missingRequiredInfo.join(", ")}.`
      : reportDraft?.preparedSubmission?.message ??
        "Recipient reviewed. Continue to secure sharing to confirm and send.";
  const readinessBadgeLabel = latestSubmission
    ? "Shared through SafeSpeak"
    : selectedDestination
      ? "Ready for secure sharing"
      : "Awaiting recipient selection";
  const reviewHref = buildReportFlowHref("reportsubmissionreview", {
    reportId: reportDraft?.reportId,
    selectedDestinationId:
      selectedDestination?.destinationId ??
      selectedDestinationId ??
      reportDraft?.selectedDestinationId,
    latestSubmissionId:
      latestSubmission?._id ?? reportDraft?.latestSubmissionId,
  });

  return (
    <div className="px-6 pb-12 pt-12">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex h-[60px] items-center justify-between border-b border-[#d9e2ee] px-6 py-[10px]">
          <Link
            href={reviewHref}
            className="inline-flex items-center gap-2 text-[#111827]"
          >
            <IconChevronLeft size={18} stroke={2} />
            <span className="inline-block text-[13px] font-bold leading-[20px]">
              Recipient Review
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
                {reportRef ?? "No backend report yet"}
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
                {selectedMatch ? (
                  <>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-[14px] border border-[#cfe0f3] bg-[#f8fbff] p-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
                          Primary recommendation
                        </p>
                        <h5 className="mt-1 text-[20px] font-bold text-[#10243d]">
                          {selectedMatch.destinationName}
                        </h5>
                      </div>
                      <span className="inline-flex h-8 items-center rounded-full bg-[#0f5d9f] px-3 text-[10px] font-bold text-white">
                        Best match: {selectedMatch.confidence}%
                      </span>
                    </div>

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
                  {alternativeMatches.length ? (
                    alternativeMatches.map((match) => {
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

            <section className="space-y-4" />
          </div>

          <div className="mt-4 rounded-[12px] border border-[#e5ebf4] bg-white px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
              Selected recipient
            </p>
            <p className="mt-1 text-[12px] font-semibold text-[#1f2a3a]">
              {selectedRecipientName}
            </p>
            <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
              Status: {preparedStatusLabel}
            </p>
            <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
              {selectedRecipientMessage}
            </p>
            {!latestSubmission && deliveryReadinessCopy ? (
              <p className="mt-2 rounded-[10px] border border-[#dbe7f4] bg-[#f8fbff] px-3 py-2 text-[10px] leading-[15px] text-[#526982]">
                {deliveryReadinessCopy}
              </p>
            ) : null}
          </div>

          <div className="mt-4 overflow-hidden rounded-[12px] border border-[#e5ebf4] bg-white">
            <div className="grid grid-cols-1 divide-y divide-[#edf2f8] lg:grid-cols-[0.75fr_1.25fr] lg:divide-x lg:divide-y-0">
              <Link
                href="/dashboard?view=reportsubmissionhistory"
                className="inline-flex min-h-[64px] items-center justify-center gap-2 px-4 text-[11px] font-semibold text-[#ff8f00]"
              >
                <IconFolderFilled size={13} />
                Save to History
              </Link>
              <div className="flex min-h-[64px] flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-center">
                <button
                  type="button"
                  onClick={handleShareSelected}
                  disabled={!canSubmit}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#ff8f00] px-5 text-[11px] font-bold text-white shadow-[0_10px_22px_rgba(255,143,0,0.28)] transition hover:bg-[#ec8200] disabled:cursor-not-allowed disabled:bg-[#ffd39b] disabled:text-white/80"
                >
                  {isSubmitting ? (
                    <IconLoader2 size={14} className="animate-spin" />
                  ) : (
                    <IconShare size={13} />
                  )}
                  Share report securely
                </button>
                <Link
                  href={reviewHref}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#dbe7f4] bg-white px-5 text-[11px] font-bold text-[#526982] transition hover:bg-[#f8fbff]"
                >
                  Review recipients
                  <IconArrowRight size={13} />
                </Link>
                <span className="inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-[#9a5b12]">
                  <IconBoltFilled size={12} />
                  {readinessBadgeLabel}
                </span>
              </div>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionSharePage };
