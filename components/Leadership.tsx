"use client";

import { motion, useReducedMotion } from "framer-motion";
import { leadership } from "@/data/content";
import {
  fadeUpVariants,
  getTransition,
  staggerContainerVariants,
  VIEWPORT_ONCE,
} from "@/lib/motion";

const cardClassName =
  "flex min-w-0 flex-col gap-3 brutalist-border bg-paper p-6 sm:p-8 brutalist-shadow";

export default function Leadership() {
  const reducedMotion = useReducedMotion();
  const transition = getTransition(reducedMotion);

  return (
    <section
      id="leadership"
      className="section-spacing scroll-mt-16"
      aria-labelledby="leadership-heading"
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
            id="leadership-heading"
            variants={fadeUpVariants(reducedMotion)}
            transition={transition}
            className="font-display text-4xl font-black uppercase tracking-tight text-ink md:text-5xl border-b-[3px] border-ink pb-4"
          >
            Leadership
          </motion.h2>

          <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {leadership.map((item) => (
              <motion.article
                key={item.role}
                variants={fadeUpVariants(reducedMotion)}
                transition={transition}
                className={cardClassName}
              >
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-ink break-words sm:text-xl">
                  {item.role}
                </h3>

                <p className="font-mono text-sm font-bold uppercase text-cobalt break-words sm:text-base">
                  {item.organization}
                </p>

                <p className="text-base leading-relaxed text-ink/80 font-medium">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
