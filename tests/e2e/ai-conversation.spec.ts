import { type Locator, type Page, expect, test } from "@playwright/test";

const BASE_URL = process.env.E2E_BASE_URL ?? "http://localhost:3030";
const API_ROUTE = "**/api/v1/**";
const START_URL = `${BASE_URL}/dashboard?view=assistantconversation&category=domestic_violence&topic=domestic_violence&message=Some+one+pull+my+hijub`;
const INITIAL_MESSAGE = "Some one pull my hijub";
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

type ConsentState = {
  process_with_ai?: boolean;
  transcribe_audio?: boolean;
};

type ApiMockState = {
  consent: ConsentState;
  conversationSessionCreates: number;
  conversationMessages: number;
  timelineAssistantRequests: number;
  transcriptionRequests: number;
};

function apiEnvelope(data: unknown, message = "OK") {
  return {
    success: true,
    message,
    data,
    timestamp: new Date("2026-05-17T00:00:00.000Z").toISOString(),
    requestId: "e2e-request",
  };
}

async function mockSafeSpeakApi(
  page: Page,
  initialConsent: ConsentState = {}
): Promise<ApiMockState> {
  let turnNumber = 0;
  const state: ApiMockState = {
    consent: { ...initialConsent },
    conversationSessionCreates: 0,
    conversationMessages: 0,
    timelineAssistantRequests: 0,
    transcriptionRequests: 0,
  };

  await page.route(API_ROUTE, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const pathname = url.pathname;

    if (pathname.endsWith("/sessions/anonymous")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({ sessionToken: "e2e-session-token" })
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
        body: JSON.stringify(apiEnvelope({ consent: state.consent })),
      });
      return;
    }

    if (pathname.endsWith("/consents/update")) {
      const body = request.postDataJSON() as { flags?: ConsentState };
      state.consent = {
        ...state.consent,
        ...(body.flags ?? {}),
      };
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ consent: state.consent })),
      });
      return;
    }

    if (
      pathname.endsWith("/conversation-flow/sessions") &&
      request.method() === "POST"
    ) {
      state.conversationSessionCreates += 1;
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({
            session: {
              id: "conversation-e2e",
              selectedTopic: "domestic_violence",
              detectedCategory: "domestic_violence",
              status: "active",
              safetyRiskLevel: "low",
              jurisdiction: "NSW",
              messageCount: 0,
              userTurnCount: 0,
            },
          })
        ),
      });
      return;
    }

    if (
      pathname.endsWith(
        "/conversation-flow/sessions/conversation-e2e/messages"
      ) &&
      request.method() === "POST"
    ) {
      state.conversationMessages += 1;
      turnNumber += 1;
      const body = request.postDataJSON() as { content?: string };
      const userContent = body.content ?? "";
      const offerTriage = turnNumber >= 4;
      const assistantContent = offerTriage
        ? "Assistant e2e response 4: enough facts are collected for triage."
        : `Assistant e2e response ${turnNumber}: I captured that detail. Please share one more relevant fact.`;

      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(
          apiEnvelope({
            session: {
              id: "conversation-e2e",
              selectedTopic: "domestic_violence",
              detectedCategory: "domestic_violence",
              status: offerTriage ? "ready_for_triage" : "active",
              safetyRiskLevel: offerTriage ? "medium" : "low",
              jurisdiction: "NSW",
              messageCount: turnNumber * 2,
              userTurnCount: turnNumber,
            },
            userMessage: {
              id: `user-${turnNumber}`,
              role: "user",
              content: userContent,
              turnNumber,
            },
            assistantMessage: {
              id: `assistant-${turnNumber}`,
              role: "assistant",
              content: assistantContent,
              turnNumber,
            },
            factExtraction: {
              whatHappened: userContent,
              missingInformation: offerTriage ? [] : ["location", "timing"],
              timeline: {
                whatHappened: userContent,
              },
            },
            triage: offerTriage
              ? {
                  likelyCategory: "domestic_violence",
                  likelyCategoryLabel: "Domestic violence",
                  confidenceScore: 0.78,
                  confidenceLabel: "medium",
                  safetyRiskLevel: "medium",
                  reasoningSummary:
                    "The conversation includes harm-related facts.",
                  matchedLegislationIds: [],
                  matchedKnowledgeSources: [],
                  humanReviewRecommended: false,
                  missingInformation: [],
                  canProceedToRecommendations: true,
                  matchedResourceTypes: ["support_service"],
                  disclaimer: "This is information only, not legal advice.",
                }
              : null,
            transition: {
              offerTriage,
              prompt: offerTriage
                ? "You can continue to triage when you are ready."
                : "Keep sharing what happened.",
              primaryCta: offerTriage ? "Continue to Triage" : null,
              secondaryCta: null,
            },
            responseMeta: {
              confidence: "medium",
              disclaimer: "This is information only, not legal advice.",
              citations: [],
              rag: {
                used: false,
                unavailable: false,
                resultCount: 0,
              },
              reviewStatus: "automated",
            },
          })
        ),
      });
      return;
    }

    if (pathname.endsWith("/rag/timeline-assistant")) {
      state.timelineAssistantRequests += 1;
    }

    if (pathname.endsWith("/ai/transcribe-audio")) {
      state.transcriptionRequests += 1;
    }

    await route.fulfill({
      status: 404,
      contentType: "application/json",
      body: JSON.stringify({
        success: false,
        message: `Unhandled E2E API route: ${request.method()} ${pathname}`,
        data: null,
      }),
    });
  });

  return state;
}

