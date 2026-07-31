import { absoluteUrl } from "../lib/urls";

const publicRoutes = [
  "/",
  "/ai-governance-risk-compliance-advisory/",
  "/ai-security-governance/",
  "/ai-management-control/",
  "/managed-ai-governance-services/",
  "/ai-enablement-transformation/",
  "/how-we-work/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/"
];

export async function GET() {
  const urls = publicRoutes
    .map((route) => `<url><loc>${absoluteUrl(route)}</loc></url>`)
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
