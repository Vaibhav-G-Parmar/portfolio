"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { brandPromise, siteProfile } from "@/content/site";

const linkClass =
  "inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400";

export function SiteFooter() {
  return (
    <footer className="slab slab--alt">
      <div className="slab__inner py-20 sm:py-24">
        {/* Giant wordmark */}
        <p className="display-mega text-[clamp(2.5rem,11vw,9rem)] leading-[0.9] text-foreground">
          Let&apos;s
          <span className="text-emerald-600 dark:text-emerald-400"> talk.</span>
        </p>

        <div className="mt-14 flex flex-col gap-8 border-t border-[var(--hairline)] pt-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1.5">
            <p className="font-mono text-sm font-bold tracking-[0.08em] text-foreground">{siteProfile.name}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{siteProfile.title}</p>
            <p className="font-mono text-xs tracking-[0.06em] text-zinc-500 dark:text-zinc-500">{siteProfile.location}</p>
          </div>

          <nav aria-label="Social" className="flex flex-wrap items-center gap-6">
            <motion.a href={siteProfile.github} target="_blank" rel="noopener noreferrer" className={linkClass} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
              <Code2 className="size-4" aria-hidden /> GitHub
            </motion.a>
            <motion.a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
              <BriefcaseBusiness className="size-4" aria-hidden /> LinkedIn
            </motion.a>
            <motion.a href={`mailto:${siteProfile.email}`} className={linkClass} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
              <Mail className="size-4" aria-hidden /> Email
            </motion.a>
          </nav>
        </div>

        <p className="mt-12 max-w-2xl font-mono text-[11px] leading-relaxed tracking-[0.06em] text-zinc-500 dark:text-zinc-500 text-center mx-auto">
          {brandPromise}
        </p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.08em] text-zinc-500 dark:text-zinc-600 text-center">
          © {new Date().getFullYear()} {siteProfile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
