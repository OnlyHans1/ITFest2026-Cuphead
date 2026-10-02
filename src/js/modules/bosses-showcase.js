
const BOSS_DATA = [
  {
    id: 0,
    order: 'CONTRACT #01',
    isle: 'INKWELL ISLE I',
    name: 'THE ROOT PACK',
    stage: 'BOTANIC PANIC',
    avatar: './assets/images/bossPortraits/pin (4).webp',
    desc: 'Trio sayuran nakal: Sal Spudder si kentang peluru lumpur, Ollie Bulb si bawang cengeng, dan Chauncey Chantenay si wortel cenayang pemancar sinar psikis.',
    threat: 2,
    signature: 'Sal \u2022 Ollie \u2022 Chauncey',
    filter: 'isle-1'
  },
  {
    id: 1,
    order: 'CONTRACT #02',
    isle: 'INKWELL ISLE I',
    name: 'RIBBY & CROAKS',
    stage: 'CLIP JOINT CALAMITY',
    avatar: './assets/images/bossPortraits/pin.webp',
    desc: 'Duo petinju amfibi di atas perahu kasino sungai. Menyerang dengan kombo sarung tinju proyektil, putaran angin puyuh, hingga berubah menjadi mesin judi slot raksasa.',
    threat: 3,
    signature: 'Ribby & Croaks',
    filter: 'isle-1'
  },
  {
    id: 2,
    order: 'CONTRACT #03',
    isle: 'INKWELL ISLE I',
    name: 'CAGNEY CARNATION',
    stage: 'FLORAL FURY',
    avatar: './assets/images/bossPortraits/pin (6).webp',
    desc: 'Bunga liar berparas riang yang mendadak menjelma menjadi monster floral ganas, menembakkan benih terbang, serbuan lebah jarum, dan sulur berduri maut.',
    threat: 3,
    signature: 'Cagney Carnation',
    filter: 'isle-1'
  },
  {
    id: 3,
    order: 'CONTRACT #04',
    isle: 'INKWELL ISLE II',
    name: 'BEPPI THE CLOWN',
    stage: 'CARNIVAL KERFUFFLE',
    avatar: './assets/images/bossPortraits/pin (2).webp',
    desc: 'Badut sirkus pengacau taman karnaval. Bertarung menunggangi mobil bumper, melayang sebagai balon kepala raksasa, hingga mengemudikan roller coaster pembawa malapetaka.',
    threat: 4,
    signature: 'Beppi the Clown',
    filter: 'isle-2'
  },
  {
    id: 4,
    order: 'CONTRACT #05',
    isle: 'INKWELL ISLE II',
    name: 'WALLY WARBLES',
    stage: 'AVIARY ACTION',
    avatar: './assets/images/bossPortraits/pin (5).webp',
    desc: 'Burung pelatuk bertemperamen tinggi di dalam jam kukuk. Menghujani peluru bulu telur di langit Inkwell dan dilanjutkan duel udara melawan putranya yang menaiki sarang terbang.',
    threat: 4,
    signature: 'Wally Warbles & Son',
    filter: 'isle-2'
  },
  {
    id: 5,
    order: 'CONTRACT #06',
    isle: 'INKWELL ISLE III',
    name: 'WERNER WERMAN',
    stage: 'MURINE CORPS',
    avatar: './assets/images/bossPortraits/pin (1).webp',
    desc: 'Tikus militer jenius di dalam kaleng sup mekanis. Meluncurkan mortir bom ceri, pelontar api, dan pegas pemantul sebelum pertarungan pamungkas melawan sang kucing.',
    threat: 4,
    signature: 'Werner Werman',
    filter: 'isle-3'
  },
  {
    id: 6,
    order: 'CONTRACT #07',
    isle: 'INKWELL ISLE III',
    name: 'CAPTAIN BRINEYBEARD',
    stage: "SHOOTIN N' LOOTIN",
    avatar: './assets/images/bossPortraits/pin (9).webp',
    desc: 'Bajak laut bermata satu penguasa pelabuhan. Bekerja sama dengan ikan hiu perampok, gurita pembawa tinta buta, serta kapal hidup bertaring yang menembakkan laser mutlak.',
    threat: 4,
    signature: 'Capt. Brineybeard',
    filter: 'isle-3'
  },
  {
    id: 7,
    order: 'CONTRACT #08',
    isle: 'INKWELL ISLE III',
    name: "DR. KAHL'S ROBOT",
    stage: 'JUNKYARD JIVE',
    avatar: './assets/images/bossPortraits/pin (8).webp',
    desc: 'Raksasa metal karya ilmuwan gila dari tempat rongsokan. Terkenal sebagai pertarungan bullet-hell terpadat dengan misil pelacak, laser dada, dan serbuan kristal permata.',
    threat: 5,
    signature: "Dr. Kahl & Automaton",
    filter: 'isle-3'
  },
  {
    id: 8,
    order: 'CONTRACT #09',
    isle: 'INKWELL ISLE III',
    name: 'PHANTOM EXPRESS',
    stage: 'RAILROAD WRATH',
    avatar: './assets/images/bossPortraits/pin (3).webp',
    desc: 'Lokomotif uap angker berisi arwah penasaran. Pemain harus menggeser lori tambang menggunakan parry slap merah muda sambil menghindari bola mata melayang dan semburan api batubara.',
    threat: 5,
    signature: 'Specter & Conductor',
    filter: 'isle-3'
  },
  {
    id: 9,
    order: 'FINAL CONTRACT \u2022 DLC',
    isle: 'INKWELL ISLE IV',
    name: 'CHEF SALTBAKER',
    stage: 'A DISH TO DIE FOR',
    avatar: './assets/images/chefSaltbaker/Idle/NPC_saltbaker_0001.webp',
    desc: 'Dalang rahasia di balik D.L.C. Isle yang mengkhianati pahlawan demi resep Wondertart penguasa alam astral. Mengubah dapur menjadi medan badai garam, adonan, dan pecahan kaca!',
    threat: 5,
    signature: 'Chef Saltbaker',
    filter: 'isle-4'
  }
];

