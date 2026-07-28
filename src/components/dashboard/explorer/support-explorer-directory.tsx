"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

import { IconAlertCircle, IconLoader2 } from "@tabler/icons-react";

import {
  normalizeSupportService,
  type AustralianJurisdiction,
  type OrganisationCategoryId,
  type OrganisationRecord,
} from "@/lib/organisation";
import { DEMO_ORGANISATIONS } from "@/lib/organisation-demo-data";
import {
  DEFAULT_AVAILABILITY_FILTERS,
  filterOrganisations,
  isFilterStateActive,
  mergeOrganisations,
  sortOrganisations,
  type OrganisationAvailabilityFilters,
  type OrganisationFilterState,
} from "@/lib/organisation-filters";
import { useSavedOrganisationIds } from "@/lib/organisation-saved";
import type { SupportServiceRecord } from "@/lib/support-client";

import { ExplorerAiConcierge } from "./explorer-ai-concierge";
import { ExplorerCategoryCards } from "./explorer-category-cards";
import { ExplorerEmergencyBanner } from "./explorer-emergency-banner";
import { ExplorerFilterChips } from "./explorer-filter-chips";
import { ExplorerFiltersPanel } from "./explorer-filters-panel";
import {
  ExplorerListMapToggle,
  ExplorerResultsSummary,
  type ExplorerViewMode,
} from "./explorer-list-map-toggle";
import { ExplorerOrganisationCard } from "./explorer-organisation-card";
import { ExplorerOrganisationDetailsDrawer } from "./explorer-organisation-details-drawer";
import { ExplorerSafetyFooter } from "./explorer-safety-footer";

const ExplorerOrganisationMap = dynamic(
  () => import("./explorer-organisation-map").then((mod) => mod.ExplorerOrganisationMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[320px] items-center justify-center gap-2 rounded-[18px] border border-[#dce6f2] bg-white text-[12px] text-[#60728a]">
        <IconLoader2 size={14} className="animate-spin" />
        Loading map...
      </div>
    ),
  }
);

const PAGE_SIZE = 9;

