import { ExternalLink } from "lucide-react";
import GithubLink from "@/components/ui/GithubLink";

interface ProjectCardProject {
  name: string;
  description: string;
  topics: string[];
  githubUrl: string;
  live?: string;
  image?: string;
  updatedAt: string;
  language?: string | null;
  stars?: number;
  forks?: number;
}

interface ProjectCardProps {
  project: ProjectCardProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-row flex-col md:flex-row">
      {}
      <div
        className="flex-shrink-0 w-full md:w-[280px] h-[200px] md:h-[190px] rounded-xl overflow-hidden bg-background-alt border border-border flex items-center justify-center"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          
          <div className="text-center px-4">
            <p className="text-[2rem] font-extrabold text-muted">
              {project.name[0]}
            </p>
            <p className="text-[0.7rem] text-muted/70 mt-2">
              Add image URL in data/index.ts
            </p>
          </div>
        )}
      </div>

      {}
      <div className="flex-1 min-w-0 flex flex-col">
        {}
        <div className="flex items-center justify-between mb-3">
          <p className="text-[0.85rem] text-muted">{new Date(project.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
          <GithubLink url={project.githubUrl} size={18} />
        </div>

        {}
        <h3 className="text-[1.3rem] md:text-[1.35rem] font-bold text-foreground mb-3 flex items-center gap-2">
          {project.name}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="text-muted hover:text-link-accent transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </h3>

        {}
        <p className="text-muted text-[0.9rem] leading-relaxed mb-4">
          {project.description}
        </p>

        {}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.language && (
            <span className="tag-pill bg-foreground/5">{project.language}</span>
          )}
          {project.topics.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}