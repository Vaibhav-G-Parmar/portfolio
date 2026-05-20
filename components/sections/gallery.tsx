"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { galleryCopy } from "@/content/gallery";
import type { GalleryImage } from "@/lib/gallery";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const hasImages = images.length > 0;

  return (
    <AnimatedSection
      id="gallery"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="border border-emerald-600/25 bg-background/60 p-6 dark:border-emerald-400/22 dark:bg-zinc-950/60 sm:p-8">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
          {galleryCopy.eyebrow}
        </p>
        <h2
          id="gallery-heading"
          className="font-display mt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
        >
          {galleryCopy.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-400">
          {galleryCopy.description}
        </p>

        {hasImages ? (
          <ul className="mt-10 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {images.map((img) => (
              <li key={img.src} className="group relative">
                <figure className="relative aspect-[4/3] overflow-hidden border border-emerald-600/30 bg-zinc-900/40 dark:border-emerald-400/25">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10">
            <p className="font-mono mb-4 text-[11px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
              Preview grid. Add images to unlock the gallery.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="flex aspect-[4/3] items-center justify-center border border-dashed border-emerald-600/35 bg-emerald-600/[0.04] dark:border-emerald-400/30 dark:bg-emerald-400/[0.04]"
                >
                  <span className="font-mono text-[10px] tracking-[0.12em] text-zinc-500 dark:text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-mono mt-6 max-w-xl text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">
              Drop images into{" "}
              <code className="rounded border border-emerald-600/30 px-1.5 py-0.5 text-emerald-800 dark:border-emerald-400/30 dark:text-emerald-400">
                public/gallery/
              </code>{" "}
              and they appear here automatically.
            </p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
