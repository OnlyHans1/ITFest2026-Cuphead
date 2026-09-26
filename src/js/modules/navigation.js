import { getLenis } from '../core/scroll-setup.js';

export function initNavigation() {
  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(targetEl, { offset: -60, duration: 1.2 });
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
}
