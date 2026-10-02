export function initScrollAnimations() {
  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.hero-title-img-wrap', {
      scale: 0.82,
      y: -25,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.5)'
    })
    .from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.7
    }, '-=0.8')
    .from('.hero-tagline', {
      y: 25,
      opacity: 0,
      duration: 0.8
    }, '-=0.6')
    .from('.hero-actions .btn-primary, .hero-actions .btn-secondary', {
      y: 25,
      scale: 0.9,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'back.out(1.6)'
    }, '-=0.5')
    .from('.hero-cuphead-sprite-wrap', {
      scale: 0.4,
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'back.out(1.8)'
    }, '-=0.5');

  gsap.to('.hero-devil-silhouette', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 160,
    scale: 1.25,
    opacity: 0.38
  });

  gsap.to('.hero-content', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 60,
    opacity: 0.75
  });

  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach((header) => {
    gsap.from(header.children, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });
  });

  gsap.from('.trailer-tv-cabinet', {
    scrollTrigger: {
      trigger: '#trailer',
      start: 'top 78%',
      toggleActions: 'play none none none'
    },
    scale: 0.92,
    y: 55,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out'
  });

  gsap.from('.tv-knob', {
    scrollTrigger: {
      trigger: '.trailer-tv-cabinet',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    rotation: -90,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'back.out(2)'
  });

  gsap.from('.trailer-caption-card', {
    scrollTrigger: {
      trigger: '.trailer-caption-card',
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    y: 35,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#story',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  storyTl
    .from('.story-card', {
      scale: 0.94,
      y: 45,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    })
    .from('.story-text > *', {
      x: -25,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.story-image', {
      scale: 0.6,
      rotation: -8,
      opacity: 0,
      duration: 0.9,
      ease: 'back.out(1.8)'
    }, '-=0.6');

  gsap.to('.story-image', {
    scrollTrigger: {
      trigger: '#story',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2
    },
    y: 25,
    rotation: 4
  });

  const characterCards = document.querySelectorAll('.character-card');
  characterCards.forEach((card, index) => {
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    cardTl
      .from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.08,
        ease: 'power3.out'
      })
      .from(card.querySelector('.character-avatar'), {
        scale: 0.55,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.5')
      .from(card.querySelectorAll('.character-role, .character-name, .character-desc'), {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
      }, '-=0.5');
  });

  const bossSection = document.getElementById('bosses');
  if (bossSection) {
    const bTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#bosses',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    bTl
      .from('.boss-dossier-card', {
        scale: 0.92,
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out'
      })
      .from('#boss-stage-stamp', {
        scale: 2.8,
        rotation: -40,
        opacity: 0,
        duration: 0.45,
        ease: 'power4.in'
      }, '-=0.35')
      .from('.boss-portrait-frame', {
        scale: 0.65,
        rotation: -8,
        opacity: 0,
        duration: 0.65,
        ease: 'back.out(1.8)'
      }, '-=0.3')
      .from('.boss-details-pane > *', {
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out'
      }, '-=0.35')
      .from('.boss-reel-item', {
        scale: 0.7,
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: 'back.out(1.6)'
      }, '-=0.3');
  }

  const gameplayCards = document.querySelectorAll('.gameplay-card');
  gameplayCards.forEach((card, index) => {
    const icon = card.querySelector('.gameplay-canvas, .gameplay-icon');
    const gpTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    gpTl.from(card, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: index * 0.08,
      ease: 'power2.out'
    });

    if (icon) {
      gpTl.from(icon, {
        scale: 0.75,
        opacity: 0,
        duration: 0.7,
        ease: 'back.out(1.6)'
      }, '-=0.4');
    }
  });

  const dlcTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#dlc',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  dlcTl
    .from('.dlc-banner-card', {
      scale: 0.92,
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.dlc-overlay-content > *', {
      x: -30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out'
    }, '-=0.6');

  gsap.from('.platform-card', {
    scrollTrigger: {
      trigger: '.platform-grid',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    scale: 0.88,
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  });

  gsap.from('.site-footer .container > *', {
    scrollTrigger: {
      trigger: '.site-footer',
      start: 'top 92%',
      toggleActions: 'play none none none'
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });

  ScrollTrigger.refresh();
}
