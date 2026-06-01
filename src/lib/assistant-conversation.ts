import { apiRequest } from "@/lib/api";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

const MAX_TIMELINE_CONVERSATION_MESSAGES = 100;

export type AssistantConversationMessage = {
  role: "assistant" | "user";
  content: string;
};

export type AssistantTimeline = {
  [key: string]: string;
};

export type LegalAwareness = {
  jurisdiction: "NSW";
  topic: "racial_abuse" | "migrant_challenges";
  informationOnly: true;
  sourceStatus: "approved_sources_used" | "insufficient_approved_sources";
  keyPoints: string[];
  pathwayCards: Array<{
    title: string;
    body: string;
    sourceRequirement: string;
  }>;
  citationPolicy: string;
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
  disclaimer?: string;
  triageReady?: boolean;
  nextAction?: string;
  showSources?: boolean;
  sourceDisplayReason?:
    | "legal_lookup"
    | "explicit_citation_request"
    | "hidden_support_reply"
    | "triage_handoff"
    | "not_directly_grounded";
  citations: Array<{
    sourceId?: string;
    title: string;
    publisher?: string;
    url?: string;
    jurisdiction?: string;
    sourceCategory?: string;
    sourceType?: string;
    topic?: string;
    sectionRef?: string;
    lastUpdated?: string;
  }>;
  rag: {
    used: boolean;
    unavailable: boolean;
    resultCount: number;
  };
  legalAwareness?: LegalAwareness;
  reviewStatus?: string;
  interactionId?: string;
};

const wait = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

export async function getAssistantAuthHeaders(): Promise<HeadersInit> {
  return getSessionAwareAuthHeaders();
}

export async function sendTimelineAssistantMessage(input: {
  message: string;
  conversation: AssistantConversationMessage[];
  timeline: AssistantTimeline;
  language?: string;
  jurisdiction?: "NSW";
  incidentCategory?: AssistantIncidentCategory;
}): Promise<TimelineAssistantResponse> {
  const normalizedInput = {
    ...input,
    conversation: trimConversationForTimelineAssistant(input.conversation),
  };
  const headers = await getAssistantAuthHeaders();
  await ensureConsent(consentRequirements.aiAssistant, headers);

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
