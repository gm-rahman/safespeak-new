"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  IconAlertCircle,
  IconArrowRight,
  IconChevronLeft,
  IconLoader2,
  IconMicrophone,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import sendIcon from "@/assets/sendIcon.svg?url";
import { ConsentRequiredCard } from "@/components/consent/consent-required-card";
import { AssistantInteraction } from "@/components/dashboard/assistant-interaction";
import {
  VoiceAvatarAnimation,
  type VoiceAvatarState,
} from "@/components/dashboard/voice-avatar-animation";
import { useConsentGate } from "@/hooks/use-consent-gate";
import { ApiRequestError } from "@/lib/api";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import {
  type AssistantConversationMessage,
  type AssistantTimeline,
  type LegalAwareness,
  sendTimelineAssistantMessage,
} from "@/lib/assistant-conversation";
import {
  clearAssistantConversationDraft,
  getAssistantConversationDraft,
  saveAssistantConversationDraft,
} from "@/lib/assistant-draft";
import {
  clearAssistantTriageSource,
  saveAssistantTriageSource,
} from "@/lib/assistant-triage";
import { consentRequirements } from "@/lib/consent";
import {
  type ConversationFlowTriage,
  appendConversationFlowMessage,
  createConversationFlowSession,
} from "@/lib/conversation-flow";
import {
  type DashboardCardFlowId,
  getDashboardActionHref,
  getDashboardAssistantTopicChips,
  getDashboardCardFlow,
} from "@/lib/dashboard-card-flows";
import { triggerQuickExit } from "@/lib/safety";
import {
  createAssistantVoiceAudioUrl,
  synthesizeAssistantVoice,
  transcribeAssistantVoice,
} from "@/lib/voice-transcription";

import { interFont } from "./dashboard-shared";

const emptyTimeline: AssistantTimeline = {};

const harmfulActivityPatterns = [
  /\b(violence|violent|abuse|assault|attacked|attack|hit|slap|punched|kick|kicked|choke|threat|threatened)\b/i,
  /\b(harass|harassment|bullied|bullying|stalk|stalking|unsafe|scared|fear)\b/i,
  /\b(racist|racism|discrimination|hate|hate crime|racial)\b/i,
  /\b(scam|fraud|phishing|blackmail|extortion|stole|stolen|robbed|theft)\b/i,
  /\b(grabbed|grab|pulled|pull)\b.{0,24}\b(hijab|hijub|headscarf)\b/i,
  /\b(hijab|hijub|headscarf)\b.{0,24}\b(grabbed|grab|pulled|pull)\b/i,
];

function buildAssistantBubbleContent(
  assistantMessage: string,
  nextQuestion: string
): string {
  const trimmedAssistantMessage = assistantMessage.trim();
  const trimmedNextQuestion = nextQuestion.trim();

  if (!trimmedAssistantMessage) {
    return trimmedNextQuestion;
  }

  if (!trimmedNextQuestion) {
    return trimmedAssistantMessage;
  }

  if (
    trimmedAssistantMessage.toLowerCase() === trimmedNextQuestion.toLowerCase()
  ) {
    return trimmedAssistantMessage;
  }

  return `${trimmedAssistantMessage} ${trimmedNextQuestion}`;
}

function detectHarmfulActivity(input: {
  incidentCategory?: AssistantIncidentCategory;
  timeline: AssistantTimeline;
  conversation: AssistantConversationMessage[];
}): boolean {
  if (
    input.incidentCategory === "domestic_violence" ||
    input.incidentCategory === "racial_abuse" ||
    input.incidentCategory === "cyber_scam"
  ) {
    return true;
  }

  const combinedText = [
    ...input.conversation.map((message) => message.content),
    ...Object.values(input.timeline),
  ]
    .join(" ")
    .trim();

  if (!combinedText) {
    return false;
  }

  return harmfulActivityPatterns.some((pattern) => pattern.test(combinedText));
}

function isActionableConversationTriage(response: {
  transition: { offerTriage: boolean };
  triage?: ConversationFlowTriage | null;
}): boolean {
  const triage = response.triage;

  return Boolean(
    response.transition.offerTriage &&
    triage &&
    triage.likelyCategory !== "general_support" &&
    triage.confidenceScore >= 0.45 &&
    triage.canProceedToRecommendations
  );
}

