import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import { buildWaLink } from "../lib/wa";
import type { Contact } from "../types";

type ContactQuickProps = {
  contact: Contact;
};

const ContactQuick = ({ contact }: ContactQuickProps) => {
  return (
    <Section id="contact" className="bg-[#fff7ed]">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--primary-dark)]">
            Hubungi cepat
          </p>
          <h2 className="mt-2 text-3xl font-serif">Pesan langsung</h2>
          <p className="mt-2 text-[var(--muted)]">{contact.address}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={buildWaLink(contact.whatsapp, "Halo! Saya mau pesan.")}>WhatsApp</Button>
          <Button href={contact.mapsUrl} variant="outline">
            Link Maps
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ContactQuick;
