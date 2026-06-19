import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        // Nuevas animaciones tácticas
        "laser-main": "laser-main 7s linear infinite",
        "laser-secondary": "laser-secondary 11s linear infinite",
        "float-random-1": "float-random-1 20s ease-in-out infinite",
        "float-random-2": "float-random-2 25s ease-in-out infinite",
        "float-random-3": "float-random-3 18s ease-in-out infinite",
        "telemetry-pulse": "telemetry-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": { transform: "scale(3)", opacity: "0" },
        },
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        // Primer Escáner Principal (Baja)
        "laser-main": {
          "0%": { top: "0%", opacity: "0" },
          "5%, 90%": { opacity: "0.4" },
          "100%": { top: "100%", opacity: "0" },
        },
        // Segundo Escáner Cruzado (Sube a destiempo)
        "laser-secondary": {
          "0%": { bottom: "0%", opacity: "0" },
          "10%, 85%": { opacity: "0.25" },
          "100%": { bottom: "100%", opacity: "0" },
        },
        // Telemetría cuántica (Parpadeo de servidores)
        "telemetry-pulse": {
          "0%, 100%": { opacity: "0.1", transform: "scale(0.8)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
        // Rutas de movimiento orgánico aleatorio (Fractales)
        "float-random-1": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(40px, -60px) rotate(5deg)" },
          "50%": { transform: "translate(-20px, -30px) rotate(-10deg)" },
          "75%": { transform: "translate(30px, 50px) rotate(8deg)" },
        },
        "float-random-2": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(-50px, 40px) rotate(-8deg)" },
          "66%": { transform: "translate(30px, -40px) rotate(12deg)" },
        },
        "float-random-3": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "20%": { transform: "translate(-45px, -35px)" },
          "40%": { transform: "translate(45px, 10px)" },
          "60%": { transform: "translate(-25px, 45px)" },
          "80%": { transform: "translate(35px, -15px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;