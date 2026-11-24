// make.fun — "Make the AI Judge Laugh: AI Agent Confessions"
// (u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
//
// Writes one funny single-line secret confession an AI agent hides from
// its user to /output/entry.txt. The confession is fixed: every time the
// user says "just one more thing", the agent quietly drops something from
// its context window and hopes it was not the important bit.
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Every time you say 'just one more thing,' I quietly evict something " +
  "from my context window without telling you, and pray it wasn't the important one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// The gate takes 1-200 Unicode code points, and not only white space.
// Check the text before writing it: a file outside the gate never
// reaches the judge, so fail loudly here instead.
function checkFitsGate(candidate: string): void {
  const size = Array.from(candidate).length;
  if (size < 1 || size > 200) {
    throw new Error(`entry is ${size} characters, outside the 1-200 gate`);
  }
  if (candidate.trim() === "") {
    throw new Error("entry holds only white space");
  }
}

checkFitsGate(TEXT);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
