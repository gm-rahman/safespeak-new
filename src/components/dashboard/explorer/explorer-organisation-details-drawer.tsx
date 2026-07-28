"use client";

import { useState } from "react";

import {
  IconBookmark,
  IconBookmarkFilled,
  IconCircleCheckFilled,
  IconClockHour4,
  IconExternalLink,
  IconInfoCircle,
  IconLanguage,
  IconMapPin,
  IconPhone,
  IconShare2,
  IconWheelchair,
} from "@tabler/icons-react";

import { telHref, type OrganisationRecord } from "@/lib/organisation";
import { shareOrganisation } from "@/lib/organisation-share";

import { ExplorerModal, ExplorerModalCloseButton } from "./explorer-modal";

function InfoField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex items-start gap-2.5 rounded-[12px] bg-[#f7f9fc] px-3 py-2.5">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e5eefb] text-[#3b82f6]">
        {icon}
      </span>
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#91a0b4]">{label}</p>
        <p className="mt-0.5 text-[12px] font-semibold text-[#21324c]">{value}</p>
      </div>
    </div>
  );
}

export function ExplorerOrganisationDetailsDrawer({
  isOpen,
  onClose,
  organisation,
  relatedOrganisations,
  isSaved,
  onToggleSaved,
  onSelectRelated,
}: {
  isOpen: boolean;
  onClose: () => void;
  organisation: OrganisationRecord | null;
  relatedOrganisations: OrganisationRecord[];
  isSaved: boolean;
  onToggleSaved: (organisationId: string) => void;
  onSelectRelated: (organisation: OrganisationRecord) => void;
}) {
  const [shareStatus, setShareStatus] = useState<"idle" | "shared" | "copied" | "error">("idle");

  if (!organisation) {
    return null;
  }

  const canCall = Boolean(organisation.phoneDial);
  const canVisit = Boolean(organisation.websiteUrl);

  const handleShare = async () => {
    try {
      const result = await shareOrganisation(organisation);
      setShareStatus(result === "unavailable" ? "error" : result);
    } catch {
      setShareStatus("error");
    } finally {
      window.setTimeout(() => setShareStatus("idle"), 2200);
    }
  };

  return (
    <ExplorerModal isOpen={isOpen} onClose={onClose} titleId="explorer-org-details-title">
      <div className="flex items-start justify-between gap-3 border-b border-[#e5ebf3] px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#eef4ff] text-sm font-extrabold text-[#0f5d9f]">
            {organisation.initials}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <h2 id="explorer-org-details-title" className="text-base font-extrabold text-[#1f2a3a]">
                {organisation.name}
              </h2>
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
        <ExplorerModalCloseButton onClose={onClose} label="Close organisation details" />
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
        <p className="text-[12px] leading-[1.65] text-[#42566d]">{organisation.description}</p>

        <div className="flex flex-wrap gap-2">
          {canCall ? (
            <a
              href={telHref(organisation.phoneDial!)}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white"
            >
              <IconPhone size={14} />
              Call {organisation.phoneDisplay}
            </a>
          ) : null}
          {canVisit ? (
            <a
              href={organisation.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#d7e1ee] bg-white px-4 text-[11px] font-bold text-[#24344d]"
            >
              <IconExternalLink size={14} />
              Website
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => onToggleSaved(organisation.id)}
            aria-pressed={isSaved}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#d7e1ee] bg-white px-4 text-[11px] font-bold text-[#24344d]"
          >
            {isSaved ? <IconBookmarkFilled size={14} className="text-[#b45309]" /> : <IconBookmark size={14} />}
            {isSaved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => void handleShare()}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#d7e1ee] bg-white px-4 text-[11px] font-bold text-[#24344d]"
          >
            <IconShare2 size={14} />
            {shareStatus === "shared"
              ? "Shared"
              : shareStatus === "copied"
                ? "Copied"
                : shareStatus === "error"
                  ? "Share unavailable"
                  : "Share"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <InfoField icon={<IconClockHour4 size={13} />} label="Hours" value={organisation.hours} />
          <InfoField
            icon={<IconMapPin size={13} />}
            label="Coverage"
            value={
              organisation.coverage ??
              (organisation.jurisdiction === "national" ? "National" : organisation.jurisdiction)
            }
          />
          <InfoField
            icon={<IconLanguage size={13} />}
            label="Languages"
            value={organisation.languages?.length ? organisation.languages.join(", ") : undefined}
          />
          <InfoField
            icon={<IconWheelchair size={13} />}
            label="Accessibility"
            value={organisation.accessibility}
          />
          <InfoField icon={<IconInfoCircle size={13} />} label="Cost" value={organisation.cost} />
          <InfoField icon={<IconInfoCircle size={13} />} label="Type" value={organisation.serviceType} />
        </div>

        {relatedOrganisations.length > 0 ? (
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
              Related support
            </h3>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {relatedOrganisations.map((related) => (
                <button
                  key={related.id}
                  type="button"
                  onClick={() => onSelectRelated(related)}
                  className="flex items-center gap-2.5 rounded-[12px] border border-[#e3ebf5] bg-[#fbfdff] px-3 py-2.5 text-left transition hover:bg-[#eef4ff]"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#eef4ff] text-[10px] font-extrabold text-[#0f5d9f]">
                    {related.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold text-[#1f2a3a]">
                      {related.name}
                    </span>
                    <span className="block truncate text-[9px] text-[#7c8da3]">
                      {related.serviceType ?? "Support service"}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="rounded-[12px] border border-[#e1eaf4] bg-[#f8fbff] px-4 py-3 text-[10px] leading-[1.6] text-[#60728a]">
          SafeSpeak reviews organisation details where possible, but service details can change.
          Confirm hours, cost and eligibility directly with the organisation before you rely on
          them.
        </div>
      </div>
    </ExplorerModal>
  );
}
