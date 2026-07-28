import { type Page, expect, test } from "@playwright/test";

const BASE_URL = process.env.E2E_BASE_URL ?? "http://localhost:3130";
const API_ROUTE = "**/api/v1/**";
const ENTRY_URL = `${BASE_URL}/dashboard?view=assistant&topic=general_assistant`;
const START_URL = `${BASE_URL}/dashboard?view=assistantconversation&voice=1&topic=general_assistant`;
const DEMO_TRANSCRIPT =
  "Someone from my building keeps following me near the train station.";
const DEMO_DICTATION_TRANSCRIPT =
  "It happened near Redfern Station after work.";

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

  test("supports the structured screenshot-style mock flow, persistence, reset, and production API isolation", async ({
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
    await expect(page.getByText("I’m listening")).toBeVisible();
    await expect(page.getByText("Conversation progress")).toHaveCount(0);
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "8");
    await expect(sendButton).toHaveCount(0);
    await expect(dictationButton).toBeVisible();
    await expect(composerVoiceButton).toBeVisible();
    await expect(page.getByText("Voice ready")).toHaveCount(0);
    await expect(
      conversation.getByTestId("assistant-voice-first-input")
    ).toBeVisible();

    await page.getByRole("button", { name: "Someone is following me" }).click();

    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText(DEMO_TRANSCRIPT);
    await expect(page.getByRole("button", { name: "Someone is following me" })).toHaveCount(0);
    await expect(page.getByText("SafeSpeak is typing")).toBeVisible();
    await expect(
      page.getByText("When or where did this happen?")
    ).toBeVisible();
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "30");

    await input.fill("It happened near Redfern Station after work.");
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeEnabled();
    await expect(composerVoiceButton).toHaveCount(0);
    await sendButton.click();

    await expect(input).toBeDisabled();
    await expect(page.getByText("Could you share a little more")).toBeVisible();
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "44");

    await input.fill("He waited outside the station and walked behind me.");
    await sendButton.click();
    await expect(page.getByText("Here’s what I’ve understood so far:")).toBeVisible();
    await expect(page.getByText("What happened:")).toBeVisible();
    await expect(page.getByRole("button", { name: "It is more complex" })).toBeVisible();

    await page.getByRole("button", { name: "It is more complex" }).click();
    await expect(page.getByText("What part is more complex")).toBeVisible();

    await input.fill("He also lives in my apartment building.");
    await sendButton.click();
    await expect(page.getByText("Who was involved")).toBeVisible();

    await input.fill("A man from my apartment building.");
    await sendButton.click();
    await expect(page.getByText("Added complexity:")).toBeVisible();
    await expect(page.getByText("Does this summary look accurate?")).toBeVisible();

    await page.getByRole("button", { name: "That is correct" }).click();
    await expect(
      page.getByText("I have enough information to show some options")
    ).toBeVisible();

    await input.fill("Show me the options.");
    await sendButton.click();
    await expect(page.getByText("Here's what I've understood")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "1800RESPECT (94% match)" })
    ).toBeVisible();
    await expect(page.getByText("94% match")).toBeVisible();
    await expect(page.getByText("NSW Police Assistance Line")).toBeVisible();
    await expect(page.getByText("Legal Aid NSW")).toBeVisible();

    await page.reload({ waitUntil: "load" });
    await expect(page.getByText("Here's what I've understood")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "1800RESPECT (94% match)" })
    ).toHaveCount(1);

    await page.getByRole("button", { name: "Reset Conversation" }).click();
    await page.getByRole("button", { name: "Reset", exact: true }).click();

    await expect(
      page.getByRole("heading", { name: "1800RESPECT (94% match)" })
    ).toHaveCount(0);
    await expect(page.getByText("I’m listening")).toBeVisible();
    await expect(
      page.getByRole("progressbar", { name: "Conversation progress" })
    ).toHaveAttribute("aria-valuenow", "8");
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
      page.getByText("When or where did this happen?")
    ).toHaveCount(0);

    await input.fill(`${DEMO_DICTATION_TRANSCRIPT} Please help me organize it.`);
    await sendButton.click();

    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText("Please help me organize it.");
    await expect(
      page.getByText("When or where did this happen?")
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
      page.getByText("When or where did this happen?")
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

test.describe("SafeSpeak hijab safety scenario (dummy-server structured response)", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function reportHijabIncident(page: Page) {
    const input = page.getByTestId("ai-conversation-input");
    await input.fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
  }

  test("asks a clarification and safety question after the hijab report", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);

    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText("Someone pulled my hijab.");
    await expect(
      page.getByText(/are you somewhere safe right now/i)
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "I'm not safe right now" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "I am safe right now" })
    ).toBeVisible();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toHaveCount(
      0
    );
    expect(apiState.disallowedCalls).toEqual([]);
  });

  test("also asks the clarification and safety question when the hijab report arrives pre-seeded via the message query param", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await page.goto(
      `${BASE_URL}/dashboard?view=assistantconversation&topic=general_assistant&message=${encodeURIComponent(
        "Someone pull my hijab"
      )}`,
      { waitUntil: "load" }
    );
    await expect(page.getByTestId("ai-conversation-page")).toBeVisible();

    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText("Someone pull my hijab");
    await expect(
      page.getByText(/are you somewhere safe right now/i)
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "I'm not safe right now" })
    ).toBeVisible();

    await page.getByRole("button", { name: "I'm not safe right now" }).click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();
  });

  test("renders an immediate safety alert with 000 and 1800RESPECT actions when the user is not safe", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();

    const alert = page.getByTestId("ai-conversation-safety-alert");
    await expect(alert).toBeVisible();
    await expect(alert).toContainText("Your safety matters most");
    await expect(alert.getByRole("link", { name: "Call 000" })).toHaveAttribute(
      "href",
      "tel:000"
    );
    await expect(
      alert.getByRole("link", { name: "1800RESPECT" })
    ).toHaveAttribute("href", "tel:1800737732");
  });

  test("populates the understanding sidebar with concern type, high urgency, and possible bias indicators", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();

    const understanding = page.getByTestId(
      "ai-conversation-understanding-summary"
    );
    await expect(understanding).toBeVisible();
    await expect(understanding).toContainText(
      "Physical assault or unwanted physical contact"
    );
    await expect(understanding).toContainText("high urgency");
    await expect(understanding).toContainText(
      "Possible religious bias indicator"
    );
    await expect(understanding).toContainText(
      "Possible gender-related bias indicator"
    );
    await expect(understanding).toContainText("not a confirmed finding");
    await expect(
      page.getByText("Local demo summary. Nothing has been sent.")
    ).toHaveCount(0);
    await expect(page.getByText(/Nothing has been sent\.$/)).toBeVisible();
  });

  test("renders the explanation section", async ({ page }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();

    const explanation = page.getByTestId("ai-conversation-explanation");
    await expect(explanation).toBeVisible();
    await expect(explanation).toContainText("Why the understanding changed");
    await expect(explanation).toContainText("religious bias indicator");
    await expect(explanation).toContainText("gender-based bias dimension");
  });

  test("renders tailored next steps and service option cards", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();

    const nextSteps = page.getByTestId("ai-conversation-next-steps");
    await expect(nextSteps).toBeVisible();
    await expect(nextSteps).toContainText("Next steps tailored to you");
    await expect(nextSteps).toContainText("Prioritise immediate safety");

    const services = page.getByTestId("ai-conversation-service-options");
    await expect(services).toBeVisible();
    await expect(services).toContainText("1800RESPECT");
    await expect(services).toContainText("% match");
    await expect(services).toContainText("Why this may help");
  });

  test("'Let me clarify something' returns to a clarification prompt and does not navigate to Triage", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Let me clarify something" }).click();
    await expect(
      page.getByText("What would you like to add or clarify?")
    ).toBeVisible();
    await expect(page).not.toHaveURL(/view=reportsubmissionsupport/);

    await page.getByTestId("ai-conversation-input").fill("It was at the bus stop.");
    await page.getByTestId("ai-conversation-send").click();
    await expect(
      page.getByText("Thank you for clarifying.")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Yes, this is right" }).last()
    ).toBeVisible();
    await expect(page).not.toHaveURL(/view=reportsubmissionsupport/);
  });

  test("'Start over' resets the conversation through the existing reset mechanism and does not navigate to Triage", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByTestId("ai-conversation-input").fill("I want to start over.");
    await page.getByTestId("ai-conversation-send").click();
    await expect(
      page.getByText(
        "You can explain what has been happening in your own words."
      )
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Someone pulled my hijab" })
    ).toBeVisible();
    await expect(page).not.toHaveURL(/view=reportsubmissionsupport/);
  });

  test("does not repeat the safety-status question after it has already been answered", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Let me clarify something" }).click();
    await page.getByTestId("ai-conversation-input").fill("It was at the bus stop.");
    await page.getByTestId("ai-conversation-send").click();
    await expect(page.getByText("Thank you for clarifying.")).toBeVisible();

    await expect(
      page.getByText(/are you somewhere safe right now/i)
    ).toHaveCount(1);
  });

  test("reset clears messages, structured results, progress, and the sidebar summary", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();
    await expect(
      page.getByTestId("ai-conversation-understanding-summary")
    ).toBeVisible();

    await page.getByRole("button", { name: "Reset Conversation" }).click();
    await page
      .getByRole("dialog", { name: "Reset Conversation?" })
      .getByRole("button", { name: "Reset" })
      .click();

    await expect(page.getByTestId("ai-conversation-safety-alert")).toHaveCount(
      0
    );
    await expect(
      page.getByTestId("ai-conversation-understanding-summary")
    ).toHaveCount(0);
    await expect(
      page.getByText("Local demo summary. Nothing has been sent.")
    ).toBeVisible();
    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toHaveCount(0);
  });

  test("voice mode reuses the same hijab conversation pipeline and keeps the sidebar synced", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await reportHijabIncident(page);
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();
    const understanding = page.getByTestId(
      "ai-conversation-understanding-summary"
    );
    await expect(understanding).toBeVisible();

    await page.getByTestId("ai-conversation-composer-voice").click();
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toBeVisible();
    await page.getByTestId("ai-conversation-voice-finish-turn").click();
    await expect(page.getByText("SafeSpeak is processing")).toBeVisible();
    await page.getByTestId("ai-conversation-voice-finish-session").click();

    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toHaveCount(0);
    await expect(understanding).toBeVisible();
    await expect(understanding).toContainText("high urgency");
    await expect(
      page.getByRole("button", { name: "Yes, this is right" }).last()
    ).toBeVisible();
  });
});

