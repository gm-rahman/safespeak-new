import assert from "node:assert/strict";
import test from "node:test";

import { MockContentRepository } from "../../src/lib/mock/content-repository";

test("the repository loads and validates the committed generated bundle", () => {
  const repo = new MockContentRepository();
  assert.equal(repo.isReady(), true);
  assert.equal(repo.getLoadError(), null);
});

test("getManifest exposes schema version, purpose, and record counts once ready", () => {
  const repo = new MockContentRepository();
  const manifest = repo.getManifest();
  assert.ok(manifest);
  assert.equal(manifest!.schemaVersion, "1.0.0");
  assert.equal(manifest!.purpose, "published_content");
  assert.ok(typeof manifest!.recordCounts.microcards === "number");
});

test("list() returns a typed array for every domain, and an empty array is a valid outcome", () => {
  const repo = new MockContentRepository();
  for (const domain of [
    "incidentTypes",
    "triageLabels",
    "resourceCategories",
    "legislationSources",
    "microcards",
    "rightsContent",
    "supportOrganisations",
    "supportProfessionals",
    "reportingDestinations",
    "matchingRules",
  ] as const) {
    assert.ok(Array.isArray(repo.list(domain)));
  }
});

test("getById resolves a real record and returns undefined for a missing id, never throwing", () => {
  const repo = new MockContentRepository();
  const microcards = repo.list("microcards");
  if (microcards.length > 0) {
    const found = repo.getById("microcards", microcards[0]!.id);
    assert.equal(found?.id, microcards[0]!.id);
  }
  assert.equal(repo.getById("microcards", "definitely-not-a-real-id"), undefined);
});

test("no admin-only field leaks onto a published matching rule (no internalNotes, createdBy, updatedBy)", () => {
  const repo = new MockContentRepository();
  for (const rule of repo.list("matchingRules")) {
    assert.equal((rule as Record<string, unknown>).internalNotes, undefined);
    assert.equal((rule as Record<string, unknown>).createdBy, undefined);
    assert.equal((rule as Record<string, unknown>).updatedBy, undefined);
  }
});

test("every published matching rule's status is 'published' (never draft/archived/etc in the public bundle)", () => {
  const repo = new MockContentRepository();
  for (const rule of repo.list("matchingRules")) {
    assert.equal(rule.status, "published");
  }
});
