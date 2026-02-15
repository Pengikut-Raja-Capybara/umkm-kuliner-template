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
  "seafood",
  "steakhouse",
  "sakura",
  "italiano",
  "fiesta",
  "lavender",
  "matcha",
  "mocha",
  "crimson",
  "spice",
  "mint",
  "sunset",
];

const themeLabels: Record<ThemeKey, string> = {
  saffron: "🌾 Saffron (Default)",
  bamboo: "🎋 Bamboo (Green)",
  rose: "🌹 Rose (Pink)",
  ocean: "🌊 Ocean (Blue)",
  nightmarket: "🏮 Night Market (Amber)",
  citrus: "🍊 Citrus (Orange)",
  terra: "🏺 Terra (Brown)",
  seafood: "🦐 Seafood (Turquoise)",
  steakhouse: "🥩 Steakhouse (Burgundy)",
  sakura: "🌸 Sakura (Japanese)",
  italiano: "🇮🇹 Italiano (Italian)",
  fiesta: "🌮 Fiesta (Mexican)",
  lavender: "🧁 Lavender (Dessert)",
  matcha: "🍵 Matcha (Green Tea)",
  mocha: "☕ Mocha (Coffee)",
  crimson: "🍔 Crimson (Fast Food)",
  spice: "🌶️ Spice (Hot & Spicy)",
  mint: "🌿 Mint (Fresh & Healthy)",
  sunset: "🌅 Sunset (Fusion)",
};

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
        <div className="w-64 rounded-3xl border border-[var(--stroke)]/40 bg-gradient-to-br from-white to-[var(--bg)] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-lg">
          <div className="flex flex-col gap-2">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
              Layout
            </span>
            <select
              className="rounded-xl border-2 border-[var(--stroke)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] shadow-sm transition-all hover:border-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none"
              value={layout}
              onChange={(event) => onLayoutChange(event.target.value as LayoutKey)}
            >
              {layoutOptions.map((option) => (
                <option key={option} value={option}>
                  Layout {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
              Theme
            </span>
            <select
              className="rounded-xl border-2 border-[var(--stroke)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] shadow-sm transition-all hover:border-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none"
              value={theme}
              onChange={(event) => onThemeChange(event.target.value as ThemeKey)}
            >
              {themeOptions.map((option) => (
                <option key={option} value={option}>
                  {themeLabels[option]}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--stroke)]/40 bg-gradient-to-br from-white to-[var(--bg)] text-[var(--primary)] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
        aria-label="Toggle layout & theme"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M3 7h6v2H3V7zm12 0h6v2h-6V7zM9 5h6v6H9V5zm-6 10h10v2H3v-2zm14 0h4v2h-4v-2zm-4-2h4v6h-4v-6z" />
        </svg>
      </button>
    </div>
  );
};

export default LayoutThemeSwitcher;
