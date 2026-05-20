"use client";

import { useEffect, useState } from "react";

/**
 * Terminal-style backdrop: layered grid, scanlines, viewport corners,
 * and a subtle cursor spotlight on the grid (desktop only).
 */
export function TerminalBackdrop() {
  const [spotlight, setSpotlight] = useState({ x: -9999, y: -9999 });
  const [spotlightOn, setSpotlightOn] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      setSpotlightOn(true);
      setSpotlight({ x: e.clientX, y: e.clientY });
    };

    const onLeave = () => setSpotlightOn(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const spotlightMask = spotlightOn
    ? `radial-gradient(circle 260px at ${spotlight.x}px ${spotlight.y}px, black 0%, transparent 72%)`
    : "radial-gradient(circle 0px at 50% 50%, transparent, transparent)";

  return (
    <div aria-hidden className="terminal-backdrop pointer-events-none fixed inset-0 z-0 bg-background">
      <div className="terminal-backdrop__grid terminal-backdrop__grid--fine" />
      <div className="terminal-backdrop__grid terminal-backdrop__grid--base" />
      <div
        className="terminal-backdrop__grid terminal-backdrop__grid--spotlight"
        style={{
          maskImage: spotlightMask,
          WebkitMaskImage: spotlightMask,
        }}
      />
      <div className="terminal-backdrop__scanlines" />
      <span className="terminal-backdrop__corner terminal-backdrop__corner--tl" />
      <span className="terminal-backdrop__corner terminal-backdrop__corner--tr" />
      <span className="terminal-backdrop__corner terminal-backdrop__corner--bl" />
      <span className="terminal-backdrop__corner terminal-backdrop__corner--br" />
    </div>
  );
}
