"use client";

/**
 * Static terminal-style backdrop (grid + vignette). Visual only; no interaction.
 */
export function TerminalBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-background">
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}
