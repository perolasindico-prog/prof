// Lumen Studio - main interactivity
(function () {
  'use strict';

  // Theme toggle (persisted)
  const THEME_KEY = 'lumen-theme';
  const root = document.documentElement;
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) root.setAttribute('data-theme', stored);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  });

  // Mobile menu
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-menu-toggle]');
    if (!btn) return;
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('open');
  });

  // Reveal-on-scroll
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;

  document.querySelectorAll('.reveal').forEach((el) => {
    if (io) io.observe(el); else el.classList.add('in');
  });

  // Contact form (demo handler — does not send anywhere)
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const required = form.querySelectorAll('[required]');
      let ok = true;
      required.forEach((f) => { if (!f.value.trim()) { ok = false; f.style.borderColor = 'var(--danger)'; } });
      if (!ok) return;
      if (status) {
        status.style.display = 'block';
        status.textContent = 'Thank you! We received your message and will reply within 24 business hours.';
      }
      form.reset();
    });
    form.querySelectorAll('input, textarea').forEach((f) => {
      f.addEventListener('input', () => { f.style.borderColor = ''; });
    });
  }

  // Cookie banner
  const COOKIE_KEY = 'lumen-cookie-consent';
  const banner = document.querySelector('[data-cookie-banner]');
  if (banner && !localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => banner.classList.add('visible'), 800);
  }
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cookie-action]');
    if (!btn) return;
    const action = btn.getAttribute('data-cookie-action');
    localStorage.setItem(COOKIE_KEY, action);
    if (banner) banner.classList.remove('visible');
  });

  // Active nav link based on path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  // Footer year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
