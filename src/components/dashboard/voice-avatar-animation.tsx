"use client";

import AIOrbAvatar from "@/components/dashboard/AIOrbAvatar";

import styles from "./voice-avatar-animation.module.css";

export type VoiceAvatarState =
  | "idle"
  | "listening"
  | "userSpeaking"
  | "aiSpeaking";

type VoiceAvatarAnimationProps = {
  state: VoiceAvatarState;
  size?: "large" | "small";
  alt?: string;
  className?: string;
  showAmbientEffects?: boolean;
};

const stateLabels: Record<VoiceAvatarState, string> = {
  idle: "SafeSpeak assistant idle",
  listening: "SafeSpeak assistant listening",
  userSpeaking: "SafeSpeak assistant hearing your voice",
  aiSpeaking: "SafeSpeak assistant responding",
};

export function VoiceAvatarAnimation({
  state,
  size = "large",
  alt = "SafeSpeak assistant voice avatar",
  className = "",
  showAmbientEffects = false,
}: VoiceAvatarAnimationProps) {
  const wrapperClassName = [
    styles.avatar,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const orbSize = size === "large"
    ? "clamp(176px, 28vw, 240px)"
    : "74px";

  return (
    <div
      role="img"
      aria-label={alt || stateLabels[state]}
      data-testid="voice-avatar-animation"
      data-voice-state={state}
      data-voice-size={size}
      className={wrapperClassName}
    >
      <AIOrbAvatar
        size={orbSize}
        voiceState={state}
        showAmbientEffects={showAmbientEffects}
      />
    </div>
  );
}

export default VoiceAvatarAnimation;
