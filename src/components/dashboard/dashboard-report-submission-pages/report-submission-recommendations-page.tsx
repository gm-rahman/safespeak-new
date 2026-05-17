"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";

import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import { useConsentGate } from "@/hooks/use-consent-gate";
import { getAssistantTriageSource } from "@/lib/assistant-triage";
import {
  fetchConversationFlowRecommendations,
  type ConversationFlowRecommendation,
} from "@/lib/conversation-flow";

function fallbackRecommendations(): ConversationFlowRecommendation[] {
  return [
    {
      id: "fallback-evidence",
      title: "Evidence guidance",
      description: "If it feels safe, keep screenshots, dates, names, and short notes about what happened.",
      category: "general_support",
      resourceType: "evidence_guidance",
      ctaLabel: "Review evidence tips",
    },
    {
      id: "fallback-support",
      title: "Support options",
      description: "If you want support now, look for a service that matches your location and situation.",
      category: "general_support",
      resourceType: "mental_health",
      ctaLabel: "View support options",
    },
  ];
}

const toTelHref = (phone: string): string => {
  const normalized = phone.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : `tel:${phone}`;
};

const toMailHref = (email: string, title: string): string => {
  const subject = encodeURIComponent(`SafeSpeak support option: ${title}`);
  return `mailto:${email}?subject=${subject}`;
};

function RecommendationCard({ item }: { item: ConversationFlowRecommendation }) {
  return (
    <article className="rounded-[18px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0A66A8]">
            {item.resourceType.replace(/_/g, " ")}
          </p>
          <h3 className="mt-2 text-lg font-bold text-[#0B1F33]">{item.title}</h3>
        </div>
        {item.phone ? (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-[#0A66A8]">
            <IconPhoneCall size={16} />
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-[#526B80]">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#607B90]">
        {item.phone ? <span>Phone: {item.phone}</span> : null}
        {item.email ? <span>Email: {item.email}</span> : null}
        {item.jurisdiction ? <span>Jurisdiction: {item.jurisdiction}</span> : null}
      </div>
      {item.safetyNotes || item.eligibilityNotes || item.languageSupportNotes ? (
        <div className="mt-4 rounded-[14px] bg-[#f8fbff] p-3 text-xs leading-5 text-[#607B90]">
          {item.safetyNotes ? <p>Safety: {item.safetyNotes}</p> : null}
          {item.eligibilityNotes ? <p>Eligibility: {item.eligibilityNotes}</p> : null}
          {item.languageSupportNotes ? <p>Language: {item.languageSupportNotes}</p> : null}
        </div>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-3">
        {item.phone ? (
          <a
            href={toTelHref(item.phone)}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#cfdceb] bg-white px-5 text-[12px] font-bold text-[#244961]"
          >
            <IconPhoneCall size={14} />
            Call
          </a>
        ) : null}
        {item.email ? (
          <a
            href={toMailHref(item.email, item.title)}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#cfdceb] bg-white px-5 text-[12px] font-bold text-[#244961]"
          >
            <IconMail size={14} />
            Email
          </a>
        ) : null}
        {item.websiteUrl ? (
          <a
            href={item.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-[#0f5d9f] px-5 text-[12px] font-bold text-white"
          >
            {item.ctaLabel ?? "View option"}
          </a>
        ) : (
          item.phone || item.email ? null : (
            <span className="inline-flex h-10 items-center rounded-full bg-[#0f5d9f] px-5 text-[12px] font-bold text-white">
              {item.ctaLabel ?? "View option"}
            </span>
          )
        )}
      </div>
    </article>
  );
}

function ReportSubmissionRecommendationsPage() {
  const [recommendations, setRecommendations] = useState<ConversationFlowRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {
    pendingConsentRequirement,
    isGrantingConsent,
    captureConsentError,
    clearPendingConsent,
    grantPendingConsent,
  } = useConsentGate();

  const loadRecommendations = useCallback(async () => {
    const source = getAssistantTriageSource();
    const conversationSessionId = source?.conversationSessionId;

    if (!conversationSessionId) {
      setRecommendations(fallbackRecommendations());
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchConversationFlowRecommendations(conversationSessionId);

      setRecommendations(
        response.recommendations.length > 0
          ? response.recommendations
          : fallbackRecommendations(),
      );
    } catch (fetchError) {
      if (captureConsentError(fetchError)) {
        setRecommendations([]);
        return;
      }

      setError(fetchError instanceof Error ? fetchError.message : null);
      setRecommendations(fallbackRecommendations());
    } finally {
      setLoading(false);
    }
  }, [captureConsentError]);

  useEffect(() => {
    void loadRecommendations();
  }, [loadRecommendations]);

  const handleAllowPendingConsent = async () => {
    try {
      await grantPendingConsent();
      await loadRecommendations();
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
    setRecommendations(fallbackRecommendations());
    setError("AI recommendations were not loaded because consent was declined. A local fallback set is shown.");
    setLoading(false);
  };

  const hasEmergencyItem = useMemo(
    () => recommendations.some((item) => item.resourceType === "emergency"),
    [recommendations],
  );

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=reportsubmissionsupport"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Recommendations
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
          <p className="max-w-3xl text-sm leading-6 text-[#526B80]">
            These recommendations are filtered by the current triage result, location, risk level, and admin-managed resources. SafeSpeak does not call, email, or send details automatically; choose an option only if you want to contact that service.
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

          {hasEmergencyItem ? (
            <div className="mt-4 rounded-[16px] border border-[#f5caca] bg-[#fff4f4] px-4 py-3 text-sm font-semibold text-[#b42318]">
              If you are in immediate danger, call 000 now.
            </div>
          ) : null}

          {error ? (
            <div className="mt-4 rounded-[16px] border border-[#dbe6f2] bg-white px-4 py-3 text-sm text-[#607B90]">
              Live recommendation data was unavailable, so a safe fallback set is shown.
            </div>
          ) : null}

          <div className="mt-5 grid gap-4">
            {loading ? (
              <div className="rounded-[18px] border border-[#dce5f1] bg-white px-4 py-6 text-sm text-[#607B90]">
                Loading recommendations...
              </div>
            ) : (
              recommendations.map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard?view=reportsubmissiondetailedexplanations"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0f5d9f] px-6 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.25)] transition hover:bg-[#0b528d]"
            >
              Read details, rights, and evidence guidance
              <IconChevronRight size={14} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionRecommendationsPage };
