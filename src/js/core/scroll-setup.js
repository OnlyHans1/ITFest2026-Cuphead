let lenisInstance = null;

export function initSmoothScroll(options = {}) {
  if (lenisInstance) {
    return lenisInstance;
  }

  if (typeof window.Lenis === 'undefined') {
    return null;
  }

  lenisInstance = new window.Lenis({
    lerp: 0.08,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
    infinite: false,
    autoResize: true,
    ...options
  });

  if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    window.gsap.registerPlugin(window.ScrollTrigger);
    lenisInstance.on('scroll', window.ScrollTrigger.update);
  }

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
