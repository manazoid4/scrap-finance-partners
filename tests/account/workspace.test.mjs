import assert from "node:assert/strict";
import test from "node:test";

import { normaliseLead, renderTemplate } from "../../lib/workspace.mjs";

test("normaliseLead keeps valid client contact details", () => {
  assert.deepEqual(
    normaliseLead({ companyName: " TEST-COMPANY ", email: " TEST@INVALID.TEST ", phone: " 000 " }),
    { companyName: "TEST-COMPANY", email: "test@invalid.test", phone: "000" },
  );
});

test("normaliseLead requires a company and a contact route", () => {
  assert.throws(() => normaliseLead({ companyName: "", email: "", phone: "" }), /company name/i);
  assert.throws(() => normaliseLead({ companyName: "TEST-COMPANY", email: "", phone: "" }), /email or phone/i);
});

test("renderTemplate replaces supported lead placeholders", () => {
  assert.equal(
    renderTemplate("Hello {{contact_name}} at {{company_name}}", {
      companyName: "TEST-COMPANY",
      contactName: "TEST-CONTACT",
    }),
    "Hello TEST-CONTACT at TEST-COMPANY",
  );
});
