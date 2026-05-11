"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  IconArrowRight,
  IconBook2,
  IconChevronLeft,
  IconExternalLink,
  IconPhoneFilled,
  IconShieldFilled,
} from "@tabler/icons-react";

import { useSafeSpeakProfile } from "@/hooks/use-safespeak-profile";
import {
  getContentResourceDownloadUrl,
  listPublishedContentResources,
  type ContentResourceItem,
} from "@/lib/content-resources";
import { listPublishedMicroEducation, type MicroEducationItem } from "@/lib/microeducation";
import {
  buildSmartDialerScript,
  smartDialerContacts,
  type SmartDialerContactId,
} from "@/lib/smart-dialer";
import { useEffect } from "react";

function ResourcesPage() {
  const [resources, setResources] = useState<ContentResourceItem[]>([]);
  const [microCards, setMicroCards] = useState<MicroEducationItem[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    void Promise.all([
      listPublishedContentResources(),
      listPublishedMicroEducation(),
    ])
      .then(([nextResources, nextMicroCards]) => {
        if (!isActive) {
          return;
        }

        setResources(nextResources.slice(0, 6));
        setMicroCards(nextMicroCards.slice(0, 4));
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error
            ? error.message
            : "Learn and resource content could not be loaded."
        );
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="px-2 pb-5 pt-2 sm:px-4 sm:pb-8 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px] space-y-4">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Learn & Resources
          </Link>
          <Link href="/dashboard" className="text-xs font-medium text-[#7b8798]">
            Home
          </Link>
        </div>

        <section className="rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
            Learn safely
          </p>
          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.02] text-[#1f2a3a]">
            Resource Library
          </h1>
          <p className="mt-2 max-w-[760px] text-sm leading-[1.65] text-[#60728a]">
            Browse practical guidance, downloadable resources, and micro-education without starting a report or AI flow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/dashboard?view=microeducation"
              className="inline-flex h-10 items-center rounded-full bg-[#0f5d9f] px-5 text-xs font-bold text-white"
            >
              Open micro-education
            </Link>
            <Link
              href="/dashboard?view=microcards"
              className="inline-flex h-10 items-center rounded-full border border-[#d7e1ee] px-5 text-xs font-semibold text-[#334155]"
            >
              Browse micro-cards
            </Link>
          </div>
        </section>

        {loadError ? (
          <div className="rounded-[16px] border border-[#fde2e2] bg-[#fff5f5] px-4 py-3 text-[11px] text-[#b45353]">
            {loadError}
          </div>
        ) : null}

        <section className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
          <article className="rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-[#1f2a3a]">Downloadable resources</h2>
                <p className="mt-1 text-xs text-[#60728a]">
                  Backend resources appear here when available.
                </p>
              </div>
              <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
                Library
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {resources.length > 0 ? (
                resources.map((resource) => (
                  <article
                    key={resource.id}
                    className="rounded-[18px] border border-[#e3ebf5] bg-[#f8fbff] p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#1f2a3a]">{resource.name}</p>
                        <p className="mt-1 text-[11px] text-[#60728a]">
                          {resource.category} | {resource.language} | {resource.jurisdiction}
                        </p>
                      </div>
                      <a
                        href={getContentResourceDownloadUrl(resource)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 items-center gap-1 rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white"
                      >
                        Download
                        <IconExternalLink size={12} />
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[18px] border border-dashed border-[#d8e2ee] bg-[#fbfdff] p-4 text-[11px] text-[#60728a]">
                  Resource library items are not available yet. Safe placeholders stay visible until backend content is ready.
                </div>
              )}
            </div>
          </article>

          <aside className="rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef4ff] text-[#0f5d9f]">
                <IconBook2 size={18} />
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#1f2a3a]">Micro-education</h2>
                <p className="text-[11px] text-[#60728a]">
                  Short guidance cards for quick learning.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {microCards.length > 0 ? (
                microCards.map((card) => (
                  <article
                    key={card.id}
                    className="rounded-[18px] border border-[#e3ebf5] bg-[#f8fbff] p-4"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                      {card.tag}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#1f2a3a]">{card.title}</p>
                    <p className="mt-1 text-[11px] leading-[1.55] text-[#60728a]">
                      {card.summary}
                    </p>
                  </article>
                ))
              ) : (
                <div className="rounded-[18px] border border-dashed border-[#d8e2ee] bg-[#fbfdff] p-4 text-[11px] text-[#60728a]">
                  Micro-education content will appear here when published.
                </div>
              )}
            </div>

            <Link
              href="/dashboard?view=microeducation"
              className="mt-4 inline-flex h-10 items-center rounded-full border border-[#d7e1ee] px-5 text-xs font-semibold text-[#334155]"
            >
              Open all learning content
              <IconArrowRight size={13} className="ml-1" />
            </Link>
          </aside>
        </section>
      </div>
    </div>
  );
}

function LocalIntelligencePage() {
  return (
    <div className="px-2 pb-5 pt-2 sm:px-4 sm:pb-8 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px] space-y-4">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Local Intelligence
          </Link>
          <Link href="/dashboard" className="text-xs font-medium text-[#7b8798]">
            Home
          </Link>
        </div>

        <section className="rounded-[22px] border border-[#dce5f1] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
            Privacy-safe placeholder
          </p>
          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.02] text-[#1f2a3a]">
            Local intelligence
          </h1>
          <p className="mt-3 text-sm leading-[1.7] text-[#60728a]">
            Local intelligence will show anonymised aggregate insights only. No individual reports are shown.
          </p>
          <p className="mt-3 text-sm leading-[1.7] text-[#60728a]">
            Insights are only shown when privacy thresholds are met.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              "Heatmaps stay threshold-protected before any area is shown.",
              "Trend summaries use anonymised counts only.",
              "No person-level data or report detail appears in this view.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-[18px] border border-[#e3ebf5] bg-[#f8fbff] p-4 text-[12px] leading-[1.6] text-[#50627a]"
              >
                {item}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SmartDiallerPage() {
  const { profile } = useSafeSpeakProfile();
  const [selectedContactId, setSelectedContactId] =
    useState<SmartDialerContactId>("respect");
  const [scriptDraft, setScriptDraft] = useState("");
  const selectedContact =
    smartDialerContacts.find((contact) => contact.id === selectedContactId) ??
    smartDialerContacts[0];

  const suggestedScript = useMemo(
    () =>
      buildSmartDialerScript(
        selectedContact.id,
        profile.interpreterLanguage,
        "en"
      ).join("\n"),
    [profile.interpreterLanguage, selectedContact.id]
  );

  useEffect(() => {
    setScriptDraft(suggestedScript);
  }, [suggestedScript]);

  return (
    <div className="px-2 pb-5 pt-2 sm:px-4 sm:pb-8 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px] space-y-4">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Smart Dialler
          </Link>
          <Link href="/dashboard/explorer" className="text-xs font-medium text-[#7b8798]">
            Get Support
          </Link>
        </div>

        <section className="rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
            Safe call planning
          </p>
          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.02] text-[#1f2a3a]">
            Smart Dialler
          </h1>
          <p className="mt-2 max-w-[760px] text-sm leading-[1.65] text-[#60728a]">
            Use verified numbers, interpreter prompts, and a short call-prep script. SafeSpeak does not place calls automatically.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
              You can ask for an interpreter in your language.
            </span>
            <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#b45309]">
              Silent or covert help guidance only
            </span>
          </div>
        </section>

        <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-3">
            {smartDialerContacts
              .filter((contact) =>
                [
                  "emergency",
                  "respect",
                  "lifeline",
                  "policeAssistance",
                  "tisNational",
                ].includes(contact.id)
              )
              .map((contact) => {
                const isSelected = contact.id === selectedContactId;

                return (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => setSelectedContactId(contact.id)}
                    className={`w-full rounded-[20px] border p-4 text-left transition ${
                      isSelected
                        ? "border-[#0f5d9f] bg-[#eef6ff]"
                        : "border-[#dce5f1] bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold text-[#1f2a3a]">
                          {contact.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#0f5d9f]">
                          {contact.numberDisplay}
                        </p>
                        <p className="mt-2 text-[12px] leading-[1.6] text-[#60728a]">
                          {contact.description}
                        </p>
                      </div>
                      <span className="rounded-full bg-[#f8fbff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#60728a]">
                        {contact.availability}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={`tel:${contact.numberDial}`}
                        className="inline-flex h-9 items-center gap-1 rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white"
                        aria-label={`Call ${contact.label}`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <IconPhoneFilled size={12} />
                        Call now
                      </a>
                      <a
                        href={contact.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 items-center gap-1 rounded-full border border-[#d7e1ee] px-4 text-[11px] font-semibold text-[#334155]"
                        onClick={(event) => event.stopPropagation()}
                      >
                        Source
                        <IconExternalLink size={12} />
                      </a>
                    </div>
                  </button>
                );
              })}
          </section>

          <aside className="rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eef4ff] text-[#0f5d9f]">
                <IconShieldFilled size={18} />
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#1f2a3a]">
                  Call prep script
                </h2>
                <p className="text-[11px] text-[#60728a]">
                  Edit before calling if you want to shorten or simplify it.
                </p>
              </div>
            </div>

            <textarea
              value={scriptDraft}
              onChange={(event) => setScriptDraft(event.target.value)}
              rows={12}
              className="mt-4 w-full rounded-[18px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3 text-[12px] leading-[1.6] text-[#334155] outline-none"
              aria-label="Editable call preparation script"
            />

            <div className="mt-4 rounded-[18px] border border-[#e3ebf5] bg-[#f8fbff] p-4 text-[12px] leading-[1.65] text-[#50627a]">
              <p className="font-bold text-[#1f2a3a]">Covert help guidance</p>
              <p className="mt-2">
                If it is not safe to speak for long, say that first. You can ask the service to slow down, keep questions short, or connect an interpreter through TIS National.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export { LocalIntelligencePage, ResourcesPage, SmartDiallerPage };
