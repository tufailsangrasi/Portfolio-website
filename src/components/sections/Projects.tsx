"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.08 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-pad bg-background">
      <div className="container-x">
        <h2 className="section-heading reveal">Projects</h2>

        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}