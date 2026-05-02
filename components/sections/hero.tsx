"use client";

import { ArrowRight, BriefcaseBusiness, FileDown, Layers2 } from "lucide-react";
import { heroCopy, heroHighlights, siteProfile } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <span className="font-mono hero-fade-in inline-flex items-center gap-2 border border-emerald-600/35 bg-background/70 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-emerald-800 shadow-sm dark:border-emerald-400/35 dark:bg-zinc-950/75 dark:text-emerald-300">
            <span className="text-emerald-600 dark:text-emerald-400">●</span>
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
            <span className="mt-2 block whitespace-nowrap font-semibold text-zinc-800 sm:mt-3 dark:text-zinc-100">
              {siteProfile.title}.
            </span>
          </h1>

          <div className="hero-fade-in hero-fade-in-delay-2 mt-8 max-w-2xl space-y-4 text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">{siteProfile.tagline}</p>
            <p>{heroCopy.supporting}</p>
          </div>
        </div>

        <div className="font-mono hero-fade-in hero-fade-in-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-700 px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_24px_-8px_rgba(16,185,129,0.55)] transition hover:bg-emerald-600 dark:border-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500"
          >
            <Layers2 className="size-[17px] opacity-95" aria-hidden />
            <span>{heroCopy.primaryCta}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-emerald-600/40 bg-background/80 px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm transition hover:border-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/35 dark:hover:bg-emerald-400/10"
          >
            <BriefcaseBusiness className="size-4" aria-hidden />
            <span>{heroCopy.secondaryCta}</span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-emerald-800 underline-offset-4 hover:text-emerald-950 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            <FileDown className="size-4 opacity-90" aria-hidden />
            <span>{heroCopy.resumeCta}</span>
          </a>
        </div>

        <div className="font-mono mt-16 grid gap-3 sm:grid-cols-3">
          {heroHighlights.map((row) => (
            <div
              key={row.k}
              className="hero-fade-in hero-card border border-emerald-600/25 bg-background/60 p-5 dark:border-emerald-400/22 dark:bg-zinc-950/70"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-500">
                {row.k}
              </p>
              <p className="mt-2 text-[13px] font-medium leading-snug tracking-[0.02em] text-zinc-800 dark:text-zinc-200">
                {row.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
