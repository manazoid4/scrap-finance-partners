import { expect, test } from "@playwright/test";

test("lead form submits with only the three required fields", async ({ page }) => {
  let payload: Record<string, string> = {};
  let requests = 0;
  await page.route("**/api/lead", async (route) => {
    requests++;
    payload = route.request().postDataJSON();
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });

  await page.goto("/health-check?utm_source=test&utm_campaign=qa");
  const form = page.locator("form");
  await form.getByLabel("Your name").fill("Test Person");
  await form.getByLabel("Company").fill("Example Yard");
  await form.getByLabel("Work email").fill("test@example.com");
  // Deliberately leaves challenge, timing, phone and message empty.
  await form.getByRole("button", { name: "Request Health Check" }).click();

  await expect(page.getByRole("status")).toContainText("Enquiry received.");
  expect(requests).toBe(1);
  expect(payload.company).toBe("Example Yard");
  expect(payload.utmSource).toBe("test");
  expect(payload.utmCampaign).toBe("qa");
});

test("optional qualification answers are still captured when given", async ({ page }) => {
  let payload: Record<string, string> = {};
  await page.route("**/api/lead", async (route) => {
    payload = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
  });

  await page.goto("/contact");
  const form = page.locator("form");
  await form.getByLabel("Your name").fill("Test Person");
  await form.getByLabel("Company").fill("Example Yard");
  await form.getByLabel("Work email").fill("test@example.com");
  await form.getByLabel("What needs attention first?").selectOption({ label: "Trading margin" });
  await form
    .getByLabel("When are you looking to act?")
    .selectOption({ label: "Within three months" });
  await form.getByRole("button", { name: "Send enquiry" }).click();

  await expect(page.getByRole("status")).toBeVisible();
  expect(payload.challenge).toBe("Trading margin");
  expect(payload.timing).toBe("Within three months");
});

test("a failed submission shows an accessible error and keeps the answers", async ({ page }) => {
  await page.route("**/api/lead", (route) => route.fulfill({ status: 500, body: "{}" }));

  await page.goto("/contact");
  const form = page.locator("form");
  await form.getByLabel("Your name").fill("Test Person");
  await form.getByLabel("Company").fill("Example Yard");
  await form.getByLabel("Work email").fill("test@example.com");
  await form.getByRole("button", { name: "Send enquiry" }).click();

  // Scoped to the form: Next renders its own role="alert" route announcer.
  await expect(form.getByRole("alert")).toContainText("could not be sent");
  // Answers survive the failure so the user can retry.
  await expect(form.getByLabel("Company")).toHaveValue("Example Yard");
});

test("the enquiry form is completable by keyboard alone", async ({ page }) => {
  await page.route("**/api/lead", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }),
  );

  await page.goto("/contact");
  const form = page.locator("form");
  await form.getByLabel("Your name").focus();
  await page.keyboard.type("Test Person");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Example Yard");
  await page.keyboard.press("Tab");
  await page.keyboard.type("test@example.com");

  await form.getByRole("button", { name: "Send enquiry" }).press("Enter");
  await expect(page.getByRole("status")).toBeVisible();
});
