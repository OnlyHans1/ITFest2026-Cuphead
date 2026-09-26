export function initScrollAnimations() {
  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
    return;
  }

  const gsap = window.gsap;

  gsap.from('.hero-title-img-wrap', {
    scale: 0.88,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.hero-badge, .hero-tagline, .hero-actions', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.4
  });

  const cards = document.querySelectorAll('.character-card, .gameplay-card, .story-card, .trailer-tv-cabinet');
  cards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out'
    });
  });

  gsap.to('.hero-devil-silhouette', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 120,
    scale: 1.15,
    opacity: 0.35
  });
}
