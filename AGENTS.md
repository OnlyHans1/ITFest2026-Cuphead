# AGENTS.md — Frontend Website (HTML/CSS/JS) — Cuphead Tribute

Konteks untuk AI coding agent yang bekerja di repo ini. Baca file ini SEBELUM menulis atau memodifikasi kode apa pun.

---

## 1. Format Proyek

Website ini adalah **Single Landing Page Showcase** yang komprehensif dan scroll-driven (bukan multi-page) bergaya vintage cartoon 1930-an untuk game **Cuphead** (Studio MDHR), dibuat untuk **Lomba Web Development — IT FEST 2026**.

---

## 2. Aturan Keras (Non-Negotiable)

1. **DILARANG MENGGUNAKAN KOMENTAR DALAM KODE (STRICT NO COMMENTS)**:
   - Dilarang keras menyertakan komentar dalam bentuk apa pun di seluruh file kode (`<!-- -->` di HTML, `/* */` di CSS, `//` atau `/* */` di JS).
   - Seluruh baris kode harus bersih dari komentar.
2. **FORMAT SINGLE LANDING PAGE**:
   - Website dibangun sebagai satu landing page yang utuh dan menyatu di `src/index.html` dengan navigasi anchor scroll yang mulus antar section (Hero, Trailer, Story, Characters, Gameplay, DLC, Official Store).
3. **LOKASI KODINGAN**:
   - Semua kode, styling, skrip, dan aset wajib berada di dalam folder `/src/`.
4. **HAK CIPTA & DISCLAIMER**:
   - Wajib menyertakan disclaimer resmi di footer: *"Cuphead © Studio MDHR. Fan-made tribute, tidak berafiliasi resmi."*
5. **VISUAL 1930s CRT TV**:
   - Background dan overlay wajib merepresentasikan televisi tabung/proyektor era 1930-an (vignette gelap, scanlines TV, film grain, debu/jitter retro).
6. **PRELOADER VINTAGE**:
   - Wajib memiliki preloader dengan cangkir di bawah sorotan lampu proyektor retro.
7. **PENGGUNAAN ASET LOKAL**:
   - Wajib memanfaatkan aset lokal di `/src/assets/images/` dan `/src/assets/web/hero.png`.

---

## 3. Standar Arsitektur Modular & Prinsip SOLID

- **SRP (Single Responsibility)**: File JS dan CSS dipisah menurut fungsinya tanpa mencampuradukkan domain berbeda.
- **OCP (Open/Closed)**: Variasi visual diekstensi melalui CSS Variables (Design Tokens) tanpa mengubah aturan dasar.
- **LSP (Liskov Substitution)**: Modul interaktif memiliki siklus hidup seragam (`init`, `destroy`).
- **ISP (Interface Segregation)**: Modul-modul fungsi berdiri sendiri tanpa ketergantungan berlebihan.
- **DIP (Dependency Inversion)**: Konstanta, breakpoint, dan konfigurasi animasi dikelola terpusat di `src/js/config/site-config.js`.

---

## 4. Dependencies & Skills

- **`scroll-craft`** (`.agents/skills/scroll-craft/`): Scrollytelling, kurva emosi, scrubbing, dan anti-dead-scroll.
- **`impeccable`** (`.agents/skills/impeccable/`): Kualitas visual, kontras WCAG AA, tipografi, dan audit bebas AI-slop (`npx impeccable detect src/`).
- Smooth Scroll: Lenis 1.1.13.
- Animasi Scroll: GSAP 3.12.5 + ScrollTrigger.