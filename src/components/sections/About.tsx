import { useEffect, useRef } from "react";
import { personalInfo } from "@/data";

// 5 orbiting tech badges — real brand colors
const ORBIT_ICONS = [
  { label: "Python", bg: "#1a2a3a", fg: "#3776AB", char: "Py" },
  { label: "Java", bg: "#3a1f0a", fg: "#ED8B00", char: "Jv" },
  { label: "Spring Boot", bg: "#0f2a0f", fg: "#6DB33F", char: "Sp" },
  { label: "MongoDB", bg: "#0a2a18", fg: "#13AA52", char: "Mg" },
  { label: "Scikit-learn", bg: "#3a1f0a", fg: "#F7931E", char: "Sk" },
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
        {/* Left: text */}
        <div className="flex-1 min-w-0 lg:max-w-[520px]">
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

        {/* Right: orbit rings with photo */}
        <div
          className="reveal relative shrink-0"
          style={{
            width: "min(340px, 80vw)",
            height: "min(340px, 80vw)",
            transitionDelay: "0.15s",
          }}
        >
          {/* Outer dashed orbit ring */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-border"
          />
          {/* Inner dashed orbit ring */}
          <div
            aria-hidden
            className="absolute rounded-full border-[1.5px] border-dashed border-border/70"
            style={{ inset: "40px" }}
          />

          {/* Rotating outer ring (5 icons) */}
          <div className="orbit-ring absolute inset-0 rounded-full">
            {ORBIT_ICONS.map((icon, i) => {
              const angle = (360 / ORBIT_ICONS.length) * i;
              const rad = (angle * Math.PI) / 180;
              const radius = 155;
              const size = 340;
              const cx = size / 2 + radius * Math.sin(rad);
              const cy = size / 2 - radius * Math.cos(rad);
              return (
                <div
                  key={icon.label}
                  className="orbit-ring-reverse absolute flex items-center justify-center rounded-full bg-card border font-mono font-bold"
                  style={{
                    left: cx - 22,
                    top: cy - 22,
                    width: 44,
                    height: 44,
                    background: icon.bg,
                    borderColor: `${icon.fg}55`,
                    color: icon.fg,
                    fontSize: "0.65rem",
                  }}
                  title={icon.label}
                  aria-label={icon.label}
                >
                  {icon.char}
                </div>
              );
            })}
          </div>

          {/* Center photo */}
          <div
            className="absolute rounded-full overflow-hidden flex items-center justify-center bg-background-alt"
            style={{
              inset: "60px",
              border: "2px solid #E5E7EB",
            }}
          >
            {/* TODO: replace with <img src="/images/profile.jpg" alt="Tufail Ahmed" className="w-full h-full object-cover" /> */}
            <div
              className="absolute rounded-full overflow-hidden flex items-center justify-center bg-background-alt"
              style={{
                inset: "40px",
                border: "2px solid #E5E7EB",
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