test.describe("SafeSpeak hijab-to-Triage handoff ('Yes, this is right')", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function reachHijabResult(page: Page) {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();
  }

  async function readTriageSource(page: Page) {
    const raw = await page.evaluate(() =>
      window.sessionStorage.getItem("safespeak_assistant_triage_context")
    );
    expect(raw).not.toBeNull();
    return JSON.parse(raw as string) as {
      conversationSessionId?: string;
      conversation: Array<{ role: string; content: string }>;
      timeline: Record<string, string>;
      narrative: string;
      incidentCategory?: string;
    };
  }

  test("navigates to the existing Triage route when the user confirms the understanding", async ({
    page,
  }) => {
    await reachHijabResult(page);

    await page.getByRole("button", { name: "Yes, this is right" }).click();

    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
    await expect(
      page.getByRole("heading", { name: /physical assault/i })
    ).toBeVisible();
  });

  test("prepares the Triage draft with the supported conversation-derived data", async ({
    page,
  }) => {
    await reachHijabResult(page);
    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);

    const source = await readTriageSource(page);

    expect(source.conversation.length).toBeGreaterThan(0);
    expect(
      source.conversation.find((message) => message.role === "user")
    ).toMatchObject({
      role: "user",
      content: expect.stringContaining("hijab"),
    });
    expect(source.timeline.concernType).toContain(
      "Physical assault or unwanted physical contact"
    );
    expect(source.timeline.urgencyLevel).toBe("high");
    expect(source.timeline.safetyStatus).toBe("unsafe");
  });

  test("preserves possible bias indicators as indicators, not confirmed legal findings", async ({
    page,
  }) => {
    await reachHijabResult(page);
    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);

    const source = await readTriageSource(page);

    expect(source.timeline.possibleBiasIndicators).toContain(
      "Possible religious bias indicator"
    );
    expect(source.timeline.possibleBiasIndicators).toContain(
      "Possible gender-related bias indicator"
    );
    expect(source.timeline.possibleBiasIndicators).toContain(
      "possible indicator, not a confirmed finding"
    );
  });

  test("double-clicking 'Yes, this is right' causes only one navigation", async ({
    page,
  }) => {
    await reachHijabResult(page);

    await page.getByRole("button", { name: "Yes, this is right" }).dblclick();

    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
    const source = await readTriageSource(page);
    expect(source.conversation.length).toBeGreaterThan(0);
  });

  test("text and voice-produced confirmations use the same Triage handoff", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByTestId("ai-conversation-composer-voice").click();
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toBeVisible();
    await page.getByTestId("ai-conversation-voice-finish-turn").click();
    await expect(page.getByText("SafeSpeak is processing")).toBeVisible();
    await page.getByTestId("ai-conversation-voice-finish-session").click();
    await expect(
      page.getByTestId("ai-conversation-voice-session-stage")
    ).toHaveCount(0);

    await page
      .getByRole("button", { name: "Yes, this is right" })
      .last()
      .click();

    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
    const source = await readTriageSource(page);
    expect(source.timeline.urgencyLevel).toBe("high");
  });
});

