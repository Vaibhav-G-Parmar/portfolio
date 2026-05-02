"use client";

import { RevealSection } from "@/components/ui/reveal-section";
import { aboutCopy, aboutHeading, skillGroups } from "@/content/site";

export function About() {
  return (
    <RevealSection
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="border-l-2 border-emerald-600/35 pl-6 dark:border-emerald-400/30">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
          >
            {aboutHeading}
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300">
            {aboutCopy.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="space-y-5 border border-emerald-600/25 bg-background/70 p-6 dark:border-emerald-400/22 dark:bg-zinc-950/75">
            {skillGroups.map((group) => (
              <div key={group.label} className="space-y-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-500">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span
                      key={item}
                      className="font-mono border border-emerald-600/30 bg-background/80 px-2.5 py-1.5 text-[12px] leading-snug tracking-[0.02em] text-zinc-800 transition-colors hover:border-emerald-600/50 dark:border-emerald-400/25 dark:bg-zinc-900/80 dark:text-zinc-200"
                      style={{ transitionDelay: `${i * 20}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
