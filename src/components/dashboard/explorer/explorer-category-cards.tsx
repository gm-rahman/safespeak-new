"use client";

import {
  IconHomeFilled,
  IconMicrophone,
  IconScale,
  IconShieldFilled,
} from "@tabler/icons-react";

import {
  FEATURED_ORGANISATION_CATEGORIES,
  ORGANISATION_CATEGORY_LABELS,
  type OrganisationCategoryId,
} from "@/lib/organisation";
import { cn } from "@/lib/utils";

const CATEGORY_TILE_STYLE: Record<
  OrganisationCategoryId,
  { gradientClassName: string; icon: React.ReactNode; subtitle: string }
> = {
  domestic: {
    gradientClassName: "bg-[linear-gradient(135deg,#7F1D1D_0%,#B91C1C_100%)]",
    icon: <IconShieldFilled size={18} />,
    subtitle: "Safety planning, crisis lines and refuge support",
  },
  legal: {
    gradientClassName: "bg-[linear-gradient(135deg,#0F5D9F_0%,#1D72D8_100%)]",
    icon: <IconScale size={18} />,
    subtitle: "Free legal advice, AVO help and advocacy",
  },
  mental: {
    gradientClassName: "bg-[linear-gradient(135deg,#4F46E5_0%,#7E22CE_100%)]",
    icon: <IconMicrophone size={18} />,
    subtitle: "Counselling and 24/7 crisis support lines",
  },
  housing: {
    gradientClassName: "bg-[linear-gradient(135deg,#7C2D12_0%,#C2410C_100%)]",
    icon: <IconHomeFilled size={18} />,
    subtitle: "Crisis accommodation and homelessness support",
  },
  financial: {
    gradientClassName: "bg-[linear-gradient(135deg,#0f5d9f_0%,#0891b2_100%)]",
    icon: <IconShieldFilled size={18} />,
    subtitle: "Emergency relief and cost-of-living support",
  },
  racism: {
    gradientClassName: "bg-[linear-gradient(135deg,#4F46E5_0%,#7E22CE_100%)]",
    icon: <IconShieldFilled size={18} />,
    subtitle: "Discrimination and human rights support",
  },
  workplace: {
    gradientClassName: "bg-[linear-gradient(135deg,#0F5D9F_0%,#1D72D8_100%)]",
    icon: <IconScale size={18} />,
    subtitle: "Workplace rights and fair treatment support",
  },
  children: {
    gradientClassName: "bg-[linear-gradient(135deg,#7E22CE_0%,#4F46E5_100%)]",
    icon: <IconMicrophone size={18} />,
    subtitle: "Support for children and young people",
  },
};

export function ExplorerCategoryCards({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: OrganisationCategoryId | null;
  onSelectCategory: (category: OrganisationCategoryId | null) => void;
}) {
  return (
    <section aria-label="Featured support categories" className="mt-5">
      <h2 className="px-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
        Browse by category
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {FEATURED_ORGANISATION_CATEGORIES.map((categoryId) => {
          const style = CATEGORY_TILE_STYLE[categoryId];
          const isSelected = selectedCategory === categoryId;

          return (
            <button
              key={categoryId}
              type="button"
              aria-pressed={isSelected}
              aria-label={ORGANISATION_CATEGORY_LABELS[categoryId]}
              onClick={() => onSelectCategory(isSelected ? null : categoryId)}
              className={cn(
                "group relative min-h-[132px] overflow-hidden rounded-[20px] border text-left shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-14px_rgba(15,23,42,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f5d9f]",
                style.gradientClassName,
                isSelected ? "border-white ring-2 ring-[#1f2a3a]" : "border-white/20"
              )}
            >
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.05)_60%)]" />
              <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/25 text-white backdrop-blur-[2px]">
                {style.icon}
              </span>
              {isSelected ? (
                <span className="absolute right-4 top-4 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1f2a3a]">
                  Selected
                </span>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <h3 className="text-[16px] font-bold leading-tight text-white">
                  {ORGANISATION_CATEGORY_LABELS[categoryId]}
                </h3>
                <p className="mt-1 text-[10px] leading-4 text-[#E5E7EB]">{style.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
