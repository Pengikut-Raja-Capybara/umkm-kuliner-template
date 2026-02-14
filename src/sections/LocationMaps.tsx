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
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--primary-dark)]">
            Kunjungi kami
          </p>
          <h2 className="mt-2 text-3xl font-serif">Lokasi & jam buka</h2>
          <p className="mt-4 text-[var(--muted)]">{contact.address}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{contact.openHours}</p>
          <Button href={contact.mapsUrl} variant="outline" className="border-[var(--primary-dark)] mt-5">
            Dapatkan Arah
          </Button>
        </div>
        <div className="h-64 overflow-hidden rounded-2xl border border-[var(--stroke)] bg-white md:h-80">
          {contact.mapsEmbed ? (
            <iframe
              src={contact.mapsEmbed}
              title="Peta lokasi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <p className="text-[var(--muted)]">Peta tersedia via Google Maps.</p>
              <Button href={contact.mapsUrl}>Buka Maps</Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default LocationMaps;
