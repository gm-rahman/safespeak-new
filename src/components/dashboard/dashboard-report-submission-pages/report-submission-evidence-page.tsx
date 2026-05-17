"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  IconAlertCircle,
  IconBoltFilled,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconDownload,
  IconFileText,
  IconFileTypePdf,
  IconFolderFilled,
  IconMicrophone,
  IconPhoto,
  IconPlayerPlayFilled,
  IconRefresh,
  IconShieldCheck,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import {
  ConsentRequiredError,
  type ConsentRequirement,
  consentRequirements,
  getConsentGrantFlags,
  getCurrentConsent,
  grantConsent,
} from "@/lib/consent";
import {
  type EvidenceAuditChainEntry,
  type EvidenceHashVerification,
  type EvidenceMetadata,
  type EvidenceRecord,
  completeEvidenceUpload,
  deleteEvidence,
  getEvidence,
  getEvidenceAuditChain,
  getEvidenceMetadata,
  getEvidenceTranscription,
  listReportEvidence,
  requestEvidenceUploadUrl,
  resolveEvidenceId,
  transcribeEvidence,
  verifyEvidenceHash,
} from "@/lib/evidence-client";
import { getReportFlowDraft, mergeReportFlowDraft } from "@/lib/report-flow";
import {
  type ReportCreateInput,
  createReport,
  getReport,
  updateReport,
} from "@/lib/reports-client";
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
  transcriptionStatus?: "available" | "not_found" | "not_requested";
  metadata?: EvidenceMetadata | null;
  auditChain?: EvidenceAuditChainEntry[];
  verification?: EvidenceHashVerification | null;
  backendStatus?: string;
  storageProvider?: string;
  mimeType?: string;
  sizeBytes?: number;
  previewUrl?: string;
  deletionRequestedAt?: string;
  deletedAt?: string;
  detailError?: string;
  status: "attached" | "restored" | "synced" | "local-only" | "deleted";
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

