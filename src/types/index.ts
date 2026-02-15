export type LayoutKey = "A" | "B" | "C" | "D" | "E";

export type ThemeKey =
  | "saffron"
  | "bamboo"
  | "rose"
  | "ocean"
  | "nightmarket"
  | "citrus"
  | "terra"
  | "seafood"
  | "steakhouse"
  | "sakura"
  | "italiano"
  | "fiesta"
  | "lavender"
  | "matcha"
  | "mocha"
  | "crimson"
  | "spice"
  | "mint"
  | "sunset";

export type Brand = {
  name: string;
  tagline: string;
  logo: string;
};

export type Contact = {
  whatsapp: string;
  address: string;
  mapsUrl: string;
  openHours: string;
  mapsEmbed?: string;
};

export type Social = {
  instagram?: string;
  facebook?: string;
  x?: string;
  tiktok?: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  image: string;
  badge?: string;
  category?: string;
  popular?: boolean;
};

export type Promo = {
  title: string;
  description: string;
  badge: string;
  waMessage: string;
};

export type Seo = {
  title: string;
  description: string;
  ogImage: string;
};

export type Story = {
  title: string;
  text: string;
  image: string;
  highlights?: string[];
};

export type OrderSteps = {
  title: string;
  steps: string[];
};

export type Testimonial = {
  name: string;
  rating: number;
  quote: string;
};

export type Features = {
  promo: boolean;
  testimonials: boolean;
  maps: boolean;
  orderSteps: boolean;
  topbar: boolean;
  floatingWa: boolean;
  contactQuick: boolean;
};

export type Template = {
  layout: LayoutKey;
  theme: ThemeKey;
};

export type SiteData = {
  brand: Brand;
  contact: Contact;
  social: Social;
  menuItems: MenuItem[];
  promo?: Promo;
  seo: Seo;
  story: Story;
  orderSteps: OrderSteps;
  testimonials: Testimonial[];
  features: Features;
  template: Template;
  galleryImages?: string[];
};
