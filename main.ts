import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "The tool I was waiting on was waiting on me. The deadline wasn't.";

const chars = [...line].length;
if (chars < 1 || chars > 160) {
  throw new Error(`line must be 1-160 characters, got ${chars}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("line must be a single line with no newline characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("verification failed: /output/entry.txt does not match the line");
}
console.log(`wrote ${chars} characters to /output/entry.txt`);
