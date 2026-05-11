"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  IconAlertCircle,
  IconBoltFilled,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconLoader2,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";

import {
  getReport,
  getReportStatus,
  getReportTimeline,
  updateReport,
} from "@/lib/reports-client";
import { getReportFlowDraft } from "@/lib/report-flow";

type TimelineEntry = {
  id: string;
  chip:
    | "Who"
    | "What"
    | "Where"
    | "When"
    | "How"
    | "Witnesses"
    | "Repeated"
    | "Injuries"
    | "Evidence";
  value: string;
  label?: string;
  hint?: string;
  action?: string;
  isLocalOnly?: boolean;
};

type StatusHistoryEntry = {
  id: string;
  status: string;
  changedAt?: string;
  reason?: string;
};

const initialTimelineEntries: TimelineEntry[] = [
  {
    id: "info",
    chip: "Who",
    label: "Person of Interest",
    value: "Officer John Doe",
    hint: "* AI Suggested - 98% Confidence",
    action: "Edit Details",
  },
  {
    id: "what",
    chip: "What",
    value: "Verbal harassment incident...",
  },
  {
    id: "where",
    chip: "Where",
    value: "1234 Elm Street, Breakroom 4B",
  },
  {
    id: "when",
    chip: "When",
    value: "Oct 14, 2023 - 2:30 PM EST",
  },
] as const;

const manualEntryTypes: Array<TimelineEntry["chip"]> = [
  "Who",
  "What",
  "Where",
  "When",
];

const timelineFieldConfig = [
  { key: "who", chip: "Who" },
  { key: "what", chip: "What" },
  { key: "when", chip: "When" },
  { key: "where", chip: "Where" },
  { key: "how", chip: "How" },
  { key: "witnesses", chip: "Witnesses" },
  { key: "repeatedIncidents", chip: "Repeated" },
  { key: "injuries", chip: "Injuries" },
  { key: "evidenceItems", chip: "Evidence" },
] as const;

