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
