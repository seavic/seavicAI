# SeavicAI.com Website

Static launch website for SeaVic Consulting, built from ACT-051 using Implementation Brief v11 and Codex Website Build Specification v1.17 as the controlling build inputs.

## Current Scope

- Astro + TypeScript static site for GitHub Pages.
- Public pages: Home, AI Security and Governance, AI Management and Control, AI Enablement and Transformation, How We Work, About, Contact, Privacy Notice, Website Terms, 404.
- Insights route exists only as a noindex gated placeholder while DEC-013 remains open.
- Concept review routes have been removed/decommissioned.
- Contact form, booking, analytics, partner attribution, gated platform wording, and future platform modules are feature-flagged off by default.
- Staging pages render `noindex,nofollow`.

## Current Milestone

Milestone completed on 2026-07-31: ACT-051 staging baseline implemented for `https://staging.seavicai.com/`.

Current status: waiting for Victor to review, request revisions, and approve before public-domain launch or EasyWP/Namecheap port planning.

The current staging build includes the approved three-offering architecture, the locked Steps 1-4 content baseline, global FAQs on How We Work only, three approved FAQs on each service page, disabled analytics providers, Discovery Call CTA fallback routing, and decommissioned concept routes.

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run lint
```

## Launch Controls

Temporary review deployment runs from `main` through GitHub Pages. Before public launch, Lui and Victor must confirm final page copy, legal pages, contact routing, custom-domain DNS/HTTPS, accessibility/responsive QA, preferred template direction, and founder go/no-go approval.

Rollback: in GitHub Pages, redeploy the prior successful workflow run or revert the release commit through a reviewed pull request, then verify the custom domain and critical pages.
