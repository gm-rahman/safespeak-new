"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

import {
  IconAlertCircle,
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheckFilled,
  IconCircleDotFilled,
  IconHeartFilled,
  IconLoader2,
  IconLockFilled,
  IconSearch,
  IconShieldFilled,
} from "@tabler/icons-react";

import {
  getReportStatus,
  listReports,
  type ReportRecord,
} from "@/lib/reports-client";

type HistoryStatus = "ACTION REQUIRED" | "SUBMITTED" | "DRAFT";

type HistoryReport = {
  id: string;
  status: HistoryStatus;
  title: string;
  team: string;
  date: string;
  icon: ReactNode;
  iconWrapClassName: string;
};

function normalizeHistoryStatus(status?: string): HistoryStatus {
  if (status === "submitted") {
    return "SUBMITTED";
  }

  if (status === "in_review" || status === "in-review") {
    return "ACTION REQUIRED";
  }

  return "DRAFT";
}

function getHistoryMeta(status: HistoryStatus): {
  team: string;
  icon: ReactNode;
  iconWrapClassName: string;
} {
  if (status === "ACTION REQUIRED") {
    return {
      team: "SafeSpeak review queue",
      icon: <IconShieldFilled size={14} />,
      iconWrapClassName: "bg-[#ece7ff] text-[#5d61f6]",
    };
  }

  if (status === "SUBMITTED") {
    return {
      team: "Saved in SafeSpeak",
      icon: <IconHeartFilled size={14} />,
      iconWrapClassName: "bg-[#ffe9ea] text-[#f26161]",
    };
  }

  return {
    team: "Draft saved safely",
    icon: <IconLockFilled size={14} />,
    iconWrapClassName: "bg-[#d4f4ed] text-[#0a9d8d]",
  };
}

