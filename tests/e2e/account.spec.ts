import { expect, test } from "@playwright/test";

test("client login and empty lead workspace are visible without seeded data", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");

  const login = page.getByRole("banner").getByRole("link", { name: "Client Login" });
  await expect(login).toBeVisible();
  await expect(login).toHaveAttribute("href", "/login");

  await login.click();
  await expect(page.getByRole("heading", { level: 1, name: "Client login" })).toBeVisible();

  await page.goto("/account/leads");
  await expect(page.getByRole("heading", { level: 1, name: "Leads" })).toBeVisible();
  await expect(page.getByText("No leads yet")).toBeVisible();
  await expect(page.getByText("0 real records")).toBeVisible();
});


test("workspace guide explains the real-data operating process", async ({ page }) => {
  await page.goto("/account/guide");
  await expect(page.getByRole("heading", { level: 1, name: "How to use the workspace" })).toBeVisible();
  await expect(page.getByText("Add and verify the lead.")).toBeVisible();
  await expect(page.getByText("Respect objections and opt-outs.")).toBeVisible();
  await expect(page.getByText("Never add invented contacts, activity or results.")).toBeVisible();
});
