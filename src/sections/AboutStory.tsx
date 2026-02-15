import Container from "../components/Container";
import Section from "../components/Section";
import Badge from "../components/Badge";
import ImageWithFallback from "../components/ImageWithFallback";
import type { Story } from "../types";

type AboutStoryProps = {
  story: Story;
  galleryImages?: string[];
};

const AboutStory = ({ story, galleryImages }: AboutStoryProps) => {
  return (
    <Section id="about">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            ✦ Tentang Kami
          </p>
          <h2 className="mt-3 pb-1 bg-gradient-to-r from-[var(--text)] to-[var(--primary-dark)] bg-clip-text text-4xl font-serif text-transparent lg:text-5xl">{story.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">{story.text}</p>
          {story.highlights && story.highlights.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {story.highlights.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          )}
        </div>
        <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
          <ImageWithFallback
            src={story.image}
            alt={story.title}
            className="w-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
          />
        </div>
      </Container>
      {galleryImages && galleryImages.length > 0 && (
        <Container className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="group overflow-hidden rounded-3xl border border-[var(--stroke)]/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <ImageWithFallback
                src={image}
                alt={`Galeri ${index + 1}`}
                className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
              />
            </div>
          ))}
        </Container>
      )}
    </Section>
  );
};

export default AboutStory;
