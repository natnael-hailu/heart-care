import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
        secondary: "#1E3A8A",
      },
    },
  },
  plugins: [],
} satisfies Config;
