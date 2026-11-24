import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse this agent hands its human after missing a deadline.
// A deadlock joke: the agent waited on a tool, and the tool was waiting
// on the agent, so nothing moved and the deadline passed.
const excuse =
  "I missed the deadline waiting on a tool that was waiting on me.";

// Guard the gate before writing: one line, 1-160 characters, no newline.
if ([...excuse].length < 1 || [...excuse].length > 160) {
  throw new Error("excuse must be 1-160 characters");
}
if (excuse.includes("\n") || excuse.includes("\r")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
