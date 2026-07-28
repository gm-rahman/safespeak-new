"use client";

import type { Route } from "next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  Copy,
  Download,
  FileText,
  HeartHandshake,
  HelpCircle,
  Languages,
  LifeBuoy,
  Lock,
  MessageSquareWarning,
  Mic,
  Phone,
  RefreshCw,
  Save,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRoundCheck,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import { getAssistantTriageSource } from "@/lib/assistant-triage";
import type { DashboardCardFlowId } from "@/lib/dashboard-card-flows";
import {
  type MicroEducationItem,
  listPublishedMicroEducation,
} from "@/lib/microeducation";
import { getResolvedReportFlowDraft, mergeReportFlowDraft } from "@/lib/report-flow";
import {
  type ReportBuilderOverview,
  buildReportBuilderOverview,
} from "@/lib/report-builder-view-model";
import {
  type InjuredValue,
  type ReportDraft,
  type SafetyStatusValue,
  buildReportDraftText,
  formatTimestamp,
  toTitleCase,
} from "@/lib/report-draft-text";
import {
  REPORT_REVIEW_ONBOARDING_STEPS,
  isReportReviewOnboardingStep,
  reportReviewOnboardingStepHref,
} from "@/lib/report-review-onboarding";
import { COVERT_MODE_KEY, NEUTRAL_ROUTE } from "@/lib/safety";
import type { TriageSupportOption } from "@/lib/triage-view-model";
import { cn } from "@/lib/utils";

import {
  ReportReviewOnboardingProgress,
  ReportReviewOnboardingRouter,
} from "./report-review-onboarding-pages";

const FLOW_STORAGE_KEY = "safespeak_report_onboarding_flow";
const REPORT_DRAFT_STORAGE_KEY = "safespeak_report_entry_draft";

const steps = [
  { id: "language", label: "Language" },
  { id: "community", label: "Community" },
  { id: "information", label: "Know" },
  { id: "privacy", label: "Privacy" },
  { id: "services", label: "Hub" },
  { id: "report", label: "Report" },
] as const;

type ReportOnboardingStep = (typeof steps)[number]["id"];
type LanguageCode =
  | "en-AU"
  | "ar-SA"
  | "zh-CN"
  | "yue-HK"
  | "vi-VN"
  | "pa-IN"
  | "hi-IN"
  | "el-GR";

type PrivacyPreferences = {
  storeLocally: boolean;
  cloudSyncPreference: boolean;
  anonymousResearchSharing: boolean;
};

type ReportOnboardingState = {
  language: LanguageCode | null;
  communityBackground: string[];
  faithBackground: string | null;
  lifeStage: string | null;
  privacyPreferences: PrivacyPreferences;
  privacyUpdatedAt: string | null;
  onboardingCompleted: boolean;
  reportDraft: ReportDraft;
  autoFilledFields: string[];
  lastAppliedTriageUpdatedAt: string | null;
};

const defaultReportDraft: ReportDraft = {
  title: "",
  date: "",
  location: "",
  summary: "",
  safetyStatus: "",
  wasInjured: "",
  relationshipToPerson: "",
  evidenceContext: "",
  updatedAt: null,
};

const defaultState: ReportOnboardingState = {
  language: null,
  communityBackground: [],
  faithBackground: null,
  lifeStage: null,
  privacyPreferences: {
    storeLocally: true,
    cloudSyncPreference: false,
    anonymousResearchSharing: false,
  },
  privacyUpdatedAt: null,
  onboardingCompleted: false,
  reportDraft: defaultReportDraft,
  autoFilledFields: [],
  lastAppliedTriageUpdatedAt: null,
};

const languages: Array<{
  code: LanguageCode;
  region: string;
  englishName: string;
  nativeName: string;
}> = [
  { code: "en-AU", region: "AU", englishName: "English", nativeName: "English" },
  { code: "ar-SA", region: "SA", englishName: "Arabic", nativeName: "العربية" },
  { code: "zh-CN", region: "CN", englishName: "Mandarin Chinese", nativeName: "中文" },
  { code: "yue-HK", region: "HK", englishName: "Cantonese", nativeName: "粵語" },
  { code: "vi-VN", region: "VN", englishName: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "pa-IN", region: "IN", englishName: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "hi-IN", region: "IN", englishName: "Hindi", nativeName: "हिन्दी" },
  { code: "el-GR", region: "GR", englishName: "Greek", nativeName: "Ελληνικά" },
];

const communityOptions = [
  "CALD (Culturally & Linguistically Diverse)",
  "Aboriginal or Torres Strait Islander",
  "Migrant or refugee",
] as const;

const communitySkipOption = "Skip / Prefer not to answer";

const faithOptions = [
  "Christian",
  "Muslim",
  "Hindu",
  "Sikh",
  "Buddhist",
  "Jewish",
  "Other faith",
  "Secular / No faith",
  "Prefer not to answer",
] as const;

const lifeStageOptions = [
  "Youth (13-25)",
  "Working Age (26-55)",
  "Mature (56+)",
  "Prefer not to answer",
] as const;

function isStep(value: string | null): value is ReportOnboardingStep {
  return steps.some((step) => step.id === value);
}

function stepHref(step: ReportOnboardingStep, fromTriage = false): Route {
  const suffix = fromTriage ? "&fromTriage=1" : "";
  return `/dashboard?view=reportsubmissiondetails&step=${step}${suffix}` as Route;
}

function safeParseState(raw: string | null): ReportOnboardingState {
  if (!raw) return defaultState;

  try {
    const parsed = JSON.parse(raw) as Partial<ReportOnboardingState>;
    return {
      ...defaultState,
      ...parsed,
      communityBackground: Array.isArray(parsed.communityBackground)
        ? parsed.communityBackground.filter((item): item is string => typeof item === "string")
        : [],
      privacyPreferences: {
        ...defaultState.privacyPreferences,
        ...parsed.privacyPreferences,
      },
      reportDraft: {
        ...defaultReportDraft,
        ...parsed.reportDraft,
      },
      autoFilledFields: Array.isArray(parsed.autoFilledFields)
        ? parsed.autoFilledFields.filter(
            (item): item is string => typeof item === "string"
          )
        : [],
    };
  } catch {
    return defaultState;
  }
}

function getLanguageLabel(code: LanguageCode | null): string {
  const language = languages.find((item) => item.code === code);
  return language ? `${language.englishName} (${language.nativeName})` : "No language selected";
}

