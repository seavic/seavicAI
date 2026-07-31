import fs from "node:fs";
import path from "node:path";

const roots = ["src", "public", "README.md", "CONTENT_GOVERNANCE.md", "docs"];
const prohibited = [
  /\bcertified\b/i,
  /\bexclusive\b/i,
  /\bguarantees?\s+compliance\b/i,
  /\bblocks?\s+every\b/i,
  /\bdetects?\s+every\b/i,
  /\beliminates?\s+shadow\s+AI\b/i,
  /\btrial\s+(duration|mode)\b/i,
  /\bcoverage\s+count\b/i,
  /\bNHI\b/i,
  /\bnon-human identity\b/i,
  /\bcredential governance\b/i,
  /\bautonomous tool-call\b/i,
  /\bemergency containment\b/i,
  /\brate card\b/i,
  /\bpricing\b/i,
  /\bKosmoy\b/i,
  /\bfully white-?label(?:ed|led)?\b/i,
  /\bSeaVic-owned intellectual property\b/i,
  /\bguaranteed product integration\b/i
];

const allowedFiles = new Set([
  path.normalize("CONTENT_GOVERNANCE.md"),
  path.normalize("src/data/siteConfig.ts")
]);

function walk(target) {
  if (!fs.existsSync(target)) return [];
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  return fs.readdirSync(target).flatMap((entry) => walk(path.join(target, entry)));
}

const failures = [];

for (const root of roots) {
  for (const file of walk(root)) {
    const normalized = path.normalize(file);
    if (allowedFiles.has(normalized)) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of prohibited) {
      if (pattern.test(text)) failures.push(`${file}: ${pattern}`);
    }
  }
}

if (failures.length) {
  console.error("Claims scan failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Claims scan passed.");
