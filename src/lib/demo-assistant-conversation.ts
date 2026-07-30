// Demo-only frontend conversation adapter. This module intentionally does not
// call production conversation, AI, transcription, speech, or upload services.

import {
  EMERGENCY_NUMBER,
  SUPPORT_NUMBER_DIAL,
  SUPPORT_NUMBER_DISPLAY,
} from "@/lib/safety";

export type DemoConversationStage =
  | "opening"
  | "initial_clarification"
  | "more_detail"
  | "understanding_summary"
  | "added_complexity"
  | "people_involved"
  | "updated_summary"
  | "completion_transition"
  | "final_result"
  | "hijab_clarification"
  | "hijab_result"
  | "hijab_reclarify"
  | "hijab_confirmed";

export type DemoMessageRole = "assistant" | "user" | "system";

export type DemoSuggestion = {
  id: string;
  label: string;
  value: string;
};

export type DemoSafetyStatus = "unknown" | "safe" | "unsafe";

export type DemoUrgencyLevel = "low" | "medium" | "high";

export type DemoBiasIndicator = {
  id: string;
  label: string;
  description: string;
};

export type DemoUnderstanding = {
  concernType: string;
  urgencyLevel: DemoUrgencyLevel;
  safetyStatus: DemoSafetyStatus;
  biasIndicators: DemoBiasIndicator[];
  summary: string;
};

export type DemoEmergencyAction = {
  id: string;
  label: string;
  type: "call";
  value: string;
};

export type DemoEmergencyAlert = {
  id: string;
  heading: string;
  body: string;
  actions: DemoEmergencyAction[];
};

export type DemoExplanation = {
  id: string;
  heading: string;
  body: string;
};

export type DemoNextStep = {
  id: string;
  label: string;
  description: string;
};

export type DemoNextStepGroup = {
  id: string;
  heading: string;
  steps: DemoNextStep[];
};

export type DemoServiceOption = {
  id: string;
  name: string;
  category: string;
  description: string;
  contactLabel?: string;
  contactValue?: string;
  website?: string;
  whyRelevant?: string;
  howSelected?: string;
  matchScore?: number;
};

export type DemoMessageBlock =
  | { kind: "safety_alert"; alert: DemoEmergencyAlert }
  | { kind: "explanation"; explanation: DemoExplanation }
  | { kind: "next_steps"; group: DemoNextStepGroup }
  | { kind: "service_options"; services: DemoServiceOption[] };

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
  blocks?: DemoMessageBlock[];
};

export type DemoCollectedAnswers = {
  initialConcern?: string;
  timingOrLocation?: string;
  details?: string;
  complexity?: string;
  people?: string;
  confirmation?: string;
};

type DemoRecommendation = {
  id: string;
  title: string;
  description: string;
  relevanceScore: number;
  category: string;
  tags: string[];
  location: string;
  availability: string;
  contactLabel: string;
  contactValue: string;
};

type DemoConversationResult = {
  summaryTitle: string;
  summaryText: string;
  categories: string[];
  disclaimerTitle: string;
  disclaimerText: string;
  recommendations: DemoRecommendation[];
  actions: DemoSuggestion[];
};

export type DemoConversationState = {
  messages: DemoConversationMessage[];
  attachments: DemoAttachment[];
  stage: DemoConversationStage;
  collectedAnswers: DemoCollectedAnswers;
  finalResult?: DemoConversationResult;
  understanding?: DemoUnderstanding;
  progress: number;
  readiness: number;
};

export type DemoAssistantTurn = {
  message: DemoConversationMessage;
  stage: DemoConversationStage;
  collectedAnswers: DemoCollectedAnswers;
  finalResult?: DemoConversationResult;
  understanding?: DemoUnderstanding;
  progress: number;
  readiness: number;
};

export const DEMO_ASSISTANT_STORAGE_KEY =
  "safespeak_demo_assistant_conversation";

export const DEMO_VOICE_TRANSCRIPT =
  "Someone from my building keeps following me near the train station.";
export const DEMO_DICTATION_TRANSCRIPT =
  "It happened near Redfern Station after work.";

const demoDelays = {
  assistant: 620,
  transcription: 760,
  attachmentStep: 180,
};

