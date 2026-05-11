"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import {
  IconAlertCircle,
  IconBoltFilled,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconDownload,
  IconFileText,
  IconFileTypePdf,
  IconFolderFilled,
  IconPhoto,
  IconMicrophone,
  IconPlayerPlayFilled,
  IconX,
} from "@tabler/icons-react";
import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import {
  ConsentRequiredError,
  consentRequirements,
  getCurrentConsent,
  grantConsent,
  type ConsentRequirement,
} from "@/lib/consent";
import {
  completeEvidenceUpload,
  requestEvidenceUploadUrl,
  transcribeEvidence,
} from "@/lib/evidence-client";
import { getReportFlowDraft, mergeReportFlowDraft } from "@/lib/report-flow";
import { cn } from "@/lib/utils";

type EvidenceKind = "image" | "video" | "audio" | "document";

type EvidenceItem = {
  id: string;
  backendEvidenceId?: string;
  name: string;
  sizeLabel: string;
  kind: EvidenceKind;
  sha256Hash: string;
  uploadedAt: string;
  transcript?: string;
  status: "attached" | "restored" | "synced" | "local-only";
};

type EvidenceAuditEntry = {
  id: string;
  action: "attached" | "removed" | "draft-saved" | "restored";
  detail: string;
  timestamp: string;
};

const DRAFT_STORAGE_KEY = "safespeak_report_evidence_draft";

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function inferEvidenceKind(file: File): EvidenceKind {
  if (file.type.startsWith("image/")) {
    return "image";
  }

  if (file.type.startsWith("video/")) {
    return "video";
  }

  if (file.type.startsWith("audio/")) {
    return "audio";
  }

  return "document";
}

async function computeSha256Hash(file: File): Promise<string> {
  if (typeof crypto === "undefined" || !crypto.subtle) {
    return "hash-unavailable";
  }

  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);

  return Array.from(new Uint8Array(digest))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

function formatEvidenceTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function createAuditEntry(
  action: EvidenceAuditEntry["action"],
  detail: string,
  timestamp = new Date().toISOString()
): EvidenceAuditEntry {
  return {
    id: `${action}-${timestamp}-${Math.random().toString(36).slice(2, 8)}`,
    action,
    detail,
    timestamp,
  };
}

