"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

import {
  IconAlertCircle,
  IconChevronLeft,
  IconLoader2,
  IconMicrophone,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import sendIcon from "@/assets/sendIcon.svg?url";
import { AssistantInteraction } from "@/components/dashboard/assistant-interaction";
import {
  type AssistantConversationMessage,
  type AssistantTimeline,
  sendTimelineAssistantMessage,
} from "@/lib/assistant-conversation";

import { interFont } from "./dashboard-shared";

const emptyTimeline: AssistantTimeline = {};

const preferredTimelineFieldOrder = [
  "who",
  "relationship",
  "what",
  "where",
  "when",
  "how",
  "frequency",
  "impact",
  "threats",
  "injuries",
  "witnesses",
  "evidence",
  "actions_taken",
  "unsafe_now",
] as const;

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
  timeline: AssistantTimeline
): Array<[string, string]> {
  return Object.entries(timeline)
    .filter(([, value]) => value.trim().length > 0)
    .sort(([leftKey], [rightKey]) => {
      const leftIndex = preferredTimelineFieldOrder.indexOf(
        leftKey as (typeof preferredTimelineFieldOrder)[number]
      );
      const rightIndex = preferredTimelineFieldOrder.indexOf(
        rightKey as (typeof preferredTimelineFieldOrder)[number]
      );

      const normalizedLeftIndex =
        leftIndex === -1 ? preferredTimelineFieldOrder.length : leftIndex;
      const normalizedRightIndex =
        rightIndex === -1 ? preferredTimelineFieldOrder.length : rightIndex;

      if (normalizedLeftIndex !== normalizedRightIndex) {
        return normalizedLeftIndex - normalizedRightIndex;
      }

      return leftKey.localeCompare(rightKey);
    });
}

function SafeSpeakAssistantPage({
  isRecording = false,
}: {
  isRecording?: boolean;
}) {
  const { t } = useTranslation();

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
            className="text-xs font-medium text-[#7b8798]"
          >
            {t("common.cancel")}
          </Link>
        </div>

        <AssistantInteraction
          isRecording={isRecording}
          headlineClassName={`${interFont.className} mt-6 max-w-[460px] text-center text-[28px] font-semibold leading-[32px] tracking-[0] text-[#24364f] sm:text-[30px] sm:leading-[34px] xl:text-[32px] xl:leading-[36px]`}
        />
      </div>
    </div>
  );
}

function SafeSpeakAssistantConversationPage({
  initialMessage,
}: {
  initialMessage?: string;
}) {
  const { t } = useTranslation();
  const seededMessage = initialMessage?.trim();
  const [input, setInput] = useState("");
  const [timeline, setTimeline] = useState<AssistantTimeline>(emptyTimeline);
  const [messages, setMessages] = useState<AssistantConversationMessage[]>(() =>
    [
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
    ].filter(Boolean) as AssistantConversationMessage[]
  );
  const [isSending, setIsSending] = useState(Boolean(seededMessage));
  const [error, setError] = useState<string | null>(null);
  const hasSentInitialRef = useRef(false);
  const latestMessagesRef = useRef(messages);

  useEffect(() => {
    latestMessagesRef.current = messages;
  }, [messages]);

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
        });
        const assistantContent =
          response.nextQuestion?.trim() || response.assistantMessage;

        setTimeline(response.timeline);
        setMessages((currentMessages) => [
          ...currentMessages,
          {
            role: "assistant",
            content: assistantContent,
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
    [timeline]
  );

  useEffect(() => {
    if (!seededMessage || hasSentInitialRef.current) {
      return;
    }

    hasSentInitialRef.current = true;
    void requestAssistantTurn(seededMessage, latestMessagesRef.current);
  }, [requestAssistantTurn, seededMessage]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || isSending) {
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

  const timelineEntries = sortTimelineEntries(timeline);
  const timelineFieldCount = timelineEntries.length;

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4 xl:flex-1 xl:overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col xl:h-full xl:min-h-0">
        <div className="flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2">
          <Link
            href="/dashboard?view=assistant"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]"
          >
            <IconChevronLeft size={14} />
            {t("dashboard.assistant.timelineBuilder")}
          </Link>
          <Link
            href="/dashboard"
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
                  <div
                    className={`inline-flex max-w-[min(88%,540px)] rounded-[20px] bg-white px-4 py-2.5 text-[11px] leading-[1.55] shadow-[0_8px_22px_rgba(148,163,184,0.12)] ${
                      message.role === "user"
                        ? "rounded-tr-[8px] text-[#314256]"
                        : "rounded-tl-[8px] text-[#5f6f86]"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isSending ? (
                <div className="inline-flex items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#5f6f86] shadow-[0_8px_22px_rgba(148,163,184,0.12)]">
                  <IconLoader2 size={12} className="animate-spin" />
                  {t("dashboard.assistant.conversation.updating")}
                </div>
              ) : null}

              {error ? (
                <div className="inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]">
                  <IconAlertCircle size={12} />
                  {error}
                </div>
              ) : null}
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
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t("dashboard.assistant.typeYourResponse")}
                  className="h-11 flex-1 rounded-full bg-[#f6f9fc] px-4 text-sm text-[#1f2937] outline-none placeholder:text-[#95a3b8]"
                />
                <button
                  type="button"
                  aria-label={t("dashboard.assistant.toggleMicrophone")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#8b97a8] transition hover:bg-[#f4f7fb]"
                >
                  <IconMicrophone size={16} />
                </button>
                <button
                  type="submit"
                  disabled={isSending || !input.trim()}
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

              <div className="rounded-[18px] border border-dashed border-[#e3e9f2] bg-[#fbfdff] p-6 text-center text-[10px] text-[#c0c9d6]">
                {t("dashboard.assistant.conversation.moreFields")}
              </div>
            </div>

            <div className="border-t border-[#edf2f7] pt-4">
                <Link
                  href="/dashboard?view=reportsubmissionsupport"
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
