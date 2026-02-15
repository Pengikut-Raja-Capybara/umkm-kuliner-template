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
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              ✦ Apa kata mereka
            </p>
            <h2 className="mt-3 pb-1 bg-gradient-to-r from-[var(--text)] to-[var(--primary-dark)] bg-clip-text text-4xl font-serif text-transparent lg:text-5xl">Ulasan pelanggan</h2>
          </div>
          {variant === "rating" && (
            <div className="flex flex-col items-end gap-2 rounded-3xl border border-[var(--stroke)]/30 bg-gradient-to-br from-white to-[var(--bg)] p-6 shadow-lg">
              <span className="pb-1 text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">{average.toFixed(1)}</span>
              <RatingStars rating={average} />
              <span className="text-sm text-[var(--muted)]">{items.length} ulasan</span>
            </div>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="group rounded-3xl border border-[var(--stroke)]/30 bg-gradient-to-br from-white to-[var(--bg)] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <RatingStars rating={item.rating} />
              <p className="mt-4 italic leading-relaxed text-[var(--text)]">"{item.quote}"</p>
              <span className="mt-5 block font-bold text-[var(--primary-dark)]">{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
