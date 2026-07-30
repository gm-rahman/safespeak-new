# Phase 6 — deterministic mock content + matching engine

This is a **mock-only** phase: no real AI, no real backend, no live sync with `safespeak-admin`, no production database. Its purpose is to make the eventual real integration a drop-in replacement for what's here, not a redesign.

## What's real vs. what's mock

- **Real, unchanged this phase**: the five Assistant entry routes, the demo Assistant conversation (`src/lib/demo-assistant-conversation.ts`), the Assistant→Triage transition (`saveAssistantTriageSource`, `src/lib/assistant-triage.ts`), the Triage page's existing design/layout/components.
- **Mock, new this phase**: everything under `src/lib/mock/`, plus the generated/copied files at `src/lib/contract/` and `src/lib/matching-rules/`.
- **Not real AI**: the demo Assistant conversation was already a deterministic keyword/stage machine before this phase (see `src/lib/demo-assistant-conversation.ts`) — Phase 6 does not add any conversation-text classification. `src/lib/mock/incident-context.ts` explicitly never inspects free-text chat content.

## The five Assistant topics

`src/lib/mock/topic-registry.ts` defines `AssistantTopicKey = "general_assistant" | "domestic_violence" | "racial_abuse" | "cyber_scam" | "migrant_challenges"`, matching the `topic` query param on all five `/dashboard?view=assistant&topic=...` routes. Each topic has a display label, a `mockScenarioId`, and a short list of *candidate* Incident Type/Triage Label machine keys — a best-effort hint only, resolved against whatever the loaded content bundle actually contains and silently dropped if absent. **Topic-based matching never depends on this resolution succeeding**: a Matching Rule's `topicKeys` condition is matched directly against `context.assistantTopic`, so a rule scoped only to a topic (no incident-type/triage-label condition) still triggers correctly even against an empty/placeholder bundle.

## Canonical contract + generated files (do not hand-edit)

`src/lib/contract/published-content-contract.ts`, `src/lib/matching-rules/engine.ts`, and `src/lib/contract/generated/published-content-bundle.json` are **copied byte-for-byte from `safespeak-admin`** by `safespeak-admin/scripts/generate-mock-bundle.ts`. To change any of them, edit the `safespeak-admin` originals and re-run `pnpm tsx scripts/generate-mock-bundle.ts` from `safespeak-admin/`, then re-run `pnpm mock-bundle:validate` here to confirm.

Schema version `"1.0.0"`, purpose `"published_content"` (an Admin Backup bundle, `purpose: "admin_backup"`, is explicitly rejected by `MockContentRepository`).

## Mock architecture (`src/lib/mock/`)

```
content-repository.ts   -> ContentRepository interface, MockContentRepository, FutureApiContentRepository (placeholder)
topic-registry.ts       -> AssistantTopicKey definitions
incident-context.ts     -> buildMockIncidentContext(repository, input): MockIncidentContext
triage-adapters.ts      -> PublishedX -> presentational-prop mapping functions (pure, no React)
triage-mock-types.ts    -> TriageAdvocateCard, TriageReportingDestinationCard (no existing type fit)
triage-recommendation-service.ts -> TriageRecommendationService / MockTriageRecommendationService
```

`ContentRepository` is the interface every consumer depends on — never the raw bundle import or (never) Admin's IndexedDB directly. `MockTriageRecommendationService.getRecommendations({ topic, timeline })`:
1. Builds a `MockIncidentContext` (topic + a small allow-list of exact-match `AssistantTimeline` fields already collected by the existing demo conversation — never free-text parsing).
2. Runs `runMockMatching()` from the copied `engine.ts` against the full bundle.
3. Resolves each matched record via the repository and maps it through the adapters into `TriageResourceGroup`/`TriageSupportOption`/`TriageAdvocateCard`/`TriageReportingDestinationCard`.

## Triage page integration

`src/components/dashboard/dashboard-report-submission-pages/report-submission-support-page.tsx` — additive only, in the existing "no live backend session" (demo) branch. A new `mockTriage` state and `shouldShowMockTriage` boolean gate a new sibling JSX block (not nested inside the pre-existing `demoTriage` block, since mock-matched content should render even when the legacy `buildDemoTriageOverview` has nothing — e.g. General Assistant with no `concernType` yet). New sections: two `TriageResourceGroup`s ("Suggested guides" from matched Microcards, "Rights & Legal Information" from matched Rights Content, reusing the existing `ResourceCard`), "Governed support recommendations" (matched Organisations, reusing `TriageSupportOptionCard` — deliberately a different heading than the pre-existing "Support options tailored to you" static section, so the two can coexist without a duplicate-looking heading), "Advocates & Counsellors" and "Reporting Destinations" (two new card components in `triage-mock-cards.tsx`, since no existing presentational type covered verification status or the anonymous/emergency tri-state). The pre-existing `conversationSessionId`-present (live backend) branch explicitly clears `mockTriage` — mock recommendations never apply there.

An empty match category is simply omitted (no section rendered) — never backfilled with the old generic hardcoded list and never shown as a disruptive empty-state box, per the mock-matching empty/error policy.

## Verification

- `pnpm mock-bundle:validate` — re-validates the committed generated bundle against this app's own copy of the contract schema, rejects Admin Backup / wrong schema version, checks for duplicate ids and dangling relationships.
- `pnpm test` — Node-native (`node:test` via `tsx`) unit tests under `tests/**/*.test.{ts,tsx}`, including `tests/unit/mock-content-repository.test.ts`, `topic-registry.test.ts`, `incident-context.test.ts`, `triage-adapters.test.ts`.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`.

## Deferred

Real AI/incident extraction, real backend/API, live Admin→Frontend sync, a dedicated Legislation Source Triage section (matched legislation sources are resolved but not yet rendered — no existing slot for them on this page), full historical Playwright E2E stabilisation.
