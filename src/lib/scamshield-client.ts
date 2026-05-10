"use client";

import { apiRequest } from "@/lib/api";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type ScamAnalysisRecord = {
  _id: string;
  type?: string;
  inputType?: string;
  riskScore?: number;
  riskLevel?: string;
  confidence?: string;
  indicators?: string[];
  redFlags?: string[];
  recommendations?: string[];
  extractedEntities?: Record<string, unknown>;
  summary?: string;
  draftOptions?: unknown;
  draftReport?: {
    summary?: string;
    draft?: string;
    notes?: string;
    indicators?: string[];
    riskLevel?: string;
    riskScore?: number;
  };
  metadata?: Record<string, unknown>;
  status?: string;
  submittedAt?: string;
  createdAt?: string;
  updatedAt?: string;
};

type ScamAnalysisResponse = {
  analysis: ScamAnalysisRecord;
};

type ScamDraftResponse = {
  analysis: ScamAnalysisRecord;
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
  imageText?: string;
  imageFile?: File;
  evidenceId?: string;
  reportId?: string;
  metadata?: Record<string, unknown>;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.scamAnalysis, headers);
  const body =
    typeof File !== "undefined" && input.imageFile instanceof File
      ? (() => {
          const formData = new FormData();

          formData.set("image", input.imageFile as File, input.imageFile.name);
          if (input.imageText) {
            formData.set("imageText", input.imageText);
          }
          if (input.evidenceId) {
            formData.set("evidenceId", input.evidenceId);
          }
          if (input.reportId) {
            formData.set("reportId", input.reportId);
          }
          formData.set(
            "metadata",
            JSON.stringify({
              ...input.metadata,
              fileName: input.imageFile?.name,
              mimeType: input.imageFile?.type,
              size: input.imageFile?.size,
            })
          );

          return formData;
        })()
      : {
          imageText: input.imageText,
          evidenceId: input.evidenceId,
          reportId: input.reportId,
          metadata: input.metadata,
        };
  const response = await apiRequest<ScamAnalysisResponse>("/scamshield/analyze-screenshot", {
    method: "POST",
    headers,
    body,
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
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ScamDraftResponse>(
    `/scamshield/${input.analysisId}/generate-report-draft`,
    {
      method: "POST",
      headers,
      body: {
        notes: input.notes,
      },
    }
  );

  return response.data.analysis;
}

export async function generateScamReportDraftLegacy(input: {
  analysisId: string;
  notes?: string;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<ScamDraftResponse>("/scamshield/generate-report-draft", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.analysis;
}

export async function submitScamReport(input: {
  analysisId: string;
  destination?: string;
  consentToShare?: boolean;
}): Promise<ScamAnalysisRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.shareWithAgencies, headers);
  const response = await apiRequest<ScamAnalysisResponse>(`/scamshield/${input.analysisId}/submit`, {
    method: "POST",
    headers,
    body: {
      destination: input.destination,
      consentToShare: input.consentToShare,
    },
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
