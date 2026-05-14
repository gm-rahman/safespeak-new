"use client";

import { apiRequest } from "@/lib/api";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type SupportServiceRecord = {
  _id?: string;
  id?: string;
  name: string;
  type?: string;
  jurisdiction?: string;
  cardImageUrl?: string;
  cardImageAlt?: string;
  cardIcon?:
    | "scale"
    | "shield"
    | "phone"
    | "community"
    | "counselling"
    | "home"
    | "bell"
    | "sparkles";
  cardOverlayTone?: "default" | "dark" | "blue" | "red" | "brown" | "purple";
  availabilityLabel?: string;
  referralTitle?: string;
  referralDescription?: string;
  resourceLinks?: Array<{ label: string; url: string }>;
  regions?: string[];
  languages?: string[];
  eligibility?: string[];
  description?: string;
  phone?: string;
  email?: string;
  websiteUrl?: string;
  bookingUrl?: string;
  address?: string;
  crisis?: boolean;
  informationOnly?: boolean;
  url?: string;
  metadata?: Record<string, unknown>;
};

type SupportServicesResponse = {
  services: SupportServiceRecord[];
};

type SupportServiceResponse = {
  service: SupportServiceRecord;
};

type SupportRecommendationsResponse = {
  recommendations: SupportServiceRecord[];
};

type WarmReferralResponse = {
  referral: Record<string, unknown>;
};

type AdvocateListResponse = {
  advocates: Array<Record<string, unknown>>;
};

type AdvocateRequestResponse = {
  request: Record<string, unknown>;
};

type SafetyPlanResponse = {
  safetyPlan: Record<string, unknown>;
};

type SafetyPlansResponse = {
  safetyPlans: Array<Record<string, unknown>>;
};

export async function listSupportServices(query?: {
  type?: string;
  jurisdiction?: string;
  language?: string;
  region?: string;
  eligibility?: string;
  profile?: string;
}): Promise<SupportServiceRecord[]> {
  const headers = await getSessionAwareAuthHeaders();
  const params = new URLSearchParams();

  if (query?.type) {
    params.set("type", query.type);
  }
  if (query?.jurisdiction) {
    params.set("jurisdiction", query.jurisdiction);
  }
  if (query?.language) {
    params.set("language", query.language);
  }
  if (query?.region) {
    params.set("region", query.region);
  }
  if (query?.eligibility) {
    params.set("eligibility", query.eligibility);
  }
  if (query?.profile) {
    params.set("profile", query.profile);
  }

  const response = await apiRequest<SupportServicesResponse>(
    `/support/services${params.size ? `?${params.toString()}` : ""}`,
    { headers }
  );

  return response.data.services;
}

export async function getSupportService(serviceId: string): Promise<SupportServiceRecord> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<SupportServiceResponse>(`/support/services/${serviceId}`, {
    headers,
  });

  return response.data.service;
}

export async function getSupportRecommendations(input: {
  reportId?: string;
  needs?: string[];
  jurisdiction?: string;
  region?: string;
  eligibility?: string;
  profile?: string;
  language?: string;
}): Promise<SupportServiceRecord[]> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<SupportRecommendationsResponse>("/support/recommendations", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.recommendations;
}

export async function createWarmReferral(input: {
  serviceId: string;
  contactPreference: "phone" | "email" | "in_app";
  safeContact: string;
  notes?: string;
  minimalSummary?: {
    incidentSummary?: string;
    immediateSafetyConcerns?: string;
    preferredContactMethod?: string;
    interpreterPreference?: string;
    culturalContext?: string;
    informationOnlyDisclaimer?: boolean;
  };
  includedFields?: string[];
  shareProfileContext?: boolean;
  metadata?: Record<string, unknown>;
}): Promise<Record<string, unknown>> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.warmReferral, headers);
  const response = await apiRequest<WarmReferralResponse>("/support/warm-referral", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.referral;
}

export async function listAdvocates(): Promise<Array<Record<string, unknown>>> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<AdvocateListResponse>("/support/advocates", {
    headers,
  });

  return response.data.advocates;
}

export async function requestAdvocate(input: {
  advocateType: string;
  language?: string;
  notes?: string;
}): Promise<Record<string, unknown>> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<AdvocateRequestResponse>("/support/advocate-request", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.request;
}

export async function listSafetyPlans(): Promise<Array<Record<string, unknown>>> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<SafetyPlansResponse>("/support/safety-plans", {
    headers,
  });

  return response.data.safetyPlans;
}

export async function createSafetyPlan(input: {
  title: string;
  trustedContacts?: Array<Record<string, unknown>>;
  safePlaces?: string[];
  warningSigns?: string[];
  copingStrategies?: string[];
  emergencySteps?: string[];
  isActive?: boolean;
}): Promise<Record<string, unknown>> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<SafetyPlanResponse>("/support/safety-plans", {
    method: "POST",
    headers,
    body: input,
  });

  return response.data.safetyPlan;
}

export async function updateSafetyPlan(
  planId: string,
  input: Partial<{
    title: string;
    trustedContacts: Array<Record<string, unknown>>;
    safePlaces: string[];
    warningSigns: string[];
    copingStrategies: string[];
    emergencySteps: string[];
    isActive: boolean;
  }>
): Promise<Record<string, unknown>> {
  const headers = await getSessionAwareAuthHeaders();
  const response = await apiRequest<SafetyPlanResponse>(`/support/safety-plans/${planId}`, {
    method: "PATCH",
    headers,
    body: input,
  });

  return response.data.safetyPlan;
}