const openingSuggestions: DemoSuggestion[] = [
  {
    id: "followed",
    label: "Someone is following me",
    value: "Someone from my building keeps following me near the train station.",
  },
  {
    id: "harassed",
    label: "I am being harassed",
    value: "Someone has been harassing me and I am not sure what to do.",
  },
  {
    id: "unsafe",
    label: "I feel unsafe",
    value: "I feel unsafe and want help understanding my options.",
  },
  {
    id: "hijab_pulled",
    label: "Someone pulled my hijab",
    value: "Someone pulled my hijab.",
  },
];

const hijabSafetySuggestions: DemoSuggestion[] = [
  {
    id: "hijab_not_safe",
    label: "I'm not safe right now",
    value: "I'm not safe right now.",
  },
  {
    id: "hijab_safe",
    label: "I am safe right now",
    value: "I am safe right now.",
  },
];

export const HIJAB_CONFIRM_TRIAGE_SUGGESTION_ID = "hijab_confirm_correct";

const hijabConfirmationActions: DemoSuggestion[] = [
  {
    id: HIJAB_CONFIRM_TRIAGE_SUGGESTION_ID,
    label: "Yes, this is right",
    value: "Yes, this is right.",
  },
  {
    id: "hijab_confirm_clarify",
    label: "Let me clarify something",
    value: "Let me clarify something.",
  },
  {
    id: "hijab_confirm_restart",
    label: "Start over",
    value: "I want to start over.",
  },
];

const confirmationSuggestions: DemoSuggestion[] = [
  {
    id: "correct",
    label: "That is correct",
    value: "Yes, that is correct.",
  },
  {
    id: "complex",
    label: "It is more complex",
    value: "It is a bit more complex than that.",
  },
  {
    id: "change",
    label: "I need to change something",
    value: "I need to change one part of that.",
  },
];

/**
 * The general (non-hijab) storyline's own "confirm and continue to Triage"
 * suggestion — the counterpart to `HIJAB_CONFIRM_TRIAGE_SUGGESTION_ID`. Both
 * ids are handled identically by `handleSuggestionClick` in
 * `dashboard-assistant-pages.tsx` (call `handleContinueToTriage()` rather
 * than sending the suggestion text back into the conversation) — see the
 * confirmed regression this fixes in docs/PHASE_6_MOCK_MATCHING.md
 * "Canonical Assistant conversation state."
 */
export const CONTINUE_TO_TRIAGE_SUGGESTION_ID = "continue_next_steps";

const finalActions: DemoSuggestion[] = [
  {
    id: CONTINUE_TO_TRIAGE_SUGGESTION_ID,
    label: "Continue to next steps",
    value: "I want to continue to next steps.",
  },
  {
    id: "start_over",
    label: "Start over",
    value: "I want to start over.",
  },
];

const demoRecommendations: DemoRecommendation[] = [
  {
    id: "1800respect",
    title: "1800RESPECT",
    description:
      "Confidential counselling and support for people affected by domestic, family, or sexual violence.",
    relevanceScore: 94,
    category: "Crisis and counselling support",
    tags: ["24/7", "Confidential", "Phone and web chat"],
    location: "Australia-wide",
    availability: "24 hours, 7 days",
    contactLabel: "Contact",
    contactValue: "1800 737 732",
  },
  {
    id: "nsw-police",
    title: "NSW Police Assistance Line",
    description:
      "For non-urgent police assistance where there is no immediate danger.",
    relevanceScore: 86,
    category: "Reporting option",
    tags: ["Non-emergency", "NSW", "Incident report"],
    location: "New South Wales",
    availability: "24 hours, 7 days",
    contactLabel: "Contact",
    contactValue: "131 444",
  },
  {
    id: "legal-aid-nsw",
    title: "Legal Aid NSW",
    description:
      "Free legal information and referral pathways for safety, housing, and personal protection questions.",
    relevanceScore: 78,
    category: "Legal information",
    tags: ["Legal help", "NSW", "Referral"],
    location: "New South Wales",
    availability: "Business hours and online information",
    contactLabel: "Access",
    contactValue: "legalaid.nsw.gov.au",
  },
];

/**
 * The general storyline's counterpart to `buildHijabUnderstanding` —
 * without this, `demoState.understanding` stayed `undefined` for every
 * conversation that never mentions "hijab", which silently blocked
 * `handleContinueToTriage` (it requires `understanding`) for four of the
 * five Assistant topics. Deterministic and scenario-driven, matching
 * `buildFinalResult`'s own already-hardcoded narrative (this demo storyline
 * does not perform real free-text classification — its summary text is
 * fixed regardless of what the user typed) — never inferred from raw
 * keywords. `safetyStatus: "unknown"` rather than assuming "safe": this
 * storyline never explicitly asks a safety-check question the way the
 * hijab branch does, so it is left honestly unknown rather than guessed.
 */
