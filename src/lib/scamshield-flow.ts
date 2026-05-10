"use client";

import type { ScamAnalysisRecord } from "@/lib/scamshield-client";

const SCAMSHIELD_FLOW_KEY = "safespeak_scamshield_flow";

export type ScamShieldFlowState = {
  inputText: string;
  inputMode: "text" | "url" | "email" | "screenshot";
  analysis?: ScamAnalysisRecord;
  reportDraft?: ScamAnalysisRecord;
  submitted?: boolean;
  updatedAt: string;
};

export function getScamShieldFlowState(): ScamShieldFlowState | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(SCAMSHIELD_FLOW_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as ScamShieldFlowState;
  } catch {
    window.sessionStorage.removeItem(SCAMSHIELD_FLOW_KEY);
    return null;
  }
}

export function saveScamShieldFlowState(
  state: Omit<ScamShieldFlowState, "updatedAt">
): ScamShieldFlowState {
  const nextState = {
    ...state,
    updatedAt: new Date().toISOString(),
  } satisfies ScamShieldFlowState;

  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(SCAMSHIELD_FLOW_KEY, JSON.stringify(nextState));
  }

  return nextState;
}

export function mergeScamShieldFlowState(
  state: Partial<Omit<ScamShieldFlowState, "updatedAt">>
): ScamShieldFlowState {
  const currentState = getScamShieldFlowState();

  return saveScamShieldFlowState({
    inputText: state.inputText ?? currentState?.inputText ?? "",
    inputMode: state.inputMode ?? currentState?.inputMode ?? "text",
    analysis: state.analysis ?? currentState?.analysis,
    reportDraft: state.reportDraft ?? currentState?.reportDraft,
    submitted: state.submitted ?? currentState?.submitted,
  });
}

export function clearScamShieldFlowState(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(SCAMSHIELD_FLOW_KEY);
}
