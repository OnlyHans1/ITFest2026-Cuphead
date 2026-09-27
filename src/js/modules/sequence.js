const SALTBK_BASE = './assets/images/chefSaltbakerSequence/Shot 1 + 3/';
const KING_DICE_BASE = './assets/images/kingDiceSequence/Frames/';
const BAD_ENDING_BASE = './assets/images/badEndingSequence/Frames/';

const SALTBK_FRAMES = [
  'A/pre_last_boss_cutscene_saltbaker_0001a.png',
  'A/pre_last_boss_cutscene_saltbaker_0001b.png',
  'A/pre_last_boss_cutscene_saltbaker_0001c.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0002.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0003.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0004.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0005.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0006.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0007.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0008.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0009.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0010.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0011.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0012.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0013.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0014.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0015.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0016.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0017.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0018.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0019.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0020.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0021.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0022.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0023.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0024.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0025.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0026.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0027.png',
  'A-B/pre_last_boss_cutscene_saltbaker_0028.png',
  'B/pre_last_boss_cutscene_saltbaker_0029a.png',
  'B/pre_last_boss_cutscene_saltbaker_0029b.png',
  'B/pre_last_boss_cutscene_saltbaker_0029c.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0030.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0031.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0032.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0033.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0034.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0035.png',
  'B-C/pre_last_boss_cutscene_saltbaker_0036.png',
  'C/pre_last_boss_cutscene_saltbaker_0037a.png',
  'C/pre_last_boss_cutscene_saltbaker_0037b.png',
  'C/pre_last_boss_cutscene_saltbaker_0037c.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0038.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0039.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0040.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0041.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0042.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0043.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0044.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0045.png',
  'C-D/pre_last_boss_cutscene_saltbaker_0046.png',
  'D/pre_last_boss_cutscene_saltbaker_0047a.png',
  'D/pre_last_boss_cutscene_saltbaker_0047b.png',
  'D/pre_last_boss_cutscene_saltbaker_0047c.png'
];

const KING_DICE_FRAMES = Array.from({ length: 38 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  return `king_dice_frame_${num}.png`;
});

const BAD_ENDING_FRAMES = Array.from({ length: 36 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  return `bad_ending_frame_${num}.png`;
});

function createScrollSequence(config) {
  const container = document.getElementById(config.sectionId);
  const canvas = document.getElementById(config.canvasId);
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const frames = [];
  let bgImg = null;
  let fgLeftImg = null;
  let fgRightImg = null;

  if (config.bg) {
    bgImg = new Image();
    bgImg.src = config.bg;
  }
  if (config.fgLeft) {
    fgLeftImg = new Image();
    fgLeftImg.src = config.fgLeft;
  }
  if (config.fgRight) {
    fgRightImg = new Image();
    fgRightImg.src = config.fgRight;
  }

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

    if (config.mode === 'cutscene') {
      const targetAspect = 1459 / 770;
      let drawW, drawH, drawX, drawY;

      if (w / h > targetAspect) {
        drawW = w;
        drawH = w / targetAspect;
        drawX = 0;
        drawY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * targetAspect;
        drawX = (w - drawW) / 2;
        drawY = 0;
      }

      if (bgImg && bgImg.complete && bgImg.naturalWidth > 0) {
        ctx.drawImage(bgImg, drawX, drawY, drawW, drawH);
      }
      if (frameImg && frameImg.complete && frameImg.naturalWidth > 0) {
        ctx.drawImage(frameImg, drawX, drawY, drawW, drawH);
      }
      if (fgLeftImg && fgLeftImg.complete && fgLeftImg.naturalWidth > 0) {
        ctx.drawImage(fgLeftImg, drawX, drawY, drawW, drawH);
      }
      if (fgRightImg && fgRightImg.complete && fgRightImg.naturalWidth > 0) {
        ctx.drawImage(fgRightImg, drawX, drawY, drawW, drawH);
      }
    } else {
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
    base: SALTBK_BASE + 'Chef Saltbaker/',
    files: SALTBK_FRAMES,
    bg: SALTBK_BASE + 'Background/pre_last_boss_shot_1_bg.png',
    fgLeft: SALTBK_BASE + 'Background/pre_last_boss_shot_1_fg_left.png',
    fgRight: SALTBK_BASE + 'Background/pre_last_boss_shot_1_fg_right.png',
    mode: 'cutscene'
  });

  createScrollSequence({
    sectionId: 'sequence-king-dice',
    canvasId: 'sequence-canvas-king-dice',
    capPrefix: 'seq-king-dice-cap',
    base: KING_DICE_BASE,
    files: KING_DICE_FRAMES,
    mode: 'composite'
  });

  createScrollSequence({
    sectionId: 'sequence-devil',
    canvasId: 'sequence-canvas-devil',
    capPrefix: 'seq-devil-cap',
    base: BAD_ENDING_BASE,
    files: BAD_ENDING_FRAMES,
    mode: 'composite'
  });
}