test.describe("SafeSpeak Triage page renders the complete demo dataset", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function goToTriageFromHijabFlow(page: Page) {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
  }

  test("redirects to Triage and renders the complete structured content", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    await expect(
      page.getByRole("heading", { name: "What would you like to do next?" })
    ).toBeVisible();
    await expect(page.getByText("You're in control")).toBeVisible();
    await expect(
      page.getByText(/nothing is sent anywhere without your permission/i)
    ).toBeVisible();
  });

  test("renders the five primary next-action options", async ({ page }) => {
    await goToTriageFromHijabFlow(page);

    const actions = page.getByTestId("triage-primary-actions");
    await expect(actions).toBeVisible();
    await expect(actions.getByText("Build a report")).toBeVisible();
    await expect(actions.getByText("Learn more")).toBeVisible();
    await expect(actions.getByText("Find support")).toBeVisible();
    await expect(actions.getByText("Save privately")).toBeVisible();
    await expect(actions.getByText("Finish for now")).toBeVisible();
  });

  test("renders the 'You may also find useful' support resources", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const group = page.getByTestId("triage-resource-group-get-support");
    await expect(group).toBeVisible();
    await expect(group.getByText("13YARN")).toBeVisible();
    await expect(group.getByText("1800RESPECT")).toBeVisible();
    await expect(group.getByText("Beyond Blue")).toBeVisible();
  });

  test("renders the rights resources", async ({ page }) => {
    await goToTriageFromHijabFlow(page);

    const group = page.getByTestId("triage-resource-group-know-your-rights");
    await expect(group).toBeVisible();
    await expect(group.getByText("Workplace rights")).toBeVisible();
    await expect(group.getByText("Racism and discrimination")).toBeVisible();
    await expect(group.getByText("Online abuse")).toBeVisible();
  });

  test("renders the tailored support options with correct telephone numbers and 000 as immediate-danger-only", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const options = page.getByTestId("triage-support-options");
    await expect(options).toBeVisible();

    const police = page.getByTestId("triage-support-option-nsw-police-assistance");
    await expect(police).toContainText("Police Assistance Line");
    await expect(police).toContainText("Recommended for you");
    await expect(police.getByRole("link", { name: /call 131 444/i })).toHaveAttribute(
      "href",
      "tel:131444"
    );

    const victims = page.getByTestId("triage-support-option-victims-services-nsw");
    await expect(victims).toContainText("Victims Services NSW");
    await expect(
      victims.getByRole("link", { name: /call 1800 633 063/i })
    ).toHaveAttribute("href", "tel:1800633063");

    const health = page.getByTestId("triage-support-option-healthdirect");
    await expect(health).toContainText("Healthdirect");
    await expect(health).toContainText("Also available");
    await expect(
      health.getByRole("link", { name: /call 1800 022 222/i })
    ).toHaveAttribute("href", "tel:1800022222");

    const triple000 = page.getByTestId("triage-support-option-triple-zero");
    await expect(triple000).toContainText("Triple Zero (000)");
    await expect(triple000).toContainText("immediate danger");
    await expect(
      triple000.getByRole("link", { name: /call 000/i })
    ).toHaveAttribute("href", "tel:000");
  });

  test("does not show an empty Triage page when no valid data or backend session exists", async ({
    page,
  }) => {
    await installAuthState(page);
    await mockSafeSpeakShellApi(page);

    await page.goto(
      `${process.env.E2E_BASE_URL ?? "http://localhost:3130"}/dashboard?view=reportsubmissionsupport`,
      { waitUntil: "load" }
    );

    await expect(
      page.getByRole("heading", { name: /review your options/i })
    ).toBeVisible();
    await expect(
      page.getByText(
        "Live triage support is not available yet because this report is not linked to an active SafeSpeak triage session."
      )
    ).toBeVisible();
    await expect(page.getByTestId("triage-primary-actions")).toHaveCount(0);
  });

  test("refresh retains the demo Triage content because it is derived from sessionStorage", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);
    await expect(page.getByTestId("triage-primary-actions")).toBeVisible();

    await page.reload({ waitUntil: "load" });

    await expect(page.getByTestId("triage-primary-actions")).toBeVisible();
    await expect(page.getByTestId("triage-support-options")).toBeVisible();
  });
});

