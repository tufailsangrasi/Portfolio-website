import { useEffect, useRef } from "react";
import { personalInfo } from "@/data";

const ORBIT_ICONS = [
  { label: "JavaScript", bg: "#2a2500", fg: "#F7DF1E", char: "JS", logo: "/skills/javascript.svg" },
  { label: "Python", bg: "#1a2a3a", fg: "#3776AB", char: "Py", logo: "/skills/python.svg" },
  { label: "C#", bg: "#1a1a2e", fg: "#68217A", char: "C#", logo: "/skills/csharp.svg" },
  { label: "Docker", bg: "#0a1a2e", fg: "#2496ED", char: "Dk", logo: "/skills/docker.svg" },
  { label: "React.js", bg: "#0a2a3a", fg: "#61DAFB", char: "Re", logo: "/skills/react.svg" },
  { label: "MongoDB", bg: "#0a2a18", fg: "#13AA52", char: "Mg", logo: "/skills/mongodb.svg" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-pad bg-background">
      <div className="container-x flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {}
        <div className="flex-1 min-w-0">
          <h2 className="section-heading reveal">
            <span className="underline-word">About</span> me
          </h2>
          <h3 className="reveal text-[1.4rem] font-bold text-foreground mb-5 transition-delay-50">
            Hey! I&apos;m {personalInfo.name}
          </h3>
          <div className="space-y-4">
            {personalInfo.about.map((p, i) => (
              <p
                key={i}
                className="reveal text-muted leading-relaxed text-[0.95rem] md:text-[1rem]"
                style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {}
        <div
          className="reveal relative shrink-0"
          style={{
            width: "min(420px, 80vw)",
            height: "min(420px, 80vw)",
            transitionDelay: "0.15s",
          }}
        >
          {}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-border"
          />
          {}
          <div
            aria-hidden
            className="absolute rounded-full border-[1.5px] border-dashed border-border/70"
            style={{ inset: "40px" }}
          />

          {}
          {ORBIT_ICONS.map((icon, i) => {
            const angle = (360 / ORBIT_ICONS.length) * i;
            const rad = (angle * Math.PI) / 180;
            const radius = 190;
            const size = 420;
            const cx = size / 2 + radius * Math.sin(rad);
            const cy = size / 2 - radius * Math.cos(rad);
            return (
              <div
                key={icon.label}
                className="float-bob absolute flex items-center justify-center rounded-full bg-card border"
                style={{
                  left: cx - 24,
                  top: cy - 24,
                  width: 48,
                  height: 48,
                  background: icon.bg,
                  borderColor: `${icon.fg}55`,
                  color: icon.fg,
                  fontSize: "0.65rem",
                  animationDelay: `${i * 0.5}s`,
                }}
                title={icon.label}
                aria-label={icon.label}
              >
                {icon.logo ? (
                  <img
                    src={icon.logo}
                    alt={icon.label}
                    className="w-6 h-6 object-contain"
                    style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.3))" }}
                  />
                ) : (
                  <span className="font-mono font-bold">{icon.char}</span>
                )}
              </div>
            );
          })}

          {}
          <div
            className="absolute rounded-full overflow-hidden flex items-center justify-center bg-background-alt"
            style={{
              inset: "55px",
              border: "2px solid rgb(var(--clr-border))",
            }}
          >
            <div
              className="absolute rounded-full overflow-hidden flex items-center justify-center bg-background-alt"
              style={{
                inset: "20px",
                border: "2px solid rgb(var(--clr-border))",
              }}
            >
              <img
                src="/images/profile.jpg"
                alt="Tufail Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
