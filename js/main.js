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
if (menuToggle && menu) {
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
}

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
const year = document.querySelector('#year');
if (year) year.textContent = Math.max(2026, new Date().getFullYear());


// Un único diálogo reutilizable por página; solo las capturas marcadas lo activan.
const lightboxTriggers = document.querySelectorAll('img[data-lightbox]');
if (lightboxTriggers.length && typeof HTMLDialogElement !== 'undefined') {
  const lightbox = document.createElement('dialog');
  lightbox.className = 'image-lightbox';
  lightbox.id = 'image-lightbox';
  lightbox.setAttribute('aria-label', 'Imagen ampliada del proyecto');

  const expandedImage = document.createElement('img');
  expandedImage.className = 'lightbox-image';
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'lightbox-close';
  closeButton.textContent = '×';
  closeButton.setAttribute('aria-label', 'Cerrar imagen ampliada');
  lightbox.append(expandedImage, closeButton);
  document.body.append(lightbox);
  let activeTrigger;

  function openImage(trigger) {
    activeTrigger = trigger;
    expandedImage.src = trigger.currentSrc || trigger.src;
    expandedImage.alt = trigger.alt;
    lightbox.showModal();
    document.documentElement.classList.add('lightbox-open');
    closeButton.focus({ preventScroll: true });
  }

  lightboxTriggers.forEach((trigger) => {
    // Añadidos al inicializar: sin JS la captura conserva su semántica de imagen.
    trigger.tabIndex = 0;
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', lightbox.id);
    trigger.setAttribute('aria-label', `Ampliar imagen: ${trigger.alt}`);
    trigger.addEventListener('click', () => openImage(trigger));
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (!event.repeat) openImage(trigger);
      }
    });
  });
  closeButton.addEventListener('click', () => lightbox.close());
  // El diálogo ocupa el viewport: su espacio vacío funciona como overlay.
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  // Escape y el aislamiento del foco los gestiona el diálogo nativo.
  lightbox.addEventListener('close', () => {
    document.documentElement.classList.remove('lightbox-open');
    activeTrigger?.focus({ preventScroll: true });
    expandedImage.removeAttribute('src');
  });
}
