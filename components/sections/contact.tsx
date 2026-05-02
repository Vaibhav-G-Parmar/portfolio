"use client";

import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { RevealSection } from "@/components/ui/reveal-section";
import { contactHeading, contactLead, siteProfile } from "@/content/site";

export function Contact() {
  return (
    <RevealSection
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-20%] bottom-[-15%] h-[380px] bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.06),transparent_58%)] dark:bg-[radial-gradient(circle_at_50%_40%,rgba(52,211,153,0.07),transparent_58%)]"
      />

      <div className="relative border border-emerald-600/30 bg-background/75 dark:border-emerald-400/25 dark:bg-zinc-950/80">
        <div
          aria-hidden
          className="flex h-9 items-center gap-1.5 border-b border-emerald-600/25 px-3 dark:border-emerald-400/20"
        >
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-amber-500/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="p-8 sm:p-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-4 max-w-xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
          >
            {contactHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300">
            {contactLead}
          </p>

          <div className="font-mono mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${siteProfile.email}`}
              aria-label={`Email ${siteProfile.email}`}
              className="inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-700 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-emerald-600 dark:border-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              <Mail className="size-4" aria-hidden />
              Email
            </a>
            <a
              href={`tel:${siteProfile.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-emerald-600/35 bg-background/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm transition hover:border-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/35 dark:hover:bg-emerald-400/10"
            >
              <Phone className="size-4" aria-hidden />
              {siteProfile.phoneDisplay}
            </a>
            <a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-emerald-600/35 bg-background/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm transition hover:border-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/35 dark:hover:bg-emerald-400/10"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border border-emerald-600/35 bg-background/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm transition hover:border-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/35 dark:hover:bg-emerald-400/10"
            >
              <Download className="size-4" aria-hidden />
              Download resume
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
