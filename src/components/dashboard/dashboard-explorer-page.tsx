"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  IconAlertCircle,
  IconBellFilled,
  IconChevronDown,
  IconChevronLeft,
  IconCompassFilled,
  IconFolderFilled,
  IconHomeFilled,
  IconLoader2,
  IconMicrophone,
  IconPhone,
  IconSearch,
  IconShieldFilled,
  IconSparkles,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import { SafetyPlanManager } from "@/components/dashboard/dashboard-safety-pages";
import { useConsentGate } from "@/hooks/use-consent-gate";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import {
  getSupportRecommendations,
  listAdvocates,
  listSupportServices,
  requestAdvocate,
  type AdvocateRecord,
  type SafeContactPreference,
  type SupportServiceRecord,
} from "@/lib/support-client";

import abuseImage from "@/assets/abuse.png";
import bottomLeft from "@/assets/bottom-left.svg?url";
import domesticViolanceImage from "@/assets/domestic-violance.jpg";
import hackerImage from "@/assets/hacker.jpg";
import migrateImage from "@/assets/migrate.jpg";
import topRight from "@/assets/top-right.svg?url";
import { cn } from "@/lib/utils";

type SupportCardVisual = {
  imageSrc?: React.ComponentProps<typeof Image>["src"];
  imageUrl?: string;
  imageAlt?: string;
  gradientClassName?: string;
  overlayClassName?: string;
  icon: React.ReactNode;
};

