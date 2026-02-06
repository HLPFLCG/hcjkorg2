import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#faf8f5",
        charcoal: "#1a1a1a",
        stone: "#6b6b6b",
        blush: "#c9a9a6",
      },
      letterSpacing: {
        "super-wide": "0.25em",
      },
    },
  },
  plugins: [],
}

export default config
