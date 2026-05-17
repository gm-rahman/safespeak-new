"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { IconChevronLeft, IconClock } from "@tabler/icons-react";

import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import { useConsentGate } from "@/hooks/use-consent-gate";
import { getAssistantTriageSource } from "@/lib/assistant-triage";
import {
  fetchConversationFlowDetails,
  type ConversationFlowDetails,
  type ConversationFlowRecommendation,
} from "@/lib/conversation-flow";

type DetailTabKey =
  | "overview"
  | "rights"
  | "reportingOptions"
  | "evidenceGuide"
  | "supportServices"
  | "safetyPlanning";

const TAB_ORDER: DetailTabKey[] = [
  "overview",
  "rights",
  "reportingOptions",
  "evidenceGuide",
  "supportServices",
  "safetyPlanning",
];

function buildFallbackDetails(): ConversationFlowDetails {
  return {
    category: "general_support",
    categoryLabel: "General Support",
    safetyRiskLevel: "low",
    matchedKnowledgeSources: [],
    matchedLegislationIds: [],
    humanReviewRecommended: true,
    sections: {
      overview: {
        title: "Overview",
        body: "The conversation needs more verified detail before a stronger rights explanation can be shown.",
      },
      rights: {
        title: "Your Rights",
        items: [
          {
            title: "Information-first guidance",
            body: "SafeSpeak can help you understand options, but it should not invent legal conclusions when source matching is incomplete.",
          },
        ],
      },
      reportingOptions: { title: "Reporting Options", items: [] },
      evidenceGuide: {
        title: "Evidence Guide",
        items: [
          {
            title: "Capture what feels safe",
            description: "Screenshots, dates, locations, and short notes can all help later.",
          },
        ],
      },
      supportServices: { title: "Support Services", items: [] },
      safetyPlanning: {
        title: "Safety Planning",
        items: [
          {
            title: "Safety planning",
            description: "Think about trusted contacts, safer locations, and what you may need if you decide to report.",
          },
        ],
      },
    },
    disclaimer: "This is information only, not legal advice.",
  };
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-bold transition ${
        active
          ? "bg-[#0A66A8] text-white"
          : "bg-white text-[#607B90] hover:bg-[#f7fbff]"
      }`}
    >
      {label}
    </button>
  );
}

function isRecommendation(item: unknown): item is ConversationFlowRecommendation {
  return Boolean(
    item &&
      typeof item === "object" &&
      "title" in item &&
      "description" in item &&
      "resourceType" in item,
  );
}

function GenericItem({ item }: { item: Record<string, unknown> }) {
  const title = typeof item.title === "string" ? item.title : "Guidance";
  const body =
    typeof item.body === "string"
      ? item.body
      : typeof item.description === "string"
        ? item.description
        : "";

  return (
    <article className="rounded-[14px] border border-[#e5edf6] bg-white p-4">
      <h4 className="text-sm font-bold text-[#0B1F33]">{title}</h4>
      {body ? <p className="mt-2 text-sm leading-6 text-[#526B80]">{body}</p> : null}
    </article>
  );
}

function ResourceItem({ item }: { item: ConversationFlowRecommendation }) {
  return (
    <article className="rounded-[14px] border border-[#e5edf6] bg-white p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0A66A8]">
        {item.resourceType.replace(/_/g, " ")}
      </p>
      <h4 className="mt-2 text-sm font-bold text-[#0B1F33]">{item.title}</h4>
      <p className="mt-2 text-sm leading-6 text-[#526B80]">{item.description}</p>
      {item.websiteUrl ? (
        <a
          href={item.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-xs font-bold text-[#0A66A8]"
        >
          {item.ctaLabel ?? "View option"}
        </a>
      ) : null}
    </article>
  );
}

function ReportSubmissionDetailedExplanationsPage() {
  const [details, setDetails] = useState<ConversationFlowDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DetailTabKey>("overview");
  const {
    pendingConsentRequirement,
    isGrantingConsent,
    captureConsentError,
    clearPendingConsent,
    grantPendingConsent,
  } = useConsentGate();

  const loadDetails = useCallback(async () => {
    const source = getAssistantTriageSource();
    const conversationSessionId = source?.conversationSessionId;

    if (!conversationSessionId) {
      setDetails(buildFallbackDetails());
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchConversationFlowDetails(conversationSessionId);

      setDetails(response.details);
    } catch (fetchError) {
      if (captureConsentError(fetchError)) {
        setDetails(null);
        return;
      }

      setError(fetchError instanceof Error ? fetchError.message : null);
      setDetails(buildFallbackDetails());
    } finally {
      setLoading(false);
    }
  }, [captureConsentError]);

  useEffect(() => {
    void loadDetails();
  }, [loadDetails]);

  const handleAllowPendingConsent = async () => {
    try {
      await grantPendingConsent();
      await loadDetails();
    } catch (consentError) {
      setError(
        consentError instanceof Error
          ? consentError.message
          : "Consent could not be saved."
      );
    }
  };

  const handleDeclinePendingConsent = () => {
    clearPendingConsent();
    setDetails(buildFallbackDetails());
    setError("AI detail data was not loaded because consent was declined. A local fallback view is shown.");
    setLoading(false);
  };

  const activeSection = details?.sections[activeTab];
  const activeItems = useMemo(() => {
    if (!activeSection || !("items" in activeSection)) {
      return [];
    }

    return activeSection.items;
  }, [activeSection]);

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=reportsubmissionrecommendations"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Details
          </Link>
          <Link
            href="/dashboard?view=reportsubmissionhistory"
            aria-label="View report history"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#9ba8bb] transition hover:text-[#74879e]"
          >
            <IconClock size={12} />
          </Link>
        </div>

        <article className="mt-3 rounded-[18px] border border-[#dce5f1] bg-[#f7fafe] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A66A8]">
            Details / Rights / Evidence
          </p>
          <h2 className="mt-2 text-[28px] font-bold leading-tight text-[#0B1F33]">
            {loading ? "Loading details..." : details?.categoryLabel ?? "Details"}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#526B80]">
            This page brings together the overview, rights context, reporting options, evidence guidance, support services, and safety planning from the current triage result.
          </p>
          {pendingConsentRequirement ? (
            <div className="mt-4 max-w-[620px]">
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

          {error ? (
            <div className="mt-4 rounded-[16px] border border-[#dbe6f2] bg-white px-4 py-3 text-sm text-[#607B90]">
              Live detail data was unavailable, so a safe fallback view is shown.
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {TAB_ORDER.map((tab) => (
              <TabButton
                key={tab}
                active={activeTab === tab}
                label={details?.sections[tab].title ?? tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>

          <section className="mt-5 rounded-[18px] border border-[#dbe6f2] bg-[#fbfdff] p-4">
            <h3 className="text-lg font-bold text-[#0B1F33]">
              {activeSection?.title ?? "Loading"}
            </h3>
            {activeTab === "overview" && activeSection && "body" in activeSection ? (
              <p className="mt-3 text-sm leading-6 text-[#526B80]">{activeSection.body}</p>
            ) : null}

            {activeTab !== "overview" ? (
              <div className="mt-4 grid gap-3">
                {activeItems.length > 0 ? (
                  activeItems.map((item, index) =>
                    isRecommendation(item) ? (
                      <ResourceItem key={item.id ?? `${item.title}-${index}`} item={item} />
                    ) : (
                      <GenericItem key={`${String(item.title ?? "item")}-${index}`} item={item} />
                    ),
                  )
                ) : (
                  <p className="rounded-[14px] border border-[#e5edf6] bg-white p-4 text-sm text-[#526B80]">
                    No approved item is available for this section yet.
                  </p>
                )}
              </div>
            ) : null}
          </section>

          <p className="mt-6 text-[11px] leading-5 text-[#7a8ca2]">
            {details?.disclaimer ?? "This is information only, not legal advice."}
          </p>
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionDetailedExplanationsPage };
