import { CONTRACT_ASSISTANT_TOPIC_KEYS, type ContractJurisdiction } from "@/lib/contract/published-content-contract";

/**
 * The five Assistant entry topics this app routes on
 * (`/dashboard?view=assistant&topic=...`). This registry is deliberately
 * thin: display metadata + a short list of CANDIDATE incident-type/triage-
 * label machine keys and free-text support-need hints — never full resource
 * records (no Microcard/Organisation/Professional/Destination objects are
 * embedded here). Which content actually surfaces for a topic is always
 * decided by the deterministic matching engine evaluating Matching Rules
 * against a `MockIncidentContext`, not by anything hardcoded in this file.
 *
 * "Candidate" machine keys are a best-effort refinement hint only: resolved
 * against whatever the loaded mock content bundle actually contains
 * (`resolveCandidateIds` in `incident-context.ts`), and silently dropped —
 * never invented, never thrown on — if a key isn't present in a given
 * bundle. Topic-based matching itself never depends on this resolution
 * succeeding, since every Matching Rule's `topicKeys` condition is matched
 * directly against `context.assistantTopic`.
 */
export type AssistantTopicKey = (typeof CONTRACT_ASSISTANT_TOPIC_KEYS)[number];

export interface AssistantTopicDefinition {
  topic: AssistantTopicKey;
  displayLabel: string;
  /** A fixed id identifying which deterministic demo scenario this topic uses — surfaced in `MockIncidentContext.mockScenarioId` for test-matching/debug transparency, never used for matching itself. */
  mockScenarioId: string;
  /** Incident Type machine keys this topic is plausibly relevant to — a hint, not a confirmed diagnosis. Topic alone must never be read as confirming any of these incident types occurred. */
  candidateIncidentTypeMachineKeys: string[];
  /** Triage Label machine keys this topic is plausibly relevant to — indicators only, never a legal or clinical finding. */
  candidateTriageLabelMachineKeys: string[];
  candidateSupportNeeds: string[];
  defaultJurisdiction?: ContractJurisdiction;
}

const REGISTRY: Record<AssistantTopicKey, AssistantTopicDefinition> = {
  general_assistant: {
    topic: "general_assistant",
    displayLabel: "General Assistant",
    mockScenarioId: "scenario-general-assistant-v1",
    candidateIncidentTypeMachineKeys: [],
    candidateTriageLabelMachineKeys: [],
    candidateSupportNeeds: ["general_information", "next_steps"],
  },
  domestic_violence: {
    topic: "domestic_violence",
    displayLabel: "Domestic Violence",
    mockScenarioId: "scenario-domestic-violence-v1",
    // No seeded Incident Type genuinely represents domestic/family violence
    // yet (only online_harassment/workplace_discrimination/hate_speech
    // exist) — left empty rather than forcing a false association; see
    // docs/ARCHITECTURE.md "Phase 6.1 — matching-rule/context parity."
    candidateIncidentTypeMachineKeys: [],
    candidateTriageLabelMachineKeys: ["immediate_danger", "needs_follow_up"],
    candidateSupportNeeds: ["safety_planning", "crisis_support", "legal_support"],
  },
  racial_abuse: {
    topic: "racial_abuse",
    displayLabel: "Racial Abuse",
    mockScenarioId: "scenario-racial-abuse-v1",
    candidateIncidentTypeMachineKeys: ["hate_speech", "online_harassment"],
    candidateTriageLabelMachineKeys: ["religious_bias_indicator", "needs_follow_up"],
    candidateSupportNeeds: ["community_support", "legal_support"],
  },
  cyber_scam: {
    topic: "cyber_scam",
    displayLabel: "Cyber Scam",
    mockScenarioId: "scenario-cyber-scam-v1",
    // No seeded Incident Type represents a cyber scam yet — left empty
    // rather than reusing an unrelated one (e.g. online_harassment) that
    // does not actually describe a scam.
    candidateIncidentTypeMachineKeys: [],
    candidateTriageLabelMachineKeys: ["needs_follow_up"],
    candidateSupportNeeds: ["evidence_preservation", "reporting_support"],
  },
  migrant_challenges: {
    topic: "migrant_challenges",
    displayLabel: "Migrant Challenges",
    mockScenarioId: "scenario-migrant-challenges-v1",
    // No seeded Incident Type represents a migrant-specific challenge yet.
    candidateIncidentTypeMachineKeys: [],
    candidateTriageLabelMachineKeys: ["needs_follow_up"],
    candidateSupportNeeds: ["community_support", "general_information"],
  },
};

export function getAssistantTopicDefinition(topic: string | undefined | null): AssistantTopicDefinition {
  if (topic && isAssistantTopicKey(topic)) return REGISTRY[topic];
  // Unknown/missing topic never crashes and never produces random results — falls back to the safe, neutral general scenario.
  return REGISTRY.general_assistant;
}

export function isAssistantTopicKey(value: string): value is AssistantTopicKey {
  return (CONTRACT_ASSISTANT_TOPIC_KEYS as readonly string[]).includes(value);
}

export function listAssistantTopicDefinitions(): AssistantTopicDefinition[] {
  return CONTRACT_ASSISTANT_TOPIC_KEYS.map((topic) => REGISTRY[topic]);
}
