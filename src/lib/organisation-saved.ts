"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Saved organisations are stored client-side only (no backend endpoint for
 * this exists yet - see organisation.ts audit notes). The `safespeak_`
 * prefix is required: `triggerQuickExit()` in lib/safety.ts wipes every
 * localStorage key with that prefix, so a saved list of (for example)
 * domestic violence services is cleared along with everything else on
 * Quick Exit.
 */
export const SAVED_ORGANISATION_IDS_STORAGE_KEY = "safespeak_saved_organisation_ids";
const SAVED_ORGANISATION_IDS_EVENT = "safespeak:saved-organisations-changed";

function readSavedIds(): Set<string> {
  if (typeof window === "undefined") {
    return new Set();
  }

  try {
    const raw = window.localStorage.getItem(SAVED_ORGANISATION_IDS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    if (!Array.isArray(parsed)) {
      return new Set();
    }

    return new Set(parsed.filter((value): value is string => typeof value === "string"));
  } catch {
    return new Set();
  }
}

function writeSavedIds(ids: Set<string>): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(SAVED_ORGANISATION_IDS_STORAGE_KEY, JSON.stringify([...ids]));
  window.dispatchEvent(new Event(SAVED_ORGANISATION_IDS_EVENT));
}

export function useSavedOrganisationIds() {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => readSavedIds());
  const isFirstRenderRef = useRef(true);
  const isExternalUpdateRef = useRef(false);

  useEffect(() => {
    const syncFromStorage = () => {
      isExternalUpdateRef.current = true;
      setSavedIds(readSavedIds());
    };

    window.addEventListener("storage", syncFromStorage);
    window.addEventListener(SAVED_ORGANISATION_IDS_EVENT, syncFromStorage);

    return () => {
      window.removeEventListener("storage", syncFromStorage);
      window.removeEventListener(SAVED_ORGANISATION_IDS_EVENT, syncFromStorage);
    };
  }, []);

  // Persist after commit rather than inside the setState updater, which
  // must stay pure (React may invoke it more than once in development).
  // Skip the very first run (that's just the initial read) and any run
  // triggered by syncFromStorage above (that would just re-write the value
  // we already read, and re-dispatch the event forever).
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    if (isExternalUpdateRef.current) {
      isExternalUpdateRef.current = false;
      return;
    }

    writeSavedIds(savedIds);
  }, [savedIds]);

  const isSaved = useCallback((organisationId: string) => savedIds.has(organisationId), [savedIds]);

  const toggleSaved = useCallback((organisationId: string) => {
    setSavedIds((current) => {
      const next = new Set(current);

      if (next.has(organisationId)) {
        next.delete(organisationId);
      } else {
        next.add(organisationId);
      }

      return next;
    });
  }, []);

  return { savedIds, isSaved, toggleSaved, savedCount: savedIds.size };
}
