"use client";

import { apiRequest } from "@/lib/api";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type ScamAnalysisRecord = {
  _id: string;
  inputType?: string;
  riskScore?: number;
  riskLevel?: string;
  confidence?: string;
  redFlags?: string[];
  recommendations?: string[];
  summary?: string;
  draftOptions?: unknown;
  createdAt?: string;
  updatedAt?: string;
};

type ScamAnalysisResponse = {
  analysis: ScamAnalysisRecord;
};

type ScamDraftResponse = {
  result: {
    summary?: string;
    draft?: string;
    notes?: string;
  };
};

export async function analyzeScamText(input: {
  text: string;
  language?: string;
  reportId?: string;
  metadata?: Record<string, unknown>;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.scamAnalysis, headers);
  const response = await apiRequest<ScamAnalysisResponse>("/scamshield/analyze-text", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.analysis;
}

export async function analyzeScamEmail(input: {
  body: string;
  subject?: string;
  from?: string;
  headers?: Record<string, string>;
  reportId?: string;
  metadata?: Record<string, unknown>;
}): Promise<ScamAnalysisRecord> {
  const requestHeaders = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.scamAnalysis, requestHeaders);
  const response = await apiRequest<ScamAnalysisResponse>("/scamshield/analyze-email", {
    method: "POST",
    headers: requestHeaders,
    body: input,
  });

  return response.data.analysis;
}

export async function analyzeScamScreenshot(input: {
  imageText: string;
  evidenceId?: string;
  reportId?: string;
  metadata?: Record<string, unknown>;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.scamAnalysis, headers);
  const response = await apiRequest<ScamAnalysisResponse>("/scamshield/analyze-screenshot", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.analysis;
}

export async function checkScamUrl(input: {
  url: string;
  reportId?: string;
  metadata?: Record<string, unknown>;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.scamAnalysis, headers);
  const response = await apiRequest<ScamAnalysisResponse>("/scamshield/check-url", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.analysis;
}

export async function generateScamReportDraft(input: {
  analysisId: string;
  notes?: string;
}): Promise<ScamDraftResponse["result"]> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ScamDraftResponse>("/scamshield/generate-report-draft", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.result;
}

export async function submitScamReport(input: {
  analysisId: string;
  destination?: string;
  consentToShare?: boolean;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.shareWithAgencies, headers);
  const response = await apiRequest<ScamAnalysisResponse>("/scamshield/submit", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.analysis;
}

export async function getScamAnalysis(analysisId: string): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ScamAnalysisResponse>(`/scamshield/${analysisId}`, {
    headers,
  });

  return response.data.analysis;
}
