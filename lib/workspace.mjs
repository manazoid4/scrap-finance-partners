const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normaliseLead(input) {
  const companyName = String(input.companyName ?? "").trim();
  const email = String(input.email ?? "").trim().toLowerCase();
  const phone = String(input.phone ?? "").trim();

  if (companyName.length < 2) throw new Error("A company name is required.");
  if (!email && !phone) throw new Error("An email or phone number is required.");
  if (email && !emailPattern.test(email)) throw new Error("Enter a valid email address.");

  return { companyName, email, phone };
}

export function renderTemplate(value, lead) {
  const replacements = {
    "{{company_name}}": String(lead.companyName ?? ""),
    "{{contact_name}}": String(lead.contactName ?? "there"),
    "{{email}}": String(lead.email ?? ""),
    "{{phone}}": String(lead.phone ?? ""),
  };

  return Object.entries(replacements).reduce(
    (output, [placeholder, replacement]) => output.replaceAll(placeholder, replacement),
    String(value),
  );
}
