# SLH-redesign

## aaron to-do

- [ ] match the UI to a large extent, but fix in all ways imaginable (especially at various viewport widths)
- [ ] export this all to a wordpress template
- [ ] create a wordpress account, with a host that supports command-line or github integrations, to test out the template.
  - theirs is apparently godaddy's managed wordpress hosting, using "children charity" theme by "CMS masters"
  - this apparently does not have a github integration
- [ ] make 1-2 sample forms based on theirs, through airtable and/or gforms
- [ ] make a _one-page_ instruction guide for SLH staff
  - note the possibility of adding a blog



## instructions for claude code

You are Claude Code acting as a senior front-end + WordPress theme engineer.

Goal
Build a sleek, mobile-first redesign of https://saintlouisehouse.org/ as a custom WordPress theme. Avoid page builders. Keep JavaScript minimal. Optimize for clarity, accessibility, and ease of editing by non-technical staff.

High-level constraints
- Mobile-first responsive design.
- Little to no JavaScript (only for nav toggle and tiny enhancements).
- Fast load (optimize images, minimize render-blocking assets).
- WCAG-minded accessibility: semantic HTML, good contrast, focus states, keyboard nav, skip link, alt text.
- Editing must be “safe”: staff can edit copy/images/stats/links, but cannot break layouts.
- Keep plugin count low. Prefer zero plugins unless needed for structured fields.

Deliverables
1) Static prototype (source of truth for design)
- /prototype/
  - index.html
  - about.html
  - programs.html
  - apply.html
  - get-involved.html (volunteer + donate info)
  - contact.html
  - blog.html (listing)
  - post.html (single post mock)
  - assets/ (css, images, icons)
  - style.css (or css/main.css)
2) WordPress theme
- /wp-theme/saint-louise-house/
  - style.css
  - functions.php
  - screenshot.png
  - templates:
    - header.php, footer.php
    - front-page.php
    - page.php
    - single.php
    - archive.php (blog list)
    - 404.php
  - template-parts/ for reusable sections
  - assets/ (css, js, images)
3) Setup notes
- A short ADMIN.md describing:
  - how to install the theme
  - what content is editable and where
  - any required plugins (ideally none; if needed, only ACF)
  - recommended WP settings and menus

Information architecture
Create a clearer navigation with 5–7 top-level items:
- Home
- About
- Programs
- Apply (prominent)
- Get Involved (volunteer, donate, partner)
- Blog/News
- Contact
Also create a prominent “Donate” button in the header and footer.

Design system
- Typography: one modern sans-serif stack, consistent heading scale.
- Spacing: consistent vertical rhythm; generous whitespace.
- Components:
  - Primary/secondary buttons
  - Card component
  - Stat blocks
  - Testimonial/story block
  - Simple “FAQ” accordion (optional; if JS-free, use <details>/<summary>)
- Use CSS variables for colors and spacing.
- Avoid heavy dependencies. No Bootstrap. No jQuery.

Homepage sections (recommended)
- Hero: mission + one primary CTA (Donate) + secondary CTA (Apply / Volunteer)
- Quick impact stats (3–6)
- Programs overview (3 cards)
- How it works (3 steps)
- Featured story/testimonial
- Partner/Volunteer callout
- Newsletter signup (Mailchimp embed-ready)
- Footer with full contact info and key links

WordPress integration plan (content mapping)
- Use WP menus for nav.
- Use Pages for About/Programs/Apply/etc.
- Use Posts for Blog/News.
- For the homepage, use one of:
  A) Hardcoded structure + editable fields via ACF (preferred if allowed)
  B) Hardcoded structure pulling from specific pages/posts (if no plugins)

If using ACF (only if necessary)
- Create a “Site Settings” options page:
  - Donate URL
  - Apply URL
  - Volunteer URL
  - Address/phone/email
  - Social links
- Create “Homepage” fields:
  - Hero headline/subhead
  - Hero image
  - Stats repeater (label + value)
  - Programs cards (title, excerpt, link, image)
  - Featured story/testimonial (quote, name, optional image)

Theme engineering requirements
- Enqueue CSS/JS properly via functions.php.
- Provide a tiny JS file only for mobile nav (and optional smooth scrolling); no frameworks.
- Add a skip-to-content link.
- Ensure keyboard focus styles are visible.
- Use responsive images where possible; rely on WP image sizes.
- Use wp_kses / escaping best practices where relevant.
- Provide a clean, minimal codebase.

Step-by-step build order
1) Build static prototype pages (mobile-first).
2) Iterate until the design feels final.
3) Convert static prototype to WP templates:
   - header/footer first
   - front-page.php
   - page.php
   - single.php + archive.php
4) Wire up menus, featured images, and content areas.
5) Add optional ACF fields (only if needed).
6) Test:
   - mobile sizes (iPhone SE width up through desktop)
   - keyboard nav
   - Lighthouse basic performance
7) Write ADMIN.md and provide theme install instructions.

Output expectations from you (Claude Code)
- Create the complete folder structure above.
- Write clean, commented code.
- Avoid unnecessary abstraction.
- When uncertain, choose the simplest approach that meets the requirements.
- Provide a short checklist at the end describing what to verify in a WP install.
