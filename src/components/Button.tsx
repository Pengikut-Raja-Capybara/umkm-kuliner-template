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
    "inline-flex items-center justify-center rounded-full border font-semibold transition-transform duration-200 hover:-translate-y-0.5";
  const variantClass = {
    primary: "bg-[var(--primary)] text-white border-white/40 shadow-[var(--shadow)]",
    outline: "border-[var(--primary-dark)] text-[var(--primary-dark)] bg-transparent",
    ghost: "border-[var(--stroke)] text-[var(--primary-dark)] bg-transparent",
  }[variant];
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
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
