import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 lg:py-20 motion-safe:animate-rise-in ${className ?? ""}`.trim()}
    >
      {children}
    </section>
  );
};

export default Section;
