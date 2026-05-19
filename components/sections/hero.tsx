"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Layers2 } from "lucide-react";
import { heroCopy, heroHighlights, siteProfile } from "@/content/site";
import type { GalleryImage } from "@/lib/gallery";

function HeroGallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null;
  const img = images[0];

  return (
    <div
      className="hero-fade-in hero-fade-in-delay-1 relative w-full overflow-hidden border border-emerald-600/25 bg-zinc-900/40 dark:border-emerald-400/22"
      style={{ aspectRatio: "4/3" }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
            sizes="(max-width: 1024px) 0px, 380px"
        priority
      />
      {/* Corner scan-line decoration */}
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-emerald-500/50" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-emerald-500/50" />
    </div>
  );
}

export function Hero({ images }: { images: GalleryImage[] }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(16,185,129,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(52,211,153,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-10 lg:items-start">

          {/* ── Left: text + CTAs + cards ── */}
          <div>
            <span className="badge-pulse-glow font-mono inline-flex items-center gap-2 border-2 border-emerald-600/35 bg-background/60 px-6 py-3 text-[13px] uppercase tracking-[0.2em] text-emerald-700/80 dark:border-emerald-400/30 dark:bg-zinc-950/60 dark:text-emerald-400/70">
              <span>{heroCopy.badge}</span>
            </span>

            <h1
              id="hero-heading"
              className="font-display hero-fade-in hero-fade-in-delay-1 mt-8 max-w-4xl text-[clamp(2.35rem,5.2vw,3.65rem)] font-semibold leading-[1.08] text-foreground sm:leading-[1.06]"
            >
              <span className="block">
                <span className="text-emerald-700 dark:text-emerald-400">{siteProfile.name}</span>
                <span className="mx-2 font-mono text-[0.55em] font-normal tracking-normal text-zinc-400">
                  ::
                </span>
              </span>
              <span className="mt-2 block font-semibold text-zinc-800 sm:mt-3 dark:text-zinc-100">
                {siteProfile.title}
              </span>
            </h1>

            <div className="hero-fade-in hero-fade-in-delay-2 mt-8 max-w-2xl space-y-4 text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{siteProfile.tagline}</p>
              <p>{heroCopy.supporting}</p>
            </div>

            <div className="font-mono hero-fade-in hero-fade-in-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-700 px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_24px_-8px_rgba(16,185,129,0.55)] dark:border-emerald-500 dark:bg-emerald-600"
                whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <Layers2 className="size-[17px] opacity-95" aria-hidden />
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-emerald-600/40 bg-background/80 px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm dark:border-emerald-400/35"
                whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.6)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <BriefcaseBusiness className="size-4" aria-hidden />
                <span>{heroCopy.secondaryCta}</span>
              </motion.a>
            </div>

          </div>

          {/* ── Right: image (desktop only) ── */}
          <div className="hidden lg:block lg:sticky lg:top-32">
            <HeroGallery images={images} />
          </div>

        </div>

        {/* ── Full-width highlight cards ── */}
        <div className="font-mono mt-12 grid gap-3 sm:grid-cols-3">
          {heroHighlights.map((row) => (
            <div
              key={row.k}
              className="hero-fade-in hero-card border border-emerald-600/25 bg-background/60 p-5 dark:border-emerald-400/22 dark:bg-zinc-950/70"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                {row.k}
              </p>
              <p className="mt-2 text-[12px] leading-snug tracking-[0.02em] text-zinc-700 dark:text-zinc-300">
                {row.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
