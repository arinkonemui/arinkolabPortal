# Copilot Agent Prompt (ArinkoLab Portal UI refresh)

You are a coding agent working inside this repository.

## 0) Read docs first (mandatory)
Read and follow, in this order:
- docs/SPEC.md
- docs/RULES.md
- docs/PLAN.md
- docs/ACCEPTANCE.md
- docs/DECISIONS.md
- docs/TEMPLATE.md

Then:
1) Summarize **RULES** in 5-10 bullets (must be concrete).
2) Propose a minimal change plan (files to touch).
3) Implement.

## 1) Goal
Improve the portal UI so it matches the "A案" direction:
- 3 pillars on top: Business / General / Blog (cards)
- Color tokens from `gemini提示案.html`
- Cards animate on first view: slide slightly left→right and fade in, with stagger
- Respect `prefers-reduced-motion: reduce` (disable animations)
- No new UI frameworks or extra dependencies

Keep all pages **200 + real JP text**. No "coming soon". No broken links.

## 2) Required pages must remain 200
See docs/SPEC.md and docs/ACCEPTANCE.md for the must-have routes.

## 3) Implementation constraints
- Astro SSG only; output `dist/`
- Pure CSS (no Tailwind, no React)
- Keep Header/Footer components.
- Update `public/sitemap.xml` so it includes required routes; do not include removed/non-required routes.

## 4) Cloudflare / AdSense constraints (do not break)
- `https://arinkolab.com/` must NOT redirect-only.
- `https://arinkolab.com/ads.txt` must keep returning ads.txt body (do not change routing rules here).

## 5) Deliverables
- A single PR-sized set of changes
- `npm run dev` works; `npm run build` works
- Update docs if you changed any assumptions (only if needed)
