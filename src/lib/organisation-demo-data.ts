import {
  JURISDICTION_CAPITAL_COORDINATES,
  initialsForName,
  phoneDialValue,
  type OrganisationRecord,
} from "@/lib/organisation";

/**
 * SafeSpeak demo support directory.
 *
 * This is fallback/demo data only - it is used when the live
 * `/support/services` backend has no matching records (see
 * `getMergedOrganisations` in `organisation-directory.ts`), exactly like the
 * pre-existing "local fallback resources" pattern already used on this page.
 *
 * Every organisation listed is a real, named Australian service. To avoid
 * publishing an incorrect emergency contact in a safety product, a phone
 * number or website is only included where it is a well-established, widely
 * published contact for that service. Where that confidence bar isn't met,
 * the field is left out entirely - the UI already hides Call/Visit actions
 * gracefully when a field is missing, so an incomplete record degrades
 * safely instead of guessing.
 */

function demoOrg(
  input: Omit<OrganisationRecord, "initials" | "phoneDial" | "dataSource" | "verified"> & {
    phone?: string;
  }
): OrganisationRecord {
  const { phone, ...rest } = input;

  return {
    ...rest,
    initials: initialsForName(input.name),
    phoneDisplay: phone,
    phoneDial: phone ? phoneDialValue(phone) : undefined,
    dataSource: "demo",
    verified: false,
  };
}

function capitalCoordinates(jurisdiction: OrganisationRecord["jurisdiction"]) {
  return jurisdiction === "national" ? undefined : JURISDICTION_CAPITAL_COORDINATES[jurisdiction];
}

