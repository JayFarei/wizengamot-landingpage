import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wizengamot: {
          dark: "#1a1625",
          darker: "#1e2330",
          gold: "#d4a853",
          teal: "#5bb3b3",
          light: "#f5f6fa",
          muted: "#8b8d94",
          card: "rgba(255, 255, 255, 0.05)",
          "card-border": "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
