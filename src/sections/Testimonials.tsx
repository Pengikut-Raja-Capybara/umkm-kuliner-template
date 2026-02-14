import Container from "../components/Container";
import Section from "../components/Section";
import RatingStars from "../components/RatingStars";
import type { Testimonial } from "../types";

type TestimonialsProps = {
  items: Testimonial[];
  variant?: "default" | "rating";
};

const Testimonials = ({ items, variant = "default" }: TestimonialsProps) => {
  const average = items.length
    ? items.reduce((total, item) => total + item.rating, 0) / items.length
    : 0;

  return (
    <Section id="reviews">
      <Container>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--primary-dark)]">
              Apa kata mereka
            </p>
            <h2 className="mt-2 text-3xl font-serif">Ulasan pelanggan</h2>
          </div>
          {variant === "rating" && (
            <div className="flex flex-col items-end gap-1">
              <span className="text-3xl font-bold">{average.toFixed(1)}</span>
              <RatingStars rating={average} />
              <span className="text-sm text-[var(--muted)]">{items.length} ulasan</span>
            </div>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="rounded-2xl border border-[var(--stroke)] bg-white p-6">
              <RatingStars rating={item.rating} />
              <p className="mt-3 italic text-[var(--text)]">"{item.quote}"</p>
              <span className="mt-4 block font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
