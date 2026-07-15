"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import {
  fadeUpVariants,
  getTransition,
  staggerContainerVariants,
  VIEWPORT_ONCE,
} from "@/lib/motion";

const linkClassName =
  "inline-flex w-full min-w-0 items-center justify-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-ink bg-paper brutalist-border brutalist-shadow brutalist-interactive sm:w-auto";

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t-[3px] border-ink pt-section-lg pb-section md:pt-section-lg md:pb-section-lg"
      aria-labelledby="contact-heading"
    >
      <div className="container-content min-w-0">
        <motion.div
          className="mx-auto flex min-w-0 max-w-xl flex-col items-center gap-8 text-center md:gap-10"
          variants={staggerContainerVariants(reducedMotion, 0.1)}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.h2
            id="contact-heading"
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl"
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.div
            variants={staggerContainerVariants(reducedMotion, 0.08)}
            className="flex min-w-0 w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <motion.a
              href={`mailto:${profile.email}`}
              variants={fadeUpVariants(reducedMotion)}
              transition={transition}
              className={linkClassName}
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
              className={linkClassName}
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
              className={linkClassName}
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.footer
          className="mt-16 flex min-w-0 flex-col items-center gap-2 text-center md:mt-20"
          variants={fadeUpVariants(reducedMotion)}
          transition={transition}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="font-mono text-xs font-bold uppercase text-ink">{profile.location}</p>
          <p className="font-mono text-xs font-bold uppercase text-muted">
            &copy; {currentYear} {profile.name}
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
