"use client";

import { apiRequest } from "@/lib/api";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type ConversationFlowSession = {
  id: string;
  selectedTopic?: string;
  detectedCategory?: string;
  status: "active" | "ready_for_triage" | "triaged" | "recommendation_ready" | "completed";
  safetyRiskLevel: "low" | "medium" | "high" | "immediate";
  jurisdiction?: string;
  location?: string;
  messageCount: number;
  userTurnCount: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ConversationFlowMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  turnNumber: number;
  metadata?: Record<string, unknown>;
  createdAt?: string;
};

export type ConversationFlowFactExtraction = {
  whatHappened?: string;
  whenHappened?: string;
  whereHappened?: string;
  peopleInvolved?: string;
  safetyConcerns?: string;
  evidenceMentioned?: string;
  emotionalState?: string;
  extractedEvents?: string[];
  missingInformation?: string[];
  timeline?: Record<string, string>;
};

export type ConversationFlowTriage = {
  likelyCategory: string;
  likelyCategoryLabel?: string;
  confidenceScore: number;
  confidenceLabel?: string;
  safetyRiskLevel: "low" | "medium" | "high" | "immediate";
  reasoningSummary: string;
  matchedLegislationIds: string[];
  matchedKnowledgeSources: Array<{
    id?: string;
    title?: string;
    jurisdiction?: string;
    sourceCategory?: string;
    sourceType?: string;
    url?: string;
    summary?: string;
  }>;
  humanReviewRecommended: boolean;
  missingInformation: string[];
  canProceedToRecommendations: boolean;
  matchedResourceTypes: string[];
  disclaimer?: string;
};

export type ConversationFlowRecommendation = {
  id: string;
  title: string;
  description: string;
  category: string;
  resourceType: string;
  ctaLabel?: string;
  phone?: string;
  email?: string;
  websiteUrl?: string;
  priority?: number;
  jurisdiction?: string;
  safetyNotes?: string;
  eligibilityNotes?: string;
  languageSupportNotes?: string;
  active?: boolean;
};

export type ConversationFlowDetails = {
  category: string;
  categoryLabel: string;
  safetyRiskLevel: "low" | "medium" | "high" | "immediate";
  matchedKnowledgeSources: ConversationFlowTriage["matchedKnowledgeSources"];
  matchedLegislationIds: string[];
  humanReviewRecommended: boolean;
  sections: {
    overview: { title: string; body: string };
    rights: { title: string; items: Array<{ title: string; body: string }> };
    reportingOptions: { title: string; items: ConversationFlowRecommendation[] };
    evidenceGuide: { title: string; items: Array<Record<string, unknown>> };
    supportServices: { title: string; items: ConversationFlowRecommendation[] };
    safetyPlanning: { title: string; items: Array<Record<string, unknown>> };
  };
  disclaimer: string;
};

type CreateSessionResponse = {
  session: ConversationFlowSession;
};

type ConversationTurnResponse = {
  session: ConversationFlowSession;
  userMessage: ConversationFlowMessage;
  assistantMessage: ConversationFlowMessage;
  factExtraction: ConversationFlowFactExtraction;
  triage?: ConversationFlowTriage | null;
  transition: {
    offerTriage: boolean;
    prompt?: string | null;
    primaryCta?: string | null;
    secondaryCta?: string | null;
  };
  responseMeta?: {
    confidence?: string;
    disclaimer?: string;
    citations?: Array<{
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
    rag?: {
      used: boolean;
      unavailable: boolean;
      resultCount: number;
    };
    reviewStatus?: string;
  };
};

type SessionEnvelope = {
  session: ConversationFlowSession;
  messages: ConversationFlowMessage[];
  factExtraction?: ConversationFlowFactExtraction | null;
  triage?: ConversationFlowTriage | null;
};

type TriageEnvelope = {
  session: ConversationFlowSession;
  triage: ConversationFlowTriage;
};

type RecommendationsEnvelope = {
  session: ConversationFlowSession;
  recommendations: ConversationFlowRecommendation[];
  fallbackUsed?: boolean;
};

type DetailsEnvelope = {
  session: ConversationFlowSession;
  details: ConversationFlowDetails;
};

async function getConversationHeaders(): Promise<HeadersInit> {
  const headers = await getSessionAwareAuthHeaders();

  await ensureConsent(consentRequirements.aiAssistant, headers);

  return headers;
}

export async function createConversationFlowSession(input: {
  selectedTopic?: string;
  jurisdiction?: string;
  location?: string;
}): Promise<ConversationFlowSession> {
  const headers = await getConversationHeaders();
  const response = await apiRequest<CreateSessionResponse>("/conversation-flow/sessions", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.session;
}

export async function getConversationFlowSession(
  conversationSessionId: string,
): Promise<SessionEnvelope> {
  const headers = await getConversationHeaders();
  const response = await apiRequest<SessionEnvelope>(
    `/conversation-flow/sessions/${conversationSessionId}`,
    { headers },
  );

  return response.data;
}

export async function appendConversationFlowMessage(input: {
  conversationSessionId: string;
  content: string;
  language?: string;
}): Promise<ConversationTurnResponse> {
  const headers = await getConversationHeaders();
  const response = await apiRequest<ConversationTurnResponse>(
    `/conversation-flow/sessions/${input.conversationSessionId}/messages`,
    {
      method: "POST",
      headers,
      body: {
        content: input.content,
        language: input.language ?? "en",
      },
    },
  );

  return response.data;
}

export async function fetchConversationFlowTriage(
  conversationSessionId: string,
): Promise<TriageEnvelope> {
  const headers = await getConversationHeaders();
  const response = await apiRequest<TriageEnvelope>(
    `/conversation-flow/sessions/${conversationSessionId}/triage`,
    { headers },
  );

  return response.data;
}

export async function fetchConversationFlowRecommendations(
  conversationSessionId: string,
): Promise<RecommendationsEnvelope> {
  const headers = await getConversationHeaders();
  const response = await apiRequest<RecommendationsEnvelope>(
    `/conversation-flow/sessions/${conversationSessionId}/recommendations`,
    { headers },
  );

  return response.data;
}

export async function fetchConversationFlowDetails(
  conversationSessionId: string,
): Promise<DetailsEnvelope> {
  const headers = await getConversationHeaders();
  const response = await apiRequest<DetailsEnvelope>(
    `/conversation-flow/sessions/${conversationSessionId}/details`,
    { headers },
  );

  return response.data;
}

export function buildMockConversationCategory(
  incidentCategory?: AssistantIncidentCategory,
): string {
  switch (incidentCategory) {
    case "domestic_violence":
      return "domestic_violence";
    case "racial_abuse":
      return "racism_discrimination";
    case "cyber_scam":
      return "scam_fraud";
    case "migrant_challenges":
      return "harassment";
    default:
      return "general_support";
  }
}
