/**
 * nav.js
 * ------
 * Mobile navigation toggle (with Escape key and focus trapping)
 * Hero carousel (with keyboard support, aria-live, and reduced-motion)
 *
 * ES5-compatible — no arrow functions, no let/const.
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ================================================================
   *  MOBILE NAVIGATION
   * ================================================================ */

  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.querySelector('.nav-menu');

  if (toggle && menu) {
    initMobileNav(toggle, menu);
  }

  /* ================================================================
   *  HERO CAROUSEL
   * ================================================================ */

  var track = document.querySelector('.carousel-track');

  if (track) {
    initCarousel(track);
  }

  /* ================================================================
   *  IMPACT COUNTERS (Home Stats)
   * ================================================================ */

  initImpactCounters();

  /* ----------------------------------------------------------------
   *  Mobile Navigation — implementation
   * ---------------------------------------------------------------- */

  function initMobileNav(toggle, menu) {

    /** Open or close the mobile menu. */
    function setMenuOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      if (open) {
        menu.classList.add('is-open');
      } else {
        menu.classList.remove('is-open');
      }
    }

    /** Return whether the menu is currently open. */
    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    /**
     * Build an ordered list of all focusable elements that should be
     * reachable while the mobile menu is open:
     *   1. The toggle button itself
     *   2. Every link inside .nav-menu
     *   3. The donate button inside .header-actions
     *
     * The list is rebuilt every call so it stays current with the DOM.
     */
    function getFocusableElements() {
      var items = [];

      /* Toggle button is always first */
      items.push(toggle);

      /* All links inside the nav menu */
      var links = menu.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        items.push(links[i]);
      }

      /* Donate button in header-actions */
      var headerActions = document.querySelector('.header-actions');
      if (headerActions) {
        var donateBtn = headerActions.querySelector('.btn--donate');
        if (donateBtn) {
          items.push(donateBtn);
        }
      }

      return items;
    }

    /* Toggle on click */
    toggle.addEventListener('click', function () {
      setMenuOpen(!isOpen());
    });

    /* Close menu when a nav link is clicked (useful on mobile) */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });

    /* Escape key closes the menu and returns focus to the toggle */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    /**
     * Focus trapping — keep Tab / Shift+Tab within the mobile nav
     * when the menu is open.
     */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !isOpen()) return;

      var focusable = getFocusableElements();
      if (focusable.length === 0) return;

      var first = focusable[0];
      var last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        /* Shift+Tab: wrap from first element back to last */
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        /* Tab: wrap from last element forward to first */
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ----------------------------------------------------------------
   *  Hero Carousel — implementation
   * ---------------------------------------------------------------- */

  function initCarousel(track) {
    var slides  = track.querySelectorAll('.carousel-slide');
    var dots    = document.querySelectorAll('.carousel-dot');
    var prevBtn = document.querySelector('.carousel-btn--prev');
    var nextBtn = document.querySelector('.carousel-btn--next');
    var carousel = document.querySelector('.hero-carousel');

    var current  = 0;
    var total    = slides.length;
    var interval = null;
    var DELAY    = 6000;

    /* --- Reduced-motion detection -------------------------------- */

    var motionQuery    = window.matchMedia('(prefers-reduced-motion: reduce)');
    var reducedMotion  = motionQuery.matches;

    /** Apply or remove reduced-motion overrides. */
    function applyMotionPreference(reduced) {
      reducedMotion = reduced;

      /* Disable / re-enable CSS transition on the track */
      track.style.transition = reduced ? 'none' : '';

      if (reduced) {
        stopAuto();
      } else {
        startAuto();
      }
    }

    /* Listen for changes (e.g. user toggles OS setting at runtime) */
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', function (e) {
        applyMotionPreference(e.matches);
      });
    } else if (motionQuery.addListener) {
      /* Fallback for older browsers */
      motionQuery.addListener(function (e) {
        applyMotionPreference(e.matches);
      });
    }

    /* --- Aria-live announcer ------------------------------------- */

    var liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';

    /* Visually hide the region (screen-reader only).
       The site already has an .sr-only class, but we set styles
       inline to guarantee they are applied even if the class is
       missing from the stylesheet. */
    liveRegion.style.position   = 'absolute';
    liveRegion.style.width      = '1px';
    liveRegion.style.height     = '1px';
    liveRegion.style.padding    = '0';
    liveRegion.style.margin     = '-1px';
    liveRegion.style.overflow   = 'hidden';
    liveRegion.style.clip       = 'rect(0,0,0,0)';
    liveRegion.style.whiteSpace = 'nowrap';
    liveRegion.style.border     = '0';

    if (carousel) {
      carousel.appendChild(liveRegion);
    } else {
      document.body.appendChild(liveRegion);
    }

    /* --- Slide navigation ---------------------------------------- */

    function goTo(index) {
      current = ((index % total) + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';

      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });

      /* Announce the new slide to screen readers */
      liveRegion.textContent = 'Slide ' + (current + 1) + ' of ' + total;
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    /* --- Auto-advance -------------------------------------------- */

    function startAuto() {
      if (reducedMotion) return;       /* Never auto-advance when reduced-motion is active */
      stopAuto();
      interval = setInterval(next, DELAY);
    }

    function stopAuto() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    /* --- Button / dot click handlers ----------------------------- */

    if (prevBtn) {
      prevBtn.addEventListener('click', function () { prev(); startAuto(); });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () { next(); startAuto(); });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); startAuto(); });
    });

    /* --- Pause on hover / focus ---------------------------------- */

    if (carousel) {
      carousel.addEventListener('mouseenter', stopAuto);
      carousel.addEventListener('mouseleave', startAuto);
      carousel.addEventListener('focusin',    stopAuto);
      carousel.addEventListener('focusout',   startAuto);
    }

    /* --- Keyboard arrow-key support ------------------------------ */

    if (carousel) {
      carousel.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prev();
          startAuto();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          next();
          startAuto();
        }
      });
    }

    /* --- Start --------------------------------------------------- */

    applyMotionPreference(motionQuery.matches);
  }

  /* ----------------------------------------------------------------
   *  Impact Counters — implementation
   * ---------------------------------------------------------------- */

  function initImpactCounters() {
    var counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    var reducedMotion = false;
    if (window.matchMedia) {
      reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function setFinalValue(el) {
      var target = parseFloat(el.getAttribute('data-target')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = String(Math.round(target)) + suffix;
      el.setAttribute('data-animated', 'true');
    }

    function animateValue(el) {
      if (el.getAttribute('data-animated') === 'true') return;

      var target = parseFloat(el.getAttribute('data-target')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 2800;
      var start = null;

      function frame(timestamp) {
        if (!start) start = timestamp;
        var progress = (timestamp - start) / duration;
        if (progress > 1) progress = 1;

        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(target * eased);
        el.textContent = String(value) + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(frame);
        } else {
          el.setAttribute('data-animated', 'true');
        }
      }

      window.requestAnimationFrame(frame);
    }

    if (reducedMotion) {
      for (var r = 0; r < counters.length; r++) {
        setFinalValue(counters[r]);
      }
      return;
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            animateValue(entries[i].target);
            obs.unobserve(entries[i].target);
          }
        }
      }, { threshold: 0.35 });

      for (var j = 0; j < counters.length; j++) {
        observer.observe(counters[j]);
      }
      return;
    }

    for (var k = 0; k < counters.length; k++) {
      animateValue(counters[k]);
    }
  }
});
