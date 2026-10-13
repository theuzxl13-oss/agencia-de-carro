import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    // Cantos retos em todo o sistema (botões, cards, imagens, selos)
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
    },
    // Sem sombras: a separação vem do contraste entre superfícies
    boxShadow: {
      none: "none", sm: "none", DEFAULT: "none", md: "none", lg: "none", xl: "none", "2xl": "none", inner: "none",
      card: "none", "card-hover": "none",
    },
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        // Estilo "showroom": neutros grafite/branco + vermelho da logo como ÚNICO destaque
        ink: {
          50: "#f5f5f5",
          100: "#ececec",
          200: "#d9d9d9",
          300: "#969696",
          400: "#7d7d7d",
          500: "#626262",
          600: "#494949",
          700: "#313131",
          800: "#262626",
          900: "#202020",
          950: "#181818",
        },
        brand: {
          50: "#fff1f1",
          100: "#ffdfe0",
          200: "#ffc5c7",
          300: "#ff9ca0",
          400: "#ff5f67",
          500: "#f52a35",
          600: "#e1101d",
          700: "#bd0a16",
          800: "#9c0d17",
          900: "#82111a",
        },
        whatsapp: {
          DEFAULT: "#1fa855",
          dark: "#178a45",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s infinite",
        "fade-up": "fade-up .4s ease-out both",
        "slide-in": "slide-in .25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