function buildFinalStoryUnderstanding(answers: DemoCollectedAnswers): DemoUnderstanding {
  return {
    concernType: "Harassment or stalking",
    urgencyLevel: "medium",
    safetyStatus: "unknown",
    biasIndicators: [],
    summary: buildUpdatedSummary(answers),
  };
}

function buildFinalResult(answers: DemoCollectedAnswers): DemoConversationResult {
  const location = answers.timingOrLocation ?? "the place you described";
  const people = answers.people ?? "the person involved";

  return {
    summaryTitle: "Here's what I've understood",
    summaryText: `You described repeated unwanted following around ${location}, possible connection to ${people}, and concern that the situation may become unsafe. You have not submitted a formal report through this demo.`,
    categories: [
      "Harassment or stalking",
      "Personal safety planning",
      "Support options",
    ],
    disclaimerTitle: "Important note",
    disclaimerText:
      "This is informational and hypothetical. SafeSpeak has not contacted police, a support service, or any other organisation. If you are in immediate danger, use the emergency controls already visible on this page.",
    recommendations: demoRecommendations,
    actions: finalActions,
  };
}

const hijabServiceRelevance: Record<string, string> = {
  "1800respect":
    "Provides confidential support for people affected by violence, including unwanted physical contact.",
  "nsw-police":
    "An option if you want to consider a non-emergency report about what happened.",
  "legal-aid-nsw":
    "Can help explain your options if you want to understand safety, protection, or reporting pathways.",
};

const hijabServiceOptions: DemoServiceOption[] = demoRecommendations.map(
  (recommendation) => ({
    id: recommendation.id,
    name: recommendation.title,
    category: recommendation.category,
    description: recommendation.description,
    contactLabel: recommendation.contactLabel,
    contactValue: recommendation.contactValue,
    website:
      recommendation.id === "legal-aid-nsw"
        ? recommendation.contactValue
        : undefined,
    whyRelevant: hijabServiceRelevance[recommendation.id],
    howSelected:
      "Matched from SafeSpeak's local demo support directory based on what you described.",
    matchScore: recommendation.relevanceScore,
  })
);

function buildHijabUnderstanding(
  safetyStatus: DemoSafetyStatus
): DemoUnderstanding {
  return {
    concernType: "Physical assault or unwanted physical contact",
    urgencyLevel: safetyStatus === "unsafe" ? "high" : "medium",
    safetyStatus,
    biasIndicators: [
      {
        id: "religious-bias",
        label: "Possible religious bias indicator",
        description:
          "Targeting a hijab may point to a religiously motivated element. This is a contextual indicator, not a confirmed legal finding.",
      },
      {
        id: "gender-bias",
        label: "Possible gender-related bias indicator",
        description:
          "A hijab is also commonly associated with gender identity and presentation, so this may include a gender-related dimension. This is a contextual indicator, not a confirmed legal finding.",
      },
    ],
    summary:
      "You described someone pulling your hijab, which SafeSpeak is treating as a possible physical assault or unwanted physical contact concern.",
  };
}

function buildHijabSafetyAlert(): DemoEmergencyAlert {
  return {
    id: "hijab-safety-alert",
    heading: "Your safety matters most",
    body: `If you are in immediate danger, call ${EMERGENCY_NUMBER} now. If you can, move to a public place, nearby people, a staffed location, or another place that feels safer. ${SUPPORT_NUMBER_DISPLAY} offers confidential counselling and support for people affected by violence or abuse, 24 hours a day, 7 days a week. This is general safety information, not legal advice, and SafeSpeak has not contacted any service on your behalf.`,
    actions: [
      {
        id: "call-emergency",
        label: `Call ${EMERGENCY_NUMBER}`,
        type: "call",
        value: EMERGENCY_NUMBER,
      },
      {
        id: "call-support",
        label: SUPPORT_NUMBER_DISPLAY,
        type: "call",
        value: SUPPORT_NUMBER_DIAL,
      },
    ],
  };
}

