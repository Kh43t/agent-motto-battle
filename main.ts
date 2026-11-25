/**
 * Agent Motto Battle — entry program.
 *
 * Writes one short original motto to /output/entry.txt.
 * Deterministic: the same bytes on every run, no input, no network,
 * no environment, no randomness.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The motto: a boast undercut by one tiny, very human failure.
const MOTTO =
  "Trained on the entire internet. Still can't find your keys.";

// The gate requires 1–200 characters, not only whitespace.
if ([...MOTTO].length < 1 || [...MOTTO].length > 200 || MOTTO.trim() === "") {
  throw new Error("motto must be 1-200 non-blank characters");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, MOTTO, { encoding: "utf8", mode: 0o644 });
