"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";

type RevealSectionProps = ComponentPropsWithoutRef<"section">;

/**
 * Intersection-observer reveal (replaces framer-motion whileInView for smaller bundle).
 */
export function RevealSection({ children, className = "", ...props }: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "-8% 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
