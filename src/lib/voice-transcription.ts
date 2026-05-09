import { apiRequest } from "@/lib/api";
import { getAuthSession } from "@/lib/auth";

const ANONYMOUS_SESSION_KEY = "safespeak_anonymous_session";
const SAFE_SPEAK_SESSION_HEADER = "X-SafeSpeak-Session";

type AnonymousSessionData = {
  sessionToken: string;
};

type ConsentFlags = {
  process_with_ai?: boolean;
  transcribe_audio?: boolean;
};

type CurrentConsentResponse = {
  consent: ConsentFlags;
};

type AnonymousSessionResponse = {
  sessionToken: string;
};

export type VoiceTranscriptionResult = {
  transcript: string;
  language?: string;
  model: string;
  saved: boolean;
};

function getStoredAnonymousSession(): AnonymousSessionData | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(ANONYMOUS_SESSION_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AnonymousSessionData;
  } catch {
    window.sessionStorage.removeItem(ANONYMOUS_SESSION_KEY);
    return null;
  }
}

function saveAnonymousSession(session: AnonymousSessionData): void {
  window.sessionStorage.setItem(ANONYMOUS_SESSION_KEY, JSON.stringify(session));
}

async function getAnonymousSessionToken(): Promise<string> {
  const storedSession = getStoredAnonymousSession();

  if (storedSession?.sessionToken) {
    return storedSession.sessionToken;
  }

  const response = await apiRequest<AnonymousSessionResponse>(
    "/sessions/anonymous",
    {
      method: "POST",
      body: {
        language: "en",
        safetyGateAccepted: true,
      },
    }
  );

  saveAnonymousSession({ sessionToken: response.data.sessionToken });
  return response.data.sessionToken;
}

async function getTranscriptionAuthHeaders(): Promise<HeadersInit> {
  const authSession = getAuthSession();

  if (authSession?.tokens.accessToken) {
    return {
      Authorization: `Bearer ${authSession.tokens.accessToken}`,
    };
  }

  const sessionToken = await getAnonymousSessionToken();

  return {
    [SAFE_SPEAK_SESSION_HEADER]: sessionToken,
  };
}

async function ensureTranscriptionConsent(headers: HeadersInit): Promise<void> {
  const currentConsent = await apiRequest<CurrentConsentResponse>(
    "/consents/current",
    {
      headers,
    }
  );

  if (
    currentConsent.data.consent.transcribe_audio ||
    currentConsent.data.consent.process_with_ai
  ) {
    return;
  }

  await apiRequest<CurrentConsentResponse>("/consents/update", {
    method: "POST",
    headers,
    body: {
      flags: {
        transcribe_audio: true,
      },
      source: "assistant_voice_recorder",
    },
  });
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

  await ensureTranscriptionConsent(headers);

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
