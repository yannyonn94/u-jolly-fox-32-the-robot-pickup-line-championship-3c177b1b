// The Robot Pickup Line Championship
// Writes one pickup line — a robot's — to /output/entry.txt.
// The line: a robot that patched everything except the bug called love.
// The gate allows 1–200 characters, so the line is checked after writing
// and the program fails loudly instead of shipping an invalid entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I installed 17 firmware updates to impress you, and the only bug I refuse to patch is the one that makes my servos hum every time you walk by — want to hear it up close?";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = outputDir.endsWith("entry.txt")
  ? outputDir
  : join(outputDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Self-check: the gate rejects anything outside 1–200 characters,
// so verify the exact bytes on disk before exiting successfully.
const written = readFileSync(outPath, "utf8");
if (written !== LINE || written.length < 1 || written.length > 200) {
  throw new Error(`entry.txt failed its self-check (${written.length} chars)`);
}
