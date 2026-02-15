import Container from "../components/Container";
import Button from "../components/Button";
import ImageWithFallback from "../components/ImageWithFallback";
import { buildWaLink } from "../lib/wa";
import type { Brand, Features } from "../types";

type NavbarProps = {
  brand: Brand;
  phone: string;
  features: Features;
  promoEnabled: boolean;
  navItems?: { label: string; href: string }[];
};

const Navbar = ({ brand, phone, features, promoEnabled, navItems }: NavbarProps) => {
  const defaultItems = [
    { label: "Menu", href: "#menu" },
    promoEnabled ? { label: "Promo", href: "#promo" } : null,
    { label: "Tentang", href: "#about" },
    features.testimonials ? { label: "Ulasan", href: "#reviews" } : null,
    features.maps ? { label: "Lokasi", href: "#location" } : null,
    features.contactQuick ? { label: "Kontak", href: "#contact" } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  const menuItems = navItems ?? defaultItems;

  return (
    <nav className="sticky top-0 z-20 border-b border-[var(--stroke)]/40 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <div className="flex items-center gap-3">
          <ImageWithFallback src={brand.logo} alt={brand.name} className="h-12 w-12 rounded-xl object-cover shadow-md ring-2 ring-[var(--primary)]/20" />
          <div>
            <span className="block text-lg font-bold text-[var(--text)]">{brand.name}</span>
            <span className="text-xs text-[var(--muted)] hidden sm:block">{brand.tagline}</span>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-[var(--primary)]">
              {item.label}
            </a>
          ))}
        </div>
        <Button className="w-full md:w-auto" href={buildWaLink(phone, "Halo! Saya mau pesan.")}>
          Pesan WA
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
