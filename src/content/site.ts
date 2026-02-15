import type { SiteData } from "../types";

const site: SiteData = {
  brand: {
    name: "Warung Raja Capybara Kuliner",
    tagline: "Hangat, gurih, bikin kangen",
    logo: "/assets/logo.jpg",
  },
  contact: {
    whatsapp: "+62 812-3456-7890",
    address: "Jl. Melati No. 24, Depok",
    mapsUrl: "https://maps.google.com/?q=Jl.%20Melati%20No.%2024%20Depok",
    openHours: "Setiap hari 10.00 - 21.30",
    mapsEmbed: "https://www.google.com/maps?q=Jl.%20Melati%20No.%2024%20Depok&output=embed",
  },
  social: {
    instagram: "https://instagram.com/warungrajacapybarakuliner",
    facebook: "https://facebook.com/warungrajacapybarakuliner",
    x: "https://x.com/warungrajacapybara",
    tiktok: "https://tiktok.com/@warungrajacapybarakuliner",
  },
  menuItems: [
    {
      name: "Nasi Ayam Bakar",
      description: "Ayam bakar bumbu madu, nasi hangat, sambal terasi.",
      price: "Rp 28.000",
      image: "/assets/menu/menu-1.jpg",
      badge: "Best Seller",
      category: "Makanan",
      popular: true,
    },
    {
      name: "Sate Maranggi",
      description: "Sate sapi empuk dengan bumbu kecap pedas manis.",
      price: "Rp 30.000",
      image: "/assets/menu/menu-2.jpg",
      category: "Makanan",
      popular: true,
    },
    {
      name: "Paket Hemat Berdua",
      description: "2 nasi ayam + 2 es teh + kerupuk.",
      price: "Rp 55.000",
      image: "/assets/menu/menu-3.jpg",
      badge: "Paket",
      category: "Paket",
      popular: true,
    },
    {
      name: "Mie Tek Tek",
      description: "Mie goreng rumahan dengan sayur segar.",
      price: "Rp 22.000",
      image: "/assets/menu/menu-4.jpg",
      category: "Makanan",
    },
    {
      name: "Es Teh Kampung",
      description: "Teh hitam wangi, manis segar.",
      price: "Rp 8.000",
      image: "/assets/menu/menu-5.jpg",
      category: "Minuman",
    },
    {
      name: "Es Jeruk Peras",
      description: "Jeruk peras asli tanpa pemanis buatan.",
      price: "Rp 10.000",
      image: "/assets/menu/menu-6.jpg",
      category: "Minuman",
    },
    {
      name: "Tahu Crispy",
      description: "Renyan, gurih, pas untuk sharing.",
      price: "Rp 16.000",
      image: "/assets/menu/menu-7.jpg",
      category: "Snack",
    },
    {
      name: "Paket Hemat Keluarga",
      description: "4 nasi ayam + 4 es teh + sambal ekstra.",
      price: "Rp 98.000",
      image: "/assets/menu/menu-8.jpg",
      badge: "Paket",
      category: "Paket",
    },
  ],
  promo: {
    title: "Promo Hari Ini",
    description: "Paket hemat berdua + es teh, hemat 10 ribu.",
    badge: "Diskon",
    waMessage: "Halo! Saya mau ambil promo Paket Hemat Berdua hari ini.",
  },
  seo: {
    title: "Warung Raja Capybara Kuliner | Kuliner Rumahan",
    description: "Menu rumahan hangat, paket hemat, dan sambal khas. Pesan WA dan nikmati di rumah.",
    ogImage: "/assets/og.jpg",
  },
  story: {
    title: "Warisan Rasa dari Dapur Rumah",
    text: "Berawal di tahun 2018, kami percaya bahwa makanan terbaik lahir dari ketulusan resep keluarga. Di Warung Raja Capybara, setiap piring adalah cerita tentang bumbu segar yang diulek manual dan masakan yang disajikan hangat setiap hari. Kami tidak hanya menyajikan makanan, tapi juga rasa rindu akan masakan rumah yang halal, jujur, dan istimewa.",
    image: "/assets/gallery/space-1.jpg",
    highlights: ["Sejak 2018", "Halal", "Bumbu segar", "Ketulusan resep keluarga"],
  },
  orderSteps: {
    title: "Cara Pesan",
    steps: ["Chat WhatsApp", "Pilih menu favorit", "Kirim alamat"],
  },
  testimonials: [
    {
      name: "Dina",
      rating: 5,
      quote: "Ayam bakarnya legit, sambalnya nampol!",
    },
    {
      name: "Raka",
      rating: 5,
      quote: "Paket hematnya juara, porsinya pas.",
    },
    {
      name: "Sari",
      rating: 4,
      quote: "Mie tek-tek wangi dan gurih. Repeat order.",
    },
  ],
  features: {
    promo: true,
    testimonials: true,
    maps: true,
    orderSteps: true,
    topbar: true,
    floatingWa: true,
    contactQuick: true,
  },
  template: {
    layout: "A",
    theme: "citrus",
  },
  galleryImages: [
    "/assets/gallery/gallery-1.jpg",
    "/assets/gallery/gallery-2.jpg",
    "/assets/gallery/gallery-3.jpg",
    "/assets/gallery/gallery-4.jpg",
    "/assets/gallery/gallery-5.jpg",
    "/assets/gallery/gallery-6.jpg",
  ],
};

export default site;
