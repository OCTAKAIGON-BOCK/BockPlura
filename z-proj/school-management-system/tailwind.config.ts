import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        purplePrimary: {
          DEFAULT: "hsl(var(--purple-primary))",
          foreground: "hsl(var(--purple-primary-foreground))",
        },
        yellowPrimary: {
          DEFAULT: "hsl(var(--primary-yellow))",
          foreground: "hsl(var(--primary-yellow-foreground))",
        },
        greenPrimary: {
          DEFAULT: "hsl(var(primary-green))",
          foreground: "hsl(var(primary-green-foreground))",
        },
        blueprimary:{
          DEFAULT: "hsl(var(--blue-primary))",
          foreground: "hsl(var(--blue-primary-foreground))",
        },
        brownBackground: {
          DEFAULT: "hsl(var(--brown-background))",
          foreground: "hsl(var(--brown-foreground))",
        },
        blackOrBackground:{
          DEFAULT: "hsl(var(--black-orbackground))",
          foreground: "hsl(var(--black-orforeground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      responsive: "1500px",
      smallresponsive: "900px"
    },
    // colors:{

    // }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;