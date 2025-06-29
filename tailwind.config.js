/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        astro: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a259ff",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          neon: "#a259ff",
          blue: "#3b82f6",
        },
        dark: "#0a0a0f",
        light: "#f8fafc",
        muted: "#64748b",
      },
      fontFamily: {
        sans: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
        "11xl": ["12rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31,38,135,0.10)",
        neon: "0 0 20px rgba(162, 89, 255, 0.3), 0 0 40px rgba(162, 89, 255, 0.1)",
        "neon-strong": "0 0 30px rgba(162, 89, 255, 0.5), 0 0 60px rgba(162, 89, 255, 0.2)",
        card: "0 4px 24px 0 rgba(0, 0, 0, 0.1)",
        "card-hover": "0 20px 40px rgba(162, 89, 255, 0.15)",
      },
      borderRadius: {
        "4xl": "3rem",
        "5xl": "4rem",
      },
      backgroundImage: {
        "astro-gradient": "linear-gradient(135deg, #a259ff 0%, #7c3aed 50%, #3b82f6 100%)",
        "astro-gradient-radial": "radial-gradient(circle at center, #a259ff 0%, #7c3aed 50%, #3b82f6 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        "4xl": "72px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "gradient-move": "gradient-move 6s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
