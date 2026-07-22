import { type Page, expect, test } from "@playwright/test";

const BASE_URL = process.env.E2E_BASE_URL ?? "http://localhost:3130";
const API_ROUTE = "**/api/v1/**";
const ENTRY_URL = `${BASE_URL}/dashboard?view=assistant&topic=general_assistant`;
const START_URL = `${BASE_URL}/dashboard?view=assistantconversation&voice=1&topic=general_assistant`;
const DEMO_TRANSCRIPT =
  "I want to explain what happened and get some guidance.";
const DEMO_DICTATION_TRANSCRIPT =
  "I would like to explain what happened in my own words.";

const E2E_USER = {
  id: "user-e2e",
  email: "e2e@safespeak.test",
  fullName: "SafeSpeak E2E User",
  role: "public_user",
  status: "active",
  isEmailVerified: true,
  createdAt: "2026-05-17T00:00:00.000Z",
  updatedAt: "2026-05-17T00:00:00.000Z",
};

type DemoApiState = {
  disallowedCalls: string[];
};

function apiEnvelope(data: unknown, message = "OK") {
  return {
    success: true,
    message,
    data,
    timestamp: new Date("2026-05-17T00:00:00.000Z").toISOString(),
    requestId: "assistant-demo-e2e-request",
  };
}

async function installAuthState(page: Page) {
  await page.addInitScript((user) => {
    const encodeJwtPart = (value: unknown) =>
      window
        .btoa(JSON.stringify(value))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    const token = `${encodeJwtPart({ alg: "none", typ: "JWT" })}.${encodeJwtPart(
      {
        exp: 4102444800,
      }
    )}.e2e`;

    if (!window.localStorage.getItem("safespeak_e2e_initialized")) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.localStorage.setItem("safespeak_e2e_initialized", "1");
    }

    window.sessionStorage.setItem("safespeak_safety_gate_ack", "1");
    window.localStorage.setItem(
      "safespeak_auth_session",
      JSON.stringify({
        user,
        tokens: {
          accessToken: token,
          refreshToken: token,
        },
        timestamp: "2026-05-17T00:00:00.000Z",
      })
    );
  }, E2E_USER);
}

async function installBrowserVoiceMocks(page: Page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "mediaDevices", {
      configurable: true,
      value: {
        getUserMedia: async () => ({
          getTracks: () => [
            {
              stop: () => {
                window.localStorage.setItem("safespeak_e2e_track_stopped", "1");
              },
            },
          ],
        }),
      },
    });

    class MockAudioContext {
      createAnalyser() {
        return {
          fftSize: 128,
          frequencyBinCount: 32,
          getByteFrequencyData: (data: Uint8Array) => {
            data.fill(72);
          },
        };
      }

      createMediaStreamSource() {
        return {
          connect: () => undefined,
        };
      }

      close() {
        return Promise.resolve();
      }
    }

    class MockSpeechSynthesisUtterance extends EventTarget {
      text: string;
      rate = 1;
      pitch = 1;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;

      constructor(text: string) {
        super();
        this.text = text;
      }
    }

    Object.defineProperty(window, "AudioContext", {
      configurable: true,
      value: MockAudioContext,
    });
    Object.defineProperty(window, "SpeechSynthesisUtterance", {
      configurable: true,
      value: MockSpeechSynthesisUtterance,
    });
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        cancel: () => {
          const count = Number(
            window.localStorage.getItem("safespeak_e2e_speech_cancel") ?? "0"
          );
          window.localStorage.setItem(
            "safespeak_e2e_speech_cancel",
            String(count + 1)
          );
        },
        speak: (utterance: MockSpeechSynthesisUtterance) => {
          const count = Number(
            window.localStorage.getItem("safespeak_e2e_speech_speak") ?? "0"
          );
          window.localStorage.setItem(
            "safespeak_e2e_speech_speak",
            String(count + 1)
          );
          window.setTimeout(() => utterance.onend?.(), 420);
        },
      },
    });
  });
}

