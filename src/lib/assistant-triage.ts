import { apiRequest } from "@/lib/api";
import {
  ensureAssistantConsent,
  getAssistantAuthHeaders,
  type AssistantConversationMessage,
  type AssistantTimeline,
} from "@/lib/assistant-conversation";

const ASSISTANT_TRIAGE_CONTEXT_KEY = "safespeak_assistant_triage_context";
const MAX_TRIAGE_NARRATIVE_LENGTH = 12000;

export type AssistantTriageSource = {
  conversation: AssistantConversationMessage[];
  timeline: AssistantTimeline;
  narrative: string;
  updatedAt: string;
};

export type AssistantTriageApiResult = {
  severitySignal?: string;
  primarySupportNeed?: string;
  specialtyTag?: string;
  summary?: string;
  assessmentBody?: string;
  riskFactors?: unknown;
  suggestedSupportCategories?: unknown;
  recommendedActions?: unknown;
  resourceRecommendations?: unknown;
  nonLegalSafetyNotes?: unknown;
  immediateSafetyFlag?: boolean | string;
  citations?: unknown;
  reviewStatus?: string;
};

type TriageReportResponse = {
  result: AssistantTriageApiResult;
};

function trimNarrative(value: string): string {
  const trimmed = value.trim();

  if (trimmed.length <= MAX_TRIAGE_NARRATIVE_LENGTH) {
    return trimmed;
  }

  return trimmed.slice(trimmed.length - MAX_TRIAGE_NARRATIVE_LENGTH);
}

export function buildAssistantTriageNarrative(
  conversation: AssistantConversationMessage[]
): string {
  const transcript = conversation
    .map((entry) => `${entry.role === "assistant" ? "Assistant" : "User"}: ${entry.content}`)
    .join("\n");

  return trimNarrative(transcript);
}

export function saveAssistantTriageSource(input: {
  conversation: AssistantConversationMessage[];
  timeline: AssistantTimeline;
}): void {
  if (typeof window === "undefined") {
    return;
  }

  const source: AssistantTriageSource = {
    conversation: input.conversation,
    timeline: input.timeline,
    narrative: buildAssistantTriageNarrative(input.conversation),
    updatedAt: new Date().toISOString(),
  };

  window.sessionStorage.setItem(
    ASSISTANT_TRIAGE_CONTEXT_KEY,
    JSON.stringify(source)
  );
}

export function getAssistantTriageSource(): AssistantTriageSource | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(ASSISTANT_TRIAGE_CONTEXT_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AssistantTriageSource;
  } catch {
    window.sessionStorage.removeItem(ASSISTANT_TRIAGE_CONTEXT_KEY);
    return null;
  }
}

export async function fetchAssistantTriageReport(
  source: AssistantTriageSource,
  language?: string
): Promise<AssistantTriageApiResult> {
  const headers = await getAssistantAuthHeaders();

  await ensureAssistantConsent(headers);

  const response = await apiRequest<TriageReportResponse>("/ai/triage-report", {
    method: "POST",
    headers,
    body: {
      narrative: source.narrative,
      structuredFields: source.timeline,
      language,
    },
  });

  return response.data.result;
}
