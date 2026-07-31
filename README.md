# SeavicAI.com Website

Static launch website for SeaVic Consulting, built from the confirmed Website Build and Launch Plan v1.5 and Codex Website Build Specification v1.0.

## Current Scope

- Astro + TypeScript static site for GitHub Pages.
- Public pages: Home, AI Security and Governance, AI Management and Control, AI Enablement and Transformation, How We Work, About, Contact, Privacy Notice, Website Terms, 404.
- Insights route exists only as a noindex gated placeholder while DEC-013 remains open.
- Internal noindex concept review pages are available for Build A and Build B.
- Contact form, booking, analytics, partner attribution, and future platform modules are feature-flagged off by default.

## Current Milestone

Milestone completed on 2026-07-22: the temporary GitHub Pages review deployment is live. Current staging URL: `https://staging.seavicai.com/`.

Review links:
- Build A: `https://staging.seavicai.com/concepts/consulting-professional-services/`
- Build B: `https://staging.seavicai.com/concepts/enterprise-technology/`

Current status: waiting for Victor to review, request revisions, and approve the preferred direction before public-domain launch or EasyWP/Namecheap port planning.

Hotfix completed on 2026-07-30: staging source was restored to the approved three-offering architecture while DEC-025 remains open.

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
