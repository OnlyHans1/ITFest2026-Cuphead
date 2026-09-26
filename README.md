# ☕ CUPHEAD — A Debt Worth Dying For

Website tribute fan-made yang menghidupkan kembali dunia Inkwell Isles lewat pengalaman scroll-driven yang imersif, dibuat untuk **Lomba Web Development IT FEST 2026** — tema *Immersive Gaming Experience Through Web Technology*.

Dikembangkan oleh **Tim [ISI NAMA TIM]** untuk kompetisi IT FEST 2026 — kategori fan-made showcase dari game yang sudah ada.

---

## 1. 📖 Judul dan Deskripsi Proyek

**CUPHEAD — A Debt Worth Dying For** adalah website showcase fan-made dalam format **Single Landing Page** yang menceritakan kembali atmosfer game *Cuphead* (Studio MDHR). Mengusung estetika visual kartun era 1930-an di televisi tabung vintage (CRT TV), website ini memadukan scanlines, vignette mendalam, film grain, serta animasi interaktif berbasis scroll (*scrollytelling*).

> ⚠️ **Bukan produk resmi.** Cuphead © Studio MDHR. Project ini dibuat untuk keperluan non-komersial (lomba web development) dan tidak berafiliasi resmi dengan Studio MDHR.

---

## 2. ⚡ Aturan Pengembangan (Development Rules)

- **Dilarang Menggunakan Komentar (No Comments Rule)**: Seluruh file kode (HTML, CSS, JS) tidak boleh memuat komentar dalam bentuk apa pun (`<!-- -->`, `/* */`, `//`). Kode ditulis bersih, ekspresif, dan swa-jelas (*self-explanatory*).
- **Single Landing Page Format**: Seluruh alur showcase disatukan dalam satu halaman imersif di `src/index.html` dengan navigasi anchor scroll yang mulus antar section.
- **Lokasi Kode di `/src`**: Semua file HTML, CSS, JS, komponen, dan aset diletakkan di dalam folder `/src/`.
- **Aset Lokal Otentik**: Menggunakan aset gambar resmi game yang tersedia di folder `src/assets/images/` dan `src/assets/web/hero.png`.
- **Preloader 1930s**: Menampilkan layar pembuka vintage dengan cangkir di bawah sorot lampu proyektor kartun.
- **Section Video Trailer**: Kotak khusus di bagian tengah layar untuk menayangkan cuplikan video trailer dengan caption retro.

---

## 3. ✨ Susunan Alur Section Landing Page

| Section | ID | Konten & Fungsi |
|---|---|---|
| ⏳ **Preloader** | `#preloader` | Animasi cangkir porselen vintage di bawah sorotan lampu proyektor kartun 1930-an |
| 🎬 **Hero Section** | `#hero` | Banner utama dengan aset resmi `hero.png`, tagline dramatis, dan tombol aksi |
| 📺 **Video Trailer** | `#trailer` | Kotak frame layar televisi/proyektor retro 1930-an untuk video trailer + caption |
| 📜 **The Story** | `#story` | Narasi taruhan jiwa di Devil's Casino dan petualangan di Inkwell Isles |
| 🎭 **Characters** | `#characters` | Showcase Cuphead, Mugman, Ms. Chalice, dan Chef Saltbaker dengan aset resmi |
| 🎮 **Gameplay** | `#gameplay` | Mekanik pertarungan bos, Run & Gun, serta Parry Slap berbasis sprite asli |
| 🍰 **The Delicious Last Course** | `#dlc` | Showcase ekspansi DLC berlatar Saltbaker's Bakery & pulau baru |
| ⬇️ **Play Now** | `#play` | Tautan resmi ke store Steam, Xbox, PlayStation, dan Nintendo Switch |
| 📄 **Footer** | `footer` | Informasi hak cipta resmi Studio MDHR dan kredit tim lomba |

---

## 4. 🛠️ Teknologi & Dependencies yang Digunakan

- **HTML5 & CSS3 Murni**: Vanilla CSS modular berbasis CSS Custom Properties tanpa framework CSS pihak ketiga.
- **Vanilla JavaScript (ES Modules)**: Terstruktur secara modular mengikuti prinsip SOLID.
- **Lenis 1.1.13**: Momentum smooth scrolling.
- **GSAP 3.12.5 + ScrollTrigger**: Orchestrasi animasi timeline scroll.
- **Scroll-Craft**: Standar scrollytelling profesional (*scroll is the timeline*).
- **Impeccable**: Standar kualitas desain anti-slop dan detektor UI (`npx impeccable detect src/`).

---

## 5. 🚀 Menjalankan Secara Lokal

```bash
# 1. Jalankan server lokal
npm run dev
# atau:
npx serve src -l 3000
```

Buka peramban di `http://localhost:3000`.

---

## 6. 📄 Lisensi (License)

**Cuphead © Studio MDHR.** Website ini adalah tribute/fan-made showcase yang dibuat khusus untuk keperluan non-komersial (**Lomba Web Development IT FEST 2026**) dan **tidak berafiliasi resmi** dengan Studio MDHR. Seluruh cuplikan video resmi, musik, dan karakter merupakan hak cipta Studio MDHR.
