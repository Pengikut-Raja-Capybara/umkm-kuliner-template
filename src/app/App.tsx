import { useEffect, useMemo, useState } from "react";
import site from "../content/site";
import LayoutRenderer from "../layouts/LayoutRenderer";
import { applySeo } from "../lib/seo";
import LayoutThemeSwitcher from "../components/LayoutThemeSwitcher";
import type { LayoutKey, ThemeKey } from "../types";

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

const LAYOUT_STORAGE_KEY = "umkm.template.layout";
const THEME_STORAGE_KEY = "umkm.template.theme";

const getStoredLayout = (): LayoutKey => {
  if (typeof window === "undefined") {
    return site.template.layout;
  }
  const stored = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
  if (stored && layoutOptions.includes(stored as LayoutKey)) {
    return stored as LayoutKey;
  }
  return site.template.layout;
};

const getStoredTheme = (): ThemeKey => {
  if (typeof window === "undefined") {
    return site.template.theme;
  }
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && themeOptions.includes(stored as ThemeKey)) {
    return stored as ThemeKey;
  }
  return site.template.theme;
};

const App = () => {
  const [layout, setLayout] = useState<LayoutKey>(() => getStoredLayout());
  const [theme, setTheme] = useState<ThemeKey>(() => getStoredTheme());

  const activeSite = useMemo(
    () => ({
      ...site,
      template: {
        layout,
        theme,
      },
    }),
    [layout, theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(LAYOUT_STORAGE_KEY, layout);
  }, [layout]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    applySeo(site.seo, site.brand.name);
  }, []);

  return (
    <>
      <LayoutRenderer key={layout} site={activeSite} />
      <LayoutThemeSwitcher
        layout={layout}
        theme={theme}
        onLayoutChange={setLayout}
        onThemeChange={setTheme}
      />
    </>
  );
};

export default App;
