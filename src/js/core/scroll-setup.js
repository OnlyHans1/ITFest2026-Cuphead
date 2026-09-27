let lenisInstance = null;

export function initSmoothScroll(options = {}) {
  if (lenisInstance) {
    return lenisInstance;
  }

  if (typeof window.Lenis === 'undefined') {
    return null;
  }

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  lenisInstance = new window.Lenis({
    lerp: 0.1,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
    infinite: false,
    autoResize: true,
    syncTouch: false,
    ...options
  });

  if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    window.gsap.registerPlugin(window.ScrollTrigger);
    lenisInstance.on('scroll', window.ScrollTrigger.update);

    window.gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    window.gsap.ticker.lagSmoothing(0);
  } else {
    function fallbackRaf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(fallbackRaf);
    }
    requestAnimationFrame(fallbackRaf);
  }

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function stopScroll() {
  if (lenisInstance) {
    lenisInstance.stop();
  }
}

export function startScroll() {
  if (lenisInstance) {
    lenisInstance.start();
  }
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
}

export function refreshScroll() {
  if (lenisInstance) {
    lenisInstance.resize();
  }
  if (typeof window.ScrollTrigger !== 'undefined') {
    window.ScrollTrigger.refresh();
  }
}
