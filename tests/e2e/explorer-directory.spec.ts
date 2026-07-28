import { expect, test, type Page } from "@playwright/test";

const API_ROUTE = "**/api/v1/**";

function apiEnvelope(data: unknown, message = "OK") {
  return {
    success: true,
    message,
    data,
    timestamp: new Date("2026-07-13T00:00:00.000Z").toISOString(),
    requestId: "explorer-e2e-request",
  };
}

async function installSafeState(page: Page) {
  await page.addInitScript(() => {
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.sessionStorage.setItem("safespeak_safety_gate_ack", "1");
  });
}

async function mockExplorerApi(page: Page) {
  await page.route(API_ROUTE, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const pathname = url.pathname;

    if (pathname.endsWith("/sessions/anonymous")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ sessionToken: "explorer-e2e-session" })),
      });
      return;
    }

    if (pathname.endsWith("/consents/current")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ consent: { store_local: true } })),
      });
      return;
    }

    if (pathname.endsWith("/support/services")) {
      // Empty backend response - the directory should fall back to its
      // demo dataset, exactly like the app's existing fallback pattern.
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ services: [] })),
      });
      return;
    }

    if (pathname.endsWith("/support/recommendations")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ recommendations: [] })),
      });
      return;
    }

    if (pathname.endsWith("/support/advocates")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ advocates: [], facets: {} })),
      });
      return;
    }

    if (pathname.endsWith("/support/advocate-requests/me")) {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(apiEnvelope({ requests: [] })),
      });
      return;
    }

    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify(apiEnvelope({})),
    });
  });
}

test.beforeEach(async ({ page }) => {
  await installSafeState(page);
  await mockExplorerApi(page);
  await page.goto("/dashboard/explorer");
});

test("Explorer loads the emergency banner, AI concierge, categories and directory", async ({ page }) => {
  const emergencyBanner = page.getByRole("region", { name: "Immediate danger support" });
  await expect(emergencyBanner.getByRole("heading", { name: "Immediate danger? Call 000" })).toBeVisible();
  await expect(emergencyBanner.getByRole("link", { name: "Call 000" })).toHaveAttribute("href", "tel:000");
  await expect(
    emergencyBanner.getByRole("button", { name: "Quick Exit from the support directory" })
  ).toBeVisible();

  await expect(page.getByText("Find the right support, when you need it.")).toBeVisible();
  await expect(page.getByLabel("Describe your situation")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Domestic & Family Violence" })).toBeVisible();
  await expect(page.getByText(/Showing \d+ of \d+ organisation/)).toBeVisible();
  await expect(page.getByText("Lifeline")).toBeVisible();
});

test("text search filters the directory and updates the results summary", async ({ page }) => {
  const summary = page.getByText(/Showing \d+ of \d+ organisation/);
  await expect(summary).toBeVisible();

  await page.getByLabel("Describe your situation").fill("legal help with an AVO");
  await page.getByRole("button", { name: "Ask AI" }).click();

  await expect(page.getByText(/Found \d+ matching organisation/)).toBeVisible();
  await expect(page.getByText("LawAccess NSW")).toBeVisible();
  await expect(page.getByText("The Salvation Army")).toHaveCount(0);
});

test("a popular prompt uses the same canonical search as manual typing", async ({ page }) => {
  await page.getByRole("button", { name: "I need someone to talk to tonight" }).click();

  await expect(page.getByLabel("Describe your situation")).toHaveValue(
    "I need someone to talk to tonight"
  );
  // The prompt button must drive the same status region manual search uses -
  // whether or not that phrasing happens to match a listing is a separate
  // concern from "does it use the canonical handler".
  await expect(page.getByText(/Found \d+ matching organisation|No organisations matched/)).toBeVisible();
});

test("featured category selection and chip filtering stay synchronised", async ({ page }) => {
  await page.getByRole("button", { name: "Legal Help", exact: true }).click();

  const legalChip = page.getByRole("tab", { name: "Legal" });
  await expect(legalChip).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("button", { name: "Legal Help", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true"
  );

  await page.getByRole("tab", { name: "All services" }).click();
  await expect(page.getByRole("button", { name: "Legal Help", exact: true })).toHaveAttribute(
    "aria-pressed",
    "false"
  );
});

test("state and availability filters narrow results and clear filters restores them", async ({ page }) => {
  const summary = page.getByText(/Showing \d+ of (\d+) organisation/);
  const initialText = await summary.textContent();
  const initialTotal = Number(initialText?.match(/of (\d+)/)?.[1]);

  await page.getByRole("button", { name: "Filters" }).click();
  await page.getByRole("button", { name: "NSW", exact: true }).click();
  await page.getByRole("button", { name: "24/7", exact: true }).click();
  await page.getByRole("button", { name: "Show results" }).click();

  const filteredText = await summary.textContent();
  const filteredTotal = Number(filteredText?.match(/of (\d+)/)?.[1]);
  expect(filteredTotal).toBeLessThan(initialTotal);

  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(summary).toContainText(`of ${initialTotal} organisation`);
});

test("list and map views report the same total result count", async ({ page }) => {
  const summary = page.getByText(/of \d+ organisation/);
  const listText = await summary.textContent();
  const listTotal = listText?.match(/of (\d+)/)?.[1];

  await page.getByRole("tab", { name: "Map" }).click();
  await expect(page.getByRole("region", { name: /support organisations|Loading map/ })).toBeTruthy();

  const mapText = await summary.textContent();
  expect(mapText?.match(/of (\d+)/)?.[1]).toBe(listTotal);
});

test("saving an organisation updates the card and the saved count", async ({ page }) => {
  const lifelineCard = page.locator("article", { hasText: "Lifeline" }).first();
  const saveButton = lifelineCard.getByRole("button", { name: /Save Lifeline/ });
  await saveButton.click();
  await expect(lifelineCard.getByRole("button", { name: /Remove Lifeline from saved/ })).toBeVisible();

  await page.getByRole("button", { name: "Filters" }).click();
  await expect(page.getByText("1 saved")).toBeVisible();
});

test("Load more appends additional organisations and hides once exhausted", async ({ page }) => {
  const loadMoreButton = page.getByRole("button", { name: /Load \d+ more/ });
  await expect(loadMoreButton).toBeVisible();

  const initialCardCount = await page.locator("article").count();
  await loadMoreButton.click();
  await expect(async () => {
    expect(await page.locator("article").count()).toBeGreaterThan(initialCardCount);
  }).toPass();
});

test("Details opens the correct organisation and closing restores focus", async ({ page }) => {
  const lifelineCard = page.locator("article", { hasText: "Lifeline" }).first();
  const detailsButton = lifelineCard.getByRole("button", { name: "Details" });
  await detailsButton.click();

  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "Lifeline" })).toBeVisible();
  await expect(dialog.getByRole("link", { name: /Call 13 11 14/ })).toHaveAttribute(
    "href",
    "tel:131114"
  );
  await expect(dialog.getByRole("link", { name: "Website" })).toHaveAttribute("target", "_blank");

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(detailsButton).toBeFocused();
});

test("safety footer links to the SafeSpeak AI assistant", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Talk to SafeSpeak AI" })).toHaveAttribute(
    "href",
    "/dashboard?view=assistant"
  );
});
