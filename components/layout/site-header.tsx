"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Menu, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { siteProfile } from "@/content/site";
import { hoverIcon } from "@/components/ui/motion-presets";
import { useActiveSection } from "@/hooks/use-active-section";

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.75 5.64.75 12c0 5.1 3.16 9.42 7.55 10.95.55.1.75-.25.75-.55v-2.1c-3.07.68-3.72-1.35-3.72-1.35-.5-1.32-1.22-1.67-1.22-1.67-1-.7.08-.69.08-.69 1.1.08 1.68 1.16 1.68 1.16.98 1.71 2.58 1.22 3.2.93.1-.73.38-1.22.68-1.5-2.45-.29-5.02-1.25-5.02-5.56 0-1.23.43-2.23 1.14-3.02-.11-.29-.5-1.47.11-3.06 0 0 .93-.3 3.05 1.15.89-.25 1.84-.38 2.78-.38.94 0 1.89.13 2.78.38 2.12-1.45 3.05-1.15 3.05-1.15.61 1.59.22 2.77.11 3.06.71.79 1.14 1.79 1.14 3.02 0 4.32-2.58 5.27-5.04 5.55.39.35.74 1.03.74 2.08v3.07c0 .31.2.66.76.55 4.38-1.54 7.53-5.85 7.53-10.95C23.25 5.64 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.65H9.36V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.35 4.22 5.4v6.34ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`font-mono fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-emerald-600/25 bg-background/90 backdrop-blur-md dark:border-emerald-400/20" : "border-transparent bg-transparent"}`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:h-16 sm:px-6">
        <Link
          href="#top"
          className="group inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-foreground"
        >
          <motion.span
            className="flex size-9 items-center justify-center border border-emerald-600/35 bg-background/80 text-emerald-700 dark:border-emerald-400/35 dark:text-emerald-400"
            {...hoverIcon}
          >
            <Terminal className="size-[17px]" aria-hidden />
          </motion.span>
          <span className="leading-tight">
            <span className="hidden text-emerald-700 dark:text-emerald-400 sm:inline">{siteProfile.name}</span>
            <span className="sm:hidden">{siteProfile.name.split(" ")[0]}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative border px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-emerald-600/30 text-emerald-700 dark:border-emerald-400/25 dark:text-emerald-400"
                    : "border-transparent text-foreground/65 hover:border-emerald-600/30 hover:text-emerald-700 dark:hover:border-emerald-400/25 dark:hover:text-emerald-400"
                }`}
                whileHover={isActive ? undefined : { y: -1, scale: 1.02, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
              >
                ▸ {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-emerald-600 dark:bg-emerald-400" />
                )}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <motion.a
              href={siteProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/80 transition hover:border-emerald-600/45 hover:text-foreground dark:border-emerald-400/25 dark:bg-zinc-950/80"
              {...hoverIcon}
            >
              <GitHubIcon className="size-[18px]" />
            </motion.a>
            <motion.a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/80 transition hover:border-emerald-600/45 hover:text-foreground dark:border-emerald-400/25 dark:bg-zinc-950/80"
              {...hoverIcon}
            >
              <LinkedInIcon className="size-[18px]" />
            </motion.a>
            <motion.a
              href={`mailto:${siteProfile.email}`}
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/80 transition hover:border-emerald-600/45 hover:text-foreground dark:border-emerald-400/25 dark:bg-zinc-950/80"
              {...hoverIcon}
            >
              <Mail className="size-[18px]" aria-hidden />
            </motion.a>
          </div>

          <motion.button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={
              mounted
                ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
                : "Toggle color theme"
            }
            className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/85 transition hover:border-emerald-600/45 hover:text-foreground disabled:pointer-events-none dark:border-emerald-400/25 dark:bg-zinc-950/80"
            disabled={!mounted}
            {...hoverIcon}
          >
            {!mounted ? (
              <Sun className="size-[18px] opacity-35" aria-hidden />
            ) : resolvedTheme === "dark" ? (
              <Moon className="size-[18px]" />
            ) : (
              <Sun className="size-[18px]" />
            )}
          </motion.button>

          <motion.button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 md:hidden dark:border-emerald-400/25"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            {...hoverIcon}
          >
            <Menu className="size-5" />
          </motion.button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-emerald-600/20 bg-background/95 font-mono backdrop-blur-md transition-[max-height,opacity] duration-200 ease-out dark:border-emerald-400/20 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {NAV.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 text-[13px] uppercase tracking-[0.14em] transition-colors hover:bg-emerald-600/10 hover:text-emerald-700 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400 ${
                  isActive
                    ? "border-l-2 border-emerald-500 text-emerald-700 dark:text-emerald-400"
                    : "text-foreground/80"
                }`}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
              >
                ▸ {item.label}
              </motion.a>
            );
          })}

          <div className="mt-2 flex items-center gap-2 px-3 pb-1">
            <motion.a
              href={siteProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/80 transition hover:border-emerald-600/45 hover:text-foreground dark:border-emerald-400/25 dark:bg-zinc-950/80"
              {...hoverIcon}
            >
              <GitHubIcon className="size-[18px]" />
            </motion.a>
            <motion.a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/80 transition hover:border-emerald-600/45 hover:text-foreground dark:border-emerald-400/25 dark:bg-zinc-950/80"
              {...hoverIcon}
            >
              <LinkedInIcon className="size-[18px]" />
            </motion.a>
            <motion.a
              href={`mailto:${siteProfile.email}`}
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/80 transition hover:border-emerald-600/45 hover:text-foreground dark:border-emerald-400/25 dark:bg-zinc-950/80"
              {...hoverIcon}
            >
              <Mail className="size-[18px]" aria-hidden />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
