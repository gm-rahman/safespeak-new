"use client";

import { IconBookmarkFilled } from "@tabler/icons-react";

import {
  AUSTRALIAN_JURISDICTIONS,
  JURISDICTION_LABELS,
  type AustralianJurisdiction,
} from "@/lib/organisation";
import type { OrganisationAvailabilityFilters } from "@/lib/organisation-filters";
import { cn } from "@/lib/utils";

import { ExplorerModal, ExplorerModalCloseButton } from "./explorer-modal";

const AVAILABILITY_OPTIONS: Array<{
  key: keyof OrganisationAvailabilityFilters;
  label: string;
}> = [
  { key: "is24_7", label: "24/7" },
  { key: "isFree", label: "Free" },
  { key: "isEmergency", label: "Emergency" },
];

function JurisdictionPill({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-full border px-3 text-[11px] font-bold transition",
        isSelected
          ? "border-[#0f5d9f] bg-[#0f5d9f] text-white"
          : "border-[#d7e1ee] bg-white text-[#334155] hover:bg-[#f1f5f9]"
      )}
    >
      {children}
    </button>
  );
}

export function ExplorerFiltersPanel({
  isOpen,
  onClose,
  jurisdiction,
  onJurisdictionChange,
  availability,
  onAvailabilityChange,
  savedOnly,
  onSavedOnlyChange,
  savedCount,
  onClearFilters,
}: {
  isOpen: boolean;
  onClose: () => void;
  jurisdiction: AustralianJurisdiction | null;
  onJurisdictionChange: (jurisdiction: AustralianJurisdiction | null) => void;
  availability: OrganisationAvailabilityFilters;
  onAvailabilityChange: (availability: OrganisationAvailabilityFilters) => void;
  savedOnly: boolean;
  onSavedOnlyChange: (savedOnly: boolean) => void;
  savedCount: number;
  onClearFilters: () => void;
}) {
  return (
    <ExplorerModal isOpen={isOpen} onClose={onClose} titleId="explorer-filters-title">
      <div className="flex items-center justify-between border-b border-[#e5ebf3] px-5 py-4">
        <h2 id="explorer-filters-title" className="text-sm font-extrabold text-[#1f2a3a]">
          Filters
        </h2>
        <ExplorerModalCloseButton onClose={onClose} label="Close filters" />
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            State / Jurisdiction
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <JurisdictionPill
              isSelected={jurisdiction === null}
              onClick={() => onJurisdictionChange(null)}
            >
              {JURISDICTION_LABELS.national}
            </JurisdictionPill>
            {AUSTRALIAN_JURISDICTIONS.filter((value) => value !== "national").map((value) => (
              <JurisdictionPill
                key={value}
                isSelected={jurisdiction === value}
                onClick={() => onJurisdictionChange(jurisdiction === value ? null : value)}
              >
                {JURISDICTION_LABELS[value]}
              </JurisdictionPill>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Availability
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {AVAILABILITY_OPTIONS.map((option) => {
              const isSelected = availability[option.key];

              return (
                <JurisdictionPill
                  key={option.key}
                  isSelected={isSelected}
                  onClick={() =>
                    onAvailabilityChange({
                      ...availability,
                      [option.key]: !isSelected,
                    })
                  }
                >
                  {option.label}
                </JurisdictionPill>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Saved organisations
          </h3>
          <label className="mt-3 flex items-center justify-between rounded-[14px] border border-[#e3ebf5] bg-[#fbfdff] px-4 py-3">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#1f2a3a]">
              <IconBookmarkFilled size={15} className="text-[#f59e0b]" />
              Show saved only
              <span className="rounded-full bg-[#eef4ff] px-2 py-0.5 text-[10px] font-bold text-[#0f5d9f]">
                {savedCount} saved
              </span>
            </span>
            <input
              type="checkbox"
              checked={savedOnly}
              onChange={(event) => onSavedOnlyChange(event.target.checked)}
              className="h-4 w-4 rounded border-[#cbd8e8]"
              aria-label="Show saved organisations only"
            />
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#e5ebf3] px-5 py-4">
        <button
          type="button"
          onClick={onClearFilters}
          className="text-[11px] font-bold text-[#60728a] underline-offset-2 hover:underline"
        >
          Clear filters
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-[11px] font-bold text-white"
        >
          Show results
        </button>
      </div>
    </ExplorerModal>
  );
}
