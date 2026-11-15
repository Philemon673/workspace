import type { Config } from "tailwindcss";
import { colors } from "./src/assets/scheme";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 60px rgba(40, 70, 140, 0.12)",
        button: "0 8px 18px rgba(17, 96, 232, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;