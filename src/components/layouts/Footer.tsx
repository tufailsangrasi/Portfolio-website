import { ArrowUp, Terminal } from "lucide-react";
import { personalInfo } from "@/data";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-accent text-white">
      <div className="container-x py-12">
        {}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            className="flex items-center gap-2 text-white no-underline"
          >
            <Terminal size={18} />
            <span className="text-[1.05rem] font-bold">{personalInfo.name}</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.85rem] text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="btn-circle"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="my-6 h-px bg-white/10" />

        {}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[0.8rem] text-white/55">
          <p>
            Made with <span className="text-white">❤</span> using React ©{" "}
            {new Date().getFullYear()}
          </p>
          <p>{personalInfo.title}</p>
        </div>
      </div>
    </footer>
  );
}