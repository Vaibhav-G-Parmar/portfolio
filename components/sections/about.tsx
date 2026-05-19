"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { aboutCopy, aboutHeading, skillGroups } from "@/content/site";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-15%] top-[10%] h-[450px] bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(16,185,129,0.10),transparent_65%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(52,211,153,0.12),transparent_65%)]"
      />

      {/* About bio */}
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
          About
        </p>
        <h2
          id="about-heading"
          className="font-display mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
        >
          {aboutHeading}
        </h2>
        <div className="mt-6 border-l-2 border-emerald-600/35 pl-6 dark:border-emerald-400/30">
          <StaggerContainer className="max-w-3xl space-y-4 text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300" delay={0.1}>
            {aboutCopy.bio.map((p, i) => (
              <StaggerItem key={i}>
                <p>{p}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <p className="font-mono mb-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
          Skills
        </p>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
          {skillGroups.map((group) => (
            <StaggerItem key={group.label}>
              <motion.div
                className="space-y-3 border border-emerald-600/25 bg-background/70 p-5 dark:border-emerald-400/22 dark:bg-zinc-950/75"
                whileHover={{ borderColor: "rgba(16,185,129,0.45)", transition: { duration: 0.2 } }}
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-500">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      className="font-mono border border-emerald-600/30 bg-background/80 px-2.5 py-1.5 text-[12px] leading-snug tracking-[0.02em] text-zinc-800 dark:border-emerald-400/25 dark:bg-zinc-900/80 dark:text-zinc-200"
                      whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
