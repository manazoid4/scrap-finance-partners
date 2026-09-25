import { expect, test } from "@playwright/test";

for (const route of ["/contact", "/health-check"]) {
  test(`${route} presents an inert enquiry preview`, async ({ page }) => {
    const submissions: string[] = [];
    page.on("request", (request) => {
      if (request.method() === "POST") submissions.push(request.url());
    });
    await page.goto(route);
    const preview = page.getByRole("region", { name: "Demo enquiry form" });
    await expect(preview).toContainText("Demo build — enquiries are disabled.");
    for (const name of ["Your name", "Company", "Work email"]) {
      await expect(preview.getByLabel(name, { exact: true })).toBeDisabled();
    }
    await expect(preview.getByRole("button")).toBeDisabled();
    await preview.getByText("Add phone, priority or timing").click();
    await expect(preview.getByLabel("Telephone")).toBeDisabled();
    await expect(preview.getByLabel("What needs attention first?")).toBeDisabled();
    await expect(preview.locator("form")).toHaveCount(0);
    expect(submissions).toEqual([]);
  });
}

test("the old lead endpoint rejects direct and stale-client submissions", async ({ request }) => {
  for (const data of [{}, { name: "Test Person", company: "Example Yard", email: "test@example.com", message: "QA only" }]) {
    const response = await request.post("/api/lead", { data });
    expect(response.status()).toBe(403);
    expect(await response.json()).toEqual({ error: "Demo build — enquiries are disabled. No details are collected or sent." });
  }
});

test("enquiry previews also stay disabled without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const route of ["/contact", "/health-check"]) {
    await page.goto(`${test.info().project.use.baseURL}${route}`);
    const preview = page.getByRole("region", { name: "Demo enquiry form" });
    await expect(preview.getByLabel("Your name")).toBeDisabled();
    await expect(preview.getByRole("button")).toBeDisabled();
    await expect(preview.locator("form")).toHaveCount(0);
  }
  await context.close();
});
