import type { ComponentType } from "react";
import type { SiteData } from "../types";
import { createLayoutRegistry } from "./registry";
import Topbar from "../sections/Topbar";
import Navbar from "../sections/Navbar";
import HeroFood from "../sections/HeroFood";
import BestMenu from "../sections/BestMenu";
import PromoBanner from "../sections/PromoBanner";
import AboutStory from "../sections/AboutStory";
import OrderSteps from "../sections/OrderSteps";
import Testimonials from "../sections/Testimonials";
import LocationMaps from "../sections/LocationMaps";
import ContactQuick from "../sections/ContactQuick";
import Footer from "../sections/Footer";
import FloatingWA from "../components/FloatingWA";
import type { SectionName } from "./registry";

type SectionComponent = ComponentType<Record<string, unknown>>;

const sectionMap = {
  Topbar: Topbar as SectionComponent,
  Navbar: Navbar as SectionComponent,
  HeroFood: HeroFood as SectionComponent,
  BestMenu: BestMenu as SectionComponent,
  PromoBanner: PromoBanner as SectionComponent,
  AboutStory: AboutStory as SectionComponent,
  OrderSteps: OrderSteps as SectionComponent,
  Testimonials: Testimonials as SectionComponent,
  LocationMaps: LocationMaps as SectionComponent,
  ContactQuick: ContactQuick as SectionComponent,
  Footer: Footer as SectionComponent,
  FloatingWA: FloatingWA as SectionComponent,
} satisfies Record<SectionName, SectionComponent>;

type LayoutRendererProps = {
  site: SiteData;
};

const LayoutRenderer = ({ site }: LayoutRendererProps) => {
  const registry = createLayoutRegistry(site);
  const sections = registry[site.template.layout] ?? registry.A;

  return (
    <div className="min-h-screen motion-safe:animate-page-fade">
      {sections.map((section, index) => {
        if (section.enabled === false) {
          return null;
        }

        const Component = sectionMap[section.name];
        return <Component key={`${section.name}-${index}`} {...(section.props ?? {})} />;
      })}
    </div>
  );
};

export default LayoutRenderer;
