"use client";

type MarqueeProps = {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
};

/** Infinite horizontal ticker. Duplicates the set so a -50% shift loops seamlessly. */
export function Marquee({ items, reverse = false, className = "" }: MarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`} aria-hidden>
      <ul className="marquee__track gap-0 list-none">
        {sequence.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center">
            <span className="display-xl px-6 text-[clamp(1.5rem,3.2vw,2.6rem)] text-foreground/70 transition-colors">
              {item}
            </span>
            <span className="text-emerald-500/70 dark:text-emerald-400/70" aria-hidden>
              ✦
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
