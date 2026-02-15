# UMKM Kuliner Template

Template website statis untuk 1 UMKM kategori kuliner. Cukup edit data di satu file dan pilih layout A-E.

## ⚡ Teknologi

- **Bun** - Fast JavaScript runtime & package manager
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Vite 7** - Build tool dengan SWC compiler

## 📝 Prerequisites

Install Bun terlebih dahulu:

```bash
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1|iex"

# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Atau via npm
npm install -g bun
```

## Cara jalanin lokal

```bash
bun install
bun run dev
```

## Cara edit konten

Hanya edit file ini:

- [src/content/site.ts](src/content/site.ts)

Semua data brand, menu, promo, dan kontak ada di sana.

## Cara pilih layout dan theme

Di [src/content/site.ts](src/content/site.ts) ubah:

```ts
template: {
  layout: "A", // "A" | "B" | "C" | "D" | "E"
  theme: "citrus", // Lihat daftar tema di bawah
}
```

## Tema warna tersedia (19 tema)

1. 🌾 **saffron** - Orange/Amber (Default) - Kuliner tradisional
2. 🎋 **bamboo** - Green - Vegetarian, Healthy food
3. 🌹 **rose** - Pink/Red - Romantic dining
4. 🌊 **ocean** - Blue - Seafood
5. 🏮 **nightmarket** - Amber/Brown - Street food
6. 🍊 **citrus** - Orange - Fresh & vibrant
7. 🏺 **terra** - Brown - Rustic, organic
8. 🦐 **seafood** - Turquoise - Seafood, Sushi
9. 🥩 **steakhouse** - Burgundy - Western, BBQ, Steak
10. 🌸 **sakura** - Pink - Japanese cuisine
11. 🇮🇹 **italiano** - Green/Red - Italian, Pizza, Pasta
12. 🌮 **fiesta** - Red/Yellow - Mexican, Taco
13. 🧁 **lavender** - Purple - Dessert, Bakery, Pastry
14. 🍵 **matcha** - Green Tea - Cafe, Healthy
15. ☕ **mocha** - Coffee Brown - Coffee shop
16. 🍔 **crimson** - Red/Yellow - Fast food, Burger
17. 🌶️ **spice** - Orange/Red - Hot & Spicy food
18. 🌿 **mint** - Mint Green - Fresh, Salad
19. 🌅 **sunset** - Orange/Purple - Fusion dining

## Cara ganti gambar

Taruh gambar ke folder berikut:

- public/assets/logo.png
- public/assets/hero.jpg
- public/assets/menu/*
- public/assets/gallery/*
- public/assets/og.jpg

Lalu sesuaikan path di [src/content/site.ts](src/content/site.ts).

## Deploy ke GitHub Pages

### Cara 1: Otomatis dengan GitHub Actions (Recommended)

1. Push project ke GitHub repository
2. Buka **Settings** > **Pages** di repository GitHub
3. Di **Source**, pilih: **GitHub Actions**
4. Setiap push ke branch `main` akan otomatis deploy
5. Website akan live di: `https://<username>.github.io/<repo-name>/`

**⚠️ Penting:** Jika nama repository bukan `umkm-kuliner-template`, edit `vite.config.ts` line 8:
```typescript
base: process.env.GITHUB_ACTIONS ? '/<nama-repo-anda>/' : '/',
```
Ganti `<nama-repo-anda>` dengan nama repository yang sebenarnya!

### Cara 2: Manual Deploy

1. Build static:

```bash
bun run build
```

2. Upload isi folder `dist/` ke branch `gh-pages`
3. Di GitHub repo Settings > Pages, set source ke branch `gh-pages` root

### Cara 3: Deploy ke Hosting Lain (Netlify, Vercel, dll)

```bash
bun run build
```

Upload folder `dist/` atau connect repository untuk auto-deploy.

## Checklist sebelum publish

- Nomor WA sudah benar dan klikable
- Link Google Maps valid
- Semua gambar sudah diganti
- Cek mobile view
- Cek layout sesuai kebutuhan
- Menu dan harga sudah final

## Anchor section

Semua layout memakai single page dengan anchor berikut:

- #menu
- #promo
- #about
- #reviews
- #location
- #contact

## 🛠️ Tech Stack

- **Bun** - Runtime & package manager yang sangat cepat
- **React 19** - Library UI terbaru
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first styling dengan JIT
- **Vite 7** - Lightning fast build tool
- **SWC** - Super fast compiler

## 📚 Dokumentasi Lengkap

- [DEPLOYMENT.md](DEPLOYMENT.md) - Panduan deployment ke berbagai platform
- [TROUBLESHOOTING-IMAGES.md](TROUBLESHOOTING-IMAGES.md) - Fix gambar tidak muncul

---

© 2026 UMKM Kuliner Template
