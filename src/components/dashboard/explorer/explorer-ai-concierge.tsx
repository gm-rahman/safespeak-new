"use client";

import { FormEvent, useState } from "react";

import { IconLoader2, IconSearch, IconSparkles } from "@tabler/icons-react";

const POPULAR_PROMPTS = [
  "I need legal help with an AVO",
  "I'm experiencing racism at work",
  "I need someone to talk to tonight",
  "I need housing — I'm not safe at home",
  "My child is being bullied online",
];

/**
 * Free-text entry point for the support directory. It does not call a
 * separate AI backend - "AI query" and manual search share one canonical
 * filter pipeline (see organisation-filters.ts), so this box, the popular
 * prompts, and the plain chip filters can never disagree about results.
 */
export function ExplorerAiConcierge({
  query,
  onSubmitQuery,
  isSearching,
  resultCount,
  hasSearched,
}: {
  query: string;
  onSubmitQuery: (nextQuery: string) => void;
  isSearching: boolean;
  resultCount: number;
  hasSearched: boolean;
}) {
  const [draft, setDraft] = useState(query);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitQuery(draft);
  };

  const handlePromptClick = (prompt: string) => {
    setDraft(prompt);
    onSubmitQuery(prompt);
  };

  return (
    <section className="mt-5 rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
        <IconSparkles size={13} />
        AI Support Concierge
      </p>
      <h2 className="mt-1 text-xl font-bold text-[#1f2a3a]">
        Find the right support, when you need it.
      </h2>
      <p className="mt-1 max-w-[640px] text-xs leading-[1.65] text-[#60728a]">
        Describe your situation in plain language and SafeSpeak will match relevant Australian
        services, including counselling, legal help, crisis support, housing, and related
        assistance. Your description stays on this page and is only used to filter the directory
        below.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="explorer-ai-concierge-input" className="sr-only">
          Describe your situation
        </label>
        <div className="relative min-w-0 flex-1">
          <IconSearch
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#98a6b9]"
          />
          <input
            id="explorer-ai-concierge-input"
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="I need a safe place to stay tonight near Melbourne..."
            className="h-11 w-full rounded-full border border-[#d7e1ee] bg-[#f8fbff] pl-9 pr-3 text-[12px] text-[#1f2a3a] outline-none placeholder:text-[#95a3b8] focus:border-[#3b82f6]"
          />
        </div>
        <button
          type="submit"
          disabled={isSearching}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#0f5d9f] px-5 text-[12px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSearching ? <IconLoader2 size={14} className="animate-spin" /> : <IconSparkles size={14} />}
          Ask AI
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#98a6b9]">
          Try:
        </span>
        {POPULAR_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => handlePromptClick(prompt)}
            className="rounded-full border border-[#e3ebf5] bg-[#fbfdff] px-3 py-1.5 text-[10px] font-semibold text-[#334155] transition hover:bg-[#eef4ff]"
          >
            {prompt}
          </button>
        ))}
      </div>

      {hasSearched ? (
        <p className="mt-3 text-[11px] font-semibold text-[#0f5d9f]" role="status" aria-live="polite">
          {isSearching
            ? "Matching services..."
            : resultCount > 0
              ? `Found ${resultCount} matching organisation${resultCount === 1 ? "" : "s"} below.`
              : "No organisations matched that description. Try different words, or browse categories below."}
        </p>
      ) : null}

      <p className="mt-3 text-[9px] leading-[1.5] text-[#98a6b9]">
        SafeSpeak matches your words against service categories and directory listings on this
        device. It does not select or contact a service on your behalf.
      </p>
    </section>
  );
}
