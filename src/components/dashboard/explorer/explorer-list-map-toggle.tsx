"use client";

import { IconLayoutList, IconMapPin } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export type ExplorerViewMode = "list" | "map";

export function ExplorerListMapToggle({
  mode,
  onChange,
}: {
  mode: ExplorerViewMode;
  onChange: (mode: ExplorerViewMode) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Switch between list and map view"
      className="inline-flex h-9 items-center rounded-full border border-[#d7e1ee] bg-white p-1"
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === "list"}
        onClick={() => onChange("list")}
        className={cn(
          "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[11px] font-bold transition",
          mode === "list" ? "bg-[#0f5d9f] text-white" : "text-[#60728a] hover:bg-[#f1f5f9]"
        )}
      >
        <IconLayoutList size={14} />
        List
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === "map"}
        onClick={() => onChange("map")}
        className={cn(
          "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[11px] font-bold transition",
          mode === "map" ? "bg-[#0f5d9f] text-white" : "text-[#60728a] hover:bg-[#f1f5f9]"
        )}
      >
        <IconMapPin size={14} />
        Map
      </button>
    </div>
  );
}

export function ExplorerResultsSummary({
  visibleCount,
  totalCount,
}: {
  visibleCount: number;
  totalCount: number;
}) {
  if (totalCount === 0) {
    return (
      <p className="text-[11px] font-semibold text-[#60728a]" aria-live="polite">
        No organisations match these filters yet.
      </p>
    );
  }

  const clampedVisible = Math.min(visibleCount, totalCount);

  return (
    <p className="text-[11px] font-semibold text-[#60728a]" aria-live="polite">
      Showing {clampedVisible} of {totalCount} organisation{totalCount === 1 ? "" : "s"}
    </p>
  );
}
