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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(5,150,105,0.08),transparent)] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(52,211,153,0.11),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.06),transparent_38%,transparent_62%,rgba(0,0,0,0.08))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),transparent_38%,transparent_62%,rgba(0,0,0,0.45))]" />
    </div>
  );
}
