import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "solid" | "soft";
};

const Badge = ({ children, variant = "soft" }: BadgeProps) => {
  const variantClass =
    variant === "solid"
      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white border border-white/50 shadow-lg"
      : "bg-gradient-to-r from-[var(--bg)] to-white text-[var(--primary-dark)] border border-[var(--primary)]/30 shadow-sm";
  return (
    <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur ${variantClass}`}>
      {children}
    </span>
  );
};

export default Badge;