function formatHistoryDate(value?: string) {
  if (!value) {
    return "DATE UNAVAILABLE";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value.toUpperCase();
  }

  return date
    .toLocaleDateString("en-AU", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

function toHistoryReport(report: ReportRecord, resolvedStatus?: string): HistoryReport {
  const historyStatus = normalizeHistoryStatus(resolvedStatus ?? report.status);
  const meta = getHistoryMeta(historyStatus);

  return {
    id: report._id,
    status: historyStatus,
    title: report.context || report.incidentType || "SafeSpeak report",
    team: meta.team,
    date: formatHistoryDate(report.updatedAt ?? report.createdAt),
    icon: meta.icon,
    iconWrapClassName: meta.iconWrapClassName,
  };
}

const statusClassNames: Record<HistoryReport["status"], string> = {
  "ACTION REQUIRED": "bg-[#fff1de] text-[#9a6a2e]",
  SUBMITTED: "bg-[#ebf0ff] text-[#526cc6]",
  DRAFT: "bg-[#eef1f5] text-[#5f6f83]",
};

function ReportSubmissionHistoryPage() {
  const [reports, setReports] = useState<HistoryReport[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "draft" | "action_required"
  >("all");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    void (async () => {
      try {
        const reportRecords = await listReports();
        const reportsWithStatuses = await Promise.all(
          reportRecords.map(async (report) => {
            try {
              const status = await getReportStatus(report._id);
              return toHistoryReport(report, status.current);
            } catch {
              return toHistoryReport(report);
            }
          })
        );

        if (!isActive) {
          return;
        }

        setReports(reportsWithStatuses);
        setLoadError(null);
      } catch (error) {
        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error ? error.message : "Report history could not be loaded."
        );
        setReports([]);
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, []);

  const filteredReports = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return reports.filter((report) => {
      if (activeFilter === "draft" && report.status !== "DRAFT") {
        return false;
      }

      if (
        activeFilter === "action_required" &&
        report.status !== "ACTION REQUIRED"
      ) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      return (
        report.title.toLowerCase().includes(normalizedSearch) ||
        report.team.toLowerCase().includes(normalizedSearch) ||
        report.id.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [activeFilter, reports, searchTerm]);

  const submittedCount = reports.filter(
    (report) => report.status === "SUBMITTED"
  ).length;
  const actionRequiredCount = reports.filter(
    (report) => report.status === "ACTION REQUIRED"
  ).length;

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=reportsubmissionrecommendations"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Your Reports
          </Link>
          <Link
            href="/dashboard?view=reportsubmissionrecommendations"
            className="text-xs font-medium text-[#7b8798]"
          >
            Cancel
          </Link>
        </div>

        <article className="mt-3 rounded-[20px] border border-[#dce5f1] bg-[#f7fafe] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#d9e7ff]">
              <span className="h-8 w-8 rounded-full bg-[#2f87ff] shadow-[0_0_0_6px_rgba(47,135,255,0.25)]" />
            </span>
            <h2 className="mt-5 text-[30px] font-extrabold leading-[1.05] text-[#1f2a3a] sm:text-[36px]">
              Your Incident History
            </h2>
            <p className="mt-1 text-xs text-[#7b8ca2]">
              SafeSpeak Secure Records
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1136px]">
            <IconSearch
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9babc0]"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search reports..."
              className="h-10 w-full rounded-[12px] border border-[#dce6f2] bg-white px-9 text-xs text-[#1f2a3a] outline-none placeholder:text-[#96a7bc]"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`inline-flex h-8 items-center rounded-full px-3 text-[10px] font-bold ${
                activeFilter === "all"
                  ? "bg-[#2f87ff] text-white"
                  : "bg-white text-[#60728a]"
              }`}
            >
              All Reports
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("draft")}
              className={`inline-flex h-8 items-center rounded-full px-3 text-[10px] font-semibold ${
                activeFilter === "draft"
                  ? "bg-[#2f87ff] text-white"
                  : "bg-white text-[#60728a]"
              }`}
            >
              Drafts
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("action_required")}
              className={`inline-flex h-8 items-center rounded-full px-3 text-[10px] font-semibold ${
                activeFilter === "action_required"
                  ? "bg-[#2f87ff] text-white"
                  : "bg-white text-[#60728a]"
              }`}
            >
              In Review
            </button>
          </div>

          <div className="mt-3 space-y-3">
            {loadError ? (
              <div className="rounded-md border border-[#F4C7C3] bg-[#FFF7F6] px-3 py-2 text-xs text-[#B42318]">
                <span className="inline-flex items-center gap-1.5">
                  <IconAlertCircle size={12} />
                  {loadError}
                </span>
              </div>
            ) : null}

            {isLoading ? (
              <div className="rounded-md bg-white px-3 py-8 text-center text-sm text-[#607B90]">
                <span className="inline-flex items-center gap-2">
                  <IconLoader2 size={14} className="animate-spin" />
                  Loading reports...
                </span>
              </div>
            ) : null}

            {!isLoading && filteredReports.length === 0 ? (
              <div className="rounded-md bg-white px-3 py-8 text-center text-sm text-[#607B90]">
                No reports matched this view.
              </div>
            ) : null}

            {filteredReports.map((report, index) => (
              <Link
                key={report.id}
                href={`/dashboard/reports/${report.id}`}
                className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#e3ebf5] bg-white p-3.5 transition hover:border-[#cfdaea] hover:shadow-[0_10px_20px_rgba(15,23,42,0.05)] sm:p-4"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${report.iconWrapClassName}`}
                  >
                    {report.icon}
                  </span>
                  <div className="min-w-0">
                    <span
                      className={`inline-flex rounded-[6px] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] ${statusClassNames[report.status]}`}
                    >
                      {report.status}
                    </span>
                    <p className="mt-1 truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]">
                      {report.title}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-[9px] text-[#7f8fa4]">
                      <IconCircleDotFilled size={8} />
                      {report.team}
                    </p>
                    <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.08em] text-[#97a6ba]">
                      {report.date}
                    </p>
                  </div>
                </div>

                <span
                  className={
                    index === 0
                      ? "inline-flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[14px] bg-[#0f5d9f] text-white shadow-[0_10px_20px_rgba(15,93,159,0.35)] transition group-hover:bg-[#0d4f88]"
                      : "inline-flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] border border-[#e4ebf5] bg-[#f9fbff] text-[#7f91a8] transition group-hover:border-[#ccd8e8] group-hover:bg-[#f2f7fd]"
                  }
                >
                  <IconChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <article className="flex items-center gap-3 rounded-[16px] border border-[#e3ebf5] bg-white p-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5d9f] text-white">
                <IconCircleDotFilled size={12} />
              </span>
              <div>
                <p className="text-[28px] font-extrabold leading-none text-[#1f2a3a]">
                  {reports.length}
                </p>
                <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#7f8fa4]">
                  Total Active
                </p>
              </div>
            </article>

            <article className="flex items-center gap-3 rounded-[16px] border border-[#e3ebf5] bg-white p-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#18b06c] text-white">
                <IconCircleCheckFilled size={12} />
              </span>
              <div>
                <p className="text-[28px] font-extrabold leading-none text-[#1f2a3a]">
                  {submittedCount}
                </p>
                <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#7f8fa4]">
                  Submitted
                </p>
              </div>
            </article>
          </div>

          <p className="mt-3 text-[10px] text-[#7f8fa4]">
            {actionRequiredCount} report
            {actionRequiredCount === 1 ? "" : "s"} currently need review or
            follow-up.
          </p>
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionHistoryPage };
