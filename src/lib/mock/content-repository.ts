import bundleRaw from "@/lib/contract/generated/published-content-bundle.json";
import {
  PUBLIC_CONTRACT_SCHEMA_VERSION,
  publishedMockContentBundleSchema,
  type PublishedMockContentBundle,
  type PublishedMockContentDomain,
  type PublishedMockContentManifest,
} from "@/lib/contract/published-content-contract";

/**
 * Phase 6 content-repository boundary. `ContentRepository` is the interface
 * every Triage-facing consumer (adapters, `MockTriageRecommendationService`)
 * depends on — never the raw bundle import or Dexie/IndexedDB directly (the
 * Frontend must never access Admin IndexedDB). `MockContentRepository` is
 * the only implementation in this phase, backed by the generated, versioned
 * bundle at `src/lib/contract/generated/published-content-bundle.json`
 * (produced by `safespeak-admin/scripts/generate-mock-bundle.ts` — never
 * hand-edited). `FutureApiContentRepository` is a documented placeholder
 * only, so a later real-API implementation can satisfy the same
 * `ContentRepository` interface without any Triage component changing.
 */

export type ContentDomain = PublishedMockContentDomain;

export interface ContentRepository {
  /** `false` when the bundle failed to load/validate — every list/get call returns an empty/undefined result in that state, never throws. */
  isReady(): boolean;
  /** Present only once `isReady()` is true. */
  getManifest(): PublishedMockContentManifest | null;
  /** A short, safe-to-render (never a raw stack trace) description of why loading failed, or `null` when there is no error. */
  getLoadError(): string | null;
  list<K extends ContentDomain>(domain: K): PublishedMockContentBundle["data"][K];
  getById<K extends ContentDomain>(domain: K, id: string): PublishedMockContentBundle["data"][K][number] | undefined;
}

interface LoadResult {
  bundle: PublishedMockContentBundle | null;
  error: string | null;
}

function detectDuplicateIds(data: PublishedMockContentBundle["data"]): string | null {
  for (const [domain, records] of Object.entries(data) as [ContentDomain, Array<{ id: string }>][]) {
    const seen = new Set<string>();
    for (const record of records) {
      if (seen.has(record.id)) return `Duplicate id "${record.id}" found in domain "${domain}".`;
      seen.add(record.id);
    }
  }
  return null;
}

function detectDanglingRelationships(data: PublishedMockContentBundle["data"]): string | null {
  const idsByDomain: Partial<Record<ContentDomain, Set<string>>> = {};
  for (const [domain, records] of Object.entries(data) as [ContentDomain, Array<{ id: string }>][]) {
    idsByDomain[domain] = new Set(records.map((r) => r.id));
  }

  for (const rule of data.matchingRules) {
    const relationshipsToCheck: Array<[ContentDomain, string[]]> = [
      ["microcards", rule.microcardIds],
      ["rightsContent", rule.rightsContentIds],
      ["supportOrganisations", rule.supportOrganisationIds],
      ["supportProfessionals", rule.supportProfessionalIds],
      ["reportingDestinations", rule.reportingDestinationIds],
      ["legislationSources", rule.legislationIds],
    ];
    for (const [domain, ids] of relationshipsToCheck) {
      const validIds = idsByDomain[domain] ?? new Set<string>();
      for (const id of ids) {
        if (!validIds.has(id)) {
          return `Matching rule "${rule.id}" references a missing "${domain}" id "${id}".`;
        }
      }
    }
  }
  return null;
}

function loadBundle(): LoadResult {
  const parsed = publishedMockContentBundleSchema.safeParse(bundleRaw);
  if (!parsed.success) {
    return { bundle: null, error: "The mock content bundle failed schema validation and could not be loaded." };
  }

  const { manifest, data } = parsed.data;

  if (manifest.purpose !== "published_content") {
    return { bundle: null, error: "Refused to load an Admin Backup bundle — only a Published Content bundle is valid here." };
  }
  if (manifest.schemaVersion !== PUBLIC_CONTRACT_SCHEMA_VERSION) {
    return {
      bundle: null,
      error: `Unsupported mock content contract version "${manifest.schemaVersion}" — this app expects "${PUBLIC_CONTRACT_SCHEMA_VERSION}".`,
    };
  }

  const duplicateError = detectDuplicateIds(data);
  if (duplicateError) return { bundle: null, error: duplicateError };

  const danglingError = detectDanglingRelationships(data);
  if (danglingError) return { bundle: null, error: danglingError };

  return { bundle: parsed.data, error: null };
}

// Loaded and validated once per process — the bundle is a static, versioned
// build artifact, not something that changes at runtime.
let cachedLoad: LoadResult | null = null;
function getLoadResult(): LoadResult {
  if (!cachedLoad) cachedLoad = loadBundle();
  return cachedLoad;
}

export class MockContentRepository implements ContentRepository {
  isReady(): boolean {
    return getLoadResult().bundle !== null;
  }

  getManifest(): PublishedMockContentManifest | null {
    return getLoadResult().bundle?.manifest ?? null;
  }

  getLoadError(): string | null {
    return getLoadResult().error;
  }

  list<K extends ContentDomain>(domain: K): PublishedMockContentBundle["data"][K] {
    const bundle = getLoadResult().bundle;
    if (!bundle) return [] as PublishedMockContentBundle["data"][K];
    return bundle.data[domain];
  }

  getById<K extends ContentDomain>(domain: K, id: string): PublishedMockContentBundle["data"][K][number] | undefined {
    return (this.list(domain) as Array<{ id: string }>).find((record) => record.id === id) as
      | PublishedMockContentBundle["data"][K][number]
      | undefined;
  }
}

/**
 * Documented placeholder only — NOT implemented in this phase (no real
 * backend/API exists to call). Exists so the `ContentRepository` interface
 * is proven swappable without redesigning any Triage component when a real
 * API-backed content service is built later.
 */
export class FutureApiContentRepository implements ContentRepository {
  isReady(): boolean {
    return false;
  }
  getManifest(): PublishedMockContentManifest | null {
    return null;
  }
  getLoadError(): string | null {
    return "FutureApiContentRepository is a Phase 6 placeholder and is not implemented.";
  }
  list<K extends ContentDomain>(_domain: K): PublishedMockContentBundle["data"][K] {
    throw new Error("FutureApiContentRepository is not implemented in this phase.");
  }
  getById<K extends ContentDomain>(_domain: K, _id: string): PublishedMockContentBundle["data"][K][number] | undefined {
    throw new Error("FutureApiContentRepository is not implemented in this phase.");
  }
}

let sharedRepository: ContentRepository | null = null;
/** The one repository instance the rest of the mock triage stack should use — avoids re-parsing/re-validating the bundle on every call site. */
export function getContentRepository(): ContentRepository {
  if (!sharedRepository) sharedRepository = new MockContentRepository();
  return sharedRepository;
}