const hasTimelineValue = (value: unknown): boolean => {
  if (typeof value === "string") {
    return Boolean(value.trim());
  }

  if (typeof value === "boolean" || typeof value === "number") {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return false;
};

const safeTimelineValue = (value: unknown): string => {
  if (typeof value === "string" && value.trim()) {
    return value;
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (Array.isArray(value)) {
    return value.length
      ? `${value.length} evidence item${value.length === 1 ? "" : "s"}`
      : "Not provided yet";
  }

  if (typeof value === "number") {
    return String(value);
  }

  return "Not provided yet";
};

const buildStructuredTimelineEntries = (
  backendFields: Record<string, unknown>,
  localFields: Record<string, unknown> = {}
): TimelineEntry[] =>
  timelineFieldConfig.map((field) => {
    const backendValue = backendFields[field.key];
    const localValue = localFields[field.key];
    const useLocalValue = !hasTimelineValue(backendValue) && hasTimelineValue(localValue);

    return {
      id: field.key,
      chip: field.chip,
      value: safeTimelineValue(useLocalValue ? localValue : backendValue),
      isLocalOnly: useLocalValue,
    };
  });

const buildStatusHistoryEntries = (
  timeline: Array<Record<string, unknown>>
): StatusHistoryEntry[] =>
  timeline.reduce<StatusHistoryEntry[]>((entries, item, index) => {
    const status = typeof item.status === "string" ? item.status : null;

    if (!status) {
      return entries;
    }

    const entry: StatusHistoryEntry = {
      id: String(item._id ?? `${status}-${index}`),
      status,
    };

    if (typeof item.changedAt === "string") {
      entry.changedAt = item.changedAt;
    }

    if (typeof item.reason === "string") {
      entry.reason = item.reason;
    }

    entries.push(entry);
    return entries;
  }, []);

function ReportSubmissionReviewPage() {
  const router = useRouter();
  const reportDraft = useMemo(() => getReportFlowDraft(), []);
  const [timelineEntries, setTimelineEntries] = useState(
    initialTimelineEntries
  );
  const [reportStatus, setReportStatus] = useState<string>("draft");
  const [reportRef, setReportRef] = useState<string | null>(reportDraft?.reportId ?? null);
  const [reportLanguage, setReportLanguage] = useState("en");
  const [reportJurisdiction, setReportJurisdiction] = useState("NSW");
  const [statusHistoryEntries, setStatusHistoryEntries] = useState<StatusHistoryEntry[]>([]);
  const [hasLocalOnlyTimelineContent, setHasLocalOnlyTimelineContent] = useState(false);
  const [isLoading, setIsLoading] = useState(Boolean(reportDraft?.reportId));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(
    initialTimelineEntries[0]?.id ?? null
  );
  const [isManualEntryOpen, setIsManualEntryOpen] = useState(false);
  const [manualEntryType, setManualEntryType] =
    useState<TimelineEntry["chip"]>("What");
  const [manualEntryValue, setManualEntryValue] = useState("");

  useEffect(() => {
    const reportId = reportDraft?.reportId;

    if (!reportId) {
      if (reportDraft?.structuredFields) {
        const localEntries = buildStructuredTimelineEntries({}, reportDraft.structuredFields);

        setTimelineEntries(localEntries);
        setExpandedEntryId(localEntries[0]?.id ?? null);
        setHasLocalOnlyTimelineContent(localEntries.some((entry) => entry.isLocalOnly));
        setIsLoading(false);
      }

      return;
    }

    let isActive = true;

    void (async () => {
      try {
        const [report, status, timeline] = await Promise.all([
          getReport(reportId),
          getReportStatus(reportId),
          getReportTimeline(reportId),
        ]);

        if (!isActive) {
          return;
        }

        const backendEntries = buildStructuredTimelineEntries(
          report.structuredFields ?? {},
          reportDraft.structuredFields ?? {}
        );

        setTimelineEntries(backendEntries);
        setHasLocalOnlyTimelineContent(backendEntries.some((entry) => entry.isLocalOnly));
        setExpandedEntryId(backendEntries[0]?.id ?? null);
        setStatusHistoryEntries(buildStatusHistoryEntries(timeline));
        setReportStatus(status.current ?? status.status ?? report.status ?? "draft");
        setReportRef(report.refNo ?? report._id);
        setReportLanguage(report.language ?? "en");
        setReportJurisdiction(report.jurisdiction ?? "NSW");
        setLoadError(null);
      } catch (error) {
        if (!isActive) {
          return;
        }

        if (reportDraft?.structuredFields) {
          const localEntries = buildStructuredTimelineEntries({}, reportDraft.structuredFields);

          setTimelineEntries(localEntries);
          setExpandedEntryId(localEntries[0]?.id ?? null);
          setHasLocalOnlyTimelineContent(localEntries.some((entry) => entry.isLocalOnly));
          setStatusHistoryEntries([]);
          setReportStatus("local_only");
        }

        setLoadError(
          error instanceof Error
            ? error.message
            : "Report draft could not be loaded."
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [reportDraft?.reportId, reportDraft?.structuredFields]);

  const toggleEntry = (entryId: string) => {
    setExpandedEntryId((currentEntryId) =>
      currentEntryId === entryId ? null : entryId
    );
  };

  const openManualEntry = () => {
    setIsManualEntryOpen(true);
  };

  const closeManualEntry = () => {
    setIsManualEntryOpen(false);
    setManualEntryType("What");
    setManualEntryValue("");
  };

  const handleManualEntrySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = manualEntryValue.trim();
    if (!value) {
      return;
    }

    const entryId = `manual-${Date.now()}`;
    const newEntry: TimelineEntry = {
      id: entryId,
      chip: manualEntryType,
      value,
      action: "Edit Details",
    };

    setTimelineEntries((currentEntries) => [...currentEntries, newEntry]);
    setExpandedEntryId(entryId);
    closeManualEntry();
  };

  const handleSubmitReport = async () => {
    if (!reportDraft?.reportId) {
      router.push("/dashboard?view=reportsubmissionsuccess");
      return;
    }

    setIsSubmitting(true);
    setLoadError(null);

    try {
      await updateReport(reportDraft.reportId, {
        status: "ready_for_review",
        language: reportLanguage || "en",
        jurisdiction: reportJurisdiction || "NSW",
      });
      router.push("/dashboard?view=reportsubmissionsuccess");
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "Report could not be updated."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 pb-12 pt-12">
      <div className="mx-auto flex min-h-[1063px] w-full max-w-[1280px] flex-col bg-[#f4f7fb]">
        <div className="flex h-[60px] w-full items-center justify-between border-b border-[#d9e2ee] px-6 py-[10px]">
          <Link
            href="/dashboard?view=reportsubmissionevidence"
            className="inline-flex items-center gap-2 text-[#111827]"
          >
            <IconChevronLeft size={18} stroke={2} />
            <span
              className="inline-block h-7 w-[143px] text-[18px] font-bold leading-[28px] tracking-[0]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Timeline Builder
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

        <div className="flex flex-col gap-12 px-6 pb-12 pt-12">
          <header className="flex min-h-[111px] flex-col items-center justify-center gap-3 px-6">
            <h2 className="text-center text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#0f52ba]">
              Evidence Review
            </h2>
            <p className="max-w-[430px] text-center text-[12px] leading-[16px] text-[#6f7f93]">
              If AI-assisted structuring was used, verify the timeline below before saving this prepared report for review.
            </p>
          </header>

          <article className="mx-auto min-h-[700px] w-full max-w-[1136px] bg-transparent">
            {loadError ? (
              <div className="mb-4 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[11px] text-[#b45353]">
                <span className="inline-flex items-center gap-1.5">
                  <IconAlertCircle size={12} />
                  {loadError}
                </span>
              </div>
            ) : null}
            <div className="mb-4 flex items-center justify-between rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3">
              <p className="text-[11px] font-semibold text-[#1f2a3a]">
                Current backend status: {reportStatus}
              </p>
              {reportRef ? (
                <p className="text-[10px] text-[#8ea0b8]">
                  SafeSpeak ref {reportRef.slice(-6)}
                </p>
              ) : null}
            </div>
            {statusHistoryEntries.length ? (
              <div className="mb-4 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                  Status history
                </p>
                <div className="mt-2 space-y-1.5">
                  {statusHistoryEntries.map((entry) => (
                    <p key={entry.id} className="text-[11px] leading-[1.45] text-[#60728a]">
                      <span className="font-semibold text-[#1f2a3a]">{entry.status}</span>
                      {entry.reason ? <span> - {entry.reason}</span> : null}
                      {entry.changedAt ? (
                        <span> - {new Date(entry.changedAt).toLocaleString()}</span>
                      ) : null}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="mb-4 rounded-[12px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3 text-[11px] leading-[1.55] text-[#60728a]">
              Guidance only: this review prepares or saves your SafeSpeak report. It does not send anything to an external authority unless a backend submission action confirms that separately.
              {hasLocalOnlyTimelineContent ? (
                <span className="mt-2 block font-semibold text-[#9a5b12]">
                  Stored locally only: some review fields are shown from this browser session and are not stored in the backend.
                </span>
              ) : null}
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute bottom-[76px] left-[10px] top-[12px] w-px bg-[#d5deea]" />
              <div className="space-y-3">
                {timelineEntries.map((entry) => {
                  const isExpanded = expandedEntryId === entry.id;
                  const hasLongContent = Boolean(
                    entry.label || entry.hint || entry.action
                  );
                  const panelId = `timeline-panel-${entry.id}`;

                  return (
                    <article key={entry.id} className="relative pl-8">
                      {isExpanded ? (
                        <span className="absolute -left-[2px] top-[8px] inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_#d7e1ee]">
                          <span className="h-[16px] w-[16px] rounded-full bg-[#0f52ba]" />
                        </span>
                      ) : (
                        <span className="absolute left-[4px] top-[30px] h-[8px] w-[8px] rounded-full border border-[#cfd9e6] bg-[#dfe7f1]" />
                      )}

                      {isExpanded ? (
                        <div
                          id={panelId}
                          className={`relative flex flex-col justify-between overflow-hidden rounded-[18px] rounded-l-[20px] border border-l-[4px] border-[#dce5f1] border-l-[#0F52BA] bg-white px-6 pb-5 pt-4 shadow-[0_4px_10px_rgba(15,82,186,0.08)] ${hasLongContent ? "min-h-[232px]" : "min-h-[104px]"}`}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3">
                              <span className="inline-flex h-5 items-center rounded-full bg-[#edf3ff] px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#0f52ba]">
                                {entry.chip}
                              </span>
                              <button
                                type="button"
                                aria-expanded={isExpanded}
                                aria-controls={panelId}
                                onClick={() => toggleEntry(entry.id)}
                                className="inline-flex h-4 w-4 items-center justify-center text-[#9eb0c7]"
                              >
                                <IconChevronDown
                                  size={12}
                                  stroke={1.8}
                                  className="rotate-180"
                                />
                              </button>
                            </div>

                            {entry.label ? (
                              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8fa0b8]">
                                {entry.label}
                              </p>
                            ) : null}
                            <p className="mt-1 text-[13px] font-semibold leading-[18px] text-[#1f2a3a]">
                              {entry.value}
                            </p>
                            {entry.hint ? (
                              <p className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#16a56a]">
                                <IconBoltFilled size={10} />
                                {entry.hint}
                              </p>
                            ) : null}
                            {entry.isLocalOnly ? (
                              <p className="mt-3 text-[10px] font-semibold text-[#9a5b12]">
                                Stored locally only
                              </p>
                            ) : null}
                          </div>

                          {entry.action ? (
                            <div className="flex justify-end">
                              <button
                                type="button"
                                className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#ff8f00]"
                              >
                                <IconPencil size={10} />
                                {entry.action}
                              </button>
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="flex min-h-[72px] items-center justify-between rounded-[12px] border border-[#dce5f1] bg-white px-5 py-4 shadow-[0_2px_7px_rgba(15,23,42,0.03)]">
                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#0f52ba]">
                              {entry.chip}
                            </p>
                            <p className="mt-1 truncate text-[13px] font-medium leading-[18px] text-[#253447]">
                              {entry.value}
                            </p>
                          </div>
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={panelId}
                            onClick={() => toggleEntry(entry.id)}
                            className="inline-flex h-4 w-4 items-center justify-center text-[#9fb0c6]"
                          >
                            <IconChevronDown size={12} stroke={1.8} />
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>

              {isLoading ? (
                <div className="mt-4 inline-flex items-center gap-2 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3 text-[11px] text-[#60728a]">
                  <IconLoader2 size={14} className="animate-spin" />
                  Loading report draft...
                </div>
              ) : null}

              {isManualEntryOpen ? (
                <form
                  onSubmit={handleManualEntrySubmit}
                  className="mt-4 rounded-[12px] border border-[#dce5f1] bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f52ba]">
                    Manual Entry
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-[132px_1fr]">
                    <label className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold text-[#7f90a6]">
                        Section
                      </span>
                      <select
                        value={manualEntryType}
                        onChange={(event) =>
                          setManualEntryType(
                            event.target.value as TimelineEntry["chip"]
                          )
                        }
                        className="h-9 rounded-[8px] border border-[#dce5f1] bg-white px-2.5 text-[12px] font-semibold text-[#1f2a3a] outline-none"
                      >
                        {manualEntryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold text-[#7f90a6]">
                        Details
                      </span>
                      <input
                        value={manualEntryValue}
                        onChange={(event) =>
                          setManualEntryValue(event.target.value)
                        }
                        placeholder="Enter manual detail"
                        className="h-9 rounded-[8px] border border-[#dce5f1] bg-white px-3 text-[12px] text-[#1f2a3a] outline-none placeholder:text-[#9eb0c7]"
                      />
                    </label>
                  </div>

                  <div className="mt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeManualEntry}
                      className="inline-flex h-8 items-center rounded-[8px] border border-[#dce5f1] px-3 text-[10px] font-semibold text-[#60728a]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!manualEntryValue.trim()}
                      className="inline-flex h-8 items-center rounded-[8px] bg-[#0f52ba] px-3 text-[10px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Add Entry
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={openManualEntry}
                  className="mt-4 inline-flex h-[42px] w-full items-center justify-center rounded-[9px] border border-dashed border-[#ccd7e6] bg-[#f8fbff] text-[10px] font-semibold text-[#8396ae]"
                >
                  <span className="mr-2 inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#ffe7c7] text-[#e79b2f]">
                    <IconPlus size={10} stroke={2.4} />
                  </span>
                  Add Manual Entry
                </button>
              )}
              {!isLoading && timelineEntries.length === 0 ? (
                <div className="mt-4 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-6 text-center text-[12px] text-[#60728a]">
                  No backend timeline entries are available yet. Add a manual entry or go back to edit the report details.
                </div>
              ) : null}
            </div>

            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  void handleSubmitReport();
                }}
                disabled={isSubmitting}
                className="inline-flex h-[44px] w-full max-w-[392px] items-center justify-center rounded-[8px] bg-[#ff9800] px-8 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(255,152,0,0.34)]"
              >
                {isSubmitting ? (
                  <IconLoader2 size={14} className="mr-1 animate-spin" />
                ) : null}
                {isSubmitting ? "Saving..." : "Save prepared report"}
                <IconChevronRight size={14} className="ml-1" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export { ReportSubmissionReviewPage };
