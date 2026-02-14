import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "solid" | "soft";
};

const Badge = ({ children, variant = "soft" }: BadgeProps) => {
  const variantClass =
    variant === "solid"
      ? "bg-[var(--primary)] text-white border border-white/40"
      : "bg-[rgba(217,119,6,0.8)] text-[var(--primary-dark)] border border-[var(--stroke)]";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${variantClass}`}>
      {children}
    </span>
  );
};

export default Badge;
