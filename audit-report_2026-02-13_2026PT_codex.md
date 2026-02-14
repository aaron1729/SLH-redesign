# Audit Report: SLH Redesign Content Parity (Full Page-by-Page)

- Project: `SLH-redesign`
- Audit timestamp: February 14, 2026 (PT)
- Live baseline reviewed: `https://saintlouisehouse.org/` (fresh route-by-route review)
- Local target reviewed: `prototype/*.html` + `prototype/assets/images/*`
- Requirement being audited: keep **the same text and image content (and no more)**, while allowing stylistic/mobile modernization.

## 1) Bottom Line

Parity is still incomplete across nearly every route.

The redesign is significantly different from live in three systemic ways:

1. Route coverage is incomplete/misaligned.
2. Many pages are paraphrased/condensed or merged instead of preserving live text structure.
3. Media parity is not close: most interior prototype pages render only the logo, while live pages are image-heavy.

## 2) Audit Method (From Scratch)

1. Pulled live page list from sitemap and page search:
   - `https://saintlouisehouse.org/`
   - `/about-us/` + subpages
   - `/services/`
   - `/give/`
   - `/get-involved/`
   - `/volunteer-opportunities/`
   - `/sustain/`
   - `/sustain2/`
   - `/about-us/annual-reports/`
   - `/about-us/join-our-team/`
   - `/blog/`
   - `/terms-and-conditions/`
2. Extracted live page section headings/content blocks and compared them to each local HTML page.
3. Enumerated local headings/section labels/image usage across all prototype pages.
4. Added visual evidence where available from saved screenshots.

## 3) Route Parity Map

| Live route | Local equivalent | Status |
|---|---|---|
| `/` | `prototype/index.html` | Partial |
| `/about-us/` | `prototype/about.html` | Partial |
| `/about-us/who-we-are/` | `prototype/about-who-we-are.html` | Partial |
| `/about-us/mission-strategy/` | `prototype/about-mission-strategy.html` | Partial |
| `/about-us/we-serve/` | `prototype/about-who-we-serve.html` | Partial |
| `/about-us/leadership/` | `prototype/about-leadership.html` | Partial |
| `/about-us/community-partners/` | `prototype/about-community-partners.html` | Partial |
| `/services/` | `prototype/programs.html` | Partial |
| `/give/` | `prototype/give.html` | Partial |
| `/get-involved/` | `prototype/get-involved.html` | Partial |
| `/volunteer-opportunities/` | none | Missing |
| `/sustain/` | none | Missing |
| `/sustain2/` | `prototype/legacy-circle.html` | Partial |
| `/about-us/annual-reports/` | `prototype/annual-reports.html` | Partial |
| `/about-us/join-our-team/` | `prototype/join-our-team.html` | Partial |
| `/blog/` | `prototype/blog.html` | Partial |
| `/terms-and-conditions/` | `prototype/terms-and-conditions.html` | Partial |

## 4) Detailed Findings by Page

## A) Home: `/` vs `prototype/index.html`

### Live content blocks observed
- Hero carousel with 4 rotating real-world images and overlaid mission statements.
- Five action buttons immediately below hero: Donate, In-kind Donations, Volunteer, Apply for Housing & Services, Events.
- Mission block with blue `LEARN MORE` button.
- Community Impact block (dark blue band with icon-based stats).
- Newsletter subscribe strip.
- Footer with Navigation/Fundraising/Socials + contact.
- Embedded media/video area appears in live home content.

### Prototype blocks present
- Hero carousel + action buttons exist (`prototype/index.html:52`).
- Mission block exists (`prototype/index.html:118`).
- Impact shown as white-background stat grid (`prototype/index.html:132`) with an extra fifth metric (`90%+`).
- Added “Our Program” 3-card explainer (`prototype/index.html:145`) and new CTA band (`prototype/index.html:178`).
- No newsletter strip equivalent.
- Footer structure is different from live.

### Mismatches
1. Section sequence diverges after action buttons (live: impact band -> newsletter -> footer; prototype: mission -> white stats -> program cards -> CTA).
2. Impact presentation differs materially (layout, iconography, label text treatment).
3. Prototype includes additional non-live sections and copy.
4. Live media/embed content is not mirrored.