async function mockSafeSpeakShellApi(page: Page): Promise<DemoApiState> {
  const state: DemoApiState = {
    disallowedCalls: [],
  };

  await page.route(API_ROUTE, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const pathname = url.pathname;

    if (pathname.endsWith("/sessions/anonymous")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({ sessionToken: "demo-session-token" })
        ),
      });
      return;
    }

    if (pathname.endsWith("/auth/me")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ user: E2E_USER })),
      });
      return;
    }

    if (pathname.endsWith("/consents/current")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({
            consent: {
              process_with_ai: true,
              transcribe_audio: true,
              share_with_agencies: true,
            },
          })
        ),
      });
      return;
    }

    if (pathname.endsWith("/platform-settings")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({
            platformSettings: {
              settings: {
                safety: {
                  immediateDangerText:
                    "If you are in immediate danger, call 000 now.",
                  respectSupportText:
                    "If it is safe, contact 1800RESPECT (24/7).",
                  platformRoleText:
                    "SafeSpeak is a triage and intelligence platform.",
                  informationOnlyText:
                    "Information provided is educational only.",
                  emergencyCallLabel: "Emergency 000",
                  respectCallLabel: "1800RESPECT",
                  quickExitLabel: "Covert Exit",
                  covertModeLabel: "Covert mode ready",
                },
                consent: {
                  introText: "Demo consent settings.",
                  localStorageLabel: "Store data locally",
                  cloudSyncLabel: "Sync to cloud",
                  agencySharingLabel: "Share with agencies",
                  analyticsLabel: "Use anonymised data for analytics",
                },
                ai: {
                  disclaimerText: "This is information only.",
                  humanReviewText: "Review generated text before sharing.",
                  triageSystemPrompt: "Demo prompt.",
                  triageResponseTemplate: "Demo template.",
                  triageFallbackText: "Demo fallback.",
                  triageTemplateStatus: "approved",
                },
              },
            },
          })
        ),
      });
      return;
    }

    state.disallowedCalls.push(`${request.method()} ${pathname}`);
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify(apiEnvelope({ error: "disallowed demo API call" })),
    });
  });

  return state;
}

async function gotoDemoConversation(page: Page) {
  await page.goto(START_URL, { waitUntil: "load" });
  await expect(page.getByTestId("ai-conversation-page")).toBeVisible();
  await expect(page.getByTestId("ai-conversation-primary-voice")).toHaveCount(0);
  await expect(page.getByTestId("assistant-voice-first-input")).toBeVisible();
  await expect(page.getByTestId("ai-conversation-dictation")).toBeVisible();
  await expect(page.getByTestId("ai-conversation-composer-voice")).toBeVisible();
}

async function gotoAssistantEntry(page: Page) {
  await page.goto(ENTRY_URL, { waitUntil: "load" });
  await expect(page.getByTestId("assistant-voice-first-input")).toBeVisible();
  await expect(page.getByTestId("voice-avatar-animation").first()).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Start avatar voice mode" })
  ).toBeVisible();
}

