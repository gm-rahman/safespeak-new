"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  IconBoltFilled,
  IconChevronDown,
  IconChevronLeft,
  IconClock,
  IconEye,
  IconFolderFilled,
  IconInfoCircleFilled,
  IconShare,
} from "@tabler/icons-react";

import {
  getReport,
  getReportStatus,
  listReportSubmissions,
  type ReportSubmissionRecord,
} from "@/lib/reports-client";
import { getReportFlowDraft } from "@/lib/report-flow";

function ReportSubmissionSuccessPage() {
  const reportDraft = useMemo(() => getReportFlowDraft(), []);
  const [reportStatus, setReportStatus] = useState<string>("prepared");
  const [reportRef, setReportRef] = useState<string | null>(reportDraft?.reportId ?? null);
  const [latestSubmission, setLatestSubmission] =
    useState<ReportSubmissionRecord | null>(null);

  useEffect(() => {
    if (!reportDraft?.reportId) {
      return;
    }

    void Promise.all([
      getReport(reportDraft.reportId),
      getReportStatus(reportDraft.reportId),
      listReportSubmissions(reportDraft.reportId),
    ])
      .then(([report, status, submissions]) => {
        setReportRef(report.refNo ?? report._id);
        setReportStatus(status.current);
        setLatestSubmission(
          submissions.find(
            (submission) => submission._id === reportDraft.latestSubmissionId
          ) ?? submissions[0] ?? null
        );
      })
      .catch(() => setReportStatus("prepared"));
  }, [reportDraft?.latestSubmissionId, reportDraft?.reportId]);

  return (
    <div className="px-6 pb-12 pt-12">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex h-[60px] items-center justify-between border-b border-[#d9e2ee] px-6 py-[10px]">
          <Link
            href="/dashboard?view=reportsubmissionreview"
            className="inline-flex items-center gap-2 text-[#111827]"
          >
            <IconChevronLeft size={18} stroke={2} />
            <span
              className="inline-block text-[13px] font-bold leading-[20px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Detailed Explanations
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
          <p className="mx-auto max-w-[520px] text-center text-[12px] leading-[18px] text-[#7789a1]">
            Your SafeSpeak report now has a tracked sharing record. The current
            backend status and selected contact details are shown below.
          </p>
          <div className="mt-4 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
              SafeSpeak reference
            </p>
            <p className="mt-1 text-[14px] font-bold text-[#1f2a3a]">
              {reportRef ?? "Draft only"}
            </p>
              <p className="mt-1 text-[10px] text-[#60728a]">
                Current status: {reportStatus}
              </p>
            {latestSubmission ? (
              <p className="mt-1 text-[10px] text-[#60728a]">
                Selected contact: {latestSubmission.destinationName} via{" "}
                {latestSubmission.channel}
              </p>
            ) : null}
            {latestSubmission?.externalReference ? (
              <p className="mt-1 text-[10px] font-semibold text-[#0b8b54]">
                External reference: {latestSubmission.externalReference}
              </p>
            ) : null}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1.55fr_1fr]">
            <article className="rounded-[12px] border border-[#e3ebf4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe8d2] text-[#ff8f00]">
                    <IconBoltFilled size={11} />
                  </span>
                  <h4 className="text-[18px] font-bold text-[#ff7f1a]">
                    Guidance
                  </h4>
                </div>
                <button
                  type="button"
                  className="inline-flex h-5 w-5 items-center justify-center text-[#95a4b9]"
                >
                  <IconChevronDown
                    size={12}
                    stroke={1.8}
                    className="rotate-180"
                  />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <section>
                  <h5 className="text-[12px] font-bold leading-[18px] text-[#1f2a3a]">
                    Review before sharing
                  </h5>
                  <p className="mt-1 text-[10px] leading-[16px] text-[#7f90a6]">
                    This is general information, not a confirmation that an
                    external agency acknowledged your report. Keep details
                    accurate and share only when it feels safe.
                  </p>
                </section>

                <section>
                  <h5 className="text-[12px] font-bold leading-[18px] text-[#1f2a3a]">
                    Support access
                  </h5>
                  <p className="mt-1 text-[10px] leading-[16px] text-[#7f90a6]">
                    You can use SafeSpeak support options to find legal,
                    community, interpreter, or safety planning help before any
                    external sharing.
                  </p>
                </section>
              </div>

              <div className="mt-4 rounded-[10px] border border-[#edf2f8] bg-[#f6f8fc] p-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#ff8f00]">
                  Guidance only
                </p>
                <p className="mt-1 text-[9px] leading-[14px] text-[#7f90a6]">
                  These cards are explanatory guidance. They are not an agency
                  receipt, except where an acknowledgement reference is recorded.
                </p>
              </div>
            </article>

            <div className="space-y-4">
              <article className="relative overflow-hidden rounded-[14px] bg-[#0f5d9f] p-4 text-white shadow-[0_10px_22px_rgba(15,93,159,0.28)]">
                <span className="bg-white/18 inline-flex h-6 w-6 items-center justify-center rounded-full">
                  <IconInfoCircleFilled size={12} />
                </span>
                <h4 className="mt-6 text-[16px] font-bold leading-[22px]">
                  Cultural Support
                </h4>
                <p className="mt-2 max-w-[220px] text-[10px] leading-[15px] text-white/85">
                  Consider culturally safe support and interpreter needs before
                  deciding what to share.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[14px] bg-[#0f5d9f] p-4 text-white shadow-[0_10px_22px_rgba(15,93,159,0.28)]">
                <span className="bg-white/18 inline-flex h-6 w-6 items-center justify-center rounded-full">
                  <IconEye size={12} />
                </span>
                <h4 className="mt-6 text-[16px] font-bold leading-[22px]">
                  What Happens Next
                </h4>
                <p className="mt-2 max-w-[220px] text-[10px] leading-[15px] text-white/85">
                  {latestSubmission
                    ? `This report is tracked as ${latestSubmission.status} for ${latestSubmission.destinationName}.`
                    : "Your report remains in SafeSpeak with the status shown above until a supported backend action changes it."}
                </p>
                <span className="bg-white/12 pointer-events-none absolute bottom-[-26px] right-[-18px] h-[90px] w-[90px] rounded-full" />
              </article>
            </div>
          </div>

          {latestSubmission ? (
            <div className="mt-4 rounded-[12px] border border-[#e5ebf4] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                Submission record
              </p>
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
                  Delivery artifacts: {latestSubmission.deliveryArtifacts.length}
                </p>
              ) : null}
              {latestSubmission.status === "requires_manual_action" ? (
                <p className="mt-1 text-[10px] font-semibold leading-[16px] text-[#9a5b12]">
                  Manual follow-up is required before this destination can treat the report as sent.
                </p>
              ) : null}
              {latestSubmission.expectedNextSteps.length ? (
                <p className="mt-1 text-[10px] leading-[16px] text-[#60728a]">
                  Next steps: {latestSubmission.expectedNextSteps.join(" / ")}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-4 rounded-[12px] border border-[#e5ebf4] bg-white">
            <div className="grid grid-cols-1 divide-y divide-[#edf2f8] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <Link
                href="/dashboard?view=reportsubmissionhistory"
                className="inline-flex h-[56px] items-center justify-center gap-2 text-[11px] font-semibold text-[#ff8f00]"
              >
                <IconFolderFilled size={13} />
                Save to History
              </Link>
              <button
                type="button"
                className="inline-flex h-[56px] items-center justify-center gap-2 text-[11px] font-semibold text-[#ff8f00]"
              >
                <IconShare size={13} />
                Sharing recorded
              </button>
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
