import type { ContractJurisdiction, ContractUrgencyLevel, MockIncidentContext } from "@/lib/contract/published-content-contract";
import { CONTRACT_JURISDICTIONS, CONTRACT_URGENCY_LEVELS } from "@/lib/contract/published-content-contract";
import type { ContentRepository } from "@/lib/mock/content-repository";
import { getAssistantTopicDefinition, isAssistantTopicKey } from "@/lib/mock/topic-registry";

/**
 * Builds the deterministic `MockIncidentContext` the matching engine
 * consumes. This is explicitly NOT real AI incident extraction: it never
 * inspects or classifies free-text conversation content. Two sources only:
 *
 *  1. Existing STRUCTURED state, when it is already unambiguous — e.g. an
 *     `AssistantTimeline` value that is an exact, safe match for a known
 *     contract enum (`urgencyLevel: "high"` → `urgency: "high"`). A free-text
 *     value that doesn't exactly match a known enum is left unset, never
 *     guessed at.
 *  2. Deterministic topic-specific mock scenario data from the Assistant
 *     topic registry (`lib/mock/topic-registry.ts`) — resolved against
 *     whatever the loaded content bundle actually contains, silently
 *     dropping anything that doesn't resolve.
 *
 * Every field an actual conversation didn't clearly establish stays
 * `undefined` — never coerced to `false`, `[]` standing in for "no", or any
 * other implicit negative. `immediateDangerSignal` in particular is NEVER
 * derived from topic alone, and this phase has no reliable structured
 * safety-check input to derive it from at all, so it is always left
 * `undefined` here — a real safety signal is out of scope until a real
 * structured intake exists.
 */

export interface BuildMockIncidentContextInput {
  /** Raw `topic` query param / stored draft topic — validated safely, falls back to `general_assistant` if missing/unrecognised. */
  topic?: string | null;
  /** Free-form key/value bag already collected by the existing demo conversation (`AssistantTimeline`) — read for a small allow-list of exact-match fields only, never parsed as natural language. */
  timeline?: Record<string, string> | null;
  userLanguage?: string;
}

/**
 * The Assistant conversation's own urgency vocabulary (`DemoUrgencyLevel` in
 * `lib/demo-assistant-conversation.ts`: `"low" | "medium" | "high"`) predates
 * and is independent of the contract's `ContractUrgencyLevel`
 * (`"low" | "moderate" | "high" | "critical"`) — this is the one confirmed,
 * known synonym between the two vocabularies. Anything else that doesn't
 * exactly match a contract value stays unset, never guessed at.
 */
const URGENCY_SYNONYMS: Record<string, ContractUrgencyLevel> = {
  medium: "moderate",
};

function safeUrgency(raw: string | undefined): ContractUrgencyLevel | undefined {
  if (!raw) return undefined;
  const normalized = raw.trim().toLowerCase();
  if (URGENCY_SYNONYMS[normalized]) return URGENCY_SYNONYMS[normalized];
  return (CONTRACT_URGENCY_LEVELS as readonly string[]).includes(normalized) ? (normalized as ContractUrgencyLevel) : undefined;
}

function safeJurisdiction(raw: string | undefined): ContractJurisdiction | undefined {
  if (!raw) return undefined;
  const normalized = raw.trim().toLowerCase();
  return (CONTRACT_JURISDICTIONS as readonly string[]).includes(normalized) ? (normalized as ContractJurisdiction) : undefined;
}

function resolveCandidateIds(machineKeys: string[], records: Array<{ id: string; machineKey?: string }>): string[] {
  if (machineKeys.length === 0) return [];
  const byKey = new Map(records.filter((r) => r.machineKey).map((r) => [r.machineKey as string, r.id]));
  const resolved: string[] = [];
  for (const key of machineKeys) {
    const id = byKey.get(key);
    if (id) resolved.push(id);
  }
  return resolved;
}

export function buildMockIncidentContext(repository: ContentRepository, input: BuildMockIncidentContextInput): MockIncidentContext {
  const topicKey = input.topic && isAssistantTopicKey(input.topic) ? input.topic : "general_assistant";
  const definition = getAssistantTopicDefinition(topicKey);

  const timeline = input.timeline ?? {};

  const incidentTypeIds = repository.isReady()
    ? resolveCandidateIds(definition.candidateIncidentTypeMachineKeys, repository.list("incidentTypes"))
    : [];
  const triageLabelIds = repository.isReady()
    ? resolveCandidateIds(definition.candidateTriageLabelMachineKeys, repository.list("triageLabels"))
    : [];

  return {
    assistantTopic: topicKey,
    incidentTypeIds,
    triageLabelIds,
    jurisdiction: safeJurisdiction(timeline.jurisdiction) ?? definition.defaultJurisdiction,
    urgency: safeUrgency(timeline.urgencyLevel),
    supportNeeds: definition.candidateSupportNeeds,
    userLanguage: input.userLanguage,
    // Not derived in this phase — no reliable structured signal exists yet for any of the four below.
    reportingInterest: undefined,
    rightsInformationInterest: undefined,
    professionalSupportInterest: undefined,
    evidenceGuidanceInterest: undefined,
    immediateDangerSignal: undefined,
    mockScenarioId: definition.mockScenarioId,
    contextVersion: 1,
  };
}
