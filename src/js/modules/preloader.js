export function initPreloader(onComplete) {
  const preloaderEl = document.getElementById('preloader');
  const barFill = document.getElementById('preloader-bar');
  const percentEl = document.getElementById('preloader-percent');
  const startBtn = document.getElementById('preloader-start-btn');
  const promptEl = document.getElementById('preloader-prompt');

  if (!preloaderEl) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 10;
    if (progress > 100) progress = 100;

    if (barFill) barFill.style.width = `${progress}%`;
    if (percentEl) percentEl.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      if (promptEl) promptEl.style.display = 'none';
      if (startBtn) {
        startBtn.style.display = 'inline-block';
        startBtn.focus();
      } else {
        setTimeout(dismissPreloader, 400);
      }
    }
  }, 120);

  function dismissPreloader() {
    preloaderEl.classList.add('is-loaded');
    if (typeof onComplete === 'function') {
      setTimeout(onComplete, 300);
    }
  }

  if (startBtn) {
    startBtn.addEventListener('click', dismissPreloader);
  }

  const startMenuItem = document.querySelector('.preloader-menu-item.active');
  if (startMenuItem) {
    startMenuItem.addEventListener('click', dismissPreloader);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key.toLowerCase() === 'a') {
      if (progress >= 100 && !preloaderEl.classList.contains('is-loaded')) {
        dismissPreloader();
      }
    }
  });
}
