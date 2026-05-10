"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  IconAlertTriangle,
  IconArrowRight,
  IconBuildingBank,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconExternalLink,
  IconFolderFilled,
  IconGavel,
  IconPhoto,
  IconPlus,
  IconShieldFilled,
  IconX,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import type { DashboardCardFlowId } from "@/lib/dashboard-card-flows";
import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import {
  ConsentRequiredError,
  grantConsent,
  type ConsentRequirement,
} from "@/lib/consent";

import {
  getMediaAssetImageUrl,
  listPublishedMediaAssets,
  type MediaAssetItem,
} from "@/lib/media-assets";
import {
  analyzeScamEmail,
  analyzeScamScreenshot,
  analyzeScamText,
  checkScamUrl,
  generateScamReportDraft,
  submitScamReport,
} from "@/lib/scamshield-client";
import {
  getScamShieldFlowState,
  mergeScamShieldFlowState,
} from "@/lib/scamshield-flow";

import { interFont } from "./dashboard-shared";

function ScamShieldIntakePage({
  initialTopic,
}: {
  initialTopic?: DashboardCardFlowId;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const existingState = getScamShieldFlowState();
  const [messageContent, setMessageContent] = useState(existingState?.inputText ?? "");
  const [inputMode, setInputMode] = useState<
    "text" | "url" | "email" | "screenshot"
  >(existingState?.inputMode ?? "text");
  const [intakeError, setIntakeError] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<File | null>(null);
  const [screenshotPreviewUrl, setScreenshotPreviewUrl] = useState<string | null>(null);
  const [pendingConsentRequirement, setPendingConsentRequirement] =
    useState<ConsentRequirement | null>(null);
  const [isGrantingConsent, setIsGrantingConsent] = useState(false);

  const runAnalysis = async () => {
    const trimmedInput = messageContent.trim();

    if (inputMode === "screenshot" && !selectedScreenshot && !trimmedInput) {
      setIntakeError("Select a screenshot or paste the visible message text before analysis.");
      return;
    }

    if (inputMode !== "screenshot" && !trimmedInput) {
      setIntakeError("Add suspicious text, a URL, or an email body before analysis.");
      return;
    }

    setIsAnalyzing(true);
    setIntakeError(null);

    try {
      const analysis =
        inputMode === "url"
          ? await checkScamUrl({ url: trimmedInput })
          : inputMode === "email"
            ? await analyzeScamEmail({ body: trimmedInput })
            : inputMode === "screenshot"
              ? await analyzeScamScreenshot({
                  imageText: trimmedInput || undefined,
                  imageFile: selectedScreenshot ?? undefined,
                })
              : await analyzeScamText({ text: trimmedInput, language: "en" });

      mergeScamShieldFlowState({
        inputText: trimmedInput,
        inputMode,
        analysis,
      });
      router.push("/dashboard?view=scamshieldrisk");
    } catch (error) {
      if (error instanceof ConsentRequiredError) {
        setPendingConsentRequirement(error.requirement);
        return;
      }

      setIntakeError(
        error instanceof Error ? error.message : "Scam analysis could not be completed."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  useEffect(() => {
    if (!selectedScreenshot) {
      setScreenshotPreviewUrl(null);
      return;
    }

    const nextPreviewUrl = URL.createObjectURL(selectedScreenshot);
    setScreenshotPreviewUrl(nextPreviewUrl);

    return () => {
      URL.revokeObjectURL(nextPreviewUrl);
    };
  }, [selectedScreenshot]);

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=reportsubmissiondetails"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.scamShield.analyzeMessage")}
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <article className="mt-3 overflow-hidden rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          {initialTopic === "cyber_scam" || initialTopic === "scamshield" ? (
            <div className="border-b border-[#e2eaf5] bg-white px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#3f7de0]">
                Cyber scam context
              </p>
              <p className="mt-1 text-[11px] leading-[1.55] text-[#60728a]">
                Paste suspicious text, upload a screenshot, or continue to the next step to review scam risk indicators.
              </p>
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-3 p-3 sm:p-4 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-[14px] border border-[#e2eaf4] bg-white p-3 sm:p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {[
                  ["text", "Paste text"],
                  ["url", "Check URL"],
                  ["email", "Analyze email"],
                  ["screenshot", "Screenshot upload"],
                ].map(([mode, label]) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() =>
                      setInputMode(mode as "text" | "url" | "email" | "screenshot")
                    }
                    className={`inline-flex h-8 items-center rounded-full px-3 text-[10px] font-bold ${
                      inputMode === mode
                        ? "bg-[#0f5d9f] text-white"
                        : "bg-[#f4f7fb] text-[#60728a]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <label
                htmlFor="scam-message-content"
                className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6f88a8]"
              >
                {inputMode === "screenshot"
                  ? "Visible text or OCR correction"
                  : t("dashboard.scamShield.messageContent")}
              </label>
              <div className="relative mt-2">
                <textarea
                  id="scam-message-content"
                  rows={15}
                  value={messageContent}
                  onChange={(event) => setMessageContent(event.target.value)}
                  placeholder={
                    inputMode === "url"
                      ? "https://example.com/suspicious-link"
                      : inputMode === "email"
                        ? "Paste the email body and any sender details you want checked."
                        : inputMode === "screenshot"
                          ? "Optional: paste any visible text if the screenshot is blurry or OCR is unavailable."
                          : t("dashboard.scamShield.messageContentPlaceholder")
                  }
                  className="min-h-[340px] w-full resize-none rounded-[11px] border border-[#dbe4ef] bg-[#f8fbff] px-3 py-3 text-xs leading-[1.6] text-[#1f2a3a] outline-none placeholder:text-[#9aabc0]"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[#9db0c8]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] border border-[#d8e2ee] bg-white">
                    <IconFolderFilled size={10} />
                  </span>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] border border-[#d8e2ee] bg-white">
                    <IconClock size={10} />
                  </span>
                </div>
              </div>
            </article>

            <aside className="space-y-3">
              {intakeError ? (
                <div className="rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-3 text-[11px] text-[#b45353]">
                  {intakeError}
                </div>
              ) : null}
              <article className="rounded-[14px] border border-[#e2eaf4] bg-white p-4 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ecf4ff] text-[#0f5d9f]">
                  <IconPhoto size={20} />
                </span>
                <h3 className="mt-3 text-xl font-bold leading-[1.1] text-[#1f2a3a]">
                  {t("dashboard.scamShield.uploadScreenshotTitle")}
                </h3>
                <p className="mx-auto mt-1 max-w-[250px] text-xs leading-[1.5] text-[#7f90a6]">
                  {t("dashboard.scamShield.uploadScreenshotDescription")}
                </p>
                <label className="mt-3 inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white">
                  <IconFolderFilled size={12} />
                  {t("dashboard.scamShield.selectFiles")}
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null;
                      setSelectedScreenshot(file);
                      setInputMode("screenshot");
                    }}
                  />
                </label>
                {selectedScreenshot ? (
                  <div className="mt-3 rounded-[10px] border border-[#dce5f1] bg-[#f8fbff] px-3 py-2 text-left">
                    <p className="truncate text-[11px] font-bold text-[#1f2a3a]">
                      {selectedScreenshot.name}
                    </p>
                    <p className="mt-0.5 text-[9px] text-[#7f90a6]">
                      OCR and analysis run only after you allow AI processing.
                    </p>
                    {screenshotPreviewUrl ? (
                      <img
                        src={screenshotPreviewUrl}
                        alt="Selected screenshot preview"
                        className="mt-2 max-h-40 w-full rounded-[8px] border border-[#dce5f1] object-contain"
                      />
                    ) : null}
                  </div>
                ) : null}
              </article>

              <article className="rounded-[14px] border border-[#e2eaf4] bg-white p-3 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7f90a6]">
                  {t("dashboard.scamShield.attachedEvidence")}
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {selectedScreenshot ? (
                  <article className="relative rounded-[10px] border border-[#e2eaf4] bg-[#f2f5f9] p-2">
                    <button
                      type="button"
                      onClick={() => setSelectedScreenshot(null)}
                      className="absolute -right-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f05151] text-white"
                    >
                      <IconX size={9} />
                    </button>
                    {screenshotPreviewUrl ? (
                      <img
                        src={screenshotPreviewUrl}
                        alt=""
                        className="mx-auto h-[76px] w-full rounded-[7px] object-cover"
                      />
                    ) : null}
                  </article>
                  ) : null}

                  <article className="grid min-h-[100px] place-items-center rounded-[10px] border border-dashed border-[#c4d2e6] bg-[#f8fbff] text-center">
                    <div>
                      <span className="mx-auto inline-flex h-5 w-5 items-center justify-center text-[#8ea2bf]">
                        <IconPlus size={14} />
                      </span>
                      <p className="mt-1 text-[9px] font-semibold text-[#8ea2bf]">
                        {t("dashboard.scamShield.addMore")}
                      </p>
                    </div>
                  </article>
                </div>
              </article>
            </aside>
          </div>

          {pendingConsentRequirement ? (
            <div className="px-3 pb-3 sm:px-4">
              <ConsentRequiredCard
                requirement={pendingConsentRequirement}
                isSubmitting={isGrantingConsent}
                onAllow={() => {
                  void (async () => {
                    setIsGrantingConsent(true);

                    try {
                      await grantConsent(
                        { process_with_ai: true },
                        pendingConsentRequirement.source
                      );
                      setPendingConsentRequirement(null);
                      await runAnalysis();
                    } catch (error) {
                      setIntakeError(
                        error instanceof Error
                          ? error.message
                          : "Consent could not be saved."
                      );
                    } finally {
                      setIsGrantingConsent(false);
                    }
                  })();
                }}
                onDecline={() => {
                  setPendingConsentRequirement(null);
                }}
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-2 border-t border-[#e2eaf5] bg-white px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
            <p className="text-[10px] font-medium text-[#6c7f96]">
              {t("dashboard.scamShield.readyForAnalysis")}
            </p>
            <button
              type="button"
              onClick={() => {
                void runAnalysis();
              }}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#ff9900] px-7 text-[11px] font-bold uppercase tracking-[0.02em] text-white shadow-[0_8px_18px_rgba(255,153,0,0.33)]"
            >
              <IconShieldFilled size={12} />
              {isAnalyzing ? "Analyzing..." : t("dashboard.scamShield.analyzeNow")}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

function ScamShieldRiskPage() {
  const { t } = useTranslation();
  const analysis = getScamShieldFlowState()?.analysis;
  const isDemoFallback = !analysis;
  const riskScore = Math.round((analysis?.riskScore ?? 0) * 100) / 100;
  const riskLevel = analysis?.riskLevel ?? "high";
  const confidence = analysis?.confidence ?? (analysis ? "rule-based" : "demo");
  const redFlags = useMemo(
    () =>
      analysis?.redFlags?.length
        ? analysis.redFlags
        : analysis?.indicators?.length
          ? analysis.indicators
          : isDemoFallback
            ? ["Demo preview only"]
            : [],
    [analysis?.indicators, analysis?.redFlags, isDemoFallback]
  );
  const recommendations = useMemo(
    () =>
      analysis?.recommendations?.length
        ? analysis.recommendations
        : redFlags.map(() => "Pause, do not click links or send money, and verify through an official channel."),
    [analysis?.recommendations, redFlags]
  );
  const extractedTextLength =
    typeof analysis?.metadata?.extractedTextLength === "number"
      ? analysis.metadata.extractedTextLength
      : null;
  const extractedEntities = analysis?.extractedEntities ?? analysis?.metadata?.extractedEntities;

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=scamshieldintake"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.scamShield.scamRiskResults")}
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <article className="mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-4">
          {isDemoFallback ? (
            <div className="mb-3 rounded-[12px] border border-[#ffe0b2] bg-[#fff7ed] px-3 py-3 text-[11px] leading-[1.55] text-[#9a5b12]">
              Backend scam analysis was not available for this session. These values are a clearly marked demo preview only and are not a live SafeSpeak result.
            </div>
          ) : null}
          <article className="rounded-[14px] border border-[#e3eaf5] bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="text-[58px] font-black leading-none text-[#cf2f34]">
              {riskScore}%
            </p>
            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#ba9ea3]">
              {riskLevel} risk | {confidence} confidence
            </p>
            <p className="mt-2 text-[26px] font-extrabold leading-none text-[#cf2f34]">
              {analysis?.summary ??
                (analysis
                  ? "ScamShield analysis completed"
                  : t("dashboard.scamShield.highRiskDetected"))}
            </p>
            <p className="mx-auto mt-2 max-w-[540px] text-xs leading-[1.5] text-[#61748f]">
              {analysis?.summary ??
                (analysis
                  ? `Backend returned ${riskLevel} risk with ${redFlags.length} indicator${redFlags.length === 1 ? "" : "s"}.`
                  : t("dashboard.scamShield.highRiskDetectedBody"))}
            </p>
            {extractedTextLength ? (
              <p className="mt-2 text-[10px] font-semibold text-[#60728a]">
                OCR text extracted: {extractedTextLength} characters
              </p>
            ) : null}
          </article>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1f2a3a]">
              {t("dashboard.scamShield.detectedRedFlags")}
            </h3>
            <span className="inline-flex h-5 items-center rounded-full bg-[#ffe9e9] px-2 text-[9px] font-bold uppercase tracking-[0.07em] text-[#df4a4a]">
              {redFlags.length} found
            </span>
          </div>

          <div className="mt-2 space-y-2">
            {redFlags.map((flag, index) => (
            <article
              key={`${flag}-${index}`}
              className="flex items-start gap-3 rounded-xl border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fff6e5] text-[#f59e0b]">
                <IconAlertTriangle size={13} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#1f2a3a]">
                  {flag}
                </p>
                <p className="mt-1 text-[11px] leading-[1.45] text-[#64748b]">
                  {recommendations[index] ?? t("dashboard.scamShield.highRiskDetectedBody")}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold text-[#2c66b0]">
                  {t("dashboard.scamShield.howToStaySafe")}
                  <IconArrowRight size={10} />
                </span>
              </div>
            </article>
            ))}
          </div>

          {extractedEntities && typeof extractedEntities === "object" ? (
            <article className="mt-4 rounded-xl border border-[#dfe8f4] bg-white p-3 sm:p-4">
              <p className="text-sm font-bold text-[#1f2a3a]">
                Extracted entities
              </p>
              <pre className="mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded-[8px] bg-[#f8fbff] p-3 text-[10px] leading-[1.5] text-[#60728a]">
                {JSON.stringify(extractedEntities, null, 2)}
              </pre>
            </article>
          ) : null}

          <div className="mt-4 flex justify-center">
            <Link
              href="/dashboard?view=scamshieldassets"
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#df3c3c] px-8 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(223,60,60,0.26)]"
            >
              <IconAlertTriangle size={12} />
              {t("dashboard.scamShield.reportThisIncident")}
            </Link>
          </div>

          <article className="mt-4 rounded-xl border border-[#dfe8f4] bg-[#edf4ff] p-3 sm:p-4">
            <p className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1f4f93]">
              <IconShieldFilled size={13} />
              {t("dashboard.scamShield.stayProtected")}
            </p>
            <p className="mt-1 text-[10px] leading-[1.5] text-[#4b607d]">
              {t("dashboard.scamShield.stayProtectedBody")}
            </p>
            <div className="mt-3 rounded-[4px] border border-[#f0dc9f] bg-[#fff5dd] px-2 py-1.5">
              <p className="inline-flex items-center gap-1 text-[9px] text-[#8c6d1f]">
                <IconAlertTriangle size={10} />
                {t("dashboard.scamShield.infoDisclaimer")}
              </p>
            </div>
          </article>
        </article>
      </div>
    </div>
  );
}

function ScamShieldAssetsPage() {
  const { t } = useTranslation();
  const [mediaAssets, setMediaAssets] = useState<MediaAssetItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    void listPublishedMediaAssets().then((assets) => {
      if (isMounted) {
        setMediaAssets(assets);
      }
    }).catch(() => {
      if (isMounted) {
        setMediaAssets([]);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=scamshieldrisk"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.scamShield.nextSteps")}
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <article className="mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-4">
          <article className="rounded-[14px] border border-[#e3eaf5] bg-white px-4 py-6 text-center sm:px-6 sm:py-7">
            <h2 className="text-[32px] font-black leading-[1.08] text-[#1f2a3a] sm:text-[42px]">
              {t("dashboard.scamShield.secureAssetsTitle")}
            </h2>
            <p className="mx-auto mt-2 max-w-[560px] text-xs leading-[1.55] text-[#6a7e96] sm:text-sm">
              {t("dashboard.scamShield.assetActionIntro")}
            </p>
          </article>

          <div className="mt-3 space-y-3">
            <article className="rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3df] text-[#ef7d00]">
                    <IconBuildingBank size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[25px] font-extrabold leading-none text-[#1f2a3a]">
                      {t("dashboard.scamShield.contactYourBank")}
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.5] text-[#6a7e96]">
                      {t("dashboard.scamShield.contactYourBankDetailed")}
                    </p>
                  </div>
                </div>

                <button className="inline-flex h-10 items-center gap-1.5 rounded-[8px] bg-[#ff9800] px-5 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(255,152,0,0.26)]">
                  {t("dashboard.scamShield.callFraudDepartment")}
                  <IconExternalLink size={12} />
                </button>
              </div>
            </article>

            <article className="rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3df] text-[#ef7d00]">
                    <IconGavel size={17} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[25px] font-extrabold leading-none text-[#1f2a3a]">
                        {t("dashboard.scamShield.reportToAcccScamwatch")}
                      </p>
                      <span className="inline-flex h-5 items-center rounded-full bg-[#ecf3ff] px-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#2c66b0]">
                        {t("dashboard.scamShield.communityPrevention")}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-[1.5] text-[#6a7e96]">
                      {t("dashboard.scamShield.reportToAcccDetailed")}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-[#374b64]">
                      {t("dashboard.scamShield.communityPreventionBody")}
                    </p>
                  </div>
                </div>

                <Link
                  href="/dashboard?view=scamshieldagency"
                  className="inline-flex h-10 items-center gap-1.5 rounded-[8px] bg-[#ff9800] px-5 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(255,152,0,0.26)]"
                >
                  {t("dashboard.scamShield.launchReportTool")}
                  <IconExternalLink size={12} />
                </Link>
              </div>
            </article>

            <article className="rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3df] text-[#ef7d00]">
                    <IconShieldFilled size={14} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[25px] font-extrabold leading-none text-[#1f2a3a]">
                      {t("dashboard.scamShield.reportToReportCyber")}
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.5] text-[#6a7e96]">
                      {t("dashboard.scamShield.reportToReportCyberBody")}
                    </p>
                  </div>
                </div>

                <Link
                  href="/dashboard?view=scamshieldagency"
                  className="inline-flex h-10 items-center gap-1.5 rounded-[8px] bg-[#ff9800] px-5 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(255,152,0,0.26)]"
                >
                  {t("dashboard.scamShield.launchReportTool")}
                  <IconExternalLink size={12} />
                </Link>
              </div>
            </article>

            {mediaAssets.map((asset) => (
              <article
                key={asset.id}
                className="overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="h-40 bg-[#edf3fb] sm:h-auto sm:w-[168px] sm:shrink-0">
                    <img
                      src={getMediaAssetImageUrl(asset)}
                      alt={asset.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 px-3 py-3 sm:px-4 sm:py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[25px] font-extrabold leading-none text-[#1f2a3a]">
                        {asset.title}
                      </p>
                      <span className="inline-flex h-5 items-center rounded-full bg-[#ecf3ff] px-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#2c66b0]">
                        {asset.category}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-[#374b64]">
                      {asset.subtitle}
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.5] text-[#6a7e96]">
                      {asset.bodyText}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

function ScamShieldAgencyPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const flowState = getScamShieldFlowState();
  const [expandedSection, setExpandedSection] = useState<
    "accc" | "reportCyber" | "bank" | null
  >("accc");
  const [privacyConsentEnabled, setPrivacyConsentEnabled] = useState(false);
  const [draftSummary, setDraftSummary] = useState(
    flowState?.reportDraft?.draftReport?.draft ??
      flowState?.reportDraft?.draftReport?.summary ??
      ""
  );
  const [agencyError, setAgencyError] = useState<string | null>(null);
  const [pendingConsentRequirement, setPendingConsentRequirement] =
    useState<ConsentRequirement | null>(null);
  const [isGrantingConsent, setIsGrantingConsent] = useState(false);
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const analysisSummary = flowState?.analysis?.summary ?? "";
  const analysisIndicators = flowState?.analysis?.indicators ?? flowState?.analysis?.redFlags ?? [];

  useEffect(() => {
    if (!flowState?.analysis?._id) {
      return;
    }

    let isActive = true;

    void generateScamReportDraft({
      analysisId: flowState.analysis._id,
    })
      .then((draft) => {
        if (!isActive) {
          return;
        }

        setDraftSummary(
          draft.draftReport?.draft ??
            draft.draftReport?.summary ??
            (draft.draftReport?.indicators?.length
              ? `Prepared from ScamShield indicators: ${draft.draftReport.indicators.join(", ")}.`
              : analysisSummary)
        );
        mergeScamShieldFlowState({
          reportDraft: draft,
        });
      })
      .catch(() => {
        if (isActive) {
          setDraftSummary(analysisSummary);
        }
      });

    return () => {
      isActive = false;
    };
  }, [analysisSummary, flowState?.analysis?._id]);

  const handleSubmitToAgency = async () => {
    if (!flowState?.analysis?._id) {
      setAgencyError("Run a ScamShield analysis before preparing agency submission.");
      return;
    }

    if (!privacyConsentEnabled) {
      setAgencyError(
        "Report draft is prepared locally. Turn on sharing consent before sending details to an external service or agency."
      );
      mergeScamShieldFlowState({
        submitted: false,
      });
      return;
    }

    setIsSubmittingReport(true);
    setAgencyError(null);

    try {
      const submittedAnalysis = await submitScamReport({
        analysisId: flowState.analysis._id,
        destination: expandedSection === "bank" ? "bank" : "scamwatch",
        consentToShare: privacyConsentEnabled,
      });
      mergeScamShieldFlowState({
        analysis: submittedAnalysis,
        submitted: true,
      });
      router.push("/dashboard?view=reportsubmissionreview");
    } catch (error) {
      if (error instanceof ConsentRequiredError) {
        setPendingConsentRequirement(error.requirement);
        return;
      }

      setAgencyError(
        error instanceof Error
          ? error.message
          : "Agency submission could not be prepared."
      );
    } finally {
      setIsSubmittingReport(false);
    }
  };

  return (
    <div className="px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="mx-auto flex min-h-[1196px] w-full max-w-[1184px] flex-col pb-8">
        <div className="mx-auto flex h-[61px] w-full max-w-[1184px] items-center justify-between border-b border-[#E2E8F0] bg-[#FFFFFFCC] px-4 sm:px-8 lg:px-[80px]">
          <Link
            href="/dashboard?view=scamshieldassets"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.scamShield.safeSpeakAnalyzer")}
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <article className="mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-4">
          <article className="mx-auto w-full max-w-[1136px] rounded-[14px] border border-[#e3eaf5] bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
            <h2
              className={`${interFont.className} mx-auto h-[36px] w-full max-w-[369px] text-[30px] font-extrabold leading-[36px] tracking-[0] text-[#1f2a3a]`}
            >
              {t("dashboard.scamShield.prefilledAgencyReports")}
            </h2>
            <p
              className={`${interFont.className} mx-auto mt-3 w-full max-w-[780px] text-center text-[18px] font-normal leading-[29.25px] tracking-[0] text-[#6b7280]`}
            >
              {t("dashboard.scamShield.prefilledAgencyReportsAnalyzerBody")}
            </p>
            {draftSummary ? (
              <div className="mt-4 rounded-[12px] border border-[#e2eaf5] bg-[#f8fbff] px-4 py-3 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                  Generated draft
                </p>
                <p className="mt-2 text-[11px] leading-[1.6] text-[#50627a]">
                  {draftSummary}
                </p>
                {analysisIndicators.length ? (
                  <p className="mt-2 text-[10px] font-semibold text-[#60728a]">
                    Backend indicators: {analysisIndicators.join(", ")}
                  </p>
                ) : null}
              </div>
            ) : null}
          </article>

          {agencyError ? (
            <div className="mt-3 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-3 text-[11px] text-[#b45353]">
              {agencyError}
            </div>
          ) : null}

          <div className="mt-3 space-y-3">
            <article className="overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white">
              <button
                type="button"
                onClick={() =>
                  setExpandedSection((currentSection) =>
                    currentSection === "accc" ? null : "accc"
                  )
                }
                className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ecf3ff] text-[#2d66b0]">
                    <IconGavel size={14} />
                  </span>
                  <p className="truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]">
                    {t("dashboard.scamShield.reportToAcccScamwatch")}
                  </p>
                </div>
                <IconChevronRight
                  size={14}
                  className={`text-[#8fa0b6] transition-transform ${
                    expandedSection === "accc" ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>

              {expandedSection === "accc" ? (
                <div className="border-t border-[#e8eff8] px-3 pb-3 pt-2.5 sm:px-4 sm:pb-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b8]">
                    {t("dashboard.scamShield.prefilledDetails")}
                  </p>

                  <div className="mt-2.5">
                    <label className="text-[10px] font-semibold text-[#60728a]">
                      {t("dashboard.scamShield.senderName")}
                    </label>
                    <div className="relative mt-1">
                      <input
                        readOnly
                        value={t("dashboard.scamShield.prefilledSenderName")}
                        className="h-10 w-full rounded-[8px] border border-[#dce5f1] bg-[#f8fbff] px-3 pr-10 text-[12px] text-[#253447] outline-none"
                      />
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#16a56a]">
                        <IconShieldFilled size={13} />
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                    <div>
                      <label className="text-[10px] font-semibold text-[#60728a]">
                        {t("dashboard.scamShield.scamCategory")}
                      </label>
                      <div className="relative mt-1">
                        <input
                          readOnly
                          value={t(
                            "dashboard.scamShield.prefilledScamCategory"
                          )}
                          className="h-10 w-full rounded-[8px] border border-[#dce5f1] bg-[#f8fbff] px-3 pr-9 text-[12px] text-[#253447] outline-none"
                        />
                        <IconChevronRight
                          size={12}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#8fa0b6]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-[#60728a]">
                        {t("dashboard.scamShield.platform")}
                      </label>
                      <div className="relative mt-1">
                        <input
                          readOnly
                          value={t("dashboard.scamShield.prefilledPlatform")}
                          className="h-10 w-full rounded-[8px] border border-[#dce5f1] bg-[#f8fbff] px-3 pr-9 text-[12px] text-[#253447] outline-none"
                        />
                        <IconChevronRight
                          size={12}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#8fa0b6]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </article>

            <article className="overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white">
              <button
                type="button"
                onClick={() =>
                  setExpandedSection((currentSection) =>
                    currentSection === "reportCyber" ? null : "reportCyber"
                  )
                }
                className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf1ff] text-[#5f6be0]">
                    <IconShieldFilled size={13} />
                  </span>
                  <p className="truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]">
                    {t("dashboard.scamShield.reportCyberAcsc")}
                  </p>
                </div>
                <IconChevronRight
                  size={14}
                  className={`text-[#8fa0b6] transition-transform ${
                    expandedSection === "reportCyber" ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>

              {expandedSection === "reportCyber" ? (
                <div className="border-t border-[#e8eff8] px-3 py-3 text-[12px] leading-[1.55] text-[#60728a] sm:px-4">
                  {t("dashboard.scamShield.reportCyberPanelBody")}
                </div>
              ) : null}
            </article>

            <article className="overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white">
              <button
                type="button"
                onClick={() =>
                  setExpandedSection((currentSection) =>
                    currentSection === "bank" ? null : "bank"
                  )
                }
                className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7fbf6] text-[#0f9c7c]">
                    <IconBuildingBank size={14} />
                  </span>
                  <p className="truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]">
                    {t("dashboard.scamShield.bankSecurityDept")}
                  </p>
                </div>
                <IconChevronRight
                  size={14}
                  className={`text-[#8fa0b6] transition-transform ${
                    expandedSection === "bank" ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>

              {expandedSection === "bank" ? (
                <div className="border-t border-[#e8eff8] px-3 py-3 text-[12px] leading-[1.55] text-[#60728a] sm:px-4">
                  {t("dashboard.scamShield.bankSecurityPanelBody")}
                </div>
              ) : null}
            </article>
          </div>

          <article className="mt-3 rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-3.5">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[14px] font-bold text-[#1f2a3a]">
                  {t("dashboard.scamShield.privacyConsent")}
                </p>
                <p className="mt-1 text-[10px] leading-[1.45] text-[#6a7e96] sm:text-[11px]">
                  {t("dashboard.scamShield.privacyConsentBody")}
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={privacyConsentEnabled}
                onClick={() =>
                  setPrivacyConsentEnabled((isEnabled) => !isEnabled)
                }
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                  privacyConsentEnabled ? "bg-[#ff9800]" : "bg-[#d5dde8]"
                }`}
              >
                <span
                  className={`h-5 w-5 rounded-full bg-white shadow-[0_1px_2px_rgba(15,23,42,0.35)] transition-transform ${
                    privacyConsentEnabled ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </article>

          <Link
            href="#"
            onClick={(event) => {
              event.preventDefault();
              void handleSubmitToAgency();
            }}
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-[#ff9800] px-6 text-[12px] font-bold text-white shadow-[0_8px_18px_rgba(255,152,0,0.34)]"
          >
            <IconArrowRight size={13} />
            {isSubmittingReport
              ? "Submitting..."
              : privacyConsentEnabled
                ? t("dashboard.scamShield.submitAllReports")
                : "Keep draft prepared"}
          </Link>
          <p className="mt-2 text-center text-[8px] font-semibold uppercase tracking-[0.08em] text-[#9aabc0]">
            {t("dashboard.scamShield.encryptedSubmissionNotice")}
          </p>

          {pendingConsentRequirement ? (
            <div className="mt-3">
              <ConsentRequiredCard
                requirement={pendingConsentRequirement}
                isSubmitting={isGrantingConsent}
                onAllow={() => {
                  void (async () => {
                    setIsGrantingConsent(true);

                    try {
                      await grantConsent(
                        { share_with_agencies: true },
                        pendingConsentRequirement.source
                      );
                      setPendingConsentRequirement(null);
                      await handleSubmitToAgency();
                    } catch (error) {
                      setAgencyError(
                        error instanceof Error
                          ? error.message
                          : "Consent could not be saved."
                      );
                    } finally {
                      setIsGrantingConsent(false);
                    }
                  })();
                }}
                onDecline={() => {
                  setPendingConsentRequirement(null);
                }}
              />
            </div>
          ) : null}
        </article>
      </div>
    </div>
  );
}

export {
  ScamShieldAgencyPage,
  ScamShieldAssetsPage,
  ScamShieldIntakePage,
  ScamShieldRiskPage,
};
