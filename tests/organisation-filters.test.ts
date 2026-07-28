import assert from "node:assert/strict";
import test from "node:test";

import {
  initialsForName,
  normalizeSupportService,
  telHref,
  type OrganisationRecord,
} from "../src/lib/organisation";
import {
  DEFAULT_AVAILABILITY_FILTERS,
  DEFAULT_ORGANISATION_FILTER_STATE,
  filterOrganisations,
  isFilterStateActive,
  mergeOrganisations,
  normalizeSearchText,
  sortOrganisations,
  type OrganisationFilterState,
} from "../src/lib/organisation-filters";
import type { SupportServiceRecord } from "../src/lib/support-client";

function makeOrg(overrides: Partial<OrganisationRecord>): OrganisationRecord {
  return {
    id: "org-1",
    name: "Example Service",
    initials: "ES",
    verified: false,
    description: "Example description",
    categories: [],
    jurisdiction: "national",
    dataSource: "demo",
    ...overrides,
  };
}

test("normalizeSearchText is case and accent insensitive", () => {
  assert.equal(normalizeSearchText("Café SUPPORT"), "cafe support");
  assert.equal(normalizeSearchText("  Trim Me  "), "trim me");
});

test("filterOrganisations matches free text against name, description and categories", () => {
  const orgs = [
    makeOrg({ id: "a", name: "Wirringa Baiya", description: "Aboriginal women's legal centre", categories: ["legal"] }),
    makeOrg({ id: "b", name: "Lifeline", description: "Crisis support line", categories: ["mental"] }),
  ];

  const state: OrganisationFilterState = { ...DEFAULT_ORGANISATION_FILTER_STATE, query: "legal" };
  const result = filterOrganisations(orgs, state, new Set());

  assert.deepEqual(result.map((org) => org.id), ["a"]);
});

test("filterOrganisations applies category, jurisdiction, availability and saved filters together", () => {
  const orgs = [
    makeOrg({
      id: "nsw-emergency-free",
      categories: ["housing"],
      jurisdiction: "NSW",
      isFree: true,
      isEmergency: true,
    }),
    makeOrg({ id: "nsw-paid", categories: ["housing"], jurisdiction: "NSW", isFree: false }),
    makeOrg({ id: "vic-free", categories: ["housing"], jurisdiction: "VIC", isFree: true }),
    makeOrg({ id: "nsw-legal", categories: ["legal"], jurisdiction: "NSW", isFree: true }),
  ];

  const state: OrganisationFilterState = {
    ...DEFAULT_ORGANISATION_FILTER_STATE,
    category: "housing",
    jurisdiction: "NSW",
    availability: { ...DEFAULT_AVAILABILITY_FILTERS, isFree: true },
  };

  const result = filterOrganisations(orgs, state, new Set());
  assert.deepEqual(result.map((org) => org.id), ["nsw-emergency-free"]);
});

test("filterOrganisations national organisations remain visible under any single-state jurisdiction filter", () => {
  const orgs = [makeOrg({ id: "national-one", jurisdiction: "national" })];
  const state: OrganisationFilterState = { ...DEFAULT_ORGANISATION_FILTER_STATE, jurisdiction: "VIC" };

  assert.deepEqual(filterOrganisations(orgs, state, new Set()).map((org) => org.id), ["national-one"]);
});

test("filterOrganisations savedOnly only returns organisations present in savedIds", () => {
  const orgs = [makeOrg({ id: "saved-1" }), makeOrg({ id: "not-saved" })];
  const state: OrganisationFilterState = { ...DEFAULT_ORGANISATION_FILTER_STATE, savedOnly: true };

  const result = filterOrganisations(orgs, state, new Set(["saved-1"]));
  assert.deepEqual(result.map((org) => org.id), ["saved-1"]);
});

