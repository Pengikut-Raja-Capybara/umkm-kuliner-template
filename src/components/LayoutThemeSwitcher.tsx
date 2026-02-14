import { useState } from "react";
import type { LayoutKey, ThemeKey } from "../types";

type LayoutThemeSwitcherProps = {
  layout: LayoutKey;
  theme: ThemeKey;
  onLayoutChange: (layout: LayoutKey) => void;
  onThemeChange: (theme: ThemeKey) => void;
};

const layoutOptions: LayoutKey[] = ["A", "B", "C", "D", "E"];
const themeOptions: ThemeKey[] = [
  "saffron",
  "bamboo",
  "rose",
  "ocean",
  "nightmarket",
  "citrus",
  "terra",
];

const LayoutThemeSwitcher = ({
  layout,
  theme,
  onLayoutChange,
  onThemeChange,
}: LayoutThemeSwitcherProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 md:bottom-8 md:left-8">
      {open && (
        <div className="w-56 rounded-2xl border border-[var(--stroke)] bg-white/95 p-4 shadow-[var(--shadow)] backdrop-blur">
          <div className="flex flex-col gap-1">
            <span className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)] font-semibold">
              Layout
            </span>
            <select
              className="rounded-full border border-[var(--stroke)] bg-white px-3 py-1 text-sm text-[var(--text)]"
              value={layout}
              onChange={(event) => onLayoutChange(event.target.value as LayoutKey)}
            >
              {layoutOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <span className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)] font-semibold">
              Theme
            </span>
            <select
              className="rounded-full border border-[var(--stroke)] bg-white px-3 py-1 text-sm text-[var(--text)]"
              value={theme}
              onChange={(event) => onThemeChange(event.target.value as ThemeKey)}
            >
              {themeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--stroke)] bg-white/90 text-[var(--primary-dark)] shadow-[var(--shadow)] backdrop-blur transition hover:-translate-y-0.5"
        aria-label="Toggle layout & theme"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M3 7h6v2H3V7zm12 0h6v2h-6V7zM9 5h6v6H9V5zm-6 10h10v2H3v-2zm14 0h4v2h-4v-2zm-4-2h4v6h-4v-6z" />
        </svg>
      </button>
    </div>
  );
};

export default LayoutThemeSwitcher;