### Visual evidence
- Side-by-side mismatch: `screenshots-temp/Screenshot 2026-02-13 at 8.32.04 PM.png`.
- Live hero references: `screenshots-temp/Screenshot 2026-02-11 at 1.07.18 PM.png`, `screenshots-temp/Screenshot 2026-02-11 at 1.07.44 PM.png`, `screenshots-temp/Screenshot 2026-02-11 at 1.07.49 PM.png`, `screenshots-temp/Screenshot 2026-02-11 at 1.07.56 PM.png`.

### Remaining work
1. Rebuild post-action section sequence to match live exactly.
2. Restore live impact band style/content ordering.
3. Add newsletter band and live footer content structure.
4. Remove extra non-live section copy unless it exists verbatim in live.

## B) About Landing: `/about-us/` vs `prototype/about.html`

### Prototype currently
- Link-card hub with 7 cards including Annual Reports and Join Our Team (`prototype/about.html:32`, `prototype/about.html:37`, `prototype/about.html:38`).
- Added “Saint Louise House at a glance” overview section (`prototype/about.html:46`).

### Mismatches
1. Hub composition and card content are simplified compared to live page-builder layout.
2. Local page is largely text-only; live about ecosystem is image-led.
3. Requires verification against exact live page text blocks and ordering.

### Remaining work
1. Align about landing modules, ordering, and exact copy with live.
2. Add the live image/card treatments used for about navigation.

## C) Who We Are: `/about-us/who-we-are/` vs `prototype/about-who-we-are.html`

### Live content blocks observed
- Detailed mission/organization narrative.
- “Our Values” section with named values.
- Additional supporting blocks (including leadership-related content and imagery).

### Prototype currently
- Page header + short summary text only (`prototype/about-who-we-are.html:12`).
- No full values section as a dedicated structured block.
- No page-specific imagery beyond logo.

### Mismatches
1. Major section loss (values and supporting content depth).
2. Copy is condensed/paraphrased.
3. Media parity missing.

### Remaining work
1. Restore complete section set and exact live text.
2. Add page-specific image assets used on live.

## D) Mission & Strategy: `/about-us/mission-strategy/` vs `prototype/about-mission-strategy.html`

### Live content blocks observed
- Mission/strategy framing with history context (“How it all began”).
- Two-generational and wraparound messaging in expanded structure.
- Additional section detail and media.

### Prototype currently
- Header + short narrative paragraph/blockquote sequence only (`prototype/about-mission-strategy.html:12`).

### Mismatches
1. Missing key subsections and historical context structure.
2. Text is compressed and reordered.
3. Missing live media.

### Remaining work
1. Match full live section structure and exact text.
2. Add missing imagery and any embedded media in this route.

## E) Who We Serve: `/about-us/we-serve/` vs `prototype/about-who-we-serve.html`

### Live content blocks observed
- “Program” framing and audience definition.
- “Where needed most” section.
- “Helpful Resources” with external referral links.

### Prototype currently
- Short page-level summary only (`prototype/about-who-we-serve.html:12`).
- No equivalent detailed resources module.

### Mismatches
1. Missing full section depth and resources structure.
2. Copy is shortened and generalized.

### Remaining work
1. Restore section-by-section live content and referral links.
2. Mirror live heading hierarchy and supporting media.

## F) Leadership: `/about-us/leadership/` vs `prototype/about-leadership.html`

### Live content blocks observed
- Leadership + board sections with numerous person entries and photos.
- Role-specific officers and larger board composition.

### Prototype currently
- One executive card + board list; simplified presentation (`prototype/about-leadership.html:12`).
- Uses placeholder initials avatar treatment instead of matching live imagery.

### Mismatches
1. Incomplete/condensed roster content.
2. No equivalent photo treatment and profile depth.

### Remaining work
1. Rebuild leadership page to exact live roster and role ordering.
2. Add all corresponding headshots/images used on live.

## G) Community Partners: `/about-us/community-partners/` vs `prototype/about-community-partners.html`

### Live content blocks observed
- Multiple partner categories and extensive partner lists (agency/foundation ecosystem).

### Prototype currently
- Two-card list (Agency Partners + Foundation Partners) (`prototype/about-community-partners.html:12`).

### Mismatches
1. Category taxonomy and list depth do not fully mirror live structure.
2. Likely omissions and ordering differences.