test.describe("SafeSpeak Triage status notice layout", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function goToTriageFromHijabFlow(page: Page) {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
  }

  test("renders the full Triage dataset from the completed Assistant Conversation flow", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    await expect(
      page.getByRole("heading", { name: /physical assault/i })
    ).toBeVisible();
    await expect(page.getByTestId("triage-primary-actions")).toBeVisible();
    await expect(page.getByTestId("triage-support-options")).toBeVisible();
  });

  test("keeps the SafeSpeak status information visible as a compact notice", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const notice = page.getByTestId("triage-status-notice");
    await expect(notice).toBeVisible();
    await expect(notice).toContainText("SafeSpeak status");
    await expect(notice).toContainText(
      "This triage preview uses the information you shared in your SafeSpeak conversation."
    );
  });

  test("positions the status notice before Incident Classification, not between it and 'What would you like to do next?'", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);
    await expect(page.getByTestId("triage-status-notice")).toBeVisible();
    await expect(page.getByTestId("triage-primary-actions")).toBeVisible();

    const order = await page.evaluate(() => {
      const nodePosition = (node: Element | null) =>
        node ? Array.from(document.querySelectorAll("*")).indexOf(node) : -1;

      const notice = document.querySelector(
        '[data-testid="triage-status-notice"]'
      );
      const heading = Array.from(document.querySelectorAll("h2")).find((el) =>
        el.textContent?.includes("Physical Assault")
      );
      const nextStepsHeading = Array.from(
        document.querySelectorAll("h3")
      ).find((el) => el.textContent?.includes("What would you like to do next?"));

      return {
        notice: nodePosition(notice ?? null),
        heading: nodePosition(heading ?? null),
        nextSteps: nodePosition(nextStepsHeading ?? null),
      };
    });

    expect(order.notice).toBeGreaterThan(-1);
    expect(order.heading).toBeGreaterThan(-1);
    expect(order.nextSteps).toBeGreaterThan(-1);
    expect(order.notice).toBeLessThan(order.heading);
    expect(order.heading).toBeLessThan(order.nextSteps);
  });

  test("'Return to AI Conversation' and 'View report history' remain functional from the compact notice", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const notice = page.getByTestId("triage-status-notice");
    await expect(
      notice.getByRole("link", { name: "Return to AI conversation" })
    ).toHaveAttribute("href", "/dashboard?view=assistantconversation");
    await expect(
      notice.getByRole("link", { name: "View report history" })
    ).toHaveAttribute("href", "/dashboard?view=reportsubmissionhistory");

    await notice.getByRole("link", { name: "View report history" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionhistory/);
  });

  test("does not overflow horizontally on desktop or mobile viewports", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const notice = page.getByTestId("triage-status-notice");
    await expect(notice).toBeVisible();

    for (const size of [
      { width: 1920, height: 1080 },
      { width: 390, height: 844 },
    ]) {
      await page.setViewportSize(size);
      await expect(notice).toBeVisible();
      const hasHorizontalOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth
      );
      expect(hasHorizontalOverflow).toBe(false);
    }
  });
});

