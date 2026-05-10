import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import type {
  AssistantConversationMessage,
  AssistantTimeline,
} from "@/lib/assistant-conversation";

const ASSISTANT_DRAFT_KEY = "safespeak_assistant_conversation_draft";

export type AssistantConversationDraft = {
  messages: AssistantConversationMessage[];
  timeline: AssistantTimeline;
  timelineFieldOrder: string[];
  incidentCategory?: AssistantIncidentCategory;
  updatedAt: string;
};

export function getAssistantConversationDraft(): AssistantConversationDraft | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(ASSISTANT_DRAFT_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AssistantConversationDraft;
  } catch {
    window.sessionStorage.removeItem(ASSISTANT_DRAFT_KEY);
    return null;
  }
}

export function saveAssistantConversationDraft(
  draft: Omit<AssistantConversationDraft, "updatedAt">
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(
    ASSISTANT_DRAFT_KEY,
    JSON.stringify({
      ...draft,
      updatedAt: new Date().toISOString(),
    } satisfies AssistantConversationDraft)
  );
}

export function clearAssistantConversationDraft(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(ASSISTANT_DRAFT_KEY);
}
