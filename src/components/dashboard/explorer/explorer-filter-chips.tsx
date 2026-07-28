"use client";

import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

import {
  ORGANISATION_CATEGORY_CHIP_LABELS,
  ORGANISATION_CATEGORY_IDS,
  type OrganisationCategoryId,
} from "@/lib/organisation";
import { cn } from "@/lib/utils";

function Chip({
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
      role="tab"
      aria-selected={isSelected}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border px-4 text-[11px] font-bold transition",
        isSelected
          ? "border-[#0f5d9f] bg-[#0f5d9f] text-white"
          : "border-[#d7e1ee] bg-white text-[#334155] hover:bg-[#f1f5f9]"
      )}
    >
      {children}
    </button>
  );
}

export function ExplorerFilterChips({
  selectedCategory,
  onSelectCategory,
  activeExtraFilterCount,
  onOpenFilters,
}: {
  selectedCategory: OrganisationCategoryId | null;
  onSelectCategory: (category: OrganisationCategoryId | null) => void;
  activeExtraFilterCount: number;
  onOpenFilters: () => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter organisations by category"
      className="mt-4 flex flex-wrap items-center gap-2"
    >
      <Chip isSelected={selectedCategory === null} onClick={() => onSelectCategory(null)}>
        All services
      </Chip>
      {ORGANISATION_CATEGORY_IDS.map((categoryId) => (
        <Chip
          key={categoryId}
          isSelected={selectedCategory === categoryId}
          onClick={() => onSelectCategory(selectedCategory === categoryId ? null : categoryId)}
        >
          {ORGANISATION_CATEGORY_CHIP_LABELS[categoryId]}
        </Chip>
      ))}
      <button
        type="button"
        onClick={onOpenFilters}
        className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#d7e1ee] bg-white px-4 text-[11px] font-bold text-[#334155] transition hover:bg-[#f1f5f9]"
      >
        <IconAdjustmentsHorizontal size={14} />
        Filters
        {activeExtraFilterCount > 0 ? (
          <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#0f5d9f] px-1 text-[9px] font-bold text-white">
            {activeExtraFilterCount}
          </span>
        ) : null}
      </button>
    </div>
  );
}