test.describe("SafeSpeak Triage 'Build a report' Continue button", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function goToTriageFromHijabFlow(page: Page) {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
  }

  test("renders the 'Build a report' option with a visible Continue button", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const actions = page.getByTestId("triage-primary-actions");
    await expect(actions).toBeVisible();
    await expect(actions.getByText("Build a report")).toBeVisible();

    const continueButton = actions.getByRole("link", { name: "Continue" });
    await expect(continueButton).toBeVisible();
  });

  test("styles Continue as the highlighted primary action, distinct from secondary actions", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const continueButton = page
      .getByTestId("triage-primary-actions")
      .getByRole("link", { name: "Continue" });
    const secondaryButton = page
      .getByTestId("triage-primary-actions")
      .getByRole("link", { name: "Open Support" });

    await expect(continueButton).toHaveClass(/bg-\[#0F5D9F\]/);
    await expect(secondaryButton).not.toHaveClass(/bg-\[#0F5D9F\]/);
  });

  test("clicking Continue navigates to the existing report-builder route without submitting anything", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const continueButton = page
      .getByTestId("triage-primary-actions")
      .getByRole("link", { name: "Continue" });

    await continueButton.click();

    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/fromTriage=1/);
  });

  test("the other next-step options remain visible and functional alongside Continue", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const actions = page.getByTestId("triage-primary-actions");
    await expect(actions.getByRole("link", { name: "Continue" })).toBeVisible();
    await expect(
      actions.getByRole("link", { name: "Open Know Your Rights" })
    ).toBeVisible();
    await expect(
      actions.getByRole("link", { name: "Open Support" })
    ).toBeVisible();
    await expect(
      actions.getByRole("button", { name: "Save" })
    ).toBeVisible();
    await expect(actions.getByRole("link", { name: "Exit" })).toBeVisible();
  });

  test("Continue is reachable and activatable by keyboard", async ({
    page,
  }) => {
    await goToTriageFromHijabFlow(page);

    const continueButton = page
      .getByTestId("triage-primary-actions")
      .getByRole("link", { name: "Continue" });

    await continueButton.focus();
    await expect(continueButton).toBeFocused();
    await page.keyboard.press("Enter");

    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
  });
});

test.describe("SafeSpeak Build a report -> report-builder flow", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function mockMicroEducation(page: Page) {
    await page.route("**/api/v1/microeducation", async (route) => {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({
            items: [
              {
                id: "guide-safety-1",
                title: "When to call 000 vs a non-emergency number",
                summary:
                  "How to tell the difference between immediate danger and a situation you can report later.",
                readTimeLabel: "3 min read",
                tag: "Safety",
                cta: "Read",
                detailHeading: "When to call 000",
                detailBody: "Call 000 only when there is immediate danger.",
                detailTakeaway: "000 is for immediate danger only.",
                tone: "blue",
                chips: ["safety"],
                incidentCategories: ["harassment"],
                duration: "quick",
                format: "guide",
                sortOrder: 1,
                views: 0,
              },
            ],
          })
        ),
      });
    });
  }

  async function goToReportBuilderFromHijabFlow(page: Page) {
    await mockSafeSpeakShellApi(page);
    await mockMicroEducation(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);

    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=report/);
    await expect(page).toHaveURL(/fromTriage=1/);
  }

  test("Continue opens the report-builder flow directly on the report step, not the language step", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    await expect(page.getByText("Start a Report")).toBeVisible();
    await expect(page.getByText("Select your language")).toHaveCount(0);
  });

  test("renders the active incident classification from Triage data", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const classification = page.getByTestId("report-incident-classification");
    await expect(classification).toBeVisible();
    await expect(classification).toContainText("Physical Assault");
    await expect(classification).toContainText("not a formal legal finding");
  });

  test("pre-fills supported fields from the conversation and marks them auto-filled", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const summaryField = page.getByLabel(/What happened\?/i);
    await expect(summaryField).toHaveValue("Someone pulled my hijab.");

    const safetyField = page.getByLabel(/Are you safe and away/i);
    await expect(safetyField).toHaveValue("unsafe");

    await expect(page.getByText("Auto-filled").first()).toBeVisible();
  });

  test("pre-filled fields remain editable and the auto-filled badge clears on edit", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const summaryField = page.getByLabel(/What happened\?/i);
    await expect(summaryField).toHaveValue("Someone pulled my hijab.");

    await summaryField.fill("Someone pulled my hijab near the train station.");
    await expect(summaryField).toHaveValue(
      "Someone pulled my hijab near the train station."
    );

    const summaryLabel = page.locator("label", { hasText: "What happened?" });
    await expect(summaryLabel.getByText("Auto-filled")).toHaveCount(0);
  });

  test("optional fields (injured, relationship, evidence) are empty and do not break the UI", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    await expect(page.getByLabel(/Were you injured\?/i)).toHaveValue("");
    await expect(
      page.getByLabel(/know the person who did this/i)
    ).toHaveValue("");
    await expect(page.getByLabel(/witnesses, CCTV, photos/i)).toHaveValue("");
    await expect(page.getByText("undefined")).toHaveCount(0);
    await expect(page.getByText("null")).toHaveCount(0);
  });

  test("renders the matched pathway with category and destination", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const pathway = page.getByTestId("report-matched-pathway");
    await expect(pathway).toBeVisible();
    await expect(pathway).toContainText("Physical Assault");
    await expect(pathway).toContainText("Auto-filled from your Triage result");
  });

  test("renders relevant Microcards for the incident", async ({ page }) => {
    await goToReportBuilderFromHijabFlow(page);

    const microcards = page.getByTestId("report-microcards");
    await expect(microcards).toBeVisible();
    await expect(microcards).toContainText(
      "When to call 000 vs a non-emergency number"
    );
  });

  test("renders tailored services with correct telephone links and marks 000 as immediate-danger-only", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const services = page.getByTestId("report-tailored-services");
    await expect(services).toBeVisible();

    const police = page.getByTestId("report-service-nsw-police-assistance");
    await expect(
      police.getByRole("link", { name: /call 131 444/i })
    ).toHaveAttribute("href", "tel:131444");

    const tripleZero = page.getByTestId("report-service-triple-zero");
    await expect(tripleZero).toContainText("immediate danger");
    await expect(
      tripleZero.getByRole("link", { name: /call 000/i })
    ).toHaveAttribute("href", "tel:000");
  });

  test("renders legal information only as general, non-fabricated guidance", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const legal = page.getByTestId("report-legal-information");
    await expect(legal).toBeVisible();
    await expect(legal).toContainText("NSW");
    await expect(legal).toContainText("not legal advice");
  });

  test("Save local draft shows success feedback without submitting anything", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await mockMicroEducation(page);
    await gotoDemoConversation(page);
    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=report/);

    await page.getByRole("button", { name: "Save local draft" }).click();
    await expect(page.getByText("Saved locally in this browser session.")).toBeVisible();

    const disallowed = apiState.disallowedCalls.filter(
      (call) => !call.includes("/microeducation")
    );
    expect(disallowed).toEqual([]);
  });

  test("Download .txt produces a file download", async ({ page }) => {
    await goToReportBuilderFromHijabFlow(page);

    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download .txt" }).click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe("safespeak-report-draft.txt");
  });

  test("Copy writes the report text to the clipboard", async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await goToReportBuilderFromHijabFlow(page);

    await page.getByRole("button", { name: "Copy" }).click();
    await expect(
      page.getByText(/Copied report text|Could not copy automatically/)
    ).toBeVisible();
  });

  test("Review your incident opens the guided review onboarding under reportsubmissiondetails, not the standalone Incident Review view or Evidence Review", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    await page.getByRole("button", { name: "Review your incident" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=review/);
    await expect(page).not.toHaveURL(/view=reportsubmissionincidentreview/);
    await expect(page).not.toHaveURL(/view=reportsubmissionreview(&|$)/);
    await expect(
      page.getByRole("heading", { name: "Review your incident" })
    ).toBeVisible();
  });

  test("double-clicking Review your incident causes only one navigation", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    await page
      .getByRole("button", { name: "Review your incident" })
      .dblclick();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=review/);
    await expect(page).not.toHaveURL(/view=reportsubmissionincidentreview/);
  });

  test("refresh preserves the current draft instead of re-clobbering user edits", async ({
    page,
  }) => {
    await goToReportBuilderFromHijabFlow(page);

    const summaryField = page.getByLabel(/What happened\?/i);
    await summaryField.fill("Edited after pre-fill.");
    await page.getByRole("button", { name: "Save local draft" }).click();

    await page.reload({ waitUntil: "load" });

    await expect(page.getByLabel(/What happened\?/i)).toHaveValue(
      "Edited after pre-fill."
    );
  });
});

