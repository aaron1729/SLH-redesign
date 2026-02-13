Site Audit: Saint Louise House Prototype
                                                                                                                   
  Critical Issues                                                                                                  

  1. Logo inconsistent across pages
  index.html uses the real logo image (slh-logo.png), but all 7 inner pages use an inline SVG placeholder with just
   "SL" text. This breaks brand identity on every page except the homepage.

  2. No forms actually submit
  - apply.html — onsubmit="return false;"
  - get-involved.html — action="#"
  - contact.html — action="#" + novalidate
  - Newsletter forms — point to MailChimp URL but have no feedback/loading state

  These are fine for a prototype, but worth noting for the WP build.

  3. Footer legal info inconsistent
  Only get-involved.html includes the DBA legal name and EIN in the footer. Either all pages should have it or
  none.

  ---
  Accessibility

  4. Carousel lacks keyboard arrow-key support
  The carousel only responds to click events on the prev/next buttons. Users navigating by keyboard have to tab to
  each button — left/right arrow keys within the carousel would be expected.

  5. No prefers-reduced-motion respect
  The carousel auto-advances every 6 seconds with no check for prefers-reduced-motion: reduce. Users who've
  requested reduced motion in their OS settings would still get the animation. Fix in both CSS (transitions) and JS
   (disable auto-play).

  6. Carousel doesn't announce slide changes
  No aria-live region to inform screen reader users when the slide changes. The current slide content is invisible
  to assistive tech after transitions.

  7. Heading hierarchy skip on About page
  about.html jumps from H2 ("Our Leadership") to H4 ("Officers", "Board Members"), skipping H3. Screen readers use
  headings as an outline — this creates a broken document structure.

  8. Blockquote attribution inconsistent
  - index.html and post.html — blockquotes have proper <footer> attribution
  - about.html — blockquote has no attribution element

  9. Form fields missing aria-required
  apply.html uses visual asterisks for required fields but doesn't consistently use aria-required="true".
  contact.html does this correctly — should match everywhere.

  ---
  Design & Visual

  10. Action bar icons only on mobile
  The .action-bar__label is display: none at mobile widths, showing only emoji icons (heart, box, hands, house,
  calendar). These symbols alone aren't clear enough — "🏠" could mean Home, Housing, or Apply. Consider keeping
  short labels visible or using a different mobile layout.

  11. Social media icons are plain text characters
  Footer social links use text characters (f, ig, 𝕏, ▶️) instead of SVG icons. This looks inconsistent with the
  rest of the site which uses proper SVGs for the nav toggle and carousel arrows. Real SVG social icons would look
  much more polished.

  12. Blog post images are all placeholders
  blog.html shows "Featured Image" / "Image" text in colored boxes. Even stock photos would make the blog listing
  feel real during review.

  13. Map is a dashed-border placeholder
  contact.html has a "Map placeholder – embed Google Maps here" div. For the prototype review, even a static
  screenshot of the map would help convey the final design.

  14. Card image placeholders use emoji
  Program cards on programs.html use 🏠, 📚, 💛 as placeholder images. These render differently across OS/browsers
  and won't match the final design feel.

  ---
  UX & Information Architecture

  15. No breadcrumbs on interior pages
  Interior pages have a page header with title but no breadcrumb trail. For a multi-level site with programs, blog
  posts, and application pages, breadcrumbs help orientation — especially on mobile.

  16. No visible "back to top" mechanism
  Several pages are very long (especially get-involved.html). There's scroll-behavior: smooth in CSS but no
  back-to-top link or button for long-scroll pages.

  17. Mobile nav doesn't trap focus
  When the mobile nav opens, focus isn't trapped inside the menu. A user tabbing through will go past the menu into
   the page content behind it. The menu should trap focus and close on Escape key.

  18. No Escape key handler for mobile nav
  Related to above — pressing Escape with the mobile menu open does nothing. Standard pattern is to close the menu
  and return focus to the toggle button.

  19. Newsletter has no success/error feedback
  The newsletter signup has no visible feedback mechanism. After clicking "Subscribe", nothing happens in the
  prototype. Even a brief "Thanks for subscribing!" pattern would demonstrate the intended UX.

  ---
  Code Quality

  20. Two separate DOMContentLoaded listeners in nav.js
  The nav toggle and carousel each register their own DOMContentLoaded handler. These could be one callback —
  minor, but cleaner.

  21. Timeline should be semantic <ol>
  about.html timeline uses <div class="timeline-item"> instead of <ol><li>. An ordered list better communicates the
   chronological nature to assistive tech.

  22. Steps should be semantic <ol>
  Multiple pages use <div class="step"> with CSS counters. Using <ol><li> would be more semantic and would degrade
  gracefully without CSS.

  23. Values use role="list" instead of <ul>
  Several pages use <div role="list"> with <div role="listitem">. Native <ul><li> is simpler, more robust, and
  better supported.

  24. No print stylesheet
  For a nonprofit site, visitors (especially donors and board members) sometimes print pages. A basic @media print
  block hiding nav, footer, and carousel controls would be thoughtful.

  25. No <meta name="description"> on any page
  None of the pages have meta descriptions. For SEO (even in the WP build), having these in the prototype
  establishes content early.

  26. Missing rel="noopener" on some external links
  Most external links correctly use target="_blank" rel="noopener noreferrer" but worth a sweep to ensure 100%
  coverage.

  ---
  Summary by Priority

  ┌───────────────┬───────┬────────────────────────────────────────────────────────────────────────────┐
  │   Priority    │ Count │                                  Examples                                  │
  ├───────────────┼───────┼────────────────────────────────────────────────────────────────────────────┤
  │ Must fix      │ 3     │ Logo inconsistency, footer legal info, heading hierarchy                   │
  ├───────────────┼───────┼────────────────────────────────────────────────────────────────────────────┤
  │ Should fix    │ 8     │ Reduced motion, carousel a11y, focus trapping, semantic lists, social SVGs │
  ├───────────────┼───────┼────────────────────────────────────────────────────────────────────────────┤
  │ Nice to have  │ 7     │ Breadcrumbs, back-to-top, print styles, meta descriptions                  │
  ├───────────────┼───────┼────────────────────────────────────────────────────────────────────────────┤
  │ WP build only │ 4     │ Form submission, map embed, real blog images, newsletter feedback          │
  └───────────────┴───────┴────────────────────────────────────────────────────────────────────────────┘

  The foundation is strong — good design system, solid mobile-first CSS, clean markup. The highest-impact
  improvements are fixing the logo on inner pages, adding prefers-reduced-motion support, and tightening up the
  carousel and mobile nav accessibility.