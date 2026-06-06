"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { heroStats } from "@/content/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Stats() {
  return (
    <section aria-label="Key numbers" className="slab slab--alt">
      <div className="slab__inner !py-0">
        <div className="grid grid-cols-2 gap-px overflow-hidden bg-[var(--hairline)] lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-3 bg-[var(--slab-alt)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
            >
              <span className="display-xl text-[clamp(2.5rem,6vw,4.5rem)] text-emerald-600 dark:text-emerald-400">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="font-mono text-[12px] uppercase leading-snug tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
