let lenisInstance = null;

export function initSmoothScroll(options = {}) {
  if (lenisInstance) {
    return lenisInstance;
  }

  if (typeof window.Lenis === 'undefined') {
    return null;
  }

  lenisInstance = new window.Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
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
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
