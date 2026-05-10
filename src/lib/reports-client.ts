"use client";

import { apiRequest } from "@/lib/api";
import { ApiRequestError } from "@/lib/api";
import type { ApiEnvelope } from "@/lib/api";
import { clearAnonymousSession, getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type ReportRecord = {
  _id: string;
  refNo?: string;
  language?: string;
  jurisdiction?: string;
  lga?: string;
  context?: string;
  originalNarrative?: string;
  translatedNarrative?: string;
  incidentType?: string;
  severity?: string;
  status?: string;
  structuredFields?: Record<string, unknown>;
  consentSnapshot?: Record<string, unknown>;
  statusHistory?: Array<Record<string, unknown>>;
  createdAt?: string;
  updatedAt?: string;
};

export type ReportCreateInput = {
  language: string;
  jurisdiction: string;
  lga?: string;
  context?: string;
  originalNarrative?: string;
  translatedNarrative?: string;
  incidentType?: string;
  severity?: string;
  structuredFields?: Record<string, unknown>;
  status?: string;
};

type ReportResponse = {
  report: ReportRecord;
};

type ReportListResponse = {
  reports: ReportRecord[];
};

type ReportStatusResponse = {
  status: {
    id?: string;
    refNo?: string;
    status?: string;
    current: string;
    updatedAt?: string;
    localOnly?: boolean;
  };
};

type ReportTimelineResponse = {
  timeline: Array<Record<string, unknown>>;
};

async function reportApiRequest<TData>(
  path: string,
  options: Omit<Parameters<typeof apiRequest<TData>>[1], "headers"> = {}
): Promise<ApiEnvelope<TData>> {
  const headers = await getSessionAwareAuthHeaders();

  try {
    return await apiRequest<TData>(path, {
      ...options,
      headers,
    });
  } catch (error) {
    if (error instanceof ApiRequestError && error.status === 401) {
      clearAnonymousSession();
      const retryHeaders = await getSessionAwareAuthHeaders({ forceNewAnonymous: true });

      return apiRequest<TData>(path, {
        ...options,
        headers: retryHeaders,
      });
    }

    throw error;
  }
}

export async function createReport(input: ReportCreateInput): Promise<ReportRecord> {
  const response = await reportApiRequest<ReportResponse>("/reports", {
    method: "POST",
    body: input,
  });

  return response.data.report;
}

export async function updateReport(
  reportId: string,
  input: Partial<ReportCreateInput>
): Promise<ReportRecord> {
  const response = await reportApiRequest<ReportResponse>(`/reports/${reportId}`, {
    method: "PATCH",
    body: input,
  });

  return response.data.report;
}

export async function listReports(): Promise<ReportRecord[]> {
  const response = await reportApiRequest<ReportListResponse>("/reports");

  return response.data.reports;
}

export async function getReport(reportId: string): Promise<ReportRecord> {
  const response = await reportApiRequest<ReportResponse>(`/reports/${reportId}`);

  return response.data.report;
}

export async function getReportStatus(reportId: string): Promise<ReportStatusResponse["status"]> {
  const response = await reportApiRequest<ReportStatusResponse>(`/reports/${reportId}/status`);

  return response.data.status;
}

export async function getReportTimeline(reportId: string): Promise<ReportTimelineResponse["timeline"]> {
  const response = await reportApiRequest<ReportTimelineResponse>(`/reports/${reportId}/timeline`);

  return response.data.timeline;
}
