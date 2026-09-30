'use strict';

// Menú responsive: Bootstrap aporta el layout; este control no requiere su bundle JS.
const menuToggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#menu-principal');
const navLinks = [...document.querySelectorAll('.navbar .nav-link')];

function setMenu(open) {
  menu.classList.toggle('show', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}
menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});
navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 992px)').addEventListener('change', () => setMenu(false));

// Indica la sección activa sin desplazar ni cambiar el foco del teclado.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}

// Los enlaces TODO conservan #, pero informan que están pendientes sin saltar al inicio.
const notice = document.querySelector('.link-notice');
let noticeTimer;
document.querySelectorAll('a[data-pending]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    clearTimeout(noticeTimer);
    notice.textContent = 'Este enlace estará disponible próximamente.';
    noticeTimer = setTimeout(() => { notice.textContent = ''; }, 4000);
  });
});

// 2026 permanece como año de referencia; se actualiza en años posteriores.
document.querySelector('#year').textContent = Math.max(2026, new Date().getFullYear());
