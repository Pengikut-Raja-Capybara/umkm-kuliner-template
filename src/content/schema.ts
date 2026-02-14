import type { SiteData } from "../types";

export const siteSchema: SiteData = {
  brand: {
    name: "",
    tagline: "",
    logo: "",
  },
  contact: {
    whatsapp: "",
    address: "",
    mapsUrl: "",
    openHours: "",
  },
  social: {
    instagram: "",
    facebook: "",
    x: "",
    tiktok: "",
  },
  menuItems: [],
  promo: {
    title: "",
    description: "",
    badge: "",
    waMessage: "",
  },
  seo: {
    title: "",
    description: "",
    ogImage: "",
  },
  story: {
    title: "",
    text: "",
    image: "",
    highlights: [],
  },
  orderSteps: {
    title: "",
    steps: [],
  },
  testimonials: [],
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
    theme: "saffron",
  },
  galleryImages: [],
};