### Remaining work
1. Copy over exact live partner taxonomy and complete name lists.
2. Match any live logos/visual modules if used.

## H) Services: `/services/` vs `prototype/programs.html`

### Live content blocks observed
- “Learn about our wraparound services” framing.
- “What is Saint Louise House?” with embedded video/media.
- “How it works” section.
- Program eligibility with application PDFs + intake phone.
- Helpful resources/referral links.

### Prototype currently
- Program overview section (`prototype/programs.html:59`).
- Eligibility + PDF links + intake number (`prototype/programs.html:75`, `prototype/programs.html:83`).
- Resource cards (`prototype/programs.html:93`).
- Added custom CTA to local contact page (`prototype/programs.html:108`, `prototype/programs.html:112`).

### Mismatches
1. Missing live media/video section and “How it works” treatment.
2. Text structure/order diverges from live.
3. Added non-live CTA path to `contact.html`.

### Remaining work
1. Add missing live service sections/media.
2. Remove non-live CTA copy/routes.
3. Replace with exact live text ordering.

## I) Give: `/give/` vs `prototype/give.html`

### Live content blocks observed
- Donation methods (online, by mail/check instructions, recurring pathways).
- Good Neighbor / sustain-oriented options.
- In-kind donation details and contact flows.

### Prototype currently
- Added stats section not matching live give page layout (`prototype/give.html:31`).
- Four donation option cards (`prototype/give.html:44`).
- In-kind wish list with shortened item set (`prototype/give.html:55`).

### Mismatches
1. Non-live section introduced (“Measured outcomes for families”) on give route.
2. Donation method wording/ordering differs.
3. In-kind details are abbreviated vs live content depth.

### Remaining work
1. Remove added non-live give-page stats block unless present verbatim in live.
2. Match exact donation option wording and ordering.
3. Expand in-kind instructions to live-equivalent detail.

## J) Get Involved: `/get-involved/` vs `prototype/get-involved.html`

### Live content blocks observed
- High-level “How to Help” hub with pointers to volunteer opportunities, sustain, and giving/event paths.

### Prototype currently
- Hub cards + embedded sustain circles + embedded volunteer role details + in-kind detail + CTA (`prototype/get-involved.html:32`, `prototype/get-involved.html:44`, `prototype/get-involved.html:55`, `prototype/get-involved.html:67`).

### Mismatches
1. Local page merges multiple live routes into one large page.
2. Content placement differs from live IA.
3. Added/shifted copy violates strict “same content, no more” mapping.

### Remaining work
1. Keep get-involved as hub-level page matching live.
2. Move detailed volunteer and sustain content to their own dedicated routes.

## K) Volunteer Opportunities: `/volunteer-opportunities/` vs none

### Live content blocks observed
- Dedicated volunteer page with expanded role descriptions and engagement details.

### Prototype currently
- No dedicated page.
- Only partial role snippets embedded inside `prototype/get-involved.html:55`.

### Mismatches
1. Missing route.
2. Missing full volunteer content.

### Remaining work
1. Create `volunteer-opportunities.html` equivalent route.
2. Copy full live text/media blocks exactly.

## L) Sustain: `/sustain/` vs none

### Live content blocks observed
- Dedicated sustain recurring-giving program page.

### Prototype currently
- No dedicated sustain page.

### Mismatches
1. Missing route and content entirely.

### Remaining work
1. Create sustain route and port exact live content.

## M) Sustain2 / Legacy Circle: `/sustain2/` vs `prototype/legacy-circle.html`

### Live content blocks observed
- Dedicated tier page with tier cards and additional explanatory framing/media.

### Prototype currently
- 3 tier cards + short intro + donate CTA (`prototype/legacy-circle.html:26`, `prototype/legacy-circle.html:32`).

### Mismatches
1. Simplified version of live page.
2. Missing supplementary live content and media blocks.

### Remaining work
1. Match full live `sustain2` text and asset set exactly.
2. Ensure tier descriptions/adjacent content are verbatim and complete.

## N) Annual Reports: `/about-us/annual-reports/` vs `prototype/annual-reports.html`

### Live content blocks observed
- Archive list including years down to 2013.
- Includes Adobe Reader/help note.