export function SupportExplorerDirectory({
  backendServices,
  isLoadingBackend,
  backendLoadError,
  initialQuery = "",
  initialCategory = null,
}: {
  backendServices: SupportServiceRecord[];
  isLoadingBackend: boolean;
  backendLoadError: string | null;
  initialQuery?: string;
  initialCategory?: OrganisationCategoryId | null;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [hasSearched, setHasSearched] = useState(Boolean(initialQuery));
  const [category, setCategory] = useState<OrganisationCategoryId | null>(initialCategory);
  const [jurisdiction, setJurisdiction] = useState<AustralianJurisdiction | null>(null);
  const [availability, setAvailability] = useState<OrganisationAvailabilityFilters>(
    DEFAULT_AVAILABILITY_FILTERS
  );
  const [savedOnly, setSavedOnly] = useState(false);
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ExplorerViewMode>("list");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [activeOrganisation, setActiveOrganisation] = useState<OrganisationRecord | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { savedIds, isSaved, toggleSaved, savedCount } = useSavedOrganisationIds();

  const backendOrganisations = useMemo(
    () => backendServices.map((service, index) => normalizeSupportService(service, index)),
    [backendServices]
  );
  const allOrganisations = useMemo(
    () => mergeOrganisations(backendOrganisations, DEMO_ORGANISATIONS),
    [backendOrganisations]
  );
  const organisationsById = useMemo(() => {
    const map = new Map<string, OrganisationRecord>();
    allOrganisations.forEach((organisation) => map.set(organisation.id, organisation));
    return map;
  }, [allOrganisations]);

  const filterState: OrganisationFilterState = useMemo(
    () => ({ query, category, jurisdiction, availability, savedOnly }),
    [query, category, jurisdiction, availability, savedOnly]
  );

  const filteredOrganisations = useMemo(
    () => sortOrganisations(filterOrganisations(allOrganisations, filterState, savedIds)),
    [allOrganisations, filterState, savedIds]
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, category, jurisdiction, availability, savedOnly]);

  const visibleOrganisations = filteredOrganisations.slice(0, visibleCount);
  const remainingCount = filteredOrganisations.length - visibleOrganisations.length;
  const activeExtraFilterCount =
    (jurisdiction ? 1 : 0) +
    (availability.is24_7 ? 1 : 0) +
    (availability.isFree ? 1 : 0) +
    (availability.isEmergency ? 1 : 0) +
    (savedOnly ? 1 : 0);

  const handleAiSubmitQuery = (nextQuery: string) => {
    setQuery(nextQuery);
    setHasSearched(true);
  };

  const handleOpenDetails = (organisation: OrganisationRecord) => {
    setActiveOrganisation(organisation);
    setIsDetailsOpen(true);
  };

  const handleSelectRelated = (organisation: OrganisationRecord) => {
    setActiveOrganisation(organisation);
  };

  const handleClearFilters = () => {
    setQuery("");
    setHasSearched(false);
    setCategory(null);
    setJurisdiction(null);
    setAvailability(DEFAULT_AVAILABILITY_FILTERS);
    setSavedOnly(false);
  };

  const relatedOrganisations = (activeOrganisation?.relatedOrganisationIds ?? [])
    .map((relatedId) => organisationsById.get(relatedId))
    .filter((organisation): organisation is OrganisationRecord => Boolean(organisation));

  return (
    <div>
      <ExplorerEmergencyBanner />

      <ExplorerAiConcierge
        query={query}
        onSubmitQuery={handleAiSubmitQuery}
        isSearching={isLoadingBackend && hasSearched}
        resultCount={filteredOrganisations.length}
        hasSearched={hasSearched}
      />

      <ExplorerCategoryCards selectedCategory={category} onSelectCategory={setCategory} />

      {backendLoadError ? (
        <div className="mt-4 rounded-[14px] border border-[#fde2e2] bg-[#fff5f5] px-4 py-3 text-[11px] text-[#b45353]">
          <span className="inline-flex items-center gap-1.5">
            <IconAlertCircle size={12} />
            Live support services could not be loaded ({backendLoadError}). Showing
            SafeSpeak&apos;s directory of well-established Australian services instead.
          </span>
        </div>
      ) : null}

      <section className="mt-5" aria-label="Support directory">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ExplorerFilterChips
            selectedCategory={category}
            onSelectCategory={setCategory}
            activeExtraFilterCount={activeExtraFilterCount}
            onOpenFilters={() => setIsFiltersPanelOpen(true)}
          />
          <div className="flex shrink-0 items-center gap-3">
            {isFilterStateActive(filterState) ? (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-[11px] font-bold text-[#60728a] underline-offset-2 hover:underline"
              >
                Clear filters
              </button>
            ) : null}
            <ExplorerListMapToggle mode={viewMode} onChange={setViewMode} />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <ExplorerResultsSummary
            visibleCount={viewMode === "list" ? visibleOrganisations.length : filteredOrganisations.length}
            totalCount={filteredOrganisations.length}
          />
          {isLoadingBackend ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] text-[#98a6b9]">
              <IconLoader2 size={12} className="animate-spin" />
              Refreshing live services...
            </span>
          ) : null}
        </div>

        <div className="mt-3">
          {viewMode === "list" ? (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {visibleOrganisations.map((organisation) => (
                  <ExplorerOrganisationCard
                    key={organisation.id}
                    organisation={organisation}
                    isSaved={isSaved(organisation.id)}
                    onToggleSaved={toggleSaved}
                    onOpenDetails={handleOpenDetails}
                  />
                ))}
              </div>
              {visibleOrganisations.length === 0 ? (
                <div className="rounded-[16px] border border-dashed border-[#d8e2ee] bg-[#fbfdff] p-6 text-center text-[12px] text-[#60728a]">
                  No organisations match these filters yet. Try clearing a filter or searching
                  different words above.
                </div>
              ) : null}
              {remainingCount > 0 ? (
                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[#d7e1ee] bg-white px-6 text-[12px] font-bold text-[#0f5d9f] transition hover:bg-[#f1f5f9]"
                  >
                    Load {Math.min(PAGE_SIZE, remainingCount)} more
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <ExplorerOrganisationMap
              organisations={filteredOrganisations}
              onOpenDetails={handleOpenDetails}
            />
          )}
        </div>
      </section>

      <ExplorerSafetyFooter />

      <ExplorerFiltersPanel
        isOpen={isFiltersPanelOpen}
        onClose={() => setIsFiltersPanelOpen(false)}
        jurisdiction={jurisdiction}
        onJurisdictionChange={setJurisdiction}
        availability={availability}
        onAvailabilityChange={setAvailability}
        savedOnly={savedOnly}
        onSavedOnlyChange={setSavedOnly}
        savedCount={savedCount}
        onClearFilters={handleClearFilters}
      />

      <ExplorerOrganisationDetailsDrawer
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        organisation={activeOrganisation}
        relatedOrganisations={relatedOrganisations}
        isSaved={activeOrganisation ? isSaved(activeOrganisation.id) : false}
        onToggleSaved={toggleSaved}
        onSelectRelated={handleSelectRelated}
      />
    </div>
  );
}
