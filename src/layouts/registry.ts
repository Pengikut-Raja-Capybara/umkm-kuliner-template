import type { LayoutKey, SiteData } from "../types";

export type SectionName =
  | "Topbar"
  | "Navbar"
  | "HeroFood"
  | "BestMenu"
  | "PromoBanner"
  | "AboutStory"
  | "OrderSteps"
  | "Testimonials"
  | "LocationMaps"
  | "ContactQuick"
  | "Footer"
  | "FloatingWA";

export type LayoutSection = {
  name: SectionName;
  enabled?: boolean;
  props?: Record<string, unknown>;
};

export const createLayoutRegistry = (site: SiteData): Record<LayoutKey, LayoutSection[]> => {
  const promoEnabled = site.features.promo && Boolean(site.promo);

  const buildNavItems = (options: {
    includeMenu?: boolean;
    includePromo?: boolean;
    includeAbout?: boolean;
    includeReviews?: boolean;
    includeLocation?: boolean;
    includeContact?: boolean;
  }) => {
    return [
      options.includeMenu ? { label: "Menu", href: "#menu" } : null,
      options.includePromo ? { label: "Promo", href: "#promo" } : null,
      options.includeAbout ? { label: "Tentang", href: "#about" } : null,
      options.includeReviews ? { label: "Ulasan", href: "#reviews" } : null,
      options.includeLocation ? { label: "Lokasi", href: "#location" } : null,
      options.includeContact ? { label: "Kontak", href: "#contact" } : null,
    ].filter(Boolean) as { label: string; href: string }[];
  };

  const baseProps = {
    hero: {
      brand: site.brand,
      heroImage: "/assets/hero.jpg",
      phone: site.contact.whatsapp,
    },
    menu: {
      items: site.menuItems,
      phone: site.contact.whatsapp,
    },
    promo: {
      promo: site.promo,
      phone: site.contact.whatsapp,
    },
  };

  return {
    A: [
      {
        name: "Topbar",
        enabled: site.features.topbar,
        props: {
          openHours: site.contact.openHours,
          address: site.contact.address,
          social: site.social,
        },
      },
      {
        name: "Navbar",
        props: {
          brand: site.brand,
          phone: site.contact.whatsapp,
          features: site.features,
          promoEnabled,
          navItems: buildNavItems({
            includeMenu: true,
            includePromo: promoEnabled,
            includeAbout: true,
            includeReviews: site.features.testimonials,
            includeLocation: site.features.maps,
            includeContact: site.features.contactQuick,
          }),
        },
      },
      { name: "HeroFood", props: baseProps.hero },
      {
        name: "BestMenu",
        props: {
          title: "Best Menu",
          sectionId: "menu",
          maxItems: 6,
          showCategories: true,
          ...baseProps.menu,
        },
      },
      {
        name: "PromoBanner",
        enabled: promoEnabled,
        props: baseProps.promo,
      },
      {
        name: "AboutStory",
        props: {
          story: site.story,
        },
      },
      {
        name: "OrderSteps",
        enabled: site.features.orderSteps,
        props: site.orderSteps,
      },
      {
        name: "Testimonials",
        enabled: site.features.testimonials,
        props: {
          items: site.testimonials,
        },
      },
      {
        name: "LocationMaps",
        enabled: site.features.maps,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "ContactQuick",
        enabled: site.features.contactQuick,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "Footer",
        props: {
          brand: site.brand,
          contact: site.contact,
          social: site.social,
        },
      },
      {
        name: "FloatingWA",
        enabled: site.features.floatingWa,
        props: {
          phone: site.contact.whatsapp,
          message: "Halo! Saya mau pesan.",
        },
      },
    ],
    B: [
      {
        name: "PromoBanner",
        enabled: promoEnabled,
        props: baseProps.promo,
      },
      {
        name: "Navbar",
        props: {
          brand: site.brand,
          phone: site.contact.whatsapp,
          features: site.features,
          promoEnabled,
          navItems: buildNavItems({
            includeMenu: true,
            includePromo: promoEnabled,
            includeAbout: false,
            includeReviews: site.features.testimonials,
            includeLocation: site.features.maps,
            includeContact: false,
          }),
        },
      },
      { name: "HeroFood", props: baseProps.hero },
      {
        name: "BestMenu",
        props: {
          title: "Paket Hemat",
          sectionId: "menu",
          filterCategory: "Paket",
          maxItems: 6,
          ...baseProps.menu,
        },
      },
      {
        name: "BestMenu",
        props: {
          title: "Menu Populer",
          sectionId: undefined,
          sortBy: "popular",
          maxItems: 6,
          ...baseProps.menu,
        },
      },
      {
        name: "Testimonials",
        enabled: site.features.testimonials,
        props: {
          items: site.testimonials,
          variant: "rating",
        },
      },
      {
        name: "LocationMaps",
        enabled: site.features.maps,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "ContactQuick",
        enabled: site.features.contactQuick,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "Footer",
        props: {
          brand: site.brand,
          contact: site.contact,
          social: site.social,
        },
      },
      {
        name: "FloatingWA",
        enabled: site.features.floatingWa,
        props: {
          phone: site.contact.whatsapp,
          message: "Halo! Saya mau pesan promo.",
        },
      },
    ],
    C: [
      {
        name: "Navbar",
        props: {
          brand: site.brand,
          phone: site.contact.whatsapp,
          features: site.features,
          promoEnabled,
          navItems: buildNavItems({
            includeMenu: true,
            includePromo: false,
            includeAbout: true,
            includeReviews: false,
            includeLocation: site.features.maps,
            includeContact: false,
          }),
        },
      },
      { name: "HeroFood", props: baseProps.hero },
      {
        name: "AboutStory",
        props: {
          story: site.story,
          galleryImages: site.galleryImages,
        },
      },
      {
        name: "BestMenu",
        props: {
          title: "Menu Favorit",
          sectionId: "menu",
          variant: "scroll",
          maxItems: 8,
          ...baseProps.menu,
        },
      },
      {
        name: "LocationMaps",
        enabled: site.features.maps,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "ContactQuick",
        enabled: site.features.contactQuick,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "Footer",
        props: {
          brand: site.brand,
          contact: site.contact,
          social: site.social,
        },
      },
      {
        name: "FloatingWA",
        enabled: site.features.floatingWa,
        props: {
          phone: site.contact.whatsapp,
          message: "Halo! Saya mau pesan.",
        },
      },
    ],
    D: [
      { name: "HeroFood", props: baseProps.hero },
      {
        name: "BestMenu",
        props: {
          title: "Menu Andalan",
          sectionId: "menu",
          maxItems: 6,
          ...baseProps.menu,
        },
      },
      {
        name: "PromoBanner",
        enabled: promoEnabled,
        props: baseProps.promo,
      },
      {
        name: "Testimonials",
        enabled: site.features.testimonials,
        props: {
          items: site.testimonials,
        },
      },
      {
        name: "LocationMaps",
        enabled: site.features.maps,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "ContactQuick",
        enabled: site.features.contactQuick,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "Footer",
        props: {
          brand: site.brand,
          contact: site.contact,
          social: site.social,
        },
      },
      {
        name: "FloatingWA",
        enabled: site.features.floatingWa,
        props: {
          phone: site.contact.whatsapp,
          message: "Halo! Saya mau pesan.",
        },
      },
    ],
    E: [
      { name: "HeroFood", props: baseProps.hero },
      {
        name: "BestMenu",
        props: {
          title: "Menu Favorit",
          sectionId: "menu",
          maxItems: 4,
          ...baseProps.menu,
        },
      },
      {
        name: "ContactQuick",
        enabled: site.features.contactQuick,
        props: {
          contact: site.contact,
        },
      },
      {
        name: "Footer",
        props: {
          brand: site.brand,
          contact: site.contact,
          social: site.social,
        },
      },
      {
        name: "FloatingWA",
        enabled: site.features.floatingWa,
        props: {
          phone: site.contact.whatsapp,
          message: "Halo! Saya mau pesan.",
        },
      },
    ],
  };
};
