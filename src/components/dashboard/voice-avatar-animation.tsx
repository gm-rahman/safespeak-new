"use client";

import AssistantSphereAnimated from "@/components/dashboard/AssistantSphereAnimated";

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

export function VoiceAvatarAnimation({
  state,
  size = "large",
  alt = "SafeSpeak assistant voice avatar",
  className = "",
}: VoiceAvatarAnimationProps) {
  const wrapperClassName = [
    styles.avatar,
    styles[size],
    styles[state],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      role="img"
      aria-label={stateLabels[state]}
      data-testid="voice-avatar-animation"
      data-voice-state={state}
      data-voice-size={size}
      className={wrapperClassName}
    >
      <span className={styles.halo} aria-hidden="true" />
      <span className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
      <span className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />
      <span
        className={`${styles.blob} ${styles.blobThree}`}
        aria-hidden="true"
      />

      <AssistantSphereAnimated
        alt={alt}
        fillParent
        particleCount={size === "large" ? (state === "idle" ? 760 : 1080) : 420}
        className={styles.sphere}
      />
    </div>
  );
}

export default VoiceAvatarAnimation;
