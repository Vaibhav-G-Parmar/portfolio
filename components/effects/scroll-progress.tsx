"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-emerald-600 transition-[transform] duration-150 ease-out will-change-transform dark:bg-emerald-400"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
