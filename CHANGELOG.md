# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-02-15

### 🎉 Initial Release

First release of UMKM Kuliner Template - template website modern untuk usaha kuliner Indonesia.

### ✨ Features

#### Layouts & Themes
- 5 layout configurations (A, B, C, D, E) untuk berbagai kebutuhan
- 19 tema warna profesional untuk berbagai jenis kuliner:
  - 🌾 Saffron (Orange - Default)
  - 🎋 Bamboo (Green - Vegetarian)
  - 🌹 Rose (Pink/Red - Romantic)
  - 🌊 Ocean (Blue - Seafood)
  - 🏮 Night Market (Amber - Street Food)
  - 🍊 Citrus (Orange - Fresh)
  - 🏺 Terra (Brown - Rustic)
  - 🦐 Seafood (Turquoise)
  - 🥩 Steakhouse (Burgundy)
  - 🌸 Sakura (Japanese)
  - 🇮🇹 Italiano (Italian)
  - 🌮 Fiesta (Mexican)
  - 🧁 Lavender (Dessert/Bakery)
  - 🍵 Matcha (Green Tea/Healthy)
  - ☕ Mocha (Coffee Shop)
  - 🍔 Crimson (Fast Food)
  - 🌶️ Spice (Hot & Spicy)
  - 🌿 Mint (Fresh/Healthy)
  - 🌅 Sunset (Fusion)
- Floating collapsible theme switcher (kiri bawah)

#### Components
- **Navbar** - Sticky navigation dengan logo, menu links, dan CTA WhatsApp
- **Hero** - Full-screen hero dengan animated background dan dual CTA buttons
- **Topbar** - Info bar dengan jam buka, alamat, dan social icons
- **BestMenu** - Grid/scroll menu cards dengan filter kategori dan image modal
- **PromoBanner** - Highlighted promo section dengan gradient background
- **AboutStory** - Brand story dengan gallery dan highlight badges
- **OrderSteps** - Step-by-step ordering instructions dengan numbered cards
- **Testimonials** - Customer reviews dengan rating stars
- **LocationMaps** - Embedded Google Maps dengan info lokasi
- **ContactQuick** - Quick contact CTA section
- **Footer** - Footer dengan brand info dan social links
- **FloatingWA** - Mobile-only floating WhatsApp button (kanan bawah)

#### Design System
- Modern gradient backgrounds dan text effects
- Deep shadows dengan blur effects
- Smooth hover animations (scale, translate, brightness)
- Rounded corners (2xl, 3xl untuk card premium)
- Border glow effects dengan opacity variants
- Backdrop blur untuk glass morphism
- Motion-safe animations (respectful to user preferences)
- Professional typography dengan DM Sans & Fraunces serif

#### Technical Features
- React 19 dengan TypeScript
- Tailwind CSS 4 dengan JIT compiler
- Vite 7 build tool dengan SWC compiler
- Bun runtime & package manager untuk performa maksimal
- Responsive design (mobile-first approach)
- Image optimization dengan fallback handling
- SEO-friendly structure
- WhatsApp deep linking integration
- Google Maps embed support
- Animation keyframes (page-fade, rise-in, subtle-zoom)

#### Developer Experience
- Single file content management (`src/content/site.ts`)
- Type-safe configuration dengan TypeScript
- Auto-deploy dengan GitHub Actions workflow
- Comprehensive documentation:
  - README.md - Quick start guide
  - DEPLOYMENT.md - Multi-platform deployment guide
  - TROUBLESHOOTING-IMAGES.md - Image issues guide
- Support untuk Bun, npm, yarn, pnpm
- Hot Module Replacement (HMR) untuk development

#### Deployment
- GitHub Pages ready dengan auto base-path handling
- Netlify & Vercel native Bun support
- Firebase Hosting compatible
- Docker setup dengan Nginx
- VPS/Shared hosting support
- Custom domain support

### 🐛 Bug Fixes
- Fixed gradient text clipping issue dengan padding-bottom
- Fixed GitHub Pages image loading dengan base-path resolver
- Fixed mobile switcher position (kiri bawah untuk menghindari WhatsApp button)

### 📝 Documentation
- Complete README dengan prerequisites dan tech stack
- Deployment guide untuk 6+ platforms
- Troubleshooting guide untuk common issues
- Inline JSDoc comments untuk better DX
- Example site.ts dengan comprehensive data

### 🛠️ Technical
- Bundle size optimization
- Tree-shaking untuk unused code
- CSS purging untuk production
- Image lazy loading
- Code splitting untuk better performance
- TypeScript strict mode enabled

### 🎨 Accessibility
- Semantic HTML structure
- ARIA labels untuk interactive elements
- Screen reader support dengan sr-only classes
- Keyboard navigation support
- Focus visible indicators
- Motion-safe utilities untuk reduced-motion users

---

## Links

- [GitHub Repository](https://github.com/username/umkm-kuliner-template)
- [Live Demo](https://username.github.io/umkm-kuliner-template/)
- [Documentation](https://github.com/username/umkm-kuliner-template#readme)

---

## Future Plans

### v0.1.0 (Planned)
- [ ] Multiple language support (ID/EN)
- [ ] Dark mode toggle
- [ ] Animation customization panel
- [ ] More layout variants (F, G, H)
- [ ] CMS integration (optional)
- [ ] E-commerce integration
- [ ] Blog section
- [ ] Reservation system

### v0.2.0 (Planned)
- [ ] Admin dashboard
- [ ] Form builder
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] A/B testing tools

---

**Template ini dibuat dengan ❤️ untuk UMKM Kuliner Indonesia**

© 2026 UMKM Kuliner Template
