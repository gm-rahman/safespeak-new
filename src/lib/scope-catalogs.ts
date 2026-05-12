"use client";

import { apiRequest } from "@/lib/api";

type ScopeBootstrapResponse = {
  bootstrap: {
    scopeVersion: string;
    jurisdictions: string[];
    languages: Array<{ code: string; label: string; region: string; priority: string }>;
    culturalProfiles: string[];
    faithProfiles: string[];
    communityProfiles: string[];
    consentFlags: string[];
    incidentTypes: string[];
    supportNeeds: string[];
    destinationTypes: string[];
    destinationChannels: string[];
    reportStatuses: string[];
    scamAnalysisTypes: string[];
    microEducationCategories: string[];
    analyticsPolicy: {
      minimumCellSuppression: number;
      requiresDifferentialPrivacyForExternalExports: boolean;
      aggregationLevel: string;
      timeBuckets: string[];
    };
  };
};

export async function getScopeBootstrap() {
  const response = await apiRequest<ScopeBootstrapResponse>("/scope/bootstrap");

  return response.data.bootstrap;
}
