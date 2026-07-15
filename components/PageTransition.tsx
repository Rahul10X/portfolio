"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, getTransition } from "@/lib/motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? "visible" : "hidden"}
      animate="visible"
      variants={fadeUpVariants(reducedMotion)}
      transition={getTransition(reducedMotion)}
    >
      {children}
    </motion.div>
  );
}
