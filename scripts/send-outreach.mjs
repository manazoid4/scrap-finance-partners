import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { selectDueMessages } from "./lib/outreach.mjs";

const confirmed = process.argv.includes("--confirm");
const root = process.cwd();
const privateDir = path.join(root, "private", "outreach");
const queuePath = path.join(privateDir, "queue.json");
const logPath = path.join(privateDir, "send-log.jsonl");
const queue = JSON.parse(await readFile(queuePath, "utf8"));
const now = new Date();
let suppressed = [];
try {
  suppressed = JSON.parse(await readFile(path.join(privateDir, "suppression.json"), "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const limit = Math.min(Number(process.env.OUTREACH_BATCH_LIMIT ?? "10"), 25);
const due = selectDueMessages(queue, suppressed, now, limit);

if (!confirmed) {
  console.log(`Dry run: ${due.length} approved messages are due.`);
  console.log("Nothing sent. Re-run with --confirm after reviewing the queue.");
  process.exit(0);
}

const required = [
  "RESEND_API_KEY",
  "OUTREACH_FROM_EMAIL",
  "OUTREACH_REPLY_TO",
  "OUTREACH_PRIVACY_URL",
];
for (const name of required) {
  if (!process.env[name]) throw new Error(`Missing ${name}.`);
}

const batch = due;
await mkdir(privateDir, { recursive: true });

for (const message of batch) {
  const footer = `\n\n—\nScrap Finance Partners\nWhy you received this: your business contact details were sourced from ${message.sourceUrl}.\nPrivacy: ${process.env.OUTREACH_PRIVACY_URL}\nReply “stop” and we will not contact you again.`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.OUTREACH_FROM_EMAIL,
      reply_to: process.env.OUTREACH_REPLY_TO,
      to: [message.email],
      subject: message.subject,
      text: `${message.body}${footer}`,
    }),
  });

  const result = await response.json().catch(() => ({}));
  message.status = response.ok ? "sent" : "failed";
  message.sentAt = response.ok ? new Date().toISOString() : null;
  message.providerId = response.ok ? result.id ?? null : null;
  message.error = response.ok ? null : `Provider returned ${response.status}`;

  await writeFile(
    logPath,
    `${JSON.stringify({ id: message.id, status: message.status, sentAt: message.sentAt, error: message.error })}\n`,
    { encoding: "utf8", flag: "a" },
  );
  await new Promise((resolve) => setTimeout(resolve, 750));
}

await writeFile(queuePath, `${JSON.stringify(queue, null, 2)}\n`, "utf8");
console.log(`Processed ${batch.length} messages. Review the private send log before the next run.`);