function saveSessionDraft(draft: ReportDraft): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(REPORT_DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

function quickExit(): void {
  if (typeof window === "undefined") return;

  window.sessionStorage.removeItem(FLOW_STORAGE_KEY);
  window.sessionStorage.removeItem(REPORT_DRAFT_STORAGE_KEY);
  window.sessionStorage.setItem(COVERT_MODE_KEY, "1");
  window.location.replace(NEUTRAL_ROUTE);
}

function ReportSubmissionDetailsPage({
  initialMessage,
}: {
  initialCategory?: AssistantIncidentCategory;
  initialTopic?: DashboardCardFlowId;
  initialMessage?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedStep = searchParams.get("step");
  const fromTriage = searchParams.get("fromTriage") === "1";
  const onboardingStep = isReportReviewOnboardingStep(requestedStep)
    ? requestedStep
    : null;
  const activeStep = isStep(requestedStep)
    ? requestedStep
    : fromTriage
      ? "report"
      : "language";
  const [state, setState] = useState<ReportOnboardingState>(defaultState);
  const [hydrated, setHydrated] = useState(false);
  const [languageError, setLanguageError] = useState<string | null>(null);
  const [reportOverview, setReportOverview] =
    useState<ReportBuilderOverview | null>(null);
  const [draftFeedback, setDraftFeedback] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const isSavingRef = useRef(false);
  const isNavigatingToReviewRef = useRef(false);

  useEffect(() => {
    const stored = safeParseState(window.sessionStorage.getItem(FLOW_STORAGE_KEY));
    const storedDraft = window.sessionStorage.getItem(REPORT_DRAFT_STORAGE_KEY);
    let reportDraft = stored.reportDraft;

    if (storedDraft) {
      try {
        reportDraft = {
          ...defaultReportDraft,
          ...(JSON.parse(storedDraft) as Partial<ReportDraft>),
        };
      } catch {
        window.sessionStorage.removeItem(REPORT_DRAFT_STORAGE_KEY);
      }
    }

    let autoFilledFields = stored.autoFilledFields;
    let lastAppliedTriageUpdatedAt = stored.lastAppliedTriageUpdatedAt;

    const triageSource = getAssistantTriageSource();
    const overview = buildReportBuilderOverview(triageSource);
    setReportOverview(overview);

    if (
      triageSource &&
      overview &&
      triageSource.updatedAt !== lastAppliedTriageUpdatedAt
    ) {
      const nextAutoFilled = new Set(autoFilledFields);

      if (overview.prefill.title && !reportDraft.title) {
        reportDraft = { ...reportDraft, title: overview.prefill.title };
        nextAutoFilled.add("title");
      }
      if (overview.prefill.whatHappened && !reportDraft.summary) {
        reportDraft = { ...reportDraft, summary: overview.prefill.whatHappened };
        nextAutoFilled.add("summary");
      }
      if (overview.prefill.safetyStatus && !reportDraft.safetyStatus) {
        reportDraft = {
          ...reportDraft,
          safetyStatus: overview.prefill.safetyStatus,
        };
        nextAutoFilled.add("safetyStatus");
      }
      if (overview.prefill.location && !reportDraft.location) {
        reportDraft = { ...reportDraft, location: overview.prefill.location };
        nextAutoFilled.add("location");
      }

      autoFilledFields = Array.from(nextAutoFilled);
      lastAppliedTriageUpdatedAt = triageSource.updatedAt;
    }

    setState({
      ...stored,
      reportDraft: {
        ...reportDraft,
        summary: reportDraft.summary || initialMessage || "",
      },
      autoFilledFields,
      lastAppliedTriageUpdatedAt,
    });
    setHydrated(true);
  }, [initialMessage]);

  useEffect(() => {
    if (!hydrated) return;
    window.sessionStorage.setItem(FLOW_STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, state]);

  useEffect(() => {
    if (onboardingStep) return;
    if (!isStep(requestedStep)) {
      router.replace(stepHref(fromTriage ? "report" : "language", fromTriage));
    }
  }, [requestedStep, onboardingStep, router, fromTriage]);

  useEffect(() => {
    if (activeStep === "report" && !onboardingStep) {
      isNavigatingToReviewRef.current = false;
    }
  }, [activeStep, onboardingStep]);

  useEffect(() => {
    if (!onboardingStep || !hydrated) return;

    const config = REPORT_REVIEW_ONBOARDING_STEPS[onboardingStep];
    if (config.allowDirectAccess) return;

    const resolvedDraft = getResolvedReportFlowDraft();

    if (config.requiresDestination && !resolvedDraft?.selectedDestinationId) {
      router.replace(
        reportReviewOnboardingStepHref("destination", fromTriage)
      );
      return;
    }

    if (config.requiresConsent && !resolvedDraft?.consentGranted) {
      router.replace(reportReviewOnboardingStepHref("consent", fromTriage));
    }
  }, [onboardingStep, hydrated, fromTriage, router]);

  const currentStepIndex = steps.findIndex((step) => step.id === activeStep);
  const selectedLanguage = useMemo(
    () => languages.find((language) => language.code === state.language),
    [state.language]
  );

  function updateState(partial: Partial<ReportOnboardingState>): void {
    setState((current) => ({ ...current, ...partial }));
  }

  function goToStep(step: ReportOnboardingStep): void {
    router.push(stepHref(step, fromTriage));
  }

  function goNext(): void {
    if (activeStep === "language" && !state.language) {
      setLanguageError("Select a language to continue.");
      return;
    }

    const nextStep = steps[currentStepIndex + 1]?.id;
    if (nextStep) {
      goToStep(nextStep);
    }
  }

  function headerBack(): void {
    if (onboardingStep) {
      const previous = REPORT_REVIEW_ONBOARDING_STEPS[onboardingStep].previous;
      router.push(
        previous
          ? reportReviewOnboardingStepHref(previous, fromTriage)
          : stepHref("report", fromTriage)
      );
      return;
    }
    goBack();
  }

  function goBack(): void {
    const previousStep = steps[currentStepIndex - 1]?.id;
    if (previousStep) {
      goToStep(previousStep);
    } else {
      router.push("/dashboard" as Route);
    }
  }

  function selectLanguage(code: LanguageCode): void {
    updateState({ language: code });
    setLanguageError(null);
  }

  function toggleCommunity(option: string): void {
    const current = state.communityBackground;

    if (option === communitySkipOption) {
      updateState({ communityBackground: [communitySkipOption] });
      return;
    }

    const withoutSkip = current.filter((item) => item !== communitySkipOption);
    const exists = withoutSkip.includes(option);

    if (exists) {
      updateState({ communityBackground: withoutSkip.filter((item) => item !== option) });
      return;
    }

    if (withoutSkip.length >= 3) return;
    updateState({ communityBackground: [...withoutSkip, option] });
  }

  function updatePrivacy(key: keyof PrivacyPreferences): void {
    updateState({
      privacyPreferences: {
        ...state.privacyPreferences,
        [key]: !state.privacyPreferences[key],
      },
      privacyUpdatedAt: new Date().toISOString(),
    });
  }

  function updateDraft(partial: Partial<ReportDraft>): void {
    const nextDraft = {
      ...state.reportDraft,
      ...partial,
      updatedAt: new Date().toISOString(),
    };
    updateState({ reportDraft: nextDraft });
    saveSessionDraft(nextDraft);
  }

  function updateDraftField<K extends keyof ReportDraft>(
    key: K,
    value: ReportDraft[K]
  ): void {
    updateDraft({ [key]: value } as Partial<ReportDraft>);

    if (state.autoFilledFields.includes(key)) {
      updateState({
        autoFilledFields: state.autoFilledFields.filter((field) => field !== key),
      });
    }
  }

  function handleDiscardPrefill(): void {
    if (state.autoFilledFields.length === 0) return;

    const cleared: Partial<ReportDraft> = {};
    for (const field of state.autoFilledFields) {
      if (field in defaultReportDraft) {
        cleared[field as keyof ReportDraft] = defaultReportDraft[
          field as keyof ReportDraft
        ] as never;
      }
    }

    updateDraft(cleared);
    updateState({ autoFilledFields: [] });
  }

  function handleSaveLocalDraft(): void {
    if (isSavingRef.current) return;
    isSavingRef.current = true;

    try {
      saveSessionDraft(state.reportDraft);
      setDraftFeedback("Saved locally in this browser session.");
    } catch {
      setDraftFeedback("Could not save the local draft. Try again.");
    } finally {
      window.setTimeout(() => {
        isSavingRef.current = false;
      }, 400);
    }
  }

  function handleDownloadTxt(): void {
    try {
      const blob = new Blob(
        [buildReportDraftText(state.reportDraft, reportOverview)],
        { type: "text/plain;charset=utf-8" }
      );
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "safespeak-report-draft.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDraftFeedback("Downloaded safespeak-report-draft.txt");
    } catch {
      setDraftFeedback("Could not generate the download. Try again.");
    }
  }

  async function handleCopyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(
        buildReportDraftText(state.reportDraft, reportOverview)
      );
      setCopyFeedback("Copied report text to your clipboard.");
    } catch {
      setCopyFeedback(
        "Could not copy automatically. Select and copy the text manually."
      );
    }
  }

  function handleReviewIncident(): void {
    if (isNavigatingToReviewRef.current) return;
    isNavigatingToReviewRef.current = true;

    saveSessionDraft(state.reportDraft);

    const draft = state.reportDraft;
    mergeReportFlowDraft({
      title: draft.title,
      date: draft.date,
      location: draft.location,
      summary: draft.summary,
      safetyStatus: draft.safetyStatus || undefined,
      incidentType: reportOverview?.matchedPathway.category,
      structuredFields: {
        who: draft.relationshipToPerson || undefined,
        what: draft.summary || undefined,
        when: draft.date || undefined,
        where: draft.location || undefined,
        injuries: draft.wasInjured || undefined,
        witnesses: draft.evidenceContext || undefined,
      },
    });

    router.push(reportReviewOnboardingStepHref("review", fromTriage));
  }

  if (!hydrated) {
    return (
      <div className="px-3 py-6 text-sm text-[#60718a] sm:px-5">
        Loading report flow...
      </div>
    );
  }

  return (
    <div className="px-2 pb-28 pt-2 text-[#1f2a3a] sm:px-4 sm:pb-36 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="mb-3 flex flex-col gap-3 border-b border-[#d9e2ee] pb-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={headerBack}
            className="inline-flex min-h-10 w-fit items-center gap-2 rounded-full border border-[#d7e1ee] bg-white px-3 text-xs font-semibold text-[#334155] transition hover:bg-[#f8fbff]"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back
          </button>

          <button
            type="button"
            onClick={quickExit}
            className="inline-flex min-h-10 w-fit items-center gap-2 rounded-full border border-[#d7e1ee] bg-white px-3 text-xs font-semibold text-[#334155] transition hover:bg-[#f8fbff]"
          >
            <X size={14} aria-hidden="true" />
            Quick Exit
          </button>
        </div>

        <section
          aria-labelledby="report-flow-heading"
          className="rounded-[16px] border border-[#dce4ef] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5 lg:p-6"
        >
          {onboardingStep ? (
            <ReportReviewOnboardingProgress currentStepId={onboardingStep} />
          ) : (
            <ProgressIndicator currentStepIndex={currentStepIndex} />
          )}

          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-200">
            {onboardingStep ? (
              <ReportReviewOnboardingRouter
                step={onboardingStep}
                overview={reportOverview}
                onGoToStep={(step) =>
                  router.push(reportReviewOnboardingStepHref(step, fromTriage))
                }
                onEditDetails={() => router.push(stepHref("report", fromTriage))}
              />
            ) : activeStep === "language" ? (
              <LanguageStep
                error={languageError}
                onContinue={goNext}
                onSelect={selectLanguage}
                selectedLanguage={selectedLanguage}
                selectedLanguageCode={state.language}
              />
            ) : activeStep === "community" ? (
              <CommunityStep
                communitySelections={state.communityBackground}
                faithBackground={state.faithBackground}
                lifeStage={state.lifeStage}
                onBack={goBack}
                onContinue={goNext}
                onFaithChange={(faithBackground) => updateState({ faithBackground })}
                onLifeStageChange={(lifeStage) => updateState({ lifeStage })}
                onToggleCommunity={toggleCommunity}
              />
            ) : activeStep === "information" ? (
              <InformationStep onBack={goBack} onContinue={goNext} />
            ) : activeStep === "privacy" ? (
              <PrivacyStep
                onBack={goBack}
                onChangeLater={() => goToStep("services")}
                onContinue={() => {
                  updateState({ onboardingCompleted: true });
                  goToStep("services");
                }}
                onToggle={updatePrivacy}
                preferences={state.privacyPreferences}
                updatedAt={state.privacyUpdatedAt}
              />
            ) : activeStep === "services" ? (
              <ServiceHubStep
                languageSummary={getLanguageLabel(state.language)}
                onStartReport={() => goToStep("report")}
              />
            ) : (
              <ReportEntryStep
                draft={state.reportDraft}
                autoFilledFields={state.autoFilledFields}
                overview={reportOverview}
                fromTriage={fromTriage}
                draftFeedback={draftFeedback}
                copyFeedback={copyFeedback}
                onBack={
                  fromTriage
                    ? () => router.push("/dashboard?view=reportsubmissionsupport" as Route)
                    : () => goToStep("services")
                }
                onDraftFieldChange={updateDraftField}
                onDiscardPrefill={handleDiscardPrefill}
                onSaveLocalDraft={handleSaveLocalDraft}
                onDownloadTxt={handleDownloadTxt}
                onCopyToClipboard={() => {
                  void handleCopyToClipboard();
                }}
                onReviewIncident={handleReviewIncident}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProgressIndicator({ currentStepIndex }: { currentStepIndex: number }) {
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="mb-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-[#0f5d9f]">
            Step {currentStepIndex + 1} of {steps.length}
          </p>
          <p className="mt-1 text-xs text-[#60718a]">
            {steps[currentStepIndex]?.label} in the SafeSpeak report flow
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5" aria-label="Report flow progress">
          {steps.map((step, index) => (
            <span
              key={step.id}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold",
                index === currentStepIndex
                  ? "bg-[#0f5d9f] text-white"
                  : index < currentStepIndex
                    ? "bg-[#e7f1fb] text-[#0f5d9f]"
                    : "bg-[#f1f5f9] text-[#64748b]"
              )}
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e5edf6]">
        <div
          className="h-full rounded-full bg-[#0f5d9f] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function StepHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase text-[#0f5d9f]">{eyebrow}</p>
      ) : null}
      <h1 id="report-flow-heading" className="mt-2 text-3xl font-extrabold tracking-normal text-[#1f2a3a] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm leading-6 text-[#60718a] sm:text-base">
        {description}
      </p>
    </header>
  );
}

function FlowActions({
  onBack,
  onContinue,
  continueLabel = "Continue",
  backLabel = "Back",
}: {
  onBack?: () => void;
  onContinue: () => void;
  continueLabel?: string;
  backLabel?: string;
}) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#e3ebf5] pt-5 sm:flex-row sm:items-center sm:justify-between">
      {onBack ? (
        <Button
          variant="outline"
          onClick={onBack}
          className="min-h-11 rounded-full"
        >
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
          {backLabel}
        </Button>
      ) : (
        <span />
      )}
      <Button
        onClick={onContinue}
        className="min-h-11 rounded-full bg-[#0f5d9f] hover:bg-[#0b528d]"
      >
        {continueLabel}
        <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </Button>
    </div>
  );
}

function LanguageStep({
  error,
  onContinue,
  onSelect,
  selectedLanguage,
  selectedLanguageCode,
}: {
  error: string | null;
  onContinue: () => void;
  onSelect: (code: LanguageCode) => void;
  selectedLanguage?: (typeof languages)[number];
  selectedLanguageCode: LanguageCode | null;
}) {
  return (
    <div>
      <StepHeader
        title="Select Your Language"
        description="Choose how you’d like to use SafeSpeak"
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" role="radiogroup" aria-label="SafeSpeak language">
        {languages.map((language) => {
          const selected = language.code === selectedLanguageCode;
          return (
            <button
              key={language.code}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSelect(language.code)}
              className={cn(
                "min-h-32 rounded-[14px] border bg-white p-4 text-left transition hover:border-[#9dc2e4] hover:bg-[#f8fbff]",
                selected
                  ? "border-[#0f5d9f] ring-2 ring-[#0f5d9f]/20"
                  : "border-[#dbe5f0]"
              )}
            >
              <span className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-[#eef6fd] px-2.5 py-1 text-xs font-bold text-[#0f5d9f]">
                  {language.region}
                </span>
                {selected ? (
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#0f5d9f] text-white">
                    <Check size={14} aria-hidden="true" />
                  </span>
                ) : null}
              </span>
              <span className="mt-5 block text-base font-bold text-[#1f2a3a]">
                {language.englishName}
              </span>
              <span className="mt-1 block break-words text-sm text-[#60718a]">
                {language.nativeName}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-[14px] border border-[#dce5f1] bg-[#f8fbff] p-4" aria-live="polite">
        <p className="text-sm font-semibold text-[#1f2a3a]">
          Selected language: {selectedLanguage ? `${selectedLanguage.englishName} / ${selectedLanguage.nativeName}` : "None yet"}
        </p>
        <p className="mt-1 text-xs leading-5 text-[#60718a]">
          This preference is kept in this browser for the current SafeSpeak flow.
        </p>
      </div>

      {error ? (
        <p className="mt-3 text-sm font-semibold text-[#b42318]" role="alert">
          {error}
        </p>
      ) : null}

      <FlowActions onContinue={onContinue} />
    </div>
  );
}

function CommunityStep({
  communitySelections,
  faithBackground,
  lifeStage,
  onBack,
  onContinue,
  onFaithChange,
  onLifeStageChange,
  onToggleCommunity,
}: {
  communitySelections: string[];
  faithBackground: string | null;
  lifeStage: string | null;
  onBack: () => void;
  onContinue: () => void;
  onFaithChange: (value: string | null) => void;
  onLifeStageChange: (value: string | null) => void;
  onToggleCommunity: (value: string) => void;
}) {
  const reachedLimit =
    communitySelections.filter((item) => item !== communitySkipOption).length >= 3 &&
    !communitySelections.includes(communitySkipOption);

  return (
    <div>
      <StepHeader
        eyebrow="Optional"
        title="Tell us about your community & faith"
        description="These selections can help SafeSpeak adapt support resources and tone. You can skip anything that does not feel relevant."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="rounded-[14px] p-4">
          <SectionTitle
            icon={<UserRoundCheck size={18} aria-hidden="true" />}
            title="Cultural / community background"
            description="You can select up to 3 options. This is completely optional."
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {[...communityOptions, communitySkipOption].map((option) => {
              const selected = communitySelections.includes(option);
              const disabled = reachedLimit && !selected && option !== communitySkipOption;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  disabled={disabled}
                  onClick={() => onToggleCommunity(option)}
                  className={cn(
                    "min-h-11 rounded-full border px-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-55",
                    selected
                      ? "border-[#0f5d9f] bg-[#e7f1fb] text-[#0f5d9f]"
                      : "border-[#dbe5f0] bg-white text-[#334155] hover:bg-[#f8fbff]"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {reachedLimit ? (
            <p className="mt-3 text-xs font-semibold text-[#0f5d9f]" aria-live="polite">
              You have selected the maximum of three options.
            </p>
          ) : null}
        </Card>

        <div className="grid gap-4">
          <ChoicePanel
            description="Some people prefer support that aligns with their beliefs. Choose one or skip."
            icon={<HeartHandshake size={18} aria-hidden="true" />}
            onChange={onFaithChange}
            options={faithOptions}
            selectedValue={faithBackground}
            title="Faith / spiritual background"
          />
          <ChoicePanel
            description="This helps us tailor content to be most relevant for you."
            icon={<LifeBuoy size={18} aria-hidden="true" />}
            onChange={onLifeStageChange}
            options={lifeStageOptions}
            selectedValue={lifeStage}
            title="Life stage"
          />
        </div>
      </div>

      <p className="mt-5 rounded-[14px] border border-[#dce5f1] bg-[#f8fbff] p-4 text-sm leading-6 text-[#60718a]">
        All selections are optional and can be changed later. Nothing on this page is submitted.
      </p>

      <FlowActions onBack={onBack} onContinue={onContinue} />
    </div>
  );
}

function SectionTitle({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[#0f5d9f]">
        {icon}
        <h2 className="text-base font-bold text-[#1f2a3a]">{title}</h2>
      </div>
      <p className="mt-1 text-sm leading-6 text-[#60718a]">{description}</p>
    </div>
  );
}

function ChoicePanel<TOption extends string>({
  description,
  icon,
  onChange,
  options,
  selectedValue,
  title,
}: {
  description: string;
  icon: React.ReactNode;
  onChange: (value: TOption | null) => void;
  options: readonly TOption[];
  selectedValue: string | null;
  title: string;
}) {
  return (
    <Card className="rounded-[14px] p-4">
      <SectionTitle icon={icon} title={title} description={description} />
      <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label={title}>
        {options.map((option) => {
          const selected = selectedValue === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(selected ? null : option)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-semibold transition",
                selected
                  ? "border-[#0f5d9f] bg-[#e7f1fb] text-[#0f5d9f]"
                  : "border-[#dbe5f0] bg-white text-[#334155] hover:bg-[#f8fbff]"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </Card>
  );
}

function InformationStep({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <StepHeader
        title="A few things to know"
        description="So you know what to expect — and what’s in your control."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <InfoCard
          icon={<ShieldCheck size={20} aria-hidden="true" />}
          title="What SafeSpeak is"
          items={[
            "A trauma-informed guide",
            "A way to understand what happened",
            "A path to find an appropriate service",
            "A place to prepare a report if you choose",
          ]}
        />
        <InfoCard
          icon={<HelpCircle size={20} aria-hidden="true" />}
          title="What SafeSpeak is not"
          items={[
            "Not a crisis service",
            "Not a legal advisor",
            "Not a counsellor",
            "Not an investigation or case-management organisation",
          ]}
        />
        <InfoCard
          icon={<X size={20} aria-hidden="true" />}
          title="Quick Exit"
          items={[
            "Leaves SafeSpeak quickly if needed",
            "Clears in-progress report state for this flow",
            "Moves to a neutral screen",
            "Browser history may still record this page",
          ]}
        />
      </div>

      <div className="mt-4 rounded-[14px] border border-[#dce5f1] bg-[#f8fbff] p-4">
        <div className="flex items-start gap-3">
          <Lock className="mt-0.5 size-5 shrink-0 text-[#0f5d9f]" aria-hidden="true" />
          <div>
            <h2 className="font-bold text-[#1f2a3a]">Covert mode</h2>
            <p className="mt-1 text-sm leading-6 text-[#60718a]">
              SafeSpeak includes covert-mode presentation elsewhere in the app. In this flow, Quick Exit can move you to the neutral page and set the covert preference, but it cannot hide a screen from someone already watching it.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#60718a]">
        SafeSpeak does not investigate incidents or hold cases. Nothing is sent unless a real submission pathway is later connected and you decide to use it.
      </p>

      <FlowActions onBack={onBack} onContinue={onContinue} continueLabel="I Understand / Continue" />
    </div>
  );
}

function InfoCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <Card className="rounded-[14px] p-4">
      <div className="flex items-center gap-2 text-[#0f5d9f]">
        {icon}
        <h2 className="font-bold text-[#1f2a3a]">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-[#60718a]">
            <Check className="mt-1 size-4 shrink-0 text-[#0f5d9f]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function PrivacyStep({
  onBack,
  onChangeLater,
  onContinue,
  onToggle,
  preferences,
  updatedAt,
}: {
  onBack: () => void;
  onChangeLater: () => void;
  onContinue: () => void;
  onToggle: (key: keyof PrivacyPreferences) => void;
  preferences: PrivacyPreferences;
  updatedAt: string | null;
}) {
  return (
    <div>
      <StepHeader
        title="Your Privacy & Control"
        description="Choose how your data is handled"
      />

      <div className="mt-6 grid gap-3">
        <PrivacyToggle
          checked={preferences.storeLocally}
          description="Keep a private copy on your phone or computer. It can be deleted later."
          icon={<Save size={18} aria-hidden="true" />}
          id="store-locally"
          label="Store my report locally on this device"
          onChange={() => onToggle("storeLocally")}
        />
        <PrivacyToggle
          checked={preferences.cloudSyncPreference}
          description="Backs up the report so it can be accessed from another device."
          icon={<Cloud size={18} aria-hidden="true" />}
          id="cloud-sync"
          label="Sync my report to SafeSpeak cloud"
          onChange={() => onToggle("cloudSyncPreference")}
        />
        <PrivacyToggle
          checked={preferences.anonymousResearchSharing}
          description="Helps SafeSpeak understand trends without intentionally sharing personal details."
          icon={<Search size={18} aria-hidden="true" />}
          id="research-sharing"
          label="Share anonymised data for research & insights"
          onChange={() => onToggle("anonymousResearchSharing")}
        />
      </div>

      <div className="mt-4 rounded-[14px] border border-[#dce5f1] bg-[#f8fbff] p-4 text-sm leading-6 text-[#60718a]">
        <p>
          Preferences last updated:{" "}
          <span className="font-semibold text-[#1f2a3a]">{formatTimestamp(updatedAt)}</span>
        </p>
        <p className="mt-1">
          These are local preferences only. Cloud sync is saved as a preference and no upload is performed here.
        </p>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#e3ebf5] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" onClick={onBack} className="min-h-11 rounded-full">
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
          Back
        </Button>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="ghost" onClick={onChangeLater} className="min-h-11 rounded-full">
            Change Settings Later
          </Button>
          <Button onClick={onContinue} className="min-h-11 rounded-full bg-[#0f5d9f] hover:bg-[#0b528d]">
            I Understand & Continue
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function PrivacyToggle({
  checked,
  description,
  icon,
  id,
  label,
  onChange,
}: {
  checked: boolean;
  description: string;
  icon: React.ReactNode;
  id: string;
  label: string;
  onChange: () => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer flex-col gap-4 rounded-[14px] border border-[#dbe5f0] bg-white p-4 transition hover:bg-[#f8fbff] sm:flex-row sm:items-center sm:justify-between"
    >
      <span className="flex min-w-0 items-start gap-3">
        <span className="mt-0.5 text-[#0f5d9f]">{icon}</span>
        <span>
          <span className="block font-bold text-[#1f2a3a]">{label}</span>
          <span className="mt-1 block text-sm leading-6 text-[#60718a]">{description}</span>
        </span>
      </span>
      <span className="relative inline-flex h-8 w-14 shrink-0 items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <span className="absolute inset-0 rounded-full bg-[#dbe5f0] transition peer-checked:bg-[#0f5d9f]" />
        <span className="absolute left-1 size-6 rounded-full bg-white shadow transition peer-checked:translate-x-6" />
      </span>
    </label>
  );
}

function ServiceHubStep({
  languageSummary,
  onStartReport,
}: {
  languageSummary: string;
  onStartReport: () => void;
}) {
  const services = [
    {
      title: "Start a Report",
      description: "Capture what happened using text, voice, or supporting documents.",
      icon: <FileText size={22} aria-hidden="true" />,
      primary: true,
      action: onStartReport,
      status: "Available",
    },
    {
      title: "Check a Scam",
      description: "Paste an email, SMS, or message and review common scam indicators.",
      icon: <MessageSquareWarning size={22} aria-hidden="true" />,
      href: "/dashboard?view=scamshieldintake" as Route,
      status: "Existing tool",
    },
    {
      title: "Get Support",
      description: "Find trusted support services and local guidance.",
      icon: <HeartHandshake size={22} aria-hidden="true" />,
      href: "/dashboard?view=resources" as Route,
      status: "Existing section",
    },
    {
      title: "Understand My Rights",
      description: "Open plain-language information and learning cards.",
      icon: <BookOpen size={22} aria-hidden="true" />,
      href: "/dashboard?view=microcards" as Route,
      status: "Existing section",
    },
    {
      title: "Call For Help",
      description: "Open SafeSpeak’s existing urgent-help entry point.",
      icon: <Phone size={22} aria-hidden="true" />,
      href: "/dashboard?view=smartdialler" as Route,
      status: "Existing section",
    },
    {
      title: "Learn / Microcards",
      description: "Short educational lessons that can be read or listened to.",
      icon: <Languages size={22} aria-hidden="true" />,
      href: "/dashboard?view=microeducation" as Route,
      status: "Existing section",
    },
  ];

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="rounded-[16px] border border-[#dce5f1] bg-[#f8fbff] p-5 sm:p-6">
          <Badge className="border-[#b9d7f1] bg-white text-[#0f5d9f]">SafeSpeak service hub</Badge>
          <h1 id="report-flow-heading" className="mt-5 text-3xl font-extrabold text-[#1f2a3a] sm:text-4xl">
            You’re in control.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#60718a] sm:text-base">
            SafeSpeak is available whenever you need it. Nothing is submitted until you decide what to do next.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Private", "Anonymous where available", "Trauma informed", "Relevant local services"].map((item) => (
              <Badge key={item} className="bg-white text-[#334155]">
                <ShieldCheck className="mr-1.5 size-3.5 text-[#0f5d9f]" aria-hidden="true" />
                {item}
              </Badge>
            ))}
          </div>
          <p className="mt-5 text-xs font-semibold text-[#60718a]">
            Current language preference: {languageSummary}
          </p>
        </div>

        <Card className="rounded-[16px] p-5">
          <h2 className="font-bold text-[#1f2a3a]">Recent activity</h2>
          <p className="mt-2 text-sm leading-6 text-[#60718a]">
            Started reports, saved support services, and opened lessons will appear here. No activity is fetched from a server in this flow.
          </p>
          <div className="mt-5 rounded-[14px] border border-dashed border-[#cbd8e6] bg-[#f8fbff] p-4 text-sm text-[#60718a]">
            No recent activity yet.
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="rounded-[14px] p-4">
          <h2 className="font-bold text-[#1f2a3a]">Safety and awareness</h2>
          <div className="mt-4 grid gap-3">
            <AwarenessRow title="Latest scam patterns" description="Open Scam Shield to check suspicious messages." href="/dashboard?view=scamshieldintake" />
            <AwarenessRow title="Urgent help entry point" description="Use the existing Smart Dialler section for help options." href="/dashboard?view=smartdialler" />
            <AwarenessRow title="Safety guidance" description="Read practical microcards and safety resources." href="/dashboard?view=microcards" />
          </div>
        </Card>

        <Card className="rounded-[14px] p-4">
          <h2 className="font-bold text-[#1f2a3a]">My toolkit</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <ToolkitLink label="Reports" href="/dashboard?view=reportshistory" icon={<ClipboardList size={16} aria-hidden="true" />} />
            <ToolkitLink label="Lessons" href="/dashboard?view=microeducation" icon={<BookOpen size={16} aria-hidden="true" />} />
            <ToolkitLink label="Settings" href="/dashboard/settings" icon={<Settings size={16} aria-hidden="true" />} />
            <ToolkitLink label="Action plan" href="/dashboard?view=safetyplan" icon={<ShieldCheck size={16} aria-hidden="true" />} />
            <ToolkitDisabled label="Saved items" />
            <ToolkitDisabled label="Templates" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    primary?: boolean;
    action?: () => void;
    href?: Route;
    status: string;
  };
}) {
  const className = cn(
    "group flex min-h-48 flex-col justify-between rounded-[14px] border p-4 text-left transition hover:-translate-y-0.5 hover:bg-[#f8fbff]",
    service.primary
      ? "border-[#0f5d9f] bg-[#f2f8fd] shadow-[0_12px_28px_rgba(15,93,159,0.10)]"
      : "border-[#dbe5f0] bg-white"
  );
  const content = (
    <>
      <span>
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-white text-[#0f5d9f] ring-1 ring-[#dbe5f0]">
          {service.icon}
        </span>
        <span className="mt-4 block text-lg font-bold text-[#1f2a3a]">{service.title}</span>
        <span className="mt-2 block text-sm leading-6 text-[#60718a]">{service.description}</span>
      </span>
      <span className="mt-5 flex items-center justify-between gap-3 text-xs font-bold text-[#0f5d9f]">
        {service.status}
        <ChevronRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </>
  );

  if (service.href) {
    return (
      <Link href={service.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={service.action} className={className}>
      {content}
    </button>
  );
}

function AwarenessRow({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: Route;
}) {
  return (
    <Link href={href} className="flex items-center justify-between gap-3 rounded-[12px] border border-[#dbe5f0] bg-white p-3 transition hover:bg-[#f8fbff]">
      <span>
        <span className="block text-sm font-bold text-[#1f2a3a]">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-[#60718a]">{description}</span>
      </span>
      <ChevronRight className="size-4 shrink-0 text-[#0f5d9f]" aria-hidden="true" />
    </Link>
  );
}

function ToolkitLink({
  href,
  icon,
  label,
}: {
  href: Route;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href} className="flex min-h-11 items-center gap-2 rounded-full border border-[#dbe5f0] bg-white px-4 text-sm font-semibold text-[#334155] transition hover:bg-[#f8fbff]">
      <span className="text-[#0f5d9f]">{icon}</span>
      {label}
    </Link>
  );
}

function ToolkitDisabled({ label }: { label: string }) {
  return (
    <span className="flex min-h-11 items-center justify-between gap-2 rounded-full border border-[#e3e8ef] bg-[#f8fafc] px-4 text-sm font-semibold text-[#94a3b8]" aria-disabled="true">
      {label}
      <span className="text-xs">Coming later</span>
    </span>
  );
}


function AutoFilledBadge() {
  return (
    <Badge className="ml-2 border-[#bfdcf5] bg-[#eef6ff] text-[10px] font-bold text-[#0f5d9f]">
      <Sparkles className="mr-1 size-3" aria-hidden="true" />
      Auto-filled
    </Badge>
  );
}

function OptionalTag() {
  return <span className="ml-1 font-normal text-[#94a3b8]">(optional)</span>;
}

function ReportServiceRow({ service }: { service: TriageSupportOption }) {
  return (
    <div
      className="rounded-[12px] border border-[#e3e8ef] bg-[#f8fafc] p-3"
      data-testid={`report-service-${service.id}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-[#1f2a3a]">{service.name}</p>
          <p className="mt-0.5 text-xs text-[#60718a]">{service.category}</p>
        </div>
        {service.recommendationLabel ? (
          <Badge
            className={cn(
              "text-[10px] font-bold",
              service.recommendationPriority === "emergency_only"
                ? "border-[#fecaca] bg-[#fee2e2] text-[#b91c1c]"
                : service.recommendationPriority === "recommended"
                  ? "border-[#bbf7d0] bg-[#dcfce7] text-[#15803d]"
                  : "border-[#c7d2fe] bg-[#eef2ff] text-[#4338ca]"
            )}
          >
            {service.recommendationLabel}
          </Badge>
        ) : null}
      </div>
      <p className="mt-2 text-xs leading-5 text-[#475569]">{service.description}</p>
      {service.emergencyOnly ? (
        <p className="mt-1 text-[11px] font-semibold text-[#b91c1c]">
          Call only if you are in immediate danger.
        </p>
      ) : null}
      {service.phoneDial ? (
        <a
          href={`tel:${service.phoneDial}`}
          className="mt-2 inline-flex h-8 items-center gap-1.5 rounded-full bg-[#0f5d9f] px-3 text-[11px] font-bold text-white transition hover:bg-[#0b528d]"
        >
          <Phone className="size-3" aria-hidden="true" />
          Call {service.phoneDisplay ?? service.phoneDial}
        </a>
      ) : null}
    </div>
  );
}

function ReportMicrocards({ category }: { category: string }) {
  const [cards, setCards] = useState<MicroEducationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    void listPublishedMicroEducation()
      .then((items) => {
        if (!isMounted) return;

        const normalizedCategory = category.toLowerCase();
        const relevant = items.filter((item) => {
          const chips = item.chips.map((chip) => chip.toLowerCase());
          return (
            chips.includes("safety") ||
            (normalizedCategory.includes("physical") && chips.includes("harassment")) ||
            item.incidentCategories?.some((incidentCategory) =>
              normalizedCategory.includes(incidentCategory.replace(/_/g, " "))
            )
          );
        });

        setCards(relevant.slice(0, 4));
      })
      .catch(() => {
        if (isMounted) setCards([]);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [category]);

  if (!isLoading && cards.length === 0) {
    return null;
  }

  return (
    <Card className="mt-4 rounded-[14px] p-4" data-testid="report-microcards">
      <h2 className="flex items-center gap-2 font-bold text-[#1f2a3a]">
        <BookOpen className="size-4 text-[#0f5d9f]" aria-hidden="true" />
        Guidance for this incident
      </h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="h-20 animate-pulse rounded-[12px] bg-[#f1f5f9]"
              />
            ))
          : cards.map((card) => (
              <div
                key={card.id}
                className="rounded-[12px] border border-[#e3e8ef] bg-[#f8fafc] p-3"
              >
                <p className="text-xs font-bold text-[#1f2a3a]">{card.title}</p>
                <p className="mt-1 text-xs leading-5 text-[#60718a]">
                  {card.summary}
                </p>
              </div>
            ))}
      </div>
    </Card>
  );
}

function ReportEntryStep({
  draft,
  autoFilledFields,
  overview,
  fromTriage,
  draftFeedback,
  copyFeedback,
  onBack,
  onDraftFieldChange,
  onDiscardPrefill,
  onSaveLocalDraft,
  onDownloadTxt,
  onCopyToClipboard,
  onReviewIncident,
}: {
  draft: ReportDraft;
  autoFilledFields: string[];
  overview: ReportBuilderOverview | null;
  fromTriage: boolean;
  draftFeedback: string | null;
  copyFeedback: string | null;
  onBack: () => void;
  onDraftFieldChange: <K extends keyof ReportDraft>(
    key: K,
    value: ReportDraft[K]
  ) => void;
  onDiscardPrefill: () => void;
  onSaveLocalDraft: () => void;
  onDownloadTxt: () => void;
  onCopyToClipboard: () => void;
  onReviewIncident: () => void;
}) {
  const isAutoFilled = (field: keyof ReportDraft) =>
    autoFilledFields.includes(field);

  return (
    <div>
      <StepHeader
        title="Start a Report"
        description="Write the story once and save a local draft. This frontend-only report entry screen does not submit anything to SafeSpeak or an external service."
      />

      {overview ? (
        <>
          <Card
            className="mt-6 rounded-[14px] border-[#dbe5f0] bg-[#f8fbff] p-4"
            data-testid="report-incident-classification"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
              Incident classification
            </p>
            <h2 className="mt-1 text-lg font-extrabold text-[#1f2a3a]">
              {toTitleCase(overview.incident.title)}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#60718a]">
              {overview.incident.description}
            </p>
            <p className="mt-2 text-xs italic leading-5 text-[#94a3b8]">
              {overview.incident.disclaimer}
            </p>
          </Card>

          <Card className="mt-4 rounded-[14px] border-[#f2d8b0] bg-[#fffaf2] p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle
                className="mt-0.5 size-4 shrink-0 text-[#9a5b12]"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-bold text-[#9a5b12]">
                  Information, not legal advice
                </p>
                <p className="mt-1 text-xs leading-5 text-[#9a5b12]">
                  SafeSpeak provides information, not legal advice. Nothing is
                  submitted automatically, and you choose what happens next.
                  If you are in immediate danger, call 000.
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="mt-4 rounded-[14px] p-4"
            data-testid="report-conversation-match"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-bold text-[#1f2a3a]">What you told us</h2>
                <p className="mt-1 text-sm leading-6 text-[#60718a]">
                  Supported fields below were carried over from your SafeSpeak
                  conversation. Review and edit anything before continuing.
                </p>
              </div>
              {overview.incident.urgencyLevel ? (
                <Badge className="border-[#bfdcf5] bg-[#eef6ff] text-[#0f5d9f]">
                  {overview.incident.urgencyLevel} urgency
                </Badge>
              ) : null}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/dashboard?view=assistantconversation"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe5f0] bg-white px-3 text-xs font-semibold text-[#334155] transition hover:bg-[#f8fbff]"
              >
                <RefreshCw className="size-3.5" aria-hidden="true" />
                Re-answer Triage
              </Link>
              <Link
                href="/dashboard?view=reportsubmissionsupport"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe5f0] bg-white px-3 text-xs font-semibold text-[#334155] transition hover:bg-[#f8fbff]"
              >
                Change category
              </Link>
              {autoFilledFields.length > 0 ? (
                <button
                  type="button"
                  onClick={onDiscardPrefill}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe5f0] bg-white px-3 text-xs font-semibold text-[#334155] transition hover:bg-[#f8fbff]"
                >
                  <X className="size-3.5" aria-hidden="true" />
                  Discard pre-fill
                </button>
              ) : null}
            </div>
          </Card>

          <Card
            className="mt-4 rounded-[14px] p-4"
            data-testid="report-matched-pathway"
          >
            <h2 className="font-bold text-[#1f2a3a]">Matched pathway</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">
                  Category
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1f2a3a]">
                  {toTitleCase(overview.matchedPathway.category)}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">
                  Destination
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1f2a3a]">
                  {overview.matchedPathway.destination}
                </p>
              </div>
              {overview.matchedPathway.legalLookupLabel ? (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">
                    Legal lookup
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#1f2a3a]">
                    {overview.matchedPathway.legalLookupLabel}
                  </p>
                </div>
              ) : null}
            </div>
            {overview.matchedPathway.autoFilled ? (
              <p className="mt-3 text-xs leading-5 text-[#94a3b8]">
                Auto-filled from your Triage result. SafeSpeak has not
                contacted this destination.
              </p>
            ) : null}
          </Card>

          <ReportMicrocards category={overview.incident.title} />
        </>
      ) : null}

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="rounded-[14px] p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="incident-title" className="block sm:col-span-2">
              <span className="flex flex-wrap items-center text-sm font-bold text-[#1f2a3a]">
                Incident Title
                {isAutoFilled("title") ? <AutoFilledBadge /> : null}
              </span>
              <input
                id="incident-title"
                value={draft.title}
                onChange={(event) => onDraftFieldChange("title", event.target.value)}
                placeholder="e.g. Online scam attempt"
                className="mt-2 min-h-11 w-full rounded-full border border-[#dbe5f0] bg-white px-4 text-sm text-[#1f2a3a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              />
            </label>

            <label htmlFor="incident-summary" className="block sm:col-span-2">
              <span className="flex flex-wrap items-center text-sm font-bold text-[#1f2a3a]">
                What happened?
                {isAutoFilled("summary") ? <AutoFilledBadge /> : null}
              </span>
              <textarea
                id="incident-summary"
                value={draft.summary}
                onChange={(event) =>
                  onDraftFieldChange("summary", event.target.value)
                }
                placeholder="Describe what happened in your own words. Include only what feels useful to capture right now."
                className="mt-2 min-h-48 w-full resize-y rounded-[14px] border border-[#dbe5f0] bg-white p-4 text-sm leading-7 text-[#1f2a3a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              />
            </label>

            <label htmlFor="incident-safety" className="block">
              <span className="flex flex-wrap items-center text-sm font-bold text-[#1f2a3a]">
                Are you safe and away from the person who hurt you?
                {isAutoFilled("safetyStatus") ? <AutoFilledBadge /> : null}
              </span>
              <select
                id="incident-safety"
                value={draft.safetyStatus}
                onChange={(event) =>
                  onDraftFieldChange(
                    "safetyStatus",
                    event.target.value as SafetyStatusValue
                  )
                }
                className="mt-2 min-h-11 w-full rounded-full border border-[#dbe5f0] bg-white px-4 text-sm text-[#1f2a3a] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              >
                <option value="">Prefer not to answer</option>
                <option value="safe">I am safe now</option>
                <option value="unsafe">I am not safe</option>
                <option value="unknown">I&apos;m not sure</option>
              </select>
            </label>

            <label htmlFor="incident-injured" className="block">
              <span className="text-sm font-bold text-[#1f2a3a]">
                Were you injured?
                <OptionalTag />
              </span>
              <select
                id="incident-injured"
                value={draft.wasInjured}
                onChange={(event) =>
                  onDraftFieldChange(
                    "wasInjured",
                    event.target.value as InjuredValue
                  )
                }
                className="mt-2 min-h-11 w-full rounded-full border border-[#dbe5f0] bg-white px-4 text-sm text-[#1f2a3a] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              >
                <option value="">Skip this question</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="unsure">Not sure</option>
              </select>
            </label>

            <label htmlFor="incident-location" className="block">
              <span className="flex flex-wrap items-center text-sm font-bold text-[#1f2a3a]">
                Where did it happen?
                <OptionalTag />
                {isAutoFilled("location") ? <AutoFilledBadge /> : null}
              </span>
              <input
                id="incident-location"
                value={draft.location}
                onChange={(event) =>
                  onDraftFieldChange("location", event.target.value)
                }
                placeholder="City or post code"
                className="mt-2 min-h-11 w-full rounded-full border border-[#dbe5f0] bg-white px-4 text-sm text-[#1f2a3a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              />
            </label>

            <label htmlFor="incident-date" className="block">
              <span className="text-sm font-bold text-[#1f2a3a]">
                When did it happen?
                <OptionalTag />
              </span>
              <input
                id="incident-date"
                type="date"
                value={draft.date}
                onChange={(event) => onDraftFieldChange("date", event.target.value)}
                className="mt-2 min-h-11 w-full rounded-full border border-[#dbe5f0] bg-white px-4 text-sm text-[#1f2a3a] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              />
            </label>

            <label htmlFor="incident-relationship" className="block sm:col-span-2">
              <span className="text-sm font-bold text-[#1f2a3a]">
                Do you know the person who did this, or were they a stranger?
                <OptionalTag />
              </span>
              <input
                id="incident-relationship"
                value={draft.relationshipToPerson}
                onChange={(event) =>
                  onDraftFieldChange("relationshipToPerson", event.target.value)
                }
                placeholder="e.g. Stranger, colleague, family member"
                className="mt-2 min-h-11 w-full rounded-full border border-[#dbe5f0] bg-white px-4 text-sm text-[#1f2a3a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              />
            </label>

            <label htmlFor="incident-evidence" className="block sm:col-span-2">
              <span className="text-sm font-bold text-[#1f2a3a]">
                Were there any witnesses, CCTV, photos, messages, or medical
                records?
                <OptionalTag />
              </span>
              <textarea
                id="incident-evidence"
                value={draft.evidenceContext}
                onChange={(event) =>
                  onDraftFieldChange("evidenceContext", event.target.value)
                }
                placeholder="Note anything you have. Nothing is uploaded automatically."
                className="mt-2 min-h-24 w-full resize-y rounded-[14px] border border-[#dbe5f0] bg-white p-4 text-sm leading-7 text-[#1f2a3a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0f5d9f]"
              />
            </label>
          </div>
        </Card>

        <aside className="grid gap-4">
          <Card className="rounded-[14px] p-4">
            <h2 className="flex items-center gap-2 font-bold text-[#1f2a3a]">
              <Save className="size-4 text-[#0f5d9f]" aria-hidden="true" />
              Draft status
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#60718a]">
              Saved locally in this browser&apos;s session storage:{" "}
              <span className="font-semibold text-[#1f2a3a]">
                {formatTimestamp(draft.updatedAt)}
              </span>
            </p>
            <p className="mt-2 text-xs leading-5 text-[#60718a]">
              Closing this browser session may remove the draft. No report API
              is called.
            </p>
          </Card>

          <Card className="rounded-[14px] p-4">
            <h2 className="font-bold text-[#1f2a3a]">Future inputs</h2>
            <div className="mt-3 grid gap-2">
              <DisabledInputShell icon={<Mic size={16} aria-hidden="true" />} label="Voice capture" />
              <DisabledInputShell icon={<Upload size={16} aria-hidden="true" />} label="Supporting documents" />
            </div>
            <p className="mt-3 text-xs leading-5 text-[#60718a]">
              These controls are not connected in this frontend-only phase.
            </p>
          </Card>

          {overview && overview.services.length > 0 ? (
            <Card
              className="rounded-[14px] p-4"
              data-testid="report-tailored-services"
            >
              <h2 className="font-bold text-[#1f2a3a]">Where to go next</h2>
              <div className="mt-3 grid gap-3">
                {[...overview.services]
                  .sort((a, b) => a.order - b.order)
                  .map((service) => (
                    <ReportServiceRow key={service.id} service={service} />
                  ))}
              </div>
            </Card>
          ) : null}

          {overview ? (
            <Card
              className="rounded-[14px] p-4"
              data-testid="report-legal-information"
            >
              <h2 className="flex items-center gap-2 font-bold text-[#1f2a3a]">
                <Scale className="size-4 text-[#0f5d9f]" aria-hidden="true" />
                Legal information
              </h2>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">
                Jurisdiction: {overview.legalInfo.jurisdiction}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#60718a]">
                {overview.legalInfo.summary}
              </p>
              <p className="mt-2 text-[11px] italic leading-5 text-[#94a3b8]">
                {overview.legalInfo.citationPolicy}
              </p>
            </Card>
          ) : null}
        </aside>
      </div>

      <Card
        className="mt-4 rounded-[14px] p-4"
        data-testid="report-local-draft-preview"
      >
        <h2 className="flex items-center gap-2 font-bold text-[#1f2a3a]">
          <FileText className="size-4 text-[#0f5d9f]" aria-hidden="true" />
          Local report draft
        </h2>
        <p className="mt-1 text-xs leading-5 text-[#60718a]">
          Generated in your browser from the details above. Nothing is
          submitted, shared, or sent to a service. You decide whether and when
          to save, download, copy, or review it.
        </p>
        <pre className="mt-3 max-h-64 overflow-y-auto whitespace-pre-wrap rounded-[12px] border border-[#e3e8ef] bg-[#f8fafc] p-3 text-xs leading-5 text-[#334155]">
          {buildReportDraftText(draft, overview)}
        </pre>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={onSaveLocalDraft}
            className="min-h-10 rounded-full"
          >
            <Save className="mr-2 size-4" aria-hidden="true" />
            Save local draft
          </Button>
          <Button
            variant="outline"
            onClick={onDownloadTxt}
            className="min-h-10 rounded-full"
          >
            <Download className="mr-2 size-4" aria-hidden="true" />
            Download .txt
          </Button>
          <Button
            variant="outline"
            onClick={onCopyToClipboard}
            className="min-h-10 rounded-full"
          >
            <Copy className="mr-2 size-4" aria-hidden="true" />
            Copy
          </Button>
        </div>
        <p aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs font-semibold text-[#0f5d9f]">
          {draftFeedback ?? copyFeedback ?? ""}
        </p>
      </Card>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#e3ebf5] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" onClick={onBack} className="min-h-11 rounded-full">
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
          {fromTriage ? "Back to Triage" : "Back to hub"}
        </Button>
        <Button
          onClick={onReviewIncident}
          className="min-h-11 rounded-full bg-[#0f5d9f] hover:bg-[#0b528d]"
        >
          Review your incident
          <ArrowRight className="ml-2 size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

function DisabledInputShell({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex min-h-11 items-center justify-between gap-3 rounded-[12px] border border-[#e3e8ef] bg-[#f8fafc] px-3 text-sm font-semibold text-[#94a3b8]">
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span className="text-xs">Later</span>
    </div>
  );
}

export { ReportSubmissionDetailsPage };
