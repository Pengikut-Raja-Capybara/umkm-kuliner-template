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
    <section className="relative flex min-h-[60vh] items-center overflow-hidden text-white lg:min-h-[70vh]">
      <ImageWithFallback
        src={heroImage}
        alt={brand.name}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(21,14,10,0.85),rgba(21,14,10,0.45))]" />
      <Container className="relative z-10 max-w-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Kuliner rumahan pilihan</p>
        <h1 className="mt-2 text-4xl font-serif md:text-5xl lg:text-6xl">{brand.name}</h1>
        <p className="mt-3 text-base text-amber-100">{brand.tagline}</p>
        <div className="mt-8 flex w-full flex-wrap gap-4">
          <Button href={buildWaLink(phone, "Halo! Saya mau pesan menu favorit.")}>Pesan via WA</Button>
          <Button
            href="#menu"
            variant="outline"
            className="border-white/80 text-white bg-white/10"
          >
            Lihat Menu
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroFood;
