import fs from "node:fs";
import path from "node:path";

const dist = "dist";

if (!fs.existsSync(dist)) {
  console.log("No dist directory yet; skipping built-link check.");
  process.exit(0);
}

function walk(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  return fs.readdirSync(target).flatMap((entry) => walk(path.join(target, entry)));
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
const failures = [];
const basePath = "/seavicAI";

function routeExists(href) {
  if (href.startsWith(basePath)) {
    href = href.slice(basePath.length) || "/";
  }

  if (href === "/") return fs.existsSync(path.join(dist, "index.html"));
  const clean = href.replace(/^\//, "").replace(/\/$/, "");
  return fs.existsSync(path.join(dist, clean, "index.html")) || fs.existsSync(path.join(dist, clean));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of links) {
    if (href.startsWith("/") && !routeExists(href)) failures.push(`${file}: ${href}`);
  }
}

if (failures.length) {
  console.error("Broken internal links:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Internal link check passed.");
