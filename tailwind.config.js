/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        "background-alt": "#F7F7F8",
        foreground: "#1F2024",
        muted: "#6B7280",
        border: "#E5E7EB",
        card: "#FFFFFF",
        accent: "#1F2024",
        "accent-foreground": "#FFFFFF",
        "link-accent": "#3B82F6",
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