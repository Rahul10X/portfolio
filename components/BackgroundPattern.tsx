"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const getDuration = (base: number, step: number, col: number, row: number, seed: number) => {
  const offset = (col * 17 + row * 23 + seed * 13) % 7;
  return base + offset * step;
};

export default function BackgroundPattern() {
  const reducedMotion = useReducedMotion();
  const [grid, setGrid] = useState({ cols: 6, rows: 5 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setGrid({
        cols: Math.ceil(w / 400) + 1,
        rows: Math.ceil(h / 400) + 1,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: grid.rows }).map((_, r) =>
          Array.from({ length: grid.cols }).map((_, c) => {
            const tx = c * 400;
            const ty = r * 400;

            return (
              <g key={`${r}-${c}`} transform={`translate(${tx}, ${ty})`}>
                {/* Grid Lines */}
                <g stroke="#111111" strokeWidth="1" opacity="0.14">
                  <line x1="0" y1="0" x2="400" y2="0" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="200" x2="400" y2="200" />
                  <line x1="0" y1="300" x2="400" y2="300" />
                  <line x1="0" y1="0" x2="0" y2="400" />
                  <line x1="100" y1="0" x2="100" y2="400" />
                  <line x1="200" y1="0" x2="200" y2="400" />
                  <line x1="300" y1="0" x2="300" y2="400" />
                </g>

                {/* Diagonal line */}
                <g stroke="#111111" strokeWidth="10" opacity="0.05">
                  <line x1="-50" y1="450" x2="450" y2="-50" />
                </g>

                {/* Orange Crosshairs */}
                <motion.g
                  animate={reducedMotion ? {} : { rotate: [-8, 8] }}
                  transition={{
                    duration: getDuration(3, 0.25, c, r, 1),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "100px 100px" }}
                >
                  <g stroke="#FF4D00" strokeWidth="3">
                    <line x1="88" y1="100" x2="112" y2="100" />
                    <line x1="100" y1="88" x2="100" y2="112" />
                  </g>
                </motion.g>

                <motion.g
                  animate={reducedMotion ? {} : { rotate: [8, -8] }}
                  transition={{
                    duration: getDuration(3, 0.25, c, r, 2),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "300px 300px" }}
                >
                  <g stroke="#FF4D00" strokeWidth="3">
                    <line x1="288" y1="300" x2="312" y2="300" />
                    <line x1="300" y1="288" x2="300" y2="312" />
                  </g>
                </motion.g>

                <motion.g
                  animate={reducedMotion ? {} : { rotate: [-10, 10] }}
                  transition={{
                    duration: getDuration(3, 0.25, c, r, 3),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "8px 200px" }}
                >
                  <g stroke="#FF4D00" strokeWidth="2">
                    <line x1="0" y1="200" x2="16" y2="200" />
                    <line x1="8" y1="192" x2="8" y2="208" />
                  </g>
                </motion.g>

                {/* Cobalt Squares */}
                <motion.g
                  animate={reducedMotion ? {} : { y: [-6, 6] }}
                  transition={{
                    duration: getDuration(2.5, 0.25, c, r, 4),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <rect
                    x="40"
                    y="240"
                    width="34"
                    height="34"
                    fill="none"
                    stroke="#0047FF"
                    strokeWidth="2"
                  />
                </motion.g>

                <motion.g
                  animate={reducedMotion ? {} : { y: [6, -6] }}
                  transition={{
                    duration: getDuration(2.5, 0.25, c, r, 5),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <rect
                    x="320"
                    y="50"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="#0047FF"
                    strokeWidth="2"
                  />
                </motion.g>

                <motion.g
                  animate={reducedMotion ? {} : { y: [-4, 4] }}
                  transition={{
                    duration: getDuration(2.5, 0.25, c, r, 6),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <rect
                    x="180"
                    y="330"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#0047FF"
                    strokeWidth="2"
                  />
                </motion.g>

                {/* Acid Lime Dots */}
                <motion.circle
                  cx="150"
                  cy="330"
                  r="4"
                  fill="#D4FF3F"
                  animate={reducedMotion ? {} : { scale: [0.8, 1.2] }}
                  transition={{
                    duration: getDuration(2, 0.25, c, r, 7),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "150px 330px" }}
                />

                <motion.circle
                  cx="362"
                  cy="185"
                  r="4"
                  fill="#D4FF3F"
                  animate={reducedMotion ? {} : { scale: [1.2, 0.8] }}
                  transition={{
                    duration: getDuration(2, 0.25, c, r, 8),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "362px 185px" }}
                />

                <motion.circle
                  cx="60"
                  cy="55"
                  r="4"
                  fill="#D4FF3F"
                  animate={reducedMotion ? {} : { scale: [0.75, 1.25] }}
                  transition={{
                    duration: getDuration(2, 0.25, c, r, 9),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "60px 55px" }}
                />

                <motion.circle
                  cx="250"
                  cy="70"
                  r="4"
                  fill="#D4FF3F"
                  animate={reducedMotion ? {} : { scale: [1.25, 0.75] }}
                  transition={{
                    duration: getDuration(2, 0.25, c, r, 10),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ transformOrigin: "250px 70px" }}
                />

                {/* Black X Marks */}
                <motion.g
                  animate={reducedMotion ? {} : { opacity: [0.25, 0.65] }}
                  transition={{
                    duration: getDuration(3, 0.33, c, r, 11),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <g stroke="#111111" strokeWidth="2">
                    <line x1="180" y1="0" x2="200" y2="20" />
                    <line x1="200" y1="0" x2="180" y2="20" />
                  </g>
                </motion.g>

                <motion.g
                  animate={reducedMotion ? {} : { opacity: [0.65, 0.25] }}
                  transition={{
                    duration: getDuration(3, 0.33, c, r, 12),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <g stroke="#111111" strokeWidth="2">
                    <line x1="380" y1="380" x2="400" y2="400" />
                    <line x1="400" y1="380" x2="380" y2="400" />
                  </g>
                </motion.g>
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
}