test.describe("SafeSpeak frontend-only assistant conversation demo", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  test("supports typed messages, suggestions, progress, persistence, reset, and production API isolation", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    const conversation = page.getByTestId("ai-conversation-page");
    const input = page.getByTestId("ai-conversation-input");
    const sendButton = page.getByTestId("ai-conversation-send");
    const dictationButton = page.getByTestId("ai-conversation-dictation");
    const composerVoiceButton = page.getByTestId(
      "ai-conversation-composer-voice"
    );

    await expect(conversation).toBeVisible();
    await expect(page.getByText("Tell your story")).toBeVisible();
    await expect(page.getByText("I am here with you")).toBeVisible();
    await expect(page.getByText("Conversation progress")).toHaveCount(0);
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "12");
    await expect(sendButton).toHaveCount(0);
    await expect(dictationButton).toBeVisible();
    await expect(composerVoiceButton).toBeVisible();
    await expect(page.getByText("Voice ready")).toHaveCount(0);
    await expect(
      conversation.getByTestId("assistant-voice-first-input")
    ).toBeVisible();

    await page.getByRole("button", { name: "I am safe" }).click();

    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText("I am safe right now.");
    await expect(page.getByRole("button", { name: "I am safe" })).toHaveCount(
      0
    );
    await expect(page.getByText("SafeSpeak is typing")).toBeVisible();
    await expect(
      page.getByText("tell me a little about what happened")
    ).toBeVisible();
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "28");

    await input.fill("Someone followed me after I left work yesterday.");
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeEnabled();
    await expect(composerVoiceButton).toHaveCount(0);
    await sendButton.click();

    await expect(input).toBeDisabled();
    await expect(page.getByText("rough time helps")).toBeVisible();
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "44");

    await page.reload({ waitUntil: "load" });
    await expect(
      page.getByText("Someone followed me after I left work yesterday.")
    ).toBeVisible();

    await page.getByRole("button", { name: "Reset Conversation" }).click();
    await page.getByRole("button", { name: "Reset", exact: true }).click();

    await expect(
      page.getByText("Someone followed me after I left work yesterday.")
    ).toHaveCount(0);
    await expect(page.getByText("I am here with you")).toBeVisible();
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "12");
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("keeps entry and active conversation voice controls circular and consistent", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoAssistantEntry(page);

    const entryVoiceButton = page.getByRole("button", {
      name: "Start avatar voice mode",
    });
    const entryInput = page.getByTestId("assistant-voice-first-input");
    await expect(entryInput.getByRole("textbox")).toBeVisible();
    await expect(entryVoiceButton).toHaveClass(/rounded-full/);

    await gotoDemoConversation(page);

    const sharedInput = page.getByTestId("assistant-voice-first-input");
    const composerVoiceButton = page.getByTestId(
      "ai-conversation-composer-voice"
    );
    const dictationButton = page.getByTestId("ai-conversation-dictation");
    await expect(page.getByTestId("ai-conversation-primary-voice")).toHaveCount(0);
    await expect(sharedInput.getByRole("textbox")).toBeVisible();
    await expect(composerVoiceButton).toHaveClass(/rounded-full/);
    await expect(dictationButton).toHaveAttribute(
      "aria-label",
      "Start message dictation"
    );
    await expect(composerVoiceButton).toHaveAttribute(
      "aria-label",
      "Start voice conversation"
    );
    await expect(
      page.getByRole("button", { name: "Start voice", exact: true })
    ).toHaveCount(0);

    await composerVoiceButton.click();
    await expect(page.getByTestId("ai-conversation-voice-mode")).toHaveCount(0);
    await expect(
      page.getByTestId("ai-conversation-compact-voice-status")
    ).toHaveCount(0);
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toBeVisible();
    await expect(page.getByText("Listening")).toBeVisible();
    await expect(
      page.getByTestId("ai-conversation-voice-session-mic")
    ).toBeVisible();
    await expect(page.getByText("Tell your story")).toBeVisible();
    await expect(page.getByText("What SafeSpeak has understood")).toBeVisible();
    await expect(composerVoiceButton).toHaveAttribute(
      "aria-label",
      "Voice conversation active"
    );
    await expect(dictationButton).toBeDisabled();
    expect(page.url()).toContain("view=assistantconversation");

    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("dictates editable composer text without sending automatically", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    const input = page.getByTestId("ai-conversation-input");
    const dictationButton = page.getByTestId("ai-conversation-dictation");
    const composerVoiceButton = page.getByTestId(
      "ai-conversation-composer-voice"
    );
    const sendButton = page.getByTestId("ai-conversation-send");

    await expect(dictationButton).toHaveAttribute(
      "aria-label",
      "Start message dictation"
    );
    await dictationButton.click();
    const captureStrip = page.getByTestId("assistant-voice-first-capture");
    await expect(captureStrip).toBeVisible();
    await expect(captureStrip.getByText("Listening...")).toBeVisible();
    await expect(page.getByTestId("ai-conversation-dictation")).toHaveCount(0);
    await expect(page.getByTestId("ai-conversation-composer-voice")).toHaveCount(
      0
    );

    await page.getByRole("button", { name: "Stop message dictation" }).click();
    await expect(captureStrip.getByText("Transcribing...")).toBeVisible();
    await expect(input).toHaveValue(DEMO_DICTATION_TRANSCRIPT);
    await expect(input).toBeFocused();
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeEnabled();
    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toHaveCount(0);
    await expect(
      page.getByText("tell me a little about what happened")
    ).toHaveCount(0);

    await input.fill(`${DEMO_DICTATION_TRANSCRIPT} Please help me organize it.`);
    await sendButton.click();

    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText("Please help me organize it.");
    await expect(
      page.getByText("tell me a little about what happened")
    ).toBeVisible();
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("runs a multi-turn voice session with browser speech synthesis mocked", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    const composerVoiceButton = page.getByTestId(
      "ai-conversation-composer-voice"
    );
    await expect(composerVoiceButton).toBeEnabled();
    await composerVoiceButton.click();
    await expect(page.getByTestId("ai-conversation-voice-mode")).toHaveCount(0);
    await expect(page.getByText("Tell your story")).toBeVisible();
    await expect(page.getByText("What SafeSpeak has understood")).toBeVisible();
    const voiceStage = page.getByTestId(
      "ai-conversation-voice-session-stage"
    );
    await expect(voiceStage.getByText("Listening")).toBeVisible();
    await expect(voiceStage.getByText(/Session duration/)).toBeVisible();
    await expect(
      voiceStage.getByTestId("ai-conversation-voice-session-mic")
    ).toBeVisible();
    await expect(
      voiceStage.getByTestId("ai-conversation-voice-waveform")
    ).toBeVisible();

    await expect(composerVoiceButton).toHaveAttribute(
      "aria-label",
      "Voice conversation active"
    );
    await page.getByTestId("ai-conversation-voice-finish-turn").click();
    await expect(voiceStage.getByText("SafeSpeak is processing")).toBeVisible();
    await expect(voiceStage.getByText(DEMO_TRANSCRIPT)).toBeVisible();
    await expect(voiceStage.getByText("SafeSpeak is speaking")).toBeVisible();
    await expect(voiceStage.getByText("Listening")).toBeVisible();
    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toHaveCount(0);

    await page.getByTestId("ai-conversation-voice-finish-turn").click();
    await expect(voiceStage.getByText("SafeSpeak is processing")).toBeVisible();
    await expect(voiceStage.getByText("SafeSpeak is speaking")).toBeVisible();
    await expect(voiceStage.getByText("Listening")).toBeVisible();

    await page.getByTestId("ai-conversation-voice-finish-session").click();
    await expect(voiceStage).toHaveCount(0);
    await expect(
      page.getByTestId("ai-conversation-message-user").first()
    ).toContainText(DEMO_TRANSCRIPT);
    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toHaveCount(2);
    await expect(
      page.getByText("tell me a little about what happened")
    ).toBeVisible();
    await expect(page.getByTestId("ai-conversation-input")).toBeFocused();
    await expect
      .poll(() =>
        page.evaluate(() =>
          window.localStorage.getItem("safespeak_e2e_speech_speak")
        )
      )
      .toBe("2");
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("reset clears dictation and voice-first state", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page.getByTestId("ai-conversation-composer-voice").focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toBeVisible();
    await expect(
      page.getByText("Listening")
    ).toBeVisible();

    await page.getByRole("button", { name: "Reset Conversation" }).click();
    await page.getByRole("button", { name: "Reset", exact: true }).click();

    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toHaveCount(0);
    await expect(page.getByTestId("ai-conversation-composer-voice")).toBeVisible();
    await expect(page.getByTestId("ai-conversation-dictation")).toHaveAttribute(
      "aria-label",
      "Start message dictation"
    );
    await expect
      .poll(() =>
        page.evaluate(() =>
          window.localStorage.getItem("safespeak_e2e_track_stopped")
        )
      )
      .toBe("1");
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("cancels an active voice session without committing temporary turns", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page.getByTestId("ai-conversation-composer-voice").click();
    const voiceStage = page.getByTestId("ai-conversation-voice-session-stage");
    await expect(voiceStage.getByText("Listening")).toBeVisible();
    await page.getByTestId("ai-conversation-voice-finish-turn").click();
    await expect(voiceStage.getByText(DEMO_TRANSCRIPT)).toBeVisible();
    await expect(voiceStage.getByText("Listening")).toBeVisible();

    await page.getByTestId("ai-conversation-voice-cancel-session").click();

    await expect(voiceStage).toHaveCount(0);
    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toHaveCount(0);
    await expect(page.getByText(DEMO_TRANSCRIPT)).toHaveCount(0);
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("processes, previews, and removes local attachments", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page.locator('input[type="file"]').setInputFiles({
      name: "demo-note.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Demo evidence note"),
    });

    await expect(
      page.getByText("Attached locally: demo-note.txt")
    ).toBeVisible();
    await expect(
      page.getByText("Processing local attachment preview")
    ).toBeVisible();
    await expect(page.getByText("Ready for this demo")).toBeVisible();
    await expect(
      page.getByText("Available in this demo session")
    ).toBeVisible();

    await page
      .getByRole("button", { name: "Remove demo-note.txt" })
      .first()
      .click();
    await expect(
      page.getByText("Attachment removed from this demo session.")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Remove demo-note.txt" })
    ).toHaveCount(0);
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("keeps the composer reachable on tablet and mobile", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);

    await page.setViewportSize({ width: 768, height: 1024 });
    await gotoDemoConversation(page);
    await expect(page.getByText("Conversation progress")).toHaveCount(0);
    await expect(page.getByTestId("ai-conversation-dictation")).toBeVisible();
    await expect(page.getByTestId("ai-conversation-composer-voice")).toBeVisible();
    await page.getByTestId("ai-conversation-composer-voice").focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toBeVisible();
    await expect(page.getByTestId("ai-conversation-voice-mode")).toHaveCount(0);
    await page.getByTestId("ai-conversation-voice-finish-turn").focus();
    await page.keyboard.press("Enter");
    await expect(page.getByText("SafeSpeak is processing")).toBeVisible();

    await page.setViewportSize({ width: 390, height: 844 });
    await gotoDemoConversation(page);

    await expect(page.getByTestId("ai-conversation-page")).toBeVisible();
    await expect(page.getByTestId("ai-conversation-input")).toBeVisible();
    await expect(page.getByTestId("ai-conversation-send")).toHaveCount(0);
    await expect(
      page.getByRole("button", { name: "Attach a local file for this demo" })
    ).toBeVisible();
    await expect(page.getByTestId("ai-conversation-primary-voice")).toHaveCount(0);
    await expect(page.getByTestId("ai-conversation-dictation")).toBeVisible();
    await expect(page.getByTestId("ai-conversation-composer-voice")).toBeVisible();

    await page.getByTestId("ai-conversation-composer-voice").focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toBeVisible();
    await expect(page.getByTestId("ai-conversation-voice-mode")).toHaveCount(0);
    await expect(page.getByText("Tell your story")).toBeVisible();
  });
});
