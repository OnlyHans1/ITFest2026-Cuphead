const READY_FRAMES = [
  'FightText_GetReady_0002.webp',
  'FightText_GetReady_0003.webp',
  'FightText_GetReady_0004.webp',
  'FightText_GetReady_0005.webp',
  'FightText_GetReady_0006.webp',
  'FightText_GetReady_0007.webp',
  'FightText_GetReady_0008.webp',
  'FightText_GetReady_0009.webp',
  'FightText_GetReady_0010.webp',
  'FightText_GetReady_0011.webp',
  'FightText_GetReady_0012.webp',
  'FightText_GetReady_0013.webp',
  'FightText_GetReady_0014-0015.webp',
  'FightText_GetReady_0016.webp',
  'FightText_GetReady_0017.webp',
  'FightText_GetReady_0018.webp',
  'FightText_GetReady_0019.webp',
  'FightText_GetReady_0020.webp',
  'FightText_GetReady_0021.webp'
];

const WALLOP_FRAMES = [
  'FightText_GetReady_0022.webp',
  'FightText_GetReady_0023.webp',
  'FightText_GetReady_0024.webp',
  'FightText_GetReady_0025.webp',
  'FightText_GetReady_0026.webp',
  'FightText_GetReady_0027.webp',
  'FightText_GetReady_0028.webp',
  'FightText_GetReady_0029.webp',
  'FightText_GetReady_0030.webp',
  'FightText_GetReady_0031.webp',
  'FightText_GetReady_0032.webp',
  'FightText_GetReady_0033.webp',
  'FightText_GetReady_0034.webp',
  'FightText_GetReady_0035.webp',
  'FightText_GetReady_0036.webp',
  'FightText_GetReady_0037.webp',
  'FightText_GetReady_0038.webp',
  'FightText_GetReady_0039.webp',
  'FightText_GetReady_0040.webp',
  'FightText_GetReady_0041.webp',
  'FightText_GetReady_0042.webp',
  'FightText_GetReady_0043.webp',
  'FightText_GetReady_0044.webp',
  'FightText_GetReady_0045_0047.webp',
  'FightText_GetReady_0046_0048.webp',
  'FightText_GetReady_0049.webp',
  'FightText_GetReady_0050.webp',
  'FightText_GetReady_0051.webp'
];

const IRIS_FRAMES = [
  'irisA_0000.webp',
  'irisA_0001.webp',
  'irisA_0002.webp',
  'irisA_0003.webp',
  'irisA_0004.webp',
  'irisA_0005.webp',
  'irisA_0006.webp',
  'irisA_0007.webp',
  'irisA_0008.webp',
  'irisA_0009.webp',
  'irisA_0010.webp',
  'irisA_0011.webp',
  'irisA_0012.webp',
  'irisA_0013.webp',
  'irisA_0014.webp',
  'irisA_0015.webp',
  'irisA_0016.webp'
];

const READY_BASE = './assets/Cuphead/Fight Text/Fight Start A - Ready/';
const WALLOP_BASE = './assets/Cuphead/Fight Text/Fight Start B - Wallop!/';
const IRIS_BASE = './assets/Cuphead/Iris Transition/';

