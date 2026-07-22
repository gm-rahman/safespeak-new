"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  DEFAULT_PLATFORM_SETTINGS,
  type PlatformSettingsPayload,
  getPublicPlatformSettings,
} from "@/lib/platform-settings";
import { syncSafetyPresentation } from "@/lib/safety";

import { SafetyGate } from "./safety-gate";
import { SafetyRail } from "./safety-rail";

export function SafetyExperience() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [platformSettings, setPlatformSettings] =
    useState<PlatformSettingsPayload>(DEFAULT_PLATFORM_SETTINGS);
  const isFrontendOnlyReportFlow =
    pathname === "/dashboard" &&
    searchParams.get("view") === "reportsubmissiondetails";
  const isFrontendOnlyAssistantConversation =
    pathname === "/dashboard" &&
    searchParams.get("view") === "assistantconversation";
  const shouldUseDefaultSettings =
    isFrontendOnlyReportFlow || isFrontendOnlyAssistantConversation;

  useEffect(() => {
    syncSafetyPresentation(pathname);
  }, [pathname]);

  useEffect(() => {
    if (shouldUseDefaultSettings) {
      setPlatformSettings(DEFAULT_PLATFORM_SETTINGS);
      return;
    }

    let isMounted = true;

    getPublicPlatformSettings()
      .then((settings) => {
        if (isMounted) {
          setPlatformSettings(settings);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPlatformSettings(DEFAULT_PLATFORM_SETTINGS);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [shouldUseDefaultSettings]);

  return (
    <>
      <SafetyGate platformSettings={platformSettings} />
      <SafetyRail platformSettings={platformSettings} />
    </>
  );
}
