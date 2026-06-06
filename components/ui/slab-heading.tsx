"use client";

import { motion } from "framer-motion";

type SlabHeadingProps = {
  index: string;
  label: string;
  title: string;
  titleId?: string;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function SlabHeading({ index, label, title, titleId, className = "" }: SlabHeadingProps) {
  return (
    <div className={className}>
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="section-index text-sm sm:text-base">{index}</span>
        <span className="h-px w-10 bg-emerald-500/50 dark:bg-emerald-400/50" aria-hidden />
        <span className="kicker text-zinc-500 dark:text-zinc-400">{label}</span>
      </motion.div>

      <span className="reveal-mask mt-5">
        <motion.h2
          id={titleId}
          className="display-xl text-[clamp(2rem,5.5vw,4rem)] text-foreground"
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {title}
        </motion.h2>
      </span>
    </div>
  );
}
