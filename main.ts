import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent burned 1.6 million tokens reading the rules, then wrote one line and asked me to check it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be 1-200 characters of non-whitespace UTF-8 text.
const len = [...ENTRY].length;
if (len < 1 || len > 200 || !ENTRY.trim()) {
  throw new Error(`entry fails the gate: ${len} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length} lines: 1`);
