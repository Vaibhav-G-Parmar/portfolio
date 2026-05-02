import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { brandPromise, siteProfile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-600/20 bg-background/70 py-14 backdrop-blur-sm dark:border-emerald-400/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-2">
          <p className="font-mono text-sm font-medium tracking-[0.08em] text-emerald-800 dark:text-emerald-400">
            {siteProfile.name}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{siteProfile.title}</p>
          <p className="font-mono text-xs tracking-[0.06em] text-zinc-500 dark:text-zinc-500">
            {siteProfile.location}
          </p>
        </div>
        <nav aria-label="Social" className="font-mono flex flex-wrap items-center gap-2">
          <a
            href={siteProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-600/30 bg-background/80 px-4 py-2 text-[12px] uppercase tracking-[0.1em] text-foreground/90 transition hover:border-emerald-600/50 dark:border-emerald-400/30 dark:hover:border-emerald-400/50"
          >
            <Code2 className="size-4" aria-hidden /> GitHub
          </a>
          <a
            href={siteProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-600/30 bg-background/80 px-4 py-2 text-[12px] uppercase tracking-[0.1em] text-foreground/90 transition hover:border-emerald-600/50 dark:border-emerald-400/30 dark:hover:border-emerald-400/50"
          >
            <BriefcaseBusiness className="size-4" aria-hidden /> LinkedIn
          </a>
          <a
            href={`mailto:${siteProfile.email}`}
            className="inline-flex items-center gap-2 border border-emerald-600/30 bg-background/80 px-4 py-2 text-[12px] uppercase tracking-[0.1em] text-foreground/90 transition hover:border-emerald-600/50 dark:border-emerald-400/30 dark:hover:border-emerald-400/50"
          >
            <Mail className="size-4" aria-hidden /> Email
          </a>
        </nav>
      </div>
      <p className="font-mono mx-auto mt-12 max-w-6xl px-4 text-[11px] leading-relaxed tracking-[0.06em] text-zinc-500 sm:px-6 dark:text-zinc-500">
        {brandPromise}
      </p>
    </footer>
  );
}
