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
    <footer className="bg-[#1f130c] py-12 text-amber-100">
      <Container className="flex flex-wrap items-center justify-between gap-8">
        <div>
          <h3 className="text-xl font-serif">{brand.name}</h3>
          <p className="mt-2 text-amber-100/80">{brand.tagline}</p>
        </div>
        <div>
          <p className="text-amber-100/80">{contact.address}</p>
          <p className="mt-1 text-amber-100/80">{contact.whatsapp}</p>
          <SocialIcons social={social} className="mt-3" />
        </div>
        <div className="text-xs text-amber-100/60">© 2026 Dibuat oleh Raja Capybara</div>
      </Container>
    </footer>
  );
};

export default Footer;
