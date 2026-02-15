import Container from "../components/Container";
import SocialIcons from "../components/SocialIcons";
import type { Brand, Contact, Social } from "../types";

type FooterProps = {
  brand: Brand;
  contact: Contact;
  social: Social;
};

const Footer = ({ brand, contact, social }: FooterProps) => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1f130c] via-[#2a1810] to-[#1f130c] py-16 text-amber-100">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
      <Container className="relative z-10 flex flex-wrap items-start justify-between gap-10">
        <div className="max-w-xs">
          <h3 className="text-2xl font-serif text-white">{brand.name}</h3>
          <p className="mt-3 leading-relaxed text-amber-100/80">{brand.tagline}</p>
        </div>
        <div>
          <p className="font-medium text-amber-100/90">{contact.address}</p>
          <p className="mt-2 font-medium text-amber-100/90">{contact.whatsapp}</p>
          <SocialIcons social={social} className="mt-5" />
        </div>
        <div className="w-full border-t border-amber-100/20 pt-6 text-center text-xs text-amber-100/60">© 2026 Dibuat oleh Raja Capybara</div>
      </Container>
    </footer>
  );
};

export default Footer;
