# SeavicAI.com Website

Static launch website for SeaVic Consulting, built from the confirmed Website Build and Launch Plan v1.5 and Codex Website Build Specification v1.0.

## Current Scope

- Astro + TypeScript static site for GitHub Pages.
- Public pages: Home, AI Security and Governance, AI Management and Control, AI Enablement and Transformation, How We Work, About, Contact, Privacy Notice, Website Terms, 404.
- Insights route exists only as a noindex gated placeholder while DEC-013 remains open.
- Contact form, booking, analytics, partner attribution, and future platform modules are feature-flagged off by default.

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run lint
```

## Launch Controls

Production deployment should run only from protected `main` through GitHub Pages. Before public launch, Lui and Victor must confirm final page copy, legal pages, contact routing, custom-domain DNS/HTTPS, accessibility/responsive QA, and founder go/no-go approval.

Rollback: in GitHub Pages, redeploy the prior successful workflow run or revert the release commit through a reviewed pull request, then verify the custom domain and critical pages.
