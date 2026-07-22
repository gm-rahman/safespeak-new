// Demo-only frontend conversation adapter. This module intentionally does not
// call production conversation, AI, transcription, speech, or upload services.

export type DemoConversationStage =
  | "safety"
  | "what_happened"
  | "timing"
  | "people"
  | "evidence"
  | "next_step"
  | "summary";

export type DemoMessageRole = "assistant" | "user" | "system";

export type DemoSuggestion = {
  id: string;
  label: string;
  value: string;
};

export type DemoAttachmentStatus = "processing" | "ready" | "error";

export type DemoAttachment = {
  id: string;
  name: string;
  type: string;
  size: number;
  status: DemoAttachmentStatus;
  progress: number;
  previewUrl?: string;
  message?: string;
};

export type DemoConversationMessage = {
  id: string;
  role: DemoMessageRole;
  content: string;
  createdAt: string;
  suggestions?: DemoSuggestion[];
  attachmentId?: string;
};

export type DemoConversationState = {
  messages: DemoConversationMessage[];
  attachments: DemoAttachment[];
  stage: DemoConversationStage;
  progress: number;
  readiness: number;
};

export type DemoAssistantTurn = {
  message: DemoConversationMessage;
  stage: DemoConversationStage;
  progress: number;
  readiness: number;
};

export const DEMO_ASSISTANT_STORAGE_KEY =
  "safespeak_demo_assistant_conversation";

export const DEMO_VOICE_TRANSCRIPT =
  "I want to explain what happened and get some guidance.";
export const DEMO_DICTATION_TRANSCRIPT =
  "I would like to explain what happened in my own words.";

const demoDelays = {
  assistant: 620,
  transcription: 760,
  attachmentStep: 180,
};

const safetySuggestions: DemoSuggestion[] = [
  { id: "safe", label: "I am safe", value: "I am safe right now." },
  { id: "unsafe", label: "I'm not safe", value: "I'm not safe right now." },
  { id: "unsure", label: "I'm not sure", value: "I'm not sure if I am safe." },
];

const nextStepSuggestions: DemoSuggestion[] = [
  {
    id: "keep_talking",
    label: "Keep talking",
    value: "I want to keep talking through what happened.",
  },
  {
    id: "organize_summary",
    label: "Organize a summary",
    value: "Please organize a short summary of what I shared.",
  },
  {
    id: "support_options",
    label: "Show support options",
    value: "I want to understand what support options might be available.",
  },
];

let demoMessageSequence = 0;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function createDemoMessage(
  role: DemoMessageRole,
  content: string,
  options: Pick<DemoConversationMessage, "suggestions" | "attachmentId"> = {}
): DemoConversationMessage {
  demoMessageSequence += 1;

  return {
    id: `demo-message-${demoMessageSequence}`,
    role,
    content,
    createdAt: new Date().toISOString(),
    ...options,
  };
}

export function resetDemoConversation(
  initialMessage?: string
): DemoConversationState {
  const trimmed = initialMessage?.trim();
  const messages: DemoConversationMessage[] = [];

  if (trimmed) {
    messages.push(createDemoMessage("user", trimmed));
    messages.push(
      createDemoMessage(
        "assistant",
        "Thanks for starting with that. Before we go further, are you somewhere you can safely keep talking?",
        { suggestions: safetySuggestions }
      )
    );
  } else {
    messages.push(
      createDemoMessage(
        "assistant",
        "I am here with you. You can speak, type, or attach something for this demo conversation. To start gently: are you somewhere you can safely keep talking?",
        { suggestions: safetySuggestions }
      )
    );
  }

  return {
    messages,
    attachments: [],
    stage: "safety",
    progress: trimmed ? 18 : 12,
    readiness: trimmed ? 10 : 6,
  };
}

