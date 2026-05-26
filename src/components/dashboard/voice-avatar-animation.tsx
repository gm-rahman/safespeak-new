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
};

const stateLabels: Record<VoiceAvatarState, string> = {
  idle: "SafeSpeak assistant idle",
  listening: "SafeSpeak assistant listening",
  userSpeaking: "SafeSpeak assistant hearing your voice",
  aiSpeaking: "SafeSpeak assistant responding",
};

/**
 * Maps the voice state to a boolean for the 3D orb's audio reactivity.
 * The orb uses this to drive its u_audio_intensity uniform.
 */
function isVoiceActiveFromState(state: VoiceAvatarState): boolean {
  return state === "userSpeaking" || state === "aiSpeaking" || state === "listening";
}

export function VoiceAvatarAnimation({
  state,
  size = "large",
  alt = "SafeSpeak assistant voice avatar",
  className = "",
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
    : "58px";

  const isActive = isVoiceActiveFromState(state);

  return (
    <div
      role="img"
      aria-label={stateLabels[state]}
      data-testid="voice-avatar-animation"
      data-voice-state={state}
      data-voice-size={size}
      className={wrapperClassName}
    >
      <AIOrbAvatar
        size={orbSize}
        isVoiceActive={isActive}
      />
    </div>
  );
}

export default VoiceAvatarAnimation;
