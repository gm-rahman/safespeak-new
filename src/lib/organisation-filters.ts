import {
  JURISDICTION_LABELS,
  ORGANISATION_CATEGORY_LABELS,
  type AustralianJurisdiction,
  type OrganisationCategoryId,
  type OrganisationRecord,
} from "@/lib/organisation";

export type OrganisationAvailabilityFilters = {
  is24_7: boolean;
  isFree: boolean;
  isEmergency: boolean;
};

export type OrganisationFilterState = {
  query: string;
  category: OrganisationCategoryId | null;
  jurisdiction: AustralianJurisdiction | null;
  availability: OrganisationAvailabilityFilters;
  savedOnly: boolean;
};

export const DEFAULT_AVAILABILITY_FILTERS: OrganisationAvailabilityFilters = {
  is24_7: false,
  isFree: false,
  isEmergency: false,
};

export const DEFAULT_ORGANISATION_FILTER_STATE: OrganisationFilterState = {
  query: "",
  category: null,
  jurisdiction: null,
  availability: DEFAULT_AVAILABILITY_FILTERS,
  savedOnly: false,
};

/** Case- and accent-insensitive text normaliser used for both search and matching. */
export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function organisationSearchHaystack(organisation: OrganisationRecord): string {
  return normalizeSearchText(
    [
      organisation.name,
      organisation.description,
      organisation.serviceType ?? "",
      organisation.coverage ?? "",
      JURISDICTION_LABELS[organisation.jurisdiction],
      ...organisation.categories.map((category) => ORGANISATION_CATEGORY_LABELS[category]),
    ].join(" ")
  );
}

const STOPWORDS = new Set(["and", "the", "for", "are", "you", "your", "with", "near", "tonight"]);

/**
 * Free-text queries here range from short keyword searches ("legal aid") to
 * full natural-language descriptions from the AI concierge ("I need a safe
 * place to stay tonight near Melbourne"). Requiring the whole query to
 * appear verbatim (a single substring match) almost never matches a real
 * sentence, so instead we tokenise the query and match an organisation if
 * any significant word appears in its searchable text - optimising for
 * recall, which matters more than precision for a support directory.
 */
function significantQueryTokens(query: string): string[] {
  return normalizeSearchText(query)
    .split(/\s+/)
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token));
}

export function organisationMatchesQuery(organisation: OrganisationRecord, query: string): boolean {
  const tokens = significantQueryTokens(query);

  if (tokens.length === 0) {
    return true;
  }

  const haystack = organisationSearchHaystack(organisation);
  return tokens.some((token) => haystack.includes(token));
}

/**
 * Canonical filter pipeline shared by every surface (search box, AI
 * concierge, featured categories, chips, jurisdiction/availability filters,
 * saved-only toggle, list view, and map view) so results can never diverge
 * between them. Does not mutate the source array.
 */
export function filterOrganisations(
  organisations: OrganisationRecord[],
  state: OrganisationFilterState,
  savedIds: ReadonlySet<string>
): OrganisationRecord[] {
  return organisations.filter((organisation) => {
    if (!organisationMatchesQuery(organisation, state.query)) {
      return false;
    }

    if (state.category && !organisation.categories.includes(state.category)) {
      return false;
    }

    if (
      state.jurisdiction &&
      state.jurisdiction !== "national" &&
      organisation.jurisdiction !== state.jurisdiction &&
      organisation.jurisdiction !== "national"
    ) {
      return false;
    }

    if (state.availability.is24_7 && !organisation.is24_7) {
      return false;
    }

    if (state.availability.isFree && !organisation.isFree) {
      return false;
    }

    if (state.availability.isEmergency && !organisation.isEmergency) {
      return false;
    }

    if (state.savedOnly && !savedIds.has(organisation.id)) {
      return false;
    }

    return true;
  });
}

function safetyRelevanceTier(organisation: OrganisationRecord): number {
  if (organisation.isEmergency) {
    return 0;
  }

  if (organisation.is24_7) {
    return 1;
  }

  return 2;
}

/**
 * Deterministic sort that surfaces emergency-capable and 24/7 services
 * first (never relies on insertion order alone), then falls back to
 * alphabetical order within each tier. A safety directory should not bury
 * a crisis line behind alphabetically-earlier informational listings.
 */
export function sortOrganisations(organisations: OrganisationRecord[]): OrganisationRecord[] {
  return [...organisations].sort((a, b) => {
    const tierDifference = safetyRelevanceTier(a) - safetyRelevanceTier(b);

    if (tierDifference !== 0) {
      return tierDifference;
    }

    return a.name.localeCompare(b.name);
  });
}

export function isFilterStateActive(state: OrganisationFilterState): boolean {
  return (
    Boolean(state.query.trim()) ||
    Boolean(state.category) ||
    Boolean(state.jurisdiction) ||
    state.availability.is24_7 ||
    state.availability.isFree ||
    state.availability.isEmergency ||
    state.savedOnly
  );
}

/** Deduplicates by id, keeping the first occurrence (backend precedence). */
export function dedupeOrganisationsById(organisations: OrganisationRecord[]): OrganisationRecord[] {
  const seen = new Set<string>();
  const result: OrganisationRecord[] = [];

  for (const organisation of organisations) {
    if (seen.has(organisation.id)) {
      continue;
    }

    seen.add(organisation.id);
    result.push(organisation);
  }

  return result;
}

/**
 * Backend data always wins over demo data for the same id. Demo records
 * only fill in when the backend has not returned anything at all, mirroring
 * the existing "local fallback resources" behaviour already used on this
 * page.
 */
export function mergeOrganisations(
  backendOrganisations: OrganisationRecord[],
  demoOrganisations: OrganisationRecord[]
): OrganisationRecord[] {
  if (backendOrganisations.length > 0) {
    return dedupeOrganisationsById([...backendOrganisations, ...demoOrganisations]);
  }

  return demoOrganisations;
}