function classifyNextStage(
  currentStage: DemoConversationStage,
  content: string
): DemoConversationStage {
  const normalized = content.toLowerCase();

  if (
    /\b(file|photo|screenshot|recording|document|evidence)\b/.test(normalized)
  ) {
    return currentStage === "summary" ? "summary" : "next_step";
  }

  if (currentStage === "safety") return "what_happened";
  if (currentStage === "what_happened") return "timing";
  if (currentStage === "timing") return "people";
  if (currentStage === "people") return "evidence";
  if (currentStage === "evidence") return "next_step";
  if (currentStage === "next_step") return "summary";

  return "summary";
}

function progressForStage(stage: DemoConversationStage): {
  progress: number;
  readiness: number;
} {
  switch (stage) {
    case "safety":
      return { progress: 12, readiness: 6 };
    case "what_happened":
      return { progress: 28, readiness: 18 };
    case "timing":
      return { progress: 44, readiness: 32 };
    case "people":
      return { progress: 58, readiness: 48 };
    case "evidence":
      return { progress: 72, readiness: 62 };
    case "next_step":
      return { progress: 86, readiness: 78 };
    case "summary":
      return { progress: 96, readiness: 90 };
  }
}

function getResponseForStage(
  stage: DemoConversationStage,
  content: string
): Pick<DemoConversationMessage, "content" | "suggestions"> {
  const normalized = content.toLowerCase();

  if (stage === "what_happened") {
    const safetyPrefix = normalized.includes("not safe")
      ? "If you may be in immediate danger, use the emergency and quick-exit controls already visible in SafeSpeak. For this demo, I will keep the conversation focused and calm."
      : "Thank you for letting me know.";

    return {
      content: `${safetyPrefix} When you are ready, tell me a little about what happened in your own words.`,
    };
  }

  if (stage === "timing") {
    return {
      content:
        "I understand the broad shape of what happened. A rough time helps organize the story. Was this today, recently, or at another time you remember?",
    };
  }

  if (stage === "people") {
    return {
      content:
        "That timing is helpful. Who was involved or nearby? You can use first names, roles, or descriptions only if that feels safer.",
    };
  }

  if (stage === "evidence") {
    return {
      content:
        "Thanks. If you have screenshots, photos, documents, or a note saved locally, you can attach one for this demo. Nothing is uploaded.",
    };
  }

  if (stage === "next_step") {
    return {
      content:
        "I have enough for a demo summary. What would feel most useful next: keep talking, organize a short summary, or look at support options?",
      suggestions: nextStepSuggestions,
    };
  }

  return {
    content:
      "Here is the demo summary so far: you shared a concern, answered the immediate safety check, added context, and can include local evidence for review. This is only a frontend demo and does not submit, report, or store anything outside this browser session.",
  };
}

export async function sendDemoConversationMessage(input: {
  content: string;
  stage: DemoConversationStage;
}): Promise<DemoAssistantTurn> {
  await wait(demoDelays.assistant);

  const stage = classifyNextStage(input.stage, input.content);
  const response = getResponseForStage(stage, input.content);
  const progress = progressForStage(stage);

  return {
    message: createDemoMessage("assistant", response.content, {
      suggestions: response.suggestions,
    }),
    stage,
    ...progress,
  };
}

export async function getDemoAssistantResponse(input: {
  content: string;
  stage: DemoConversationStage;
}): Promise<DemoAssistantTurn> {
  return sendDemoConversationMessage(input);
}

export async function simulateDemoTranscription(): Promise<string> {
  await wait(demoDelays.transcription);
  return DEMO_VOICE_TRANSCRIPT;
}

export async function simulateDemoDictation(): Promise<string> {
  await wait(demoDelays.transcription);
  return DEMO_DICTATION_TRANSCRIPT;
}

export async function simulateDemoAttachmentProcessing(
  file: File,
  onProgress?: (progress: number) => void
): Promise<Pick<DemoAttachment, "message" | "progress" | "status">> {
  for (const progress of [18, 42, 67, 86, 100]) {
    await wait(demoDelays.attachmentStep);
    onProgress?.(progress);
  }

  if (file.size > 12 * 1024 * 1024) {
    return {
      status: "error",
      progress: 100,
      message: "This demo accepts files up to 12 MB.",
    };
  }

  return {
    status: "ready",
    progress: 100,
    message: "Attached locally and available in this demo session.",
  };
}
