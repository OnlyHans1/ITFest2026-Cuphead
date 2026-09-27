const FRAME_FILES = [
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

const BASE_PATH = './assets/images/Delicious Last Course - A Dish to Die For/Shot 1 + 3/';
const BG_SRC = BASE_PATH + 'Background/pre_last_boss_shot_1_bg.png';
const FG_LEFT_SRC = BASE_PATH + 'Background/pre_last_boss_shot_1_fg_left.png';
const FG_RIGHT_SRC = BASE_PATH + 'Background/pre_last_boss_shot_1_fg_right.png';

export function initLandingSequence() {
  const container = document.getElementById('sequence');
  const canvas = document.getElementById('sequence-canvas');
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const frameImages = [];
  const bgImage = new Image();
  const fgLeftImage = new Image();
  const fgRightImage = new Image();

  bgImage.src = BG_SRC;
  fgLeftImage.src = FG_LEFT_SRC;
  fgRightImage.src = FG_RIGHT_SRC;

  FRAME_FILES.forEach((file, index) => {
    const img = new Image();
    img.src = BASE_PATH + 'Chef Saltbaker/' + file;
    if (index === 0) {
      img.onload = () => render(0);
    }
    frameImages.push(img);
  });

  const captions = [
    { el: document.getElementById('seq-cap-1'), start: 0.02, end: 0.22 },
    { el: document.getElementById('seq-cap-2'), start: 0.26, end: 0.47 },
    { el: document.getElementById('seq-cap-3'), start: 0.51, end: 0.72 },
    { el: document.getElementById('seq-cap-4'), start: 0.76, end: 0.97 }
  ];

  let currentProgress = -1;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    currentProgress = -1;
    updateProgress();
  }

  function render(prog) {
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = '#0E0B09';
    ctx.fillRect(0, 0, w, h);

    const baseW = 1320;
    const baseH = 740;
    const scale = Math.max(w / baseW, h / baseH);
    const destW = baseW * scale;
    const destH = baseH * scale;
    const destX = (w - destW) / 2;
    const destY = (h - destH) / 2;

    if (bgImage.complete && bgImage.naturalWidth > 0) {
      ctx.drawImage(bgImage, destX, destY, destW, destH);
    }

    const frameIdx = Math.min(frameImages.length - 1, Math.max(0, Math.floor(prog * (frameImages.length - 1))));
    const curFrame = frameImages[frameIdx];

    if (curFrame && curFrame.complete && curFrame.naturalWidth > 0) {
      ctx.drawImage(curFrame, destX, destY, destW, destH);
    }

    const parallax = (prog - 0.5) * 50 * (w / 1320);

    if (fgLeftImage.complete && fgLeftImage.naturalWidth > 0) {
      ctx.drawImage(fgLeftImage, destX - parallax, destY, destW, destH);
    }

    if (fgRightImage.complete && fgRightImage.naturalWidth > 0) {
      ctx.drawImage(fgRightImage, destX + parallax, destY, destW, destH);
    }

    captions.forEach((cap) => {
      if (!cap.el) return;
      if (prog >= cap.start && prog <= cap.end) {
        cap.el.classList.add('is-active');
      } else {
        cap.el.classList.remove('is-active');
      }
    });
  }

  function updateProgress() {
    const rect = container.getBoundingClientRect();
    const scrollRange = container.offsetHeight - window.innerHeight;
    if (scrollRange <= 0) return;

    const rawProg = -rect.top / scrollRange;
    const clamped = Math.min(1, Math.max(0, rawProg));

    if (Math.abs(clamped - currentProgress) > 0.0008) {
      currentProgress = clamped;
      render(currentProgress);
    }
  }

  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('scroll', updateProgress, { passive: true });

  resizeCanvas();
}