test.describe("SafeSpeak guided report review onboarding - Stage 1 Review", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function goToReportDetailsFromHijabFlow(page: Page) {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();

    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);

    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=report/);
  }

  async function goToReviewStageFromHijabFlow(page: Page) {
    await goToReportDetailsFromHijabFlow(page);
    await page.getByRole("button", { name: "Review your incident" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=review/);
    await expect(page).toHaveURL(/fromTriage=1/);
    await expect(
      page.getByTestId("incident-review-overview")
    ).toBeVisible();
  }

  test("does not navigate to the old reportsubmissionincidentreview view or Evidence Review", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await expect(page).not.toHaveURL(/view=reportsubmissionincidentreview/);
    await expect(page).not.toHaveURL(/view=reportsubmissionreview(&|$)/);
    await expect(
      page.getByRole("heading", { name: "Evidence Review" })
    ).toHaveCount(0);
  });

  test("renders the 'Review your incident' page title", async ({ page }) => {
    await goToReviewStageFromHijabFlow(page);

    await expect(
      page.getByRole("heading", { name: "Review your incident" })
    ).toBeVisible();
  });

  test("renders the matched incident category and safety status under their own labels", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    const overview = page.getByTestId("incident-review-overview");
    await expect(overview).toContainText("Matched category");
    await expect(overview).toContainText("Physical Assault");
    await expect(overview).toContainText("Safety status");
    await expect(overview).toContainText("Not safe");
  });

  test("renders 'What happened' once with the latest edited value, not the stale pre-fill or duplicate raw values", async ({
    page,
  }) => {
    await goToReportDetailsFromHijabFlow(page);

    const summaryField = page.getByLabel(/What happened\?/i);
    await summaryField.fill("Updated: someone pulled my hijab at the station.");

    await page.getByRole("button", { name: "Review your incident" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=review/);

    await expect(
      page.getByText("Updated: someone pulled my hijab at the station.")
    ).toHaveCount(1);
    await expect(
      page.getByText("Someone pulled my hijab.", { exact: true })
    ).toHaveCount(0);
  });

  test("renders optional report fields when present, without breaking on missing ones", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await expect(page.getByTestId("incident-review-details")).toBeVisible();
    await expect(page.getByText(/undefined/)).toHaveCount(0);
    await expect(page.getByText(/^null$/)).toHaveCount(0);
  });

  test("renders the Triage indicator as contextual, not a formal legal finding, and the suggested destination without implying it was contacted", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    const triage = page.getByTestId("incident-review-triage-indicator");
    await expect(triage).toBeVisible();
    await expect(triage).toContainText("not a formal legal finding");
    await expect(triage).toContainText("Suggested destination");
    await expect(triage).toContainText("suggestion only");
    await expect(triage).toContainText(
      "has not contacted this destination and no report has been sent"
    );
  });

  test("renders the information notice confirming nothing is submitted by viewing the page", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await expect(
      page.getByText(/nothing is shared with any service automatically/i)
    ).toBeVisible();
  });

  test("Edit details returns to the existing Report Details page with the draft preserved", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await page.getByRole("button", { name: "Edit details" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=report/);
    await expect(page.getByLabel(/What happened\?/i)).toHaveValue(
      "Someone pulled my hijab."
    );
  });

  test("editing a detail and returning to Review shows the updated value", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await page.getByRole("button", { name: "Edit details" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);

    const summaryField = page.getByLabel(/What happened\?/i);
    await summaryField.fill("Updated after returning to edit.");

    await page.getByRole("button", { name: "Review your incident" }).click();
    await expect(page).toHaveURL(/step=review/);
    await expect(
      page.getByText("Updated after returning to edit.")
    ).toBeVisible();
  });

  test("Review Continue opens Stage 2 Next, not Evidence Review", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=next/);
    await expect(page).toHaveURL(/fromTriage=1/);
    await expect(
      page.getByRole("heading", { name: "Choose your next step" })
    ).toBeVisible();
  });

  test("does not submit, share, or contact any service merely by viewing or continuing", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);
    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await page.getByRole("link", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Review your incident" }).click();
    await expect(
      page.getByTestId("incident-review-overview")
    ).toBeVisible();
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);

    const disallowedSubmissions = apiState.disallowedCalls.filter((call) =>
      /POST|PUT|PATCH/.test(call)
    );
    expect(disallowedSubmissions).toEqual([]);
  });

  test("rapid double-clicking Continue causes only one transition", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await page.getByRole("button", { name: "Continue" }).dblclick();
    await expect(page).toHaveURL(/step=next/);
  });

  test("refresh preserves the active review stage because it is derived from sessionStorage", async ({
    page,
  }) => {
    await goToReviewStageFromHijabFlow(page);

    await page.reload({ waitUntil: "load" });

    await expect(page).toHaveURL(/step=review/);
    await expect(
      page.getByTestId("incident-review-overview")
    ).toBeVisible();
    await expect(page.getByText("Someone pulled my hijab.")).toBeVisible();
  });
});

