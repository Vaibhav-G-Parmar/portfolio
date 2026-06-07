"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SlabHeading } from "@/components/ui/slab-heading";
import { AnimatedMiniTerminal } from "@/components/ui/animated-mini-terminal";
import { expertise, expertiseHeading, type ExpertiseDomain } from "@/content/site";
import { hoverChip } from "@/components/ui/motion-presets";
import {
  FullStackGraphic,
  CloudTopologyGraphic,
  MobileDeviceGraphic,
  MainframeGraphic,
  ZosPipelineGraphic,
  FloatingParticles,
} from "@/components/ui/expertise-graphics";

const EASE = [0.16, 1, 0.3, 1] as const;

const domainGraphicMap: Record<string, React.ComponentType<{ className?: string }>> = {
  fullstack: FullStackGraphic,
  cloud: CloudTopologyGraphic,
  mobile: MobileDeviceGraphic,
  mainframe: MainframeGraphic,
  "zos-connect": ZosPipelineGraphic,
};

function DomainBlock({ domain, flip }: { domain: ExpertiseDomain; flip: boolean }) {
  const DomainGraphic = domainGraphicMap[domain.id];

  const textSide = (
    <div>
      {/* Index + kicker */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="section-index text-sm sm:text-base">{domain.index}</span>
        <span className="h-px w-10 bg-emerald-500/50 dark:bg-emerald-400/50" aria-hidden />
        <span className="kicker text-zinc-500 dark:text-zinc-400">Expertise</span>
      </motion.div>

      {/* Domain title */}
      <motion.h2
        id={`expertise-${domain.id}`}
        className="display-xl mt-5 text-[clamp(2rem,5.5vw,4rem)] text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {domain.title}
      </motion.h2>

      <motion.p
        className="mt-8 max-w-xl text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.75] text-zinc-600 dark:text-zinc-300"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
      >
        {domain.description}
      </motion.p>

      {/* Staggered tags with hover effect */}
      <div className="mt-8 flex flex-wrap gap-2">
        {domain.tags.map((tag, i) => (
          <motion.span
            key={tag}
            className="rounded-full border border-[var(--hairline)] px-3 py-1 font-mono text-[12px] text-zinc-500 transition-colors dark:text-zinc-400"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.3 + i * 0.04 }}
            {...hoverChip}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );

  const visualSide = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
      className="relative flex flex-col items-start gap-5"
    >
      {/* Domain-specific graphic */}
      {DomainGraphic && (
        <DomainGraphic className="w-full" />
      )}

      {/* Animated terminal */}
      <AnimatedMiniTerminal
        label={domain.terminal.label}
        lines={domain.terminal.lines}
        className="w-full"
      />
    </motion.div>
  );

  return (
    <div className={`relative grid items-center gap-10 lg:gap-16 ${flip ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]"}`}>
      {/* Floating particles background */}
      <FloatingParticles count={6} className="opacity-40" />

      {flip ? (
        <>
          {visualSide}
          {textSide}
        </>
      ) : (
        <>
          {textSide}
          {visualSide}
        </>
      )}
    </div>
  );
}

export function Expertise() {
  return (
    <>
      {/* Section heading slab */}
      <AnimatedSection id="expertise" className="slab scroll-mt-20">
        <div className="slab__inner !pb-0">
          <SlabHeading
            index="—"
            label="Expertise"
            title={expertiseHeading}
            titleId="expertise-heading"
          />
        </div>
      </AnimatedSection>

      {/* Individual domain blocks */}
      {expertise.map((domain, i) => (
        <AnimatedSection
          key={domain.id}
          className={`slab ${i % 2 === 0 ? "slab--alt" : ""} scroll-mt-20`}
        >
          <div className="slab__inner">
            <DomainBlock domain={domain} flip={i % 2 !== 0} />
          </div>
        </AnimatedSection>
      ))}
    </>
  );
}
