# ArinkoLab Portal (Astro SSG) — Copilot Instructions

## Read-first (required)
Before proposing changes or writing code, read and follow (source of truth):
- `docs/SPEC.md`
- `docs/RULES.md`
- `docs/PLAN.md`
- `docs/ACCEPTANCE.md`
- If present: `docs/DECISIONS.md`, `docs/TEMPLATE.md`

## Non‑negotiable constraints
- `arinkolab.com` (apex) must serve **HTTP 200 with substantive Japanese text**. Do NOT implement a full-site redirect.
- Do not publish drafts: no "Coming Soon", "準備中", placeholders, empty pages, or broken links.
- Required pages must exist and be linked correctly (see `docs/SPEC.md`): `/`, `/tools/`, `/tools/*/`, `/tools/sql-formatter/`, `/blog/`, `/faq/`, `/privacy/`, `/terms/`, `/about/`, `/contact/`.
- `/tools/sql-formatter/` must include: what it does, before/after SQL sample, and cautions (no secrets, no correctness guarantee), plus link to `https://sqlformatter.arinkolab.com/`.
- Contact uses Google Form (fixed): `https://forms.gle/6nRrqn4BniyQsPAF9`.

## Implementation conventions (this repo)
- Astro SSG for Cloudflare Pages. Keep dependencies minimal (no React, no new integrations unless explicitly approved).
- Common layout/components:
  - `src/layouts/BaseLayout.astro`
  - `src/components/Header.astro` and `src/components/Footer.astro`
- Keep internal links consistent (prefer root-relative like `href="/tools/"`).

## Dev workflow (must be mentioned before claiming completion)
- Local dev: `npm run dev`
- Build check: `npm run build`
- Preview: `npm run preview`
- Do not claim "done" or "deploy-ready" unless the above checks are explicitly run and their results reported.

## Scope control
- Only edit files the user specifies (or propose a clearly listed file set first).
- Prefer small, reviewable diffs.
