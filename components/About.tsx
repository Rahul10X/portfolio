"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/data/content";
import {
  fadeUpVariants,
  getTransition,
  staggerContainerVariants,
  VIEWPORT_ONCE,
} from "@/lib/motion";

export default function About() {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);

  return (
    <section
      id="about"
      className="section-spacing scroll-mt-16"
      aria-labelledby="about-heading"
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
            id="about-heading"
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl border-b-[3px] border-ink pb-4"
          >
            About
          </motion.h2>

          <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:items-start">
            <motion.p
              variants={fadeUpVariants(reducedMotion)}
              transition={transition}
              className="max-w-prose font-sans text-lg font-medium leading-relaxed text-ink brutalist-border bg-paper p-6 brutalist-shadow"
            >
              {about.objective}
            </motion.p>

            <motion.article
              variants={fadeUpVariants(reducedMotion)}
              transition={transition}
              className="min-w-0 brutalist-border bg-paper p-6 brutalist-shadow sm:p-8"
            >
              <h3 className="font-display text-lg font-black uppercase tracking-tight text-ink break-words sm:text-xl">
                {about.education.degree}
              </h3>
              <p className="mt-3 font-mono text-sm font-bold uppercase text-cobalt break-words">
                {about.education.institution}
              </p>
              <div className="mt-4">
                <span className="inline-block brutalist-border bg-acid px-2.5 py-1 font-mono text-xs font-bold text-ink">
                  {about.education.detail}
                </span>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