### Prototype currently
- Archive list currently 2024–2015 (`prototype/annual-reports.html:30`).

### Mismatches
1. Missing 2014 and 2013 links.
2. Missing Adobe Reader/help note.

### Remaining work
1. Add the missing report years and supporting note.
2. Verify link URLs and ordering exactly match live.

## O) Join Our Team: `/about-us/join-our-team/` vs `prototype/join-our-team.html`

### Live content blocks observed
- Recruitment intro + structured call-to-action to job listings.

### Prototype currently
- Short paragraph and single Indeed link (`prototype/join-our-team.html:25`).

### Mismatches
1. Copy is shortened and may not be verbatim.
2. Section framing/order not fully matched.

### Remaining work
1. Replace with exact live copy and structure.
2. Mirror any live supporting imagery.

## P) Blog: `/blog/` vs `prototype/blog.html`

### Live content blocks observed
- Ongoing archive with current posts (includes 2026 entries).
- Featured images and metadata per post.

### Prototype currently
- Hardcoded four entries from 2025 (`prototype/blog.html:31`).
- Uses date-badge placeholder blocks instead of real featured images.

### Mismatches
1. Outdated and incomplete post list.
2. Missing live archive behavior/content volume.
3. Featured image parity missing.

### Remaining work
1. Decide static snapshot policy vs dynamic feed.
2. If static: use exact current live set with real featured images and metadata.
3. If dynamic: wire to WP posts in theme phase.

## Q) Terms: `/terms-and-conditions/` vs `prototype/terms-and-conditions.html`

### Live content blocks observed
- Legal text sections for website use, intellectual property, links, liability, and contact.

### Prototype currently
- Similar high-level section headers (`prototype/terms-and-conditions.html:31`).
- Body copy appears rewritten/simplified.

### Mismatches
1. Legal copy is not verified verbatim.
2. Exact wording parity required for this route.

### Remaining work
1. Replace all terms text with exact live language.
2. Validate heading order and contact language.

## 5) Local-Only Routes / “No More Content” Violations

1. `prototype/contact.html` is local-only (no equivalent live route found in sitemap/page inventory).
2. `prototype/apply.html` is local-only as a standalone route; live application content is presented under services/info pages.
3. Several pages include custom copy not present verbatim on live.

## 6) Media Parity Snapshot

### Prototype media actually used in page markup
- Only 10 unique images are rendered across all pages:
  - `slh-logo.png`
  - `hero-1-apartment.jpg`
  - `hero-2-doormat.jpg`
  - `hero-3-services.jpeg`
  - `hero-4-ranch.jpg`
  - `icon-donate.png`
  - `icon-inkind.png`
  - `icon-volunteer.png`
  - `icon-apply.png`
  - `icon-events.png`

### Live media reality
- Home uses multiple hero images plus embedded media blocks.
- About and subpages use extensive page-specific imagery.
- Leadership/blog routes rely heavily on person/post images.
- Volunteer/sustain routes include additional visuals.

Conclusion: image parity is currently far from complete.

## 7) Prioritized Remaining Work (Execution Order)

## Priority 0: Route completeness
1. Add missing routes: volunteer opportunities + sustain.
2. Decide disposition of local-only routes (`contact.html`, `apply.html`) to satisfy “no extra content”.

## Priority 1: Home parity
1. Match section sequence below action buttons exactly.
2. Restore live impact band/newsletter/footer treatment and copy.

## Priority 2: About ecosystem parity
1. Port full text/media for who-we-are, mission-strategy, we-serve, leadership, community-partners.
2. Align about landing structure with live modules.

## Priority 3: Program/give/get-involved split
1. Unmerge mixed content currently combined in `get-involved.html`.
2. Match each route to its live counterpart with exact text blocks.

## Priority 4: Blog/legal/archive correctness
1. Update blog to current live scope (including 2026 posts).
2. Replace terms copy with exact legal language.
3. Complete annual reports list and support note.

## 8) Definition of Done for This Requirement

Parity is complete only when:

1. Every live route has an equivalent local route/content location.
2. No local-only content remains unless it is an exact live alias.
3. Page text is verbatim-equivalent to live (headers/body/buttons/legal copy).
4. Live images/media used in-page are represented equivalently.
5. Section ordering and route boundaries match live (no route-merging of content).
