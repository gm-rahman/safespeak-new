"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  IconBoltFilled,
  IconBook2,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconHeadphones,
  IconShieldFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import {
  ConsentRequiredError,
  grantConsent,
  type ConsentRequirement,
} from "@/lib/consent";
import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import {
  fetchAssistantTriageReport,
  getAssistantTriageSource,
  type AssistantTriageApiResult,
  type AssistantTriageSource,
} from "@/lib/assistant-triage";

import { interFont } from "../dashboard-shared";

type ResourceCard = {
  title: string;
  body: string;
  href: "/dashboard?view=reportsubmissionrecommendations";
  icon: "shield" | "headphones";
};

type TriageViewModel = {
  specialtyTag: string;
  supportType: string;
  assessmentBody: string;
  primaryStepTitle: string;
  primaryStepBody: string;
  worriedOthersBody: string;
  selfHelpBody: string;
  unsafeBody: string;
  showUrgentState: boolean;
  resourceCards: ResourceCard[];
};

function normalizeStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : ""))
      .filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

function normalizeBooleanLike(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "string") {
    return false;
  }

  const normalized = value.trim().toLowerCase();

  return normalized === "true" || normalized === "yes" || normalized === "unsafe";
}

function toDisplayLabel(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getCategorySupportType(
  incidentCategory?: AssistantTriageSource["incidentCategory"]
): string | null {
  switch (incidentCategory) {
    case "domestic_violence":
      return "Domestic Violence Support";
    case "racial_abuse":
      return "Racial Abuse Support";
    case "migrant_challenges":
      return "Migrant Support";
    case "cyber_scam":
      return "Scam Safety Support";
    default:
      return null;
  }
}

function shouldPreferCategorySupportType(
  source: AssistantTriageSource | null,
  triageResult: AssistantTriageApiResult | null
): boolean {
  const hasImpact =
    typeof source?.timeline.impact === "string" &&
    source.timeline.impact.trim().length > 0;
  const hasUrgentSafetySignal =
    normalizeBooleanLike(triageResult?.immediateSafetyFlag) ||
    normalizeBooleanLike(source?.timeline.unsafe_now) ||
    triageResult?.severitySignal === "urgent";

  return Boolean(source?.incidentCategory) && !hasImpact && !hasUrgentSafetySignal;
}

function buildSupportType(
  triageResult: AssistantTriageApiResult | null,
  source: AssistantTriageSource | null,
  fallback: string
): string {
  const normalizedPrimarySupportNeed =
    typeof triageResult?.primarySupportNeed === "string" &&
    triageResult.primarySupportNeed.trim()
      ? triageResult.primarySupportNeed.trim()
      : "";
  const hasImpact =
    typeof source?.timeline.impact === "string" && source.timeline.impact.trim().length > 0;
  const categorySupportType = getCategorySupportType(source?.incidentCategory);

  if (categorySupportType && shouldPreferCategorySupportType(source, triageResult)) {
    return categorySupportType;
  }

  if (
    normalizedPrimarySupportNeed &&
    !(
      normalizedPrimarySupportNeed.toLowerCase() === "mental health support" &&
      source?.incidentCategory &&
      !hasImpact
    )
  ) {
    return normalizedPrimarySupportNeed;
  }

  const categories = normalizeStringList(triageResult?.suggestedSupportCategories);

  if (categories.length > 0 && !categorySupportType) {
    return toDisplayLabel(categories[0]);
  }

  if (categorySupportType) {
    return categorySupportType;
  }

  if (hasImpact) {
    return "Mental Health Support";
  }

  if (normalizeBooleanLike(source?.timeline.unsafe_now)) {
    return "Immediate Safety Support";
  }

  return fallback;
}

function buildSpecialtyTag(
  triageResult: AssistantTriageApiResult | null,
  source: AssistantTriageSource | null,
  supportType: string
): string {
  if (shouldPreferCategorySupportType(source, triageResult)) {
    switch (source?.incidentCategory) {
      case "domestic_violence":
        return "domestic violence";
      case "racial_abuse":
        return "racial abuse";
      case "migrant_challenges":
        return "migrant support";
      case "cyber_scam":
        return "cyber scam";
      default:
        break;
    }
  }

  if (typeof triageResult?.specialtyTag === "string" && triageResult.specialtyTag.trim()) {
    return triageResult.specialtyTag.trim();
  }

  switch (source?.incidentCategory) {
    case "domestic_violence":
      return "domestic violence";
    case "racial_abuse":
      return "racial abuse";
    case "migrant_challenges":
      return "migrant support";
    case "cyber_scam":
      return "cyber scam";
    default:
      return supportType.toLowerCase();
  }
}

function buildAssessmentBody(
  triageResult: AssistantTriageApiResult | null,
  fallback: string
): string {
  const candidateStrings = [
    triageResult?.assessmentBody,
    triageResult?.summary,
    ...normalizeStringList(triageResult?.nonLegalSafetyNotes),
  ];

  const firstUsable = candidateStrings.find(
    (value): value is string => typeof value === "string" && value.trim().length > 0
  );

  return firstUsable?.trim() ?? fallback;
}

function buildResourceCards(
  triageResult: AssistantTriageApiResult | null,
  t: (key: string) => string
): ResourceCard[] {
  const rawResources = Array.isArray(triageResult?.resourceRecommendations)
    ? triageResult.resourceRecommendations
    : [];
  const normalizedResources = rawResources
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const record = item as Record<string, unknown>;
      const title =
        typeof record.title === "string" && record.title.trim()
          ? record.title.trim()
          : null;
      const body =
        typeof record.body === "string" && record.body.trim()
          ? record.body.trim()
          : null;
      const type =
        typeof record.type === "string" && record.type.trim()
          ? record.type.trim().toLowerCase()
          : "";

      if (!title || !body) {
        return null;
      }

      return {
        title,
        body,
        href: "/dashboard?view=reportsubmissionrecommendations",
        icon: type.includes("counsel") || type.includes("support") ? "headphones" : "shield",
      } satisfies ResourceCard;
    })
    .filter((item): item is ResourceCard => Boolean(item));

  if (normalizedResources.length >= 2) {
    return normalizedResources.slice(0, 2);
  }

  return [
    {
      title: t("dashboard.assistant.triage.resourceEsafetyTitle"),
      body: t("dashboard.assistant.triage.resourceEsafetyBody"),
      href: "/dashboard?view=reportsubmissionrecommendations",
      icon: "shield",
    },
    {
      title: t("dashboard.assistant.triage.resourceCounsellingTitle"),
      body: t("dashboard.assistant.triage.resourceCounsellingBody"),
      href: "/dashboard?view=reportsubmissionrecommendations",
      icon: "headphones",
    },
  ];
}

