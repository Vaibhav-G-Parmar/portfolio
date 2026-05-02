"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { siteProfile } from "@/content/site";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

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
          <span className="flex size-9 items-center justify-center border border-emerald-600/35 bg-background/80 text-emerald-700 dark:border-emerald-400/35 dark:text-emerald-400">
            <Terminal className="size-[17px]" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="hidden text-emerald-700 dark:text-emerald-400 sm:inline">{siteProfile.name}</span>
            <span className="sm:hidden">{siteProfile.name.split(" ")[0]}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border border-transparent px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-foreground/65 transition-colors hover:border-emerald-600/30 hover:text-emerald-700 dark:hover:border-emerald-400/25 dark:hover:text-emerald-400"
            >
              ▸ {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={
              mounted
                ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
                : "Toggle color theme"
            }
            className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 text-foreground/85 transition hover:border-emerald-600/45 hover:text-foreground disabled:pointer-events-none dark:border-emerald-400/25 dark:bg-zinc-950/80"
            disabled={!mounted}
          >
            {!mounted ? (
              <Sun className="size-[18px] opacity-35" aria-hidden />
            ) : resolvedTheme === "dark" ? (
              <Moon className="size-[18px]" />
            ) : (
              <Sun className="size-[18px]" />
            )}
          </button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-emerald-600/25 bg-background/80 md:hidden dark:border-emerald-400/25"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-emerald-600/20 bg-background/95 font-mono backdrop-blur-md transition-[max-height,opacity] duration-200 ease-out dark:border-emerald-400/20 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-[13px] uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:bg-emerald-600/10 hover:text-emerald-700 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400"
            >
              ▸ {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
