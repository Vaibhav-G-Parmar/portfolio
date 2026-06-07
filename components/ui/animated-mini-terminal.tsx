"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type TerminalLine = { text: string; tone?: "cmd" | "ok" | "dim" | "json" };

const toneClass: Record<string, string> = {
  cmd: "text-emerald-400",
  ok: "text-emerald-500 font-semibold",
  dim: "text-zinc-500",
  json: "text-sky-300/90",
};

export function AnimatedMiniTerminal({
  label,
  lines,
  className = "",
}: {
  label: string;
  lines: readonly TerminalLine[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= lines.length) return;
    const delay = count === 0 ? 400 : 550;
    const t = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [inView, count, lines.length]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-lg border border-[var(--hairline)] bg-zinc-950/80 shadow-xl backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-[10px] tracking-wide text-zinc-600">
          {label}
        </span>
      </div>
      <div className="min-h-[7rem] space-y-1.5 px-3 py-3 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {lines.slice(0, count).map((line, i) => (
          <motion.p
            key={i}
            className={toneClass[line.tone ?? "dim"]}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {line.text}
          </motion.p>
        ))}
        {inView && count < lines.length && (
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-emerald-400/80 align-middle" />
        )}
      </div>
    </div>
  );
}