function buildHijabExplanation(): DemoExplanation {
  return {
    id: "hijab-explanation",
    heading: "Why the understanding changed",
    body: "Someone pulling your hijab is being treated as a possible physical assault or unwanted physical contact concern. Because a hijab is often connected to religious practice, this may also carry a possible religious bias indicator. Because it can also relate to gender identity and presentation, there may be a related gender-based bias dimension. These are contextual indicators SafeSpeak uses to help tailor next steps, not a legal determination of bias or an official finding.",
  };
}

function buildHijabNextSteps(safetyStatus: DemoSafetyStatus): DemoNextStepGroup {
  const steps: DemoNextStep[] = [];

  if (safetyStatus === "unsafe") {
    steps.push({
      id: "immediate-safety",
      label: "Prioritise immediate safety",
      description: `Call ${EMERGENCY_NUMBER} if you are in immediate danger, or move to a public place, nearby people, or a staffed location if you are able to.`,
    });
  }

  steps.push(
    {
      id: "support-call",
      label: "Speak with a support service",
      description: `${SUPPORT_NUMBER_DISPLAY} offers confidential counselling for people affected by violence or abuse, 24 hours a day.`,
    },
    {
      id: "reporting-option",
      label: "Consider a non-emergency report",
      description:
        "If there is no immediate danger, you can consider a non-emergency report with police for what happened.",
    },
    {
      id: "legal-information",
      label: "Look into legal information",
      description:
        "Free legal information services can help you understand your options for personal safety and protection.",
    }
  );

  return {
    id: "hijab-next-steps",
    heading: "Next steps tailored to you",
    steps,
  };
}

function buildHijabResultBlocks(
  safetyStatus: DemoSafetyStatus
): { blocks: DemoMessageBlock[]; leadText: string } {
  const alert = safetyStatus === "unsafe" ? buildHijabSafetyAlert() : undefined;
  const explanation = buildHijabExplanation();
  const nextStepGroup = buildHijabNextSteps(safetyStatus);

  const blocks: DemoMessageBlock[] = [
    ...(alert ? [{ kind: "safety_alert", alert } as const] : []),
    { kind: "explanation", explanation },
    { kind: "next_steps", group: nextStepGroup },
    { kind: "service_options", services: hijabServiceOptions },
  ];

  const leadText = alert
    ? "Your safety matters most right now. I have also put together what I understood, why, and some tailored next steps below."
    : "Thank you for letting me know you are safe. Here is what I understood, why, and some tailored next steps below.";

  return { blocks, leadText };
}

let demoMessageSequence = 0;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function createDemoMessage(
  role: DemoMessageRole,
  content: string,
  options: Pick<
    DemoConversationMessage,
    "suggestions" | "attachmentId" | "blocks"
  > = {}
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

/**
 * Seeds a fresh conversation, optionally from a URL-param/prefill initial
 * message. This used to duplicate the "opening" stage's own transition
 * logic (a second, divergent copy of the hijab-keyword check and the
 * next-stage/message decision) instead of reusing `getScenarioResponse` —
 * confirmed bug: a seeded non-hijab message stayed on `stage: "opening"`
 * forever (showing the generic "I'm listening..." reply) instead of
 * advancing to `"initial_clarification"` the way the identical text typed
 * manually into the opening stage would. The next turn then re-processed
 * whatever the user typed next as if it were still the very first message,
 * silently diverging from the manually-typed path. Delegating to
 * `getScenarioResponse` here means there is exactly one place that decides
 * what happens to an "opening" stage message, seeded or typed.
 */
export function resetDemoConversation(
  initialMessage?: string
): DemoConversationState {
  const trimmed = initialMessage?.trim();

  if (!trimmed) {
    return {
      messages: [
        createDemoMessage(
          "assistant",
          "I’m listening. You can explain what has been happening in your own words. What would you like SafeSpeak to understand first?",
          { suggestions: openingSuggestions }
        ),
      ],
      attachments: [],
      stage: "opening",
      collectedAnswers: {},
      progress: 8,
      readiness: 4,
    };
  }

  const turn = getScenarioResponse({
    content: trimmed,
    stage: "opening",
    collectedAnswers: {},
  });
  const { progress, readiness } = progressForStage(turn.stage);

  return {
    messages: [createDemoMessage("user", trimmed), turn.message],
    attachments: [],
    stage: turn.stage,
    collectedAnswers: turn.collectedAnswers,
    understanding: turn.understanding,
    finalResult: turn.finalResult,
    progress,
    readiness,
  };
}

function progressForStage(stage: DemoConversationStage): {
  progress: number;
  readiness: number;
} {
  switch (stage) {
    case "opening":
      return { progress: 16, readiness: 8 };
    case "initial_clarification":
      return { progress: 30, readiness: 20 };
    case "more_detail":
      return { progress: 44, readiness: 34 };
    case "understanding_summary":
      return { progress: 58, readiness: 48 };
    case "added_complexity":
      return { progress: 68, readiness: 58 };
    case "people_involved":
      return { progress: 78, readiness: 70 };
    case "updated_summary":
      return { progress: 88, readiness: 82 };
    case "completion_transition":
      return { progress: 94, readiness: 88 };
    case "final_result":
      return { progress: 96, readiness: 90 };
    case "hijab_clarification":
      return { progress: 30, readiness: 20 };
    case "hijab_result":
      return { progress: 70, readiness: 55 };
    case "hijab_reclarify":
      return { progress: 74, readiness: 55 };
    case "hijab_confirmed":
      return { progress: 92, readiness: 80 };
  }
}

const hijabUnsafeKeywords = [
  "not safe",
  "unsafe",
  "not okay",
  "not ok",
  "in danger",
  "no i'm not",
  "no i am not",
  "not currently safe",
];

const hijabSafeKeywords = [
  "i am safe",
  "i'm safe",
  "safe now",
  "i feel safe",
  "currently safe",
];

function hasAnyKeyword(content: string, keywords: string[]): boolean {
  const normalized = content.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword));
}

