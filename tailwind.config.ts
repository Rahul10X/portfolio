import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EDEAE0",
        foreground: "#111111",
        border: "#111111",
        accent: "#FF4D00",
        cobalt: "#0047FF",
        acid: "#D4FF3F",
        muted: "#6B6B66",
        paper: "#EDEAE0",
        ink: "#111111",
        signal: "#FF4D00",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo-black)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace", "ui-monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "4rem",
        "section-lg": "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
