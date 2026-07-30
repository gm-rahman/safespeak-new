import assert from "node:assert/strict";
import test from "node:test";

import { buildMockIncidentContext } from "../../src/lib/mock/incident-context";
import { MockContentRepository } from "../../src/lib/mock/content-repository";

const repo = new MockContentRepository();

test("an unrecognised topic falls back to general_assistant, never crashing", () => {
  const context = buildMockIncidentContext(repo, { topic: "totally-unknown-topic" });
  assert.equal(context.assistantTopic, "general_assistant");
});

test("a missing topic defaults to general_assistant", () => {
  const context = buildMockIncidentContext(repo, {});
  assert.equal(context.assistantTopic, "general_assistant");
});

test("topic alone never sets immediateDangerSignal", () => {
  const context = buildMockIncidentContext(repo, { topic: "domestic_violence" });
  assert.equal(context.immediateDangerSignal, undefined);
});

test("topic alone never sets reportingInterest/rightsInformationInterest/professionalSupportInterest/evidenceGuidanceInterest", () => {
  const context = buildMockIncidentContext(repo, { topic: "cyber_scam" });
  assert.equal(context.reportingInterest, undefined);
  assert.equal(context.rightsInformationInterest, undefined);
  assert.equal(context.professionalSupportInterest, undefined);
  assert.equal(context.evidenceGuidanceInterest, undefined);
});

test("a garbage timeline.urgencyLevel value is dropped rather than passed through", () => {
  const context = buildMockIncidentContext(repo, { topic: "domestic_violence", timeline: { urgencyLevel: "super mega high!!" } });
  assert.equal(context.urgency, undefined);
});

test("an exact-match timeline.urgencyLevel value is preserved (existing structured state used when unambiguous)", () => {
  const context = buildMockIncidentContext(repo, { topic: "domestic_violence", timeline: { urgencyLevel: "high" } });
  assert.equal(context.urgency, "high");
});

test("contextVersion and mockScenarioId are always present", () => {
  const context = buildMockIncidentContext(repo, { topic: "migrant_challenges" });
  assert.equal(context.contextVersion, 1);
  assert.equal(typeof context.mockScenarioId, "string");
  assert.ok(context.mockScenarioId.length > 0);
});

test("missing incident-type/triage-label candidates resolve to an empty array, never invented ids", () => {
  const context = buildMockIncidentContext(repo, { topic: "general_assistant" });
  assert.deepEqual(context.incidentTypeIds, []);
  assert.deepEqual(context.triageLabelIds, []);
});
