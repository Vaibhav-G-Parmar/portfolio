"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { RevealSection } from "@/components/ui/reveal-section";
import { projectsHeading } from "@/content/site";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden border border-emerald-600/25 bg-background/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600/45 dark:border-emerald-400/22 dark:bg-zinc-950/70 dark:hover:border-emerald-400/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="absolute inset-0 bg-emerald-600/[0.04] dark:bg-emerald-400/[0.06]" />
      </div>
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-normal text-foreground">
            {project.title}
          </h3>
          <span
            aria-hidden
            className="inline-flex size-10 shrink-0 items-center justify-center border border-emerald-600/30 bg-background/80 text-emerald-700 transition group-hover:border-emerald-600/55 group-hover:text-emerald-800 dark:border-emerald-400/30 dark:text-emerald-400 dark:group-hover:border-emerald-400/55"
          >
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <p className="mt-3 text-[14px] leading-[1.65] text-zinc-700 dark:text-zinc-300">{project.description}</p>
        <div className="font-mono mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="border border-emerald-600/25 bg-background/70 px-2 py-1 text-[11px] tracking-[0.02em] text-zinc-700 dark:border-emerald-400/22 dark:bg-zinc-900/80 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="font-mono mt-6 flex flex-wrap gap-3">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-600 bg-emerald-700 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-600 dark:border-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              Live demo
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {project.links.googlePlay ? (
            <a
              href={project.links.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-600 bg-emerald-700 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-600 dark:border-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              Google Play
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {project.links.appStore ? (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-600/35 bg-background/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 transition hover:border-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/35 dark:hover:bg-emerald-400/10"
            >
              App Store
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-600/35 bg-background/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 transition hover:border-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/35 dark:hover:bg-emerald-400/10"
            >
              <Code2 className="size-3.5" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <RevealSection
      id="projects"
      aria-labelledby="projects-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="font-display mt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
          >
            {projectsHeading}
          </h2>
        </div>
        <div
          aria-hidden
          className="hidden h-px w-40 origin-left bg-emerald-600/35 md:block dark:bg-emerald-400/35"
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </RevealSection>
  );
}
