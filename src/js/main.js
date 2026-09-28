import { initSmoothScroll, stopScroll, startScroll, scrollToTop, refreshScroll } from './core/scroll-setup.js';
import { SITE_CONFIG } from './config/site-config.js';
import { loadComponents, loadPreloader } from './modules/component-loader.js';
import { initPreloader } from './modules/preloader.js';
import { initNavigation } from './modules/navigation.js';
import { initScrollAnimations } from './modules/animations.js';
import { initLandingSequence } from './modules/sequence.js';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
scrollToTop();

document.addEventListener('DOMContentLoaded', async () => {
  await loadPreloader();

  const componentsPromise = loadComponents().then(() => {
    initSmoothScroll(SITE_CONFIG.scroll);
    stopScroll();
    initNavigation();
    initLandingSequence();
  });

  initPreloader(async () => {
    await componentsPromise;
    startScroll();
    refreshScroll();
    initScrollAnimations();
  });
});

window.addEventListener('load', () => {
  refreshScroll();
});

if (document.fonts) {
  document.fonts.ready.then(() => {
    refreshScroll();
  });
}
