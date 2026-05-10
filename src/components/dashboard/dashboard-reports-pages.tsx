"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  IconAlertCircle,
  IconChevronLeft,
  IconChevronRight,
  IconFolderFilled,
  IconLoader2,
  IconSearch,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import {
  getReport,
  getReportTimeline,
  listReports,
  type ReportRecord,
} from "@/lib/reports-client";
import { cn } from "@/lib/utils";

import { localIntelligenceMapSrc } from "./dashboard-shared";

function normalizeReportStatus(status?: string): "in-review" | "submitted" | "draft" {
  if (status === "submitted") {
    return "submitted";
  }

  if (status === "in_review" || status === "in-review") {
    return "in-review";
  }

  return "draft";
}

function ReportStatusChip({ status }: { status?: string }) {
  const { t } = useTranslation();
  const normalizedStatus = normalizeReportStatus(status);
  const statusStyles: Record<
    "in-review" | "submitted" | "draft",
    { label: string; className: string; iconWrapClassName: string }
  > = {
    "in-review": {
      label: t("dashboard.reports.statusInReview"),
      className: "bg-[#e8f1ff] text-[#1d72d8]",
      iconWrapClassName: "bg-[#d9e8ff] text-[#1d72d8]",
    },
    submitted: {
      label: t("dashboard.reports.statusSubmitted"),
      className: "bg-[#e8f8ef] text-[#1b8f4b]",
      iconWrapClassName: "bg-[#d7f1e4] text-[#1b8f4b]",
    },
    draft: {
      label: t("dashboard.reports.statusDraft"),
      className: "bg-[#fff3e2] text-[#c97b00]",
      iconWrapClassName: "bg-[#ffe8c7] text-[#c97b00]",
    },
  };

  const styles = statusStyles[normalizedStatus];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold",
        styles.className
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", styles.iconWrapClassName)}
      />
      {styles.label}
    </span>
  );
}

