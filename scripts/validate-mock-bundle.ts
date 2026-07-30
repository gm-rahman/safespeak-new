#!/usr/bin/env -S tsx
/**
 * Frontend-side half of the Phase 6 contract-parity check. The bundle JSON
 * and the contract/engine `.ts` files under `src/lib/contract/` +
 * `src/lib/matching-rules/` are GENERATED — copied byte-for-byte from
 * `safespeak-admin` by `safespeak-admin/scripts/generate-mock-bundle.ts`.
 * Never hand-edit them; re-run that script from `safespeak-admin/` instead.
 *
 * This script re-validates the committed bundle against THIS app's own copy
 * of the Zod schema (not admin's) and rejects an Admin Backup bundle
 * (`purpose !== "published_content"`) or an unsupported schema version —
 * the same checks `MockContentRepository` performs at runtime, run here
 * standalone so a broken fixture fails CI/build before the app ever loads it.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { PUBLIC_CONTRACT_SCHEMA_VERSION, publishedMockContentBundleSchema } from "../src/lib/contract/published-content-contract";

const __dirname = dirname(fileURLToPath(import.meta.url));
const bundlePath = join(__dirname, "..", "src", "lib", "contract", "generated", "published-content-bundle.json");

function main() {
  const raw = readFileSync(bundlePath, "utf8");
  const parsed = JSON.parse(raw);

  const result = publishedMockContentBundleSchema.safeParse(parsed);
  if (!result.success) {
    console.error("[validate-mock-bundle] Bundle failed schema validation:", result.error);
    process.exit(1);
  }

  const { manifest, data } = result.data;

  if (manifest.schemaVersion !== PUBLIC_CONTRACT_SCHEMA_VERSION) {
    console.error(
      `[validate-mock-bundle] Unsupported schema version "${manifest.schemaVersion}" — this app expects "${PUBLIC_CONTRACT_SCHEMA_VERSION}".`
    );
    process.exit(1);
  }
  if (manifest.purpose !== "published_content") {
    console.error(`[validate-mock-bundle] Refusing an Admin Backup bundle (purpose="${manifest.purpose}") — expected "published_content".`);
    process.exit(1);
  }

  // Duplicate-ID and dangling-relationship checks — belt-and-braces on top
  // of what the admin generator already guarantees, since this fixture is a
  // committed file a future change could hand-edit incorrectly.
  const allIds = new Map<string, Set<string>>();
  for (const [domain, records] of Object.entries(data) as [string, Array<{ id: string }>][]) {
    const seen = new Set<string>();
    for (const record of records) {
      if (seen.has(record.id)) {
        console.error(`[validate-mock-bundle] Duplicate id "${record.id}" in domain "${domain}".`);
        process.exit(1);
      }
      seen.add(record.id);
    }
    allIds.set(domain, seen);
  }

  const relationshipChecks: Array<[string, keyof typeof data, string[]]> = [];
  for (const rule of data.matchingRules) {
    relationshipChecks.push([`matchingRule:${rule.id}:microcardIds`, "microcards", rule.microcardIds]);
    relationshipChecks.push([`matchingRule:${rule.id}:rightsContentIds`, "rightsContent", rule.rightsContentIds]);
    relationshipChecks.push([`matchingRule:${rule.id}:supportOrganisationIds`, "supportOrganisations", rule.supportOrganisationIds]);
    relationshipChecks.push([`matchingRule:${rule.id}:supportProfessionalIds`, "supportProfessionals", rule.supportProfessionalIds]);
    relationshipChecks.push([`matchingRule:${rule.id}:reportingDestinationIds`, "reportingDestinations", rule.reportingDestinationIds]);
    relationshipChecks.push([`matchingRule:${rule.id}:legislationIds`, "legislationSources", rule.legislationIds]);
  }

  let danglingFound = false;
  for (const [label, domain, ids] of relationshipChecks) {
    const validIds = allIds.get(domain) ?? new Set();
    for (const id of ids) {
      if (!validIds.has(id)) {
        console.error(`[validate-mock-bundle] Dangling relationship: ${label} references missing id "${id}".`);
        danglingFound = true;
      }
    }
  }
  if (danglingFound) process.exit(1);

  console.log(
    `[validate-mock-bundle] OK — schema ${manifest.schemaVersion}, purpose "${manifest.purpose}", ${Object.entries(manifest.recordCounts)
      .map(([k, v]) => `${k}=${v}`)
      .join(", ")}.`
  );
}

main();