function ReportSubmissionSupportPage() {
  const { t } = useTranslation();
  const [triageSource, setTriageSource] = useState<AssistantTriageSource | null>(null);
  const [triageResult, setTriageResult] = useState<AssistantTriageApiResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [pendingConsentRequirement, setPendingConsentRequirement] =
    useState<ConsentRequirement | null>(null);
  const [isGrantingConsent, setIsGrantingConsent] = useState(false);

  useEffect(() => {
    const source = getAssistantTriageSource();

    setTriageSource(source);

    if (!source) {
      setLoadError("No assistant triage context is available yet.");
      setIsLoading(false);
      return;
    }

    let isActive = true;

    void (async () => {
      try {
        const result = await fetchAssistantTriageReport(source);

        if (!isActive) {
          return;
        }

        setTriageResult(result);
        setLoadError(null);
      } catch (error) {
        if (error instanceof ConsentRequiredError) {
          setPendingConsentRequirement(error.requirement);
          setLoadError(null);
          return;
        }

        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error ? error.message : "Triage explanation could not be loaded."
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, []);

  const handleAllowTriageConsent = async () => {
    if (!pendingConsentRequirement || !triageSource) {
      return;
    }

    setIsGrantingConsent(true);

    try {
      await grantConsent({ process_with_ai: true }, pendingConsentRequirement.source);
      const result = await fetchAssistantTriageReport(triageSource);
      setTriageResult(result);
      setPendingConsentRequirement(null);
      setLoadError(null);
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "Triage explanation could not be loaded."
      );
    } finally {
      setIsGrantingConsent(false);
      setIsLoading(false);
    }
  };

  const viewModel = useMemo<TriageViewModel>(() => {
    const supportType = buildSupportType(
      triageResult,
      triageSource,
      t("dashboard.assistant.triage.supportType")
    );
    const riskFactors = normalizeStringList(triageResult?.riskFactors);
    const recommendedActions = normalizeStringList(triageResult?.recommendedActions);
    const safetyNotes = normalizeStringList(triageResult?.nonLegalSafetyNotes);
    const categories = normalizeStringList(triageResult?.suggestedSupportCategories);
    const showUrgentState =
      normalizeBooleanLike(triageResult?.immediateSafetyFlag) ||
      normalizeBooleanLike(triageSource?.timeline.unsafe_now) ||
      triageResult?.severitySignal === "urgent" ||
      triageResult?.severitySignal === "high";

    return {
      specialtyTag: buildSpecialtyTag(triageResult, triageSource, supportType),
      supportType,
      assessmentBody: buildAssessmentBody(
        triageResult,
        t("dashboard.assistant.triage.assessmentBody")
      ),
      primaryStepTitle:
        recommendedActions[0] ?? riskFactors[0] ?? t("dashboard.assistant.triage.primaryStepTitle"),
      primaryStepBody:
        safetyNotes[0] ??
        recommendedActions[1] ??
        riskFactors[1] ??
        t("dashboard.assistant.triage.primaryStepBody"),
      worriedOthersBody:
        categories.slice(0, 2).map(toDisplayLabel).join(" • ") ||
        riskFactors[0] ||
        t("dashboard.assistant.triage.worriedOthersBody"),
      selfHelpBody:
        recommendedActions.slice(0, 2).join(" • ") ||
        safetyNotes[0] ||
        t("dashboard.assistant.triage.selfHelpBody"),
      unsafeBody: showUrgentState
        ? safetyNotes[0] || t("dashboard.assistant.triage.unsafeBody")
        : "Immediate danger is not strongly indicated right now, but support and safety planning remain available.",
      showUrgentState,
      resourceCards: buildResourceCards(triageResult, t),
    };
  }, [t, triageResult, triageSource]);
  const citationItems = useMemo(
    () =>
      Array.isArray(triageResult?.citations)
        ? triageResult.citations.filter(
            (citation) =>
              citation &&
              (citation.title || citation.sourceId || citation.excerpt),
          )
        : [],
    [triageResult],
  );
  const confidenceLabel = triageResult?.confidence
    ? toDisplayLabel(String(triageResult.confidence))
    : "Low";
  const fallbackReason =
    triageResult?.fallbackReason && triageResult.fallbackReason !== "none"
      ? toDisplayLabel(triageResult.fallbackReason)
      : "";
  const reviewStatusLabel =
    triageResult?.pendingHumanReview || triageResult?.reviewStatus === "pending_human_review"
      ? "Human review recommended"
      : "No human review flag";

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=assistantconversation"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.assistant.triage.title")}
          </Link>
          <Link
            href="/dashboard?view=reportsubmissionhistory"
            aria-label="View report history"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#9ba8bb] transition hover:text-[#74879e]"
          >
            <IconClock size={12} />
          </Link>
        </div>

        <article className="mt-2 rounded-[16px] border border-[#dce5f1] bg-[#f7fafe] px-3 py-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:px-4 sm:py-4">
          {loadError ? (
            <div className="mb-3 rounded-[14px] border border-[#fde2e2] bg-[#fff5f5] px-4 py-3 text-[11px] text-[#b45353]">
              {loadError}
            </div>
          ) : null}
          {pendingConsentRequirement ? (
            <div className="mb-3">
              <ConsentRequiredCard
                requirement={pendingConsentRequirement}
                isSubmitting={isGrantingConsent}
                onAllow={() => {
                  void handleAllowTriageConsent();
                }}
                onDecline={() => {
                  setPendingConsentRequirement(null);
                  setIsLoading(false);
                }}
              />
            </div>
          ) : null}
          <h2 className="text-[28px] font-extrabold leading-[1.02] text-[#0f4f95] sm:text-[34px]">
            {t("dashboard.assistant.triage.title")}
          </h2>
          <p className="mt-1 text-xs text-[#7a8ca2]">
            {t("dashboard.assistant.triage.subtitle")}
          </p>

          <div className="relative mx-auto mt-3 w-full max-w-[1136px] rounded-[48px] bg-white p-6 text-center shadow-[0_14px_30px_rgba(15,23,42,0.06)] sm:p-10 lg:h-[442.5px] lg:p-12">
            <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-[128px] w-[256px] -translate-x-1/2 overflow-hidden">
              <div
                className={`${interFont.className} absolute left-0 top-0 flex h-[256px] w-[256px] -translate-y-1/2 items-end justify-center rounded-[9999px] bg-[#e7effb] pb-9 text-center text-[24px] font-medium lowercase leading-[32px] tracking-[-0.6px] text-[#004E92]`}
              >
                {isLoading
                  ? "loading"
                  : viewModel.specialtyTag}
              </div>
            </div>
            <p
              className={`${interFont.className} mt-[92px] text-center text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-[#9CA3AF]`}
            >
              {t("dashboard.assistant.triage.incidentClassification")}
            </p>
            <h3
              className={`${interFont.className} mx-auto mt-2 max-w-[350px] text-[36px] font-extrabold leading-[0.95] text-[#0f5d9f] sm:text-[42px]`}
            >
              {isLoading ? "Building support view..." : viewModel.supportType}
            </h3>
            <span className="mx-auto mt-3 block h-[3px] w-[56px] rounded-full bg-[#eceff4]" />
            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-[1.6] text-[#5f6f86]">
              {isLoading
                ? "Analyzing the report details you provided to prepare your support guidance."
                : viewModel.assessmentBody}
            </p>
            <p className="mt-3 text-[11px] italic text-[#9babbf]">
              {t("dashboard.assistant.triage.assessmentNote")}
            </p>
          </div>

          <p className="mx-auto mt-3 max-w-[650px] text-center text-[9px] leading-[1.45] text-[#b0bccb]">
            {triageResult?.disclaimer ?? t("dashboard.assistant.triage.legalInfo")}
          </p>

          <section className="mx-auto mt-3 grid w-full max-w-[1136px] gap-2 rounded-[18px] border border-[#d9e6f3] bg-white px-4 py-3 text-left text-[11px] text-[#607B90] md:grid-cols-3">
            <p>
              <span className="font-semibold text-[#1f2a3a]">Confidence:</span>{" "}
              {confidenceLabel}
            </p>
            <p>
              <span className="font-semibold text-[#1f2a3a]">Review:</span>{" "}
              {reviewStatusLabel}
            </p>
            <p>
              <span className="font-semibold text-[#1f2a3a]">Fallback:</span>{" "}
              {fallbackReason || "None"}
            </p>
            {triageResult?.humanReviewNote ? (
              <p className="md:col-span-3">
                <span className="font-semibold text-[#1f2a3a]">Review note:</span>{" "}
                {triageResult.humanReviewNote}
              </p>
            ) : null}
            {citationItems.length > 0 ? (
              <div className="md:col-span-3">
                <p className="font-semibold text-[#1f2a3a]">Citations</p>
                <ul className="mt-1 space-y-1">
                  {citationItems.slice(0, 3).map((citation, index) => (
                    <li key={`${citation.sourceId ?? citation.title ?? index}`}>
                      {citation.title ?? citation.sourceId ?? "Source"}
                      {citation.excerpt ? ` - ${citation.excerpt}` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          <div className="mt-4 flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-[#1f2a3a]">
              {t("dashboard.assistant.triage.recommendedSteps")}
            </h3>
            <Link
              href="/dashboard?view=reportsubmissionhistory"
              className="text-[10px] font-semibold text-[#95a6bd] transition hover:text-[#6b7f98]"
            >
              {t("dashboard.assistant.triage.saveToHistory")}
            </Link>
          </div>

          <button className="mx-auto mt-2 flex h-[114px] w-full max-w-[1136px] items-center justify-between gap-4 rounded-[32px] border border-[#e4eaf3] bg-white p-6 text-left transition hover:border-[#d3deed] hover:bg-[#f8fbff]">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffe9dd] text-[#e88a42]">
              <IconBoltFilled size={14} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-[#1f2a3a]">
                {viewModel.primaryStepTitle}
              </p>
              <p className="text-[10px] text-[#8da0b8]">
                {viewModel.primaryStepBody}
              </p>
            </div>
            <IconChevronRight size={14} className="shrink-0 text-[#b5c2d3]" />
          </button>

          <div className="mx-auto mt-3 grid w-full max-w-[1136px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-20">
            <Link
              href="/dashboard?view=reportsubmissionrecommendations"
              className="relative flex h-[318px] w-full flex-col overflow-hidden rounded-[48px] p-8 text-white shadow-[0_14px_24px_rgba(15,87,160,0.23)]"
              style={{
                backgroundImage:
                  "linear-gradient(135.79deg, #005C97 0%, #363795 100%)",
              }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[24px] bg-[#FFFFFF33]">
                <IconUsersGroup size={20} />
              </span>
              <span className="text-white/8 pointer-events-none absolute right-8 top-16">
                <IconUsersGroup size={92} stroke={1.6} />
              </span>
              <div className="mt-auto">
                <h4 className="text-[16px] font-extrabold leading-[1.04] sm:text-[18px]">
                  {t("dashboard.assistant.triage.worriedOthersTitle")}
                </h4>
                <p className="mt-2 text-[11px] text-white/80">
                  {viewModel.worriedOthersBody}
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard?view=reportsubmissionrecommendations"
              className="relative flex h-[318px] w-full flex-col overflow-hidden rounded-[48px] p-8 text-white shadow-[0_14px_24px_rgba(30,76,173,0.22)]"
              style={{
                backgroundImage:
                  "linear-gradient(135.79deg, #005C97 0%, #363795 100%)",
              }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[24px] bg-[#FFFFFF33]">
                <IconBook2 size={20} />
              </span>
              <span className="text-white/8 pointer-events-none absolute right-10 top-14">
                <IconBook2 size={98} stroke={1.4} />
              </span>
              <div className="mt-auto">
                <h4 className="text-[16px] font-extrabold leading-[1.04] sm:text-[18px]">
                  {t("dashboard.assistant.triage.selfHelpTitle")}
                </h4>
                <p className="mt-2 text-[11px] text-white/80">
                  {viewModel.selfHelpBody}
                </p>
              </div>
            </Link>

            <article
              className={`relative flex h-[318px] w-full flex-col rounded-[48px] border p-8 text-[#1f2a3a] shadow-[0_14px_24px_rgba(227,106,106,0.12)] ${
                viewModel.showUrgentState
                  ? "border-[#f7d7d7] bg-[#fdeeee]"
                  : "border-[#d9e6f3] bg-[#f6fbff]"
              }`}
            >
              <span
                className={`absolute right-6 top-6 h-2.5 w-2.5 rounded-full ${
                  viewModel.showUrgentState ? "bg-[#f05454]" : "bg-[#7aa6d6]"
                }`}
              />
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-[24px] text-white ${
                  viewModel.showUrgentState ? "bg-[#f04444]" : "bg-[#0f5d9f]"
                }`}
              >
                <IconShieldFilled size={21} />
              </span>
              <h4 className="mt-8 text-[16px] font-extrabold leading-[1.02] text-[#212d3f] sm:text-[18px]">
                {t("dashboard.assistant.triage.unsafeTitle")}
              </h4>
              <p className="mt-3 text-[10px] leading-[1.45] text-[#7f8fa5] sm:text-[11px]">
                {viewModel.unsafeBody}
              </p>
              <button
                className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-[11px] font-bold text-white ${
                  viewModel.showUrgentState
                    ? "bg-[#f04444] shadow-[0_10px_16px_rgba(240,68,68,0.35)]"
                    : "bg-[#0f5d9f] shadow-[0_10px_16px_rgba(15,93,159,0.28)]"
                }`}
              >
                {t("dashboard.assistant.triage.callEmergency")}
              </button>
              <p className="mt-auto text-center text-[9px] text-[#b1bccb]">
                {t("dashboard.assistant.triage.tapForFullScreen")}
              </p>
            </article>
          </div>

          <div className="mt-8 min-h-[180px] w-full max-w-[1136px] pt-8">
            <div className="flex h-full min-h-[148px] w-full flex-col gap-6">
              <h3 className="text-lg font-bold text-[#1f2a3a]">
                {t("dashboard.assistant.triage.additionalResources")}
              </h3>

              <div className="grid min-h-[92px] w-full grid-cols-1 gap-6 md:grid-cols-2">
                {viewModel.resourceCards.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="relative flex h-[92px] w-full items-center gap-3 overflow-hidden rounded-[48px] bg-[#004E92] p-6 text-left text-white shadow-[0_12px_22px_rgba(12,74,131,0.28)]"
                  style={{
                    backgroundImage:
                      "linear-gradient(100.94deg, #004E92 0%, #003A6D 100%)",
                  }}
                >
                  <span className="bg-white/16 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    {resource.icon === "headphones" ? (
                      <IconHeadphones size={12} />
                    ) : (
                      <IconShieldFilled size={12} />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold leading-none">
                      {resource.title}
                    </span>
                    <span className="mt-1 block truncate text-[9px] text-white/75">
                      {resource.body}
                    </span>
                  </span>
                  <span className="bg-white/14 pointer-events-none absolute -right-4 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full" />
                </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-[120px] w-full max-w-[1136px] pt-12">
            <div className="h-full min-h-[72px] w-full border-t border-[#F3F4F6] px-6 pt-8 lg:px-[152px]">
              <p
                className={`${interFont.className} mx-auto h-[39px] w-full max-w-[672px] text-center text-[12px] font-normal leading-[19.5px] text-[#9CA3AF]`}
              >
                {t("dashboard.assistant.triage.footerNote")}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionSupportPage };
