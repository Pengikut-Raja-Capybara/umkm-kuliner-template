import { buildWaLink } from "../lib/wa";

type FloatingWAProps = {
  phone: string;
  message: string;
};

const FloatingWA = ({ phone, message }: FloatingWAProps) => {
  return (
    <a
      className="fixed bottom-6 right-6 z-30 inline-flex items-center justify-center rounded-full bg-[#22c55e] px-5 py-3 text-white shadow-[var(--shadow)] md:hidden"
      href={buildWaLink(phone, message)}
      target="_blank"
      rel="noreferrer"
    >
      Pesan WA
    </a>
  );
};

export default FloatingWA;