test("sortOrganisations sorts alphabetically within a tier without mutating the source", () => {
  const orgs = [makeOrg({ id: "b", name: "Bravo" }), makeOrg({ id: "a", name: "Alpha" })];
  const sorted = sortOrganisations(orgs);

  assert.deepEqual(sorted.map((org) => org.id), ["a", "b"]);
  assert.deepEqual(orgs.map((org) => org.id), ["b", "a"]);
});

test("sortOrganisations surfaces emergency and 24/7 services ahead of alphabetically-earlier listings", () => {
  const orgs = [
    makeOrg({ id: "aardvark-info-only", name: "Aardvark Legal Information" }),
    makeOrg({ id: "lifeline", name: "Lifeline", isEmergency: true, is24_7: true }),
    makeOrg({ id: "zzz-24-7", name: "ZZZ Support Line", is24_7: true }),
  ];

  assert.deepEqual(sortOrganisations(orgs).map((org) => org.id), [
    "lifeline",
    "zzz-24-7",
    "aardvark-info-only",
  ]);
});

test("isFilterStateActive detects any non-default filter", () => {
  assert.equal(isFilterStateActive(DEFAULT_ORGANISATION_FILTER_STATE), false);
  assert.equal(
    isFilterStateActive({ ...DEFAULT_ORGANISATION_FILTER_STATE, query: "help" }),
    true
  );
  assert.equal(
    isFilterStateActive({
      ...DEFAULT_ORGANISATION_FILTER_STATE,
      availability: { ...DEFAULT_AVAILABILITY_FILTERS, is24_7: true },
    }),
    true
  );
});

test("mergeOrganisations prefers backend results and only falls back to demo data when backend is empty", () => {
  const backend = [makeOrg({ id: "backend-1", dataSource: "backend" })];
  const demo = [makeOrg({ id: "demo-1" })];

  assert.deepEqual(
    mergeOrganisations(backend, demo).map((org) => org.id),
    ["backend-1", "demo-1"]
  );
  assert.deepEqual(mergeOrganisations([], demo).map((org) => org.id), ["demo-1"]);
});

test("mergeOrganisations de-duplicates by id, keeping the backend record", () => {
  const backend = [makeOrg({ id: "shared-id", name: "Backend version", dataSource: "backend" })];
  const demo = [makeOrg({ id: "shared-id", name: "Demo version" })];

  const result = mergeOrganisations(backend, demo);
  assert.equal(result.length, 1);
  assert.equal(result[0].name, "Backend version");
});

test("initialsForName derives sensible initials", () => {
  assert.equal(initialsForName("Lifeline"), "LI");
  assert.equal(initialsForName("Women's and Girls' Emergency Centre"), "WC");
});

test("telHref builds a plain tel: link", () => {
  assert.equal(telHref("1800737732"), "tel:1800737732");
});

test("normalizeSupportService never claims free/24-7/emergency unless the source record says so", () => {
  const record: SupportServiceRecord = {
    name: "Community Legal Service",
    type: "legal_information",
    description: "Free legal advice for eligible community members.",
    jurisdiction: "NSW",
  };

  const organisation = normalizeSupportService(record, 0);

  assert.equal(organisation.verified, false);
  assert.equal(organisation.isFree, undefined);
  assert.equal(organisation.is24_7, undefined);
  assert.equal(organisation.isEmergency, undefined);
  assert.ok(organisation.categories.includes("legal"));
  assert.equal(organisation.dataSource, "backend");
});

test("normalizeSupportService marks emergency only when the backend record is explicitly flagged crisis", () => {
  const record: SupportServiceRecord = {
    name: "Crisis Line",
    description: "24/7 crisis support",
    crisis: true,
  };

  const organisation = normalizeSupportService(record, 0);
  assert.equal(organisation.isEmergency, true);
});

test("normalizeSupportService rejects unsafe website URLs instead of surfacing them", () => {
  const record: SupportServiceRecord = {
    name: "Suspicious Service",
    websiteUrl: "javascript:alert(1)",
  };

  const organisation = normalizeSupportService(record, 0);
  assert.equal(organisation.websiteUrl, undefined);
});
