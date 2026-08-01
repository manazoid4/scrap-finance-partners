import assert from "node:assert/strict";
import test from "node:test";

import { normaliseLead, renderTemplate } from "../../lib/workspace.mjs";

test("normaliseLead keeps valid client contact details", () => {
  assert.deepEqual(
    normaliseLead({ companyName: " North Yard Ltd ", email: " OPS@NORTHYARD.CO.UK ", phone: " 0161 555 0100 " }),
    { companyName: "North Yard Ltd", email: "ops@northyard.co.uk", phone: "0161 555 0100" },
  );
});

test("normaliseLead requires a company and a contact route", () => {
  assert.throws(() => normaliseLead({ companyName: "", email: "", phone: "" }), /company name/i);
  assert.throws(() => normaliseLead({ companyName: "North Yard", email: "", phone: "" }), /email or phone/i);
});

test("renderTemplate replaces supported lead placeholders", () => {
  assert.equal(
    renderTemplate("Hello {{contact_name}} at {{company_name}}", {
      companyName: "North Yard",
      contactName: "Sam",
    }),
    "Hello Sam at North Yard",
  );
});
