"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/data/content";
import {
  fadeUpVariants,
  getTransition,
  staggerContainerVariants,
  VIEWPORT_ONCE,
} from "@/lib/motion";

const pillClassName =
  "inline-block max-w-full border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs font-bold text-ink break-words";

const cardClassName =
  "flex min-w-0 flex-col brutalist-border bg-paper brutalist-shadow brutalist-interactive";

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);

  return (
    <motion.article
      variants={fadeUpVariants(reducedMotion)}
      transition={transition}
      className={`${cardClassName} ${
        featured
          ? "gap-5 p-6 sm:p-10"
          : "gap-4 p-5 sm:p-8"
      }`}
    >
      {featured && (
        <div className="self-start brutalist-border bg-acid px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0px_0px_#111111]">
          Featured Project
        </div>
      )}

      <h3
        className={`font-display font-black uppercase tracking-tight text-ink break-words ${
          featured
            ? "text-2xl sm:text-3xl md:text-4xl"
            : "text-lg sm:text-xl"
        }`}
      >
        {project.title}
      </h3>

      <p className="text-base leading-relaxed text-ink/80 font-medium">
        {project.description}
      </p>

      <motion.ul
        className="flex min-w-0 flex-wrap gap-2"
        variants={staggerContainerVariants(reducedMotion, 0.05)}
        initial={reducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        {project.stack.map((item) => (
          <motion.li key={item} variants={fadeUpVariants(reducedMotion)}>
            <span className={pillClassName}>{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      {(project.liveUrl || project.githubUrl) && (
        <div className="flex flex-wrap items-center gap-5 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cobalt hover:text-signal transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cobalt hover:text-signal transition-colors"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="section-spacing scroll-mt-16"
      aria-labelledby="projects-heading"
    >
      <div className="container-content min-w-0">
        <motion.div
          className="flex min-w-0 flex-col gap-8 md:gap-12"
          variants={staggerContainerVariants(reducedMotion, 0.1)}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.h2
            id="projects-heading"
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl border-b-[3px] border-ink pb-4"
          >
            Projects
          </motion.h2>

          {featuredProject && (
            <ProjectCard project={featuredProject} featured />
          )}

          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