export const DEMO_ORGANISATIONS: OrganisationRecord[] = [
  demoOrg({
    id: "1800respect",
    name: "1800RESPECT",
    serviceType: "National helpline",
    description:
      "National domestic, family and sexual violence counselling helpline, available online and by phone, 24 hours a day.",
    categories: ["domestic", "mental"],
    jurisdiction: "national",
    coverage: "National",
    phone: "1800 737 732",
    websiteUrl: "https://www.1800respect.org.au",
    hours: "24 hours, 7 days",
    is24_7: true,
    isFree: true,
    isEmergency: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
    relatedOrganisationIds: ["wagec", "acon", "lifeline"],
  }),
  demoOrg({
    id: "lifeline",
    name: "Lifeline",
    serviceType: "Crisis support line",
    description:
      "24/7 crisis support and suicide prevention service offering telephone, text and online chat crisis support.",
    categories: ["mental"],
    jurisdiction: "national",
    coverage: "National",
    phone: "13 11 14",
    websiteUrl: "https://www.lifeline.org.au",
    hours: "24 hours, 7 days",
    is24_7: true,
    isFree: true,
    isEmergency: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
    relatedOrganisationIds: ["1800respect", "beyondblue", "kidshelpline"],
  }),
  demoOrg({
    id: "kidshelpline",
    name: "Kids Helpline",
    serviceType: "Helpline",
    description:
      "Free, private and confidential 24/7 phone and online counselling service for young people aged 5 to 25.",
    categories: ["children", "mental"],
    jurisdiction: "national",
    coverage: "National",
    phone: "1800 55 1800",
    websiteUrl: "https://kidshelpline.com.au",
    hours: "24 hours, 7 days",
    is24_7: true,
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
    relatedOrganisationIds: ["lifeline", "beyondblue"],
  }),
  demoOrg({
    id: "mensline",
    name: "MensLine Australia",
    serviceType: "Helpline",
    description:
      "Telephone and online support, information and referral service for men dealing with family and relationship difficulties.",
    categories: ["mental", "domestic"],
    jurisdiction: "national",
    coverage: "National",
    phone: "1300 78 99 78",
    websiteUrl: "https://mensline.org.au",
    hours: "24 hours, 7 days",
    is24_7: true,
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "beyondblue",
    name: "Beyond Blue",
    serviceType: "Mental health support",
    description:
      "Information and telephone/online support for anxiety, depression and mental wellbeing, available around the clock.",
    categories: ["mental"],
    jurisdiction: "national",
    coverage: "National",
    phone: "1300 22 4636",
    websiteUrl: "https://www.beyondblue.org.au",
    hours: "24 hours, 7 days",
    is24_7: true,
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "acon",
    name: "ACON",
    serviceType: "Community health organisation",
    description:
      "Community health organisation supporting LGBTQ+ people in NSW, including domestic and family violence support and health services.",
    categories: ["domestic", "mental"],
    jurisdiction: "NSW",
    coverage: "NSW",
    websiteUrl: "https://www.acon.org.au",
    coordinates: capitalCoordinates("NSW"),
    relatedOrganisationIds: ["1800respect", "twenty10", "wagec"],
  }),
  demoOrg({
    id: "anrows",
    name: "ANROWS",
    serviceType: "Research organisation",
    description:
      "Australia's National Research Organisation for Women's Safety - produces evidence to prevent violence against women and their children. Information only, not a direct support line.",
    categories: ["domestic"],
    jurisdiction: "national",
    coverage: "National",
    websiteUrl: "https://www.anrows.org.au",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "ask-izzy",
    name: "Ask Izzy",
    serviceType: "Service finder",
    description:
      "Free website that helps people find and connect to local services for housing, food, money, family violence support and more, in over ten languages.",
    categories: ["housing", "financial", "domestic"],
    jurisdiction: "national",
    coverage: "National",
    websiteUrl: "https://askizzy.org.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
    relatedOrganisationIds: ["vinnies", "salvos"],
  }),
  demoOrg({
    id: "centrelink-social-work",
    name: "Centrelink Social Work Services",
    serviceType: "Government service",
    description:
      "Services Australia social workers who can provide short-term counselling, information and support during a crisis, including safety planning referrals.",
    categories: ["financial", "housing"],
    jurisdiction: "national",
    coverage: "National",
    websiteUrl: "https://www.servicesaustralia.gov.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "clc-nsw",
    name: "Community Legal Centres NSW",
    serviceType: "Legal peak body",
    description:
      "Peak body for community legal centres in NSW, which provide free legal advice, casework and community legal education.",
    categories: ["legal"],
    jurisdiction: "NSW",
    coverage: "NSW",
    websiteUrl: "https://www.clcnsw.org.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("NSW"),
    relatedOrganisationIds: ["wirringa-baiya", "lawaccess-nsw"],
  }),
  demoOrg({
    id: "clc-australia",
    name: "Community Legal Centres Australia",
    serviceType: "Legal peak body",
    description:
      "National peak body representing community legal centres, which provide free legal help to people who cannot afford a lawyer.",
    categories: ["legal"],
    jurisdiction: "national",
    coverage: "National",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "service-nsw-cost-of-living",
    name: "Service NSW — Cost of Living",
    serviceType: "Government service",
    description:
      "NSW Government service finder for cost-of-living rebates, vouchers and payments available to eligible NSW residents.",
    categories: ["financial"],
    jurisdiction: "NSW",
    coverage: "NSW",
    phone: "13 77 88",
    websiteUrl: "https://www.service.nsw.gov.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("NSW"),
  }),
  demoOrg({
    id: "service-nsw-dfv",
    name: "Service NSW — Domestic and Family Violence",
    serviceType: "Government service",
    description:
      "NSW Government information hub connecting people affected by domestic and family violence to safety, legal, housing and financial support.",
    categories: ["domestic", "legal"],
    jurisdiction: "NSW",
    coverage: "NSW",
    phone: "1800 737 732",
    websiteUrl: "https://www.service.nsw.gov.au",
    isFree: true,
    isEmergency: true,
    cost: "Free",
    coordinates: capitalCoordinates("NSW"),
  }),
  demoOrg({
    id: "services-australia-fdv",
    name: "Services Australia — Family and Domestic Violence Help",
    serviceType: "Government service",
    description:
      "Services Australia information hub on payments, social work support and safety options for people experiencing family or domestic violence.",
    categories: ["domestic", "financial"],
    jurisdiction: "national",
    coverage: "National",
    phone: "1800 737 732",
    websiteUrl: "https://www.servicesaustralia.gov.au",
    isFree: true,
    isEmergency: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "vinnies",
    name: "St Vincent de Paul Society (Vinnies)",
    serviceType: "Community organisation",
    description:
      "Provides emergency relief, material aid, financial counselling and community support services across Australia.",
    categories: ["financial", "housing"],
    jurisdiction: "national",
    coverage: "National",
    phone: "13 18 12",
    websiteUrl: "https://www.vinnies.org.au",
    isFree: true,
    cost: "Free or low-cost",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "stay-safe-online-dcj",
    name: "Stay Safe Online (DCJ NSW)",
    serviceType: "Information resource",
    description:
      "NSW Department of Communities and Justice guidance on technology-facilitated abuse and staying safe online during domestic and family violence.",
    categories: ["domestic"],
    jurisdiction: "NSW",
    coverage: "NSW",
    websiteUrl: "https://www.dcj.nsw.gov.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("NSW"),
  }),
  demoOrg({
    id: "salvos",
    name: "The Salvation Army",
    serviceType: "Community organisation",
    description:
      "Emergency relief, homelessness services, family support and financial counselling delivered through local Salvation Army centres.",
    categories: ["housing", "financial"],
    jurisdiction: "national",
    coverage: "National",
    phone: "13 72 58",
    websiteUrl: "https://www.salvationarmy.org.au",
    isFree: true,
    cost: "Free or low-cost",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "twenty10",
    name: "Twenty10",
    serviceType: "Community organisation",
    description:
      "Support service for LGBTQIA+ young people and their families in NSW, including housing and homelessness support.",
    categories: ["housing", "children"],
    jurisdiction: "NSW",
    coverage: "NSW",
    websiteUrl: "https://twenty10.org.au",
    coordinates: capitalCoordinates("NSW"),
    relatedOrganisationIds: ["acon", "wagec"],
  }),
  demoOrg({
    id: "wirringa-baiya",
    name: "Wirringa Baiya Aboriginal Women's Legal Centre",
    serviceType: "Legal service",
    description:
      "Aboriginal community-controlled legal service providing legal advice and support to Aboriginal and Torres Strait Islander women, including domestic violence and family law matters.",
    categories: ["legal", "domestic"],
    jurisdiction: "NSW",
    coverage: "NSW",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("NSW"),
  }),
  demoOrg({
    id: "wagec",
    name: "Women's and Girls' Emergency Centre (WAGEC)",
    serviceType: "Crisis accommodation",
    description:
      "Provides crisis accommodation and support for women and children escaping domestic and family violence, and homelessness services.",
    categories: ["domestic", "housing"],
    jurisdiction: "NSW",
    coverage: "NSW",
    websiteUrl: "https://www.wagec.org.au",
    isEmergency: true,
    coordinates: capitalCoordinates("NSW"),
    relatedOrganisationIds: ["1800respect", "acon", "twenty10"],
  }),
  demoOrg({
    id: "lawaccess-nsw",
    name: "LawAccess NSW",
    serviceType: "Legal helpline",
    description:
      "Free government telephone service providing legal information, advice and referrals for people in NSW, including AVO and family law guidance.",
    categories: ["legal"],
    jurisdiction: "NSW",
    coverage: "NSW",
    phone: "1300 888 529",
    websiteUrl: "https://www.lawaccess.nsw.gov.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("NSW"),
    relatedOrganisationIds: ["wirringa-baiya", "clc-nsw"],
  }),
  demoOrg({
    id: "fair-work-ombudsman",
    name: "Fair Work Ombudsman",
    serviceType: "Government service",
    description:
      "Information and complaint handling on workplace rights, unfair treatment, discrimination and harassment at work.",
    categories: ["workplace"],
    jurisdiction: "national",
    coverage: "National",
    phone: "13 13 94",
    websiteUrl: "https://www.fairwork.gov.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
  demoOrg({
    id: "human-rights-commission",
    name: "Australian Human Rights Commission",
    serviceType: "Government agency",
    description:
      "Handles complaints about racial discrimination, workplace discrimination and other breaches of human rights law in Australia.",
    categories: ["racism", "workplace"],
    jurisdiction: "national",
    coverage: "National",
    websiteUrl: "https://humanrights.gov.au",
    isFree: true,
    cost: "Free",
    coordinates: capitalCoordinates("national"),
  }),
];
