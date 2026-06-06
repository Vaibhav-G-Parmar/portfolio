"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts up from 0 to `value` once it scrolls into view. */
export function Counter({ value, suffix = "", prefix = "", duration = 1600, decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(value * easeOutExpo(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
