"use client";
import { useEffect, useRef } from "react";
import { skills } from "@/data";

/**
 * Inline brand-colored SVG icons (square badge style).
 * Kept self-contained — no extra icon-library dependency.
 */
const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  const initials = name
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      aria-hidden
      className="flex items-center justify-center rounded-md shrink-0"
      style={{
        width: 26,
        height: 26,
        background: `${color}1A`,
        color,
        fontSize: 10,
        fontWeight: 800,
        fontFamily:
          "JetBrains Mono, ui-monospace, SFMono-Regular, monospace",
        letterSpacing: "-0.02em",
      }}
    >
      {initials}
    </span>
  );
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-pad bg-background-alt"
    >
      <div className="container-x">
        <h2 className="section-heading reveal">
          <span className="underline-word">Technical</span> Skills
        </h2>

        <div
          className="reveal grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            transitionDelay: "0.1s",
          }}
        >
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <SkillIcon name={skill.name} color={skill.color} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}