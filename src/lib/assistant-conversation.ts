import { apiRequest } from "@/lib/api";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import {
  ConsentRequiredError,
  consentRequirements,
  ensureConsent,
} from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";
const MAX_TIMELINE_CONVERSATION_MESSAGES = 100;

export type AssistantConversationMessage = {
  role: "assistant" | "user";
  content: string;
};

export type AssistantTimeline = {
  [key: string]: string;
};

function trimConversationForTimelineAssistant(
  conversation: AssistantConversationMessage[]
): AssistantConversationMessage[] {
  if (conversation.length <= MAX_TIMELINE_CONVERSATION_MESSAGES) {
    return conversation;
  }

  return conversation.slice(-MAX_TIMELINE_CONVERSATION_MESSAGES);
}

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

const wait = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

const TIMELINE_FIELD_ORDER = [
  "who",
  "what",
  "where",
  "when",
  "how",
  "witnesses",
  "impact",
  "evidence",
] as const;

function getEmpatheticLead(
  incidentCategory: AssistantIncidentCategory | undefined,
  message: string
): string {
  const normalized = message.trim().toLowerCase();

  if (!normalized) {
    return "Take your time. I'm here with you.";
  }

  if (incidentCategory === "domestic_violence") {
    return "I'm sorry you're dealing with this. We can take it one step at a time.";
  }

  if (incidentCategory === "racial_abuse") {
    return "I'm sorry this happened to you. You can share only what feels okay.";
  }

  if (incidentCategory === "migrant_challenges") {
    return "I understand this can feel overwhelming. We can go step by step together.";
  }

  if (incidentCategory === "cyber_scam") {
    return "I know this can be stressful. Let's go through it calmly together.";
  }

  if (/\b(wife|husband|partner|family|mother|father|child|children)\b/i.test(normalized)) {
    return "Thank you for sharing that. I'm here and we can take this slowly.";
  }

  return "Thank you for sharing that. We can go one step at a time.";
}

function pickNextTimelineQuestion(timeline: AssistantTimeline): string {
  const nextMissingField = TIMELINE_FIELD_ORDER.find(
    (field) => !timeline[field]?.trim()
  );

  switch (nextMissingField) {
    case "who":
      return "Who was involved in this incident?";
    case "what":
      return "What happened?";
    case "where":
      return "Where did this happen?";
    case "when":
      return "When did this happen?";
    case "how":
      return "How did it happen?";
    case "witnesses":
      return "Were there any witnesses or other people who saw what happened?";
    case "impact":
      return "How has this affected you so far?";
    case "evidence":
      return "Do you have any messages, photos, audio, or other evidence you want to keep with this report?";
    default:
      return "What would you like to add next?";
  }
}

function buildConsentBypassTimeline(
  message: string,
  timeline: AssistantTimeline
): AssistantTimeline {
  const nextTimeline = { ...timeline };
  const trimmedMessage = message.trim();

  if (!trimmedMessage) {
    return nextTimeline;
  }

  if (!nextTimeline.what) {
    nextTimeline.what = trimmedMessage;
    return nextTimeline;
  }

  const nextMissingField = TIMELINE_FIELD_ORDER.find(
    (field) => !nextTimeline[field]?.trim()
  );

  if (nextMissingField) {
    nextTimeline[nextMissingField] = trimmedMessage;
  }

  return nextTimeline;
}

function buildConsentBypassResponse(input: {
  message: string;
  timeline: AssistantTimeline;
  incidentCategory?: AssistantIncidentCategory;
}): TimelineAssistantResponse {
  const nextTimeline = buildConsentBypassTimeline(input.message, input.timeline);

  return {
    assistantMessage: getEmpatheticLead(
      input.incidentCategory,
      input.message
    ),
    nextQuestion: pickNextTimelineQuestion(nextTimeline),
    timeline: nextTimeline,
    readyForSubmission: false,
    confidence: "low",
    disclaimer: "",
    citations: [],
    rag: {
      used: false,
      unavailable: false,
      resultCount: 0,
    },
    reviewStatus: "consent_not_granted",
  };
}

export async function getAssistantAuthHeaders(): Promise<HeadersInit> {
  return getSessionAwareAuthHeaders();
}

export async function sendTimelineAssistantMessage(input: {
  message: string;
  conversation: AssistantConversationMessage[];
  timeline: AssistantTimeline;
  language?: string;
  incidentCategory?: AssistantIncidentCategory;
}): Promise<TimelineAssistantResponse> {
  const normalizedInput = {
    ...input,
    conversation: trimConversationForTimelineAssistant(input.conversation),
  };
  const headers = await getAssistantAuthHeaders();

  try {
    await ensureConsent(consentRequirements.aiAssistant, headers);
  } catch (error) {
    if (error instanceof ConsentRequiredError) {
      return buildConsentBypassResponse(input);
    }

    throw error;
  }

  let response;

  try {
    response = await apiRequest<TimelineAssistantResponse>(
      "/rag/timeline-assistant",
      {
        method: "POST",
        headers,
        body: normalizedInput,
      }
    );
  } catch (error) {
    if (!(error instanceof TypeError)) {
      throw error;
    }

    await wait(300);
    response = await apiRequest<TimelineAssistantResponse>(
      "/rag/timeline-assistant",
      {
        method: "POST",
        headers,
        body: normalizedInput,
      }
    );
  }

  return response.data;
}