export function initBossesShowcase() {
  const section = document.getElementById('bosses');
  if (!section) return;

  const avatarEl = document.getElementById('boss-stage-avatar');
  const stampEl = document.getElementById('boss-stage-stamp');
  const orderEl = document.getElementById('boss-stage-order');
  const isleEl = document.getElementById('boss-stage-isle');
  const nameEl = document.getElementById('boss-stage-name');
  const subtitleEl = document.getElementById('boss-stage-subtitle');
  const descEl = document.getElementById('boss-stage-desc');
  const signatureEl = document.getElementById('boss-stage-signature');
  const threatContainer = document.getElementById('boss-stage-threat');
  const counterCurrEl = document.getElementById('boss-counter-curr');
  const timelineFill = document.getElementById('boss-timeline-fill');
  const dossierCard = document.getElementById('boss-dossier-card');
  const portraitFrame = document.getElementById('boss-portrait-frame');

  const prevBtn = document.getElementById('boss-prev-btn');
  const nextBtn = document.getElementById('boss-next-btn');
  const parryTriggerBtn = document.getElementById('btn-boss-parry-trigger');
  const filterBtns = section.querySelectorAll('.boss-tab-btn');
  const reelItems = section.querySelectorAll('.boss-reel-item');
  const reelTrack = document.getElementById('boss-reel-track');

  let currentIndex = 0;
  let currentFilter = 'all';
  const gsap = window.gsap;

  function renderThreatStars(starsCount) {
    if (!threatContainer) return;
    threatContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.className = `threat-star ${i <= starsCount ? 'is-active' : ''}`;
      star.textContent = '★';
      threatContainer.appendChild(star);
    }
  }

  function setActiveDebtor(index, animate = true) {
    if (index < 0) index = BOSS_DATA.length - 1;
    if (index >= BOSS_DATA.length) index = 0;
    currentIndex = index;

    const data = BOSS_DATA[currentIndex];

    reelItems.forEach((btn, idx) => {
      const isActive = idx === currentIndex;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive && reelTrack) {
        const itemLeft = btn.offsetLeft;
        const itemWidth = btn.offsetWidth;
        const trackWidth = reelTrack.clientWidth;
        reelTrack.scrollTo({
          left: itemLeft - (trackWidth / 2) + (itemWidth / 2),
          behavior: 'smooth'
        });
      }
    });

    if (counterCurrEl) {
      counterCurrEl.textContent = String(currentIndex + 1).padStart(2, '0');
    }

    if (timelineFill) {
      const percent = ((currentIndex + 1) / BOSS_DATA.length) * 100;
      timelineFill.style.width = `${percent}%`;
    }

    if (!animate || !gsap) {
      if (avatarEl) avatarEl.src = data.avatar;
      if (orderEl) orderEl.textContent = data.order;
      if (isleEl) isleEl.textContent = data.isle;
      if (nameEl) nameEl.textContent = data.name;
      if (subtitleEl) subtitleEl.textContent = data.stage;
      if (descEl) descEl.textContent = data.desc;
      if (signatureEl) signatureEl.textContent = data.signature;
      renderThreatStars(data.threat);
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(avatarEl, {
      scale: 0.75,
      opacity: 0.2,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        avatarEl.src = data.avatar;
        avatarEl.alt = data.name;
        orderEl.textContent = data.order;
        isleEl.textContent = data.isle;
        nameEl.textContent = data.name;
        subtitleEl.textContent = data.stage;
        descEl.textContent = data.desc;
        signatureEl.textContent = data.signature;
        renderThreatStars(data.threat);
      }
    })
    .to(avatarEl, {
      scale: 1,
      opacity: 1,
      duration: 0.55,
      ease: 'back.out(2)'
    })
    .fromTo(stampEl, {
      scale: 2.8,
      rotation: -35,
      opacity: 0
    }, {
      scale: 1,
      rotation: -9,
      opacity: 0.88,
      duration: 0.4,
      ease: 'power4.in'
    }, '-=0.4')
    .fromTo([nameEl, subtitleEl, descEl], {
      y: 18,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.08
    }, '-=0.3')
    .fromTo(threatContainer.children, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      stagger: 0.05,
      ease: 'back.out(2.5)'
    }, '-=0.2');
  }

  function applyFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    let firstMatchingIndex = -1;

    reelItems.forEach((item, idx) => {
      const itemFilter = item.dataset.filter;
      const matches = filter === 'all' || itemFilter === filter;
      if (matches) {
        item.style.display = 'inline-flex';
        if (gsap) {
          gsap.to(item, { scale: 1, opacity: 1, duration: 0.3 });
        }
        if (firstMatchingIndex === -1) {
          firstMatchingIndex = idx;
        }
      } else {
        if (gsap) {
          gsap.to(item, { scale: 0.85, opacity: 0.25, duration: 0.2 });
        }
        item.style.display = 'none';
      }
    });

    if (firstMatchingIndex !== -1 && (filter !== 'all' && BOSS_DATA[currentIndex].filter !== filter)) {
      setActiveDebtor(firstMatchingIndex, true);
    }
  }

  reelItems.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      setActiveDebtor(idx, true);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      navigateFilterOffset(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      navigateFilterOffset(1);
    });
  }

  function navigateFilterOffset(direction) {
    let nextIdx = currentIndex + direction;
    if (currentFilter === 'all') {
      setActiveDebtor(nextIdx, true);
      return;
    }

    const matchingIndices = BOSS_DATA
      .map((b, i) => b.filter === currentFilter ? i : null)
      .filter((i) => i !== null);

    if (matchingIndices.length === 0) return;

    let pos = matchingIndices.indexOf(currentIndex);
    if (pos === -1) {
      setActiveDebtor(matchingIndices[0], true);
      return;
    }

    pos = (pos + direction + matchingIndices.length) % matchingIndices.length;
    setActiveDebtor(matchingIndices[pos], true);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyFilter(btn.dataset.filter);
    });
  });

  if (parryTriggerBtn) {
    parryTriggerBtn.addEventListener('click', () => {

      if (gsap && dossierCard) {
        gsap.timeline()
          .to(dossierCard, {
            x: '+=10',
            rotation: 1,
            backgroundColor: '#FFE6F0',
            duration: 0.05,
            yoyo: true,
            repeat: 5
          })
          .to(dossierCard, {
            x: 0,
            rotation: 0,
            backgroundColor: '#F5ECDA',
            duration: 0.15
          });
      }
    });
  }

  if (dossierCard && portraitFrame) {
    dossierCard.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 992) return;
      const rect = dossierCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      portraitFrame.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`;
    });

    dossierCard.addEventListener('mouseleave', () => {
      portraitFrame.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (e.key === 'ArrowLeft') {
      navigateFilterOffset(-1);
    } else if (e.key === 'ArrowRight') {
      navigateFilterOffset(1);
    }
  });

  setActiveDebtor(0, false);
}
