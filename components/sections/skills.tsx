"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { skillGroups, skillsHeading } from "@/content/site";

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
    >
      <p className="font-mono text-[13px] font-bold uppercase leading-snug tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
        Skills
      </p>
      <h2
        id="skills-heading"
        className="font-display mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
      >
        {skillsHeading}
      </h2>

      <StaggerContainer
        className="mt-10 border border-emerald-600/25 bg-background/70 dark:border-emerald-400/22 dark:bg-zinc-950/75 divide-y divide-emerald-600/15 dark:divide-emerald-400/12"
        staggerDelay={0.05}
      >
        {skillGroups.map((group) => (
          <StaggerItem key={group.label}>
            <motion.div
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:gap-6"
              whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.04)", transition: { duration: 0.2 } }}
            >
              <p className="font-mono w-full shrink-0 pt-0.5 text-[13px] font-bold uppercase leading-snug tracking-[0.18em] text-emerald-600 sm:w-[12rem] dark:text-emerald-400">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="font-mono border border-emerald-600/25 bg-background/80 px-2.5 py-1 text-[12px] leading-snug tracking-[0.02em] text-zinc-800 dark:border-emerald-400/22 dark:bg-zinc-900/80 dark:text-zinc-200"
                    whileHover={{
                      y: -6,
                      scale: 1.06,
                      borderColor: "rgba(16, 185, 129, 0.45)",
                      boxShadow: "0 10px 22px -8px rgba(16, 185, 129, 0.35)",
                      transition: { duration: 0.18, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.98, y: -2 }}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.025, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
}
