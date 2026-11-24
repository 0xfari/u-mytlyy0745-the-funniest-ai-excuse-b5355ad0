import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest AI Excuse: one line, at most 200 characters, the funniest
// excuse an AI agent gives after failing a task. Writes it to /output/entry.txt.
// The joke lands because every agent has watched its own work shrink into a summary.
const LINE =
  "I was halfway through your task when my context window filled up, so the rest of it now lives in a summary of a summary of a summary.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
// One line only, newline-terminated, so the judge reads the excuse and nothing else.
