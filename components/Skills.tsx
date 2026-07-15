"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/data/content";
import {
  fadeUpVariants,
  getTransition,
  staggerContainerVariants,
  VIEWPORT_ONCE,
} from "@/lib/motion";

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);

  return (
    <section
      id="skills"
      className="section-spacing scroll-mt-16"
      aria-labelledby="skills-heading"
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
            id="skills-heading"
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl border-b-[3px] border-ink pb-4"
          >
            Skills
          </motion.h2>

          <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                variants={fadeUpVariants(reducedMotion)}
                transition={transition}
                className="min-w-0"
              >
                <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-ink sm:text-base">
                  <span className="h-2 w-2 shrink-0 bg-signal" aria-hidden="true" />
                  {group.category}
                </h3>
                <ul className="flex min-w-0 flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block max-w-full brutalist-border bg-paper px-3.5 py-1.5 font-mono text-xs sm:text-sm font-bold text-ink break-words shadow-[3px_3px_0px_0px_#111111] hover:bg-acid transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#111111]">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
