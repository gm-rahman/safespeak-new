"use client";

import type { Route } from "next";
import Link from "next/link";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  IconArrowRight,
  IconBook2,
  IconChevronLeft,
  IconClock,
  IconFirstAidKit,
  IconGavel,
  IconHeadphones,
  IconHeartbeat,
  IconLifebuoy,
  IconPhoneCall,
  IconPhoneFilled,
  IconShieldCheckFilled,
  IconShieldFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import { useConsentGate } from "@/hooks/use-consent-gate";
import { isAssistantIncidentCategory } from "@/lib/assistant-categories";
import { getAssistantTriageSource } from "@/lib/assistant-triage";
import {
  type ConversationFlowTriage,
  buildMockConversationCategory,
  fetchConversationFlowSupport,
  fetchConversationFlowTriage,
} from "@/lib/conversation-flow";
import {
  type MicroEducationChip,
  type MicroEducationItem,
  listPublishedMicroEducation,
} from "@/lib/microeducation";
import { EMERGENCY_NUMBER } from "@/lib/safety";

function toLabel(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getUrlIncidentCategory() {
  if (typeof window === "undefined") {
    return undefined;
  }

  const category =
    new URLSearchParams(window.location.search).get("category") ?? undefined;

  return isAssistantIncidentCategory(category) ? category : undefined;
}

function buildFallbackTriage(): ConversationFlowTriage {
  const source = getAssistantTriageSource();
  const incidentCategory = source?.incidentCategory ?? getUrlIncidentCategory();
  const category = buildMockConversationCategory(incidentCategory);

  return {
    likelyCategory: category,
    likelyCategoryLabel: toLabel(category),
    confidenceScore: category === "general_support" ? 0.25 : 0.48,
    confidenceLabel: category === "general_support" ? "low" : "medium",
    safetyRiskLevel: "low",
    reasoningSummary:
      category === "general_support"
        ? "The conversation needs more verified detail before SafeSpeak can classify this into a harm or safety pathway."
        : "This is a fallback triage view based on the selected entry context and conversation draft.",
    matchedLegislationIds: [],
    matchedKnowledgeSources: [],
    humanReviewRecommended: true,
    missingInformation: ["more_context"],
    canProceedToRecommendations: category !== "general_support",
    matchedResourceTypes: ["government", "mental_health", "evidence_guidance"],
    disclaimer: "This is information only, not legal advice.",
  };
}

type ViolenceMicroCardProfile = {
  label: string;
  safetyRiskLevel: ConversationFlowTriage["safetyRiskLevel"];
  preferredChips: MicroEducationChip[];
  keywords: string[];
};

const VIOLENCE_TERMS = [
  "abuse",
  "assault",
  "bullying",
  "coercive",
  "domestic",
  "discrimination",
  "family violence",
  "harassment",
  "harm",
  "intimidation",
  "racial",
  "racial abuse",
  "racism",
  "sexual violence",
  "stalking",
  "threat",
  "violence",
  "workplace bullying",
];

function buildTriageSearchText(triage: ConversationFlowTriage | null): string {
  if (!triage) {
    return "";
  }

  return [
    triage.likelyCategory,
    triage.likelyCategoryLabel,
    triage.reasoningSummary,
    ...triage.matchedResourceTypes,
    ...triage.missingInformation,
    ...triage.matchedKnowledgeSources.flatMap((source) => [
      source.title,
      source.summary,
      source.sourceCategory,
      source.sourceType,
    ]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function reorderRiskFirst(
  chips: MicroEducationChip[],
  safetyRiskLevel: ConversationFlowTriage["safetyRiskLevel"]
): MicroEducationChip[] {
  if (safetyRiskLevel !== "high" && safetyRiskLevel !== "immediate") {
    return chips;
  }

  const urgentOrder: MicroEducationChip[] = [
    "safety",
    "mentalHealth",
    "harassment",
    "rights",
  ];

  return urgentOrder.filter((chip) => chips.includes(chip));
}

function getViolenceMicroCardProfile(
  triage: ConversationFlowTriage | null
): ViolenceMicroCardProfile | null {
  const searchText = buildTriageSearchText(triage);

  if (!triage || !VIOLENCE_TERMS.some((term) => searchText.includes(term))) {
    return null;
  }

  let preferredChips: MicroEducationChip[] = [
    "harassment",
    "safety",
    "rights",
    "mentalHealth",
  ];
  let label = triage.likelyCategoryLabel || toLabel(triage.likelyCategory);
  let keywords = [
    "abuse",
    "bullying",
    "harassment",
    "threat",
    "safety",
    "violence",
  ];

  if (
    searchText.includes("domestic") ||
    searchText.includes("family violence") ||
    searchText.includes("sexual violence")
  ) {
    preferredChips = ["safety", "mentalHealth", "harassment", "rights"];
    label = "Domestic or family violence";
    keywords = [
      "domestic",
      "family",
      "violence",
      "safety",
      "mental",
      "support",
    ];
  } else if (
    searchText.includes("racial") ||
    searchText.includes("racism") ||
    searchText.includes("discrimination")
  ) {
    preferredChips = ["harassment", "rights", "safety", "mentalHealth"];
    label = "Racial abuse or discrimination";
    keywords = ["racial", "discrimination", "rights", "harassment", "report"];
  } else if (
    searchText.includes("online") ||
    searchText.includes("cyber") ||
    searchText.includes("digital")
  ) {
    preferredChips = ["safety", "harassment", "rights", "mentalHealth"];
    label = "Online abuse or cyberbullying";
    keywords = ["online", "cyber", "digital", "privacy", "abuse", "safety"];
  } else if (
    searchText.includes("workplace") ||
    searchText.includes("bullying") ||
    searchText.includes("harassment")
  ) {
    preferredChips = ["harassment", "rights", "safety", "mentalHealth"];
    label = "Bullying or harassment";
    keywords = ["bullying", "harassment", "workplace", "document", "rights"];
  }

  return {
    label,
    safetyRiskLevel: triage.safetyRiskLevel,
    preferredChips: reorderRiskFirst(preferredChips, triage.safetyRiskLevel),
    keywords,
  };
}

function getMicroCardSearchText(card: MicroEducationItem): string {
  return [
    card.title,
    card.tag,
    card.summary,
    card.detailHeading,
    card.detailSummary,
    card.detailBody,
    card.detailTakeaway,
    ...card.chips,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function scoreMicroCardForProfile(
  card: MicroEducationItem,
  profile: ViolenceMicroCardProfile
): number {
  const searchText = getMicroCardSearchText(card);
  let score = 0;

  card.chips.forEach((chip) => {
    const chipIndex = profile.preferredChips.indexOf(chip);

    if (chipIndex >= 0) {
      score += (profile.preferredChips.length - chipIndex) * 12;
    }
  });

  profile.keywords.forEach((keyword) => {
    if (searchText.includes(keyword)) {
      score += 8;
    }
  });

  if (
    (profile.safetyRiskLevel === "high" ||
      profile.safetyRiskLevel === "immediate") &&
    card.chips.includes("safety")
  ) {
    score += 18;
  }

  if (
    (profile.safetyRiskLevel === "high" ||
      profile.safetyRiskLevel === "immediate") &&
    card.chips.includes("mentalHealth")
  ) {
    score += 10;
  }

  return score;
}

function getSuggestedMicroCards(
  cards: MicroEducationItem[],
  profile: ViolenceMicroCardProfile | null,
  preferredIds: string[] = []
): MicroEducationItem[] {
  if (!profile) {
    return [];
  }

  const suggestedCards = cards
    .map((card) => ({
      card,
      score: scoreMicroCardForProfile(card, profile),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return left.card.sortOrder - right.card.sortOrder;
    })
    .map((item) => item.card)
    .slice(0, 8);

  if (preferredIds.length === 0) {
    return suggestedCards;
  }

  const preferredIdSet = new Set(preferredIds);
  const cardsById = new Map(suggestedCards.map((card) => [card.id, card]));
  const orderedCards = preferredIds
    .map((id) => cardsById.get(id))
    .filter((card): card is MicroEducationItem => Boolean(card));
  const remainingCards = suggestedCards.filter(
    (card) => !preferredIdSet.has(card.id)
  );

  return [...orderedCards, ...remainingCards].slice(0, 8);
}

function SectionTitle({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h3 className="text-lg font-extrabold leading-7 text-[#111827] sm:text-2xl sm:leading-8">
        {children}
      </h3>
      {action}
    </div>
  );
}

function GradientActionCard({
  href,
  icon,
  backgroundIcon,
  title,
  description,
}: {
  href: Route;
  icon: ReactNode;
  backgroundIcon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[238px] overflow-hidden rounded-[30px] bg-[linear-gradient(135.79deg,#005C97_0%,#363795_100%)] p-6 text-white shadow-[0_18px_34px_rgba(15,93,159,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_40px_rgba(15,93,159,0.24)] sm:min-h-[270px] sm:rounded-[38px] lg:min-h-[318px] lg:rounded-[48px] lg:p-8"
    >
      <div className="absolute right-0 top-0 p-8 text-white opacity-10">
        {backgroundIcon}
      </div>
      <div className="relative z-10 flex h-full min-h-[190px] w-full flex-col justify-between sm:min-h-[222px] lg:min-h-[254px]">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-[2px]">
          {icon}
        </span>
        <span>
          <span className="block text-xl font-extrabold leading-7 sm:text-2xl sm:leading-8">
            {title}
          </span>
          <span className="mt-2 block text-sm font-medium leading-5 text-[#DBEAFE]">
            {description}
          </span>
        </span>
      </div>
    </Link>
  );
}

function ResourceCard({
  href,
  icon,
  title,
  description,
}: {
  href: Route;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="relative flex min-h-[92px] overflow-hidden rounded-[26px] bg-[linear-gradient(100.94deg,#004E92_0%,#003A6D_100%)] p-5 text-white shadow-[0_16px_32px_rgba(15,93,159,0.14)] transition hover:-translate-y-0.5 sm:rounded-[36px] sm:p-6 lg:rounded-[48px]"
    >
      <span className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/10" />
      <span className="relative z-10 flex items-center gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-[2px]">
          {icon}
        </span>
        <span>
          <span className="block text-lg font-extrabold leading-7">
            {title}
          </span>
          <span className="block text-xs font-medium leading-4 text-[#BFDBFE]">
            {description}
          </span>
        </span>
      </span>
    </Link>
  );
}

function RecommendationRow({
  icon,
  iconClassName,
  title,
  description,
  action,
}: {
  icon: ReactNode;
  iconClassName: string;
  title: string;
  description: string;
  action: ReactNode;
}) {
  return (
    <article className="flex min-h-[104px] flex-col gap-5 rounded-[18px] bg-white p-5 shadow-[0_10px_32px_rgba(15,23,42,0.06)] sm:min-h-[110px] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6 lg:px-8">
      <div className="flex min-w-0 items-start gap-5">
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClassName}`}
        >
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-extrabold leading-5 text-[#111827] sm:text-base">
            {title}
          </span>
          <span className="mt-2 block max-w-[460px] text-xs leading-5 text-[#6B7280] sm:text-sm">
            {description}
          </span>
        </span>
      </div>
      <div className="shrink-0 sm:ml-auto">{action}</div>
    </article>
  );
}

function SuggestedMicroCard({
  card,
  riskLevel,
  onOpen,
}: {
  card: MicroEducationItem;
  riskLevel: ConversationFlowTriage["safetyRiskLevel"];
  onOpen: () => void;
}) {
  const toneStyles: Record<
    MicroEducationItem["tone"],
    { card: string; label: string; icon: string; action: string }
  > = {
    blue: {
      card: "bg-[#01579B] text-white",
      label: "text-[#E1F5FE]",
      icon: "bg-white/20 text-white",
      action: "bg-white text-[#111827]",
    },
    orange: {
      card: "bg-[#FFB300] text-[#111827]",
      label: "text-[#1F2937]",
      icon: "bg-white/35 text-[#111827]",
      action: "bg-white text-[#111827]",
    },
    green: {
      card: "bg-[#0D9488] text-white",
      label: "text-white/85",
      icon: "bg-white/20 text-white",
      action: "bg-white text-[#111827]",
    },
    amber: {
      card: "bg-[#FFB300] text-[#111827]",
      label: "text-[#1F2937]",
      icon: "bg-white/35 text-[#111827]",
      action: "bg-white text-[#111827]",
    },
    violet: {
      card: "bg-[#01579B] text-white",
      label: "text-[#E1F5FE]",
      icon: "bg-white/20 text-white",
      action: "bg-white text-[#111827]",
    },
    teal: {
      card: "bg-[#0D9488] text-white",
      label: "text-white/85",
      icon: "bg-white/20 text-white",
      action: "bg-white text-[#111827]",
    },
  };
  const currentTone = toneStyles[card.tone];
  const primaryChip = card.chips[0] ? toLabel(card.chips[0]) : "Guidance";

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${card.title}`}
      className={`group relative flex min-h-[220px] overflow-hidden rounded-[28px] p-5 shadow-[0_18px_34px_rgba(15,93,159,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_40px_rgba(15,93,159,0.2)] ${currentTone.card}`}
    >
      <span className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/10 blur-[10px]" />
      <span className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-white/10" />
      <span className="relative z-10 flex h-full min-w-0 flex-col">
        <span className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] backdrop-blur-sm ${currentTone.icon}`}
          >
            <IconBook2 size={21} />
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${currentTone.action}`}
          >
            {riskLevel}
          </span>
        </span>
        <span
          className={`mt-6 block text-[10px] font-extrabold uppercase tracking-[0.1em] ${currentTone.label}`}
        >
          {card.tag || primaryChip}
        </span>
        <span className="mt-2 block text-xl font-extrabold leading-6">
          {card.title}
        </span>
        <span
          className={`mt-3 line-clamp-3 block text-sm leading-5 ${currentTone.label}`}
        >
          {card.summary}
        </span>
        <span className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold ${currentTone.label}`}
          >
            <IconClock size={13} />
            {card.readTimeLabel || "4 min read"}
          </span>
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition group-hover:translate-x-0.5 ${currentTone.action}`}
            aria-hidden="true"
          >
            <IconArrowRight size={16} />
          </span>
        </span>
      </span>
    </button>
  );
}

function MicroCardDetailOverlay({
  card,
  riskLevel,
  onClose,
  onPrevious,
  onNext,
  showNavigation,
}: {
  card: MicroEducationItem;
  riskLevel: ConversationFlowTriage["safetyRiskLevel"];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  showNavigation: boolean;
}) {
  const toneStyles: Record<
    MicroEducationItem["tone"],
    { panel: string; text: string; muted: string; icon: string }
  > = {
    blue: {
      panel: "bg-[#01579B]",
      text: "text-white",
      muted: "text-[#E1F5FE]",
      icon: "bg-white/20 text-white",
    },
    orange: {
      panel: "bg-[#FFB300]",
      text: "text-[#111827]",
      muted: "text-[#1F2937]",
      icon: "bg-white/35 text-[#111827]",
    },
    green: {
      panel: "bg-[#0D9488]",
      text: "text-white",
      muted: "text-white/85",
      icon: "bg-white/20 text-white",
    },
    amber: {
      panel: "bg-[#FFB300]",
      text: "text-[#111827]",
      muted: "text-[#1F2937]",
      icon: "bg-white/35 text-[#111827]",
    },
    violet: {
      panel: "bg-[#01579B]",
      text: "text-white",
      muted: "text-[#E1F5FE]",
      icon: "bg-white/20 text-white",
    },
    teal: {
      panel: "bg-[#0D9488]",
      text: "text-white",
      muted: "text-white/85",
      icon: "bg-white/20 text-white",
    },
  };
  const currentTone = toneStyles[card.tone];
  const summary = card.detailSummary || card.summary;
  const body = card.detailBody || card.summary;
  const takeaway = card.detailTakeaway || card.summary;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[#EEF4FB]/95 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-6">
      <div className="mx-auto flex min-h-full w-full max-w-[1184px] flex-col">
        <header className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1f2937]"
          >
            <IconChevronLeft size={15} />
            AI suggested micro-cards
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[#64748B] transition hover:text-[#334155]"
          >
            Close
          </button>
        </header>

        <main className="flex flex-1 items-center py-6 sm:py-8">
          <article className="grid w-full gap-5 rounded-[32px] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.14)] lg:grid-cols-[360px_minmax(0,1fr)] lg:p-7">
            <aside
              className={`relative min-h-[360px] overflow-hidden rounded-[28px] p-6 ${currentTone.panel} ${currentTone.text}`}
            >
              <span className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-[10px]" />
              <span className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-white/10" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-[18px] ${currentTone.icon}`}
                  >
                    <IconBook2 size={22} />
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#111827]">
                    {riskLevel}
                  </span>
                </div>
                <p
                  className={`mt-8 text-[10px] font-extrabold uppercase tracking-[0.1em] ${currentTone.muted}`}
                >
                  {card.tag || toLabel(card.chips[0] ?? "Guidance")}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-[1.02]">
                  {card.title}
                </h2>
                <p className={`mt-4 text-sm leading-6 ${currentTone.muted}`}>
                  {card.summary}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-8">
                  <IconClock size={14} className={currentTone.muted} />
                  <span className={`text-xs font-bold ${currentTone.muted}`}>
                    {card.readTimeLabel || "4 min read"}
                  </span>
                </div>
              </div>
            </aside>

            <section className="flex min-w-0 flex-col p-1 sm:p-3">
              <div className="flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-[#EEF4FB] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0F5D9F]"
                  >
                    {toLabel(chip)}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 max-w-[760px] text-3xl font-extrabold leading-[1.05] text-[#0F172A] sm:text-4xl">
                {card.detailHeading || card.title}
              </h3>
              <p className="mt-4 max-w-[760px] text-base leading-7 text-[#475569]">
                {summary}
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <section className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#64748B]">
                    What this covers
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#334155]">
                    {body}
                  </p>
                </section>
                <section className="rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#64748B]">
                    Key takeaway
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#0F172A]">
                    {takeaway}
                  </p>
                </section>
              </div>

              {showNavigation ? (
                <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#D8E3F0] bg-white px-5 text-sm font-bold text-[#334155] transition hover:bg-[#F8FAFC]"
                  >
                    <IconChevronLeft size={16} />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0F5D9F] px-5 text-sm font-bold text-white transition hover:bg-[#004E92]"
                  >
                    Next
                    <IconArrowRight size={16} />
                  </button>
                </div>
              ) : null}
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

function ReportSubmissionSupportPage() {
  const { t } = useTranslation();
  const [triage, setTriage] = useState<ConversationFlowTriage | null>(null);
  const [loading, setLoading] = useState(true);
  const [microCards, setMicroCards] = useState<MicroEducationItem[]>([]);
  const [supportSuggestedMicroCardIds, setSupportSuggestedMicroCardIds] =
    useState<string[]>([]);
  const [isLoadingMicroCards, setIsLoadingMicroCards] = useState(true);
  const [microCardsError, setMicroCardsError] = useState<string | null>(null);
  const [activeMicroCardId, setActiveMicroCardId] = useState<string | null>(
    null
  );
  const {
    pendingConsentRequirement,
    isGrantingConsent,
    captureConsentError,
    clearPendingConsent,
    grantPendingConsent,
  } = useConsentGate();

  const loadTriage = useCallback(async () => {
    const source = getAssistantTriageSource();
    const conversationSessionId = source?.conversationSessionId;

    if (!conversationSessionId) {
      setTriage(buildFallbackTriage());
      setSupportSuggestedMicroCardIds([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetchConversationFlowSupport(
        conversationSessionId
      );

      setTriage(response.triage);
      setSupportSuggestedMicroCardIds(response.support.suggestedMicroCardIds);
    } catch (supportFetchError) {
      if (captureConsentError(supportFetchError)) {
        setTriage(null);
        return;
      }

      try {
        const response = await fetchConversationFlowTriage(
          conversationSessionId
        );

        setTriage(response.triage);
        setSupportSuggestedMicroCardIds([]);
      } catch (fetchError) {
        if (captureConsentError(fetchError)) {
          setTriage(null);
          return;
        }

        setTriage(buildFallbackTriage());
        setSupportSuggestedMicroCardIds([]);
      }
    } finally {
      setLoading(false);
    }
  }, [captureConsentError]);

  useEffect(() => {
    void loadTriage();
  }, [loadTriage]);

  useEffect(() => {
    let isMounted = true;

    const loadMicroCards = async () => {
      setIsLoadingMicroCards(true);
      setMicroCardsError(null);

      try {
        const items = await listPublishedMicroEducation();

        if (isMounted) {
          setMicroCards(items);
        }
      } catch (error) {
        if (isMounted) {
          setMicroCards([]);
          setMicroCardsError(
            error instanceof Error
              ? error.message
              : "Micro-cards could not be loaded."
          );
        }
      } finally {
        if (isMounted) {
          setIsLoadingMicroCards(false);
        }
      }
    };

    void loadMicroCards();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleAllowPendingConsent = async () => {
    try {
      await grantPendingConsent();
      await loadTriage();
    } catch {
      setTriage(buildFallbackTriage());
      setSupportSuggestedMicroCardIds([]);
      setLoading(false);
    }
  };

  const handleDeclinePendingConsent = () => {
    clearPendingConsent();
    setTriage(buildFallbackTriage());
    setSupportSuggestedMicroCardIds([]);
    setLoading(false);
  };

  const canProceedToRecommendations = useMemo(() => {
    return triage?.canProceedToRecommendations ?? true;
  }, [triage]);

  const violenceMicroCardProfile = useMemo(
    () => getViolenceMicroCardProfile(triage),
    [triage]
  );

  const suggestedMicroCards = useMemo(
    () =>
      getSuggestedMicroCards(
        microCards,
        violenceMicroCardProfile,
        supportSuggestedMicroCardIds
      ),
    [microCards, supportSuggestedMicroCardIds, violenceMicroCardProfile]
  );
  const shouldShowSupportOptions = !loading && !pendingConsentRequirement;
  const activeMicroCard = useMemo(
    () =>
      suggestedMicroCards.find((card) => card.id === activeMicroCardId) ?? null,
    [activeMicroCardId, suggestedMicroCards]
  );

  useEffect(() => {
    if (!activeMicroCardId) {
      return;
    }

    if (!suggestedMicroCards.some((card) => card.id === activeMicroCardId)) {
      setActiveMicroCardId(null);
    }
  }, [activeMicroCardId, suggestedMicroCards]);

  useEffect(() => {
    if (!activeMicroCard) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMicroCardId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMicroCard]);

  const openAdjacentMicroCard = (direction: -1 | 1) => {
    if (!activeMicroCard || suggestedMicroCards.length === 0) {
      return;
    }

    const currentIndex = suggestedMicroCards.findIndex(
      (card) => card.id === activeMicroCard.id
    );
    const nextIndex =
      ((currentIndex >= 0 ? currentIndex : 0) +
        direction +
        suggestedMicroCards.length) %
      suggestedMicroCards.length;

    setActiveMicroCardId(suggestedMicroCards[nextIndex].id);
  };

  return (
    <div className="px-2 pb-12 pt-2 sm:px-4 sm:pb-10 sm:pt-4">
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

        <main className="mx-auto flex w-full max-w-[1136px] flex-col gap-8 pt-3 sm:gap-9">
          <section>
            <h1 className="text-[22px] font-extrabold leading-7 text-[#004E92] sm:text-3xl sm:leading-9">
              {t("dashboard.assistant.triage.title")}
            </h1>
            <p className="mt-1 text-sm font-medium leading-6 text-[#6B7280] sm:text-base">
              {t("dashboard.assistant.triage.subtitle")}
            </p>
          </section>

          <section>
            <article className="relative overflow-hidden rounded-[28px] bg-white px-5 py-8 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:rounded-[38px] sm:px-8 sm:py-10 lg:rounded-[48px] lg:px-12 lg:py-12">
              <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EFF6FF]" />
              <div className="relative z-10 mx-auto flex max-w-[672px] flex-col items-center">
                <span
                  aria-label={t("dashboard.assistant.triage.specialtyTag")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF] text-[#004E92]"
                >
                  <IconHeartbeat size={22} stroke={2.2} />
                </span>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#9CA3AF]">
                  {t("dashboard.assistant.triage.incidentClassification")}
                </p>
                <h2 className="mt-3 max-w-[420px] text-[34px] font-extrabold leading-[0.98] text-[#004E92] sm:text-5xl sm:leading-none">
                  {t("dashboard.assistant.triage.supportType")}
                </h2>
                <span className="mt-8 h-1 w-16 rounded-full bg-[#F3F4F6]" />
                <p className="mt-8 max-w-[640px] text-sm leading-6 text-[#4B5563] sm:text-lg sm:leading-[1.6]">
                  {loading
                    ? "Reviewing your inputs and preparing support options."
                    : t("dashboard.assistant.triage.assessmentBody")}
                </p>
                <p className="mt-4 text-xs italic leading-5 text-[#9CA3AF] sm:text-sm">
                  {t("dashboard.assistant.triage.assessmentNote")}
                </p>
              </div>
            </article>

            <p className="mx-auto mt-4 max-w-[672px] px-3 text-center text-xs leading-5 text-[#9CA3AF] sm:text-sm">
              {t("dashboard.assistant.triage.legalInfo")}
            </p>
          </section>

          {pendingConsentRequirement ? (
            <div className="max-w-[680px]">
              <ConsentRequiredCard
                requirement={pendingConsentRequirement}
                isSubmitting={isGrantingConsent || loading}
                onAllow={() => {
                  void handleAllowPendingConsent();
                }}
                onDecline={handleDeclinePendingConsent}
              />
            </div>
          ) : null}

          {shouldShowSupportOptions ? (
            <>
              <section>
                <SectionTitle
                  action={
                    <Link
                      href="/dashboard?view=reportsubmissionhistory"
                      className="shrink-0 text-xs font-semibold leading-5 text-[#9CA3AF] transition hover:text-[#64748B]"
                    >
                      {t("dashboard.assistant.triage.saveToHistory")}
                    </Link>
                  }
                >
                  {t("dashboard.assistant.triage.recommendedSteps")}
                </SectionTitle>

                <Link
                  href={
                    canProceedToRecommendations
                      ? "/dashboard?view=reportsubmissionrecommendations"
                      : "/dashboard?view=reportsubmissiondetailedexplanations"
                  }
                  className="mt-5 flex items-center justify-between gap-5 rounded-[24px] bg-white p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 sm:rounded-[32px] sm:p-6"
                >
                  <span className="flex min-w-0 items-center gap-4 sm:gap-6">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFEDD5] text-[#F97316] sm:h-16 sm:w-16">
                      <IconFirstAidKit size={24} stroke={2.3} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-lg font-extrabold leading-7 text-[#111827] sm:text-xl">
                        {t("dashboard.assistant.triage.primaryStepTitle")}
                      </span>
                      <span className="mt-1 block text-sm leading-5 text-[#6B7280] sm:text-base sm:leading-6">
                        {t("dashboard.assistant.triage.primaryStepBody")}
                      </span>
                    </span>
                  </span>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9FAFB] text-[#9CA3AF]">
                    <IconArrowRight size={18} />
                  </span>
                </Link>

                <div className="mt-5 grid gap-4">
                  <RecommendationRow
                    icon={<IconShieldFilled size={18} />}
                    iconClassName="bg-[#FEF2F2] text-[#EF4444]"
                    title={t(
                      "dashboard.assistant.triage.recommendations.immediateDangerTitle"
                    )}
                    description={t(
                      "dashboard.assistant.triage.recommendations.immediateDangerBody"
                    )}
                    action={
                      <Link
                        href="/dashboard?view=reportsubmissionevidence"
                        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-6 text-xs font-extrabold text-white shadow-[0_12px_22px_rgba(255,138,0,0.28)] transition hover:bg-[#F47C00] sm:w-auto"
                      >
                        <IconPhoneFilled size={14} />
                        {t(
                          "dashboard.assistant.triage.recommendations.contactPolice"
                        )}
                      </Link>
                    }
                  />
                  <RecommendationRow
                    icon={<IconGavel size={20} />}
                    iconClassName="bg-[#EEF2FF] text-[#4F63F6]"
                    title={t(
                      "dashboard.assistant.triage.recommendations.esafetyTitle"
                    )}
                    description={t(
                      "dashboard.assistant.triage.recommendations.esafetyBody"
                    )}
                    action={
                      <Link
                        href="/dashboard?view=reportsubmissionevidence"
                        className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#F3F4F6] px-6 text-xs font-extrabold text-[#374151] transition hover:bg-[#E5E7EB] sm:w-auto"
                      >
                        {t(
                          "dashboard.assistant.triage.recommendations.reportToEsafety"
                        )}
                        <IconArrowRight size={16} className="text-[#9CA3AF]" />
                      </Link>
                    }
                  />
                  <RecommendationRow
                    icon={<IconHeadphones size={20} />}
                    iconClassName="bg-[#E6FFFA] text-[#14B8A6]"
                    title={t(
                      "dashboard.assistant.triage.recommendations.counsellingTitle"
                    )}
                    description={t(
                      "dashboard.assistant.triage.recommendations.counsellingBody"
                    )}
                    action={
                      <Link
                        href="/dashboard?view=reportsubmissionevidence"
                        className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#F3F4F6] px-6 text-xs font-extrabold text-[#374151] transition hover:bg-[#E5E7EB] sm:w-auto"
                      >
                        {t(
                          "dashboard.assistant.triage.recommendations.callLifeline"
                        )}
                        <IconArrowRight size={16} className="text-[#9CA3AF]" />
                      </Link>
                    }
                  />
                </div>

                {violenceMicroCardProfile ? (
                  <div className="mt-6">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0F5D9F]">
                          AI suggested micro-cards
                        </p>
                        <p className="mt-1 text-sm leading-5 text-[#64748B]">
                          Matched to{" "}
                          {violenceMicroCardProfile.label.toLowerCase()} and{" "}
                          {violenceMicroCardProfile.safetyRiskLevel} safety
                          risk.
                        </p>
                      </div>
                      <Link
                        href="/dashboard?view=microcards"
                        className="inline-flex h-9 items-center gap-2 self-start rounded-full border border-[#D8E3F0] bg-white px-4 text-xs font-bold text-[#334155] transition hover:bg-[#F8FAFC] sm:self-auto"
                      >
                        View all
                        <IconArrowRight size={14} />
                      </Link>
                    </div>

                    {isLoadingMicroCards ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div
                            key={index}
                            className="min-h-[220px] animate-pulse rounded-[28px] bg-white/80 shadow-[0_18px_34px_rgba(15,93,159,0.08)]"
                          />
                        ))}
                      </div>
                    ) : suggestedMicroCards.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {suggestedMicroCards.map((card) => (
                          <SuggestedMicroCard
                            key={card.id}
                            card={card}
                            riskLevel={violenceMicroCardProfile.safetyRiskLevel}
                            onOpen={() => setActiveMicroCardId(card.id)}
                          />
                        ))}
                      </div>
                    ) : (
                      <article className="rounded-[24px] border border-dashed border-[#D8E3F0] bg-white p-6 text-sm leading-6 text-[#64748B]">
                        {microCardsError ??
                          "No published micro-cards currently match this violence profile. Publish matching safety, harassment, rights, or mental health micro-cards to show them here."}
                      </article>
                    )}
                  </div>
                ) : (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,309.33px))] lg:justify-center lg:gap-6">
                    <GradientActionCard
                      href="/dashboard?view=reportsubmissiondetailedexplanations"
                      icon={<IconUsersGroup size={22} />}
                      backgroundIcon={<IconUsersGroup size={128} />}
                      title={t("dashboard.assistant.triage.worriedOthersTitle")}
                      description={t(
                        "dashboard.assistant.triage.worriedOthersBody"
                      )}
                    />
                    <GradientActionCard
                      href="/dashboard?view=resources"
                      icon={<IconBook2 size={22} />}
                      backgroundIcon={<IconBook2 size={128} />}
                      title={t("dashboard.assistant.triage.selfHelpTitle")}
                      description={t("dashboard.assistant.triage.selfHelpBody")}
                    />
                    <article className="relative flex min-h-[238px] flex-col justify-between overflow-hidden rounded-[30px] border border-[#FEE2E2] bg-[#FEF2F2] p-6 sm:min-h-[270px] sm:rounded-[38px] lg:min-h-[318px] lg:rounded-[48px] lg:p-8">
                      <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-[#EF4444]" />
                      <div>
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EF4444] text-white shadow-[0_10px_15px_-3px_#FECACA,0_4px_6px_-4px_#FECACA]">
                          <IconShieldCheckFilled size={22} />
                        </span>
                        <h4 className="mt-6 text-xl font-extrabold leading-7 text-[#111827] sm:text-2xl sm:leading-8">
                          {t("dashboard.assistant.triage.unsafeTitle")}
                        </h4>
                        <p className="mt-2 max-w-[220px] text-sm leading-5 text-[#4B5563]">
                          {t("dashboard.assistant.triage.unsafeBody")}
                        </p>
                      </div>
                      <div>
                        <a
                          href={`tel:${EMERGENCY_NUMBER}`}
                          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#EF4444] px-4 text-sm font-extrabold text-white shadow-[0_10px_15px_-3px_#FECACA,0_4px_6px_-4px_#FECACA] transition hover:bg-[#DC2626]"
                        >
                          <IconPhoneCall size={16} />
                          {t("dashboard.assistant.triage.callEmergency")}
                        </a>
                        <p className="mt-3 text-center text-xs leading-4 text-[#9CA3AF]">
                          Stay on this screen
                        </p>
                      </div>
                    </article>
                  </div>
                )}
              </section>

              <section>
                <SectionTitle>
                  {t("dashboard.assistant.triage.additionalResources")}
                </SectionTitle>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:gap-6">
                  <ResourceCard
                    href="/dashboard/explorer"
                    icon={<IconShieldCheckFilled size={20} />}
                    title={t("dashboard.assistant.triage.resourceEsafetyTitle")}
                    description={t(
                      "dashboard.assistant.triage.resourceEsafetyBody"
                    )}
                  />
                  <ResourceCard
                    href="/dashboard/explorer"
                    icon={<IconLifebuoy size={20} />}
                    title={t(
                      "dashboard.assistant.triage.resourceCounsellingTitle"
                    )}
                    description={t(
                      "dashboard.assistant.triage.resourceCounsellingBody"
                    )}
                  />
                </div>
              </section>

              <footer className="border-t border-[#F3F4F6] pt-8">
                <p className="mx-auto max-w-[672px] text-center text-xs leading-5 text-[#9CA3AF]">
                  {t("dashboard.assistant.triage.footerNote")}
                </p>
              </footer>
            </>
          ) : null}
        </main>
      </div>

      {activeMicroCard && violenceMicroCardProfile ? (
        <MicroCardDetailOverlay
          card={activeMicroCard}
          riskLevel={violenceMicroCardProfile.safetyRiskLevel}
          onClose={() => setActiveMicroCardId(null)}
          onPrevious={() => openAdjacentMicroCard(-1)}
          onNext={() => openAdjacentMicroCard(1)}
          showNavigation={suggestedMicroCards.length > 1}
        />
      ) : null}
    </div>
  );
}

export { ReportSubmissionSupportPage };
