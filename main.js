// Shared site JS
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky nav
  const topbar = document.getElementById('topbar');
  if (topbar) {
    window.addEventListener('scroll', () => {
      topbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
});
