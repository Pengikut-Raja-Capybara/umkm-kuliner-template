import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-[var(--surface)] shadow-[0_20px_50px_rgba(17,24,39,0.08)] ${
        className ?? ""
      }`.trim()}
    >
      {children}
    </div>
  );
};

export default Card;
