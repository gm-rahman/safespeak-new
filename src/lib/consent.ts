"use client";

import { apiRequest } from "@/lib/api";
import { getSessionAwareAuthHeaders } from "@/lib/frontend-session";

export type ConsentFlag =
  | "store_local"
  | "cloud_sync"
  | "share_with_agencies"
  | "use_anonymised_analytics"
  | "process_with_ai"
  | "transcribe_audio"
  | "translate_content"
  | "retain_evidence"
  | "warm_referral";

export type ConsentFlags = Partial<Record<ConsentFlag, boolean>>;

type CurrentConsentResponse = {
  consent: ConsentFlags;
};

type ConsentHistoryEntry = {
  flags?: ConsentFlags;
  source?: string;
  createdAt?: string;
};

type ConsentHistoryResponse = {
  history: ConsentHistoryEntry[];
};

export type ConsentRequirement = {
  title: string;
  description: string;
  flags: ConsentFlag[];
  source: string;
  mode?: "all" | "any";
  allowLabel?: string;
  declineLabel?: string;
  settingsHref?: string;
};

export class ConsentRequiredError extends Error {
  requirement: ConsentRequirement;
  currentConsent: ConsentFlags;

  constructor(requirement: ConsentRequirement, currentConsent: ConsentFlags) {
    super("Consent is required before this action can continue.");
    this.name = "ConsentRequiredError";
    this.requirement = requirement;
    this.currentConsent = currentConsent;
  }
}

function hasRequiredConsent(
  currentConsent: ConsentFlags,
  requirement: ConsentRequirement
): boolean {
  const mode = requirement.mode ?? "all";

  if (mode === "any") {
    return requirement.flags.some((flag) => Boolean(currentConsent[flag]));
  }

  return requirement.flags.every((flag) => Boolean(currentConsent[flag]));
}

export async function getCurrentConsent(
  headers?: HeadersInit
): Promise<ConsentFlags> {
  const resolvedHeaders = headers ?? (await getSessionAwareAuthHeaders());
  const response = await apiRequest<CurrentConsentResponse>("/consents/current", {
    headers: resolvedHeaders,
  });

  return response.data.consent;
}

export async function ensureConsent(
  requirement: ConsentRequirement,
  headers?: HeadersInit
): Promise<ConsentFlags> {
  const resolvedHeaders = headers ?? (await getSessionAwareAuthHeaders());
  const currentConsent = await getCurrentConsent(resolvedHeaders);

  if (hasRequiredConsent(currentConsent, requirement)) {
    return currentConsent;
  }

  throw new ConsentRequiredError(requirement, currentConsent);
}

export async function grantConsent(
  flags: ConsentFlags,
  source: string,
  headers?: HeadersInit
): Promise<ConsentFlags> {
  const resolvedHeaders = headers ?? (await getSessionAwareAuthHeaders());
  const response = await apiRequest<CurrentConsentResponse>("/consents/update", {
    method: "POST",
    headers: resolvedHeaders,
    body: {
      flags,
      source,
    },
  });

  return response.data.consent;
}

export async function withdrawConsent(
  flags: ConsentFlags,
  source: string,
  headers?: HeadersInit
): Promise<ConsentFlags> {
  const resolvedHeaders = headers ?? (await getSessionAwareAuthHeaders());
  const response = await apiRequest<CurrentConsentResponse>("/consents/withdraw", {
    method: "POST",
    headers: resolvedHeaders,
    body: {
      flags,
      source,
    },
  });

  return response.data.consent;
}

export async function getConsentHistory(
  headers?: HeadersInit
): Promise<ConsentHistoryEntry[]> {
  const resolvedHeaders = headers ?? (await getSessionAwareAuthHeaders());
  const response = await apiRequest<ConsentHistoryResponse>("/consents/history", {
    headers: resolvedHeaders,
  });

  return response.data.history;
}

export const consentRequirements = {
  aiAssistant: {
    title: "AI consent required",
    description:
      "SafeSpeak needs your permission to process this conversation with AI. This is information-only support and will not submit a report automatically.",
    flags: ["process_with_ai"],
    source: "assistant_timeline_builder",
    allowLabel: "Allow AI and continue",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  ragAnswer: {
    title: "AI answer consent required",
    description:
      "SafeSpeak needs your permission to use approved AI and knowledge sources for this answer.",
    flags: ["process_with_ai"],
    source: "assistant_rag_answer",
    allowLabel: "Allow AI and continue",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  triage: {
    title: "Triage consent required",
    description:
      "SafeSpeak needs permission to analyze the incident details you shared before it can prepare triage guidance.",
    flags: ["process_with_ai"],
    source: "assistant_triage_report",
    allowLabel: "Allow AI and continue",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  audioTranscription: {
    title: "Audio transcription consent required",
    description:
      "SafeSpeak needs your permission before transcribing voice input. You can allow transcription only, or allow AI processing more broadly.",
    flags: ["transcribe_audio", "process_with_ai"],
    mode: "any",
    source: "assistant_voice_recorder",
    allowLabel: "Allow transcription and continue",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  evidenceTranscription: {
    title: "Evidence transcription consent required",
    description:
      "SafeSpeak needs your permission before transcribing audio evidence. You can allow transcription only, or allow AI processing more broadly.",
    flags: ["transcribe_audio", "process_with_ai"],
    mode: "any",
    source: "report_evidence_transcription",
    allowLabel: "Allow transcription and continue",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  scamAnalysis: {
    title: "Scam analysis consent required",
    description:
      "SafeSpeak needs your permission before it can analyze suspicious text, screenshots, URLs, or emails with AI.",
    flags: ["process_with_ai"],
    source: "scamshield_analysis",
    allowLabel: "Allow analysis and continue",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  cloudEvidence: {
    title: "Cloud evidence consent required",
    description:
      "Cloud evidence upload is disabled until you allow cloud sync. Without it, SafeSpeak can keep evidence metadata on this device only.",
    flags: ["cloud_sync"],
    source: "report_evidence_upload",
    allowLabel: "Allow cloud sync and continue",
    declineLabel: "Keep local only",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  warmReferral: {
    title: "Warm referral consent required",
    description:
      "SafeSpeak needs your permission before it can share details with a support service for a warm referral.",
    flags: ["warm_referral"],
    source: "support_warm_referral",
    allowLabel: "Allow warm referral",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
  shareWithAgencies: {
    title: "Sharing consent required",
    description:
      "SafeSpeak needs your permission before it can prepare or submit information to an external service or agency.",
    flags: ["share_with_agencies"],
    source: "external_sharing_action",
    allowLabel: "Allow sharing",
    declineLabel: "Not now",
    settingsHref: "/dashboard/settings",
  } satisfies ConsentRequirement,
} as const;
