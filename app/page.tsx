import { BackToTop } from "@/components/effects/back-to-top";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Expertise } from "@/components/sections/expertise";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Gallery } from "@/components/sections/gallery";
import { Projects } from "@/components/sections/projects";
import { TechTicker } from "@/components/sections/tech-ticker";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const images = getGalleryImages();
  const portrait = images[0];

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero imageSrc={portrait?.src} imageAlt={portrait?.alt} />
          <Stats />
          <TechTicker />
          <Expertise />
          <Projects />
          <Gallery images={images} />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
