import { initSmoothScroll } from './core/scroll-setup.js';
import { SITE_CONFIG } from './config/site-config.js';
import { initPreloader } from './modules/preloader.js';
import { initNavigation } from './modules/navigation.js';
import { initScrollAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll(SITE_CONFIG.scroll);
  initNavigation();

  initPreloader(() => {
    initScrollAnimations();
  });
});
