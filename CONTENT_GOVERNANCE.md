# Content Governance

Public copy follows this approval path:

Draft -> Evidence review -> Founder approval -> Approved Messaging Library update -> Publication.

Homepage diagram update as of 2026-08-04:

- The "offerings" ConceptDiagram (bare Secure/Manage/Transform circles under the three offering cards) is removed from the homepage. It was found to be purely redundant with the three offering cards immediately above it, which already carry the full approved copy for each offering.
- The "journey" ConceptDiagram (Diagnose/Govern/Implement/Transform/Manage) is retained. Its SVG viewBox was corrected to remove ~60% dead vertical whitespace that was rendering as an apparent broken/empty section on staging.
- One bridging sentence was added under the journey diagram: "This method underpins the entry pathway below, from the AI Control Diagnostic through Managed AI Governance." This connects the five-word methodology to the Entry Pathway section that follows it, since the methodology previously appeared nowhere else on the site with any explanation. This is new copy, not sourced from the Approved Messaging Library — flagged for evidence review rather than treated as pre-approved.
- The "three offerings" and "method" locked-content categories referenced above (2026-07-31 entry) remain present in substance: offerings via the three cards, method via the corrected diagram and headline. Only the duplicate offerings visual was removed.
- Status: founder working decision (Lui Sieh), implemented on branch `codex/homepage-diagram-cleanup-1`. Not yet confirmed in a Victor review pass — carry into the next gate alongside the rest of the ACT-051 v16 staging baseline.

Current review state as of 2026-07-31:

- Temporary GitHub Pages review deployment is live at `https://staging.seavicai.com/`.
- ACT-051 staging baseline is implemented using Implementation Brief v11 and Build Specification v1.17.
- Public website architecture is the approved three-offering model: AI Security and Governance, AI Management and Control, and AI Enablement and Transformation.
- Homepage includes the locked buyer groups, trigger events, executive questions, three offerings, method, entry pathway, outcomes and leadership baseline.
- How We Work includes the four approved global FAQs.
- Each service page includes exactly three approved service FAQs.
- Concept routes are removed/decommissioned.
- Staging remains `noindex,nofollow`.
- Next gate: Victor review, requested revisions and founder approval before public launch or EasyWP/Namecheap port planning.

Hotfix state as of 2026-07-30:

- Staging source is restored to the approved three-offering architecture while DEC-025 remains open.
- Public platform wording remains gated until the relevant decision is approved.
- Partner-specific commercial, branding, deployment, performance, security certification and regulatory claims remain gated until supported by an approved partner and solution brief.

Do not publish:

- Service pricing, rate cards, or market-premium claims before approval.
- Named clients, testimonials, logos, or quantified results without permission and evidence.
- Compliance guarantees or claims that every risk, leak, or issue is detected or blocked.
- CinderLabs reseller, white-label, MSP/MSSP, implementation-partner, powered-by, trial-duration, trial-mode, or coverage-count claims unless approved in writing.
- Runtime agent, non-human identity, credential-governance, autonomous tool-call enforcement, or emergency-containment claims while DEC-018 remains open.
- Substantive Insights or comparative buyer-education content while DEC-013 remains open.
- Targeted Southeast Asia claims until ACT-020 is resolved or explicitly accepted.

Feature-flagged content must remain absent from rendered HTML, metadata, structured data, and image alt text while disabled.
