import { expect, test } from "@playwright/test";

test("Health Check section links clear the sticky header", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const id of ["request", "example-output", "pressure-map"]) {
      await page.goto(`/health-check#${id}`);
      await expect.poll(async () => page.evaluate((sectionId) => {
        const target = document.getElementById(sectionId)!.getBoundingClientRect();
        const header = document.querySelector("header")!.getBoundingClientRect();
        return target.top - header.bottom;
      }, id), { message: `${id} clears the header at ${width}px` }).toBeGreaterThanOrEqual(0);
    }
  }
});

test("portfolio pages and redirect destinations are excluded from search indexing", async ({ page, request }) => {
  for (const route of ["/", "/health-check", "/services", "/case-studies", "/about", "/ways-to-work-together", "/contact", "/updates", "/privacy", "/login", "/sign-up", "/forgot-password", "/reset-password", "/account", "/account/leads", "/account/templates", "/account/outbox", "/account/guide"]) {
    const response = await page.goto(route);
    expect(response?.headers()["x-robots-tag"], route).toContain("noindex");
    await expect(page.locator('meta[name="robots"]'), route).toHaveAttribute("content", /noindex/);
  }
  for (const route of ["/founder", "/pricing", "/software", "/dashboard-demo", "/insights", "/not-a-page"]) {
    const response = await request.get(route);
    expect(response.headers()["x-robots-tag"], route).toContain("noindex");
  }
});

test("marketing pages omit unfinished content and credit Maz Works", async ({ page }) => {
  for (const route of ["/", "/health-check", "/services", "/case-studies", "/about", "/ways-to-work-together", "/contact", "/updates", "/privacy"]) {
    await page.goto(route);
    const text = await page.locator("body").innerText();
    expect(text, route).not.toMatch(/\bpending\b|\bplaceholder\b|lorem ipsum|once confirmed|waiting on written sign-off|nothing to evaluate yet|not yet released/i);
    await expect(page.getByRole("contentinfo").getByRole("link", { name: "Website built by Maz Works" })).toHaveAttribute("href", "https://www.mazworks.uk");
  }
});
