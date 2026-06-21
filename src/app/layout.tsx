import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tufail Ahmed | ML/DL Engineer",
  description:
    "Tufail Ahmed — ML/DL Engineer. Designing intelligent systems that learn, scale, and solve real-world problems.",
  openGraph: {
    title: "Tufail Ahmed | ML/DL Engineer",
    description:
      "Designing intelligent systems that learn, scale, and solve real-world problems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tufail Ahmed | ML/DL Engineer",
    description:
      "Designing intelligent systems that learn, scale, and solve real-world problems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}