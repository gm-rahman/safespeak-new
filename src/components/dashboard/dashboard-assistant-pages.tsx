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

const emptyTimeline: AssistantTimeline = {
  who: "",
  what: "",
  where: "",
};

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

  const timelineFields = [
    {
      key: "who",
      label: t("dashboard.assistant.conversation.who"),
      fallback: t("dashboard.assistant.conversation.waitingForDetails"),
    },
    {
      key: "what",
      label: t("dashboard.assistant.conversation.what"),
      fallback: t("dashboard.assistant.conversation.waitingForDetails"),
    },
    {
      key: "where",
      label: t("dashboard.assistant.conversation.where"),
      fallback: t("dashboard.assistant.conversation.processingFromTranscript"),
    },
  ] as const;

  return (
    <div className="px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4 xl:flex-1 xl:overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col xl:h-full xl:min-h-0">
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

        <div className="mt-2 grid min-h-0 grid-cols-1 gap-2 xl:flex-1 xl:grid-cols-[1.65fr_1fr] xl:overflow-hidden">
          <div className="flex min-h-[520px] flex-col rounded-[14px] bg-[#dff0fb] p-3 xl:min-h-0 xl:overflow-hidden">
            <div className="min-h-0 flex-1 overflow-hidden">
              <div className="h-full space-y-3 overflow-y-auto overscroll-contain pr-1">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                  className={message.role === "user" ? "flex justify-end" : ""}
                >
                  <div
                    className={`inline-flex max-w-[520px] rounded-2xl bg-white px-3 py-2 text-[10px] leading-relaxed ${
                      message.role === "user"
                        ? "text-[#3d4a5f]"
                        : "text-[#5f6f86]"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isSending ? (
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[10px] text-[#5f6f86]">
                  <IconLoader2 size={12} className="animate-spin" />
                  {t("dashboard.assistant.conversation.updating")}
                </div>
              ) : null}

              {error ? (
                <div className="inline-flex max-w-[520px] items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[10px] text-[#c24141]">
                  <IconAlertCircle size={12} />
                  {error}
                </div>
              ) : null}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-4 shrink-0 rounded-[16px] border border-[#dbe6f2] bg-white p-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t("dashboard.assistant.typeYourResponse")}
                  className="h-9 flex-1 rounded-full bg-[#f6f9fc] px-4 text-xs text-[#1f2937] outline-none placeholder:text-[#95a3b8]"
                />
                <button
                  type="button"
                  aria-label={t("dashboard.assistant.toggleMicrophone")}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#8b97a8]"
                >
                  <IconMicrophone size={14} />
                </button>
                <button
                  type="submit"
                  disabled={isSending || !input.trim()}
                  aria-label={t("common.send")}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f59e0b] text-white disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {isSending ? (
                    <IconLoader2 size={14} className="animate-spin" />
                  ) : (
                    <Image
                      src={sendIcon}
                      alt={t("common.send")}
                      width={10}
                      height={14}
                      className="h-[14px] w-[10px]"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-[14px] border border-[#e3e9f2] bg-white p-3 xl:sticky xl:top-0 xl:self-start">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#5f6f86]">
                {t("dashboard.assistant.conversation.liveTimelineBuilder")}
              </p>
              <span className="rounded-full bg-[#eaf2ff] px-2 py-0.5 text-[8px] font-semibold text-[#3f7de0]">
                {t("dashboard.assistant.conversation.updating")}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {timelineFields.map((field) => {
                const value = timeline[field.key];

                return (
                  <div
                    key={field.key}
                    className="rounded-[10px] border border-[#ebeff5] bg-[#f9fbfd] p-2.5"
                  >
                    <p className="text-[8px] font-semibold uppercase text-[#8fa0b6]">
                      {field.label}
                    </p>
                    <p
                      className={`mt-1 text-[11px] ${
                        value
                          ? "font-semibold text-[#1f2a3a]"
                          : "italic text-[#8fa0b6]"
                      }`}
                    >
                      {value || field.fallback}
                    </p>
                    {value ? (
                      <div className="mt-2 h-[2px] rounded-full bg-[#d8e3f5]">
                        <div className="h-[2px] w-full rounded-full bg-[#3f7de0]" />
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <div className="rounded-[10px] border border-dashed border-[#e3e9f2] bg-[#fbfdff] p-6 text-center text-[9px] text-[#c0c9d6]">
                {t("dashboard.assistant.conversation.moreFields")}
              </div>

              <div className="pt-1">
                <Link
                  href="/dashboard?view=reportsubmissionsupport"
                  className="inline-flex h-9 items-center rounded-full bg-[#0f5d9f] px-5 text-[11px] font-bold text-white shadow-[0_8px_18px_rgba(15,93,159,0.25)]"
                >
                  {t("dashboard.assistant.continueToReportSubmission")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SafeSpeakAssistantConversationPage, SafeSpeakAssistantPage };
