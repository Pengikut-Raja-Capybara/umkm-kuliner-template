import Container from "../components/Container";
import Section from "../components/Section";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { buildWaLink } from "../lib/wa";
import type { Promo } from "../types";

type PromoBannerProps = {
  promo: Promo;
  phone: string;
};

const PromoBanner = ({ promo, phone }: PromoBannerProps) => {
  return (
    <Section id="promo" className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white,transparent_50%)]" />
      <Container className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[2rem] border border-white/20 bg-white/15 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-12">
          <div className="max-w-xl">
            <Badge variant="solid">{promo.badge}</Badge>
            <h2 className="mt-5 text-4xl font-serif leading-tight md:text-5xl drop-shadow-lg">{promo.title}</h2>
            <p className="mt-3 text-lg text-white/90 leading-relaxed">{promo.description}</p>
          </div>
          <Button
            href={buildWaLink(phone, promo.waMessage)}
            variant="outline"
          >
            Ambil Promo
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default PromoBanner;
