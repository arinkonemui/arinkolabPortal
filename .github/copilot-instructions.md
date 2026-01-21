# ArinkoLab Portal - AI Agent Instructions

## Project Overview
**ArinkoLab Portal** (`arinkolab.com`) is an Astro-based static site (SSG) serving as a homepage and portal for developer tools, development logs, and game notes. It runs on Cloudflare Pages with a strict MVP scope to pass AdSense re-review by demonstrating legitimate publisher content.

**Key constraint:** Must never be a full redirect—the apex domain returns 200 with substantial body content.

## Architecture & Structure

### Astro Setup
- **Build**: `npm run build` → outputs to `dist/`
- **Preview locally**: `npm run preview`
- **Dev server**: `npm run dev` (hot reload)
- **No integrations** yet—keep minimal and lightweight; design is enhanceable later

### Layout & Components Pattern
- **Layouts** (`src/layouts/BaseLayout.astro`): Single layout wraps all pages with:
  - HTML metadata, lang="ja", default description, title format `{title} | ArinkoLab`
  - Flexbox layout ensuring footer sticks to bottom
  - Global styles (reset, font, line-height) baked into the layout
- **Components** (`src/components/`):
  - `Header.astro`: Navigation (Tools → Blog → FAQ → Contact)
  - `Footer.astro`: Legal links (Privacy → Terms → About → Contact)
  - Minimal inline styles; all `<footer>` and `.footer-*` classes are scoped

### Page Structure (`src/pages/`)
All pages use trailing slashes (`/tools/`, `/blog/`, etc.). Follow this pattern:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Title" description="Optional meta description">
  <h1>Main Heading</h1>
  <!-- Substantial body text (not just links) -->
</BaseLayout>
```

### Content Hierarchy
- `/` (**Top**): Portal intro, "What you can do" list, highlight of SQL Formatter, blog teaser
- `/tools/` (**Tools Index**): Overview of tool categories
- `/tools/{business,general,gamer}/` (**Categories**): Lists tools by domain
- `/tools/sql-formatter/` (**Tool Feature Page**): Must include samples (before/after SQL), warnings ("no confidential data", "no correctness guarantee")
- `/blog/` (**Blog Portal Page**): Text + external link to `blog.arinkolab.com` (Hugo); explain blog scope (dev logs + game notes)
- `/faq/`, `/privacy/`, `/terms/`, `/about/`, `/contact/`: Legal/support pages with substantive body text

## Critical Rules

### Content & Completeness
1. **No empty/draft pages**: Never ship "Coming Soon", "準備中", "404", or link-only pages
2. **Every page needs body text**: Even tool category pages must explain purpose, not just list links
3. **SQL Formatter page must have**:
   - "できること" (capabilities)
   - Sample SQL (before/after formatting)
   - Warnings: confidentiality, no guarantee of correctness, legal disclaimer
4. **Header/Footer links must always work**: Privacy, Terms, About, Contact never 404

### URL & Routing
- **Trailing slashes required**: `/tools/`, not `/tools`
- **Internal links**: Use relative or root-relative paths (`href="/tools/"` or `href="../faq/"`)
- **No full-site redirects**: Limit redirects to specific paths if needed (e.g., `/go/sqlformatter` → external tool)

### Language & Tone
- **Primary language**: Japanese (lang="ja" in HTML)
- **No hyperbole**: Features, storage, supported formats must be factual
- **Concise**: Each page should be readable; hierarchy (H1 → H2 → H3) maintained

## Development Workflow

### Before Committing
1. **Local build check**:
   ```bash
   npm run build
   npm run preview
   ```
2. **Manual verification**: Visit `http://localhost:3000/` (or shown port) and test all Header/Footer links
3. **Check page completeness**: No blank sections, all content present

### Cloudflare Pages Deployment
- **Trigger**: Push to main branch (or manual deploy via Cloudflare dashboard)
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **After deployment**: Visit `https://arinkolab.com` and verify all pages/links work

### Files NOT to Edit Without Review
- `astro.config.mjs`: No new integrations without architect sign-off
- `docs/SPEC.md`, `docs/RULES.md`: Append decisions to `docs/DECISIONS.md`

## Common Patterns

### Adding a New Tool Page
1. Create `src/pages/tools/{tool-name}.astro`
2. Import `BaseLayout` with tool title & meta description
3. Include: overview, what it does, sample input/output (if applicable), warnings/disclaimers
4. Link from `/tools/` index and category page

### Updating Header/Footer
- Edit `src/components/Header.astro` or `src/components/Footer.astro`
- All links must point to existing pages (no future pages)
- Keep link text consistent across site

### Metadata & SEO
- Every page has `title` prop passed to `BaseLayout` (used in `<title>` tag)
- `description` prop auto-defaults; override for tool/category pages
- `public/robots.txt` and `public/sitemap.xml` already exist; update sitemap if new pages added

## Domains & External Links
- **Portal apex**: `https://arinkolab.com` (this project, Cloudflare Pages)
- **SQL Formatter tool**: `https://sqlformatter.arinkolab.com` (separate Cloudflare Pages)
- **Blog**: `https://blog.arinkolab.com` (Hugo on Cloudflare Pages)
- **Media**: `https://media.arinkolab.com` (Cloudflare R2)
- **Contact form**: Google Forms (embedded or linked, not built-in)

## Key Files Reference
- [astro.config.mjs](../astro.config.mjs) — Astro configuration
- [src/layouts/BaseLayout.astro](../src/layouts/BaseLayout.astro) — Master layout, global styles
- [src/components/Header.astro](../src/components/Header.astro) — Navigation component
- [src/components/Footer.astro](../src/components/Footer.astro) — Footer links
- [src/pages/index.astro](../src/pages/index.astro) — Homepage example
- [src/pages/tools/sql-formatter.astro](../src/pages/tools/sql-formatter.astro) — Tool feature page (study for pattern)
- [docs/SPEC.md](../docs/SPEC.md) — Full business/technical spec
- [docs/RULES.md](../docs/RULES.md) — Development rules (cross-reference this)

## Questions Before Acting
If unclear about scope, ask:
- Is this page a tool intro, a legal page, or a category index? (Affects body content style)
- Should this link to an external service or internal page?
- Does the new content violate "no drafts" rule?

---
**Last updated**: 2026-01-20  
**Status**: MVP phase—focus on solid, minimal, complete content over design embellishment.

## Design tokens (A案)
Centralize these CSS variables in one global stylesheet and reuse across pages/components:
- `--primary: #2563eb`
- `--pillar-business: #1e293b`
- `--pillar-general: #10b981`
- `--pillar-blog: #8b5cf6`
- `--bg: #f8fafc`
Animations must respect `prefers-reduced-motion: reduce` (disable motion).

