import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-full border font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0";
  const variantClass = {
    primary: "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white border-transparent shadow-[0_8px_25px_rgba(217,119,6,0.35)] hover:shadow-[0_12px_35px_rgba(217,119,6,0.45)]",
    outline: "border-2 border-[var(--primary-dark)] text-[var(--primary-dark)] bg-white/80 backdrop-blur hover:bg-[var(--primary)] hover:text-white hover:border-transparent",
    ghost: "border border-[var(--stroke)] text-[var(--primary-dark)] bg-white/50 backdrop-blur hover:border-[var(--primary)] hover:bg-[var(--primary)]/10",
  }[variant];
  const sizeClass = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  }[size];
  const mergedClassName = `${base} ${variantClass} ${sizeClass} ${className ?? ""}`.trim();

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        className={mergedClassName}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={mergedClassName} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
