import { getLenis } from '../core/scroll-setup.js';

export function initNavigation() {
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY || 0;
  let isHidden = false;

  function setHeaderVisibility(hide) {
    if (!header) return;
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


  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
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

