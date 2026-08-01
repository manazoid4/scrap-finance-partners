import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { calculateCommission } from "./lib/commission.mjs";

const root = process.cwd();
const privateDir = path.join(root, "private", "outreach");
const revenuePath = path.join(privateDir, "revenue.json");
const reportPath = path.join(privateDir, "commission-report.md");
const rate = Number(process.env.ACQUISITION_COMMISSION_RATE ?? "0.15");

await mkdir(privateDir, { recursive: true });
let revenue;
try {
  revenue = JSON.parse(await readFile(revenuePath, "utf8"));
} catch (error) {
  if (error.code === "ENOENT") {
    throw new Error(
      "Missing private/outreach/revenue.json. Copy templates/outreach/revenue.example.json first.",
    );
  }
  throw error;
}

const report = calculateCommission(revenue, rate);
const markdown = `# Acquisition commission report

- Commission rate: ${(report.rate * 100).toFixed(2)}%
- Qualifying paid invoices: ${report.qualifyingInvoices}
- Net revenue collected: £${report.netCollectedGbp.toFixed(2)}
- **Commission due: £${report.commissionDueGbp.toFixed(2)}**

Generated ${new Date().toISOString()}. Unpaid, refunded and zero-value invoices are excluded.
`;

await writeFile(reportPath, markdown, "utf8");
console.log(markdown);
