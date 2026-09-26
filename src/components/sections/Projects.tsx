import { useEffect, useRef } from "react";
import { projects as fallbackProjects } from "@/data";
import useGithubRepos from "@/hooks/useGithubRepos";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { repos, loading, error } = useGithubRepos();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.08 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Use GitHub repos if available, otherwise fall back to static data
  const displayProjects = repos.length > 0 ? repos : (error ? fallbackProjects : []);

  return (
    <section id="projects" ref={ref} className="section-pad bg-background">
      <div className="container-x">
        <h2 className="section-heading reveal">Projects</h2>

        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          {loading && (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="project-row flex-col md:flex-row animate-pulse">
                  <div className="flex-shrink-0 w-full md:w-[280px] h-[200px] md:h-[190px] rounded-xl bg-background-alt border border-border" />
                  <div className="flex-1 min-w-0 flex flex-col gap-3">
                    <div className="h-4 bg-background-alt rounded w-1/3" />
                    <div className="h-6 bg-background-alt rounded w-2/3" />
                    <div className="h-4 bg-background-alt rounded w-full" />
                    <div className="h-4 bg-background-alt rounded w-5/6" />
                    <div className="flex gap-2 mt-auto">
                      <div className="h-6 bg-background-alt rounded-full w-16" />
                      <div className="h-6 bg-background-alt rounded-full w-20" />
                      <div className="h-6 bg-background-alt rounded-full w-14" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && repos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-[0.95rem] mb-4">
                Unable to load projects from GitHub at the moment.
              </p>
              <a
                href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME ?? "tufailsangrasi"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Visit My GitHub Profile
              </a>
              {/* Fallback to static projects below */}
            </div>
          )}

          {!loading &&
            displayProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}