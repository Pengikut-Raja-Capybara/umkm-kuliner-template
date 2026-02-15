import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import type { Contact } from "../types";

type LocationMapsProps = {
  contact: Contact;
};

const LocationMaps = ({ contact }: LocationMapsProps) => {
  return (
    <Section id="location">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            ✦ Kunjungi kami
          </p>
          <h2 className="mt-3 pb-1 bg-gradient-to-r from-[var(--text)] to-[var(--primary-dark)] bg-clip-text text-4xl font-serif text-transparent lg:text-5xl">Lokasi & jam buka</h2>
          <p className="mt-5 text-base font-medium text-[var(--text)]">{contact.address}</p>
          <p className="mt-3 text-sm text-[var(--muted)]">{contact.openHours}</p>
          <Button href={contact.mapsUrl} variant="outline" className="mt-6">
            Dapatkan Arah
          </Button>
        </div>
        <div className="h-72 overflow-hidden rounded-[2rem] border-2 border-[var(--stroke)]/30 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:h-96">
          {contact.mapsEmbed ? (
            <iframe
              src={contact.mapsEmbed}
              title="Peta lokasi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-base text-[var(--muted)]">Peta tersedia via Google Maps.</p>
              <Button href={contact.mapsUrl}>Buka Maps</Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default LocationMaps;
