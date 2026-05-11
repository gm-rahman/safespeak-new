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
import { AssistantInteraction } from "@/components/dashboard/assistant-interaction";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import { ConsentRequiredError } from "@/lib/consent";
import {
  getDashboardActionHref,
  getDashboardAssistantTopicChips,
  getDashboardCardFlow,
  type DashboardCardFlowId,
} from "@/lib/dashboard-card-flows";
import {
  type AssistantConversationMessage,
  type AssistantTimeline,
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
import { triggerQuickExit } from "@/lib/safety";
import { transcribeAssistantVoice } from "@/lib/voice-transcription";

import { interFont } from "./dashboard-shared";

const emptyTimeline: AssistantTimeline = {};

const timelineFieldLabelMap: Record<string, string> = {
  who: "Who",
  relationship: "Relationship",
  what: "What",
  where: "Where",
  when: "When",
  how: "How",
  frequency: "Frequency",
  impact: "Impact",
  threats: "Threats",
  injuries: "Injuries",
  witnesses: "Witnesses",
  evidence: "Evidence",
  actions_taken: "Actions Taken",
  unsafe_now: "Immediate Safety",
};

function formatTimelineFieldLabel(key: string): string {
  return (
    timelineFieldLabelMap[key] ??
    key
      .split("_")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

function sortTimelineEntries(
  timeline: AssistantTimeline,
  fieldOrder: string[]
): Array<[string, string]> {
  const filteredEntries = Object.entries(timeline).filter(
    ([, value]) => value.trim().length > 0
  );

  return filteredEntries.sort(([leftKey], [rightKey]) => {
    const leftIndex = fieldOrder.indexOf(leftKey);
    const rightIndex = fieldOrder.indexOf(rightKey);

    if (leftIndex === -1 && rightIndex === -1) {
      return 0;
    }

    if (leftIndex === -1) {
      return 1;
    }

    if (rightIndex === -1) {
      return -1;
    }

    return leftIndex - rightIndex;
  });
}

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

  return supportedTypes.find((mimeType) =>
    MediaRecorder.isTypeSupported(mimeType)
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
      view: "reportsubmissiondetails",
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

  const hasUserMessage = draft.messages.some((message) => message.role === "user");
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

  const assistantFlow = initialTopic ? getDashboardCardFlow(initialTopic) : null;
  const assistantTopicChips = getDashboardAssistantTopicChips();
  const startWithTopicHref =
    assistantFlow?.starterPrompt
      ? getDashboardActionHref(assistantFlow.id, "talk_with_assistant")
      : null;

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
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
          <article className="-mt-[158px] mx-auto w-full max-w-[1120px] rounded-[24px] border border-[#dce6f2] bg-white/96 p-4 shadow-[0_16px_34px_rgba(15,23,42,0.08)] backdrop-blur sm:p-5">
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
                        <p className="text-[12px] font-bold text-[#1f2a3a]">{action.label}</p>
                        <p className="mt-1 text-[10px] leading-[1.55] text-[#7688a0]">
                          {action.description}
                        </p>
                      </button>
                    );
                  }

                  const actionHref = getDashboardActionHref(assistantFlow.id, action.id);

                  if (!actionHref) {
                    return null;
                  }

                  return (
                    <Link
                      key={action.id}
                      href={actionHref}
                      className="rounded-[18px] border border-[#dce6f2] bg-[#fbfdff] p-3 text-left transition hover:border-[#c5d8ec] hover:bg-[#f7fbff]"
                    >
                      <p className="text-[12px] font-bold text-[#1f2a3a]">{action.label}</p>
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
                      ? getDashboardActionHref(topicChip.id, "talk_with_assistant")
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
}: {
  initialMessage?: string;
  initialPrefillMessage?: string;
  initialCategory?: AssistantIncidentCategory;
  initialTopic?: DashboardCardFlowId;
}) {
  const { t, i18n } = useTranslation();
  type ConversationUiMessage = AssistantConversationMessage & {
    responseMeta?: {
      disclaimer?: string;
      citations?: Array<{
        title: string;
        publisher?: string;
        url?: string;
        jurisdiction?: string;
        sectionRef?: string;
      }>;
      confidence?: string;
      reviewStatus?: string;
      ragUnavailable?: boolean;
      pendingHumanReview?: boolean;
    };
  };
  const seededMessage = initialMessage?.trim();
  const seededPrefillMessage = initialPrefillMessage?.trim();
  const existingDraft = getAssistantConversationDraft({
    topic: initialTopic,
    incidentCategory: initialCategory,
  });
  const [input, setInput] = useState(seededPrefillMessage ?? "");
  const [timeline, setTimeline] = useState<AssistantTimeline>(
    existingDraft?.timeline ?? emptyTimeline
  );
  const [messages, setMessages] = useState<ConversationUiMessage[]>(() =>
    existingDraft?.messages ??
      ([
        {
          role: "assistant",
          content: t("dashboard.assistant.conversation.botPromptWho"),
        },
        seededMessage
          ? {
              role: "user" as const,
              content: seededMessage,
            }
          : null,
      ].filter(Boolean) as AssistantConversationMessage[])
  );
  const [isSending, setIsSending] = useState(
    Boolean(seededMessage) && !existingDraft
  );
  const [error, setError] = useState<string | null>(null);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [isRecordingActive, setIsRecordingActive] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const hasSentInitialRef = useRef(false);
  const latestMessagesRef = useRef(messages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const timelineEndRef = useRef<HTMLDivElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const recordingStreamRef = useRef<MediaStream | null>(null);
  const shouldProcessRecordingRef = useRef(false);
  const liveRecognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const liveFinalTranscriptRef = useRef("");
  const [timelineFieldOrder, setTimelineFieldOrder] = useState<string[]>(
    existingDraft?.timelineFieldOrder ?? []
  );
  const continueReportSubmissionHref =
    getContinueReportSubmissionHref(initialCategory);
  const assistantEntryHref = getAssistantEntryHref(initialTopic, initialCategory);
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

  const cleanupRecording = useCallback(() => {
    recordingStreamRef.current?.getTracks().forEach((track) => track.stop());
    recordingStreamRef.current = null;
    mediaRecorderRef.current = null;
  }, []);

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

  const startLiveTranscriptPreview = useCallback(() => {
    const recognitionCtor =
      (window as SpeechWindow).SpeechRecognition ??
      (window as SpeechWindow).webkitSpeechRecognition;

    if (!recognitionCtor) {
      return;
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
    };

    recognition.onerror = () => {
      liveRecognitionRef.current = null;
    };

    liveRecognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      liveRecognitionRef.current = null;
    }
  }, [livePreviewLanguage, stopLiveTranscriptPreview]);

  const conversationMessages = useMemo<AssistantConversationMessage[]>(
    () => messages.map(({ role, content }) => ({ role, content })),
    [messages]
  );

  useEffect(() => {
    saveAssistantTriageSource({
      conversation: conversationMessages,
      timeline,
      incidentCategory: initialCategory,
    });
    saveAssistantConversationDraft({
      messages: conversationMessages,
      timeline,
      timelineFieldOrder,
      incidentCategory: initialCategory,
      topic: initialTopic,
    }, {
      topic: initialTopic,
      incidentCategory: initialCategory,
    });
  }, [
    conversationMessages,
    initialCategory,
    initialTopic,
    timeline,
    timelineFieldOrder,
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isSending, error]);

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

      stopLiveTranscriptPreview();
      cleanupRecording();
    };
  }, [cleanupRecording, stopLiveTranscriptPreview]);

  const requestAssistantTurn = useCallback(
    async (
      message: string,
      conversation: AssistantConversationMessage[]
    ) => {
      setIsSending(true);
      setError(null);

      try {
        const response = await sendTimelineAssistantMessage({
          message,
          conversation,
          timeline,
          incidentCategory: initialCategory,
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
        setMessages((currentMessages) => [
          ...currentMessages,
          {
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
            },
          },
        ]);
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Assistant response failed"
        );
      } finally {
        setIsSending(false);
      }
    },
    [initialCategory, t, timeline]
  );

  useEffect(() => {
    if (!seededMessage || hasSentInitialRef.current || existingDraft) {
      return;
    }

    hasSentInitialRef.current = true;
    void requestAssistantTurn(seededMessage, latestMessagesRef.current);
  }, [existingDraft, requestAssistantTurn, seededMessage]);

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
          return;
        }

        setSpeechError(null);
        setInput((currentInput) =>
          [currentInput.trim(), transcript].filter(Boolean).join(" ")
        );
      } catch (recordingError) {
        if (recordingError instanceof ConsentRequiredError) {
          setSpeechError("Voice transcription consent is required in Settings.");
          return;
        }

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
    [cleanupRecording, t, transcriptionLanguage]
  );

  const startVoiceRecording = useCallback(async () => {
    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setSpeechError(t("dashboard.assistant.speechErrors.unsupported"));
      return;
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
        }
      };

      mediaRecorder.onerror = () => {
        shouldProcessRecordingRef.current = false;
        setIsRecordingActive(false);
        setIsTranscribing(false);
        cleanupRecording();
        setSpeechError(getRecordingErrorMessage("audio-capture", t));
      };

      mediaRecorder.onstop = () => {
        setIsRecordingActive(false);

        if (!shouldProcessRecordingRef.current) {
          audioChunksRef.current = [];
          cleanupRecording();
          return;
        }

        setIsTranscribing(true);
        void handleRecordedAudio(
          mediaRecorder.mimeType || mimeType || "audio/webm"
        );
      };

      mediaRecorder.start();
      startLiveTranscriptPreview();
      setIsRecordingActive(true);
    } catch (recordingError) {
      stopLiveTranscriptPreview();
      cleanupRecording();
      const errorCode =
        recordingError instanceof DOMException &&
        recordingError.name === "NotAllowedError"
          ? "not-allowed"
          : "audio-capture";
      setSpeechError(getRecordingErrorMessage(errorCode, t));
    }
  }, [
    cleanupRecording,
    handleRecordedAudio,
    startLiveTranscriptPreview,
    stopLiveTranscriptPreview,
    t,
  ]);

  const stopVoiceRecording = useCallback(() => {
    const mediaRecorder = mediaRecorderRef.current;

    stopLiveTranscriptPreview();

    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      cleanupRecording();
      setIsRecordingActive(false);
      return;
    }

    mediaRecorder.stop();
  }, [cleanupRecording, stopLiveTranscriptPreview]);

  const toggleVoiceRecording = useCallback(() => {
    if (isRecordingActive) {
      stopVoiceRecording();
      return;
    }

    void startVoiceRecording();
  }, [isRecordingActive, startVoiceRecording, stopVoiceRecording]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || isSending || isRecordingActive || isTranscribing) {
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

  const timelineEntries = sortTimelineEntries(timeline, timelineFieldOrder);
  const timelineFieldCount = timelineEntries.length;

  useEffect(() => {
    timelineEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [timelineEntries, isSending, error]);

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4 xl:flex-1 xl:overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col xl:h-full xl:min-h-0">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href={assistantEntryHref}
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

        <div className="mt-3 grid min-h-0 grid-cols-1 gap-3 xl:flex-1 xl:grid-cols-[minmax(0,1.72fr)_minmax(340px,0.96fr)] xl:items-stretch xl:overflow-hidden">
          <div className="flex min-h-[520px] flex-col rounded-[22px] border border-[#d6e7f6] bg-[linear-gradient(180deg,#dff0fb_0%,#e8f5ff_100%)] p-4 shadow-[0_18px_40px_rgba(113,161,204,0.12)] xl:min-h-0 xl:h-full xl:overflow-hidden">
            <div className="min-h-0 flex-1 overflow-hidden rounded-[18px]">
              <div className="flex h-full flex-col gap-3 overflow-y-auto overscroll-contain pr-1.5">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                  className={message.role === "user" ? "flex justify-end" : ""}
                >
                  <div className="max-w-[min(88%,540px)]">
                  <div
                    className={`inline-flex max-w-full rounded-[20px] bg-white px-4 py-2.5 text-[11px] leading-[1.55] shadow-[0_8px_22px_rgba(148,163,184,0.12)] ${
                      message.role === "user"
                        ? "rounded-tr-[8px] text-[#314256]"
                        : "rounded-tl-[8px] text-[#5f6f86]"
                    }`}
                  >
                    {message.content}
                  </div>
                  </div>
                </div>
              ))}

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
              className="mt-4 shrink-0 rounded-[20px] border border-white/80 bg-white/92 p-2.5 shadow-[0_16px_36px_rgba(148,163,184,0.18)] backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder={t("dashboard.assistant.typeYourResponse")}
                  className="h-11 flex-1 rounded-full border border-transparent bg-[#f6f9fc] px-4 text-sm text-[#1f2937] outline-none placeholder:text-[#95a3b8] transition-[background-color,box-shadow,border-color] duration-150 focus:border-white/70 focus:bg-white focus:shadow-[0_8px_22px_rgba(148,163,184,0.12)] focus-visible:outline-none"
                />
                <button
                  type="button"
                  onClick={toggleVoiceRecording}
                  disabled={isTranscribing}
                  aria-label={t("dashboard.assistant.toggleMicrophone")}
                  aria-pressed={isRecordingActive}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#f4f7fb] ${
                    isRecordingActive
                      ? "bg-[#de3838] text-white"
                      : "text-[#8b97a8]"
                  } ${isTranscribing ? "cursor-not-allowed opacity-40" : ""}`}
                >
                  <IconMicrophone size={16} />
                </button>
                <button
                  type="submit"
                  disabled={
                    isSending ||
                    isRecordingActive ||
                    isTranscribing ||
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

          <div className="flex rounded-[22px] border border-[#e2e9f3] bg-white p-4 shadow-[0_18px_40px_rgba(148,163,184,0.14)] xl:min-h-0 xl:h-full xl:flex-col xl:overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-[#edf2f7] pb-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#5f6f86]">
                  {t("dashboard.assistant.conversation.liveTimelineBuilder")}
                </p>
                <p className="mt-1 text-[11px] text-[#98a7ba]">
                  {timelineFieldCount > 0
                    ? `${timelineFieldCount} field${timelineFieldCount === 1 ? "" : "s"} captured`
                    : "Structured details appear here as the report builds"}
                </p>
              </div>
              <span className="rounded-full bg-[#eaf2ff] px-2.5 py-1 text-[10px] font-semibold text-[#3f7de0]">
                {t("dashboard.assistant.conversation.updating")}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-[#f7fafc] px-3 py-2">
                <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9aa8ba]">
                  Captured
                </p>
                <p className="mt-1 text-sm font-bold text-[#1f2a3a]">
                  {timelineFieldCount}
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7fafc] px-3 py-2">
                <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9aa8ba]">
                  Status
                </p>
                <p className="mt-1 text-sm font-bold text-[#3f7de0]">
                  Live
                </p>
              </div>
            </div>

            <div className="mt-4 min-h-0 space-y-2.5 xl:flex-1 xl:overflow-y-auto xl:pr-1.5">
              {timelineEntries.length > 0 ? (
                timelineEntries.map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-[18px] border border-[#ebeff5] bg-[#f9fbfd] p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#8fa0b6]">
                        {formatTimelineFieldLabel(key)}
                      </p>
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#3f7de0]" />
                    </div>
                    <div className="mt-2 max-h-[96px] overflow-y-auto pr-1">
                      <p className="text-[12px] font-semibold leading-[1.55] text-[#1f2a3a]">
                        {value}
                      </p>
                    </div>
                    <div className="mt-3 h-[2px] rounded-full bg-[#d8e3f5]">
                      <div className="h-[2px] w-full rounded-full bg-[#3f7de0]" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[18px] border border-[#ebeff5] bg-[#f9fbfd] p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#8fa0b6]">
                    {t("dashboard.assistant.conversation.what")}
                  </p>
                  <p className="mt-2 text-[12px] italic text-[#8fa0b6]">
                    {t("dashboard.assistant.conversation.waitingForDetails")}
                  </p>
                </div>
              )}

              {timelineEntries.length < 2 ? (
                <div className="rounded-[18px] border border-dashed border-[#e3e9f2] bg-[#fbfdff] p-6 text-center text-[10px] text-[#c0c9d6]">
                  {t("dashboard.assistant.conversation.moreFields")}
                </div>
              ) : null}
              <div ref={timelineEndRef} aria-hidden="true" />
            </div>

            <div className="border-t border-[#edf2f7] pt-4">
                <Link
                  href={continueReportSubmissionHref}
                  className="inline-flex h-11 items-center rounded-full bg-[#0f5d9f] px-6 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.25)] transition hover:bg-[#0b528d]"
                >
                  {t("dashboard.assistant.continueToReportSubmission")}
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SafeSpeakAssistantConversationPage, SafeSpeakAssistantPage };