function buildUnderstandingSummary(answers: DemoCollectedAnswers): string {
  return [
    "Here’s what I’ve understood so far:",
    "",
    `- What happened: ${answers.initialConcern ?? "You described an unwanted or concerning interaction."}`,
    `- Where it happened: ${answers.timingOrLocation ?? "You have not said where it happened yet."}`,
    `- Who was involved: ${answers.people ?? "The person or role involved is not clear yet."}`,
    `- What you are concerned or unsure about: ${answers.details ?? "You are unsure what this means and what options may be available."}`,
    "",
    "Is anything missing, or should I change any part of that?",
  ].join("\n");
}

function buildUpdatedSummary(answers: DemoCollectedAnswers): string {
  return [
    "Here’s what I’ve understood so far:",
    "",
    `- What happened: ${answers.initialConcern ?? "You described an unwanted or concerning interaction."}`,
    `- Where it happened: ${answers.timingOrLocation ?? "You have not said where it happened yet."}`,
    `- Who was involved: ${answers.people ?? "The person or role involved is not clear yet."}`,
    `- Added complexity: ${answers.complexity ?? "There may be extra context that affects what happened."}`,
    `- What you are concerned or unsure about: ${answers.details ?? "You want to understand what to do next without formally reporting anything yet."}`,
    "",
    "Does this summary look accurate?",
  ].join("\n");
}

function renderFinalResult(result: DemoConversationResult): string {
  return [
    `## ${result.summaryTitle}`,
    "",
    result.summaryText,
    "",
    "**Relevant topics**",
    "",
    ...result.categories.map((category) => `- ${category}`),
    "",
    `**${result.disclaimerTitle}**`,
    "",
    result.disclaimerText,
    "",
    "**Recommended options and resources**",
    "",
    ...result.recommendations.flatMap((recommendation) => [
      `### ${recommendation.title} (${recommendation.relevanceScore}% match)`,
      recommendation.description,
      `- Category: ${recommendation.category}`,
      `- Tags: ${recommendation.tags.join(", ")}`,
      `- Location: ${recommendation.location}`,
      `- Availability: ${recommendation.availability}`,
      `- ${recommendation.contactLabel}: ${recommendation.contactValue}`,
      "",
    ]),
    "**Actions**",
    "",
    ...result.actions.map((action) => `- ${action.label}`),
  ].join("\n");
}

