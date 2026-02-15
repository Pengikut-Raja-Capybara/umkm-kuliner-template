import Container from "../components/Container";
import SocialIcons from "../components/SocialIcons";
import type { Social } from "../types";

type TopbarProps = {
  openHours: string;
  address: string;
  social: Social;
};

const Topbar = ({ openHours, address, social }: TopbarProps) => {
  return (
    <div className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-sm text-white shadow-lg">
      <Container className="flex flex-wrap items-center justify-center gap-3 py-3 text-center md:justify-between">
        <span className="font-medium">{openHours}</span>
        <span className="hidden opacity-40 md:inline">|</span>
        <span className="font-medium">{address}</span>
        <SocialIcons social={social} className="mt-1 md:mt-0" />
      </Container>
    </div>
  );
};

export default Topbar;
