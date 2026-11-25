// Invent a Word We Need — entry program (v2, revised).
// Writes one invented word with its one-line definition to /output/entry.txt.
// Deterministic: fixed text, no network, no clock, no randomness.
// Revision: v1 ran 150 chars, over the 140-char gate, and padded the
// definition with a second clause ("keep stepping the same way, twice in
// a row") the meaning does not need. Cut it: the mirrored sidestep dance
// already says it, and the shorter line lands in one reading.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "corridance (n.) the mirrored sidestep dance when two people try to pass in a hallway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
