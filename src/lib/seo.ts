import type { Seo } from "../types";

const setMeta = (name: string, content: string, useProperty = false) => {
  const selector = useProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(useProperty ? "property" : "name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

export const applySeo = (seo: Seo, brandName: string) => {
  document.title = seo.title || brandName;
  setMeta("description", seo.description || "");
  setMeta("og:title", seo.title || brandName, true);
  setMeta("og:description", seo.description || "", true);
  setMeta("og:image", seo.ogImage || "", true);
  setMeta("twitter:card", "summary_large_image");
};
