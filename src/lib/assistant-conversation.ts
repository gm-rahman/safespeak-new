import { apiRequest } from "@/lib/api";
import { getAuthSession } from "@/lib/auth";

const ANONYMOUS_SESSION_KEY = "safespeak_anonymous_session";
const SAFE_SPEAK_SESSION_HEADER = "X-SafeSpeak-Session";

export type AssistantConversationMessage = {
  role: "assistant" | "user";
  content: string;
};

export type AssistantTimeline = {
  who: string;
  what: string;
  where: string;
};

export type TimelineAssistantResponse = {
  assistantMessage: string;
  nextQuestion?: string;
  timeline: AssistantTimeline;
  readyForSubmission: boolean;
  confidence: "low" | "medium" | "high";
  disclaimer: string;
  citations: Array<{
    title: string;
    publisher?: string;
    url?: string;
    jurisdiction?: string;
    sectionRef?: string;
    lastUpdated?: string;
  }>;
  rag: {
    used: boolean;
    unavailable: boolean;
    resultCount: number;
  };
  reviewStatus?: string;
  interactionId?: string;
};

type AnonymousSessionData = {
  sessionToken: string;
};

type AnonymousSessionResponse = {
  sessionToken: string;
};

type CurrentConsentResponse = {
  consent: {
    process_with_ai?: boolean;
  };
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

async function getAssistantAuthHeaders(): Promise<HeadersInit> {
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

async function ensureAssistantConsent(headers: HeadersInit): Promise<void> {
  const currentConsent = await apiRequest<CurrentConsentResponse>(
    "/consents/current",
    {
      headers,
    }
  );

  if (currentConsent.data.consent.process_with_ai) {
    return;
  }

  await apiRequest<CurrentConsentResponse>("/consents/update", {
    method: "POST",
    headers,
    body: {
      flags: {
        process_with_ai: true,
      },
      source: "assistant_timeline_builder",
    },
  });
}

export async function sendTimelineAssistantMessage(input: {
  message: string;
  conversation: AssistantConversationMessage[];
  timeline: AssistantTimeline;
  language?: string;
}): Promise<TimelineAssistantResponse> {
  const headers = await getAssistantAuthHeaders();

  await ensureAssistantConsent(headers);

  const response = await apiRequest<TimelineAssistantResponse>(
    "/rag/timeline-assistant",
    {
      method: "POST",
      headers,
      body: input,
    }
  );

  return response.data;
}
