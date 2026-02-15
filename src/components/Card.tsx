import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`group overflow-hidden rounded-3xl border border-[var(--stroke)]/30 bg-gradient-to-br from-[var(--surface)] to-white shadow-[0_20px_60px_rgba(17,24,39,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(17,24,39,0.15)] ${
        className ?? ""
      }`.trim()}
    >
      {children}
    </div>
  );
};

export default Card;
