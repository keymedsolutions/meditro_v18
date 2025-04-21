/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  prefix: "tw-",
  corePlugins: {
    preflight: false, // Disable Tailwind’s global reset
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      textShadow: {
        none: "none",
        yellow: "0 10px 0 rgb(250 204 21 / var(--tw-text-opacity, 1))",
        green: "0 0 10px rgb(134 239 172 / var(--tw-text-opacity, 1));", // green-300
        sky: "0 0 10px rgb(56 189 248 / var(--tw-text-opacity, 1))", // sky-400
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f5f5fe",
          100: "#e5e5fc",
          200: "#c3c3f7",
          300: "#a2a1f3",
          400: "#807fec",
          500: "#565acf",
          600: "#4346a2",
          700: "#323578",
          800: "#21244e",
          900: "#111224",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#fff5ef",
          100: "#ffe5d8",
          200: "#ffc2aa",
          300: "#ff9e7b",
          400: "#ff7b4d",
          500: "#f17732",
          600: "#c46026",
          700: "#94491b",
          800: "#64320f",
          900: "#331a04",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          100: "#e0e1fb",
          200: "#c0c2f7",
          300: "#a1a3f3",
          "400": "#8184ef",
          "500": "#565acf", // Base color
          "600": "#484caa",
          700: "#3a3e85",
          800: "#2c3060",
          900: "#1e213b",
        },
        accentOrange: {
          100: "#fde5d8",
          200: "#fbc9b1",
          300: "#f9ad89",
          400: "#f79162",
          500: "#f17732", // Base color
          600: "#c9622a",
          700: "#a14e22",
          800: "#79391a",
          900: "#512512",
          DEFAULT: "#f17732",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--primary-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--primary-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        light: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
        },
        bluelight: {
          DEFAULT: "hsl(var(--bluelight))",
          foreground: "hsl(var(--foreground))",
        },
        gray: {
          DEFAULT: "hsl(var(--gray))",
          foreground: "hsl(var(--primary-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        keymed: {
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#c7e1ff",
          300: "#a5cdff",
          400: "#7db1ff",
          500: "#5a8eff",
          600: "#3b6af7",
          700: "#2f55e3",
          800: "#2a46b8",
          900: "#293d92",
          950: "#1b2559",
        },

        cardio: {
          "50": "#ebf5ff",
          "100": "#d3e7ff",
          "200": "#b2d5ff",
          "300": "#80baff",
          "400": "#4a95ff",
          "500": "#1a70ff",
          "600": "#0051f5",
          "700": "#0042dd",
          "800": "#0036b3",
          "900": "#093489",
          "950": "#06205a",
        },
        mint: {
          "50": "#f0fdf6",
          "100": "#dafaea",
          "200": "#b8f2d6",
          "300": "#87e5bc",
          "400": "#4fd09b",
          "500": "#2ab380",
          "600": "#1d9268",
          "700": "#1a7455",
          "800": "#195c46",
          "900": "#164c3b",
          "950": "#092b22",
        },
        medical: {
          blue: "#0070ba",
          lightBlue: "#5fb4ff",
          navy: "#132744",
          teal: "#00a3a3",
          lightTeal: "#e0f7fa",
          gray: "#f5f8fa",
          darkGray: "#445566",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        blob: "blob 7s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in-down": "fade-in-down 0.7s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "scale-in": "scale-in 0.7s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: "  0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom right, #f0f7ff, #e0f0ff, #e5edff)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "soft-blue-gradient":
          "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
        "hero-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232376e6' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        "medical-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0v6h4V0h-4zm0 18v6h4v-6h-4zm-6-6v4h16v-4H4z' fill='%234299e1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",

        "gradient-radial-2": "radial-gradient(var(--tw-gradient-stops))",
        "cta-pattern":
          'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E\')',
      },
      boxShadow: {
        subtle:
          "0 2px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
        "elevation-1":
          "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "elevation-2":
          "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "elevation-3":
          "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
        "hover-card": "0 20px 40px -5px rgba(0, 0, 0, 0.12)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionTimingFunction: {
        "soft-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  safelist: [
    // Gradient start
    "from-blue-100",
    "from-indigo-100",
    "from-purple-100",
    "from-pink-100",

    // Gradient end
    "to-blue-100",
    "to-indigo-100",
    "to-purple-100",
    "to-pink-100",

    // Text colors
    "text-blue-600",
    "text-indigo-600",
    "text-purple-600",
    "text-pink-600",

    // Gradient bars
    "from-blue-500",
    "to-indigo-600",
    "from-indigo-500",
    "to-purple-600",
    "from-purple-500",
    "to-pink-600",
    "from-pink-500",
    "to-blue-600",

    "text-stroke-green",
    "text-stroke-yellow",
    "text-stroke-sky",
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-clip-path"),
    require("tailwindcss-textshadow"),
  ],
} satisfies Config;
