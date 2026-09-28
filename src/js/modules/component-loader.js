const COMPONENT_MAP = [
  { selector: '#preloader-mount', file: './components/preloader.html' },
  { selector: '#header-mount', file: './components/header.html' },
  { selector: '#hero-mount', file: './components/hero.html' },
  { selector: '#trailer-mount', file: './components/trailer.html' },
  { selector: '#story-mount', file: './components/story.html' },
  { selector: '#characters-mount', file: './components/characters.html' },
  { selector: '#gameplay-mount', file: './components/gameplay.html' },
  { selector: '#bosses-mount', file: './components/bosses.html' },
  { selector: '#sequence-saltbaker-mount', file: './components/sequence-saltbaker.html' },
  { selector: '#sequence-king-dice-mount', file: './components/sequence-king-dice.html' },
  { selector: '#sequence-devil-mount', file: './components/sequence-devil.html' },
  { selector: '#dlc-mount', file: './components/dlc.html' },
  { selector: '#play-mount', file: './components/play.html' },
  { selector: '#footer-mount', file: './components/footer.html' }
];

export async function loadPreloader() {
  try {
    const res = await fetch('./components/preloader.html');
    if (!res.ok) return;
    const html = await res.text();
    const el = document.querySelector('#preloader-mount');
    if (el) {
      el.outerHTML = html;
    }
  } catch (err) {
    console.error(err);
  }
}

export async function loadComponents() {
  await Promise.all(
    COMPONENT_MAP.map(async ({ selector, file }) => {
      try {
        const res = await fetch(file);
        if (!res.ok) return;
        const html = await res.text();
        const el = document.querySelector(selector);
        if (el) {
          el.outerHTML = html;
        }
      } catch (err) {
        console.error(err);
      }
    })
  );
}