function ReportsHistoryPage() {
  const { t } = useTranslation();
  const [reports, setReports] = useState<ReportRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    void listReports()
      .then((result) => {
        if (!isActive) {
          return;
        }

        setReports(result);
        setLoadError(null);
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error ? error.message : "Reports could not be loaded."
        );
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.reports.yourReports")}
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <article className="mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f8fbff] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#deecff] text-[#1d72d8]">
              <IconFolderFilled size={14} />
            </span>
            <h2 className="mt-2 text-[30px] font-extrabold leading-[1.03] text-[#1f2a3a] sm:text-[36px]">
              {t("dashboard.reports.yourIncidentHistory")}
            </h2>
            <p className="mt-1 text-xs text-[#7b8ca2]">
              {t("dashboard.reports.secureRecords")}
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[760px]">
            <IconSearch
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9babc0]"
            />
            <input
              type="text"
              placeholder={t("dashboard.reports.searchPlaceholder")}
              className="h-10 w-full rounded-full border border-[#dce6f2] bg-white px-9 text-xs text-[#1f2a3a] outline-none placeholder:text-[#96a7bc] focus:border-[#cbd9ea]"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-[#0f5d9f] px-3 py-1 text-[10px] font-bold text-white">
              {t("dashboard.reports.allReports")}
            </span>
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#60728a]">
              {t("dashboard.reports.drafts")}
            </span>
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#60728a]">
              {t("dashboard.reports.inReview")}
            </span>
          </div>

          <div className="mt-3 space-y-2">
            {loadError ? (
              <div className="rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-3 text-[11px] text-[#b45353]">
                <span className="inline-flex items-center gap-1.5">
                  <IconAlertCircle size={12} />
                  {loadError}
                </span>
              </div>
            ) : null}
            {isLoading ? (
              <div className="inline-flex items-center gap-2 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3 text-[11px] text-[#60728a]">
                <IconLoader2 size={14} className="animate-spin" />
                Loading reports...
              </div>
            ) : null}
            {reports.map((report) => (
              <Link
                key={report._id}
                href={`/dashboard/reports/${report._id}`}
                className="group flex items-center justify-between rounded-[14px] border border-[#e3ebf5] bg-white p-3 transition hover:border-[#cfddee] hover:shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
              >
                <div className="min-w-0 pr-2">
                  <p className="truncate text-sm font-bold text-[#1f2a3a]">
                    {report.context || report.incidentType || "SafeSpeak report"}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-[#74869d]">
                    {report._id} | {report.createdAt ?? "Draft"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ReportStatusChip status={report.status} />
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0f5d9f] text-white transition group-hover:bg-[#0b4f89]">
                    <IconChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <article className="rounded-xl border border-[#e2eaf4] bg-white p-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                {t("dashboard.reports.totalReports")}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-[#0f5d9f]">{reports.length}</p>
            </article>
            <article className="rounded-xl border border-[#e2eaf4] bg-white p-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                {t("dashboard.reports.resolvedCases")}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-[#1b8f4b]">
                {reports.filter((report) => normalizeReportStatus(report.status) === "submitted").length}
              </p>
            </article>
          </div>
        </article>
      </div>
    </div>
  );
}

function ReportOverviewPage({ reportId }: { reportId?: string }) {
  const { t } = useTranslation();
  const [report, setReport] = useState<ReportRecord | null>(null);
  const [timeline, setTimeline] = useState<Array<Record<string, unknown>>>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!reportId) {
      return;
    }

    let isActive = true;

    void Promise.all([getReport(reportId), getReportTimeline(reportId)])
      .then(([nextReport, nextTimeline]) => {
        if (!isActive) {
          return;
        }

        setReport(nextReport);
        setTimeline(nextTimeline);
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error ? error.message : "Report could not be loaded."
        );
      });

    return () => {
      isActive = false;
    };
  }, [reportId]);

  const reportTitle = report?.context || report?.incidentType || "SafeSpeak report";
  const reportNarrative =
    report?.originalNarrative ||
    String(report?.structuredFields?.what ?? "No narrative captured yet.");
  const reportLocation = String(report?.structuredFields?.where ?? "Location not captured yet.");
  const reportCreatedAt = report?.createdAt ?? "Draft";
  const reportSupportKey = report?._id?.slice(-6) ?? "N/A";

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard/reports"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.reports.reportOverview")}
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.55fr_1fr]">
          <article className="rounded-[16px] border border-[#dce5f1] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5">
            {loadError ? (
              <div className="mb-3 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[11px] text-[#b45353]">
                <span className="inline-flex items-center gap-1.5">
                  <IconAlertCircle size={12} />
                  {loadError}
                </span>
              </div>
            ) : null}
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f5d9f]">
                  {t("dashboard.reports.incidentNarrative")}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold leading-[1.05] text-[#1f2a3a] sm:text-[30px]">
                  {reportTitle}
                </h2>
              </div>
              <ReportStatusChip status={report?.status} />
            </div>

            <div className="mt-3 rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] p-3">
              <p className="text-[11px] font-semibold leading-[1.6] text-[#405368]">
                &ldquo;{reportNarrative}&rdquo;
              </p>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <article className="rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                  {t("dashboard.reports.reportId")}
                </p>
                <p className="mt-1 text-xs font-extrabold text-[#1f2a3a]">
                  {report?._id ?? "Pending"}
                </p>
              </article>
              <article className="rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                  {t("dashboard.reports.created")}
                </p>
                <p className="mt-1 text-xs font-extrabold text-[#1f2a3a]">
                  {reportCreatedAt}
                </p>
              </article>
              <article className="rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                  {t("dashboard.reports.status")}
                </p>
                <div className="mt-1">
                  <ReportStatusChip status={report?.status} />
                </div>
              </article>
            </div>
            {timeline.length ? (
              <div className="mt-4 rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                  Backend timeline
                </p>
                <p className="mt-1 text-[11px] text-[#60728a]">
                  {timeline.length} timeline events available.
                </p>
              </div>
            ) : null}
          </article>

          <aside className="rounded-[16px] border border-[#dce5f1] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f5d9f]">
              {t("dashboard.reports.reportMetadata")}
            </p>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-[#f8fbff] p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b6]">
                  {t("dashboard.reports.lastUpdate")}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                  22 Feb
                </p>
              </div>
              <div className="rounded-lg bg-[#f8fbff] p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b6]">
                  {t("dashboard.reports.supportKey")}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                  {reportSupportKey}
                </p>
              </div>
              <div className="col-span-2 rounded-lg bg-[#f8fbff] p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b6]">
                  {t("dashboard.reports.location")}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[#1f2a3a]">
                  {reportLocation}
                </p>
              </div>
            </div>

            <div className="relative mt-3 h-[170px] overflow-hidden rounded-[12px] border border-[#d7e1ee] bg-[#d9e6d2]">
              {localIntelligenceMapSrc ? (
                <iframe
                  title="Report incident map"
                  src={localIntelligenceMapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(130deg,#cfdebf_0%,#e3edd8_45%,#cedebf_100%)]" />
              )}
              <span className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold text-[#334155]">
                {reportLocation}
              </span>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/dashboard?view=reportsubmissiondetails"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(15,93,159,0.25)]"
              >
                {t("dashboard.reports.editReport")}
              </Link>
              <Link
                href="/dashboard?view=reportsubmissionreview"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#f59e0b] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(245,158,11,0.3)]"
              >
                {t("dashboard.reports.proceedToSubmission")}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export { ReportOverviewPage, ReportsHistoryPage };
