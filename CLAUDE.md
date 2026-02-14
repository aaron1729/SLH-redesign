# SLH Redesign — Claude Code Context

## Project
Custom WordPress theme redesign for [Saint Louise House](https://saintlouisehouse.org/), an Austin TX nonprofit serving homeless mothers and children.

## Build Order
1. **Static prototype** in `/prototype/` (source of truth for design) — IN PROGRESS
2. WordPress theme in `/wp-theme/saint-louise-house/`
3. `ADMIN.md` with install/editing instructions

## Architecture

### Prototype (`/prototype/`)
- `index.html` — homepage with rotating image carousel
- `about.html`, `programs.html`, `apply.html`, `get-involved.html`, `contact.html`, `blog.html`, `post.html`
- `assets/css/main.css` — single CSS file, mobile-first, CSS custom properties
- `assets/js/nav.js` — mobile nav toggle + carousel (only JS on the site)
- `assets/images/` — logo files, hero carousel images

### Design System
- **Colors** (from existing brand): primary blue `#1570b5`, accent orange `#ea8a18`, secondary purple `#81256f`, charcoal `#44364e`
- **Font**: Inter (Google Fonts), system font fallback
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- All tokens live in `:root` CSS custom properties

### Key Brand Assets
- **Logo**: `assets/images/slh-logo.png` — house + family icon, "SAINT LOUISE HOUSE", tagline "Build. Believe. Become."
- **Footer logo**: `assets/images/footer-logo-light-sl.png` (white version)
- **Carousel images**: `hero-1-apartment.jpg`, `hero-2-doormat.jpg`, `hero-3-services.jpeg`, `hero-4-ranch.jpg`

## Constraints
- Mobile-first responsive, no page builders
- Minimal JS — only nav toggle and carousel
- No Bootstrap, no jQuery, no heavy dependencies
- WCAG accessibility: semantic HTML, skip link, aria labels, focus-visible, keyboard nav
- Staff-safe editing: content editable, layouts not breakable
- WordPress theme will use ACF for homepage fields + Site Settings options page

## External Links
- Donate: `https://connect.clickandpledge.com/w/Form/47065ab4-c4e2-4e96-a601-d138e477e760`
- Events: `https://www.slhgamechanger.org/`
- Newsletter: `https://mailchi.mp/saintlouisehouse/saint-louise-house-newsletter`

## Header Structure (all pages)
- Logo (real `slh-logo.png`), nav menu, "Donate Now" button, mobile hamburger
- Homepage has action bar below carousel: Donate, In-Kind Donations, Volunteer, Apply for Housing, Events

## Style Guidance
- Keep existing brand identity (colors, logo, tone) — just make it look modern and clean
- Generous whitespace, consistent spacing, clear hierarchy
- Cards, stats, steps, testimonials, FAQ accordions (`<details>`/`<summary>`)
- Alternating section backgrounds (white / light gray / dark)

## Iteration Status
Currently doing page-by-page review with the user, starting from `index.html`.

## Work Summary (Codex) — February 14, 2026

### What Was Implemented
- Reviewed and implemented the full Gemini audit content requirements across the static prototype.
- Replaced placeholder and outdated messaging with current mission language, hidden homeless framing, two-generational model language, and current impact metrics.
- Added or updated key site pages and sections to match current SLH information architecture:
  - `index.html` (homepage)
  - `about.html` and About subpages:
    - `about-who-we-are.html`
    - `about-mission-strategy.html`
    - `about-who-we-serve.html`
    - `about-leadership.html`
    - `about-community-partners.html`
  - `programs.html` (services + eligibility + resources)
  - `give.html` (one-time, Good Neighbor, Legacy, sustainment circles)
  - `get-involved.html` (events, volunteer, in-kind donations)
  - `annual-reports.html`
  - `join-our-team.html`
  - `blog.html`
  - `contact.html`
  - `apply.html` (kept as an eligibility/application alias page)

### Content Alignment Work
- Updated headline stats and outcomes with verified program figures used in current SLH messaging.
- Ensured Empowerment Partners terminology and curriculum references are present (`Your Money, Your Goals`, `Nurturing Parenting`).
- Added and/or expanded:
  - Giving circles (`Safe Keeper`, `Hope Builder`, `Change Maker`)
  - Good Neighbor monthly giving entry point
  - Program eligibility/application documents and intake details
  - Helpful resources and community referral entries
  - Community partners and foundation partner content
  - Annual report archive links
  - Team/careers page content
  - Blog listing content with live post links

### Styling and Readability Passes
- Performed a second mobile-first readability pass in `assets/css/main.css`:
  - Increased small-text legibility and line-height
  - Improved section spacing rhythm on small screens
  - Refined footer/card/text density for mobile readability
  - Kept branding and layout system intact

### Browser QA Performed
- Ran multiple automated browser visual QA passes (desktop + mobile) using Playwright:
  - Navigation checks
  - Console/runtime error checks
  - Failed request checks
  - Horizontal overflow checks
  - Broken image checks
  - Full-page screenshots (including mobile menu-open captures)
- Final live-parity pass report:
  - `screenshots-temp/qa-visual-2026-02-14-pass3-live-parity/report.md`
  - Result: 30 checks, 0 nav errors, 0 console/runtime errors, 0 request failures, 0 overflow issues, 0 broken images.

### Important Notes
- Work focused on content parity and structure in the static prototype (`/prototype`) as the design/source-of-truth stage.
- Existing unrelated local repo changes were not intentionally modified/reverted by this pass.
