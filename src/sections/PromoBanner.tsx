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
    <Section id="promo" className="bg-[var(--primary)] text-white">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white/10 p-6 md:p-10">
          <div className="max-w-xl">
            <Badge variant="solid">{promo.badge}</Badge>
            <h2 className="mt-4 text-3xl font-serif md:text-4xl">{promo.title}</h2>
            <p className="mt-2 text-amber-100">{promo.description}</p>
          </div>
          <Button
            href={buildWaLink(phone, promo.waMessage)}
            className="border-white/60 bg-white/10 text-white"
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
