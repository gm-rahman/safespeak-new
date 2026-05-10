"use client";

import { apiRequest } from "@/lib/api";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type ReportRecord = {
  _id: string;
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
    current: string;
    updatedAt?: string;
    localOnly?: boolean;
  };
};

type ReportTimelineResponse = {
  timeline: Array<Record<string, unknown>>;
};

export async function createReport(input: ReportCreateInput): Promise<ReportRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ReportResponse>("/reports", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.report;
}

export async function updateReport(
  reportId: string,
  input: Partial<ReportCreateInput>
): Promise<ReportRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ReportResponse>(`/reports/${reportId}`, {
    method: "PATCH",
    headers,
    body: input,
  });

  return response.data.report;
}

export async function listReports(): Promise<ReportRecord[]> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ReportListResponse>("/reports", {
    headers,
  });

  return response.data.reports;
}

export async function getReport(reportId: string): Promise<ReportRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ReportResponse>(`/reports/${reportId}`, {
    headers,
  });

  return response.data.report;
}

export async function getReportStatus(reportId: string): Promise<ReportStatusResponse["status"]> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ReportStatusResponse>(`/reports/${reportId}/status`, {
    headers,
  });

  return response.data.status;
}

export async function getReportTimeline(reportId: string): Promise<ReportTimelineResponse["timeline"]> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ReportTimelineResponse>(`/reports/${reportId}/timeline`, {
    headers,
  });

  return response.data.timeline;
}
