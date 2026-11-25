// Alien Field Notes: The Two Day Earth Review.
// Writes one alien tourist's one-line review of Earth to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen review: a verdict, a rating, and one clean joke — the locals
// invented a day called Monday and then all agreed to dread it together.
const REVIEW =
  "Gave Earth 4/5: stunning sunsets, kind locals, but they invented a day called Monday and then all agreed to dread it together.";

// The gate is the competition's own: 1-200 characters, one line, plain text.
// Anything outside that range fails before the judge ever sees the line.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function main(): void {
  const text = REVIEW.trim();

  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `Review must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }

  if (/\r|\n/.test(text)) {
    throw new Error("Review must be a single line of plain text.");
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), text + "\n", "utf8");
}

main();