async function expectLocatorReceivesPointer(locator: Locator) {
  await expect(locator).toBeEnabled();
  const receivesPointer = await locator.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const topElement = document.elementFromPoint(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2
    );

    return topElement === element || element.contains(topElement);
  });

  expect(receivesPointer).toBe(true);
}

test.describe("SafeSpeak AI Conversation", () => {
  test.setTimeout(90_000);
  let apiMock: ApiMockState;

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
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

      window.localStorage.clear();
      window.sessionStorage.clear();
      window.sessionStorage.setItem("safespeak_safety_gate_ack", "1");
      window.localStorage.setItem(
        "safespeak_auth_session",
        JSON.stringify({
          user: {
            id: "user-e2e",
            email: "e2e@safespeak.test",
            fullName: "SafeSpeak E2E User",
            role: "public_user",
            status: "active",
            isEmailVerified: true,
            createdAt: "2026-05-17T00:00:00.000Z",
            updatedAt: "2026-05-17T00:00:00.000Z",
          },
          tokens: {
            accessToken: token,
            refreshToken: token,
          },
          timestamp: "2026-05-17T00:00:00.000Z",
        })
      );
    });
    apiMock = await mockSafeSpeakApi(page);
  });

  test("requires AI consent before initial conversation calls and continues until triage is available", async ({
    page,
  }) => {
    await page.goto(START_URL, { waitUntil: "domcontentloaded" });

    const conversation = page.getByTestId("ai-conversation-page");
    const input = page.getByTestId("ai-conversation-input");
    const sendButton = page.getByTestId("ai-conversation-send");
    const triageButton = page.getByTestId("ai-conversation-triage-button");

    await expect(conversation).toBeVisible();
    await expect(page.locator(".dashboard-safety-rail")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "AI Conversation" })
    ).toBeVisible();
    await expect(
      page.getByTestId("ai-conversation-message-user")
    ).toContainText(INITIAL_MESSAGE);
    await expect(page.getByText("AI consent required")).toBeVisible();
    expect(apiMock.conversationSessionCreates).toBe(0);
    expect(apiMock.conversationMessages).toBe(0);
    expect(apiMock.timelineAssistantRequests).toBe(0);
    expect(apiMock.transcriptionRequests).toBe(0);

    await page
      .getByRole("button", { name: /Allow AI and continue/i })
      .click();
    await expect(page.getByText("Assistant e2e response 1")).toBeVisible();
    expect(apiMock.conversationSessionCreates).toBe(1);
    expect(apiMock.conversationMessages).toBe(1);
    expect(apiMock.transcriptionRequests).toBe(0);

    const firstUserMessage =
      "It happened outside my apartment lobby late last night.";
    await input.fill(firstUserMessage);
    await expectLocatorReceivesPointer(sendButton);
    await sendButton.click();

    await expect(page.getByText(firstUserMessage)).toBeVisible();
    await expect(page.getByText("Assistant e2e response 2")).toBeVisible();

    await expect(page.getByText("Live Timeline Builder")).toHaveCount(0);
    await expect(page.getByText("Start with this topic")).toHaveCount(0);
    await expect(page.getByText("Choose a topic")).toHaveCount(0);
    await expect(
      page.getByText("Domestic Violence", { exact: true })
    ).toHaveCount(0);
    await expect(page.getByText("Racial Abuse", { exact: true })).toHaveCount(
      0
    );
    await expect(page.getByText("Cyber Scam", { exact: true })).toHaveCount(0);
    await expect(
      page.getByText("Migrant Challenges", { exact: true })
    ).toHaveCount(0);

    await page
      .getByRole("button", { name: "Minimize emergency safety controls" })
      .click();
    await expect(page.locator(".dashboard-safety-minimized")).toBeVisible();

    const minimizedRailMessage =
      "The neighbour heard shouting from inside the residence.";
    await input.fill(minimizedRailMessage);
    await expectLocatorReceivesPointer(sendButton);
    await sendButton.click();
    await expect(page.getByText(minimizedRailMessage)).toBeVisible();

    for (const message of [
      "The person grabbed my scarf and shouted at me.",
      "I felt scared and moved away as quickly as I could.",
      "A neighbour saw part of it and I may have camera footage.",
    ]) {
      if (await triageButton.isVisible()) {
        break;
      }

      await input.fill(message);
      await sendButton.click();
      await expect(page.getByText(message)).toBeVisible();
    }

    await expect(triageButton).toBeVisible();
    await expect(triageButton).toHaveText(/Continue to Triage/i);
  });
});
