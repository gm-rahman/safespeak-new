"use client";

import { ApiRequestError, apiRequest, type ApiEnvelope } from "@/lib/api";
import { consentRequirements, ensureConsent } from "@/lib/consent";
import {
  clearAnonymousSession,
  getSessionAwareAuthHeaders,
} from "@/lib/frontend-session";

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

export type AdvocateRecord = {
  id: string;
  advocateType: string;
  languages: string[];
  issueTypes?: string[];
  regions?: string[];
  availability?: string;
  informationOnly?: boolean;
  displayName?: string;
  description?: string;
};

export type SafeContactPreference =
  | "phone"
  | "email"
  | "in_app"
  | "no_direct_contact";

export type AdvocateRequestRecord = {
  _id?: string;
  id?: string;
  advocateType: string;
  language: string;
  issueType?: string;
  region?: string;
  safeContactPreference?: SafeContactPreference;
  notes?: string;
  confirmationCopy?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TrustedContactInput = {
  name?: string;
  relationship?: string;
  phone?: string;
  email?: string;
  safeToContact?: boolean;
  notes?: string;
};

export type SafetyPlanRecord = {
  _id?: string;
  id?: string;
  title: string;
  trustedContacts: TrustedContactInput[];
  safePlaces: string[];
  warningSigns: string[];
  copingStrategies: string[];
  emergencySteps: string[];
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type SafetyPlanInput = {
  title: string;
  trustedContacts?: TrustedContactInput[];
  safePlaces?: string[];
  warningSigns?: string[];
  copingStrategies?: string[];
  emergencySteps?: string[];
  isActive?: boolean;
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
  advocates: AdvocateRecord[];
};

type AdvocateRequestResponse = {
  request: AdvocateRequestRecord;
};

type SafetyPlanResponse = {
  safetyPlan: SafetyPlanRecord;
};

type SafetyPlansResponse = {
  safetyPlans: SafetyPlanRecord[];
};

async function supportApiRequest<TData>(
  path: string,
  options: Omit<Parameters<typeof apiRequest<TData>>[1], "headers"> = {}
): Promise<ApiEnvelope<TData>> {
  const headers = await getSessionAwareAuthHeaders();

  try {
    return await apiRequest<TData>(path, {
      ...options,
      headers,
    });
  } catch (error) {
    if (error instanceof ApiRequestError && error.status === 401) {
      clearAnonymousSession();
      const retryHeaders = await getSessionAwareAuthHeaders({
        forceNewAnonymous: true,
      });

      return apiRequest<TData>(path, {
        ...options,
        headers: retryHeaders,
      });
    }

    throw error;
  }
}

export async function listSupportServices(query?: {
  type?: string;
  jurisdiction?: string;
  language?: string;
  region?: string;
  eligibility?: string;
  profile?: string;
}): Promise<SupportServiceRecord[]> {
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

  const response = await supportApiRequest<SupportServicesResponse>(
    `/support/services${params.size ? `?${params.toString()}` : ""}`,
    {}
  );

  return response.data.services;
}

export async function getSupportService(serviceId: string): Promise<SupportServiceRecord> {
  const response = await supportApiRequest<SupportServiceResponse>(
    `/support/services/${serviceId}`
  );

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
  const response = await supportApiRequest<SupportRecommendationsResponse>(
    "/support/recommendations",
    {
      method: "POST",
      body: input,
    }
  );

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
  const response = await supportApiRequest<WarmReferralResponse>("/support/warm-referral", {
    method: "POST",
    body: input,
  });

  return response.data.referral;
}

export async function listAdvocates(): Promise<AdvocateRecord[]> {
  const response = await supportApiRequest<AdvocateListResponse>("/support/advocates");

  return response.data.advocates;
}

export async function requestAdvocate(input: {
  advocateType: string;
  language?: string;
  issueType?: string;
  region?: string;
  safeContactPreference?: SafeContactPreference;
  notes?: string;
  confirmationCopy?: string;
}): Promise<AdvocateRequestRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.advocateRequest, headers);
  const response = await supportApiRequest<AdvocateRequestResponse>("/support/advocate-request", {
    method: "POST",
    body: input,
  });

  return response.data.request;
}

export async function listSafetyPlans(): Promise<SafetyPlanRecord[]> {
  const response = await supportApiRequest<SafetyPlansResponse>("/support/safety-plans");

  return response.data.safetyPlans;
}

export async function createSafetyPlan(input: SafetyPlanInput): Promise<SafetyPlanRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.safetyPlanStorage, headers);
  const response = await supportApiRequest<SafetyPlanResponse>("/support/safety-plans", {
    method: "POST",
    body: input,
  });

  return response.data.safetyPlan;
}

export async function updateSafetyPlan(
  planId: string,
  input: Partial<SafetyPlanInput>
): Promise<SafetyPlanRecord> {
  const headers = await getSessionAwareAuthHeaders();
  await ensureConsent(consentRequirements.safetyPlanStorage, headers);
  const response = await supportApiRequest<SafetyPlanResponse>(`/support/safety-plans/${planId}`, {
    method: "PATCH",
    body: input,
  });

  return response.data.safetyPlan;
}