export function initPreloader(onComplete) {
  const preloaderEl = document.getElementById('preloader');
  const fightCanvas = document.getElementById('preloader-fight-canvas');
  const irisCanvas = document.getElementById('preloader-iris-canvas');

  if (!preloaderEl || !fightCanvas || !irisCanvas) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  document.body.classList.add('is-preloading');

  const fightCtx = fightCanvas.getContext('2d');
  const irisCtx = irisCanvas.getContext('2d');

  const readyImgs = READY_FRAMES.map(f => {
    const img = new Image();
    img.src = `${READY_BASE}${f}`;
    if (img.decode) img.decode().catch(() => {});
    return img;
  });

  const wallopImgs = WALLOP_FRAMES.map(f => {
    const img = new Image();
    img.src = `${WALLOP_BASE}${f}`;
    if (img.decode) img.decode().catch(() => {});
    return img;
  });

  const irisImgs = IRIS_FRAMES.map(f => {
    const img = new Image();
    img.src = `${IRIS_BASE}${f}`;
    if (img.decode) img.decode().catch(() => {});
    return img;
  });

  let isDestroyed = false;
  let animId = null;
  let phase = 0;
  let frameIdx = 0;
  let lastTime = 0;

  function resizeCanvases() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const fRect = fightCanvas.getBoundingClientRect();
    const fw = Math.round(fRect.width || 512);
    const fh = Math.round(fRect.height || 288);
    if (fightCanvas.width !== fw * dpr || fightCanvas.height !== fh * dpr) {
      fightCanvas.width = fw * dpr;
      fightCanvas.height = fh * dpr;
      fightCtx.setTransform(1, 0, 0, 1, 0, 0);
      fightCtx.scale(dpr, dpr);
    }

    const iw = window.innerWidth;
    const ih = window.innerHeight;
    if (irisCanvas.width !== iw * dpr || irisCanvas.height !== ih * dpr) {
      irisCanvas.width = iw * dpr;
      irisCanvas.height = ih * dpr;
      irisCtx.setTransform(1, 0, 0, 1, 0, 0);
      irisCtx.scale(dpr, dpr);
    }
  }

  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  function drawFightFrame(img) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = fightCanvas.width / dpr;
    const h = fightCanvas.height / dpr;
    fightCtx.clearRect(0, 0, w, h);

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = w / h;
    let dw, dh, dx, dy;

    if (canvasAspect > imgAspect) {
      dh = h;
      dw = h * imgAspect;
      dx = (w - dw) / 2;
      dy = 0;
    } else {
      dw = w;
      dh = w / imgAspect;
      dx = 0;
      dy = (h - dh) / 2;
    }

    fightCtx.drawImage(img, dx, dy, dw, dh);
  }

  function drawIrisFrame(img) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = irisCanvas.width / dpr;
    const h = irisCanvas.height / dpr;

    if (!img || !img.complete || img.naturalWidth === 0) {
      irisCtx.fillStyle = '#000000';
      irisCtx.fillRect(0, 0, w, h);
      return;
    }

    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight) * 1.02;
    const dw = Math.ceil(img.naturalWidth * scale);
    const dh = Math.ceil(img.naturalHeight * scale);
    const dx = Math.floor((w - dw) / 2);
    const dy = Math.floor((h - dh) / 2);

    irisCtx.clearRect(0, 0, w, h);
    irisCtx.drawImage(img, dx, dy, dw, dh);
  }

  function finish() {
    if (isDestroyed) return;
    isDestroyed = true;
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener('resize', resizeCanvases);

    preloaderEl.classList.add('is-loaded');
    document.body.classList.remove('is-preloading');

    setTimeout(() => {
      preloaderEl.style.display = 'none';
    }, 400);

    if (typeof onComplete === 'function') {
      onComplete();
    }
  }

  function skipToIris() {
    if (phase >= 2) return;
    phase = 2;
    frameIdx = 0;
    drawIrisFrame(irisImgs[0]);
    preloaderEl.classList.add('is-irising');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    fightCtx.clearRect(0, 0, fightCanvas.width / dpr, fightCanvas.height / dpr);
    frameIdx = 1;
  }

  preloaderEl.addEventListener('click', skipToIris);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      skipToIris();
    }
  });

  const safetyTimeout = setTimeout(finish, 6500);

  function loop(time) {
    if (isDestroyed) return;

    if (!lastTime) lastTime = time;
    const elapsed = time - lastTime;

    let targetFps = 20;
    if (phase === 1) targetFps = 22;
    if (phase === 2) targetFps = 24;

    const interval = 1000 / targetFps;

    if (elapsed >= interval) {
      lastTime = time - (elapsed % interval);

      if (phase === 0) {
        if (frameIdx < readyImgs.length) {
          drawFightFrame(readyImgs[frameIdx]);
          frameIdx++;
        } else {
          phase = 1;
          frameIdx = 0;
          drawFightFrame(wallopImgs[0]);
          frameIdx++;
        }
      } else if (phase === 1) {
        if (frameIdx < wallopImgs.length) {
          drawFightFrame(wallopImgs[frameIdx]);
          frameIdx++;
        } else {
          phase = 2;
          frameIdx = 0;
          drawIrisFrame(irisImgs[0]);
          preloaderEl.classList.add('is-irising');
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          fightCtx.clearRect(0, 0, fightCanvas.width / dpr, fightCanvas.height / dpr);
          frameIdx = 1;
        }
      } else if (phase === 2) {
        if (frameIdx < irisImgs.length) {
          drawIrisFrame(irisImgs[frameIdx]);
          frameIdx++;
        } else {
          clearTimeout(safetyTimeout);
          finish();
          return;
        }
      }
    }

    animId = requestAnimationFrame(loop);
  }

  requestAnimationFrame((time) => {
    lastTime = time;
    animId = requestAnimationFrame(loop);
  });
}
