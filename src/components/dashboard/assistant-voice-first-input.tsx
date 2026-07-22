"use client";

import Image from "next/image";
import type { KeyboardEventHandler, ReactNode, Ref } from "react";

import { IconCheck, IconMicrophone, IconX } from "@tabler/icons-react";

import sendIcon from "@/assets/sendIcon.svg?url";

type AssistantVoiceFirstInputProps = {
  value: string;
  name?: string;
  placeholder: string;
  inputLabel?: string;
  onChange: (value: string) => void;
  onDictationClick: () => void;
  dictationDisabled?: boolean;
  dictationLabel: string;
  onVoiceFirstClick: () => void;
  voiceFirstDisabled?: boolean;
  voiceFirstLabel: string;
  sendLabel: string;
  showSendButton: boolean;
  disabled?: boolean;
  sendDisabled?: boolean;
  isProcessing?: boolean;
  captureState?: "idle" | "listening" | "review";
  captureLabel?: string;
  cancelLabel: string;
  confirmLabel?: string;
  captureConfirmDisabled?: boolean;
  onCancelCapture?: () => void;
  onConfirmCapture?: () => void;
  leadingAction?: ReactNode;
  error?: string | null;
  inputRef?: Ref<HTMLInputElement>;
  inputTestId?: string;
  dictationTestId?: string;
  voiceTestId?: string;
  sendTestId?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export function AvatarVoiceControlGlyph() {
  return (
    <span className="inline-flex items-center gap-[2px]" aria-hidden="true">
      <span className="h-[4px] w-[4px] rounded-full bg-current opacity-95" />
      <span className="h-[10px] w-[2.5px] rounded-full bg-current" />
      <span className="h-[14px] w-[2.5px] rounded-full bg-current" />
      <span className="h-[10px] w-[2.5px] rounded-full bg-current" />
      <span className="h-[4px] w-[4px] rounded-full bg-current opacity-95" />
    </span>
  );
}

export function AssistantVoiceFirstInput({
  value,
  name,
  placeholder,
  inputLabel,
  onChange,
  onDictationClick,
  dictationDisabled = false,
  dictationLabel,
  onVoiceFirstClick,
  voiceFirstDisabled = false,
  voiceFirstLabel,
  sendLabel,
  showSendButton,
  disabled = false,
  sendDisabled = false,
  isProcessing = false,
  captureState = "idle",
  captureLabel,
  cancelLabel,
  confirmLabel = "Use voice text",
  captureConfirmDisabled = false,
  onCancelCapture,
  onConfirmCapture,
  leadingAction,
  error,
  inputRef,
  inputTestId,
  dictationTestId,
  voiceTestId,
  sendTestId,
  onKeyDown,
}: AssistantVoiceFirstInputProps) {
  if (captureState !== "idle") {
    return (
      <>
        <div
          className="flex items-center gap-2 rounded-full border border-[#dbe6f2] bg-[#f8fbff] px-4 py-2"
          data-testid="assistant-voice-first-capture"
        >
          <div className="flex flex-1 items-center gap-3 overflow-hidden">
            <span className="text-[11px] font-medium text-[#64748b]">
              {captureLabel}
            </span>
            <div className="flex h-8 flex-1 items-center gap-1 overflow-hidden">
              {Array.from({ length: 32 }).map((_, index) => (
                <span
                  key={index}
                  className={`w-1 rounded-full bg-[#7aa4d8] ${
                    captureState === "listening" ? "animate-pulse" : ""
                  }`}
                  style={{
                    height: `${10 + ((index * 7) % 18)}px`,
                    animationDelay: `${index * 45}ms`,
                    opacity: 0.38 + (index % 6) * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={onCancelCapture}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe6f2] bg-white text-[#64748b] transition hover:bg-[#f4f7fb]"
            aria-label={cancelLabel}
          >
            <IconX size={16} />
          </button>
          <button
            type="button"
            onClick={onConfirmCapture}
            disabled={captureConfirmDisabled}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f5d9f] text-white transition hover:bg-[#0c518a] disabled:cursor-not-allowed disabled:opacity-45"
            aria-label={confirmLabel}
          >
            <IconCheck size={16} />
          </button>
        </div>
        {error ? (
          <p
            className="px-4 pt-2 text-[11px] leading-[1.45] text-[#c24141]"
            aria-live="polite"
          >
            {error}
          </p>
        ) : null}
      </>
    );
  }

  return (
    <>
      <div
        className="flex items-center gap-2 rounded-full border border-[#dbe6f2] bg-white px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
        data-testid="assistant-voice-first-input"
      >
        {leadingAction}
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={onKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          aria-label={inputLabel}
          data-testid={inputTestId}
          className="h-11 min-w-[180px] flex-1 rounded-full border border-transparent bg-transparent px-3 text-sm text-[#1f2937] outline-none transition-[background-color,box-shadow,border-color] duration-150 placeholder:text-[#95a3b8] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="button"
          onClick={onDictationClick}
          disabled={dictationDisabled}
          aria-label={dictationLabel}
          data-testid={dictationTestId}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[#64748b] transition hover:bg-[#f4f7fb] ${
            dictationDisabled ? "cursor-not-allowed opacity-40" : ""
          }`}
        >
          <IconMicrophone size={18} />
        </button>
        {showSendButton ? (
          <span className="inline-flex shrink-0 items-center rounded-full border border-[#dbe6f2] bg-white p-1 shadow-[0_6px_18px_rgba(148,163,184,0.14)]">
            <button
              type="submit"
              aria-label={sendLabel}
              data-testid={sendTestId}
              disabled={sendDisabled}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f5d9f] text-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              {isProcessing ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
              ) : (
                <Image
                  src={sendIcon}
                  alt={sendLabel}
                  width={10}
                  height={14}
                  className="h-[14px] w-[10px]"
                />
              )}
            </button>
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-[#dbe6f2] bg-white p-1 shadow-[0_6px_18px_rgba(148,163,184,0.14)]">
            <button
              type="button"
              onClick={onVoiceFirstClick}
              disabled={voiceFirstDisabled}
              aria-label={voiceFirstLabel}
              data-testid={voiceTestId}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#196bb1] text-white transition hover:bg-[#196bb1] ${
                voiceFirstDisabled ? "cursor-not-allowed opacity-40" : ""
              }`}
            >
              <AvatarVoiceControlGlyph />
            </button>
          </span>
        )}
      </div>
      {error ? (
        <p
          className="px-4 pt-2 text-[11px] leading-[1.45] text-[#c24141]"
          aria-live="polite"
        >
          {error}
        </p>
      ) : null}
    </>
  );
}
