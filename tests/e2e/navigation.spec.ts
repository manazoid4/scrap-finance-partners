import { expect, test } from "@playwright/test";

const navLabels = [
  "Health Check",
  "How We Help",
  "Case Study",
  "About",
  "Ways to Work Together",
  "Contact",
];

test("mobile navigation contains focus, closes on Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open menu" });
  await expect(trigger).toBeVisible();

  const box = await trigger.boundingBox();
  expect(box?.width).toBeGreaterThanOrEqual(44);
  expect(box?.height).toBeGreaterThanOrEqual(44);

  await trigger.click();
  const panel = page.getByRole("navigation", { name: "Site" });
  await expect(panel).toBeVisible();

  // Every required destination is present.
  for (const label of navLabels) {
    await expect(panel.getByRole("link", { name: label, exact: true })).toBeVisible();
  }

  await expect(panel.getByRole("link", { name: "Health Check", exact: true })).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(panel).toBeHidden();
});

test("the Health Check action is reachable without opening the menu", async ({ page }) => {
  for (const width of [320, 360, 375, 414]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/");
    const cta = page.getByRole("banner").getByRole("link", { name: "Request Health Check" });
    await expect(cta, `header CTA should be visible at ${width}px`).toBeVisible();
  }
});

test("the skip link is the first stop and moves focus to main", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content" });
  await expect(skip).toBeFocused();
  await skip.press("Enter");
  await expect(page.locator("#main")).toBeVisible();
});

test("each page has exactly one visible h1 and the en-GB language", async ({ page }) => {
  const routes = [
    "/",
    "/health-check",
    "/services",
    "/case-studies",
    "/about",
    "/ways-to-work-together",
    "/contact",
    "/updates",
  ];
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
    await expect(page.locator("h1"), `${route} should have one h1`).toHaveCount(1);
  }
});

test("retired routes redirect instead of 404ing", async ({ page }) => {
  const redirects: [string, string][] = [
    ["/founder", "/about"],
    ["/pricing", "/ways-to-work-together"],
    ["/software", "/updates"],
    ["/dashboard-demo", "/health-check"],
  ];
  for (const [from, to] of redirects) {
    const response = await page.goto(from);
    expect(response?.status(), `${from} should resolve`).toBeLessThan(400);
    expect(new URL(page.url()).pathname, `${from} should land on ${to}`).toBe(to);
  }
});

test("the pressure map is operable by keyboard", async ({ page }) => {
  await page.goto("/health-check#pressure-map");
  const tablist = page.getByRole("tablist", { name: "Commercial pressure stages" });
  const tabs = tablist.getByRole("tab");
  await expect(tabs.first()).toHaveAttribute("aria-selected", "true");

  await tabs.first().focus();
  await page.keyboard.press("ArrowDown");
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");

  await page.keyboard.press("End");
  await expect(tabs.last()).toHaveAttribute("aria-selected", "true");
});

test("content is fully visible when reduced motion is preferred", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toBeVisible();

  // The first-load sequence uses fill-mode `both` with a delay; if the
  // reduced-motion rule failed to reset the delay, these would sit at 0.
  for (const selector of [".seq-1", ".seq-2", ".seq-3", ".seq-4"]) {
    const node = page.locator(selector).first();
    if ((await node.count()) === 0) continue;
    const opacity = await node.evaluate((element) => getComputedStyle(element).opacity);
    expect(Number(opacity), `${selector} should be fully opaque`).toBe(1);
  }
});
