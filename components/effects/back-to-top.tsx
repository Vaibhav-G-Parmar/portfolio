"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { hoverIcon } from "@/components/ui/motion-presets";

const SHOW_AFTER_PX = 520;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="font-mono fixed bottom-6 right-4 z-40 inline-flex size-11 items-center justify-center border border-emerald-600/35 bg-background/90 text-emerald-700 shadow-[0_0_20px_-6px_rgba(16,185,129,0.45)] backdrop-blur-sm transition hover:border-emerald-600/55 hover:bg-emerald-600/10 dark:border-emerald-400/30 dark:bg-zinc-950/90 dark:text-emerald-400 dark:hover:bg-emerald-400/10 sm:right-6"
          {...hoverIcon}
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