function getHumanPacedAssistantDelayMs(text: string): number {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return Math.min(1800, Math.max(650, 520 + wordCount * 42));
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function getAssistantDisplayContent(message: AssistantConversationMessage) {
  if (message.role !== "assistant") {
    return message.content;
  }

  const cleanedContent = [
    /\s*This information is for general awareness(?: only)? and does not constitute legal advice\.?/gi,
    /\s*This information is for general awareness only\.?/gi,
    /\s*This is information only,?\s*not legal advice\.?/gi,
    /\s*This is informational,?\s*not legal advice\.?/gi,
    /\s*It does not constitute legal advice\.?/gi,
  ]
    .reduce((content, pattern) => content.replace(pattern, ""), message.content)
    .replace(/\s+([?.!,])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();

  return cleanedContent || "I'm here with you.";
}

type RecordingErrorCode =
  | "audio-capture"
  | "network"
  | "no-speech"
  | "not-allowed"
  | "service-not-allowed";

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

type SpeechRecognitionAlternativeLike = {
  transcript: string;
};

type SpeechRecognitionResultLike = {
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternativeLike;
};

type SpeechRecognitionResultListLike = {
  length: number;
  [index: number]: SpeechRecognitionResultLike;
};

type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: SpeechRecognitionResultListLike;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

type SpeechWindow = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

const VOICE_RECORDING_TIMEOUT_MS = 8000;
const MAX_VOICE_RESTART_ATTEMPTS = 10;

function getRecordingErrorMessage(
  errorCode: RecordingErrorCode,
  t: (key: string) => string
): string {
  switch (errorCode) {
    case "not-allowed":
    case "service-not-allowed":
      return t("dashboard.assistant.speechErrors.permissionDenied");
    case "audio-capture":
      return t("dashboard.assistant.speechErrors.noMicrophone");
    case "no-speech":
      return t("dashboard.assistant.speechErrors.noSpeech");
    case "network":
      return t("dashboard.assistant.speechErrors.network");
    default:
      return t("dashboard.assistant.speechErrors.startFailed");
  }
}

function getPreferredRecordingMimeType(): string | undefined {
  const supportedTypes = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"];

  if (typeof MediaRecorder.isTypeSupported !== "function") {
    return undefined;
  }

  return supportedTypes.find((mimeType) =>
    MediaRecorder.isTypeSupported(mimeType)
  );
}

function isNoSpeechTranscriptionError(error: unknown): boolean {
  if (!(error instanceof ApiRequestError)) {
    return false;
  }

  const message = error.message.toLowerCase();

  return (
    error.status === 422 ||
    message.includes("no speech") ||
    message.includes("empty") ||
    message.includes("too short")
  );
}

function getContinueReportSubmissionHref(
  incidentCategory?: AssistantIncidentCategory
) {
  if (incidentCategory) {
    return {
      pathname: "/dashboard",
      query: {
        view: "reportsubmissionsupport",
        category: incidentCategory,
      },
    } as const;
  }

  return {
    pathname: "/dashboard",
    query: {
      view: "reportsubmissionsupport",
    },
  } as const;
}

function getAssistantEntryHref(
  initialTopic?: DashboardCardFlowId,
  initialCategory?: AssistantIncidentCategory
) {
  return {
    pathname: "/dashboard",
    query: {
      view: "assistant",
      topic: initialTopic,
      category: initialCategory,
    },
  } as const;
}

function shouldUseNswLegalAwareness(
  topic?: DashboardCardFlowId,
  category?: AssistantIncidentCategory
) {
  return (
    topic === "racial_abuse" ||
    topic === "migrant_challenges" ||
    category === "racial_abuse" ||
    category === "migrant_challenges"
  );
}

const staticNswLegalAwareness: LegalAwareness = {
  jurisdiction: "NSW",
  topic: "racial_abuse",
  informationOnly: true,
  sourceStatus: "insufficient_approved_sources",
  keyPoints: [
    "Keep a dated record of what happened if it is safe.",
    "NSW and Commonwealth pathways can both be relevant for racial abuse or discrimination concerns.",
    "Online abuse may also involve platform reporting, eSafety information, and immediate safety planning.",
  ],
  pathwayCards: [
    {
      title: "NSW discrimination pathway",
      body: "SafeSpeak can help organize details for Anti-Discrimination NSW style complaint information once approved sources are available.",
      sourceRequirement:
        "Detailed legal explanations require approved NSW sources.",
    },
    {
      title: "Commonwealth pathway",
      body: "Some racial discrimination concerns may involve Australian Human Rights Commission information.",
      sourceRequirement:
        "Citations appear only from approved Commonwealth sources.",
    },
    {
      title: "Online abuse pathway",
      body: "For online incidents, evidence collection, platform reports, and eSafety information may be relevant.",
      sourceRequirement: "Use approved eSafety sources before public citation.",
    },
  ],
  citationPolicy:
    "No citations are shown until approved, current, legally reviewed sources are available.",
};

function NswLegalAwarenessPanel({
  legalAwareness,
  compact = false,
}: {
  legalAwareness: LegalAwareness;
  compact?: boolean;
}) {
  return (
    <section
      className={`rounded-[20px] border border-[#d6e2f0] bg-[#fbfdff] ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3f7de0]">
            NSW legal awareness
          </p>
          <p className="mt-1 text-[12px] leading-[1.55] text-[#5f6f86]">
            Information only, not legal advice. SafeSpeak will cite only
            approved, current, legally reviewed sources.
          </p>
        </div>
        <span className="rounded-full border border-[#d6e2f0] bg-white px-3 py-1 text-[10px] font-semibold text-[#51657f]">
          {legalAwareness.sourceStatus === "approved_sources_used"
            ? "Approved sources available"
            : "Sources pending approval"}
        </span>
      </div>

      {legalAwareness.keyPoints.length > 0 ? (
        <ul className="mt-3 space-y-1.5 text-[10px] leading-[1.55] text-[#617289]">
          {legalAwareness.keyPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#82aee8]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {legalAwareness.pathwayCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[16px] border border-[#e2e9f3] bg-white p-3"
          >
            <h4 className="text-[12px] font-bold text-[#1f2a3a]">
              {card.title}
            </h4>
            <p className="mt-1 text-[10px] leading-[1.55] text-[#697b92]">
              {card.body}
            </p>
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#9aa8ba]">
              {card.sourceRequirement}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function hasActiveAssistantDraftForScope(input: {
  topic?: DashboardCardFlowId;
  incidentCategory?: AssistantIncidentCategory;
}) {
  const draft = getAssistantConversationDraft({
    topic: input.topic,
    incidentCategory: input.incidentCategory,
  });

  if (!draft) {
    return false;
  }

  const hasUserMessage = draft.messages.some(
    (message) => message.role === "user"
  );
  const hasTimelineContent = Object.values(draft.timeline).some(
    (value) => value.trim().length > 0
  );

  return hasUserMessage || hasTimelineContent;
}

function SafeSpeakAssistantPage({
  isRecording = false,
  initialCategory,
  initialTopic,
}: {
  isRecording?: boolean;
  initialCategory?: AssistantIncidentCategory;
  initialTopic?: DashboardCardFlowId;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const [isCheckingDraft, setIsCheckingDraft] = useState(true);

  useEffect(() => {
    if (initialTopic || initialCategory) {
      if (
        hasActiveAssistantDraftForScope({
          topic: initialTopic,
          incidentCategory: initialCategory,
        })
      ) {
        const query = new URLSearchParams({
          view: "assistantconversation",
        });

        if (initialTopic) {
          query.set("topic", initialTopic);
        }

        if (initialCategory) {
          query.set("category", initialCategory);
        }

        router.replace(`/dashboard?${query.toString()}`);
        return;
      }

      setIsCheckingDraft(false);
      return;
    }

    if (!hasActiveAssistantDraftForScope({})) {
      setIsCheckingDraft(false);
      return;
    }

    router.replace("/dashboard?view=assistantconversation");
  }, [initialCategory, initialTopic, router]);

  const handleCancel = () => {
    clearAssistantConversationDraft({
      topic: initialTopic,
      incidentCategory: initialCategory,
    });
    clearAssistantTriageSource();
  };

  if (isCheckingDraft) {
    return null;
  }

  const assistantFlow = initialTopic
    ? getDashboardCardFlow(initialTopic)
    : null;
  const assistantTopicChips = getDashboardAssistantTopicChips();
  const startWithTopicHref = assistantFlow?.starterPrompt
    ? getDashboardActionHref(assistantFlow.id, "talk_with_assistant")
    : null;

  return (
    <div className="px-2 pb-28 pt-2 sm:px-4 sm:pb-32 sm:pt-4 lg:pb-24">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.assistant.timelineBuilder")}
          </Link>
          <Link
            href="/dashboard"
            onClick={handleCancel}
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <AssistantInteraction
          isRecording={isRecording}
          initialCategory={initialCategory}
          initialTopic={initialTopic}
          headlineClassName={`${interFont.className} mt-6 max-w-[460px] text-center text-[28px] font-semibold leading-[32px] tracking-[0] text-[#24364f] sm:text-[30px] sm:leading-[34px] xl:text-[32px] xl:leading-[36px]`}
        />

        {assistantFlow ? (
          <article className="bg-white/96 mx-auto -mt-[158px] w-full max-w-[1120px] rounded-[24px] border border-[#dce6f2] p-4 shadow-[0_16px_34px_rgba(15,23,42,0.08)] backdrop-blur sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3f7de0]">
                  {assistantFlow.title}
                </p>
                <p className="mt-2 text-sm leading-[1.65] text-[#5f6f86]">
                  {assistantFlow.starterPrompt ??
                    "Choose how you want to begin. Nothing is submitted until you decide to continue."}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {assistantFlow.disclaimers.map((disclaimer) => (
                    <span
                      key={disclaimer}
                      className="rounded-full border border-[#d6e2f0] bg-[#f8fbff] px-3 py-1.5 text-[10px] font-semibold text-[#51657f]"
                    >
                      {disclaimer}
                    </span>
                  ))}
                </div>
              </div>

              {startWithTopicHref ? (
                <Link
                  href={startWithTopicHref}
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.25)] transition hover:bg-[#0b528d]"
                >
                  Start with this topic
                  <IconArrowRight size={14} className="ml-1.5" />
                </Link>
              ) : null}
            </div>

            {assistantFlow.nextActions.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3">
                {assistantFlow.nextActions.map((action) => {
                  if (action.id === "quick_exit") {
                    return (
                      <button
                        key={action.id}
                        type="button"
                        onClick={() => triggerQuickExit()}
                        className="rounded-[18px] border border-[#f1d6d6] bg-[#fff7f7] p-3 text-left transition hover:border-[#eabcbc] hover:bg-[#fff2f2]"
                      >
                        <p className="text-[12px] font-bold text-[#1f2a3a]">
                          {action.label}
                        </p>
                        <p className="mt-1 text-[10px] leading-[1.55] text-[#7688a0]">
                          {action.description}
                        </p>
                      </button>
                    );
                  }

                  const actionHref = getDashboardActionHref(
                    assistantFlow.id,
                    action.id
                  );

                  if (!actionHref) {
                    return null;
                  }

                  return (
                    <Link
                      key={action.id}
                      href={actionHref}
                      className="rounded-[18px] border border-[#dce6f2] bg-[#fbfdff] p-3 text-left transition hover:border-[#c5d8ec] hover:bg-[#f7fbff]"
                    >
                      <p className="text-[12px] font-bold text-[#1f2a3a]">
                        {action.label}
                      </p>
                      <p className="mt-1 text-[10px] leading-[1.55] text-[#7688a0]">
                        {action.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            ) : null}

            {assistantFlow.id === "general_assistant" ? (
              <div className="mt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7d8ea5]">
                  Choose a topic
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {assistantTopicChips.map((topicChip) => {
                    const resolvedChipHref = topicChip.starterPrompt
                      ? getDashboardActionHref(
                          topicChip.id,
                          "talk_with_assistant"
                        )
                      : null;

                    if (!resolvedChipHref) {
                      return null;
                    }

                    return (
                      <Link
                        key={topicChip.id}
                        href={resolvedChipHref}
                        className="rounded-full border border-[#d6e2f0] bg-white px-3 py-2 text-[11px] font-semibold text-[#42566f] transition hover:border-[#bfd1e6] hover:bg-[#f8fbff]"
                      >
                        {topicChip.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {shouldUseNswLegalAwareness(initialTopic, initialCategory) ? (
              <div className="mt-4">
                <NswLegalAwarenessPanel
                  legalAwareness={{
                    ...staticNswLegalAwareness,
                    topic:
                      initialTopic === "migrant_challenges" ||
                      initialCategory === "migrant_challenges"
                        ? "migrant_challenges"
                        : "racial_abuse",
                  }}
                />
              </div>
            ) : null}
          </article>
        ) : null}
      </div>
    </div>
  );
}

function SafeSpeakAssistantConversationPage({
  initialMessage,
  initialPrefillMessage,
  initialCategory,
  initialTopic,
  startVoiceMode = false,
}: {
  initialMessage?: string;
  initialPrefillMessage?: string;
  initialCategory?: AssistantIncidentCategory;
  initialTopic?: DashboardCardFlowId;
  startVoiceMode?: boolean;
}) {
  const { t, i18n } = useTranslation();
  type ConversationUiMessage = AssistantConversationMessage & {
    responseMeta?: {
      disclaimer?: string;
      citations?: Array<{
        sourceId?: string;
        title: string;
        publisher?: string;
        url?: string;
        jurisdiction?: string;
        sourceCategory?: string;
        sourceType?: string;
        topic?: string;
        sectionRef?: string;
        lastUpdated?: string;
      }>;
      confidence?: string;
      reviewStatus?: string;
      ragUnavailable?: boolean;
      pendingHumanReview?: boolean;
      legalAwareness?: LegalAwareness;
    };
  };
  const seededMessage = initialMessage?.trim();
  const seededPrefillMessage = initialPrefillMessage?.trim();
  const starterAssistantPrompts = [
    t("dashboard.assistant.conversation.botPromptWho"),
    "I'm helping you structure your report.",
    "Te ayudo a estructurar tu reporte.",
  ];
  const existingDraft = getAssistantConversationDraft({
    topic: initialTopic,
    incidentCategory: initialCategory,
  });
  const initialDraftMessages = existingDraft?.messages.filter(
    (message, index) =>
      !(
        index === 0 &&
        message.role === "assistant" &&
        starterAssistantPrompts.includes(message.content.trim())
      )
  );
  const initialConversationMessages =
    initialDraftMessages && initialDraftMessages.length > 0
      ? initialDraftMessages
      : ([
          seededMessage
            ? {
                role: "user" as const,
                content: seededMessage,
              }
            : null,
        ].filter(Boolean) as AssistantConversationMessage[]);
  const [input, setInput] = useState(seededPrefillMessage ?? "");
  const [conversationSessionId, setConversationSessionId] = useState<
    string | null
  >(existingDraft?.conversationSessionId ?? null);
  const [timeline, setTimeline] = useState<AssistantTimeline>(
    existingDraft?.timeline ?? emptyTimeline
  );
  const [messages, setMessages] = useState<ConversationUiMessage[]>(
    () => initialConversationMessages
  );
  const [isSending, setIsSending] = useState(
    Boolean(seededMessage) && !existingDraft
  );
  const [error, setError] = useState<string | null>(null);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [isVoiceSessionActive, setIsVoiceSessionActive] = useState(false);
  const [isRecordingActive, setIsRecordingActive] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isGeneratingSpeech, setIsGeneratingSpeech] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechPlaybackError, setSpeechPlaybackError] = useState<string | null>(
    null
  );
  const [replayVoiceText, setReplayVoiceText] = useState<string | null>(null);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [voiceAvatarState, setVoiceAvatarState] =
    useState<VoiceAvatarState>("idle");
  const {
    pendingConsentRequirement,
    isGrantingConsent,
    captureConsentError,
    clearPendingConsent,
    grantPendingConsent,
    requireConsent,
  } = useConsentGate();
  const hasSentInitialRef = useRef(false);
  const hasStartedInitialVoiceModeRef = useRef(false);
  const latestMessagesRef = useRef(messages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const pendingAssistantRequestRef = useRef<{
    message: string;
    conversation: AssistantConversationMessage[];
    speakResponse?: boolean;
    continueVoiceSession?: boolean;
  } | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const recordingStreamRef = useRef<MediaStream | null>(null);
  const shouldProcessRecordingRef = useRef(false);
  const voiceSessionActiveRef = useRef(false);
  const shouldContinueAfterPlaybackRef = useRef(false);
  const autoStopRecordingTimerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const restartListeningTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const startVoiceRecordingRef = useRef<() => Promise<boolean>>(
    async () => false
  );
  const liveRecognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const liveFinalTranscriptRef = useRef("");
  const speechAudioRef = useRef<HTMLAudioElement | null>(null);
  const speechAudioUrlRef = useRef<string | null>(null);
  const speechPlaybackActiveRef = useRef(false);
  const pendingSpeechRevealRef = useRef<(() => void) | null>(null);
  const [timelineFieldOrder, setTimelineFieldOrder] = useState<string[]>(
    existingDraft?.timelineFieldOrder ?? []
  );
  const [showTriageCta, setShowTriageCta] = useState(
    Boolean(existingDraft?.triageCtaVisible)
  );
  const continueReportSubmissionHref =
    getContinueReportSubmissionHref(initialCategory);
  const assistantEntryHref = getAssistantEntryHref(
    initialTopic,
    initialCategory
  );
  const useNswLegalAwareness = shouldUseNswLegalAwareness(
    initialTopic,
    initialCategory
  );
  const transcriptionLanguage = useMemo(() => {
    return i18n.resolvedLanguage === "es" || i18n.language === "es"
      ? "es"
      : "en";
  }, [i18n.language, i18n.resolvedLanguage]);
  const livePreviewLanguage =
    transcriptionLanguage === "es" ? "es-ES" : "en-US";

  useEffect(() => {
    latestMessagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (isVoiceSessionActive) {
      voiceSessionActiveRef.current = true;
    }
  }, [isVoiceSessionActive]);

  const clearAutoStopRecordingTimer = useCallback(() => {
    if (autoStopRecordingTimerRef.current) {
      clearTimeout(autoStopRecordingTimerRef.current);
      autoStopRecordingTimerRef.current = null;
    }
  }, []);

  const clearRestartListeningTimer = useCallback(() => {
    if (restartListeningTimerRef.current) {
      clearTimeout(restartListeningTimerRef.current);
      restartListeningTimerRef.current = null;
    }
  }, []);

  const cleanupRecording = useCallback(() => {
    clearAutoStopRecordingTimer();
    recordingStreamRef.current?.getTracks().forEach((track) => track.stop());
    recordingStreamRef.current = null;
    mediaRecorderRef.current = null;
  }, [clearAutoStopRecordingTimer]);

  const cleanupSpeechAudio = useCallback(() => {
    speechAudioRef.current?.pause();
    speechAudioRef.current = null;

    if (speechAudioUrlRef.current) {
      URL.revokeObjectURL(speechAudioUrlRef.current);
      speechAudioUrlRef.current = null;
    }
  }, []);

  const revealPendingSpeechResponse = useCallback(() => {
    const reveal = pendingSpeechRevealRef.current;
    pendingSpeechRevealRef.current = null;
    reveal?.();
  }, []);

  const stopAssistantSpeech = useCallback(() => {
    speechPlaybackActiveRef.current = false;
    cleanupSpeechAudio();
    revealPendingSpeechResponse();
    setIsSpeaking(false);
    setIsGeneratingSpeech(false);
    setVoiceAvatarState("idle");
  }, [cleanupSpeechAudio, revealPendingSpeechResponse]);

  const scheduleNextVoiceTurn = useCallback(
    (attempt = 0) => {
      clearRestartListeningTimer();

      if (!voiceSessionActiveRef.current) {
        return;
      }

      // Voice state: assistant finished and is preparing to listen again.
      setVoiceAvatarState("listening");
      restartListeningTimerRef.current = setTimeout(
        () => {
          if (!voiceSessionActiveRef.current) {
            return;
          }

          void startVoiceRecordingRef.current().then((started) => {
            if (started || !voiceSessionActiveRef.current) {
              return;
            }

            if (attempt < MAX_VOICE_RESTART_ATTEMPTS) {
              scheduleNextVoiceTurn(attempt + 1);
              return;
            }

            voiceSessionActiveRef.current = false;
            setIsVoiceSessionActive(false);
            setVoiceAvatarState("idle");
          });
        },
        attempt === 0 ? 350 : 250
      );
    },
    [clearRestartListeningTimer]
  );

  const playAssistantSpeech = useCallback(
    async (
      text: string,
      options: {
        continueVoiceSession?: boolean;
        revealAfterPlayback?: () => void;
      } = {}
    ) => {
      const speechText = text.trim();

      if (!speechText) {
        options.revealAfterPlayback?.();
        return;
      }

      cleanupSpeechAudio();
      if (options.revealAfterPlayback) {
        pendingSpeechRevealRef.current = options.revealAfterPlayback;
      }
      shouldContinueAfterPlaybackRef.current = Boolean(
        options.continueVoiceSession
      );
      setReplayVoiceText(speechText);
      setSpeechPlaybackError(null);
      setIsGeneratingSpeech(true);
      setIsSpeaking(false);
      speechPlaybackActiveRef.current = true;
      // Voice state: assistant response audio is being prepared or played.
      setVoiceAvatarState("aiSpeaking");

      try {
        const voice = await synthesizeAssistantVoice(
          speechText,
          transcriptionLanguage
        );
        const audioUrl = createAssistantVoiceAudioUrl(voice);
        const audio = new Audio(audioUrl);

        speechAudioUrlRef.current = audioUrl;
        speechAudioRef.current = audio;

        audio.onended = () => {
          const shouldContinue = shouldContinueAfterPlaybackRef.current;

          speechPlaybackActiveRef.current = false;
          shouldContinueAfterPlaybackRef.current = false;
          setIsSpeaking(false);
          revealPendingSpeechResponse();
          setVoiceAvatarState(shouldContinue ? "listening" : "idle");

          if (shouldContinue) {
            scheduleNextVoiceTurn();
          }
        };
        audio.onerror = () => {
          const shouldContinue = shouldContinueAfterPlaybackRef.current;

          speechPlaybackActiveRef.current = false;
          shouldContinueAfterPlaybackRef.current = false;
          setIsSpeaking(false);
          setSpeechPlaybackError(t("dashboard.assistant.voicePlaybackFailed"));
          revealPendingSpeechResponse();
          setVoiceAvatarState(shouldContinue ? "listening" : "idle");

          if (shouldContinue) {
            scheduleNextVoiceTurn();
          }
        };

        setIsGeneratingSpeech(false);
        setIsSpeaking(true);
        await audio.play();
      } catch (playbackError) {
        speechPlaybackActiveRef.current = false;
        setIsSpeaking(false);

        if (captureConsentError(playbackError)) {
          revealPendingSpeechResponse();
          setVoiceAvatarState("idle");
          setSpeechPlaybackError(null);
          return;
        }

        const autoplayBlocked =
          playbackError instanceof DOMException &&
          playbackError.name === "NotAllowedError";

        revealPendingSpeechResponse();

        if (!autoplayBlocked) {
          if (voiceSessionActiveRef.current) {
            scheduleNextVoiceTurn();
          } else {
            setVoiceAvatarState("idle");
          }
        } else {
          setVoiceAvatarState("idle");
        }

        setSpeechPlaybackError(
          autoplayBlocked
            ? t("dashboard.assistant.tapToPlayResponse")
            : playbackError instanceof Error
              ? playbackError.message
              : t("dashboard.assistant.voicePlaybackFailed")
        );
      } finally {
        setIsGeneratingSpeech(false);
      }
    },
    [
      captureConsentError,
      cleanupSpeechAudio,
      revealPendingSpeechResponse,
      scheduleNextVoiceTurn,
      t,
      transcriptionLanguage,
    ]
  );

  const stopLiveTranscriptPreview = useCallback(() => {
    if (!liveRecognitionRef.current) {
      return;
    }

    liveRecognitionRef.current.onend = null;
    liveRecognitionRef.current.onresult = null;
    liveRecognitionRef.current.onerror = null;

    try {
      liveRecognitionRef.current.stop();
    } catch {
      liveRecognitionRef.current.abort();
    }

    liveRecognitionRef.current = null;
  }, []);

  const startLiveTranscriptPreview = useCallback((): boolean => {
    const recognitionCtor =
      (window as SpeechWindow).SpeechRecognition ??
      (window as SpeechWindow).webkitSpeechRecognition;

    if (!recognitionCtor) {
      return false;
    }

    stopLiveTranscriptPreview();

    const recognition = new recognitionCtor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = livePreviewLanguage;
    recognition.maxAlternatives = 1;
    liveFinalTranscriptRef.current = "";

    recognition.onresult = (event) => {
      let finalChunk = "";
      let interimChunk = "";

      for (
        let index = event.resultIndex;
        index < event.results.length;
        index += 1
      ) {
        const result = event.results[index];
        const transcript = result[0]?.transcript?.trim();

        if (!transcript) {
          continue;
        }

        if (result.isFinal) {
          finalChunk = `${finalChunk} ${transcript}`.trim();
        } else {
          interimChunk = `${interimChunk} ${transcript}`.trim();
        }
      }

      if (finalChunk) {
        liveFinalTranscriptRef.current =
          `${liveFinalTranscriptRef.current} ${finalChunk}`.trim();
      }

      setLiveTranscript(
        [liveFinalTranscriptRef.current, interimChunk].filter(Boolean).join(" ")
      );

      if (voiceSessionActiveRef.current && (finalChunk || interimChunk)) {
        // Voice state: the live recognizer has detected user speech.
        setVoiceAvatarState("userSpeaking");
        clearAutoStopRecordingTimer();
        autoStopRecordingTimerRef.current = setTimeout(
          () => {
            const mediaRecorder = mediaRecorderRef.current;

            if (
              voiceSessionActiveRef.current &&
              mediaRecorder?.state === "recording"
            ) {
              stopLiveTranscriptPreview();
              mediaRecorder.stop();
            }
          },
          finalChunk ? 900 : 1800
        );
      }
    };

    recognition.onerror = () => {
      liveRecognitionRef.current = null;
      if (voiceSessionActiveRef.current) {
        clearAutoStopRecordingTimer();
        autoStopRecordingTimerRef.current = setTimeout(() => {
          const mediaRecorder = mediaRecorderRef.current;

          if (
            voiceSessionActiveRef.current &&
            mediaRecorder?.state === "recording"
          ) {
            mediaRecorder.stop();
          }
        }, 2500);
      }
    };

    recognition.onend = () => {
      if (liveRecognitionRef.current === recognition) {
        liveRecognitionRef.current = null;
      }
    };

    liveRecognitionRef.current = recognition;

    try {
      recognition.start();
      return true;
    } catch {
      liveRecognitionRef.current = null;
      return false;
    }
  }, [
    clearAutoStopRecordingTimer,
    livePreviewLanguage,
    stopLiveTranscriptPreview,
  ]);

  const conversationMessages = useMemo<AssistantConversationMessage[]>(
    () => messages.map(({ role, content }) => ({ role, content })),
    [messages]
  );

  useEffect(() => {
    saveAssistantTriageSource({
      conversationSessionId: conversationSessionId ?? undefined,
      conversation: conversationMessages,
      timeline,
      incidentCategory: initialCategory,
    });
    saveAssistantConversationDraft(
      {
        conversationSessionId: conversationSessionId ?? undefined,
        messages: conversationMessages,
        timeline,
        timelineFieldOrder,
        triageCtaVisible: showTriageCta,
        incidentCategory: initialCategory,
        topic: initialTopic,
      },
      {
        topic: initialTopic,
        incidentCategory: initialCategory,
      }
    );
  }, [
    conversationMessages,
    initialCategory,
    initialTopic,
    conversationSessionId,
    timeline,
    timelineFieldOrder,
    showTriageCta,
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, showTriageCta, isSending, error]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.classList.add("assistant-conversation-lock");
    document.documentElement.classList.add("assistant-conversation-lock");

    return () => {
      document.body.classList.remove("assistant-conversation-lock");
      document.documentElement.classList.remove("assistant-conversation-lock");
    };
  }, []);

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current?.state === "recording") {
        shouldProcessRecordingRef.current = false;
        mediaRecorderRef.current.stop();
      }

      voiceSessionActiveRef.current = false;
      clearAutoStopRecordingTimer();
      clearRestartListeningTimer();
      stopLiveTranscriptPreview();
      cleanupRecording();
      cleanupSpeechAudio();
    };
  }, [
    cleanupRecording,
    cleanupSpeechAudio,
    clearAutoStopRecordingTimer,
    clearRestartListeningTimer,
    stopLiveTranscriptPreview,
  ]);

  const requestAssistantTurn = useCallback(
    async (
      message: string,
      conversation: AssistantConversationMessage[],
      options: { speakResponse?: boolean; continueVoiceSession?: boolean } = {}
    ) => {
      const turnStartedAt = Date.now();
      const paceAssistantResponse = async (text: string) => {
        const remainingDelay =
          getHumanPacedAssistantDelayMs(text) - (Date.now() - turnStartedAt);

        if (remainingDelay > 0) {
          await wait(remainingDelay);
        }
      };

      setIsSending(true);
      setError(null);

      try {
        let resolvedSessionId = conversationSessionId;

        if (!resolvedSessionId) {
          const session = await createConversationFlowSession({
            selectedTopic: initialTopic ?? initialCategory,
            jurisdiction: useNswLegalAwareness ? "NSW" : undefined,
          });

          resolvedSessionId = session.id;
          setConversationSessionId(session.id);
        }

        const response = await appendConversationFlowMessage({
          conversationSessionId: resolvedSessionId,
          content: message,
          language: transcriptionLanguage,
        });
        const nextTimeline = response.factExtraction.timeline ?? {};

        setTimeline((currentTimeline) => {
          const nextKeys = Object.entries(nextTimeline)
            .filter(([, value]) => value.trim().length > 0)
            .map(([key]) => key);

          setTimelineFieldOrder((currentOrder) => {
            const mergedOrder = [...currentOrder];

            nextKeys.forEach((key) => {
              const hadValue =
                typeof currentTimeline[key] === "string" &&
                currentTimeline[key].trim().length > 0;

              if (!hadValue && !mergedOrder.includes(key)) {
                mergedOrder.push(key);
              }
            });

            return mergedOrder.filter((key) => nextKeys.includes(key));
          });

          return nextTimeline;
        });
        const assistantMessage: ConversationUiMessage = {
          role: "assistant",
          content: response.assistantMessage.content,
          responseMeta: {
            disclaimer: response.responseMeta?.disclaimer,
            citations: response.responseMeta?.citations,
            confidence: response.responseMeta?.confidence,
            reviewStatus: response.responseMeta?.reviewStatus,
            ragUnavailable: response.responseMeta?.rag?.unavailable,
            pendingHumanReview: Boolean(
              response.triage?.humanReviewRecommended
            ),
          },
        };

        await paceAssistantResponse(response.assistantMessage.content);

        if (options.speakResponse) {
          void playAssistantSpeech(response.assistantMessage.content, {
            continueVoiceSession: options.continueVoiceSession,
            revealAfterPlayback: () => {
              setMessages((currentMessages) => [
                ...currentMessages,
                assistantMessage,
              ]);
            },
          });
        } else {
          setMessages((currentMessages) => [
            ...currentMessages,
            assistantMessage,
          ]);
        }

        if (isActionableConversationTriage(response)) {
          setShowTriageCta(true);
        }
      } catch (conversationFlowError) {
        if (captureConsentError(conversationFlowError)) {
          pendingAssistantRequestRef.current = {
            message,
            conversation,
            speakResponse: options.speakResponse,
            continueVoiceSession: options.continueVoiceSession,
          };
          setVoiceAvatarState("idle");
          return;
        }

        try {
          const response = await sendTimelineAssistantMessage({
            message,
            conversation,
            timeline,
            incidentCategory: initialCategory,
            jurisdiction: useNswLegalAwareness ? "NSW" : undefined,
          });
          const assistantContent = buildAssistantBubbleContent(
            response.assistantMessage ?? "",
            response.nextQuestion ?? ""
          );

          setTimeline((currentTimeline) => {
            const nextTimeline = response.timeline;
            const nextKeys = Object.entries(nextTimeline)
              .filter(([, value]) => value.trim().length > 0)
              .map(([key]) => key);

            setTimelineFieldOrder((currentOrder) => {
              const mergedOrder = [...currentOrder];

              nextKeys.forEach((key) => {
                const hadValue =
                  typeof currentTimeline[key] === "string" &&
                  currentTimeline[key].trim().length > 0;

                if (!hadValue && !mergedOrder.includes(key)) {
                  mergedOrder.push(key);
                }
              });

              return mergedOrder.filter((key) => nextKeys.includes(key));
            });

            return nextTimeline;
          });
          const assistantMessage: ConversationUiMessage = {
            role: "assistant",
            content: assistantContent,
            responseMeta: {
              disclaimer: response.disclaimer,
              citations: response.citations,
              confidence: response.confidence,
              reviewStatus: response.reviewStatus,
              ragUnavailable: response.rag?.unavailable,
              pendingHumanReview:
                response.reviewStatus === "pending_human_review",
              legalAwareness: response.legalAwareness,
            },
          };

          await paceAssistantResponse(assistantContent);

          if (options.speakResponse) {
            void playAssistantSpeech(assistantContent, {
              continueVoiceSession: options.continueVoiceSession,
              revealAfterPlayback: () => {
                setMessages((currentMessages) => [
                  ...currentMessages,
                  assistantMessage,
                ]);
              },
            });
          } else {
            setMessages((currentMessages) => [
              ...currentMessages,
              assistantMessage,
            ]);
          }

          if (
            response.readyForSubmission &&
            detectHarmfulActivity({
              incidentCategory: initialCategory,
              timeline: response.timeline,
              conversation: [
                ...conversation,
                { role: "user", content: message },
              ],
            })
          ) {
            setShowTriageCta(true);
          }
        } catch (requestError) {
          if (captureConsentError(requestError)) {
            pendingAssistantRequestRef.current = {
              message,
              conversation,
              speakResponse: options.speakResponse,
              continueVoiceSession: options.continueVoiceSession,
            };
            setVoiceAvatarState("idle");
            return;
          }

          setVoiceAvatarState("idle");
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Assistant response failed"
          );
        }
      } finally {
        setIsSending(false);
      }
    },
    [
      captureConsentError,
      conversationSessionId,
      initialCategory,
      initialTopic,
      playAssistantSpeech,
      timeline,
      transcriptionLanguage,
      useNswLegalAwareness,
    ]
  );

  useEffect(() => {
    if (!seededMessage || hasSentInitialRef.current || existingDraft) {
      return;
    }

    hasSentInitialRef.current = true;
    if (startVoiceMode) {
      voiceSessionActiveRef.current = true;
      setIsVoiceSessionActive(true);
    }
    void requestAssistantTurn(seededMessage, latestMessagesRef.current, {
      speakResponse: startVoiceMode,
      continueVoiceSession: startVoiceMode,
    });
  }, [existingDraft, requestAssistantTurn, seededMessage, startVoiceMode]);

  const handleCancel = () => {
    clearAssistantConversationDraft({
      topic: initialTopic,
      incidentCategory: initialCategory,
    });
    clearAssistantTriageSource();
  };

  const handleRecordedAudio = useCallback(
    async (mimeType: string) => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: mimeType || "audio/webm",
      });

      shouldProcessRecordingRef.current = false;
      audioChunksRef.current = [];
      cleanupRecording();

      if (!audioBlob.size) {
        setIsTranscribing(false);
        setSpeechError(getRecordingErrorMessage("no-speech", t));
        if (voiceSessionActiveRef.current) {
          scheduleNextVoiceTurn();
        } else {
          setVoiceAvatarState("idle");
        }
        return;
      }

      try {
        const transcription = await transcribeAssistantVoice(
          audioBlob,
          transcriptionLanguage
        );
        const transcript = transcription.transcript.trim();

        if (!transcript) {
          setSpeechError(getRecordingErrorMessage("no-speech", t));
          if (voiceSessionActiveRef.current) {
            scheduleNextVoiceTurn();
          } else {
            setVoiceAvatarState("idle");
          }
          return;
        }

        const voiceMessage = [input.trim(), transcript]
          .filter(Boolean)
          .join(" ");
        const nextMessages = [
          ...latestMessagesRef.current,
          {
            role: "user" as const,
            content: voiceMessage,
          },
        ];

        setSpeechError(null);
        setInput("");
        setMessages(nextMessages);

        // Voice state: speech was captured and the assistant response is starting.
        setVoiceAvatarState("aiSpeaking");
        void requestAssistantTurn(voiceMessage, nextMessages, {
          speakResponse: true,
          continueVoiceSession: voiceSessionActiveRef.current,
        });
      } catch (recordingError) {
        if (captureConsentError(recordingError)) {
          setVoiceAvatarState("idle");
          setSpeechError(null);
          return;
        }

        if (isNoSpeechTranscriptionError(recordingError)) {
          setSpeechError(getRecordingErrorMessage("no-speech", t));
          if (voiceSessionActiveRef.current) {
            scheduleNextVoiceTurn();
          } else {
            setVoiceAvatarState("idle");
          }
          return;
        }

        voiceSessionActiveRef.current = false;
        setIsVoiceSessionActive(false);
        setVoiceAvatarState("idle");
        setSpeechError(
          recordingError instanceof Error
            ? recordingError.message
            : getRecordingErrorMessage("network", t)
        );
      } finally {
        setIsTranscribing(false);
        setLiveTranscript("");
      }
    },
    [
      captureConsentError,
      cleanupRecording,
      input,
      requestAssistantTurn,
      scheduleNextVoiceTurn,
      t,
      transcriptionLanguage,
    ]
  );

  const startVoiceRecording = useCallback(async (): Promise<boolean> => {
    if (
      isSending ||
      isTranscribing ||
      ((isGeneratingSpeech || isSpeaking) && speechPlaybackActiveRef.current)
    ) {
      return false;
    }

    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setVoiceAvatarState("idle");
      setSpeechError(t("dashboard.assistant.speechErrors.unsupported"));
      return false;
    }

    let canRecord = false;

    try {
      canRecord = await requireConsent(consentRequirements.audioTranscription);
    } catch (consentCheckError) {
      setSpeechError(
        consentCheckError instanceof Error
          ? consentCheckError.message
          : "Consent status could not be checked."
      );
      setVoiceAvatarState("idle");
      return false;
    }

    if (!canRecord) {
      setSpeechError(null);
      setVoiceAvatarState("idle");
      return false;
    }

    setSpeechError(null);
    setLiveTranscript("");
    setIsTranscribing(false);
    audioChunksRef.current = [];
    shouldProcessRecordingRef.current = true;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = getPreferredRecordingMimeType();
      const mediaRecorder = new MediaRecorder(
        stream,
        mimeType ? { mimeType } : undefined
      );

      recordingStreamRef.current = stream;
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
          // Voice state: audio data arrived even if live recognition is unavailable.
          setVoiceAvatarState("userSpeaking");
        }
      };

      mediaRecorder.onerror = () => {
        shouldProcessRecordingRef.current = false;
        setIsRecordingActive(false);
        setIsTranscribing(false);
        setVoiceAvatarState("idle");
        cleanupRecording();
        setSpeechError(getRecordingErrorMessage("audio-capture", t));
      };

      mediaRecorder.onstop = () => {
        setIsRecordingActive(false);

        if (!shouldProcessRecordingRef.current) {
          audioChunksRef.current = [];
          cleanupRecording();
          setVoiceAvatarState("idle");
          return;
        }

        // Voice state: user speech ended, keep the avatar active while transcribing.
        setVoiceAvatarState("listening");
        setIsTranscribing(true);
        void handleRecordedAudio(
          mediaRecorder.mimeType || mimeType || "audio/webm"
        );
      };

      mediaRecorder.start();
      // Voice state: microphone is open and waiting for the user to speak.
      setVoiceAvatarState("listening");
      const hasLiveEndpointing = startLiveTranscriptPreview();

      clearAutoStopRecordingTimer();
      autoStopRecordingTimerRef.current = setTimeout(() => {
        const activeRecorder = mediaRecorderRef.current;

        if (
          voiceSessionActiveRef.current &&
          activeRecorder?.state === "recording"
        ) {
          if (hasLiveEndpointing) {
            stopLiveTranscriptPreview();
          }

          activeRecorder.stop();
        }
      }, VOICE_RECORDING_TIMEOUT_MS);

      setIsRecordingActive(true);
      return true;
    } catch (recordingError) {
      stopLiveTranscriptPreview();
      cleanupRecording();
      setVoiceAvatarState("idle");
      const errorCode =
        recordingError instanceof DOMException &&
        recordingError.name === "NotAllowedError"
          ? "not-allowed"
          : "audio-capture";
      setSpeechError(getRecordingErrorMessage(errorCode, t));
      return false;
    }
  }, [
    cleanupRecording,
    clearAutoStopRecordingTimer,
    handleRecordedAudio,
    isGeneratingSpeech,
    isSending,
    isSpeaking,
    isTranscribing,
    requireConsent,
    startLiveTranscriptPreview,
    stopLiveTranscriptPreview,
    t,
  ]);

  startVoiceRecordingRef.current = startVoiceRecording;

  const startVoiceSession = useCallback(async () => {
    if (voiceSessionActiveRef.current) {
      return;
    }

    voiceSessionActiveRef.current = true;
    setIsVoiceSessionActive(true);
    shouldContinueAfterPlaybackRef.current = false;
    setSpeechError(null);
    setSpeechPlaybackError(null);

    const started = await startVoiceRecording();

    if (!started) {
      voiceSessionActiveRef.current = false;
      setIsVoiceSessionActive(false);
      setVoiceAvatarState("idle");
    }
  }, [startVoiceRecording]);

  const stopVoiceSession = useCallback(() => {
    voiceSessionActiveRef.current = false;
    setIsVoiceSessionActive(false);
    shouldContinueAfterPlaybackRef.current = false;
    shouldProcessRecordingRef.current = false;
    clearAutoStopRecordingTimer();
    clearRestartListeningTimer();
    stopLiveTranscriptPreview();
    stopAssistantSpeech();

    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    } else {
      cleanupRecording();
    }

    audioChunksRef.current = [];
    setIsRecordingActive(false);
    setIsTranscribing(false);
    setLiveTranscript("");
    setVoiceAvatarState("idle");
  }, [
    cleanupRecording,
    clearAutoStopRecordingTimer,
    clearRestartListeningTimer,
    stopAssistantSpeech,
    stopLiveTranscriptPreview,
  ]);

  const toggleVoiceRecording = useCallback(() => {
    if (isVoiceSessionActive || isRecordingActive) {
      stopVoiceSession();
      return;
    }

    void startVoiceSession();
  }, [
    isRecordingActive,
    isVoiceSessionActive,
    startVoiceSession,
    stopVoiceSession,
  ]);

  useEffect(() => {
    if (
      !startVoiceMode ||
      seededMessage ||
      hasStartedInitialVoiceModeRef.current
    ) {
      return;
    }

    hasStartedInitialVoiceModeRef.current = true;
    void startVoiceSession();
  }, [seededMessage, startVoiceMode, startVoiceSession]);

  const handleAllowPendingConsent = async () => {
    const requirement = pendingConsentRequirement;

    try {
      await grantPendingConsent();
      setError(null);
      setSpeechError(null);

      if (
        requirement?.source === consentRequirements.audioTranscription.source
      ) {
        void startVoiceSession();
        return;
      }

      const pendingRequest = pendingAssistantRequestRef.current;
      pendingAssistantRequestRef.current = null;

      if (pendingRequest) {
        void requestAssistantTurn(
          pendingRequest.message,
          pendingRequest.conversation,
          {
            speakResponse: pendingRequest.speakResponse,
            continueVoiceSession: pendingRequest.continueVoiceSession,
          }
        );
        return;
      }

      if (isVoiceSessionActive && replayVoiceText) {
        void playAssistantSpeech(replayVoiceText, {
          continueVoiceSession: true,
        });
      }
    } catch (consentError) {
      setVoiceAvatarState("idle");
      setError(
        consentError instanceof Error
          ? consentError.message
          : "Consent could not be saved."
      );
    }
  };

  const handleDeclinePendingConsent = () => {
    pendingAssistantRequestRef.current = null;
    revealPendingSpeechResponse();
    voiceSessionActiveRef.current = false;
    setIsVoiceSessionActive(false);
    shouldContinueAfterPlaybackRef.current = false;
    clearAutoStopRecordingTimer();
    clearRestartListeningTimer();
    setVoiceAvatarState("idle");
    clearPendingConsent();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (
      !message ||
      isSending ||
      isVoiceSessionActive ||
      isRecordingActive ||
      isTranscribing ||
      isGeneratingSpeech ||
      isSpeaking
    ) {
      return;
    }

    const nextMessages = [
      ...latestMessagesRef.current,
      {
        role: "user" as const,
        content: message,
      },
    ];

    setInput("");
    setMessages(nextMessages);
    void requestAssistantTurn(message, nextMessages);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const conversationVoiceAvatarState: VoiceAvatarState =
    isGeneratingSpeech || isSpeaking || isSending
      ? "aiSpeaking"
      : liveTranscript
        ? "userSpeaking"
        : isRecordingActive ||
            isTranscribing ||
            voiceAvatarState === "listening" ||
            voiceAvatarState === "userSpeaking"
          ? voiceAvatarState === "userSpeaking"
            ? "userSpeaking"
            : "listening"
          : "idle";

  return (
    <div
      data-testid="ai-conversation-page"
      className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4 xl:flex-1 xl:overflow-hidden xl:pb-0"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col xl:h-full xl:min-h-0">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href={assistantEntryHref}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            AI Conversation
          </Link>
          <Link
            href="/dashboard"
            onClick={handleCancel}
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <div className="mt-3 min-h-0 xl:flex-1">
          <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[22px] border border-[#d6e7f6] bg-[linear-gradient(180deg,#dff0fb_0%,#e8f5ff_100%)] p-4 shadow-[0_18px_40px_rgba(113,161,204,0.12)] xl:h-full xl:min-h-0">
            {pendingConsentRequirement ? (
              <div className="relative z-30 mb-3 max-w-[560px]">
                <ConsentRequiredCard
                  requirement={pendingConsentRequirement}
                  isSubmitting={isGrantingConsent}
                  onAllow={() => {
                    void handleAllowPendingConsent();
                  }}
                  onDecline={handleDeclinePendingConsent}
                />
              </div>
            ) : null}
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[18px]">
              <div
                data-testid="ai-conversation-chat"
                className="flex h-full flex-col gap-3 overflow-y-auto overscroll-contain pr-1.5"
              >
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                    data-testid={`ai-conversation-message-${message.role}`}
                    className={
                      message.role === "user" ? "flex justify-end" : ""
                    }
                  >
                    <div className="max-w-[min(88%,540px)]">
                      <div
                        className={`inline-flex max-w-full rounded-[20px] bg-white px-4 py-2.5 text-[11px] leading-[1.55] shadow-[0_8px_22px_rgba(148,163,184,0.12)] ${
                          message.role === "user"
                            ? "rounded-tr-[8px] text-[#314256]"
                            : "rounded-tl-[8px] text-[#5f6f86]"
                        }`}
                      >
                        {getAssistantDisplayContent(message)}
                      </div>
                    </div>
                  </div>
                ))}

                {showTriageCta ? (
                  <div className="flex justify-center py-2">
                    <Link
                      href={continueReportSubmissionHref}
                      data-testid="ai-conversation-triage-button"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0f5d9f] px-6 text-[12px] font-bold text-white shadow-[0_12px_28px_rgba(15,93,159,0.26)] transition hover:bg-[#0b528d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f5d9f]"
                    >
                      Continue to Triage
                      <IconArrowRight size={14} />
                    </Link>
                  </div>
                ) : null}

                {isSending ? (
                  <div className="inline-flex w-fit items-center rounded-[18px] rounded-tl-[8px] bg-white px-3 py-2 shadow-[0_8px_22px_rgba(148,163,184,0.12)]">
                    <span className="sr-only">Assistant is typing</span>
                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:300ms]" />
                    </div>
                  </div>
                ) : null}

                {error ? (
                  <div className="inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]">
                    <IconAlertCircle size={12} />
                    {error}
                  </div>
                ) : null}

                {speechError ? (
                  <div className="inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]">
                    <IconAlertCircle size={12} />
                    {speechError}
                  </div>
                ) : null}

                {isGeneratingSpeech || isSpeaking ? (
                  <div
                    className="inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#5f6f86] shadow-[0_8px_22px_rgba(148,163,184,0.12)]"
                    aria-live="polite"
                  >
                    {isGeneratingSpeech ? (
                      <IconLoader2 size={12} className="animate-spin" />
                    ) : (
                      <IconMicrophone size={12} />
                    )}
                    <span>
                      {isGeneratingSpeech
                        ? t("dashboard.assistant.generatingVoice")
                        : t("dashboard.assistant.speaking")}
                    </span>
                    {isSpeaking ? (
                      <button
                        type="button"
                        onClick={stopAssistantSpeech}
                        className="ml-1 rounded-full border border-[#d6e7f6] px-2 py-1 text-[10px] font-bold text-[#0f5d9f]"
                        aria-label={t("dashboard.assistant.stopVoicePlayback")}
                      >
                        {t("dashboard.assistant.stopVoicePlayback")}
                      </button>
                    ) : null}
                  </div>
                ) : null}

                {speechPlaybackError ? (
                  <div
                    className="inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]"
                    aria-live="polite"
                  >
                    <IconAlertCircle size={12} />
                    <span>{speechPlaybackError}</span>
                    {replayVoiceText ? (
                      <button
                        type="button"
                        onClick={() => {
                          void playAssistantSpeech(replayVoiceText, {
                            continueVoiceSession: voiceSessionActiveRef.current,
                          });
                        }}
                        className="ml-1 rounded-full border border-[#d6e7f6] px-2 py-1 text-[10px] font-bold text-[#0f5d9f]"
                        aria-label={t(
                          "dashboard.assistant.replayVoiceResponse"
                        )}
                      >
                        {t("dashboard.assistant.replayVoiceResponse")}
                      </button>
                    ) : null}
                  </div>
                ) : null}

                {isRecordingActive || isTranscribing || liveTranscript ? (
                  <div className="inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#5f6f86] shadow-[0_8px_22px_rgba(148,163,184,0.12)]">
                    {isTranscribing ? (
                      <IconLoader2 size={12} className="animate-spin" />
                    ) : (
                      <IconMicrophone size={12} />
                    )}
                    {isTranscribing
                      ? t("dashboard.assistant.transcribing")
                      : liveTranscript || t("dashboard.assistant.listening")}
                  </div>
                ) : null}
                <div ref={messagesEndRef} aria-hidden="true" />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white/92 relative z-20 mt-4 shrink-0 rounded-[20px] border border-white/80 p-2.5 shadow-[0_16px_36px_rgba(148,163,184,0.18)] backdrop-blur"
            >
              <div className="mb-1.5 flex h-[60px] items-center justify-center">
                <VoiceAvatarAnimation
                  state={conversationVoiceAvatarState}
                  size="small"
                  alt={t("dashboard.assistant.sphereAlt")}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  data-testid="ai-conversation-input"
                  placeholder={t("dashboard.assistant.typeYourResponse")}
                  className="h-11 flex-1 rounded-full border border-transparent bg-[#f6f9fc] px-4 text-sm text-[#1f2937] outline-none transition-[background-color,box-shadow,border-color] duration-150 placeholder:text-[#95a3b8] focus:border-white/70 focus:bg-white focus:shadow-[0_8px_22px_rgba(148,163,184,0.12)] focus-visible:outline-none"
                />
                <button
                  type="button"
                  onClick={toggleVoiceRecording}
                  disabled={
                    !isVoiceSessionActive &&
                    (isSending ||
                      isTranscribing ||
                      isGeneratingSpeech ||
                      isSpeaking)
                  }
                  aria-label={t("dashboard.assistant.toggleMicrophone")}
                  aria-pressed={isVoiceSessionActive || isRecordingActive}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#f4f7fb] ${
                    isVoiceSessionActive || isRecordingActive
                      ? "bg-[#de3838] text-white"
                      : "text-[#8b97a8]"
                  } ${
                    !isVoiceSessionActive &&
                    (isSending ||
                      isTranscribing ||
                      isGeneratingSpeech ||
                      isSpeaking)
                      ? "cursor-not-allowed opacity-40"
                      : ""
                  }`}
                >
                  <IconMicrophone size={16} />
                </button>
                {isVoiceSessionActive ? (
                  <button
                    type="button"
                    onClick={stopVoiceSession}
                    className="inline-flex h-10 shrink-0 items-center rounded-full bg-[#de3838] px-4 text-[11px] font-bold text-white"
                    aria-label={t("dashboard.assistant.stopRecording")}
                  >
                    <span className="mr-1" aria-hidden>
                      &bull;
                    </span>
                    {t("dashboard.assistant.stopRecording")}
                  </button>
                ) : null}
                <button
                  type="submit"
                  data-testid="ai-conversation-send"
                  disabled={
                    isSending ||
                    isVoiceSessionActive ||
                    isRecordingActive ||
                    isTranscribing ||
                    isGeneratingSpeech ||
                    isSpeaking ||
                    !input.trim()
                  }
                  aria-label={t("common.send")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f5b44b] text-white shadow-[0_10px_24px_rgba(245,180,75,0.35)] transition hover:bg-[#eea834] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {isSending ? (
                    <IconLoader2 size={16} className="animate-spin" />
                  ) : (
                    <Image
                      src={sendIcon}
                      alt={t("common.send")}
                      width={12}
                      height={16}
                      className="h-4 w-3"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SafeSpeakAssistantConversationPage, SafeSpeakAssistantPage };
