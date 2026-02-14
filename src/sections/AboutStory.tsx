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
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--primary-dark)]">
            Tentang Kami
          </p>
          <h2 className="mt-2 text-3xl font-serif">{story.title}</h2>
          <p className="mt-4 text-[var(--muted)]">{story.text}</p>
          {story.highlights && story.highlights.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {story.highlights.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          )}
        </div>
        <ImageWithFallback
          src={story.image}
          alt={story.title}
          className="w-full rounded-3xl shadow-[var(--shadow)] transition duration-300 hover:scale-[1.02]"
        />
      </Container>
      {galleryImages && galleryImages.length > 0 && (
        <Container className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={image}
                alt={`Galeri ${index + 1}`}
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Container>
      )}
    </Section>
  );
};

export default AboutStory;
