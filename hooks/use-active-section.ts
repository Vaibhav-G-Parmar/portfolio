"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["about", "skills", "projects", "gallery", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const visibleSections = new Map<string, number>();

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          });

          let best = "";
          let bestRatio = 0;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = sectionId;
            }
          });

          if (best) setActive(best);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px -30% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
