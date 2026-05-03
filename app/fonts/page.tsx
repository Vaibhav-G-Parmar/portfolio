import Link from "next/link";
import type { Metadata } from "next";
import {
  DM_Sans,
  Fraunces,
  Geist,
  Instrument_Serif,
  Literata,
  Manrope,
  Newsreader,
  Outfit,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Source_Serif_4,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Font samples",
  description: "Compare typography pairings for the portfolio.",
  robots: { index: false, follow: false },
};

/** Next.js requires font loaders at module scope (one const per loader). */
const sampleGeistA = Geist({ subsets: ["latin"] });
const sampleInstrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const sampleJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const samplePlayfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const sampleDmSans = DM_Sans({ subsets: ["latin"] });
const sampleFraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600"] });
const sampleOutfit = Outfit({ subsets: ["latin"] });
const sampleNewsreader = Newsreader({ subsets: ["latin"], weight: ["400", "600"] });
const sampleManrope = Manrope({ subsets: ["latin"] });
const sampleLiterata = Literata({ subsets: ["latin"], weight: ["500", "600"] });
const sampleGeistF = Geist({ subsets: ["latin"] });
const sampleSourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"] });

const sampleBody =
  "Software Engineer building secure web and mobile apps in React, Node, Java, Python, and cloud APIs, mostly with Agile teams.";

const pairings = [
  {
    id: "A",
    name: "Geist + Instrument Serif",
    vibe: "Current site · neutral tech + editorial serif",
    sans: sampleGeistA,
    display: sampleInstrument,
  },
  {
    id: "B",
    name: "Plus Jakarta Sans + Playfair Display",
    vibe: "Premium corporate · confident headlines",
    sans: sampleJakarta,
    display: samplePlayfair,
  },
  {
    id: "C",
    name: "DM Sans + Fraunces",
    vibe: "Warm & approachable · soft serif curves",
    sans: sampleDmSans,
    display: sampleFraunces,
  },
  {
    id: "D",
    name: "Outfit + Newsreader",
    vibe: "Modern editorial · crisp UI + newspaper serif",
    sans: sampleOutfit,
    display: sampleNewsreader,
  },
  {
    id: "E",
    name: "Manrope + Literata",
    vibe: "Readable long-form · balanced for dense copy",
    sans: sampleManrope,
    display: sampleLiterata,
  },
  {
    id: "F",
    name: "Geist + Source Serif 4",
    vibe: "Classic pairing · crisp sans + scholarly serif",
    sans: sampleGeistF,
    display: sampleSourceSerif,
  },
];

export default function FontsSamplePage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.26em] text-foreground/45">
        Typography lab
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        Pick a pairing (A-F)
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
        Live samples using{" "}
        <a
          href="https://fonts.google.com/"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Fonts
        </a>{" "}
        in your Next.js app. Open this page in light and dark mode. Reply with a letter (e.g.
        &quot;use D&quot;) to apply it site-wide.
      </p>
      <p className="mt-4">
        <Link
          href="/"
          className="text-sm font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
        >
          ← Back to portfolio
        </Link>
      </p>

      <ul className="mt-12 flex flex-col gap-10">
        {pairings.map((pair) => (
          <li
            key={pair.id}
            className={`rounded-3xl border border-foreground/10 bg-background/60 p-6 shadow-sm backdrop-blur-sm dark:bg-white/[0.04] ${pair.sans.className} ${pair.display.className}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-foreground/10 pb-4">
              <span className="font-mono text-lg font-semibold tabular-nums text-foreground">
                {pair.id}
              </span>
              <span className="max-w-[min(100%,280px)] text-right text-xs leading-snug text-foreground/55">
                {pair.vibe}
              </span>
            </div>
            <p className="mt-3 font-mono text-[13px] text-foreground/55">{pair.name}</p>

            <div className="mt-6 space-y-4">
              <p
                style={{ fontFamily: pair.display.style.fontFamily }}
                className="text-[clamp(1.85rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground"
              >
                Vaibhav Parmar
              </p>
              <p
                style={{ fontFamily: pair.display.style.fontFamily }}
                className="bg-gradient-to-r from-sky-900 via-teal-800 to-indigo-900 bg-clip-text text-xl font-semibold leading-snug text-transparent dark:from-slate-100 dark:via-sky-100 dark:to-indigo-100 sm:text-2xl"
              >
                Software Engineer.
              </p>
              <p
                style={{ fontFamily: pair.sans.style.fontFamily }}
                className="max-w-xl text-[15px] leading-[1.7] text-foreground/75 dark:text-foreground/78"
              >
                {sampleBody}
              </p>
              <p
                style={{ fontFamily: pair.sans.style.fontFamily }}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45"
              >
                Selected work · About · Contact
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