function EvidenceCard({
  item,
  onRemove,
}: {
  item: EvidenceItem;
  onRemove: (id: string) => void;
}) {
  const icon =
    item.kind === "image" ? (
      <IconPhoto size={16} />
    ) : item.kind === "video" ? (
      <IconPlayerPlayFilled size={16} />
    ) : item.kind === "audio" ? (
      <IconMicrophone size={16} />
    ) : item.name.toLowerCase().endsWith(".pdf") ? (
      <IconFileTypePdf size={16} />
    ) : (
      <IconFileText size={16} />
    );

  const accent =
    item.kind === "audio"
      ? "bg-[#fff1e4] text-[#ff8f00]"
      : item.kind === "video"
        ? "bg-[#eef3ff] text-[#335fd6]"
        : item.kind === "image"
          ? "bg-[#eafbf1] text-[#1a8b52]"
          : "bg-[#f3f4f6] text-[#56637a]";

  return (
    <article className="relative rounded-[16px] border border-[#dde7f2] bg-white p-4">
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="absolute right-2 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[#a7b4c6]"
        aria-label={`Remove ${item.name}`}
      >
        <IconX size={12} />
      </button>
      <div className="flex min-h-[132px] items-start gap-3">
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            accent
          )}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p className="truncate pr-4 text-[11px] font-semibold text-[#1f2a3a]">
            {item.name}
          </p>
          <p className="mt-1 text-[10px] text-[#8ea0b8]">{item.sizeLabel}</p>
          <p className="mt-1 text-[10px] text-[#8ea0b8]">
            {formatEvidenceTimestamp(item.uploadedAt)}
          </p>
          <p className="mt-3 font-mono text-[10px] leading-5 text-[#50627a]">
            SHA-256 {item.sha256Hash.slice(0, 20)}...
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex h-5 items-center rounded-full bg-[#f5f8fc] px-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#66788d]">
              {item.kind}
            </span>
            <span
              className={cn(
                "inline-flex h-5 items-center rounded-full px-2.5 text-[9px] font-bold uppercase tracking-[0.08em]",
                item.status === "restored"
                  ? "bg-[#fff1e4] text-[#d97706]"
                  : "bg-[#e8f7ee] text-[#15803d]"
              )}
            >
              {item.status === "restored" ? "Re-upload needed" : "Attached"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ReportSubmissionEvidencePage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const audioInputRef = useRef<HTMLInputElement | null>(null);
  const reportDraft = getReportFlowDraft();
  const [description, setDescription] = useState("");
  const [supportMessage, setSupportMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<EvidenceItem[]>([]);
  const [auditTrail, setAuditTrail] = useState<EvidenceAuditEntry[]>([]);
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null);
  const [restoredDraftNotice, setRestoredDraftNotice] = useState<string | null>(
    null
  );
  const [isHashingEvidence, setIsHashingEvidence] = useState(false);
  const [isUploadingEvidence, setIsUploadingEvidence] = useState(false);
  const [evidenceError, setEvidenceError] = useState<string | null>(null);
  const [pendingConsentRequirement, setPendingConsentRequirement] =
    useState<ConsentRequirement | null>(null);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [pendingTranscriptionItem, setPendingTranscriptionItem] =
    useState<EvidenceItem | null>(null);
  const [isGrantingConsent, setIsGrantingConsent] = useState(false);
  const [isTranscribingEvidenceId, setIsTranscribingEvidenceId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);

    if (!savedDraft) {
      return;
    }

    try {
      const parsed = JSON.parse(savedDraft) as {
        description?: string;
        supportMessage?: string;
        attachments?: Array<
          Pick<
            EvidenceItem,
            "name" | "sizeLabel" | "kind" | "sha256Hash" | "uploadedAt"
          >
        >;
        auditTrail?: EvidenceAuditEntry[];
        savedAt?: string;
      };

      setDescription(parsed.description ?? "");
      setSupportMessage(parsed.supportMessage ?? "");
      setDraftSavedAt(
        parsed.savedAt
          ? new Date(parsed.savedAt).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })
          : null
      );

      if (parsed.attachments?.length) {
        setAttachedFiles(
          parsed.attachments.map((item, index) => ({
            id: `restored-${index}-${item.name}`,
            name: item.name,
            sizeLabel: item.sizeLabel,
            kind: item.kind,
            sha256Hash: item.sha256Hash ?? "hash-unavailable",
            uploadedAt: item.uploadedAt ?? new Date().toISOString(),
            status: "restored",
          }))
        );
        setAuditTrail(
          parsed.auditTrail?.length
            ? parsed.auditTrail
            : [
                createAuditEntry(
                  "restored",
                  "Draft metadata restored. Evidence files need re-upload."
                ),
              ]
        );
        setRestoredDraftNotice(
          "Draft text and metadata were restored. Re-upload any evidence files before continuing."
        );
      }
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (reportDraft?.summary) {
      setDescription((currentDescription) =>
        currentDescription || reportDraft.summary
      );
    }
  }, [reportDraft?.summary]);

  const attachFiles = async (
    files: FileList | File[],
    options?: { forceCloudSync?: boolean }
  ) => {
    const fileList = Array.isArray(files) ? files : Array.from(files);

    if (!fileList.length) {
      return;
    }

    setEvidenceError(null);
    setIsHashingEvidence(true);
    setIsUploadingEvidence(true);

    try {
      const currentConsent = await getCurrentConsent();
      const allowCloudSync = options?.forceCloudSync || currentConsent.cloud_sync;

      if (!allowCloudSync && reportDraft?.reportId && !options) {
        setPendingFiles(fileList);
        setPendingConsentRequirement(consentRequirements.cloudEvidence);
        return;
      }

      const nextItems: EvidenceItem[] = await Promise.all(
        fileList.map(async (file) => {
          const uploadedAt = new Date().toISOString();
          const baseItem = {
            id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
            backendEvidenceId: undefined,
            name: file.name,
            sizeLabel: formatFileSize(file.size),
            kind: inferEvidenceKind(file),
            sha256Hash: await computeSha256Hash(file),
            uploadedAt,
            status: (allowCloudSync ? "synced" : "local-only") as EvidenceItem["status"],
          };

          if (!allowCloudSync || !reportDraft?.reportId) {
            return baseItem;
          }

          const upload = await requestEvidenceUploadUrl({
            reportId: reportDraft.reportId,
            type: inferEvidenceKind(file),
            fileName: file.name,
            mimeType: file.type || "application/octet-stream",
            size: file.size,
          });
          const completedEvidence = await completeEvidenceUpload({
            evidenceId: upload.evidence._id,
            file,
            sha256Hash: baseItem.sha256Hash,
          });

          return {
            ...baseItem,
            backendEvidenceId: completedEvidence._id,
            status: "synced" as const,
          };
        })
      );

      setAttachedFiles((currentItems) => [...currentItems, ...nextItems]);
      setAuditTrail((currentTrail) => [
        ...currentTrail,
        ...nextItems.map((item) =>
          createAuditEntry(
            "attached",
            `${item.name} ${item.status === "synced" ? "uploaded to the evidence vault" : "stored locally only"} at ${formatEvidenceTimestamp(item.uploadedAt)}.`
          )
        ),
      ]);
      mergeReportFlowDraft({
        evidenceIds: [
          ...new Set([
            ...(reportDraft?.evidenceIds ?? []),
            ...nextItems
              .map((item) => item.backendEvidenceId)
              .filter((item): item is string => Boolean(item)),
          ]),
        ],
      });
      setPendingFiles([]);
      setPendingConsentRequirement(null);
    } catch (error) {
      if (error instanceof ConsentRequiredError) {
        setPendingTranscriptionItem(null);
        setPendingFiles(fileList);
        setPendingConsentRequirement(error.requirement);
        return;
      }

      setEvidenceError(
        error instanceof Error
          ? error.message
          : "Evidence could not be attached."
      );
    } finally {
      setIsHashingEvidence(false);
      setIsUploadingEvidence(false);
    }
  };

  const handleFilesSelected = async (files: FileList | null) => {
    if (!files?.length) {
      return;
    }

    await attachFiles(files);
  };

  const removeAttachment = (id: string) => {
    setAttachedFiles((currentItems) => {
      const itemToRemove = currentItems.find((item) => item.id === id);

      if (itemToRemove) {
        setAuditTrail((currentTrail) => [
          ...currentTrail,
          createAuditEntry("removed", `${itemToRemove.name} removed from draft.`),
        ]);
      }

      return currentItems.filter((item) => item.id !== id);
    });
  };

  const saveDraft = () => {
    if (typeof window === "undefined") {
      return;
    }

    const savedAt = new Date();
    window.localStorage.setItem(
      DRAFT_STORAGE_KEY,
      JSON.stringify({
        description,
        supportMessage,
        attachments: attachedFiles.map(
          ({ name, sizeLabel, kind, sha256Hash, uploadedAt }) => ({
          name,
          sizeLabel,
          kind,
          sha256Hash,
          uploadedAt,
          })
        ),
        auditTrail: [
          ...auditTrail,
          createAuditEntry("draft-saved", "Draft metadata saved locally."),
        ],
        savedAt: savedAt.toISOString(),
      })
    );

    setDraftSavedAt(
      savedAt.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      })
    );
    setAuditTrail((currentTrail) => [
      ...currentTrail,
      createAuditEntry("draft-saved", "Draft metadata saved locally."),
    ]);
    setRestoredDraftNotice(null);
  };

  const handleTranscribeEvidence = async (item: EvidenceItem) => {
    if (!item.backendEvidenceId || !reportDraft?.reportId) {
      setEvidenceError("Upload the audio evidence to the vault before transcribing it.");
      return;
    }

    setIsTranscribingEvidenceId(item.id);
    setEvidenceError(null);

    try {
      const transcriptResult = await transcribeEvidence(item.backendEvidenceId, {
        language: "en",
        reportId: reportDraft.reportId,
        saveTranscript: true,
        useAsNarrative: false,
      });

      setAttachedFiles((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, transcript: transcriptResult.transcript }
            : currentItem
        )
      );
    } catch (error) {
      if (error instanceof ConsentRequiredError) {
        setPendingTranscriptionItem(item);
        setPendingConsentRequirement(error.requirement);
        return;
      }

      setEvidenceError(
        error instanceof Error
          ? error.message
          : "Evidence transcription could not be completed."
      );
    } finally {
      setIsTranscribingEvidenceId(null);
    }
  };

  const exportMetadata = () => {
    if (typeof window === "undefined") {
      return;
    }

    const payload = {
      exportedAt: new Date().toISOString(),
      description,
      supportMessage,
      attachments: attachedFiles.map((item) => ({
        name: item.name,
        kind: item.kind,
        sizeLabel: item.sizeLabel,
        sha256Hash: item.sha256Hash,
        uploadedAt: item.uploadedAt,
        status: item.status,
      })),
      auditTrail,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const objectUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = objectUrl;
    anchor.download = "safespeak-evidence-metadata.json";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.URL.revokeObjectURL(objectUrl);
  };

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=reportsubmissionrecommendations"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Attachments
          </Link>
          <Link
            href="/dashboard?view=reportsubmissionhistory"
            aria-label="View report history"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#9ba8bb] transition hover:text-[#74879e]"
          >
            <IconClock size={12} />
          </Link>
        </div>

        <article className="mt-3 rounded-[24px] border border-[#dce5f1] bg-[#f7fafe] px-4 pb-5 pt-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:px-5 sm:pb-6 sm:pt-5 lg:min-h-[1262px] lg:px-6 lg:pb-6 lg:pt-6">
          <article className="rounded-[20px] border border-[#e4ebf4] bg-white p-4 sm:p-5">
            {evidenceError ? (
              <div className="mb-3 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[11px] text-[#b45353]">
                <span className="inline-flex items-center gap-1.5">
                  <IconAlertCircle size={12} />
                  {evidenceError}
                </span>
              </div>
            ) : null}
            <div className="flex items-center justify-between gap-3">
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f2a3a]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#fff1e4] text-[#ff9a1f]">
                  <IconBoltFilled size={11} />
                </span>
                Incident Description
              </p>
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#9aa9bc]">
                Required
              </span>
            </div>

            <div className="mt-3 rounded-[12px] border border-[#e2e9f4] bg-[#f9fbff] p-3">
              <textarea
                rows={5}
                placeholder="Describe the incident details thoroughly. Include time, location, and involved parties..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="min-h-[102px] w-full resize-none bg-transparent text-[11px] leading-[1.5] text-[#2a3a4f] outline-none placeholder:text-[#a0afc2]"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] text-[#8ea0b8]">
                  {description.length} characters
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => audioInputRef.current?.click()}
                    className="inline-flex h-8 items-center gap-1 rounded-[8px] border border-[#dee6f2] bg-white px-3 text-[10px] font-semibold text-[#5f7189]"
                  >
                    <IconMicrophone size={11} />
                    Attach voice note
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex h-8 items-center gap-1 rounded-[8px] border border-[#dee6f2] bg-white px-3 text-[10px] font-semibold text-[#5f7189]"
                  >
                    <IconFolderFilled size={11} />
                    Upload files
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex h-6 items-center rounded-full bg-[#eef3ff] px-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#335fd6]">
                  Text narrative
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-[#fff1e4] px-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#d97706]">
                  <IconMicrophone size={11} />
                  Audio note
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-[#eafbf1] px-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1a8b52]">
                  <IconPhoto size={11} />
                  Image, video, or PDF
                </span>
                {reportDraft?.reportId ? (
                  <span className="inline-flex h-6 items-center rounded-full bg-[#eef4ff] px-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#335fd6]">
                    Draft ID: {reportDraft.reportId.slice(-6)}
                  </span>
                ) : null}
              </div>
            </div>
          </article>

          <div className="mt-5 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#1f2a3a]">
                Attached Files
              </h3>
              <p className="mt-0.5 text-[10px] text-[#8ea0b8]">
                Upload evidence only when you choose. Files stay local-only unless cloud sync consent is granted.
              </p>
            </div>
            <span className="inline-flex h-5 items-center rounded-full bg-[#fff2e6] px-2.5 text-[9px] font-bold text-[#ff8f00]">
              {attachedFiles.length} file{attachedFiles.length === 1 ? "" : "s"}{" "}
              attached
            </span>
          </div>

          {restoredDraftNotice ? (
            <div className="mt-3 rounded-[12px] border border-[#ffd6a8] bg-[#fff7ed] px-4 py-3 text-[11px] leading-5 text-[#9a5b12]">
              {restoredDraftNotice}
            </div>
          ) : null}

          <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {attachedFiles.map((item) => (
              <div key={item.id} className="space-y-2">
                <EvidenceCard item={item} onRemove={removeAttachment} />
                {item.kind === "audio" && item.backendEvidenceId ? (
                  <div className="rounded-[14px] border border-[#dfe7f2] bg-white px-3 py-3">
                    {item.transcript ? (
                      <>
                        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]">
                          Transcript
                        </p>
                        <p className="mt-2 text-[11px] leading-5 text-[#50627a]">
                          {item.transcript}
                        </p>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          void handleTranscribeEvidence(item);
                        }}
                        disabled={isTranscribingEvidenceId === item.id}
                        className="inline-flex h-8 items-center rounded-full bg-[#0f5d9f] px-4 text-[10px] font-bold text-white"
                      >
                        {isTranscribingEvidenceId === item.id ? "Transcribing..." : "Generate transcript"}
                      </button>
                    )}
                  </div>
                ) : null}
              </div>
            ))}

            {attachedFiles.length === 0 ? (
              <article className="rounded-[16px] border border-dashed border-[#d5deea] bg-white p-4 lg:col-span-3">
                <div className="grid min-h-[176px] place-items-center text-center">
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1e4] text-[#ff8f00]">
                      <IconFolderFilled size={16} />
                    </span>
                    <p className="mt-3 text-[11px] font-semibold text-[#334155]">
                      No evidence attached yet
                    </p>
                    <p className="mt-1 max-w-[320px] text-[10px] leading-5 text-[#8ea0b8]">
                      Add screenshots, documents, voice notes, videos, or photos
                      when it feels safe to do so.
                    </p>
                  </div>
                </div>
              </article>
            ) : null}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[16px] border border-[#dfe7f2] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]">
                    Chain of Custody
                  </p>
                  <p className="mt-1 text-[11px] text-[#6d7f96]">
                    Local-first metadata for each file stays on this device until
                    you choose to submit.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {isHashingEvidence ? (
                    <span className="inline-flex h-8 items-center rounded-full bg-[#fff7ed] px-3 text-[10px] font-bold text-[#d97706]">
                      {isUploadingEvidence ? "Uploading evidence..." : "Hashing evidence..."}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    onClick={exportMetadata}
                    className="inline-flex h-8 items-center gap-1 rounded-full border border-[#dbe4ef] bg-white px-3 text-[10px] font-semibold text-[#334155]"
                  >
                    <IconDownload size={11} />
                    Export metadata
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {attachedFiles.length === 0 ? (
                  <p className="text-[11px] leading-5 text-[#8ea0b8]">
                    Add a file to generate a SHA-256 hash, timestamp, and local
                    chain-of-custody record.
                  </p>
                ) : (
                  attachedFiles.map((item) => (
                    <article
                      key={`custody-${item.id}`}
                      className="rounded-[14px] border border-[#e2eaf4] bg-[#f8fbff] px-4 py-3"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-[11px] font-semibold text-[#1f2a3a]">
                            {item.name}
                          </p>
                          <p className="mt-1 text-[10px] text-[#6d7f96]">
                            {item.sizeLabel} | {formatEvidenceTimestamp(item.uploadedAt)}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "inline-flex h-5 items-center rounded-full px-2.5 text-[9px] font-bold uppercase tracking-[0.08em]",
                            item.status === "restored"
                              ? "bg-[#fff1e4] text-[#d97706]"
                              : "bg-[#e8f7ee] text-[#15803d]"
                          )}
                        >
                          {item.status === "restored" ? "Restored metadata" : "Verified"}
                        </span>
                      </div>
                      <p className="mt-3 font-mono text-[10px] leading-5 text-[#50627a] break-all">
                        {item.sha256Hash}
                      </p>
                    </article>
                  ))
                )}
              </div>
            </article>

            <article className="rounded-[16px] border border-[#dfe7f2] bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]">
                Audit Log
              </p>
              <p className="mt-1 text-[11px] text-[#6d7f96]">
                Every local evidence action is recorded here for later review.
              </p>

              <div className="mt-4 space-y-3">
                {auditTrail.length === 0 ? (
                  <p className="text-[11px] leading-5 text-[#8ea0b8]">
                    No audit entries yet. Attach, remove, or save a draft to
                    start the log.
                  </p>
                ) : (
                  [...auditTrail].reverse().map((entry) => (
                    <article
                      key={entry.id}
                      className="rounded-[14px] border border-[#e2eaf4] bg-[#f8fbff] px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex rounded-full bg-[#e8f1ff] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]">
                          {entry.action.replace("-", " ")}
                        </span>
                        <span className="text-[10px] text-[#8ea0b8]">
                          {formatEvidenceTimestamp(entry.timestamp)}
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] leading-5 text-[#50627a]">
                        {entry.detail}
                      </p>
                    </article>
                  ))
                )}
              </div>
            </article>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <article className="rounded-[16px] border border-[#dfe7f2] bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]">
                Evidence storage status
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[14px] border border-[#e3ebf5] bg-[#f8fbff] px-3 py-3">
                  <p className="text-[11px] font-bold text-[#1f2a3a]">Local-only evidence</p>
                  <p className="mt-1 text-[10px] leading-5 text-[#60728a]">
                    Metadata and narrative stay in this browser session until you explicitly enable cloud sync.
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#e3ebf5] bg-[#f8fbff] px-3 py-3">
                  <p className="text-[11px] font-bold text-[#1f2a3a]">Cloud-synced evidence</p>
                  <p className="mt-1 text-[10px] leading-5 text-[#60728a]">
                    Files upload to the Evidence Vault only after explicit cloud sync consent and a real draft id are available.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[16px] border border-[#dfe7f2] bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]">
                Audio transcription consent
              </p>
              <p className="mt-2 text-[11px] leading-5 text-[#6d7f96]">
                Audio transcription requires explicit consent before any transcript is generated. Voice-note uploads can stay attached without transcription if you prefer.
              </p>
            </article>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <article className="rounded-[16px] border border-dashed border-[#ffbf7d] bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d97706]">
                Voice Note
              </p>
                <p className="mt-2 text-[11px] leading-5 text-[#6d7f96]">
                Attach an audio recording if speaking feels easier than typing.
                On supported mobile devices this can open the recorder directly.
              </p>
              <button
                type="button"
                onClick={() => audioInputRef.current?.click()}
                className="mt-4 inline-flex h-9 items-center justify-center rounded-full bg-[#ff8f00] px-5 text-[11px] font-bold text-white shadow-[0_8px_18px_rgba(255,143,0,0.32)]"
              >
                Record or upload audio
              </button>
            </article>

            <article
              role="button"
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              onDragOver={(event) => {
                event.preventDefault();
              }}
              onDrop={(event) => {
                event.preventDefault();
                handleFilesSelected(event.dataTransfer.files);
              }}
              className="grid min-h-[176px] cursor-pointer place-items-center rounded-[16px] border border-dashed border-[#ced9e8] bg-[#fbfcff] p-4 text-center"
            >
              <div>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fff1e4] text-[#ff8f00]">
                  <IconFolderFilled size={13} />
                </span>
                <p className="mt-2 text-[10px] font-semibold text-[#334155]">
                  Drag, drop, or click to upload
                </p>
                <p className="mt-1 text-[9px] text-[#8ea0b8]">
                  Support for images, video, audio, and PDF documents.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-4 flex h-[58px] items-center gap-2 rounded-[16px] border border-[#dfe7f2] bg-white px-4">
            <input
              type="text"
              placeholder="Type a message to support..."
              value={supportMessage}
              onChange={(event) => setSupportMessage(event.target.value)}
              className="flex-1 bg-transparent text-[11px] text-[#2a3a4f] outline-none placeholder:text-[#a0afc2]"
            />
            <button className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#8ea0b8]">
              <IconMicrophone size={12} />
            </button>
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff8f00] text-white shadow-[0_6px_14px_rgba(255,143,0,0.35)]">
              <IconChevronRight size={14} />
            </button>
          </div>

          <div className="mt-4 rounded-[12px] border border-[#dfe7f2] bg-white px-4 py-3 sm:px-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <button
                  type="button"
                  onClick={saveDraft}
                  className="inline-flex h-9 items-center justify-center rounded-full px-5 text-[11px] font-semibold text-[#6d7f96]"
                >
                Save as Draft
                </button>
                {draftSavedAt ? (
                  <span className="text-[10px] text-[#8ea0b8]">
                    Draft saved at {draftSavedAt}
                  </span>
                ) : null}
              </div>
              <Link
                href="/dashboard?view=reportsubmissionreview"
                onClick={() =>
                  mergeReportFlowDraft({
                    summary: description || reportDraft?.summary || "",
                    structuredFields: {
                      ...(reportDraft?.structuredFields ?? {}),
                      what: description || reportDraft?.summary || "",
                      evidenceItems: attachedFiles.map((item) => ({
                        name: item.name,
                        kind: item.kind,
                        status: item.status,
                      })),
                    },
                    evidenceIds: [
                      ...new Set([
                        ...(reportDraft?.evidenceIds ?? []),
                        ...attachedFiles
                          .map((item) => item.backendEvidenceId)
                          .filter((item): item is string => Boolean(item)),
                      ]),
                    ],
                  })
                }
                className="inline-flex h-10 min-w-[168px] items-center justify-center rounded-full bg-[#ff8f00] px-8 text-[11px] font-bold text-white shadow-[0_8px_18px_rgba(255,143,0,0.32)]"
              >
                Continue to review
              </Link>
            </div>
          </div>

          {pendingConsentRequirement ? (
            <div className="mt-4">
              <ConsentRequiredCard
                requirement={pendingConsentRequirement}
                isSubmitting={isGrantingConsent}
                onAllow={() => {
                  void (async () => {
                    setIsGrantingConsent(true);

                    try {
                      if (pendingConsentRequirement === consentRequirements.cloudEvidence) {
                        await grantConsent({ cloud_sync: true }, pendingConsentRequirement.source);
                        await attachFiles(pendingFiles, { forceCloudSync: true });
                      } else {
                        await grantConsent({ transcribe_audio: true }, pendingConsentRequirement.source);
                        if (pendingTranscriptionItem) {
                          await handleTranscribeEvidence(pendingTranscriptionItem);
                        }
                      }
                    } catch (error) {
                      setEvidenceError(
                        error instanceof Error
                          ? error.message
                          : "Consent could not be saved."
                      );
                    } finally {
                      setPendingTranscriptionItem(null);
                      setIsGrantingConsent(false);
                    }
                  })();
                }}
                onDecline={() => {
                  if (pendingFiles.length) {
                    void attachFiles(pendingFiles, { forceCloudSync: false });
                  }
                  setPendingTranscriptionItem(null);
                  setPendingConsentRequirement(null);
                }}
              />
            </div>
          ) : null}

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
            className="hidden"
            onChange={(event) => {
              handleFilesSelected(event.target.files);
              event.target.value = "";
            }}
          />
          <input
            ref={audioInputRef}
            type="file"
            accept="audio/*"
            capture="user"
            className="hidden"
            onChange={(event) => {
              handleFilesSelected(event.target.files);
              event.target.value = "";
            }}
          />
        </article>
      </div>
    </div>
  );
}

export { ReportSubmissionEvidencePage };