function ExplorerSupportCard({
  title,
  subtitle,
  icon,
  className,
  imageSrc,
  imageUrl,
  imageAlt,
  gradientClassName,
  overlayClassName,
  href,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  imageSrc?: React.ComponentProps<typeof Image>["src"];
  imageUrl?: string;
  imageAlt?: string;
  gradientClassName?: string;
  overlayClassName?: string;
  href: React.ComponentProps<typeof Link>["href"];
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative min-h-[220px] overflow-hidden rounded-[24px] border border-white/20 bg-white/[0.002] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-14px_rgba(15,23,42,0.36)] sm:min-h-[260px] xl:rounded-[32px]",
        className
      )}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt ?? title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          sizes="(min-width: 1280px) 728px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-[linear-gradient(135deg,#0F5D9F_0%,#1D72D8_100%)]",
            gradientClassName
          )}
        />
      )}

      {overlayClassName ? <div className={cn("absolute inset-0", overlayClassName)} /> : null}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.34)_42%,rgba(0,0,0,0)_100%)]" />

      <span className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/25 text-white backdrop-blur-[2px] sm:left-5 sm:top-5 sm:h-10 sm:w-10 xl:left-6 xl:top-6 xl:h-12 xl:w-12">
        {icon}
      </span>

      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 sm:px-5 sm:pb-5 xl:px-8 xl:pb-8">
        <h3 className="line-clamp-2 text-[20px] font-bold leading-[1.15] text-white sm:text-[22px] xl:text-2xl xl:leading-8">
          {title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-[#E5E7EB] sm:text-xs xl:text-sm xl:leading-5">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

function supportIcon(icon?: SupportServiceRecord["cardIcon"], size = 18) {
  if (icon === "scale") return <IconFolderFilled size={size} />;
  if (icon === "phone") return <IconPhone size={size} />;
  if (icon === "community") return <IconCompassFilled size={size} />;
  if (icon === "counselling") return <IconMicrophone size={size} />;
  if (icon === "home") return <IconHomeFilled size={size} />;
  if (icon === "bell") return <IconBellFilled size={size} />;
  if (icon === "sparkles") return <IconSparkles size={size} />;

  return <IconShieldFilled size={size} />;
}

function overlayClassForTone(tone?: SupportServiceRecord["cardOverlayTone"]) {
  if (tone === "blue") return "bg-[#0F5D9F]/30 mix-blend-multiply";
  if (tone === "red") return "bg-[#7F1D1D]/35 mix-blend-multiply";
  if (tone === "brown") return "bg-[#7C2D12]/25 mix-blend-overlay";
  if (tone === "purple") return "bg-[#4F46E5]/25 mix-blend-multiply";
  if (tone === "dark") return "bg-black/15";

  return undefined;
}

function getSupportCardVisual(service: SupportServiceRecord, index: number): SupportCardVisual {
  const searchable = `${service.name} ${service.type ?? ""} ${service.description ?? ""}`.toLowerCase();
  const adminVisual: Partial<SupportCardVisual> = {
    imageUrl: service.cardImageUrl,
    imageAlt: service.cardImageAlt || service.name,
    overlayClassName: overlayClassForTone(service.cardOverlayTone),
    icon: supportIcon(service.cardIcon),
  };

  if (service.cardImageUrl) {
    return {
      ...adminVisual,
      icon: adminVisual.icon ?? supportIcon(service.cardIcon),
    } as SupportCardVisual;
  }

  if (searchable.includes("legal") || searchable.includes("rights")) {
    return { ...adminVisual, imageSrc: hackerImage, icon: supportIcon(service.cardIcon ?? "scale") };
  }

  if (searchable.includes("community") || searchable.includes("advocate")) {
    return { ...adminVisual, imageSrc: abuseImage, icon: supportIcon(service.cardIcon ?? "community") };
  }

  if (searchable.includes("counsel") || searchable.includes("mental")) {
    return { ...adminVisual, imageSrc: domesticViolanceImage, icon: supportIcon(service.cardIcon ?? "counselling") };
  }

  if (searchable.includes("health") || searchable.includes("clinic") || searchable.includes("medical")) {
    return { ...adminVisual, imageSrc: topRight, icon: supportIcon(service.cardIcon ?? "shield") };
  }

  if (searchable.includes("crisis") || searchable.includes("urgent") || searchable.includes("lifeline")) {
    return {
      ...adminVisual,
      imageSrc: bottomLeft,
      icon: supportIcon(service.cardIcon ?? "bell"),
      overlayClassName: adminVisual.overlayClassName ?? "bg-[#7F1D1D]/35 mix-blend-multiply",
    };
  }

  if (searchable.includes("elder") || searchable.includes("senior")) {
    return {
      ...adminVisual,
      imageSrc: migrateImage,
      icon: supportIcon(service.cardIcon ?? "home"),
      overlayClassName: adminVisual.overlayClassName ?? "bg-[#7C2D12]/25 mix-blend-overlay",
    };
  }

  if (searchable.includes("online") || searchable.includes("cyber") || searchable.includes("safety")) {
    return {
      ...adminVisual,
      icon: supportIcon(service.cardIcon ?? "shield"),
      gradientClassName: "bg-[linear-gradient(135deg,#4F46E5_0%,#7E22CE_100%)]",
    };
  }

  const fallbackVisuals: SupportCardVisual[] = [
    { imageSrc: hackerImage, icon: <IconShieldFilled size={18} /> },
    { imageSrc: abuseImage, icon: <IconCompassFilled size={18} /> },
    { imageSrc: domesticViolanceImage, icon: <IconMicrophone size={18} /> },
    { gradientClassName: "bg-[linear-gradient(135deg,#0F5D9F_0%,#1D72D8_100%)]", icon: <IconSparkles size={18} /> },
  ];

  return {
    ...fallbackVisuals[index % fallbackVisuals.length],
    ...adminVisual,
    icon: adminVisual.icon ?? fallbackVisuals[index % fallbackVisuals.length].icon,
  };
}

function getExplorerContextCopy(
  category?: AssistantIncidentCategory,
  focus?: string
): { title: string; body: string } | null {
  if (!category) {
    return null;
  }

  if (category === "domestic_violence") {
    return {
      title: focus === "safety_plan" ? "Domestic violence safety planning" : "Domestic violence support",
      body:
        focus === "safety_plan"
          ? "Use these support services to think through safe contact, trusted people, and immediate next steps."
          : "These services can help you find domestic violence support while keeping control over what you share.",
    };
  }

  if (category === "racial_abuse") {
    return {
      title: "Racial abuse support",
      body:
        "These services can help with safe reporting, community support, and options for documenting what happened.",
    };
  }

  if (category === "migrant_challenges") {
    return {
      title:
        focus === "interpreter_guidance" ? "Interpreter and migrant support" : "Migrant support services",
      body:
        focus === "interpreter_guidance"
          ? "These services may help you ask for interpreter access and find culturally appropriate support."
          : "These services may help with migrant-related safety, community, housing, or workplace support.",
    };
  }

  if (category === "cyber_scam") {
    return {
      title: "Online safety support",
      body:
        "Use ScamShield first for analysis, then use these services for follow-up safety or support guidance if needed.",
    };
  }

  return null;
}

const advocateIssueOptions = [
  "general_support",
  "domestic_violence",
  "racial_abuse",
  "migrant_challenges",
  "cyber_scam",
];

const advocateLanguageOptions = ["en", "ar", "es"];
const advocateRegionOptions = ["AU", "national", "NSW", "VIC", "QLD"];

type AdvocateRequestInput = {
  advocateType: string;
  language: string;
  issueType?: string;
  region?: string;
  safeContactPreference: SafeContactPreference;
  notes?: string;
  confirmationCopy: string;
};

function formatSupportLabel(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getAdvocateDisplayName(advocate: AdvocateRecord): string {
  return (
    advocate.displayName ??
    formatSupportLabel(advocate.advocateType || advocate.id)
  );
}

function AdvocateMatchingSection({
  initialIssueType,
  initialRegion,
}: {
  initialIssueType?: string;
  initialRegion?: string;
}) {
  const [advocates, setAdvocates] = useState<AdvocateRecord[]>([]);
  const [languageFilter, setLanguageFilter] = useState("en");
  const [issueTypeFilter, setIssueTypeFilter] = useState(initialIssueType ?? "");
  const [regionFilter, setRegionFilter] = useState(initialRegion ?? "");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [selectedAdvocateType, setSelectedAdvocateType] = useState("");
  const [safeContactPreference, setSafeContactPreference] =
    useState<SafeContactPreference>("in_app");
  const [notes, setNotes] = useState("");
  const [confirmationAccepted, setConfirmationAccepted] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  const [pendingRequest, setPendingRequest] =
    useState<AdvocateRequestInput | null>(null);
  const {
    pendingConsentRequirement,
    isGrantingConsent,
    captureConsentError,
    clearPendingConsent,
    grantPendingConsent,
  } = useConsentGate();

  useEffect(() => {
    let isActive = true;

    void listAdvocates()
      .then((nextAdvocates) => {
        if (!isActive) {
          return;
        }

        setAdvocates(nextAdvocates);
        setSelectedAdvocateType((currentType) =>
          currentType || nextAdvocates[0]?.advocateType || ""
        );
        setLoadError(null);
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error
            ? error.message
            : "Advocates could not be loaded."
        );
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (initialRegion) {
      setRegionFilter(initialRegion);
    }
  }, [initialRegion]);

  const availabilityOptions = useMemo(
    () =>
      Array.from(
        new Set(
          advocates
            .map((advocate) => advocate.availability)
            .filter((value): value is string => Boolean(value))
        )
      ),
    [advocates]
  );

  const filteredAdvocates = useMemo(
    () =>
      advocates.filter((advocate) => {
        const matchesLanguage =
          !languageFilter || advocate.languages.includes(languageFilter);
        const matchesIssue =
          !issueTypeFilter ||
          !advocate.issueTypes?.length ||
          advocate.issueTypes.includes(issueTypeFilter);
        const matchesRegion =
          !regionFilter ||
          !advocate.regions?.length ||
          advocate.regions.includes(regionFilter) ||
          advocate.regions.includes("AU") ||
          advocate.regions.includes("national");
        const matchesAvailability =
          !availabilityFilter || advocate.availability === availabilityFilter;

        return (
          matchesLanguage &&
          matchesIssue &&
          matchesRegion &&
          matchesAvailability
        );
      }),
    [advocates, availabilityFilter, issueTypeFilter, languageFilter, regionFilter]
  );

  useEffect(() => {
    if (
      filteredAdvocates.length &&
      !filteredAdvocates.some(
        (advocate) => advocate.advocateType === selectedAdvocateType
      )
    ) {
      setSelectedAdvocateType(filteredAdvocates[0].advocateType);
    }
  }, [filteredAdvocates, selectedAdvocateType]);

  const selectedAdvocate =
    filteredAdvocates.find(
      (advocate) => advocate.advocateType === selectedAdvocateType
    ) ??
    advocates.find((advocate) => advocate.advocateType === selectedAdvocateType);

  const buildAdvocateRequest = (): AdvocateRequestInput | null => {
    const advocateType =
      selectedAdvocate?.advocateType || selectedAdvocateType.trim();

    if (!advocateType) {
      return null;
    }

    const confirmationCopy =
      "I understand SafeSpeak will create an advocate request only after my consent. SafeSpeak will not call, email, or contact anyone automatically.";
    const requestNotes = [
      notes.trim(),
      `Safe contact preference: ${safeContactPreference.replace(/_/g, " ")}`,
      issueTypeFilter ? `Issue type: ${formatSupportLabel(issueTypeFilter)}` : "",
      regionFilter ? `Region: ${regionFilter}` : "",
      "No evidence files, full report payload, or hidden profile data included.",
    ]
      .filter(Boolean)
      .join("\n");

    return {
      advocateType,
      language: languageFilter || "en",
      issueType: issueTypeFilter || undefined,
      region: regionFilter || undefined,
      safeContactPreference,
      notes: requestNotes,
      confirmationCopy,
    };
  };

  const submitAdvocateRequest = async (input: AdvocateRequestInput) => {
    setIsSubmitting(true);
    setLoadError(null);
    setRequestStatus(null);

    try {
      const request = await requestAdvocate(input);

      setIsPreviewOpen(false);
      setPendingRequest(null);
      setRequestStatus(
        `Advocate request created. Status: ${request.status ?? "pending"}.`
      );
    } catch (error) {
      if (captureConsentError(error)) {
        setPendingRequest(input);
        return;
      }

      setLoadError(
        error instanceof Error
          ? error.message
          : "Advocate request could not be created."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestAdvocate = () => {
    const input = buildAdvocateRequest();

    if (!input) {
      setLoadError("Choose an advocate option before requesting support.");
      return;
    }

    if (!confirmationAccepted) {
      setLoadError("Confirm the request copy before continuing.");
      return;
    }

    setLoadError(null);

    if (!isPreviewOpen) {
      setPendingRequest(input);
      setIsPreviewOpen(true);
      return;
    }

    void submitAdvocateRequest(input);
  };

  const handleAllowConsent = async () => {
    try {
      await grantPendingConsent();

      if (pendingRequest) {
        void submitAdvocateRequest(pendingRequest);
      }
    } catch (error) {
      setLoadError(
        error instanceof Error ? error.message : "Consent could not be saved."
      );
    }
  };

  const previewRequest = pendingRequest ?? buildAdvocateRequest();

  return (
    <section className="mt-5 rounded-[22px] border border-[#dce5f1] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
            Advocate matching
          </p>
          <h2 className="mt-1 text-xl font-bold text-[#1f2a3a]">
            Request help from an authorized support person
          </h2>
          <p className="mt-1 max-w-[740px] text-xs leading-[1.65] text-[#60728a]">
            Filter available advocate options, preview exactly what will be
            shared, then choose whether to create a request. SafeSpeak does not
            contact anyone automatically.
          </p>
        </div>
        <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
          {filteredAdvocates.length} match
          {filteredAdvocates.length === 1 ? "" : "es"}
        </span>
      </div>

      {pendingConsentRequirement ? (
        <div className="mt-4">
          <ConsentRequiredCard
            requirement={pendingConsentRequirement}
            isSubmitting={isGrantingConsent || isSubmitting}
            onAllow={() => {
              void handleAllowConsent();
            }}
            onDecline={() => {
              clearPendingConsent();
              setRequestStatus(
                "Consent declined. Service discovery remains available and no advocate request was created."
              );
            }}
          />
        </div>
      ) : null}

      {loadError ? (
        <div className="mt-4 rounded-[14px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[11px] text-[#b45353]">
          <span className="inline-flex items-center gap-1.5">
            <IconAlertCircle size={12} />
            {loadError}
          </span>
        </div>
      ) : null}
      {requestStatus ? (
        <div className="mt-4 rounded-[14px] border border-[#d8e4f2] bg-[#f8fbff] px-3 py-2 text-[11px] font-semibold text-[#0f5d9f]">
          {requestStatus}
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <label className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Language
          </span>
          <select
            value={languageFilter}
            onChange={(event) => setLanguageFilter(event.target.value)}
            className="h-10 rounded-[10px] border border-[#d7e1ee] bg-white px-3 text-[12px] text-[#1f2a3a] outline-none"
          >
            {advocateLanguageOptions.map((language) => (
              <option key={language} value={language}>
                {language.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Issue type
          </span>
          <select
            value={issueTypeFilter}
            onChange={(event) => setIssueTypeFilter(event.target.value)}
            className="h-10 rounded-[10px] border border-[#d7e1ee] bg-white px-3 text-[12px] text-[#1f2a3a] outline-none"
          >
            <option value="">Any issue</option>
            {advocateIssueOptions.map((issueType) => (
              <option key={issueType} value={issueType}>
                {formatSupportLabel(issueType)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Region
          </span>
          <select
            value={regionFilter}
            onChange={(event) => setRegionFilter(event.target.value)}
            className="h-10 rounded-[10px] border border-[#d7e1ee] bg-white px-3 text-[12px] text-[#1f2a3a] outline-none"
          >
            <option value="">Any region</option>
            {advocateRegionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Availability
          </span>
          <select
            value={availabilityFilter}
            onChange={(event) => setAvailabilityFilter(event.target.value)}
            className="h-10 rounded-[10px] border border-[#d7e1ee] bg-white px-3 text-[12px] text-[#1f2a3a] outline-none"
          >
            <option value="">Any availability</option>
            {availabilityOptions.map((availability) => (
              <option key={availability} value={availability}>
                {formatSupportLabel(availability)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {isLoading ? (
        <div className="mt-4 inline-flex items-center gap-2 text-[11px] text-[#60728a]">
          <IconLoader2 size={14} className="animate-spin" />
          Loading advocate options...
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-2">
          {filteredAdvocates.map((advocate) => {
            const isSelected = advocate.advocateType === selectedAdvocateType;

            return (
              <button
                key={advocate.id}
                type="button"
                onClick={() => setSelectedAdvocateType(advocate.advocateType)}
                className={`w-full rounded-[16px] border px-4 py-3 text-left transition ${
                  isSelected
                    ? "border-[#0f5d9f] bg-[#f7fbff]"
                    : "border-[#e3ebf5] bg-[#fbfdff]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-[#1f2a3a]">
                      {getAdvocateDisplayName(advocate)}
                    </p>
                    <p className="mt-1 text-[10px] text-[#60728a]">
                      Languages: {advocate.languages.join(", ")} |{" "}
                      {formatSupportLabel(advocate.availability ?? "request_based")}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#e6f7ef] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#0f766e]">
                    Information only
                  </span>
                </div>
                {advocate.issueTypes?.length ? (
                  <p className="mt-2 text-[10px] leading-[1.55] text-[#60728a]">
                    Matches: {advocate.issueTypes.map(formatSupportLabel).join(", ")}
                  </p>
                ) : null}
              </button>
            );
          })}
          {!isLoading && filteredAdvocates.length === 0 ? (
            <div className="rounded-[16px] border border-dashed border-[#d8e2ee] bg-[#fbfdff] p-4 text-[11px] text-[#60728a]">
              No advocate options match those filters. Service discovery remains
              available above.
            </div>
          ) : null}
        </div>

        <div className="rounded-[16px] border border-[#e3ebf5] bg-[#f8fbff] p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
            Advocate request form
          </p>
          <div className="mt-3 grid gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-[#7f90a6]">
                Safe contact preference
              </span>
              <select
                value={safeContactPreference}
                onChange={(event) =>
                  setSafeContactPreference(event.target.value as SafeContactPreference)
                }
                className="h-10 rounded-[10px] border border-[#d7e1ee] bg-white px-3 text-[12px] text-[#1f2a3a] outline-none"
              >
                <option value="in_app">In-app follow-up</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="no_direct_contact">No direct contact yet</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-[#7f90a6]">
                Notes for the advocate
              </span>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={4}
                placeholder="Share only what feels safe and necessary."
                className="resize-none rounded-[10px] border border-[#d7e1ee] bg-white px-3 py-2 text-[12px] leading-[1.55] text-[#1f2a3a] outline-none"
              />
            </label>
            <label className="flex items-start gap-2 text-[11px] leading-[1.55] text-[#60728a]">
              <input
                type="checkbox"
                checked={confirmationAccepted}
                onChange={(event) =>
                  setConfirmationAccepted(event.target.checked)
                }
                className="mt-0.5 h-4 w-4 rounded border-[#cbd8e8]"
              />
              <span>
                I understand SafeSpeak will create an advocate request only
                after my consent and will not call, email, or contact anyone
                automatically.
              </span>
            </label>
          </div>

          {isPreviewOpen && previewRequest ? (
            <div className="mt-4 rounded-[14px] border border-[#d8e4f2] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                Shared fields preview
              </p>
              <div className="mt-2 space-y-1 text-[11px] leading-[1.55] text-[#60728a]">
                <p>
                  <span className="font-bold text-[#1f2a3a]">Advocate type:</span>{" "}
                  {formatSupportLabel(previewRequest.advocateType)}
                </p>
                <p>
                  <span className="font-bold text-[#1f2a3a]">Language:</span>{" "}
                  {previewRequest.language.toUpperCase()}
                </p>
                <p>
                  <span className="font-bold text-[#1f2a3a]">Safe contact:</span>{" "}
                  {formatSupportLabel(previewRequest.safeContactPreference)}
                </p>
                {previewRequest.issueType ? (
                  <p>
                    <span className="font-bold text-[#1f2a3a]">Issue type:</span>{" "}
                    {formatSupportLabel(previewRequest.issueType)}
                  </p>
                ) : null}
                {previewRequest.region ? (
                  <p>
                    <span className="font-bold text-[#1f2a3a]">Region:</span>{" "}
                    {previewRequest.region}
                  </p>
                ) : null}
                {previewRequest.notes ? (
                  <p>
                    <span className="font-bold text-[#1f2a3a]">Notes:</span>{" "}
                    {previewRequest.notes}
                  </p>
                ) : null}
                <p className="font-semibold text-[#9a5b12]">
                  No evidence files, full report payload, or hidden profile data
                  will be shared.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="mt-3 text-[11px] font-bold text-[#60728a]"
              >
                Edit before creating request
              </button>
            </div>
          ) : null}

          <button
            type="button"
            onClick={handleRequestAdvocate}
            disabled={isSubmitting || !selectedAdvocateType}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <IconLoader2 size={14} className="mr-1 animate-spin" />
            ) : null}
            {isPreviewOpen ? "Create advocate request" : "Preview request"}
          </button>
        </div>
      </div>
    </section>
  );
}

export function ExplorerPage({
  category,
  focus,
}: {
  category?: AssistantIncidentCategory;
  focus?: string;
}) {
  const { t } = useTranslation();
  const contextCopy = getExplorerContextCopy(category, focus);
  const [services, setServices] = useState<SupportServiceRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const recommendationNeeds = useMemo(() => {
    switch (category) {
      case "domestic_violence":
        return focus === "safety_plan"
          ? ["crisis"]
          : ["counselling", "legal_information"];
      case "racial_abuse":
        return ["legal_information", "community"];
      case "migrant_challenges":
        return ["community", "counselling"];
      case "cyber_scam":
        return ["legal_information"];
      default:
        return [];
    }
  }, [category, focus]);
  const recommendationProfile = useMemo(() => {
    if (focus === "safety_plan") {
      return "safety_plan";
    }

    switch (category) {
      case "domestic_violence":
        return "domestic_violence";
      case "racial_abuse":
        return "racial_abuse";
      case "migrant_challenges":
        return "migrant_support";
      case "cyber_scam":
        return "online_safety";
      default:
        return "";
    }
  }, [category, focus]);

  useEffect(() => {
    let isActive = true;
    setIsLoading(true);

    void (async () => {
      try {
        const nextServices =
          category || focus
            ? await getSupportRecommendations({
                needs: recommendationNeeds,
                jurisdiction: "AU",
                language: "en",
                region: selectedRegion || undefined,
                profile: recommendationProfile || undefined,
              })
            : await listSupportServices({
                jurisdiction: "AU",
                language: "en",
                region: selectedRegion || undefined,
                type: selectedType || undefined,
              });

        if (!isActive) {
          return;
        }

        setServices(nextServices);
        setLoadError(null);
      } catch (error) {
        if (!isActive) {
          return;
        }

        setLoadError(
          error instanceof Error
            ? error.message
            : "Support services could not be loaded."
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [category, focus, recommendationNeeds, recommendationProfile, selectedRegion, selectedType]);

  const visibleServices = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return services;
    }

    return services.filter(service =>
      [
        service.name,
        service.description,
        service.type,
        service.jurisdiction,
        ...(service.regions ?? []),
        ...(service.eligibility ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch),
    );
  }, [searchTerm, services]);
  const dynamicServices = visibleServices.slice(0, 6);
  const shouldShowFallbackResources = !isLoading && dynamicServices.length === 0;

  return (
    <div className="px-2 pb-5 pt-2 sm:px-4 sm:pb-8 sm:pt-4">
      <div className="mx-auto w-full xl:max-w-[1120px] 2xl:max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]">
            <IconChevronLeft size={14} />
            {t("dashboard.explorer.safeConnections")}
          </div>
          <button className="text-xs font-medium text-[#7b8798]">
            {t("common.cancel")}
          </button>
        </div>

        <div className="mx-auto mt-6 max-w-[560px] text-center">
          <h1 className="text-[44px] font-extrabold leading-[0.92] text-[#1f2a3a]">
            {t("dashboard.explorer.title")}
          </h1>
          <p className="mt-2 text-xs text-[#7e8fa5]">
            {t("dashboard.explorer.subtitle")}
          </p>

          <div className="relative mx-auto mt-4 max-w-[420px]">
            <IconSearch
              size={13}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#98a6b9]"
            />
            <input
              type="text"
              placeholder={t("dashboard.explorer.searchPlaceholder")}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="h-9 w-full rounded-full border border-[#dbe4f0] bg-white px-9 text-[11px] text-[#1f2937] outline-none placeholder:text-[#a2afc2] focus:border-[#3b82f6]"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold text-[#2f6fca]">
            <label className="relative">
              <select
                className="h-8 appearance-none rounded-full border border-[#dbe4f0] bg-white px-3 pr-7 outline-none"
                value={selectedRegion}
                onChange={(event) => setSelectedRegion(event.target.value)}
              >
                <option value="">{t("dashboard.explorer.filterRegion")}</option>
                <option value="national">National</option>
                <option value="NSW">NSW</option>
                <option value="VIC">VIC</option>
                <option value="QLD">QLD</option>
              </select>
              <IconChevronDown
                size={11}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              />
            </label>
            <label className="relative">
              <select
                className="h-8 appearance-none rounded-full border border-[#dbe4f0] bg-white px-3 pr-7 outline-none"
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                disabled={Boolean(category || focus)}
              >
                <option value="">{t("dashboard.explorer.filterServiceType")}</option>
                <option value="crisis">Crisis</option>
                <option value="counselling">Counselling</option>
                <option value="legal_information">Legal information</option>
                <option value="community">Community</option>
                <option value="housing">Housing</option>
                <option value="financial">Financial</option>
              </select>
              <IconChevronDown
                size={11}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              />
            </label>
          </div>
        </div>

        {contextCopy ? (
          <article className="mx-auto mt-5 max-w-[760px] rounded-[18px] border border-[#dce6f2] bg-white px-5 py-4 text-left shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#3f7de0]">
              {contextCopy.title}
            </p>
            <p className="mt-2 text-[12px] leading-[1.6] text-[#60728a]">
              {contextCopy.body}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link
                href="/dashboard?view=smartdialler"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white"
              >
                Open Smart Dialler
              </Link>
              <Link
                href="/dashboard?view=reportsubmissiondetails"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#d7e1ee] px-4 text-[11px] font-semibold text-[#334155]"
              >
                Start safe report
              </Link>
            </div>
          </article>
        ) : null}

        {loadError ? (
          <div className="mx-auto mt-4 max-w-[760px] rounded-[16px] border border-[#fde2e2] bg-[#fff5f5] px-4 py-3 text-[11px] text-[#b45353]">
            <span className="inline-flex items-center gap-1.5">
              <IconAlertCircle size={12} />
              {loadError}
            </span>
          </div>
        ) : null}

        {isLoading ? (
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-[16px] border border-[#dce6f2] bg-white px-4 py-3 text-[11px] text-[#60728a]">
            <IconLoader2 size={14} className="animate-spin" />
            Loading support services...
          </div>
        ) : null}

        {dynamicServices.length > 0 ? (
          <div className="mx-auto mt-6 grid w-full max-w-[1152px] grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
            {dynamicServices.map((service, index) => {
              const visual = getSupportCardVisual(service, index);

              return (
                <ExplorerSupportCard
                  key={service._id ?? service.id ?? `${service.name}-${index}`}
                  className="md:min-h-[280px] xl:min-h-[320px]"
                  title={service.name}
                  subtitle={
                    service.description ||
                    service.type ||
                    service.jurisdiction ||
                    "Support service"
                  }
                  icon={visual.icon}
                  imageSrc={visual.imageSrc}
                  imageUrl={visual.imageUrl}
                  imageAlt={visual.imageAlt}
                  gradientClassName={visual.gradientClassName}
                  overlayClassName={visual.overlayClassName}
                  href={{
                    pathname: "/dashboard/explorer/service-details",
                    query: { service: service.id ?? service._id },
                  }}
                />
              );
            })}
          </div>
        ) : null}

        {focus === "safety_plan" ? (
          <div className="mt-5">
            <SafetyPlanManager />
          </div>
        ) : null}

        <AdvocateMatchingSection
          initialIssueType={category}
          initialRegion={selectedRegion || undefined}
        />

        <section className="mt-5 grid gap-3 lg:grid-cols-2">
          <article className="rounded-[18px] border border-[#dce6f2] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
              Support sections
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                "Emergency Support",
                "Legal Support",
                "Community Support",
                "Advocate Matching",
                "Safety Planning",
              ].map((section) => (
                <div
                  key={section}
                  className="rounded-[14px] border border-[#e3ebf5] bg-[#f8fbff] px-3 py-3 text-[11px] font-semibold text-[#334155]"
                >
                  {section}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[18px] border border-[#dce6f2] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
              Warm referral consent
            </p>
            <p className="mt-2 text-[12px] leading-[1.6] text-[#60728a]">
              Support recommendations can come from the backend. Any warm referral still requires explicit consent before details are shared externally.
            </p>
            <Link
              href="/dashboard/settings"
              className="mt-4 inline-flex h-10 items-center rounded-full border border-[#d7e1ee] px-4 text-[11px] font-semibold text-[#334155]"
            >
              Review consent settings
            </Link>
          </article>
        </section>

        {shouldShowFallbackResources ? (
          <div className="mx-auto mt-5 max-w-[760px] rounded-[16px] border border-[#dce6f2] bg-white px-4 py-3 text-[11px] text-[#60728a]">
            <span className="font-bold text-[#1f2a3a]">
              {loadError ? "Local fallback resources" : "Example resources"}
            </span>{" "}
            are shown because live support services are unavailable or empty.
          </div>
        ) : null}

        {shouldShowFallbackResources ? (
        <div className="mx-auto mt-6 grid w-full max-w-[1152px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          <ExplorerSupportCard
            className="md:col-span-2 md:min-h-[320px] xl:col-span-2"
            title={t("dashboard.explorer.legalAid")}
            subtitle={t("dashboard.explorer.legalAidSubtitle")}
            icon={<IconFolderFilled size={18} />}
            imageSrc={hackerImage}
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "legal-aid" },
            }}
          />
          <ExplorerSupportCard
            title={t("dashboard.explorer.communitySupport")}
            subtitle={t("dashboard.explorer.communitySupportSubtitle")}
            icon={<IconCompassFilled size={18} />}
            imageSrc={abuseImage}
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "community-support" },
            }}
          />
          <ExplorerSupportCard
            className="xl:min-h-[416px]"
            title={t("dashboard.explorer.counselling")}
            subtitle={t("dashboard.explorer.counsellingSubtitle")}
            icon={<IconMicrophone size={18} />}
            imageSrc={domesticViolanceImage}
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "counselling" },
            }}
          />
          <ExplorerSupportCard
            className="xl:min-h-[416px]"
            title={t("dashboard.explorer.healthServices")}
            subtitle={t("dashboard.explorer.healthServicesSubtitle")}
            icon={<IconShieldFilled size={18} />}
            imageSrc={topRight}
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "health-services" },
            }}
          />
          <ExplorerSupportCard
            className="xl:min-h-[416px]"
            title={t("dashboard.explorer.elderSupport")}
            subtitle={t("dashboard.explorer.elderSupportSubtitle")}
            icon={<IconHomeFilled size={18} />}
            imageSrc={migrateImage}
            overlayClassName="bg-[#7C2D12]/25 mix-blend-overlay"
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "elder-support" },
            }}
          />
          <ExplorerSupportCard
            className="md:min-h-[320px]"
            title={t("dashboard.explorer.crisisSupport")}
            subtitle={t("dashboard.explorer.crisisSupportSubtitle")}
            icon={<IconBellFilled size={18} />}
            imageSrc={bottomLeft}
            overlayClassName="bg-[#7F1D1D]/35 mix-blend-multiply"
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "crisis-support" },
            }}
          />
          <ExplorerSupportCard
            className="md:col-span-2 md:min-h-[320px] xl:col-span-2"
            title={t("dashboard.explorer.onlineSafety")}
            subtitle={t("dashboard.explorer.onlineSafetySubtitle")}
            icon={<IconShieldFilled size={18} />}
            gradientClassName="bg-[linear-gradient(135deg,#4F46E5_0%,#7E22CE_100%)]"
            href={{
              pathname: "/dashboard/explorer/service-details",
              query: { service: "online-safety" },
            }}
          />
        </div>
        ) : null}
      </div>
    </div>
  );
}
