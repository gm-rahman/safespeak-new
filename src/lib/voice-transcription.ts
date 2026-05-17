import { apiRequest } from "@/lib/api";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type VoiceTranscriptionResult = {
  transcript: string;
  language?: string;
  model: string;
  saved: boolean;
};

async function getTranscriptionAuthHeaders(): Promise<HeadersInit> {
  return getSessionAwareAuthHeaders();
}

function getAudioFileName(blob: Blob): string {
  if (blob.type.includes("mp4")) {
    return "assistant-recording.m4a";
  }

  if (blob.type.includes("wav")) {
    return "assistant-recording.wav";
  }

  return "assistant-recording.webm";
}

export async function transcribeAssistantVoice(
  audioBlob: Blob,
  language?: string
): Promise<VoiceTranscriptionResult> {
  const headers = await getTranscriptionAuthHeaders();

  await ensureConsent(consentRequirements.audioTranscription, headers);

  const formData = new FormData();
  formData.set("audio", audioBlob, getAudioFileName(audioBlob));
  formData.set("saveTranscript", "false");

  if (language) {
    formData.set("language", language);
  }

  const response = await apiRequest<VoiceTranscriptionResult>(
    "/ai/transcribe-audio",
    {
      method: "POST",
      headers,
      body: formData,
    }
  );

  return response.data;
}
