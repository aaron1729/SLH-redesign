/* Mobile navigation toggle */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
  });

  /* Close menu when a nav link is clicked (mobile) */
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    });
  });
});

/* Hero carousel */
document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.carousel-track');
  if (!track) return;

  var slides = track.querySelectorAll('.carousel-slide');
  var dots = document.querySelectorAll('.carousel-dot');
  var prevBtn = document.querySelector('.carousel-btn--prev');
  var nextBtn = document.querySelector('.carousel-btn--next');
  var current = 0;
  var total = slides.length;
  var interval = null;
  var DELAY = 6000;

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === current);
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    interval = setInterval(next, DELAY);
  }

  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAuto(); });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goTo(i); startAuto(); });
  });

  /* Pause on hover / focus */
  var carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    carousel.addEventListener('focusin', stopAuto);
    carousel.addEventListener('focusout', startAuto);
  }

  startAuto();
});
