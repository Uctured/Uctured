/* ============================================================
   UCTURED — Main JavaScript
   ============================================================ */

/* ── Navbar ──────────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile');
  const mobileSubToggles = document.querySelectorAll('.navbar__mobile-sub-toggle');

  // Scroll effect — gestionado por initHeroNavbar()
  // Se deja vacío para evitar doble listener

  // Mobile toggle
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  // Mobile submenu
  mobileSubToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const submenu = btn.nextElementSibling;
      submenu?.classList.toggle('open');
      const icon = btn.querySelector('svg');
      if (icon) icon.style.transform = submenu?.classList.contains('open') ? 'rotate(180deg)' : '';
    });
  });

  // Close mobile on link click
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle?.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Set active menu item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar__menu > li > a').forEach(a => {
    if (a.getAttribute('href') === currentPath ||
        (currentPath.includes(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
      a.closest('li')?.classList.add('active');
    }
  });
})();

/* ── Scroll Reveal ───────────────────────────────────────── */
(function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── Animated Counters ───────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = prefix + value.toLocaleString('es-ES') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── FAQ Accordion ───────────────────────────────────────── */
(function initFaq() {
  document.querySelectorAll('.faq-item__header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Open clicked (unless was open)
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ── Testimonials Carousel ───────────────────────────────── */
(function initCarousel() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel__track');
    const cards = carousel.querySelectorAll('.carousel__item');
    const prev = carousel.querySelector('.carousel__prev');
    const next = carousel.querySelector('.carousel__next');
    const dotsContainer = carousel.querySelector('.carousel__dots');

    if (!track || !cards.length) return;

    let current = 0;
    const total = cards.length;

    // Build dots
    if (dotsContainer) {
      cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    const goTo = (idx) => {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer?.querySelectorAll('.carousel__dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    };

    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));

    // Auto-play
    let autoplay = setInterval(() => goTo(current + 1), 5000);
    carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goTo(current + 1), 5000);
    });

    // Touch/swipe
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const delta = startX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) goTo(delta > 0 ? current + 1 : current - 1);
    });
  });
})();

/* ── Contact Form Submission ─────────────────────────────── */
(function initForms() {
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '¡Mensaje enviado!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        form.reset();
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          btn.style.background = '';
        }, 3500);
      }, 1500);
    });
  });
})();

/* ── Smooth anchor scrolling ─────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Navbar scroll shadow ────────────────────────────────── */
(function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
