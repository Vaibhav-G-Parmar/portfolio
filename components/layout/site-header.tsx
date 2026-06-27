"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Menu, Terminal } from "lucide-react";
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
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`font-mono fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 shadow-[0_1px_0_var(--hairline)] backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="flex h-16 items-center justify-between gap-6 px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="#top"
          className="group inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-foreground"
        >
          <motion.span className="text-emerald-600 dark:text-emerald-400" {...hoverIcon}>
            <Terminal className="size-[18px]" aria-hidden />
          </motion.span>
          <span className="leading-tight">
            <span className="hidden sm:inline">{siteProfile.name}</span>
            <span className="sm:hidden">{siteProfile.name.split(" ")[0]}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                whileHover={isActive ? undefined : { y: -1, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.96 }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-emerald-500 dark:bg-emerald-400"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Socials */}
          <div className="hidden items-center gap-2 md:flex">
            <motion.a
              href={siteProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              {...hoverIcon}
            >
              <GitHubIcon className="size-[18px]" />
            </motion.a>
            <motion.a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              {...hoverIcon}
            >
              <LinkedInIcon className="size-[18px]" />
            </motion.a>
            <motion.a
              href={`mailto:${siteProfile.email}`}
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              {...hoverIcon}
            >
              <Mail className="size-[18px]" aria-hidden />
            </motion.a>
          </div>

          <motion.button
            type="button"
            className="inline-flex size-10 items-center justify-center text-foreground transition-colors hover:text-emerald-600 md:hidden dark:hover:text-emerald-400"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            {...hoverIcon}
          >
            <Menu className="size-6" />
          </motion.button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-200 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-lg font-bold uppercase tracking-[0.08em] transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                  isActive ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"
                }`}
                whileHover={{ x: 6, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            );
          })}

          <div className="mt-4 flex items-center gap-4 border-t border-[var(--hairline)] pt-4">
            <motion.a
              href={siteProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              {...hoverIcon}
            >
              <GitHubIcon className="size-[20px]" />
            </motion.a>
            <motion.a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              {...hoverIcon}
            >
              <LinkedInIcon className="size-[20px]" />
            </motion.a>
            <motion.a
              href={`mailto:${siteProfile.email}`}
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              {...hoverIcon}
            >
              <Mail className="size-[20px]" aria-hidden />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
