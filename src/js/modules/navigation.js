import { getLenis } from '../core/scroll-setup.js';

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const burgerBtn = document.getElementById('btn-nav-burger');
  const navMenu = document.getElementById('main-nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');

  let lastScrollY = window.scrollY || 0;
  let isHidden = false;

  function setHeaderVisibility(hide) {
    if (!header) return;
    if (burgerBtn && burgerBtn.classList.contains('is-active')) return;

    if (hide && !isHidden) {
      header.classList.add('header--hidden');
      isHidden = true;
    } else if (!hide && isHidden) {
      header.classList.remove('header--hidden');
      isHidden = false;
    }
  }

  function handleScroll(direction, currentY) {
    if (!header) return;
    if (burgerBtn && burgerBtn.classList.contains('is-active')) return;

    if (currentY <= 60) {
      setHeaderVisibility(false);
      lastScrollY = currentY;
      return;
    }

    if (direction === 1 && currentY > 100) {
      setHeaderVisibility(true);
    } else if (direction === -1) {
      setHeaderVisibility(false);
    }
    lastScrollY = currentY;
  }

  const lenis = getLenis();
  if (lenis) {
    lenis.on('scroll', (e) => {
      const dir = typeof e.direction !== 'undefined' ? e.direction : (e.scroll > lastScrollY ? 1 : -1);
      handleScroll(dir, e.scroll);
    });
  }

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY || 0;
    const diff = currentY - lastScrollY;
    if (Math.abs(diff) > 4) {
      const dir = diff > 0 ? 1 : -1;
      handleScroll(dir, currentY);
    }
  }, { passive: true });

  function openMobileMenu() {
    if (!burgerBtn || !navMenu) return;
    burgerBtn.classList.add('is-active');
    burgerBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    if (navBackdrop) navBackdrop.classList.add('is-open');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    if (!burgerBtn || !navMenu) return;
    burgerBtn.classList.remove('is-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    if (navBackdrop) navBackdrop.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = burgerBtn.classList.contains('is-active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });

  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        closeMobileMenu();
        const lenisInst = getLenis();
        if (lenisInst) {
          lenisInst.scrollTo(targetEl, { offset: -60, duration: 1.2 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = '#' + section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      if (link.getAttribute('href') === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });

  initPlayModal();
}

function initPlayModal() {
  const trigger = document.getElementById('btn-play-trigger');
  const modal = document.getElementById('play-video-modal');
  const backdrop = document.getElementById('play-modal-backdrop');
  const closeBtn = document.getElementById('btn-close-play-modal');
  const iframe = document.getElementById('play-modal-iframe');

  if (!trigger || !modal || !iframe) return;

  const videoSrc = iframe.getAttribute('data-src');

  function openModal() {
    iframe.src = videoSrc;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  trigger.addEventListener('click', openModal);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}
