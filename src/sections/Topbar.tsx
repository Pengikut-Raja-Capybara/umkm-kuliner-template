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
    <div className="bg-[var(--primary)] text-sm text-white">
      <Container className="flex flex-wrap items-center justify-center gap-2 py-2 text-center md:justify-between">
        <span>{openHours}</span>
        <span className="hidden opacity-60 md:inline">|</span>
        <span>{address}</span>
        <SocialIcons social={social} className="mt-1 md:mt-0" />
      </Container>
    </div>
  );
};

export default Topbar;
