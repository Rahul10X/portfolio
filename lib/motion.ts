import type { Transition, Variants } from "framer-motion";

export const VIEWPORT_ONCE = { once: true, margin: "-80px 0px" as const };

export function getTransition(reduced: boolean | null): Transition {
  return reduced ? { duration: 0 } : { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] };
}

export function getSpringTransition(reduced: boolean | null): Transition {
  return reduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 400, damping: 28 };
}

export function fadeUpVariants(reduced: boolean | null): Variants {
  return {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };
}

export function staggerContainerVariants(
  reduced: boolean | null,
  staggerChildren = 0.1,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduced
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren, delayChildren: 0.05 },
    },
  };
}

export const NAV_SECTION_IDS = [
  "about",
  "skills",
  "projects",
  "leadership",
  "contact",
] as const;

export type NavSectionId = (typeof NAV_SECTION_IDS)[number];