function formatOptionalFileSize(bytes?: number): string {
  return bytes ? formatFileSize(bytes) : "Unknown size";
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

function formatMetadataDate(timestamp?: string): string {
  return timestamp ? formatEvidenceTimestamp(timestamp) : "Not recorded";
}

function formatStatusLabel(value?: string): string {
  if (!value) {
    return "Not available";
  }

  return value.replace(/[_-]+/g, " ");
}

function isAudioOrVideoEvidence(item: EvidenceItem): boolean {
  return item.kind === "audio" || item.kind === "video";
}

function getTranscriptText(
  result: Awaited<ReturnType<typeof getEvidenceTranscription>> | null
): string | undefined {
  return result?.transcription?.text ?? result?.transcript;
}

function inferEvidenceKindFromRecord(evidence: EvidenceRecord): EvidenceKind {
  const mimeType = evidence.mimeType ?? "";
  const type = evidence.type ?? "";

  if (mimeType.startsWith("image/") || type === "image") {
    return "image";
  }

  if (mimeType.startsWith("video/") || type === "video") {
    return "video";
  }

  if (mimeType.startsWith("audio/") || type === "audio") {
    return "audio";
  }

  return "document";
}

function evidenceRecordToItem(evidence: EvidenceRecord): EvidenceItem {
  const evidenceId = resolveEvidenceId(evidence);
  const uploadedAt =
    evidence.createdAt ?? evidence.updatedAt ?? new Date().toISOString();

  return {
    id: evidenceId || `${evidence.fileName ?? "evidence"}-${uploadedAt}`,
    backendEvidenceId: evidenceId,
    name: evidence.fileName ?? "Evidence file",
    sizeLabel: formatOptionalFileSize(evidence.size),
    kind: inferEvidenceKindFromRecord(evidence),
    sha256Hash: evidence.sha256Hash ?? "hash-unavailable",
    uploadedAt,
    backendStatus: evidence.status,
    storageProvider: evidence.storageProvider,
    mimeType: evidence.mimeType,
    sizeBytes: evidence.size,
    deletionRequestedAt: evidence.deletionRequestedAt,
    deletedAt: evidence.deletedAt,
    transcript: getTranscriptText(
      evidence.transcription ? { transcription: evidence.transcription } : null
    ),
    transcriptionStatus: evidence.transcription ? "available" : undefined,
    status: evidence.deletedAt
      ? "deleted"
      : evidence.status === "synced" || evidence.status === "local_only"
        ? "synced"
        : "attached",
  };
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

async function loadEvidenceDetailPatch(
  evidenceId: string,
  item: Pick<EvidenceItem, "kind">
): Promise<Partial<EvidenceItem>> {
  const [evidence, metadata, auditChain] = await Promise.all([
    getEvidence(evidenceId),
    getEvidenceMetadata(evidenceId),
    getEvidenceAuditChain(evidenceId),
  ]);
  let transcriptionResult: Awaited<
    ReturnType<typeof getEvidenceTranscription>
  > | null = null;
  let transcriptionStatus: EvidenceItem["transcriptionStatus"] =
    item.kind === "audio" || item.kind === "video"
      ? "not_requested"
      : undefined;

  if (item.kind === "audio" || item.kind === "video") {
    try {
      transcriptionResult = await getEvidenceTranscription(evidenceId);
      transcriptionStatus = "available";
    } catch {
      transcriptionStatus = "not_found";
    }
  }

  return {
    backendEvidenceId: resolveEvidenceId(evidence) || evidenceId,
    metadata,
    auditChain,
    transcript: getTranscriptText(transcriptionResult),
    transcriptionStatus,
    backendStatus: evidence.status ?? metadata.status,
    storageProvider: evidence.storageProvider ?? metadata.storageProvider,
    mimeType: evidence.mimeType ?? metadata.mimeType,
    sizeBytes: evidence.size ?? metadata.size,
    deletionRequestedAt:
      evidence.deletionRequestedAt ?? metadata.deletionRequestedAt,
    deletedAt: evidence.deletedAt ?? metadata.deletedAt,
    detailError: undefined,
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
  const isDeleted = item.status === "deleted" || Boolean(item.deletedAt);

  return (
    <article className="relative rounded-[16px] border border-[#dde7f2] bg-white p-4">
      {!isDeleted ? (
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="absolute right-2 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[#a7b4c6]"
          aria-label={`Remove ${item.name}`}
        >
          <IconX size={12} />
        </button>
      ) : null}
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
                isDeleted
                  ? "bg-[#fef2f2] text-[#b42318]"
                  : item.status === "restored"
                    ? "bg-[#fff1e4] text-[#d97706]"
                    : "bg-[#e8f7ee] text-[#15803d]"
              )}
            >
              {isDeleted
                ? "Deleted"
                : item.status === "restored"
                  ? "Re-upload needed"
                  : item.status === "local-only"
                    ? "Local only"
                    : "Attached"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function EvidenceVaultCard({
  item,
  onRemove,
  onRefresh,
  onVerify,
  onTranscribe,
  isBusy,
}: {
  item: EvidenceItem;
  onRemove: (item: EvidenceItem) => void;
  onRefresh: (item: EvidenceItem) => void;
  onVerify: (item: EvidenceItem) => void;
  onTranscribe: (item: EvidenceItem) => void;
  isBusy?: boolean;
}) {
  const isDeleted = item.status === "deleted" || Boolean(item.deletedAt);
  const statusText = isDeleted
    ? "Deleted"
    : item.status === "synced"
      ? "Uploaded"
      : item.status === "local-only"
        ? "Local only"
        : item.status === "restored"
          ? "Re-upload needed"
          : "Attached";
  const canUseBackendActions = Boolean(item.backendEvidenceId) && !isDeleted;

  if (item.kind === "image") {
    return (
      <article className="group relative min-h-[232px] overflow-hidden rounded-[24px] bg-[#0f172a] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        {item.previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.previewUrl}
            alt={item.name}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-90 [background:linear-gradient(180deg,#7fb5dd_0%,#d8edf8_37%,#263d26_38%,#0e1724_45%,#30343b_100%)]" />
            <div className="absolute inset-x-[43%] bottom-0 top-[46%] bg-[#2b3036]" />
            <div className="absolute bottom-0 left-[49.5%] top-[48%] w-1 bg-[#f7d552]" />
          </>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />
        <button
          type="button"
          onClick={() => onRemove(item)}
          disabled={isBusy}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md"
          aria-label={`Remove ${item.name}`}
        >
          <IconX size={14} />
        </button>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 text-white">
          <span className="inline-flex min-w-0 items-center gap-2">
            <IconPhoto size={14} className="opacity-80" />
            <span className="truncate text-xs font-medium opacity-90">
              {item.name}
            </span>
          </span>
          <span className="shrink-0 text-xs opacity-70">{item.sizeLabel}</span>
        </div>
      </article>
    );
  }

  if (item.kind === "video") {
    return (
      <article className="relative min-h-[232px] overflow-hidden rounded-[24px] bg-[#111827] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        {item.previewUrl ? (
          <video
            src={item.previewUrl}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            muted
          />
        ) : (
          <div className="absolute inset-0 opacity-80 blur-[1px] [background:linear-gradient(90deg,#17261b_0%,#3f5935_26%,#0f2416_50%,#65755c_72%,#1a2b1d_100%)]" />
        )}
        <div className="absolute inset-0 grid place-items-center">
          <button
            type="button"
            onClick={() =>
              canUseBackendActions ? onTranscribe(item) : undefined
            }
            disabled={!canUseBackendActions || isBusy}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm"
            aria-label={`Process ${item.name}`}
          >
            <IconPlayerPlayFilled size={22} />
          </button>
        </div>
        <button
          type="button"
          onClick={() => onRemove(item)}
          disabled={isBusy}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md"
          aria-label={`Remove ${item.name}`}
        >
          <IconX size={14} />
        </button>
        <div className="absolute bottom-3 left-3 max-w-[72%] truncate text-xs font-medium text-white">
          {item.name}
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white">
          {statusText}
        </span>
      </article>
    );
  }

  if (item.kind === "audio") {
    return (
      <article className="relative flex min-h-[232px] flex-col justify-center rounded-[24px] border-2 border-dashed border-[#FDBA74] bg-white px-4 py-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] sm:px-8">
        <button
          type="button"
          onClick={() => onRemove(item)}
          disabled={isBusy}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center text-[#94A3B8]"
          aria-label={`Remove ${item.name}`}
        >
          <IconX size={18} />
        </button>
        <div className="mx-auto w-full max-w-[276px]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFEDD5] text-[#EA580C]">
              <IconMicrophone size={18} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-[#1E293B]">
                {item.name}
              </span>
              <span className="block text-xs font-medium text-[#F97316]">
                {isBusy ? "Processing..." : statusText}
              </span>
            </span>
          </div>
          <div className="mt-5 h-2 rounded-full bg-[#F1F5F9]">
            <div
              className={cn(
                "h-2 rounded-full bg-[#FF8F00]",
                isBusy ? "w-1/2" : "w-full"
              )}
            />
          </div>
          <div className="mt-3 flex items-center justify-between gap-2 text-xs text-[#64748B]">
            <span>{item.sizeLabel}</span>
            <button
              type="button"
              onClick={() => onTranscribe(item)}
              disabled={!canUseBackendActions || isBusy}
              className="font-semibold text-[#0F5D9F] disabled:text-[#94A3B8]"
            >
              Transcribe
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative grid min-h-[232px] place-items-center rounded-[24px] border border-[#E2E8F0] bg-white p-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <button
        type="button"
        onClick={() => onRemove(item)}
        disabled={isBusy}
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center text-[#94A3B8]"
        aria-label={`Remove ${item.name}`}
      >
        <IconX size={18} />
      </button>
      <div>
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#FFF7ED] text-[#F97316]">
          {item.name.toLowerCase().endsWith(".pdf") ? (
            <IconFileTypePdf size={28} />
          ) : (
            <IconFileText size={28} />
          )}
        </span>
        <p className="mt-3 max-w-[180px] truncate text-sm font-medium text-[#1E293B]">
          {item.name}
        </p>
        <p className="mt-1 text-xs text-[#94A3B8]">{item.sizeLabel}</p>
        <div className="mt-4 flex justify-center gap-3 text-xs">
          <button
            type="button"
            onClick={() => onRefresh(item)}
            disabled={!canUseBackendActions || isBusy}
            className="font-semibold text-[#0F5D9F] disabled:text-[#94A3B8]"
          >
            Details
          </button>
          <button
            type="button"
            onClick={() => onVerify(item)}
            disabled={!canUseBackendActions || isBusy}
            className="font-semibold text-[#0F5D9F] disabled:text-[#94A3B8]"
          >
            Verify
          </button>
        </div>
      </div>
    </article>
  );
}

function ReportSubmissionEvidencePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const audioInputRef = useRef<HTMLInputElement | null>(null);
  const [reportDraft, setReportDraft] = useState(() => getReportFlowDraft());
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
  const [isPersistingReport, setIsPersistingReport] = useState(false);
  const [evidenceError, setEvidenceError] = useState<string | null>(null);
  const [pendingConsentRequirement, setPendingConsentRequirement] =
    useState<ConsentRequirement | null>(null);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [pendingTranscriptionItem, setPendingTranscriptionItem] =
    useState<EvidenceItem | null>(null);
  const [isGrantingConsent, setIsGrantingConsent] = useState(false);
  const [isTranscribingEvidenceId, setIsTranscribingEvidenceId] = useState<
    string | null
  >(null);
  const [loadingEvidenceDetailId, setLoadingEvidenceDetailId] = useState<
    string | null
  >(null);
  const [verifyingEvidenceId, setVerifyingEvidenceId] = useState<string | null>(
    null
  );
  const [deletingEvidenceId, setDeletingEvidenceId] = useState<string | null>(
    null
  );
  const [verificationInputs, setVerificationInputs] = useState<
    Record<string, string>
  >({});

  const mergeDraft = (
    partialDraft: Parameters<typeof mergeReportFlowDraft>[0]
  ) => {
    const nextDraft = mergeReportFlowDraft(partialDraft);

    setReportDraft(nextDraft);

    return nextDraft;
  };

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
            | "backendEvidenceId"
            | "name"
            | "sizeLabel"
            | "kind"
            | "sha256Hash"
            | "uploadedAt"
            | "backendStatus"
            | "storageProvider"
            | "mimeType"
            | "sizeBytes"
            | "deletionRequestedAt"
            | "deletedAt"
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
            backendEvidenceId: item.backendEvidenceId,
            name: item.name,
            sizeLabel: item.sizeLabel,
            kind: item.kind,
            sha256Hash: item.sha256Hash ?? "hash-unavailable",
            uploadedAt: item.uploadedAt ?? new Date().toISOString(),
            backendStatus: item.backendStatus,
            storageProvider: item.storageProvider,
            mimeType: item.mimeType,
            sizeBytes: item.sizeBytes,
            deletionRequestedAt: item.deletionRequestedAt,
            deletedAt: item.deletedAt,
            status: item.deletedAt ? "deleted" : "restored",
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
      setDescription(
        (currentDescription) => currentDescription || reportDraft.summary
      );
    }
  }, [reportDraft?.summary]);

  useEffect(() => {
    const reportId = reportDraft?.reportId;

    if (!reportId) {
      return;
    }

    let isActive = true;

    void (async () => {
      try {
        const [report, evidenceRecords] = await Promise.all([
          getReport(reportId),
          listReportEvidence(reportId),
        ]);

        if (!isActive) {
          return;
        }

        const structuredFields = report.structuredFields ?? {};
        const nextDescription =
          report.originalNarrative ||
          (typeof structuredFields.what === "string"
            ? structuredFields.what
            : "") ||
          reportDraft.summary ||
          "";
        const nextSupportMessage =
          typeof structuredFields.supportMessage === "string"
            ? structuredFields.supportMessage
            : "";

        setDescription(
          (currentDescription) => currentDescription || nextDescription
        );
        setSupportMessage(
          (currentSupportMessage) => currentSupportMessage || nextSupportMessage
        );

        if (evidenceRecords.length) {
          setAttachedFiles((currentItems) => {
            const backendItems = evidenceRecords.map(evidenceRecordToItem);
            const backendById = new Map(
              backendItems
                .filter((item) => Boolean(item.backendEvidenceId))
                .map((item) => [item.backendEvidenceId, item])
            );
            const refreshedCurrentItems = currentItems.map((item) => {
              const backendItem = item.backendEvidenceId
                ? backendById.get(item.backendEvidenceId)
                : undefined;

              if (!backendItem) {
                return item;
              }

              return {
                ...backendItem,
                id: item.id,
                previewUrl: item.previewUrl,
              };
            });
            const currentIds = new Set(
              refreshedCurrentItems
                .map((item) => item.backendEvidenceId)
                .filter((item): item is string => Boolean(item))
            );
            const newBackendItems = backendItems.filter(
              (item) => !currentIds.has(item.backendEvidenceId ?? "")
            );

            return [...refreshedCurrentItems, ...newBackendItems];
          });
          mergeDraft({
            evidenceIds: [
              ...new Set([
                ...(reportDraft.evidenceIds ?? []),
                ...evidenceRecords
                  .map(resolveEvidenceId)
                  .filter((item): item is string => Boolean(item)),
              ]),
            ],
          });
        }
      } catch (error) {
        if (isActive) {
          setEvidenceError(
            error instanceof Error
              ? error.message
              : "Saved evidence could not be loaded."
          );
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [reportDraft?.reportId]);

  const buildReportPayload = (
    nextEvidenceItems = attachedFiles
  ): ReportCreateInput => {
    const activeEvidenceItems = nextEvidenceItems.filter(
      (item) => item.status !== "deleted" && !item.deletedAt
    );
    const existingStructuredFields = reportDraft?.structuredFields ?? {};
    const narrative =
      description.trim() ||
      reportDraft?.summary ||
      supportMessage.trim() ||
      "Evidence draft";

    return {
      language: "en",
      jurisdiction: "NSW",
      context: reportDraft?.title || "SafeSpeak incident report",
      originalNarrative: narrative,
      incidentType:
        reportDraft?.incidentType ?? reportDraft?.incidentCategory ?? undefined,
      structuredFields: {
        ...existingStructuredFields,
        what: narrative,
        when: reportDraft?.date || (existingStructuredFields.when as string),
        where:
          reportDraft?.location || (existingStructuredFields.where as string),
        supportMessage: supportMessage.trim() || undefined,
        evidenceItems: activeEvidenceItems.map((item) => ({
          evidenceId: item.backendEvidenceId,
          name: item.name,
          kind: item.kind,
          mimeType: item.mimeType,
          sizeBytes: item.sizeBytes,
          sha256Hash:
            item.sha256Hash === "hash-unavailable"
              ? undefined
              : item.sha256Hash,
          status: item.backendStatus ?? item.status,
          storageProvider: item.storageProvider,
          uploadedAt: item.uploadedAt,
        })),
      },
      status: "draft",
    };
  };

  const persistReportDraftToBackend = async (
    nextEvidenceItems = attachedFiles
  ) => {
    setIsPersistingReport(true);
    setEvidenceError(null);

    try {
      const payload = buildReportPayload(nextEvidenceItems);
      const savedReport = reportDraft?.reportId
        ? await updateReport(reportDraft.reportId, payload)
        : await createReport(payload);

      const activeEvidenceIds = nextEvidenceItems
        .map((item) => item.backendEvidenceId)
        .filter((item): item is string => Boolean(item));

      return mergeDraft({
        reportId: savedReport._id,
        title: reportDraft?.title || payload.context || "",
        date: reportDraft?.date || "",
        location: reportDraft?.location || "",
        summary: payload.originalNarrative ?? "",
        structuredFields: payload.structuredFields,
        incidentType: savedReport.incidentType ?? reportDraft?.incidentType,
        incidentCategory: reportDraft?.incidentCategory,
        topic: reportDraft?.topic,
        starterPrompt: reportDraft?.starterPrompt,
        evidenceIds: [
          ...new Set([
            ...(reportDraft?.evidenceIds ?? []),
            ...activeEvidenceIds,
          ]),
        ],
      });
    } catch (error) {
      if (error instanceof ConsentRequiredError) {
        setPendingConsentRequirement(error.requirement);
        throw error;
      }

      setEvidenceError(
        error instanceof Error
          ? error.message
          : "Report draft could not be saved."
      );
      throw error;
    } finally {
      setIsPersistingReport(false);
    }
  };

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
      const allowCloudSync =
        options?.forceCloudSync || currentConsent.cloud_sync;

      if (!allowCloudSync && !options) {
        setPendingFiles(fileList);
        setPendingConsentRequirement(consentRequirements.cloudEvidence);
        return;
      }

      const syncedReportDraft = allowCloudSync
        ? await persistReportDraftToBackend()
        : reportDraft;
      const syncedReportId = syncedReportDraft?.reportId;

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
            mimeType: file.type || "application/octet-stream",
            sizeBytes: file.size,
            previewUrl:
              file.type.startsWith("image/") || file.type.startsWith("video/")
                ? URL.createObjectURL(file)
                : undefined,
            status: (allowCloudSync
              ? "synced"
              : "local-only") as EvidenceItem["status"],
          };

          if (!allowCloudSync || !syncedReportId) {
            return baseItem;
          }

          const upload = await requestEvidenceUploadUrl({
            reportId: syncedReportId,
            type: inferEvidenceKind(file),
            fileName: file.name,
            mimeType: file.type || "application/octet-stream",
            size: file.size,
          });
          const reservedEvidenceId = resolveEvidenceId(upload.evidence);
          if (!reservedEvidenceId) {
            throw new Error("Evidence reservation did not return an id.");
          }
          const completedEvidence = await completeEvidenceUpload({
            evidenceId: reservedEvidenceId,
            file,
            sha256Hash: baseItem.sha256Hash,
          });
          const completedEvidenceId =
            resolveEvidenceId(completedEvidence) || reservedEvidenceId;
          const detailPatch = await loadEvidenceDetailPatch(
            completedEvidenceId,
            baseItem
          ).catch((error) => ({
            detailError:
              error instanceof Error
                ? error.message
                : "Evidence details could not be loaded.",
          }));

          return {
            ...baseItem,
            ...detailPatch,
            backendEvidenceId: completedEvidenceId,
            backendStatus: completedEvidence.status,
            storageProvider: completedEvidence.storageProvider,
            mimeType: completedEvidence.mimeType,
            sizeBytes: completedEvidence.size,
            deletionRequestedAt: completedEvidence.deletionRequestedAt,
            deletedAt: completedEvidence.deletedAt,
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
      mergeDraft({
        evidenceIds: [
          ...new Set([
            ...(syncedReportDraft?.evidenceIds ?? []),
            ...nextItems
              .map((item) => item.backendEvidenceId)
              .filter((item): item is string => Boolean(item)),
          ]),
        ],
      });
      if (allowCloudSync) {
        await persistReportDraftToBackend([...attachedFiles, ...nextItems]);
      }
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
          createAuditEntry(
            "removed",
            `${itemToRemove.name} removed from draft.`
          ),
        ]);
      }

      return currentItems.filter((item) => item.id !== id);
    });
  };

  const refreshEvidenceDetails = async (item: EvidenceItem) => {
    if (!item.backendEvidenceId) {
      setEvidenceError(
        "This item is local-only. Backend metadata is not available."
      );
      return;
    }

    setLoadingEvidenceDetailId(item.id);
    setEvidenceError(null);

    try {
      const patch = await loadEvidenceDetailPatch(item.backendEvidenceId, item);

      setAttachedFiles((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, ...patch }
            : currentItem
        )
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Evidence metadata could not be loaded.";

      setAttachedFiles((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, detailError: message }
            : currentItem
        )
      );
      setEvidenceError(message);
    } finally {
      setLoadingEvidenceDetailId(null);
    }
  };

  const updateVerificationInput = (itemId: string, value: string) => {
    setVerificationInputs((currentInputs) => ({
      ...currentInputs,
      [itemId]: value,
    }));
  };

  const handleVerifyEvidenceHash = async (item: EvidenceItem) => {
    if (!item.backendEvidenceId) {
      setEvidenceError(
        "Upload this evidence before verifying it with the backend."
      );
      return;
    }

    const providedHash = (
      verificationInputs[item.id] ?? item.sha256Hash
    ).trim();

    if (!/^[a-f\d]{64}$/i.test(providedHash)) {
      setEvidenceError(
        "Enter a valid 64-character SHA-256 hash before verifying."
      );
      return;
    }

    setVerifyingEvidenceId(item.id);
    setEvidenceError(null);

    try {
      const verification = await verifyEvidenceHash(
        item.backendEvidenceId,
        providedHash
      );
      const auditChain = await getEvidenceAuditChain(item.backendEvidenceId);

      setAttachedFiles((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? {
                ...currentItem,
                verification,
                auditChain,
                detailError: undefined,
              }
            : currentItem
        )
      );
    } catch (error) {
      setEvidenceError(
        error instanceof Error
          ? error.message
          : "Evidence hash could not be verified."
      );
    } finally {
      setVerifyingEvidenceId(null);
    }
  };

  const handleDeleteEvidence = async (item: EvidenceItem) => {
    if (!item.backendEvidenceId) {
      removeAttachment(item.id);
      return;
    }

    const confirmed = window.confirm(
      `Delete ${item.name} from the evidence vault? This will keep a local deletion record in the chain view.`
    );

    if (!confirmed) {
      return;
    }

    setDeletingEvidenceId(item.id);
    setEvidenceError(null);

    try {
      await deleteEvidence(item.backendEvidenceId);
      const deletedAt = new Date().toISOString();
      const [metadata, auditChain] = await Promise.all([
        getEvidenceMetadata(item.backendEvidenceId).catch(
          () => item.metadata ?? null
        ),
        getEvidenceAuditChain(item.backendEvidenceId).catch(
          () => item.auditChain ?? []
        ),
      ]);

      setAttachedFiles((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? {
                ...currentItem,
                metadata,
                auditChain,
                status: "deleted",
                backendStatus: metadata?.status ?? "deleted",
                deletionRequestedAt:
                  metadata?.deletionRequestedAt ??
                  currentItem.deletionRequestedAt ??
                  deletedAt,
                deletedAt: metadata?.deletedAt ?? deletedAt,
                detailError: undefined,
              }
            : currentItem
        )
      );
      setAuditTrail((currentTrail) => [
        ...currentTrail,
        createAuditEntry(
          "removed",
          `${item.name} deleted from the evidence vault.`
        ),
      ]);
    } catch (error) {
      setEvidenceError(
        error instanceof Error
          ? error.message
          : "Evidence could not be deleted."
      );
    } finally {
      setDeletingEvidenceId(null);
    }
  };

  const saveDraft = async () => {
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
          ({
            backendEvidenceId,
            name,
            sizeLabel,
            kind,
            sha256Hash,
            uploadedAt,
            backendStatus,
            storageProvider,
            mimeType,
            sizeBytes,
            deletionRequestedAt,
            deletedAt,
          }) => ({
            backendEvidenceId,
            name,
            sizeLabel,
            kind,
            sha256Hash,
            uploadedAt,
            backendStatus,
            storageProvider,
            mimeType,
            sizeBytes,
            deletionRequestedAt,
            deletedAt,
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

    try {
      await persistReportDraftToBackend();
    } catch {
      // Local draft is already saved. Consent and API errors are surfaced by the helper.
    }
  };

  const handleContinue = async () => {
    try {
      await persistReportDraftToBackend();
      router.push("/dashboard?view=reportsubmissionreview");
    } catch {
      // Stay on this page so the consent card or API error can be handled.
    }
  };

  const handleTranscribeEvidence = async (item: EvidenceItem) => {
    if (!item.backendEvidenceId || !reportDraft?.reportId) {
      setEvidenceError(
        "Upload the audio evidence to the vault before transcribing it."
      );
      return;
    }

    setIsTranscribingEvidenceId(item.id);
    setEvidenceError(null);

    try {
      const transcriptResult = await transcribeEvidence(
        item.backendEvidenceId,
        {
          language: "en",
          reportId: reportDraft.reportId,
          saveTranscript: true,
          useAsNarrative: false,
        }
      );

      setAttachedFiles((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? {
                ...currentItem,
                transcript: transcriptResult.transcript,
                transcriptionStatus: "available",
              }
            : currentItem
        )
      );
      await refreshEvidenceDetails(item);
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
        backendEvidenceId: item.backendEvidenceId,
        name: item.name,
        kind: item.kind,
        sizeLabel: item.sizeLabel,
        mimeType: item.mimeType,
        sizeBytes: item.sizeBytes,
        sha256Hash: item.sha256Hash,
        uploadedAt: item.uploadedAt,
        status: item.status,
        backendStatus: item.backendStatus,
        storageProvider: item.storageProvider,
        deletionRequestedAt: item.deletionRequestedAt,
        deletedAt: item.deletedAt,
        verification: item.verification,
        auditChain: item.auditChain,
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

  const activeAttachedFiles = attachedFiles.filter(
    (item) => item.status !== "deleted" && !item.deletedAt
  );
  const primaryEvidenceItems = activeAttachedFiles.slice(0, 3);
  const secondaryEvidenceItems = activeAttachedFiles.slice(3);
  const readyFileCount = activeAttachedFiles.length;
  const isEvidenceItemBusy = (item: EvidenceItem) =>
    loadingEvidenceDetailId === item.id ||
    verifyingEvidenceId === item.id ||
    deletingEvidenceId === item.id ||
    isTranscribingEvidenceId === item.id;

  return (
    <div className="px-2 pb-8 pt-2 sm:px-4 sm:pb-10 sm:pt-4">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=reportsubmissionsupport"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            Triage Explanation
          </Link>
          <Link
            href="/dashboard?view=reportsubmissionhistory"
            aria-label="View report history"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#9ba8bb] transition hover:text-[#74879e]"
          >
            <IconClock size={12} />
          </Link>
        </div>

        <main className="mx-auto flex w-full max-w-[1136px] flex-col gap-8 px-0 pt-4">
          <section className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:p-6">
            {evidenceError ? (
              <div className="mb-4 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[12px] text-[#b45353]">
                <span className="inline-flex items-center gap-1.5">
                  <IconAlertCircle size={13} />
                  {evidenceError}
                </span>
              </div>
            ) : null}
            <div className="flex items-center justify-between gap-4">
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold leading-7 text-[#1E293B]">
                <span className="inline-flex h-7 w-7 items-center justify-center text-[#FF8F00]">
                  <IconBoltFilled size={18} />
                </span>
                Incident Description
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#94A3B8]">
                Required
              </span>
            </div>

            <div className="relative mt-4">
              <textarea
                rows={5}
                placeholder="Describe the incident details thoroughly. Include time, location, and involved parties..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="min-h-[160px] w-full resize-none rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-4 pr-32 text-base leading-[1.62] text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
              />
              <button
                type="button"
                onClick={() => audioInputRef.current?.click()}
                className="absolute bottom-4 right-4 inline-flex h-[42px] items-center gap-2 rounded-[8px] border border-[#E2E8F0] bg-white px-3 text-sm font-medium text-[#475569] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-[#F8FAFC]"
              >
                <IconMicrophone size={16} />
                Dictate
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold leading-8 text-[#0F172A]">
                  Attached Files
                </h2>
                <p className="mt-1 text-base leading-6 text-[#64748B]">
                  Upload evidence to support your report.
                </p>
              </div>
              <span className="inline-flex h-[30px] w-fit items-center rounded-full border border-[#FED7AA] bg-[#FFEDD5] px-3 text-sm font-semibold text-[#C2410C]">
                {readyFileCount} Files Ready
              </span>
            </div>

            {primaryEvidenceItems.length ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {primaryEvidenceItems.map((item) => (
                  <EvidenceVaultCard
                    key={item.id}
                    item={item}
                    onRemove={handleDeleteEvidence}
                    onRefresh={refreshEvidenceDetails}
                    onVerify={handleVerifyEvidenceHash}
                    onTranscribe={handleTranscribeEvidence}
                    isBusy={isEvidenceItemBusy(item)}
                  />
                ))}
              </div>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-2">
              {secondaryEvidenceItems.map((item) => (
                <EvidenceVaultCard
                  key={item.id}
                  item={item}
                  onRemove={handleDeleteEvidence}
                  onRefresh={refreshEvidenceDetails}
                  onVerify={handleVerifyEvidenceHash}
                  onTranscribe={handleTranscribeEvidence}
                  isBusy={isEvidenceItemBusy(item)}
                />
              ))}

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
                className="grid min-h-[232px] cursor-pointer place-items-center rounded-[24px] border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-10 text-center transition hover:border-[#FDBA74] hover:bg-white"
              >
                <div>
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#FF8F00] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <IconFolderFilled size={26} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-[#334155]">
                    Drag & Drop or Click
                  </h3>
                  <p className="mx-auto mt-1 max-w-[220px] text-xs leading-4 text-[#64748B]">
                    Support for images, video, audio, and PDF documents.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="flex min-h-[66px] items-center gap-4 rounded-full border border-[#F1F5F9] bg-white py-2 pl-6 pr-2 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <input
              type="text"
              placeholder="Type a message to support..."
              value={supportMessage}
              onChange={(event) => setSupportMessage(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-base text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
            />
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => audioInputRef.current?.click()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#94A3B8] transition hover:bg-[#F8FAFC]"
                aria-label="Dictate support message"
              >
                <IconMicrophone size={20} />
              </button>
              <button
                type="button"
                onClick={() => {
                  void saveDraft();
                }}
                disabled={isPersistingReport}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8F00] text-white shadow-[0_0_15px_rgba(251,140,0,0.3)]"
                aria-label="Send support message"
              >
                <IconChevronRight size={22} />
              </button>
            </div>
          </section>

          <footer className="border-t border-[#E2E8F0] bg-white/80 px-4 py-4 backdrop-blur-md sm:px-10 lg:px-[208px]">
            <div className="mx-auto flex max-w-[720px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => {
                  void saveDraft();
                }}
                disabled={isPersistingReport}
                className="inline-flex h-9 items-center justify-center rounded-[8px] px-4 text-sm font-medium text-[#64748B] transition hover:bg-[#F8FAFC]"
              >
                {isPersistingReport ? "Saving..." : "Save as Draft"}
              </button>
              {draftSavedAt ? (
                <span className="text-center text-xs text-[#94A3B8]">
                  Draft saved at {draftSavedAt}
                </span>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  void handleContinue();
                }}
                disabled={isPersistingReport || isUploadingEvidence}
                className="inline-flex h-12 min-w-[167px] items-center justify-center rounded-[16px] bg-[#FF8F00] px-12 text-base font-semibold text-white shadow-[0_10px_15px_-3px_rgba(249,115,22,0.3),0_4px_6px_-4px_rgba(249,115,22,0.3)]"
              >
                {isPersistingReport ? "Saving..." : "Continue"}
              </button>
            </div>
          </footer>

          {pendingConsentRequirement ? (
            <ConsentRequiredCard
              requirement={pendingConsentRequirement as ConsentRequirement}
              isSubmitting={isGrantingConsent}
              onAllow={() => {
                void (async () => {
                  const requirement = pendingConsentRequirement;

                  if (!requirement) {
                    return;
                  }

                  setIsGrantingConsent(true);

                  try {
                    await grantConsent(
                      getConsentGrantFlags(requirement),
                      requirement.source
                    );

                    if (pendingFiles.length) {
                      await attachFiles(pendingFiles, {
                        forceCloudSync: true,
                      });
                    } else if (pendingTranscriptionItem) {
                      await handleTranscribeEvidence(pendingTranscriptionItem);
                    } else {
                      await persistReportDraftToBackend();
                    }

                    setPendingFiles([]);
                    setPendingTranscriptionItem(null);
                    setPendingConsentRequirement(null);
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
        </main>
      </div>
    </div>
  );
}

export { ReportSubmissionEvidencePage };
