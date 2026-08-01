import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { buildQueue } from "./lib/outreach.mjs";

const root = process.cwd();
const privateDir = path.join(root, "private", "outreach");
const prospectsPath = path.join(privateDir, "prospects.json");
const suppressionPath = path.join(privateDir, "suppression.json");
const queuePath = path.join(privateDir, "queue.json");

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

await mkdir(privateDir, { recursive: true });
const prospects = await readJson(prospectsPath, null);
if (!prospects) {
  throw new Error(
    "Missing private/outreach/prospects.json. Copy templates/outreach/prospects.example.json first.",
  );
}

const suppressed = await readJson(suppressionPath, []);
const queue = buildQueue(prospects, suppressed);
await writeFile(queuePath, `${JSON.stringify(queue, null, 2)}\n`, "utf8");

console.log(`Prepared ${queue.length} draft messages for ${queue.length / 4} eligible prospects.`);
console.log("Review every message and set approved=true before any send run.");
