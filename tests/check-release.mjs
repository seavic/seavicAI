import fs from "node:fs";
import path from "node:path";

const dist = "dist";
const failures = [];

function readHtml(route) {
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.replace(/^\//, "").replace(/\/$/, ""), "index.html");
  if (!fs.existsSync(file)) {
    failures.push(`Missing built route: ${route}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

function count(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

if (!fs.existsSync(dist)) {
  console.log("No dist directory yet; skipping release check.");
  process.exit(0);
}

const home = readHtml("/");
const how = readHtml("/how-we-work/");
const security = readHtml("/ai-security-governance/");
const management = readHtml("/ai-management-control/");
const transformation = readHtml("/ai-enablement-transformation/");
const about = readHtml("/about/");
const aboutSource = fs.readFileSync(path.join("src", "pages", "about.astro"), "utf8");
const howSource = fs.readFileSync(path.join("src", "pages", "how-we-work.astro"), "utf8");
const contentSource = fs.readFileSync(path.join("src", "data", "content.ts"), "utf8");
const siteConfigSource = fs.readFileSync(path.join("src", "data", "siteConfig.ts"), "utf8");
const heroSource = fs.readFileSync(path.join("src", "components", "Hero.astro"), "utf8");
const bookingLinkSource = fs.readFileSync(path.join("src", "components", "BookingLink.astro"), "utf8");
const diagramSource = fs.readFileSync(path.join("src", "components", "ConceptDiagram.astro"), "utf8");
const globalStyles = fs.readFileSync(path.join("src", "styles", "global.css"), "utf8");

for (const [route, html] of [
  ["/", home],
  ["/how-we-work/", how],
  ["/ai-security-governance/", security],
  ["/ai-management-control/", management],
  ["/ai-enablement-transformation/", transformation],
  ["/about/", about],
  ["/contact/", readHtml("/contact/")]
]) {
  if (!html.includes('content="noindex,nofollow"')) failures.push(`${route}: missing staging noindex,nofollow`);
  if (!html.includes('name="seavic-build-id"')) failures.push(`${route}: missing build identifier`);
}

if (home.indexOf("Does one of these situations sound familiar?") < home.indexOf("A service provider wants")) {
  failures.push("Homepage contextual Discovery Call block must render after all five trigger cards.");
}

if (fs.existsSync(path.join(dist, "concepts"))) failures.push("Concept routes were built into dist.");
if (aboutSource.includes("Keep public claims tied to approved evidence.")) failures.push("About must not include the internal claim-control sentence.");
if (!aboutSource.includes("Make recommendations leaders can evidence, own and put into practice.")) failures.push("About missing approved client-facing evidence sentence.");
if (!contentSource.includes("Managing Partner, Cybersecurity, Governance & Client Delivery")) failures.push("About missing Victor Gan's approved title.");
if (!contentSource.includes("AI Control Diagnostic") || !contentSource.includes("Managed AI Governance")) failures.push("How We Work missing the authoritative five-stage pathway.");
if (!howSource.includes("Principles that govern every engagement")) failures.push("How We Work missing the principles transition.");
if (!howSource.includes("Technology in service of the client")) failures.push("How We Work missing the approved technology principle.");
if (heroSource.includes("Conceptual advisory diagram")) failures.push("Hero must not render a generic conceptual-diagram caption.");
if (!heroSource.includes("Discover AI use, assign ownership, test controls")) failures.push("Hero missing the approved AI Security and Governance visual story.");
if (!diagramSource.includes("Share the operating issue") || !diagramSource.includes("Agree a useful")) failures.push("Contact missing the complete discovery-call visual story.");
if (!globalStyles.includes(".concept__mobile-summary { display: none; }") || !globalStyles.includes(".hero {")) failures.push("Critical hero and diagram styles must remain available from the global stylesheet.");
if (!siteConfigSource.includes('contactEmail: "info@seavicai.com"')) failures.push("Public contact email must be info@seavicai.com.");
if (!siteConfigSource.includes('contactAlias: "contact@seavicai.com"')) failures.push("Contact alias must be retained in configuration.");
if (!siteConfigSource.includes('bookingUrl: "https://calendly.com/lui-seavicai/30min"')) failures.push("Approved Calendly URL is missing.");
if (!siteConfigSource.includes("enableBookingLink: true")) failures.push("Calendly booking link must be enabled.");
if (!bookingLinkSource.includes('target={bookingEnabled ? "_blank" : undefined}') || !bookingLinkSource.includes('rel={bookingEnabled ? "noopener noreferrer" : undefined}')) failures.push("Calendly links must open safely in a new tab.");
if (bookingLinkSource.includes("Calendly.init") || bookingLinkSource.includes("calendly-inline-widget")) failures.push("Calendly embeds are not approved.");
for (const [route, html] of [["/", home], ["/ai-security-governance/", security], ["/ai-management-control/", management], ["/ai-enablement-transformation/", transformation], ["/about/", about], ["/how-we-work/", how], ["/contact/", readHtml("/contact/")]]) {
  if (!html.includes('href="https://calendly.com/lui-seavicai/30min"')) failures.push(`${route}: missing approved Calendly CTA.`);
  if (!html.includes('target="_blank"')) failures.push(`${route}: Calendly CTA must open in a new tab.`);
}
if (count(home, /Enterprise &amp; Business Leadership|Enterprise & Business Leadership/g) !== 1) failures.push("Homepage missing buyer group: Enterprise & Business Leadership.");
if (count(home, /Technology &amp; AI Leadership|Technology & AI Leadership/g) !== 1) failures.push("Homepage missing buyer group: Technology & AI Leadership.");
if (count(home, /Security, Risk &amp; Legal Leadership|Security, Risk & Legal Leadership/g) !== 1) failures.push("Homepage missing buyer group: Security, Risk & Legal Leadership.");
if (count(home, /Operations, Finance &amp; Transformation Leadership|Operations, Finance & Transformation Leadership/g) !== 1) failures.push("Homepage missing buyer group: Operations, Finance & Transformation Leadership.");
if (count(home, /Systems Integrators, MSPs &amp; MSSPs|Systems Integrators, MSPs & MSSPs/g) !== 1) failures.push("Homepage missing buyer group: Systems Integrators, MSPs & MSSPs.");
if (count(home, /AI is scaling across teams/g) !== 1) failures.push("Homepage should include the five locked trigger events.");
if (count(home, /Leadership cannot get a reliable view/g) !== 1) failures.push("Homepage should include the five locked trigger events.");
if (count(home, /A major AI rollout/g) !== 1) failures.push("Homepage should include the five locked trigger events.");
if (count(home, /The board, a regulator/g) !== 1) failures.push("Homepage should include the five locked trigger events.");
if (count(home, /A service provider wants/g) !== 1) failures.push("Homepage should include the five locked trigger events.");
const globalQuestions = [
  "What happens on a SeaVic Discovery Call?",
  "Do we need an AI governance program or a specific technology stack before working with SeaVic?",
  "Will SeaVic need access to sensitive systems or data?",
  "Can an SI, MSP or MSSP resell SeaVic services or solutions to its clients?"
];
const securityQuestions = [
  "We already have an AI policy. What would SeaVic add?",
  "Does SeaVic certify that our AI environment is compliant?",
  "Do you only look at security risk?"
];
const managementQuestions = [
  "Is an AI Management &amp; Control Plane another software platform?",
  "How does this work if we use several AI models, cloud platforms and vendors?",
  "What changes when AI agents start taking actions?"
];
const transformationQuestions = [
  "Do we need to choose an AI platform or model before working with SeaVic?",
  "We already have an AI pilot that works. Why would we need transformation work?",
  "How do you decide where people should stay in the process?"
];

for (const question of globalQuestions) {
  if (!how.includes(question)) failures.push(`How We Work missing FAQ: ${question}`);
  if (home.includes(question)) failures.push(`Homepage must not include FAQ: ${question}`);
}
for (const question of securityQuestions) {
  if (!security.includes(question)) failures.push(`AI Security and Governance missing FAQ: ${question}`);
}
for (const question of managementQuestions) {
  if (!management.includes(question)) failures.push(`AI Management and Control missing FAQ: ${question}`);
}
for (const question of transformationQuestions) {
  if (!transformation.includes(question)) failures.push(`AI Enablement and Transformation missing FAQ: ${question}`);
}

if (failures.length) {
  console.error("Release check failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Release check passed.");
