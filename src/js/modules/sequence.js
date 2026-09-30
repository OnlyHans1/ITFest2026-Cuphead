const SALTBK_BASE = './assets/images/chefSaltbakerSequence/Frames/';
const KING_DICE_BASE = './assets/images/kingDiceSequence/Frames/';
const BAD_ENDING_BASE = './assets/images/badEndingSequence/Frames/';

const SALTBK_FRAMES = Array.from({ length: 55 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  return `chef_saltbaker_frame_${num}.webp`;
});

const KING_DICE_FRAMES = Array.from({ length: 38 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  return `king_dice_frame_${num}.webp`;
});

const BAD_ENDING_FRAMES = Array.from({ length: 36 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  return `bad_ending_frame_${num}.webp`;
});

function createScrollSequence(config) {
  const container = document.getElementById(config.sectionId);
  const canvas = document.getElementById(config.canvasId);
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const frames = [];

  config.files.forEach((f, idx) => {
    const img = new Image();
    img.src = config.base + f;
    if (idx === 0) {
      img.onload = () => render(0);
    }
    frames.push(img);
  });

  const captionElements = [
    { el: document.getElementById(`${config.capPrefix}-1`), start: 0.02, end: 0.22 },
    { el: document.getElementById(`${config.capPrefix}-2`), start: 0.26, end: 0.47 },
    { el: document.getElementById(`${config.capPrefix}-3`), start: 0.51, end: 0.72 },
    { el: document.getElementById(`${config.capPrefix}-4`), start: 0.76, end: 0.97 }
  ];

  let currentProgress = -1;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.round(rect.width || window.innerWidth);
    const h = Math.round(rect.height || window.innerHeight);

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    if (currentProgress >= 0) {
      render(currentProgress);
    }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function render(progress) {
    currentProgress = progress;
    const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
    const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2);

    ctx.fillStyle = '#0E0B09';
    ctx.fillRect(0, 0, w, h);

    if (!frames.length) return;

    const frameIdx = Math.min(
      Math.floor(progress * frames.length),
      frames.length - 1
    );
    const frameImg = frames[frameIdx];

    if (frameImg && frameImg.complete && frameImg.naturalWidth > 0) {
      const imgAspect = frameImg.naturalWidth / frameImg.naturalHeight;
      let drawW, drawH, drawX, drawY;

      if (w / h > imgAspect) {
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

      ctx.drawImage(frameImg, drawX, drawY, drawW, drawH);
    }

    captionElements.forEach(cap => {
      if (!cap.el) return;
      const visible = progress >= cap.start && progress <= cap.end;
      if (visible) {
        cap.el.classList.add('is-active');
      } else {
        cap.el.classList.remove('is-active');
      }
    });
  }

  let targetProgress = 0;
  let currentScrub = 0;

  function scrubLoop() {
    const diff = targetProgress - currentScrub;
    if (Math.abs(diff) > 0.0005) {
      currentScrub += diff * 0.18;
      render(currentScrub);
    }
    requestAnimationFrame(scrubLoop);
  }
  scrubLoop();

  function onScroll() {
    const rect = container.getBoundingClientRect();
    const totalDist = container.offsetHeight - window.innerHeight;
    if (totalDist <= 0) return;

    const scrolled = -rect.top;
    targetProgress = Math.max(0, Math.min(1, scrolled / totalDist));
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

export function initLandingSequence() {
  createScrollSequence({
    sectionId: 'sequence-saltbaker',
    canvasId: 'sequence-canvas-saltbaker',
    capPrefix: 'seq-saltbaker-cap',
    base: SALTBK_BASE,
    files: SALTBK_FRAMES
  });

  createScrollSequence({
    sectionId: 'sequence-king-dice',
    canvasId: 'sequence-canvas-king-dice',
    capPrefix: 'seq-king-dice-cap',
    base: KING_DICE_BASE,
    files: KING_DICE_FRAMES
  });

  createScrollSequence({
    sectionId: 'sequence-devil',
    canvasId: 'sequence-canvas-devil',
    capPrefix: 'seq-devil-cap',
    base: BAD_ENDING_BASE,
    files: BAD_ENDING_FRAMES
  });
}
