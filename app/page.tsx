import { TerminalBackdrop } from "@/components/effects/terminal-backdrop";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Gallery } from "@/components/sections/gallery";
import { Projects } from "@/components/sections/projects";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const images = getGalleryImages();

  return (
    <>
      <ScrollProgress />
      <TerminalBackdrop />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-16">
          <Hero images={images} />
          <About />
          <Skills />
          <Projects />
          <Gallery images={images} />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
