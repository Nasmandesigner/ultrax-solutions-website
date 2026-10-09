import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  return (
    <article className={`project-card${index === 0 ? " project-card--featured" : ""}`} id={project.slug}>
      <Link aria-label={`Read the case study for ${project.title}`} className="project-card__link" href={`/work/${project.slug}`}>
        <span aria-hidden="true" className="project-card__index">{String(index + 1).padStart(2, "0")}<span> / {String(total).padStart(2, "0")}</span></span>
        <div className="project-card__identity">
          <div className="project-card__meta">
            <span>{project.category}</span>
            <span>{project.year ?? "Year not listed"}</span>
          </div>
          <h3>{project.displayTitle ?? project.title}</h3>
        </div>
        <div className="project-card__summary">
          <p>{project.description}</p>
          <span className="project-card__read">View engagement <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
