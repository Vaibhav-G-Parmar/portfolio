"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteProfile } from "@/content/site";

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

const railLink = "text-foreground/45 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400";

export function SideRails() {
  return (
    <>
      {/* Left rail — vertical wordmark */}
      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-[5.5rem] flex-col items-center justify-between border-r border-[var(--hairline)] py-8 lg:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" aria-hidden />
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-foreground/50"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {siteProfile.name}
        </span>
        <span
          className="font-mono text-[10px] tracking-[0.3em] text-foreground/30"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          © {new Date().getFullYear()}
        </span>
      </div>

      {/* Right rail — socials + status */}
      <div className="fixed inset-y-0 right-0 z-40 hidden w-[5.5rem] flex-col items-center justify-between border-l border-[var(--hairline)] py-8 lg:flex">
        <span
          className="pointer-events-none font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/30"
          style={{ writingMode: "vertical-rl" }}
        >
          {siteProfile.location}
        </span>

        <div className="flex flex-col items-center gap-5">
          <motion.a href={siteProfile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={railLink} whileHover={{ y: -2 }}>
            <GitHubIcon className="size-[18px]" />
          </motion.a>
          <motion.a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={railLink} whileHover={{ y: -2 }}>
            <LinkedInIcon className="size-[18px]" />
          </motion.a>
          <motion.a href={`mailto:${siteProfile.email}`} aria-label="Email" className={railLink} whileHover={{ y: -2 }}>
            <Mail className="size-[18px]" />
          </motion.a>
        </div>

        <span className="h-16 w-px bg-gradient-to-b from-emerald-500/60 to-transparent" aria-hidden />
      </div>
    </>
  );
}
