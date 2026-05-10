"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  IconAlertCircle,
  IconChevronRight,
  IconClock,
  IconFolderFilled,
  IconLoader2,
  IconShieldFilled,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import { getAssistantTriageSource } from "@/lib/assistant-triage";
import {
  getDashboardCardFlow,
  type DashboardCardFlowId,
} from "@/lib/dashboard-card-flows";
import {
  createReport,
  updateReport,
} from "@/lib/reports-client";
import {
  getReportFlowDraft,
  mergeReportFlowDraft,
} from "@/lib/report-flow";

import { ReportSubmissionFrame } from "./report-submission-frame";

function ReportSubmissionDetailsPage({
  initialCategory,
  initialTopic,
  initialMessage,
}: {
  initialCategory?: AssistantIncidentCategory;
  initialTopic?: DashboardCardFlowId;
  initialMessage?: string;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const contextFlow = useMemo(
    () => (initialTopic ? getDashboardCardFlow(initialTopic) : null),
    [initialTopic]
  );
  const assistantSource = useMemo(() => getAssistantTriageSource(), []);
  const existingDraft = useMemo(() => getReportFlowDraft(), []);
  const defaultIncidentTitle =
    initialCategory && contextFlow
      ? `${contextFlow.title} incident report`
      : t("dashboard.reportSubmission.incidentTitleValue");
  const defaultSummary =
    existingDraft?.summary ||
    initialMessage?.trim() ||
    assistantSource?.timeline.what ||
    t("dashboard.reportSubmission.summaryValue");
  const [title, setTitle] = useState(existingDraft?.title || defaultIncidentTitle);
  const [date, setDate] = useState(existingDraft?.date || "2026-02-22");
  const [location, setLocation] = useState(
    existingDraft?.location ||
      assistantSource?.timeline.where ||
      t("dashboard.reportSubmission.locationValue")
  );
  const [summary, setSummary] = useState(defaultSummary);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    mergeReportFlowDraft({
      title,
      date,
      location,
      summary,
      structuredFields: {
        who: assistantSource?.timeline.who,
        what: summary,
        when: date,
        where: location,
        how: assistantSource?.timeline.how,
        witnesses: assistantSource?.timeline.witnesses,
        injuries: assistantSource?.timeline.injuries,
      },
      incidentCategory: initialCategory,
      incidentType: initialCategory ?? existingDraft?.incidentType,
      topic: initialTopic,
      starterPrompt: initialMessage?.trim(),
    });
  }, [
    date,
    assistantSource?.timeline.how,
    assistantSource?.timeline.injuries,
    assistantSource?.timeline.who,
    assistantSource?.timeline.witnesses,
    existingDraft?.incidentType,
    initialCategory,
    initialMessage,
    initialTopic,
    location,
    summary,
    title,
  ]);

  const persistReportDraft = async (nextView: string) => {
    setIsSaving(true);
    setSaveError(null);

    try {
      const structuredFields = {
        who: assistantSource?.timeline.who,
        what: summary,
        when: date,
        where: location,
        how: assistantSource?.timeline.how,
        witnesses: assistantSource?.timeline.witnesses,
        injuries: assistantSource?.timeline.injuries,
      };
      const payload = {
        language: "en",
        jurisdiction: "NSW",
        context: title,
        originalNarrative: summary,
        incidentType: initialCategory ?? contextFlow?.categoryKey ?? undefined,
        structuredFields,
        status: "draft",
      } as const;

      const savedReport = existingDraft?.reportId
        ? await updateReport(existingDraft.reportId, payload)
        : await createReport(payload);

      mergeReportFlowDraft({
        reportId: savedReport._id,
        title,
        date,
        location,
        summary,
        structuredFields,
        incidentCategory: initialCategory,
        incidentType:
          savedReport.incidentType ??
          initialCategory ??
          existingDraft?.incidentType,
        topic: initialTopic,
        starterPrompt: initialMessage?.trim(),
      });

      router.push(`/dashboard?view=${nextView}`);
    } catch (error) {
      setSaveError(
        error instanceof Error ? error.message : "Report draft could not be saved."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ReportSubmissionFrame
      title={t("dashboard.reportSubmission.detailsTitle")}
      subtitle={t("dashboard.reportSubmission.detailsSubtitle")}
      step="details"
      backHref="/dashboard?view=assistantconversation"
    >
      <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[1.65fr_1fr]">
        <article className="space-y-3 rounded-[14px] border border-[#e3ebf4] bg-[#f9fbfe] p-4">
          {saveError ? (
            <div className="rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[11px] text-[#b45353]">
              <span className="inline-flex items-center gap-1.5">
                <IconAlertCircle size={12} />
                {saveError}
              </span>
            </div>
          ) : null}
          {contextFlow ? (
            <div className="rounded-[12px] border border-[#d8e4f2] bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                Preselected context
              </p>
              <p className="mt-1 text-[12px] font-semibold text-[#1f2a3a]">
                {contextFlow.title}
              </p>
            </div>
          ) : null}
          <div>
            <label
              htmlFor="incident-title"
              className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]"
            >
              {t("dashboard.reportSubmission.incidentTitle")}
            </label>
            <input
              id="incident-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-1 h-10 w-full rounded-xl border border-[#d7e1ee] bg-white px-3 text-xs font-semibold text-[#1f2a3a] outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="incident-date"
                className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]"
              >
                {t("dashboard.reportSubmission.date")}
              </label>
              <input
                id="incident-date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-1 h-10 w-full rounded-xl border border-[#d7e1ee] bg-white px-3 text-xs font-semibold text-[#1f2a3a] outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="incident-location"
                className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]"
              >
                {t("dashboard.reportSubmission.location")}
              </label>
              <input
                id="incident-location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="mt-1 h-10 w-full rounded-xl border border-[#d7e1ee] bg-white px-3 text-xs font-semibold text-[#1f2a3a] outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="incident-summary"
              className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]"
            >
              {t("dashboard.reportSubmission.summary")}
            </label>
            <textarea
              id="incident-summary"
              rows={5}
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
              className="mt-1 w-full resize-none rounded-xl border border-[#d7e1ee] bg-white px-3 py-2 text-xs leading-[1.55] text-[#1f2a3a] outline-none"
            />
          </div>
        </article>

        <aside className="rounded-[14px] border border-[#e3ebf4] bg-white p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            {t("dashboard.reportSubmission.completeness")}
          </p>
          <div className="mt-2 h-2 rounded-full bg-[#e7eef8]">
            <div className="h-2 w-[72%] rounded-full bg-[#0f5d9f]" />
          </div>
          <p className="mt-2 text-xs font-semibold text-[#1f2a3a]">
            {t("dashboard.reportSubmission.completed72")}
          </p>

          <ul className="mt-4 space-y-2 text-[11px] text-[#60728a]">
            <li className="inline-flex items-center gap-1.5">
              <IconShieldFilled size={12} className="text-[#0f5d9f]" />
              {t("dashboard.reportSubmission.incidentTypeIdentified")}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <IconFolderFilled size={12} className="text-[#0f5d9f]" />
              {t("dashboard.reportSubmission.whoWhatWhereCaptured")}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <IconClock size={12} className="text-[#0f5d9f]" />
              {t("dashboard.reportSubmission.addEvidenceToStrengthenCase")}
            </li>
          </ul>
        </aside>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <Link
          href="/dashboard?view=assistantconversation"
          className="inline-flex h-10 items-center rounded-full border border-[#d7e0ec] px-5 text-xs font-semibold text-[#334155]"
        >
          {t("common.back")}
        </Link>
        <button
          type="button"
          onClick={() => {
            void persistReportDraft("reportsubmissionevidence");
          }}
          disabled={isSaving}
          className="inline-flex h-10 items-center rounded-full bg-[#0f5d9f] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(15,93,159,0.25)]"
        >
          {isSaving ? (
            <IconLoader2 size={14} className="mr-1 animate-spin" />
          ) : null}
          Next: Evidence
          <IconChevronRight size={14} className="ml-1" />
        </button>
      </div>
    </ReportSubmissionFrame>
  );
}

export { ReportSubmissionDetailsPage };
