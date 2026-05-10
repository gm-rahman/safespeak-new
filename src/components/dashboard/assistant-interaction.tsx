"use client";

import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  IconAlertCircle,
  IconCheck,
  IconLoader2,
  IconMapPin,
  IconMicrophone,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import sendIcon from "@/assets/sendIcon.svg?url";
import AssistantSphereAnimated from "@/components/dashboard/AssistantSphereAnimated";
import {
  type CapturedReportMetadata,
  captureReportMetadata,
  clearReportMetadata,
  saveReportMetadata,
} from "@/lib/report-metadata";
import type { AssistantIncidentCategory } from "@/lib/assistant-categories";
import type { DashboardCardFlowId } from "@/lib/dashboard-card-flows";
import { transcribeAssistantVoice } from "@/lib/voice-transcription";

type RecordingErrorCode =
  | "audio-capture"
  | "network"
  | "no-speech"
  | "not-allowed"
  | "service-not-allowed";

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

export function AssistantInteraction({
  isRecording = false,
  headlineClassName,
  initialCategory,
  initialTopic,
}: {
  isRecording?: boolean;
  headlineClassName: string;
  initialCategory?: AssistantIncidentCategory;
  initialTopic?: DashboardCardFlowId;
}) {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState("");
  const [isRecordingActive, setIsRecordingActive] = useState(isRecording);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [finalTranscript, setFinalTranscript] = useState("");
  const [liveTranscript, setLiveTranscript] = useState("");
  const [isMetadataEnabled, setIsMetadataEnabled] = useState(false);
  const [isMetadataCapturing, setIsMetadataCapturing] = useState(false);
  const [metadataError, setMetadataError] = useState<string | null>(null);
  const [reportMetadata, setReportMetadata] =
    useState<CapturedReportMetadata | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const recordingStreamRef = useRef<MediaStream | null>(null);
  const shouldProcessRecordingRef = useRef(false);
  const liveRecognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const liveFinalTranscriptRef = useRef("");

  const transcriptText = useMemo(
    () => (finalTranscript || liveTranscript).trim(),
    [finalTranscript, liveTranscript]
  );
  const showTranscriptPanel =
    isRecordingActive || isTranscribing || Boolean(speechError);
  const transcriptionLanguage = useMemo(() => {
    return i18n.resolvedLanguage === "es" || i18n.language === "es"
      ? "es"
      : "en";
  }, [i18n.language, i18n.resolvedLanguage]);
  const livePreviewLanguage =
    transcriptionLanguage === "es" ? "es-ES" : "en-US";

  const cleanupRecording = () => {
    recordingStreamRef.current?.getTracks().forEach((track) => track.stop());
    recordingStreamRef.current = null;
    mediaRecorderRef.current = null;
  };

  const stopLiveTranscriptPreview = () => {
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
  };

  const startLiveTranscriptPreview = () => {
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
  };

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current?.state === "recording") {
        shouldProcessRecordingRef.current = false;
        mediaRecorderRef.current.stop();
      }

      stopLiveTranscriptPreview();
      cleanupRecording();
    };
  }, []);

  useEffect(() => {
    if (showTranscriptPanel) {
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const previousBodyOverflowY = document.body.style.overflowY;
    const previousDocumentOverflowY = document.documentElement.style.overflowY;

    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = previousBodyOverflowY;
      document.documentElement.style.overflowY = previousDocumentOverflowY;
    };
  }, [showTranscriptPanel]);

  const handleRecordedAudio = async (mimeType: string) => {
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

      setFinalTranscript(transcript);
      setMessage((currentMessage) =>
        [currentMessage.trim(), transcript].filter(Boolean).join(" ")
      );
    } catch (error) {
      setSpeechError(
        error instanceof Error
          ? error.message
          : getRecordingErrorMessage("network", t)
      );
    } finally {
      setIsTranscribing(false);
    }
  };

  const startVoiceRecording = async () => {
    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setSpeechError(t("dashboard.assistant.speechErrors.unsupported"));
      return;
    }

    setSpeechError(null);
    setFinalTranscript("");
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
    } catch (error) {
      stopLiveTranscriptPreview();
      cleanupRecording();
      const errorCode =
        error instanceof DOMException && error.name === "NotAllowedError"
          ? "not-allowed"
          : "audio-capture";
      setSpeechError(getRecordingErrorMessage(errorCode, t));
    }
  };

  const stopVoiceRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;

    stopLiveTranscriptPreview();

    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      cleanupRecording();
      setIsRecordingActive(false);
      return;
    }

    mediaRecorder.stop();
  };

  const toggleVoiceRecording = () => {
    if (isRecordingActive) {
      stopVoiceRecording();
      return;
    }

    void startVoiceRecording();
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (isRecordingActive || isTranscribing || !message.trim()) {
      event.preventDefault();
    }

    if (isRecordingActive) {
      stopVoiceRecording();
    }
  };

  const enableMetadataCapture = async () => {
    setIsMetadataCapturing(true);
    setMetadataError(null);

    try {
      const metadata = await captureReportMetadata();
      saveReportMetadata(metadata);
      setReportMetadata(metadata);
      setIsMetadataEnabled(true);
    } catch (error) {
      clearReportMetadata();
      setReportMetadata(null);
      setIsMetadataEnabled(false);
      setMetadataError(
        error instanceof Error
          ? error.message
          : t("dashboard.assistant.metadataCaptureFailed")
      );
    } finally {
      setIsMetadataCapturing(false);
    }
  };

  const disableMetadataCapture = () => {
    clearReportMetadata();
    setReportMetadata(null);
    setIsMetadataEnabled(false);
    setMetadataError(null);
  };

  const toggleMetadataCapture = () => {
    if (isMetadataCapturing) {
      return;
    }

    if (isMetadataEnabled) {
      disableMetadataCapture();
      return;
    }

    void enableMetadataCapture();
  };

  const recordingSpacingClass = showTranscriptPanel ? "mt-5 sm:mt-6" : "mt-7";
  const metadataStatusText = isMetadataCapturing
    ? t("dashboard.assistant.metadataCapturing")
    : metadataError
      ? t("dashboard.assistant.metadataUnavailable")
      : reportMetadata
        ? reportMetadata.location
          ? t("dashboard.assistant.metadataReady")
          : t("dashboard.assistant.metadataDeviceOnly")
        : t("dashboard.assistant.metadataDescription");

  return (
    <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-4 sm:px-4 sm:pb-4 sm:pt-5">
      <AssistantSphereAnimated alt={t("dashboard.assistant.sphereAlt")} />

      <p className={headlineClassName}>
        {t("dashboard.assistant.greetingPrefix")}{" "}
        <span className="text-[#3f7de0]">
          {t("dashboard.assistant.userName")}
        </span>
        {t("dashboard.assistant.greetingSuffix")}
      </p>

      {showTranscriptPanel && (
        <div
          className={`${recordingSpacingClass} w-full max-w-[430px] rounded-[14px] border border-[#e0e7f2] bg-white px-4 py-4 text-center shadow-[0_8px_18px_rgba(15,23,42,0.04)] sm:px-5 sm:py-5`}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#253f6f]">
            {t("dashboard.assistant.realTimeTranscript")}
          </p>
          {speechError ? (
            <p className="mt-1 max-h-[74px] overflow-y-auto text-[11px] leading-[1.45] text-[#c24141]">
              {speechError}
            </p>
          ) : isTranscribing ? (
            <p className="mt-1 max-h-[74px] overflow-y-auto text-[11px] leading-[1.45] text-[#60728a]">
              {t("dashboard.assistant.transcribing")}
            </p>
          ) : (
            <p className="mt-1 max-h-[74px] overflow-y-auto text-[11px] leading-[1.45] text-[#60728a]">
              {transcriptText || t("dashboard.assistant.listening")}
            </p>
          )}
        </div>
      )}

      <div
        className={`${recordingSpacingClass} mb-[188px] w-full max-w-[1120px] sm:mb-[198px] lg:mb-[188px]`}
      >
        <form
          action="/dashboard"
          method="get"
          onSubmit={handleSubmit}
          className="rounded-[20px] border border-[#dbe6f2] bg-white p-2"
        >
          <input type="hidden" name="view" value="assistantconversation" />
          {initialCategory ? (
            <input type="hidden" name="category" value={initialCategory} />
          ) : null}
          {initialTopic ? <input type="hidden" name="topic" value={initialTopic} /> : null}
          {reportMetadata ? (
            <input type="hidden" name="metadataCapture" value="1" />
          ) : null}
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleMessageChange}
              placeholder={t("dashboard.assistant.typeYourResponse")}
              className="h-10 min-w-[180px] flex-1 rounded-full border border-transparent bg-[#f6f9fc] px-4 text-xs text-[#1f2937] outline-none placeholder:text-[#95a3b8] transition-[background-color,box-shadow,border-color] duration-150 focus:border-white/70 focus:bg-white focus:shadow-[0_8px_22px_rgba(148,163,184,0.12)] focus-visible:outline-none"
            />
            <button
              type="button"
              onClick={toggleVoiceRecording}
              disabled={isTranscribing}
              aria-label={t("dashboard.assistant.toggleMicrophone")}
              aria-pressed={isRecordingActive}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                isRecordingActive ? "bg-[#de3838] text-white" : "text-[#8b97a8]"
              } ${isTranscribing ? "cursor-not-allowed opacity-40" : ""}`}
            >
              <IconMicrophone size={14} />
            </button>
            <button
              type="submit"
              aria-label={t("common.send")}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f59e0b] text-white"
            >
              <Image
                src={sendIcon}
                alt={t("common.send")}
                width={10}
                height={14}
                className="h-[14px] w-[10px]"
              />
            </button>
            {isRecordingActive && (
              <button
                type="button"
                onClick={stopVoiceRecording}
                className="inline-flex h-9 shrink-0 items-center rounded-full bg-[#de3838] px-4 text-[10px] font-bold text-white sm:h-9 sm:px-5 sm:text-[11px]"
              >
                <span className="mr-1" aria-hidden>
                  &bull;
                </span>
                {t("dashboard.assistant.stopRecording")}
              </button>
            )}
          </div>
        </form>

        {!isRecordingActive && (
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex h-[54px] flex-1 items-center justify-between rounded-full bg-white px-4">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                    metadataError
                      ? "bg-[#fee2e2] text-[#dc2626]"
                      : reportMetadata
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : "bg-[#e9f1ff] text-[#3f7de0]"
                  }`}
                >
                  {isMetadataCapturing ? (
                    <IconLoader2 size={12} className="animate-spin" />
                  ) : metadataError ? (
                    <IconAlertCircle size={12} />
                  ) : reportMetadata ? (
                    <IconCheck size={12} />
                  ) : (
                    <IconMapPin size={12} />
                  )}
                </span>
                <div>
                  <p className="text-[11px] font-semibold leading-none text-[#1f2a3a]">
                    {t("dashboard.assistant.metadataCapture")}
                  </p>
                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#8b97a8]">
                    {metadataStatusText}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleMetadataCapture}
                disabled={isMetadataCapturing}
                aria-label={t("dashboard.assistant.toggleMetadataCapture")}
                aria-pressed={isMetadataEnabled}
                className={`inline-flex h-5 w-8 items-center rounded-full p-[2px] transition ${
                  isMetadataEnabled ? "bg-[#16a34a]" : "bg-[#d4dbe4]"
                } ${isMetadataCapturing ? "cursor-wait opacity-80" : ""}`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white transition ${
                    isMetadataEnabled ? "translate-x-3" : ""
                  }`}
                />
              </button>
            </div>

            <button
              type="button"
              onClick={toggleVoiceRecording}
              disabled={isTranscribing}
              className={`inline-flex h-[54px] shrink-0 items-center justify-center rounded-full bg-[#f59e0b] px-8 text-[11px] font-bold text-white sm:min-w-[188px] ${
                isTranscribing ? "cursor-not-allowed opacity-45" : ""
              }`}
            >
              <span className="mr-1" aria-hidden>
                &bull;
              </span>
              {isTranscribing
                ? t("dashboard.assistant.transcribing")
                : t("dashboard.assistant.tapToStartRecording")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
