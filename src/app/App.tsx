import { useEffect, useMemo, useState } from "react";
import site from "../content/site";
import LayoutRenderer from "../layouts/LayoutRenderer";
import { applySeo } from "../lib/seo";
import LayoutThemeSwitcher from "../components/LayoutThemeSwitcher";
import type { LayoutKey, ThemeKey } from "../types";

const App = () => {
  const [layout, setLayout] = useState<LayoutKey>(site.template.layout);
  const [theme, setTheme] = useState<ThemeKey>(site.template.theme);

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
