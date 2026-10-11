
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--clr-bg) / <alpha-value>)",
        "background-alt": "rgb(var(--clr-bg-alt) / <alpha-value>)",
        foreground: "rgb(var(--clr-fg) / <alpha-value>)",
        muted: "rgb(var(--clr-muted) / <alpha-value>)",
        border: "rgb(var(--clr-border) / <alpha-value>)",
        card: "rgb(var(--clr-card) / <alpha-value>)",
        accent: "rgb(var(--clr-accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--clr-accent-fg) / <alpha-value>)",
        "link-accent": "rgb(var(--clr-link) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17, 17, 17, 0.04), 0 1px 1px rgba(17, 17, 17, 0.03)",
        card: "0 1px 3px rgba(17, 17, 17, 0.05)",
      },
    },
  },
  plugins: [],
};