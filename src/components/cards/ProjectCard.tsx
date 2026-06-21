import { Project } from "@/data";
import { ExternalLink } from "lucide-react";
import GithubLink from "@/components/ui/GithubLink";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-row flex-col md:flex-row">
      {/* Banner / cover image */}
      <div
        className="flex-shrink-0 w-full md:w-[280px] h-[200px] md:h-[190px] rounded-xl overflow-hidden bg-background-alt border border-border flex items-center justify-center"
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          // TODO: replace with a real project banner image in /public/images/
          <div className="text-center px-4">
            <p className="text-[2rem] font-extrabold text-muted">
              {project.title[0]}
            </p>
            <p className="text-[0.7rem] text-muted/70 mt-2">
              Add image URL in data/index.ts
            </p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Period + GitHub icon */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-[0.85rem] text-muted">{project.period}</p>
          <GithubLink url={project.github} size={18} />
        </div>

        {/* Title */}
        <h3 className="text-[1.3rem] md:text-[1.35rem] font-bold text-foreground mb-3 flex items-center gap-2">
          {project.title}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="text-muted hover:text-link-accent transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </h3>

        {/* Description */}
        <p className="text-muted text-[0.9rem] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}