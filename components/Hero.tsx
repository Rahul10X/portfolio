"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import {
  fadeUpVariants,
  getTransition,
  staggerContainerVariants,
} from "@/lib/motion";

const ctaBase =
  "inline-flex w-full min-w-0 items-center justify-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider sm:w-auto brutalist-border brutalist-shadow brutalist-interactive";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);

  return (
    <section
      id="hero"
      className="scroll-mt-16 flex min-h-[90vh] items-center"
      aria-labelledby="hero-heading"
    >
      <div className="container-content min-w-0 py-section md:py-section-lg">
        <motion.div
          className="flex max-w-3xl min-w-0 flex-col gap-6"
          variants={staggerContainerVariants(reducedMotion, 0.12)}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.h1
            id="hero-heading"
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="font-display text-5xl font-black uppercase tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="self-start brutalist-border bg-signal px-4 py-2 font-mono text-sm font-extrabold uppercase tracking-wider text-ink brutalist-shadow"
          >
            {profile.title}
          </motion.div>

          <motion.p
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="max-w-xl brutalist-border bg-cobalt px-5 py-4 font-mono text-sm font-bold tracking-wide text-paper brutalist-shadow sm:text-base leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={staggerContainerVariants(reducedMotion, 0.08)}
            className="flex min-w-0 flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href={`mailto:${profile.email}`}
              variants={fadeUpVariants(reducedMotion)}
              transition={transition}
              className={`${ctaBase} bg-signal text-ink`}
              aria-label={`Email ${profile.name}`}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              Email
            </motion.a>

            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUpVariants(reducedMotion)}
              transition={transition}
              className={`${ctaBase} bg-paper text-ink`}
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
              LinkedIn
            </motion.a>

            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUpVariants(reducedMotion)}
              transition={transition}
              className={`${ctaBase} bg-paper text-ink`}
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
