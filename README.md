# UMKM Kuliner Template

Template website statis untuk 1 UMKM kategori kuliner. Cukup edit data di satu file dan pilih layout A-E.

## Cara jalanin lokal

```bash
npm install
npm run dev
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
  theme: "saffron", // "saffron" | "bamboo" | "rose" | "ocean" | "nightmarket"
}
```

## Cara ganti gambar

Taruh gambar ke folder berikut:

- public/assets/logo.png
- public/assets/hero.jpg
- public/assets/menu/*
- public/assets/gallery/*
- public/assets/og.jpg

Lalu sesuaikan path di [src/content/site.ts](src/content/site.ts).

## Deploy GitHub Pages

1. Build static:

```bash
npm run build
```

2. Upload isi folder `dist/` ke branch `gh-pages`.
3. Di GitHub repo settings, set Pages ke branch `gh-pages` root.

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
