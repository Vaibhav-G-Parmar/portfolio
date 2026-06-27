"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroCopy, siteProfile } from "@/content/site";
import { Typewriter } from "@/components/ui/typewriter";
import { TerminalCard } from "@/components/ui/terminal-card";

const EASE = [0.16, 1, 0.3, 1] as const;

const lineReveal = {
  hidden: { y: "115%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
};

export function Hero({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  const [first, ...rest] = siteProfile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="slab relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="slab__inner relative grid w-full items-center gap-12 pt-28 lg:grid-cols-[1.25fr_1fr] lg:pt-24">
        {/* Left: text */}
        <div>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            <span className="kicker text-zinc-500 dark:text-zinc-400">{heroCopy.badge}</span>
          </motion.div>

          <h1 id="hero-heading" className="display-mega mt-8 text-[clamp(3rem,11vw,9.5rem)] text-foreground">
            <span className="reveal-mask">
              <motion.span className="block" custom={0} variants={lineReveal} initial="hidden" animate="visible">
                {first}
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span
                className="block text-emerald-600 dark:text-emerald-400"
                custom={1}
                variants={lineReveal}
                initial="hidden"
                animate="visible"
              >
                {last}
              </motion.span>
            </span>
          </h1>

          <p className="mt-6 font-mono text-[clamp(1rem,2.2vw,1.5rem)] font-semibold tracking-tight text-zinc-700 dark:text-zinc-200">
            <Typewriter text={siteProfile.title} delay={500} speed={55} />
          </p>

          <p className="measure mt-6 whitespace-pre-line text-[15px] leading-[1.8] text-zinc-600 dark:text-zinc-400 sm:text-base">
            {heroCopy.supporting.trim()}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-emerald-600 px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-white dark:bg-emerald-500 dark:text-zinc-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE }}
            >
              {heroCopy.primaryCta}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </motion.a>
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE }}
            >
              {heroCopy.secondaryCta}
            </motion.a>
          </div>
        </div>

        {/* Right: portrait + terminal stack */}
        <div className="relative flex flex-col gap-5">
          {imageSrc && (
            <motion.div
              className="group relative aspect-[4/3] w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt ?? "Vaibhav Parmar"}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Subtle gradient overlay at the bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          )}
          <TerminalCard />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#expertise"
        aria-label="Scroll to expertise"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 lg:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll <ArrowDown className="size-3.5" aria-hidden />
      </motion.a>
    </section>
  );
}
