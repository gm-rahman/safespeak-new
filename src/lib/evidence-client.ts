"use client";

import { apiRequest } from "@/lib/api";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type EvidenceRecord = {
  _id: string;
  reportId?: string;
  type?: string;
  fileName?: string;
  mimeType?: string;
  size?: number;
  sha256Hash?: string;
  storageStatus?: string;
  transcription?: {
    transcript?: string;
    language?: string;
    savedAt?: string;
  };
  createdAt?: string;
  updatedAt?: string;
};

type UploadUrlInput = {
  reportId: string;
  type: string;
  fileName: string;
  mimeType: string;
  size: number;
  metadata?: Record<string, unknown>;
};

type UploadUrlResponse = {
  evidence: EvidenceRecord;
  upload: {
    uploadUrl?: string;
    method?: string;
    fields?: Record<string, string>;
  };
};

type EvidenceResponse = {
  evidence: EvidenceRecord;
};

type TranscriptResponse = {
  transcript: string;
  language?: string;
  model?: string;
  saved?: boolean;
};

export async function requestEvidenceUploadUrl(
  input: UploadUrlInput
): Promise<UploadUrlResponse> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.cloudEvidence, headers);
  const response = await apiRequest<UploadUrlResponse>("/evidence/upload-url", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data;
}

export async function completeEvidenceUpload(input: {
  evidenceId: string;
  sha256Hash: string;
  file: File;
  metadata?: Record<string, unknown>;
}): Promise<EvidenceRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const formData = new FormData();

  formData.set("evidenceId", input.evidenceId);
  formData.set("sha256Hash", input.sha256Hash);
  formData.set("file", input.file, input.file.name);

  if (input.metadata) {
    formData.set("metadata", JSON.stringify(input.metadata));
  }

  const response = await apiRequest<EvidenceResponse>("/evidence/complete-upload", {
    method: "POST",
    headers,
    body: formData,
  });

  return response.data.evidence;
}

export async function transcribeEvidence(
  evidenceId: string,
  input: {
    language?: string;
    saveTranscript?: boolean;
    reportId?: string;
    useAsNarrative?: boolean;
  }
): Promise<TranscriptResponse> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.evidenceTranscription, headers);
  const response = await apiRequest<TranscriptResponse>(`/evidence/${evidenceId}/transcribe`, {
    method: "POST",
    headers,
    body: input,
  });

  return response.data;
}

export async function getEvidence(evidenceId: string): Promise<EvidenceRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<EvidenceResponse>(`/evidence/${evidenceId}`, {
    headers,
  });

  return response.data.evidence;
}
