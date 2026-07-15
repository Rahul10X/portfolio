"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import {
  NAV_SECTION_IDS,
  type NavSectionId,
} from "@/lib/motion";

const navLinks: { label: string; href: `#${NavSectionId}` }[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const reducedMotion = useReducedMotion();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSectionId | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setScrolledPastHero(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    heroObserver.observe(hero);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as NavSectionId);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    NAV_SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-ink bg-paper"
      initial={false}
    >
      <nav
        className="container-content flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-display text-base font-black tracking-tight text-ink transition-colors hover:text-signal md:text-lg"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.slice(1) as NavSectionId;
            const isActive = activeSection === sectionId;

            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-signal"
                      : "text-ink hover:text-signal"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 h-[3px] w-full bg-signal"
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center p-2 text-ink transition-colors hover:text-signal md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={
              reducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              reducedMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.25, ease: "easeInOut" }
            }
            className="overflow-hidden border-t-[3px] border-ink bg-paper md:hidden"
          >
            <ul className="flex flex-col gap-2 px-4 py-6">
              {navLinks.map(({ label, href }) => {
                const sectionId = href.slice(1) as NavSectionId;
                const isActive = activeSection === sectionId;

                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-mono text-sm font-bold uppercase tracking-wider transition-colors py-2 ${
                        isActive
                          ? "text-signal"
                          : "text-ink hover:text-signal"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
