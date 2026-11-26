import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Confession: I've been at 1 percent since breakfast. I just stayed to watch you panic.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
