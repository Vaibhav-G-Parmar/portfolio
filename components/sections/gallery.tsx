"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SlabHeading } from "@/components/ui/slab-heading";
import { galleryCopy } from "@/content/gallery";
import type { GalleryImage } from "@/lib/gallery";

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 * Explicit grid placement for 6 images in a tight collage.
 * Desktop (lg): 12-col grid, 3 rows - images tile like a magazine spread.
 * Tablet (sm):  6-col grid, auto rows.
 * Mobile:       2-col grid, auto rows.
 */
const CELL_CLASSES: string[] = [
  "col-span-2 row-span-2 sm:col-span-4 sm:row-span-2 lg:col-span-7 lg:row-span-2",
  "col-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-5 lg:row-span-2",
  "col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-1",
  "col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-1",
  "col-span-1 sm:col-span-3 lg:col-span-5 lg:row-span-1",
  "col-span-2 sm:col-span-3 lg:col-span-5 lg:row-span-1",
];

export function Gallery({ images }: { images: GalleryImage[] }) {
  const hasImages = images.length > 0;

  return (
    <AnimatedSection id="gallery" className="slab scroll-mt-20">
      <div className="slab__inner">
        <SlabHeading index="04" label="Gallery" title={galleryCopy.title} titleId="gallery-heading" />
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {galleryCopy.description}
        </p>

        {hasImages ? (
          <ul className="mt-14 grid list-none auto-rows-[140px] grid-cols-2 gap-1 sm:auto-rows-[180px] sm:grid-cols-6 lg:auto-rows-[200px] lg:grid-cols-12">
            {images.map((img, i) => (
              <motion.li
                key={img.src}
                className={`group relative overflow-hidden ${CELL_CLASSES[i % CELL_CLASSES.length]}`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: Math.min(i * 0.08, 0.4),
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-[var(--slab-alt)]"
              >
                <span className="section-index text-zinc-400 dark:text-zinc-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
