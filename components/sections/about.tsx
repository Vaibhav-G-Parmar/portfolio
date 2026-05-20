"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { aboutCopy, aboutHeading } from "@/content/site";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <p className="font-mono text-[13px] font-bold uppercase leading-snug tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
        About
      </p>
      <h2
        id="about-heading"
        className="font-display mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
      >
        {aboutHeading}
      </h2>
      <motion.div
        className="mt-6 border-l-2 border-emerald-600/35 pl-6 dark:border-emerald-400/30"
        whileHover={{ borderColor: "rgba(16, 185, 129, 0.55)", transition: { duration: 0.2 } }}
      >
        <StaggerContainer className="max-w-3xl space-y-4 text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300" delay={0.1}>
          {aboutCopy.bio.map((p, i) => (
            <StaggerItem key={i}>
              <p>{p}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>
    </AnimatedSection>
  );
}
