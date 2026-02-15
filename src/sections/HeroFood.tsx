import Container from "../components/Container";
import Button from "../components/Button";
import ImageWithFallback from "../components/ImageWithFallback";
import { buildWaLink } from "../lib/wa";
import type { Brand } from "../types";

type HeroFoodProps = {
  brand: Brand;
  heroImage: string;
  phone: string;
};

const HeroFood = ({ brand, heroImage, phone }: HeroFoodProps) => {
  return (
    <section className="relative flex min-h-[65vh] items-center overflow-hidden text-white lg:min-h-[75vh]">
      <ImageWithFallback
        src={heroImage}
        alt={brand.name}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(21,14,10,0.88)_0%,rgba(217,119,6,0.15)_50%,rgba(21,14,10,0.65)_100%)]" />
      <Container className="relative z-10 max-w-2xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 backdrop-blur">✦ Kuliner rumahan pilihan</p>
        <h1 className="mt-5 text-5xl font-serif leading-tight md:text-6xl lg:text-7xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">{brand.name}</h1>
        <p className="mt-4 text-lg text-amber-50/90 md:text-xl drop-shadow-lg">{brand.tagline}</p>
        <div className="mt-10 flex w-full flex-wrap gap-5">
          <Button href={buildWaLink(phone, "Halo! Saya mau pesan menu favorit.")}>Pesan via WA</Button>
          <Button
            href="#menu"
            variant="outline"
          >
            Lihat Menu
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroFood;
