import assert from "node:assert/strict";
import test from "node:test";

import {
  getAssistantTopicDefinition,
  isAssistantTopicKey,
  listAssistantTopicDefinitions,
} from "../../src/lib/mock/topic-registry";

test("all five documented topic keys are accepted", () => {
  for (const topic of ["general_assistant", "domestic_violence", "racial_abuse", "cyber_scam", "migrant_challenges"]) {
    assert.equal(isAssistantTopicKey(topic), true);
  }
});

test("an unknown topic key is rejected by isAssistantTopicKey but getAssistantTopicDefinition never throws", () => {
  assert.equal(isAssistantTopicKey("not_a_real_topic"), false);
  const definition = getAssistantTopicDefinition("not_a_real_topic");
  assert.equal(definition.topic, "general_assistant");
});

test("a missing/null/undefined topic falls back to general_assistant safely", () => {
  assert.equal(getAssistantTopicDefinition(undefined).topic, "general_assistant");
  assert.equal(getAssistantTopicDefinition(null).topic, "general_assistant");
  assert.equal(getAssistantTopicDefinition("").topic, "general_assistant");
});

test("the registry has exactly one definition per topic, and none embed full resource objects", () => {
  const definitions = listAssistantTopicDefinitions();
  assert.equal(definitions.length, 5);
  for (const def of definitions) {
    assert.equal(typeof def.displayLabel, "string");
    assert.equal(typeof def.mockScenarioId, "string");
    assert.ok(Array.isArray(def.candidateIncidentTypeMachineKeys));
    assert.ok(Array.isArray(def.candidateTriageLabelMachineKeys));
    assert.ok(Array.isArray(def.candidateSupportNeeds));
    // Candidates are machine-key strings, never objects — a full resource record would have an `id` field.
    for (const key of def.candidateIncidentTypeMachineKeys) {
      assert.equal(typeof key, "string");
    }
  }
});
