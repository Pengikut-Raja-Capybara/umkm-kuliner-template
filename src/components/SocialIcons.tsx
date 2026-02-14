import type { ReactElement } from "react";
import type { Social } from "../types";

type SocialIconsProps = {
  social: Social;
  className?: string;
};

type SocialItem = {
  id: keyof Social;
  label: string;
  href?: string;
  icon: ReactElement;
};

const SocialIcons = ({ social, className }: SocialIconsProps) => {
  const items: SocialItem[] = [
    {
      id: "instagram",
      label: "Instagram",
      href: social.instagram,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M8.5 3h7A5.5 5.5 0 0 1 21 8.5v7A5.5 5.5 0 0 1 15.5 21h-7A5.5 5.5 0 0 1 3 15.5v-7A5.5 5.5 0 0 1 8.5 3zm0 2A3.5 3.5 0 0 0 5 8.5v7A3.5 3.5 0 0 0 8.5 19h7a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 15.5 5h-7z" />
          <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: social.facebook,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
        </svg>
      ),
    },
    {
      id: "x",
      label: "X",
      href: social.x,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M4 4l7.2 9.4L4.5 20H7l5.1-5.8L16.6 20H20l-7.5-9.9L19.2 4H17l-4.8 5.4L7.7 4H4z" />
        </svg>
      ),
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: social.tiktok,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M14 3v9.6a3.6 3.6 0 1 1-3-3.5V6a6.6 6.6 0 1 0 6 6.5V8.9c1.2 1 2.7 1.6 4.5 1.6V7.6c-2.3 0-4.2-1.9-4.2-4.2H14z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`inline-flex items-center gap-2 ${className ?? ""}`.trim()}>
      {items
        .filter((item) => Boolean(item.href))
        .map((item) => (
          <a
            key={item.id}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--stroke)] bg-white text-[var(--primary-dark)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
    </div>
  );
};

export default SocialIcons;
