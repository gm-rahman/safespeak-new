"use client";

import {
  IconBookmark,
  IconBookmarkFilled,
  IconCircleCheckFilled,
  IconExternalLink,
  IconPhone,
} from "@tabler/icons-react";

import { ORGANISATION_CATEGORY_CHIP_LABELS, telHref, type OrganisationRecord } from "@/lib/organisation";
import { cn } from "@/lib/utils";

export function ExplorerOrganisationCard({
  organisation,
  isSaved,
  onToggleSaved,
  onOpenDetails,
}: {
  organisation: OrganisationRecord;
  isSaved: boolean;
  onToggleSaved: (organisationId: string) => void;
  onOpenDetails: (organisation: OrganisationRecord, triggerElement: HTMLElement | null) => void;
}) {
  const canCall = Boolean(organisation.phoneDial);
  const canVisit = Boolean(organisation.websiteUrl);

  return (
    <article className="flex flex-col rounded-[18px] border border-[#dce6f2] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#eef4ff] text-[13px] font-extrabold text-[#0f5d9f]"
          >
            {organisation.initials}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="text-sm font-bold text-[#1f2a3a]">{organisation.name}</h3>
              {organisation.verified ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f7ef] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em] text-[#0f766e]">
                  <IconCircleCheckFilled size={11} />
                  Verified
                </span>
              ) : null}
            </div>
            {organisation.serviceType ? (
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#7c8da3]">
                {organisation.serviceType}
              </p>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onToggleSaved(organisation.id)}
          aria-pressed={isSaved}
          aria-label={isSaved ? `Remove ${organisation.name} from saved` : `Save ${organisation.name}`}
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
            isSaved
              ? "border-[#f59e0b] bg-[#fffbeb] text-[#b45309]"
              : "border-[#e3ebf5] bg-white text-[#98a6b9] hover:bg-[#f8fbff]"
          )}
        >
          {isSaved ? <IconBookmarkFilled size={16} /> : <IconBookmark size={16} />}
        </button>
      </div>

      <p className="mt-3 line-clamp-3 text-[12px] leading-[1.6] text-[#60728a]">
        {organisation.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-[#f1f5f9] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#475569]">
          {organisation.jurisdiction === "national" ? "National" : organisation.jurisdiction}
        </span>
        {organisation.categories.slice(0, 3).map((categoryId) => (
          <span
            key={categoryId}
            className="rounded-full bg-[#eef4ff] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#0f5d9f]"
          >
            {ORGANISATION_CATEGORY_CHIP_LABELS[categoryId]}
          </span>
        ))}
        {organisation.isEmergency ? (
          <span className="rounded-full bg-[#fff1f1] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#b91c1c]">
            Emergency
          </span>
        ) : null}
        {organisation.is24_7 ? (
          <span className="rounded-full bg-[#f0fdf4] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#15803d]">
            24/7
          </span>
        ) : null}
        {organisation.isFree ? (
          <span className="rounded-full bg-[#f0fdf4] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#15803d]">
            Free
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {canCall ? (
          <a
            href={telHref(organisation.phoneDial!)}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#0f5d9f] px-3.5 text-[11px] font-bold text-white"
          >
            <IconPhone size={13} />
            Call
          </a>
        ) : canVisit ? (
          <a
            href={organisation.websiteUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#0f5d9f] px-3.5 text-[11px] font-bold text-white"
          >
            <IconExternalLink size={13} />
            Visit
          </a>
        ) : null}
        <button
          type="button"
          onClick={(event) => onOpenDetails(organisation, event.currentTarget)}
          className="inline-flex h-9 items-center justify-center rounded-full border border-[#d7e1ee] bg-white px-3.5 text-[11px] font-bold text-[#334155] transition hover:bg-[#f1f5f9]"
        >
          Details
        </button>
      </div>
    </article>
  );
}
