"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";

/** Intercepts in-page #anchor clicks so they glide via Lenis instead of jumping. */
function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.3 });
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

/** Buttery smooth scrolling (Lenis). Respects reduced-motion via Lenis defaults. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.15, smoothWheel: true }}>
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
