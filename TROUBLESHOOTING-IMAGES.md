# 🖼️ Troubleshooting Gambar Tidak Muncul

## Di GitHub Pages

### Masalah: Gambar muncul placeholder / tidak load

**Penyebab:** Base path di `vite.config.ts` tidak sesuai dengan nama repository.

**Solusi:**

1. Cek nama repository GitHub Anda
2. Edit `vite.config.ts` line 8:

```typescript
// Jika repo bernama "warung-saya"
base: process.env.GITHUB_ACTIONS ? '/warung-saya/' : '/',

// Jika repo bernama "kuliner-template"
base: process.env.GITHUB_ACTIONS ? '/kuliner-template/' : '/',
```

3. Commit dan push:
```bash
git add vite.config.ts
git commit -m "Fix base path for GitHub Pages"
git push
```

4. Tunggu GitHub Actions selesai rebuild (2-3 menit)
5. Hard refresh browser: `Ctrl + Shift + R`

### Verifikasi Base Path Benar

Buka DevTools (F12) > Console, paste ini:
```javascript
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Current URL:', window.location.pathname);
```

Base URL harus sama dengan path di URL.

**Contoh:**
- URL: `https://username.github.io/warung-saya/`
- Base URL harus: `/warung-saya/`

---

## Di Local Development

### Masalah: Gambar tidak muncul saat `bun run dev`

**Solusi:**

1. Pastikan gambar ada di folder `public/assets/`
2. Restart dev server:
```bash
# Stop (Ctrl+C), lalu:
bun run dev
```

3. Hard refresh browser: `Ctrl + Shift + R`

### Verifikasi File Exists

```bash
# Windows PowerShell
Get-ChildItem public/assets/menu/
Get-ChildItem public/assets/gallery/

# Mac/Linux
ls public/assets/menu/
ls public/assets/gallery/
```

---

## Setelah Build

### Masalah: Gambar tidak ada di folder `dist/`

**Solusi:**

1. Pastikan gambar di folder `public/`, bukan `src/`
2. Build ulang:
```bash
bun run build
```

3. Cek folder dist:
```bash
Get-ChildItem dist/assets/
```

Seharusnya ada folder `menu/`, `gallery/`, dan file `logo.jpg`, `hero.jpg`, `og.jpg`.

---

## Di Hosting Lain (Netlify, Vercel)

### Masalah: Gambar tidak muncul setelah deploy

**Untuk Netlify/Vercel dengan custom domain atau root path:**

Edit `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Root path untuk custom domain
});
```

**Untuk subdirectory deployment:**
```typescript
// Deploy di: https://example.com/warung/
base: '/warung/',
```

---

## Path Gambar di site.ts

✅ **Benar:**
```typescript
logo: "/assets/logo.jpg",
image: "/assets/menu/menu-1.jpg",
```

❌ **Salah:**
```typescript
logo: "assets/logo.jpg",  // Tanpa leading slash
image: "../public/assets/menu/menu-1.jpg",  // Path relatif
image: "src/assets/menu/menu-1.jpg",  // Dalam src folder
```

---

## Debug Console Errors

Buka Console (F12), cari error seperti ini:

### Error 404
```
GET https://username.github.io/assets/logo.jpg 404 (Not Found)
```

**Solusi:** Base path salah, gambar seharusnya di `/repo-name/assets/logo.jpg`

### Error CORS
```
Access to image at '...' from origin '...' has been blocked by CORS policy
```

**Solusi:** Ganti dari external URL ke local file di `public/assets/`

### Error Network
```
Failed to load resource: net::ERR_NAME_NOT_RESOLVED
```

**Solusi:** Cek koneksi internet, atau URL gambar salah

---

## Checklist Final

Sebelum deploy, pastikan:

- [ ] Semua gambar ada di `public/assets/`
- [ ] Path di `site.ts` pakai leading slash: `/assets/...`
- [ ] Base path di `vite.config.ts` sesuai nama repo
- [ ] Test build lokal: `bun run build && bun run preview`
- [ ] Cek folder `dist/assets/` berisi semua gambar
- [ ] GitHub Actions workflow sukses (hijau ✓)
- [ ] Hard refresh di browser setelah deploy

---

## Masih Bermasalah?

1. Clear browser cache completely
2. Try incognito/private mode
3. Cek Network tab di DevTools
4. Liat GitHub Actions logs untuk error
5. Pastikan repo Settings > Pages sudah aktif

---

**Pro Tip:** Component `ImageWithFallback` otomatis handle base path, jadi Anda tidak perlu ubah path di `site.ts`. Cukup pastikan `vite.config.ts` base path benar! ✨
