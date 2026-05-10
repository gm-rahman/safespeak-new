"use client";

import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import type { DashboardCardFlowId } from "@/lib/dashboard-card-flows";

const REPORT_FLOW_DRAFT_KEY = "safespeak_report_flow_draft";

export type ReportFlowDraft = {
  reportId?: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  structuredFields?: Record<string, unknown>;
  incidentType?: string;
  incidentCategory?: AssistantIncidentCategory;
  topic?: DashboardCardFlowId;
  starterPrompt?: string;
  evidenceIds: string[];
  updatedAt: string;
};

export const defaultReportFlowDraft: Omit<ReportFlowDraft, "updatedAt"> = {
  title: "",
  date: "",
  location: "",
  summary: "",
  evidenceIds: [],
};

export function getReportFlowDraft(): ReportFlowDraft | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(REPORT_FLOW_DRAFT_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as ReportFlowDraft;
  } catch {
    window.sessionStorage.removeItem(REPORT_FLOW_DRAFT_KEY);
    return null;
  }
}

export function saveReportFlowDraft(
  draft: Omit<ReportFlowDraft, "updatedAt">
): ReportFlowDraft {
  const nextDraft = {
    ...draft,
    updatedAt: new Date().toISOString(),
  } satisfies ReportFlowDraft;

  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(REPORT_FLOW_DRAFT_KEY, JSON.stringify(nextDraft));
  }

  return nextDraft;
}

export function mergeReportFlowDraft(
  partialDraft: Partial<Omit<ReportFlowDraft, "updatedAt">>
): ReportFlowDraft {
  const currentDraft = getReportFlowDraft();

  return saveReportFlowDraft({
    ...defaultReportFlowDraft,
    ...currentDraft,
    ...partialDraft,
    evidenceIds: partialDraft.evidenceIds ?? currentDraft?.evidenceIds ?? [],
  });
}

export function clearReportFlowDraft(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(REPORT_FLOW_DRAFT_KEY);
}
