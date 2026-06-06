"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SlabHeading } from "@/components/ui/slab-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { projectsHeading } from "@/content/site";
import { projects, type Project } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

const linkClass =
  "inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { live, googlePlay, appStore, repo } = project.links;

  return (
    <StaggerItem>
      <motion.article
        className="group relative grid gap-6 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12"
        whileHover="hover"
      >
        {/* Index */}
        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
          <span className="section-index text-sm">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {/* Title + body */}
        <div className="min-w-0">
          <h3 className="display-xl text-[clamp(1.8rem,4.5vw,3.25rem)] text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-[12px] text-zinc-500 dark:text-zinc-500">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-5 lg:flex-col lg:items-end lg:gap-3">
          {live ? (
            <a href={live} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`Visit ${project.title} (opens in new tab)`}>
              Visit <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {googlePlay ? (
            <a href={googlePlay} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Google Play <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {appStore ? (
            <a href={appStore} target="_blank" rel="noopener noreferrer" className={linkClass}>
              App Store <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {repo ? (
            <a href={repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Source <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
        </div>

        {/* Hover accent line */}
        <motion.span
          aria-hidden
          className="absolute -bottom-px left-0 h-px bg-emerald-500 dark:bg-emerald-400"
          initial={{ width: "0%" }}
          variants={{ hover: { width: "100%" } }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </motion.article>
    </StaggerItem>
  );
}

export function Projects() {
  return (
    <AnimatedSection id="projects" className="slab slab--alt scroll-mt-20 !border-t-0">
      <div className="slab__inner !pt-16 sm:!pt-20 lg:!pt-24">
        <SlabHeading index="03" label="Projects" title={projectsHeading} titleId="projects-heading" />

        <StaggerContainer className="mt-10 divide-y divide-[var(--hairline)]" staggerDelay={0.08}>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
