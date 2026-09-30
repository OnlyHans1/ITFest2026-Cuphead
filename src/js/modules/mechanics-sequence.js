const MECHANICS_CONFIG = [
  {
    id: 'mechanic-canvas-parry',
    cardSelector: '[data-mechanic="parry"]',
    base: './assets/images/gameplaySequence/parry/',
    prefix: 'parry_frame_',
    count: 8,
    fps: 12
  },
  {
    id: 'mechanic-canvas-beam',
    cardSelector: '[data-mechanic="beam"]',
    base: './assets/images/gameplaySequence/beam/',
    prefix: 'beam_frame_',
    count: 41,
    fps: 14
  },
  {
    id: 'mechanic-canvas-run',
    cardSelector: '[data-mechanic="run"]',
    base: './assets/images/gameplaySequence/run/',
    prefix: 'run_frame_',
    count: 16,
    fps: 14
  },
  {
    id: 'mechanic-canvas-dash',
    cardSelector: '[data-mechanic="dash"]',
    base: './assets/images/gameplaySequence/dash/',
    prefix: 'dash_frame_',
    count: 6,
    fps: 10
  }
];

export function initMechanicsSequences() {
  const gameplaySection = document.getElementById('gameplay');
  if (!gameplaySection) return;

  const players = [];

  MECHANICS_CONFIG.forEach(cfg => {
    const canvas = document.getElementById(cfg.id);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const frames = [];
    let currentFrame = 0;
    let lastTime = 0;
    let isPlaying = false;
    let animId = null;
    let speedMultiplier = 1;

    for (let i = 1; i <= cfg.count; i++) {
      const num = String(i).padStart(4, '0');
      const img = new Image();
      img.src = `${cfg.base}${cfg.prefix}${num}.webp`;
      if (i === 1) {
        img.onload = () => {
          resize();
          draw();
        };
      }
      frames.push(img);
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width || 180);
      const h = Math.round(rect.height || 160);

      if (w > 0 && h > 0 && (canvas.width !== w * dpr || canvas.height !== h * dpr)) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }
    }

    function draw() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      if (w <= 0 || h <= 0) return;

      ctx.clearRect(0, 0, w, h);
      const img = frames[currentFrame];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = w / h;
      let drawW, drawH, drawX, drawY;

      if (canvasAspect > imgAspect) {
        drawH = h;
        drawW = h * imgAspect;
        drawX = (w - drawW) / 2;
        drawY = 0;
      } else {
        drawW = w;
        drawH = w / imgAspect;
        drawX = 0;
        drawY = (h - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }

    function loop(timestamp) {
      if (!isPlaying) return;

      const interval = 1000 / (cfg.fps * speedMultiplier);
      if (timestamp - lastTime >= interval) {
        lastTime = timestamp;
        currentFrame = (currentFrame + 1) % frames.length;
        draw();
      }
      animId = requestAnimationFrame(loop);
    }

    function start() {
      if (isPlaying) return;
      isPlaying = true;
      lastTime = performance.now();
      animId = requestAnimationFrame(loop);
    }

    function stop() {
      isPlaying = false;
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    }

    const card = document.querySelector(cfg.cardSelector);
    if (card) {
      card.addEventListener('mouseenter', () => {
        speedMultiplier = 1.35;
      });
      card.addEventListener('mouseleave', () => {
        speedMultiplier = 1;
      });
    }

    window.addEventListener('resize', () => {
      resize();
      draw();
    });

    resize();

    players.push({ start, stop });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        players.forEach(p => p.start());
      } else {
        players.forEach(p => p.stop());
      }
    });
  }, { threshold: 0.15 });

  observer.observe(gameplaySection);
}
