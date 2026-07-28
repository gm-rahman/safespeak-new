import type { SupportServiceRecord } from "@/lib/support-client";

export type OrganisationCategoryId =
  | "domestic"
  | "legal"
  | "mental"
  | "housing"
  | "financial"
  | "racism"
  | "workplace"
  | "children";

export const ORGANISATION_CATEGORY_IDS: OrganisationCategoryId[] = [
  "domestic",
  "legal",
  "mental",
  "housing",
  "financial",
  "racism",
  "workplace",
  "children",
];

export const ORGANISATION_CATEGORY_LABELS: Record<OrganisationCategoryId, string> = {
  domestic: "Domestic & Family Violence",
  legal: "Legal Help",
  mental: "Mental Health",
  housing: "Housing & Crisis",
  financial: "Financial Support",
  racism: "Racism & Discrimination",
  workplace: "Workplace Issues",
  children: "Children & Young People",
};

export const ORGANISATION_CATEGORY_CHIP_LABELS: Record<OrganisationCategoryId, string> = {
  domestic: "Domestic",
  legal: "Legal",
  mental: "Mental",
  housing: "Housing",
  financial: "Financial",
  racism: "Racism",
  workplace: "Workplace",
  children: "Children",
};

export const FEATURED_ORGANISATION_CATEGORIES: OrganisationCategoryId[] = [
  "domestic",
  "legal",
  "mental",
  "housing",
];

export type AustralianJurisdiction =
  | "national"
  | "NSW"
  | "VIC"
  | "QLD"
  | "WA"
  | "SA"
  | "TAS"
  | "ACT"
  | "NT";

export const AUSTRALIAN_JURISDICTIONS: AustralianJurisdiction[] = [
  "national",
  "NSW",
  "VIC",
  "QLD",
  "WA",
  "SA",
  "TAS",
  "ACT",
  "NT",
];

export const JURISDICTION_LABELS: Record<AustralianJurisdiction, string> = {
  national: "All AU",
  NSW: "NSW",
  VIC: "VIC",
  QLD: "QLD",
  WA: "WA",
  SA: "SA",
  TAS: "TAS",
  ACT: "ACT",
  NT: "NT",
};

/** Approximate state/territory capital coordinates, used only to place a
 * representative map pin for a service's coverage area. Not an organisation's
 * street address. */
export const JURISDICTION_CAPITAL_COORDINATES: Record<
  Exclude<AustralianJurisdiction, "national">,
  { lat: number; lng: number }
> = {
  NSW: { lat: -33.8688, lng: 151.2093 },
  VIC: { lat: -37.8136, lng: 144.9631 },
  QLD: { lat: -27.4698, lng: 153.0251 },
  WA: { lat: -31.9505, lng: 115.8605 },
  SA: { lat: -34.9285, lng: 138.6007 },
  TAS: { lat: -42.8821, lng: 147.3272 },
  ACT: { lat: -35.2809, lng: 149.13 },
  NT: { lat: -12.4634, lng: 130.8456 },
};

export type OrganisationCoordinates = { lat: number; lng: number };

/**
 * Canonical organisation/service view model shared by the directory cards,
 * the map, and the details drawer so no field ever drifts between surfaces.
 */
export type OrganisationRecord = {
  id: string;
  name: string;
  initials: string;
  logoUrl?: string;
  verified: boolean;
  serviceType?: string;
  description: string;
  categories: OrganisationCategoryId[];
  jurisdiction: AustralianJurisdiction;
  coverage?: string;
  phoneDisplay?: string;
  phoneDial?: string;
  websiteUrl?: string;
  address?: string;
  coordinates?: OrganisationCoordinates;
  hours?: string;
  is24_7?: boolean;
  isFree?: boolean;
  isEmergency?: boolean;
  cost?: string;
  languages?: string[];
  accessibility?: string;
  relatedOrganisationIds?: string[];
  dataSource: "backend" | "demo";
  lastVerifiedAt?: string;
};

export function initialsForName(name: string): string {
  const words = name
    .replace(/[()]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "?";
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

export function phoneDialValue(rawPhone: string): string {
  return rawPhone.replace(/[^\d+]/g, "");
}

export function telHref(phoneDial: string): string {
  return `tel:${phoneDial}`;
}

export function isSafeExternalUrl(value: string | undefined): value is string {
  if (!value) {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

const CATEGORY_KEYWORDS: Record<OrganisationCategoryId, string[]> = {
  domestic: ["domestic", "family violence", "intimate partner", "dfv", "coercive control"],
  legal: ["legal", "law", "rights", "advocate", "justice", "court", "avo", "tribunal"],
  mental: ["mental", "counsel", "psycholog", "wellbeing", "therapy", "crisis line", "lifeline"],
  housing: ["housing", "homeless", "shelter", "accommodation", "crisis accommodation", "refuge"],
  financial: ["financial", "money", "centrelink", "payment", "cost of living", "relief", "material aid"],
  racism: ["racis", "discrimination", "human rights", "hate", "cultural"],
  workplace: ["workplace", "employ", "fair work", "job", "harassment at work"],
  children: ["child", "youth", "young people", "kid", "teen", "school"],
};

export function detectCategoriesFromText(text: string): OrganisationCategoryId[] {
  const searchable = text.toLowerCase();
  const matches = ORGANISATION_CATEGORY_IDS.filter((categoryId) =>
    CATEGORY_KEYWORDS[categoryId].some((keyword) => searchable.includes(keyword))
  );

  return matches;
}

const JURISDICTION_ALIASES: Record<string, AustralianJurisdiction> = {
  nsw: "NSW",
  vic: "VIC",
  qld: "QLD",
  wa: "WA",
  sa: "SA",
  tas: "TAS",
  act: "ACT",
  nt: "NT",
  national: "national",
  au: "national",
  australia: "national",
};

export function normalizeJurisdiction(value?: string): AustralianJurisdiction {
  if (!value) {
    return "national";
  }

  return JURISDICTION_ALIASES[value.trim().toLowerCase()] ?? "national";
}

/**
 * Normalises a backend SupportServiceRecord into the canonical organisation
 * view model. Categories/coordinates are inferred heuristically since the
 * current backend schema does not carry them explicitly - nothing here
 * claims availability, cost, or verification the source record does not
 * provide.
 */
export function normalizeSupportService(
  record: SupportServiceRecord,
  index: number
): OrganisationRecord {
  const id = record.id ?? record._id ?? `backend-service-${index}`;
  const searchableText = `${record.name} ${record.type ?? ""} ${record.description ?? ""}`;
  const categories = detectCategoriesFromText(searchableText);
  const jurisdiction = normalizeJurisdiction(record.jurisdiction);
  const phoneDial = record.phone ? phoneDialValue(record.phone) : undefined;

  return {
    id,
    name: record.name,
    initials: initialsForName(record.name),
    logoUrl: record.cardImageUrl,
    verified: false,
    serviceType: record.type ? formatServiceTypeLabel(record.type) : undefined,
    description: record.description ?? "Support service available through SafeSpeak.",
    categories,
    jurisdiction,
    coverage: record.regions?.length ? record.regions.join(", ") : undefined,
    phoneDisplay: record.phone,
    phoneDial,
    websiteUrl: isSafeExternalUrl(record.websiteUrl) ? record.websiteUrl : undefined,
    address: record.address,
    coordinates: jurisdiction === "national" ? undefined : JURISDICTION_CAPITAL_COORDINATES[jurisdiction],
    hours: record.availabilityLabel,
    isEmergency: record.crisis === true ? true : undefined,
    languages: record.languages,
    dataSource: "backend",
  };
}

export function formatServiceTypeLabel(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
