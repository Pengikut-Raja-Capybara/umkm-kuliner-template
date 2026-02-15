# 🚀 Panduan Deployment

Panduan lengkap untuk deploy UMKM Kuliner Template ke berbagai platform.

---

## � Requirements

- **Bun** v1.0+ ([Install Bun](https://bun.sh/docs/installation))
- Git untuk version control
- Account GitHub/Netlify/Vercel (untuk deployment)

---

## �📋 Persiapan Sebelum Deploy

### 1. Pastikan semua konten sudah diupdate
- ✅ Edit `src/content/site.ts` dengan data bisnis Anda
- ✅ Ganti semua gambar di folder `public/assets/`
- ✅ Test nomor WhatsApp (klik dari mobile)
- ✅ Verifikasi link Google Maps
- ✅ Pilih layout dan tema yang sesuai

### 2. Test di local
```bash
bun run build
bun run preview
```

Buka http://localhost:4173 untuk test production build.

---

## 🌐 GitHub Pages (Recommended)

### ⚡ Otomatis dengan GitHub Actions

**Langkah 1:** Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

**Langkah 2:** Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Klik **Settings** (tab atas)
3. Scroll ke bagian **Pages** (menu kiri)
4. Di **Source**, pilih: **GitHub Actions**
5. Tunggu beberapa menit, workflow akan berjalan otomatis

**Langkah 3:** Akses website
Website akan tersedia di:
```
https://<username>.github.io/<repo-name>/
```

**Catatan:** Setiap push ke branch `main` akan otomatis rebuild dan deploy.

### 🔧 Update Base Path (Penting!)

**Jika nama repository BUKAN `umkm-kuliner-template`**, edit `vite.config.ts` baris 8:

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_ACTIONS ? '/<NAMA-REPO-ANDA>/' : '/',
});
```

**Contoh:** Jika repository bernama `warung-saya`, ubah jadi:
```typescript
base: process.env.GITHUB_ACTIONS ? '/warung-saya/' : '/',
```

**⚠️ Penting:** Base path harus sama dengan nama repository, jika tidak gambar dan asset tidak akan muncul!

### ✅ Verifikasi Deploy

Setelah deploy selesai, cek:
1. Website bisa diakses di `https://<username>.github.io/<repo-name>/`
2. Gambar semua muncul (bukan placeholder)
3. Link WhatsApp dan Maps berfungsi
4. Test di mobile

Jika gambar tidak muncul, pastikan `base` di `vite.config.ts` sudah sesuai nama repo!

---

## 🌍 Netlify

### Via Drag & Drop

1. Build project:
```bash
bun run build
```

2. Buka [Netlify Drop](https://app.netlify.com/drop)
3. Drag folder `dist/` ke halaman tersebut
4. Website langsung live!

### Via Git Repository

1. Connect repository GitHub ke Netlify
2. Settings:
   - **Build command:** `bun run build`
   - **Publish directory:** `dist`
3. Deploy otomatis setiap push

**Note:** Netlify mendukung Bun secara native. Build akan otomatis menggunakan Bun jika `bun.lockb` terdeteksi.

---

## ▲ Vercel

### Via CLI

```bash
bun install -g vercel
vercel login
vercel
```

### Via Dashboard

1. Import repository dari GitHub
2. Settings akan otomatis terdeteksi (Vite + Bun)
3. Deploy!

**Note:** Vercel mendukung Bun secara native. Pastikan file `bun.lockb` ada di repository.

---

## 🔥 Firebase Hosting

### Setup

```bash
bun install -g firebase-tools
firebase login
firebase init hosting
```

Pilih:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No` (atau setup GitHub Actions)

### Deploy

```bash
bun run build
firebase deploy
```

---

## 🐳 Docker + Nginx

### Dockerfile

```dockerfile
# Build stage
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build & Run

```bash
docker build -t umkm-kuliner .
docker run -p 80:80 umkm-kuliner
```

---

## 🖥️ VPS / Shared Hosting

### Upload Manual

1. Build project:
```bash
bun run build
```

2. Upload semua file di folder `dist/` ke public_html atau www di hosting

3. Jika menggunakan subdirectory (misal: domain.com/kuliner/), edit `vite.config.ts`:
```typescript
base: '/kuliner/'
```
Lalu build ulang.

### Via FTP

Gunakan FileZilla atau FTP client lainnya untuk upload folder `dist/`.

---

## ⚙️ Custom Domain

### GitHub Pages

1. Buat file `CNAME` di folder `public/`:
```
www.warunganda.com
```

2. Di DNS provider, tambah record:
```
Type: CNAME
Name: www
Value: <username>.github.io
```

3. Di GitHub repo Settings > Pages, masukkan custom domain

### Netlify / Vercel

Dashboard → Domain Settings → Add custom domain

---

## 🔍 SEO & Performance

Setelah deploy, optimalkan:

1. **Google Search Console**
   - Submit sitemap
   - Verifikasi kepemilikan

2. **Performance**
   - Test di [PageSpeed Insights](https://pagespeed.web.dev/)
   - Compress gambar (gunakan WebP)

3. **Social Media**
   - Update `public/assets/og.jpg` (1200x630px)
   - Test dengan [Facebook Debugger](https://developers.facebook.com/tools/debug/)

---

## 🐛 Troubleshooting

### Gambar tidak muncul
- Pastikan path gambar benar di `site.ts`
- Gambar harus ada di folder `public/assets/`

### Routing error (404)
- Ini single-page app, tidak ada routing error
- Jika deploy di subdirectory, set `base` di `vite.config.ts`

### WhatsApp link tidak berfungsi
- Format: `+62` + nomor tanpa 0 di depan
- Test dari mobile device

### CSS tidak load
- Clear cache browser (Ctrl+Shift+Delete)
- Build ulang dengan `bun run build`

---

## 📞 Support

Jika ada masalah deployment, cek:
1. Build log di GitHub Actions
2. Console browser (F12)
3. Network tab untuk error loading assets

---

**Happy Deploying! 🎉**

© 2026 UMKM Kuliner Template