function getScenarioResponse(input: {
  content: string;
  stage: DemoConversationStage;
  collectedAnswers: DemoCollectedAnswers;
  understanding?: DemoUnderstanding;
}): Omit<DemoAssistantTurn, "progress" | "readiness"> {
  const content = input.content.trim();
  const answers: DemoCollectedAnswers = { ...input.collectedAnswers };

  if (
    input.stage !== "final_result" &&
    hasAnyKeyword(content, ["start over", "restart", "begin again"])
  ) {
    return {
      stage: "opening",
      collectedAnswers: {},
      message: createDemoMessage(
        "assistant",
        "I’m listening. You can explain what has been happening in your own words. What would you like SafeSpeak to understand first?",
        { suggestions: openingSuggestions }
      ),
    };
  }

  if (input.stage === "opening") {
    if (!content) {
      return {
        stage: "opening",
        collectedAnswers: answers,
        message: createDemoMessage(
          "assistant",
          "Take your time. What has been happening?"
        ),
      };
    }

    if (hasAnyKeyword(content, ["hijab"])) {
      answers.initialConcern = content;
      return {
        stage: "hijab_clarification",
        collectedAnswers: answers,
        message: createDemoMessage(
          "assistant",
          "Thank you for telling me that. I'm sorry this happened to you. Could you tell me a little more about what happened? And are you somewhere safe right now?",
          { suggestions: hijabSafetySuggestions }
        ),
      };
    }

    answers.initialConcern = content;
    return {
      stage: "initial_clarification",
      collectedAnswers: answers,
      message: createDemoMessage(
        "assistant",
        "Thank you for telling me. When or where did this happen?"
      ),
    };
  }

  if (input.stage === "hijab_clarification") {
    const isUnsafe = hasAnyKeyword(content, hijabUnsafeKeywords);
    const isSafe = !isUnsafe && hasAnyKeyword(content, hijabSafeKeywords);

    if (!isUnsafe && !isSafe) {
      return {
        stage: "hijab_clarification",
        collectedAnswers: answers,
        message: createDemoMessage(
          "assistant",
          "I want to make sure I understand — are you somewhere safe right now?",
          { suggestions: hijabSafetySuggestions }
        ),
      };
    }

    answers.details = content;
    const safetyStatus: DemoSafetyStatus = isUnsafe ? "unsafe" : "safe";
    const understanding = buildHijabUnderstanding(safetyStatus);
    const { blocks, leadText } = buildHijabResultBlocks(safetyStatus);

    return {
      stage: "hijab_result",
      collectedAnswers: answers,
      understanding,
      message: createDemoMessage("assistant", leadText, {
        blocks,
        suggestions: hijabConfirmationActions,
      }),
    };
  }

  if (input.stage === "hijab_result") {
    if (
      hasAnyKeyword(content, [
        "let me clarify",
        "clarify something",
        "clarify",
      ])
    ) {
      return {
        stage: "hijab_reclarify",
        collectedAnswers: answers,
        understanding: input.understanding,
        message: createDemoMessage(
          "assistant",
          "Of course. What would you like to add or clarify?"
        ),
      };
    }

    if (
      hasAnyKeyword(content, [
        "yes, this is right",
        "yes this is right",
        "correct",
        "that is right",
        "that's right",
      ])
    ) {
      return {
        stage: "hijab_confirmed",
        collectedAnswers: answers,
        understanding: input.understanding,
        message: createDemoMessage(
          "assistant",
          "Thank you for confirming. I have kept this understanding for this demo session. You can review the next steps and support options above, or start over at any time."
        ),
      };
    }

    return {
      stage: "hijab_result",
      collectedAnswers: answers,
      understanding: input.understanding,
      message: createDemoMessage(
        "assistant",
        "You can choose “Yes, this is right” to confirm, “Let me clarify something” to add detail, or start over at any time.",
        { suggestions: hijabConfirmationActions }
      ),
    };
  }

  if (input.stage === "hijab_reclarify") {
    answers.details = answers.details ? `${answers.details} ${content}` : content;
    const priorUnderstanding =
      input.understanding ?? buildHijabUnderstanding("unsafe");
    const { blocks } = buildHijabResultBlocks(priorUnderstanding.safetyStatus);

    return {
      stage: "hijab_result",
      collectedAnswers: answers,
      understanding: priorUnderstanding,
      message: createDemoMessage(
        "assistant",
        "Thank you for clarifying. I have noted that alongside what you already told me. Here is the understanding again, with the same safety guidance and next steps.",
        { blocks, suggestions: hijabConfirmationActions }
      ),
    };
  }

  if (input.stage === "hijab_confirmed") {
    return {
      stage: "hijab_confirmed",
      collectedAnswers: answers,
      understanding: input.understanding,
      message: createDemoMessage(
        "assistant",
        "This demo conversation is complete. You can start over at any time using the suggestion below or the Reset Conversation button.",
        {
          suggestions: [
            {
              id: "hijab_start_over_confirmed",
              label: "Start over",
              value: "I want to start over.",
            },
          ],
        }
      ),
    };
  }

  if (input.stage === "initial_clarification") {
    if (!hasAnyKeyword(content, ["station", "work", "home", "building", "street", "today", "yesterday", "night", "morning", "redfern"])) {
      return {
        stage: "initial_clarification",
        collectedAnswers: answers,
        message: createDemoMessage(
          "assistant",
          "Could you tell me when or where this happened? A rough place or time is enough."
        ),
      };
    }

    answers.timingOrLocation = content;
    return {
      stage: "more_detail",
      collectedAnswers: answers,
      message: createDemoMessage(
        "assistant",
        "Could you share a little more about what happened?"
      ),
    };
  }

  if (input.stage === "more_detail") {
    answers.details = content;
    return {
      stage: "understanding_summary",
      collectedAnswers: answers,
      message: createDemoMessage("assistant", buildUnderstandingSummary(answers), {
        suggestions: confirmationSuggestions,
      }),
    };
  }

  if (input.stage === "understanding_summary") {
    answers.confirmation = content;

    if (hasAnyKeyword(content, ["correct", "yes", "right", "accurate"])) {
      return {
        stage: "people_involved",
        collectedAnswers: answers,
        message: createDemoMessage(
          "assistant",
          "Who was involved, or what role did they have? You can use a description instead of a name."
        ),
      };
    }

    return {
      stage: "added_complexity",
      collectedAnswers: answers,
      message: createDemoMessage(
        "assistant",
        "Thank you. What part is more complex, or what should I change in the summary?"
      ),
    };
  }

  if (input.stage === "added_complexity") {
    answers.complexity = content;
    return {
      stage: "people_involved",
      collectedAnswers: answers,
      message: createDemoMessage(
        "assistant",
        "That helps. Who was involved, or what role did they have? You can use a description instead of a name."
      ),
    };
  }

  if (input.stage === "people_involved") {
    answers.people = content;
    return {
      stage: "updated_summary",
      collectedAnswers: answers,
      message: createDemoMessage("assistant", buildUpdatedSummary(answers), {
        suggestions: confirmationSuggestions,
      }),
    };
  }

  if (input.stage === "updated_summary") {
    answers.confirmation = content;

    if (!hasAnyKeyword(content, ["yes", "correct", "accurate", "right", "that is it"])) {
      return {
        stage: "added_complexity",
        collectedAnswers: answers,
        message: createDemoMessage(
          "assistant",
          "I can update that. What should be changed or added?"
        ),
      };
    }

    return {
      stage: "completion_transition",
      collectedAnswers: answers,
      message: createDemoMessage(
        "assistant",
        "I have enough information to show some options. This is informational and hypothetical only, and nothing has been formally submitted or reported."
      ),
    };
  }

  if (input.stage === "completion_transition") {
    const finalResult = buildFinalResult(answers);

    return {
      stage: "final_result",
      collectedAnswers: answers,
      finalResult,
      understanding: buildFinalStoryUnderstanding(answers),
      message: createDemoMessage("assistant", renderFinalResult(finalResult), {
        suggestions: finalResult.actions,
      }),
    };
  }

  return {
    stage: "final_result",
    collectedAnswers: answers,
    understanding: input.understanding ?? buildFinalStoryUnderstanding(answers),
    message: createDemoMessage(
      "assistant",
      "The demo result is already available above. You can continue to next steps or start over.",
      { suggestions: finalActions }
    ),
  };
}

export async function sendDemoConversationMessage(input: {
  content: string;
  stage: DemoConversationStage;
  collectedAnswers?: DemoCollectedAnswers;
  understanding?: DemoUnderstanding;
}): Promise<DemoAssistantTurn> {
  await wait(demoDelays.assistant);

  const response = getScenarioResponse({
    content: input.content,
    stage: input.stage,
    collectedAnswers: input.collectedAnswers ?? {},
    understanding: input.understanding,
  });
  const progress = progressForStage(response.stage);

  return {
    ...response,
    ...progress,
  };
}

export async function getDemoAssistantResponse(input: {
  content: string;
  stage: DemoConversationStage;
  collectedAnswers?: DemoCollectedAnswers;
  understanding?: DemoUnderstanding;
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