test.describe("SafeSpeak standalone Incident Review view (unrelated Evidence Review flow)", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  test("remains reachable directly and still continues into Evidence Review", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);
    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();
    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);
    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=report/);

    await page.goto(
      "/dashboard?view=reportsubmissionincidentreview&fromTriage=1"
    );

    await expect(
      page.getByRole("heading", { name: "Review your incident" })
    ).toBeVisible();

    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionreview/);
    await expect(page).toHaveURL(/fromTriage=1/);
    await expect(page.getByText("Evidence Review")).toBeVisible();

    await page.getByRole("link", { name: "Incident review" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionincidentreview/);
    await expect(
      page.getByRole("heading", { name: "Review your incident" })
    ).toBeVisible();
  });
});

test.describe("SafeSpeak guided report review onboarding - Stages 2 to 6", () => {
  test.beforeEach(async ({ page }) => {
    await installAuthState(page);
    await installBrowserVoiceMocks(page);
  });

  async function goToReviewStage(page: Page) {
    await mockSafeSpeakShellApi(page);
    await gotoDemoConversation(page);

    await page
      .getByTestId("ai-conversation-input")
      .fill("Someone pulled my hijab.");
    await page.getByTestId("ai-conversation-send").click();
    await page
      .getByRole("button", { name: "I'm not safe right now" })
      .click();
    await expect(page.getByTestId("ai-conversation-safety-alert")).toBeVisible();
    await page.getByRole("button", { name: "Yes, this is right" }).click();
    await expect(page).toHaveURL(/view=reportsubmissionsupport/);

    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=report/);

    await page.getByRole("button", { name: "Review your incident" }).click();
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).toHaveURL(/step=review/);
  }

  test("regression: Review your incident never navigates to reportsubmissionincidentreview, and every onboarding stage stays under reportsubmissiondetails with only the step value changing", async ({
    page,
  }) => {
    await goToReviewStage(page);
    await expect(page).toHaveURL(/view=reportsubmissiondetails/);
    await expect(page).not.toHaveURL(/view=reportsubmissionincidentreview/);

    async function assertOnboardingUrl(step: string) {
      await expect(page).toHaveURL(/view=reportsubmissiondetails/);
      await expect(page).toHaveURL(new RegExp(`step=${step}`));
      await expect(page).not.toHaveURL(/view=reportsubmissionincidentreview/);
      await expect(page).not.toHaveURL(/view=reportsubmissionreview(&|$)/);
      await expect(page).not.toHaveURL(/view=reportsubmissionshare/);
    }

    await page.getByRole("button", { name: "Continue" }).click();
    await assertOnboardingUrl("next");

    await page.getByRole("button", { name: "Continue" }).click();
    await assertOnboardingUrl("preview");

    await page.getByRole("button", { name: "Choose a destination" }).click();
    await assertOnboardingUrl("destination");

    await page.getByRole("button", { name: /Police Assistance Line/ }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await assertOnboardingUrl("consent");

    await page.getByRole("button", { name: "Continue" }).click();
    await assertOnboardingUrl("complete");
  });

  test("Stage 2 Next shows Get Support and Know Your Rights resources and continues to Stage 3", async ({
    page,
  }) => {
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);

    await expect(page.getByText("13YARN")).toBeVisible();
    await expect(page.getByText("Beyond Blue")).toBeVisible();
    await expect(page.getByText("Workplace rights")).toBeVisible();
    await expect(page.getByText("Racism and discrimination")).toBeVisible();
    await expect(page.getByText("Online abuse")).toBeVisible();

    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=preview/);
    await expect(
      page.getByRole("heading", { name: "Report preview" })
    ).toBeVisible();
  });

  test("Stage 2 Back returns to Stage 1 Review", async ({ page }) => {
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);

    await page.getByRole("button", { name: "Back" }).first().click();
    await expect(page).toHaveURL(/step=review/);
    await expect(
      page.getByRole("heading", { name: "Review your incident" })
    ).toBeVisible();
  });

  test("Stage 3 Report preview renders a structured summary and Download works", async ({
    page,
  }) => {
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=preview/);

    const summary = page.getByTestId("report-preview-summary");
    await expect(summary).toContainText("Physical Assault");
    await expect(summary).toContainText("Not safe");
    await expect(summary).toContainText("Someone pulled my hijab.");

    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download" }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("safespeak-report-preview.txt");

    await page.getByRole("button", { name: "Choose a destination" }).click();
    await expect(page).toHaveURL(/step=destination/);
  });

  test("Stage 4 Destination requires a selection before continuing, falls back to the manual directory, and persists the choice", async ({
    page,
  }) => {
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=preview/);
    await page.getByRole("button", { name: "Choose a destination" }).click();
    await expect(page).toHaveURL(/step=destination/);

    await expect(
      page.getByRole("heading", { name: "Where would you like to use this report?" })
    ).toBeVisible();
    await expect(
      page.getByText("Showing SafeSpeak's standard service directory", {
        exact: false,
      })
    ).toBeVisible();

    const continueButton = page.getByRole("button", { name: "Continue" });
    await expect(continueButton).toBeDisabled();

    await page.getByRole("button", { name: /Police Assistance Line/ }).click();
    await expect(continueButton).toBeEnabled();

    await continueButton.click();
    await expect(page).toHaveURL(/step=consent/);

    await page.reload({ waitUntil: "load" });
    await expect(page).toHaveURL(/step=consent/);
    await expect(page.getByText(/Police Assistance Line/).first()).toBeVisible();
  });

  test("cannot reach Consent or Complete directly without selecting a destination first", async ({
    page,
  }) => {
    await mockSafeSpeakShellApi(page);
    await page.goto(
      "/dashboard?view=reportsubmissiondetails&step=consent&fromTriage=1"
    );
    await expect(page).toHaveURL(/step=destination/);

    await page.goto(
      "/dashboard?view=reportsubmissiondetails&step=complete&fromTriage=1"
    );
    await expect(page).toHaveURL(/step=destination/);
  });

  test("Stage 5 Consent shows the selected destination and does not call any submission API merely by viewing it", async ({
    page,
  }) => {
    const apiState = await mockSafeSpeakShellApi(page);
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Choose a destination" }).click();
    await page.getByRole("button", { name: /Police Assistance Line/ }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=consent/);

    await expect(page.getByText(/Police Assistance Line/).first()).toBeVisible();
    await expect(
      page.getByText(/already granted the consent needed/i)
    ).toBeVisible();

    const disallowedSubmissions = apiState.disallowedCalls.filter((call) =>
      /POST|PUT|PATCH/.test(call)
    );
    expect(disallowedSubmissions).toEqual([]);

    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=complete/);
  });

  test("Stage 6 Complete describes the report as prepared/saved locally, never as submitted or sent, and never fabricates a report ID", async ({
    page,
  }) => {
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Choose a destination" }).click();
    await page.getByRole("button", { name: /Police Assistance Line/ }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=consent/);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=complete/);

    await expect(
      page.getByRole("heading", { name: "Your report is ready" })
    ).toBeVisible();
    await expect(page.getByText("Draft ready - saved locally")).toBeVisible();
    await expect(page.getByText(/^Submitted$/)).toHaveCount(0);
    await expect(page.getByText(/has been sent to/i)).toHaveCount(0);
    await expect(page.getByText(/Report ID/i)).toHaveCount(0);
  });

  test("draft persists across the full onboarding walk and refresh restores the active stage", async ({
    page,
  }) => {
    await goToReviewStage(page);
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=next/);
    await page.reload({ waitUntil: "load" });
    await expect(page).toHaveURL(/step=next/);

    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL(/step=preview/);
    const summary = page.getByTestId("report-preview-summary");
    await expect(summary).toContainText("Someone pulled my hijab.");
  });
});
