"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function Typewriter({ text, delay = 0, speed = 45, className }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  // Reduced motion: show immediately
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayed}
      {!done && started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] translate-y-[2px] bg-emerald-500 align-baseline"
          style={{ height: "1em" }}
          aria-hidden
        />
      )}
    </span>
  );
}
