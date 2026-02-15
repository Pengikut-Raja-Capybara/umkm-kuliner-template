import { useMemo, useState } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ImageWithFallback from "../components/ImageWithFallback";
import { formatPrice } from "../lib/format";
import { buildWaLink } from "../lib/wa";
import type { MenuItem } from "../types";

type BestMenuProps = {
  title: string;
  items: MenuItem[];
  phone: string;
  maxItems?: number;
  sectionId?: string;
  filterCategory?: string;
  sortBy?: "popular";
  variant?: "grid" | "scroll";
  showCategories?: boolean;
};

const BestMenu = ({
  title,
  items,
  phone,
  maxItems = 6,
  sectionId = "menu",
  filterCategory,
  sortBy,
  variant = "grid",
  showCategories = false,
}: BestMenuProps) => {
  const categories = useMemo(() => {
    const set = new Set(items.map((item) => item.category).filter(Boolean));
    return ["Semua", ...Array.from(set)] as string[];
  }, [items]);

  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredItems = useMemo(() => {
    let result = items;

    if (filterCategory) {
      result = result.filter((item) => item.category === filterCategory);
    } else if (activeCategory !== "Semua") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (sortBy === "popular") {
      result = [...result].sort((a, b) => Number(b.popular) - Number(a.popular));
    }

    return result.slice(0, maxItems);
  }, [items, filterCategory, activeCategory, sortBy, maxItems]);

  const closeImage = () => setActiveImage(null);

  return (
    <Section id={sectionId || undefined}>
      <Container>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              ✦ Pilihan terbaik
            </p>
            <h2 className="mt-3 pb-1 bg-gradient-to-r from-[var(--text)] to-[var(--primary-dark)] bg-clip-text text-4xl font-serif text-transparent lg:text-5xl">{title}</h2>
          </div>
          {showCategories && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full border px-5 py-2 text-sm font-medium shadow-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "border-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-lg scale-105"
                      : "border-[var(--stroke)] bg-white text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--bg)]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        <div
          className={
            variant === "scroll"
              ? "grid auto-cols-[minmax(240px,1fr)] grid-flow-col gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
              : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {filteredItems.map((item) => (
            <Card
              key={item.name}
              className={variant === "scroll" ? "snap-start" : undefined}
            >
              <button
                type="button"
                className="group relative w-full overflow-hidden text-left"
                onClick={() => setActiveImage({ src: item.image, alt: item.name })}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                />
                {item.badge && <div className="absolute left-4 top-4"><Badge>{item.badge}</Badge></div>}
              </button>
              <div className="flex flex-col gap-5 p-7">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">{item.name}</h3>
                  {item.description && <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <span className="pb-1 text-lg font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">{formatPrice(item.price)}</span>
                  <Button
                    href={buildWaLink(phone, `Halo! Saya mau pesan ${item.name}.`)}
                    variant="ghost"
                  >
                    Pesan
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <ImageWithFallback
              src={activeImage.src}
              alt={activeImage.alt}
              className="h-full max-h-[85vh] w-full rounded-3xl object-contain"
              loading="eager"
            />
            <span className="sr-only">Tutup gambar</span>
          </button>
        </div>
      )}
    </Section>
  );
};

export default BestMenu;
