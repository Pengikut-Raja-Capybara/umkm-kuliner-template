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
    <Section id="contact" className="bg-gradient-to-br from-[var(--bg)] via-white to-[var(--bg)]">
      <Container className="flex flex-wrap items-center justify-between gap-8 rounded-[2rem] border border-[var(--stroke)]/30 bg-white/60 p-8 shadow-xl backdrop-blur-sm md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            ✦ Hubungi cepat
          </p>
          <h2 className="mt-3 pb-1 bg-gradient-to-r from-[var(--text)] to-[var(--primary-dark)] bg-clip-text text-4xl font-serif text-transparent lg:text-5xl">Pesan langsung</h2>
          <p className="mt-3 text-base text-[var(--muted)]">{contact.address}</p>
        </div>
        <div className="flex flex-wrap gap-4">
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
