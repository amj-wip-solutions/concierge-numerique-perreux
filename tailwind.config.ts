import type { Config } from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Manrope as the default for headings
        heading: ["var(--font-heading)", "sans-serif"],
        // Set Inter as the default for body
        body: ["var(--font-body)", "sans-serif"],
        // Optional: Keep generic sans for fallbacks
        sans: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      colors: {
        // The New "Serious & Confident" DirectDevis Palette
        brand: {
          // Deep Navy: Dark enough for authority, blue enough for trust
          navy: "#0a1d37",
          // Professional Emerald: Clean, bright, and matte
          emerald: "#10b981",
          "emerald-light": "#f0fdf4",
          "emerald-dark": "#059669",
        },
        safety: {
          red: "#b91c1c",
          amber: "#d97706",
        },
        // Fix for the ShadCN "border-border" error
        border: "#e5e7eb", // gray-200
        input: "#e5e7eb",
        ring: "#0a1d37", // brand-navy
        background: "#ffffff",
        foreground: "#0a1d37", // brand-navy

        primary: {
          DEFAULT: "#10b981", // brand-emerald
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0a1d37", // brand-navy
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [tailwindcss_animate],
};

export default config;
