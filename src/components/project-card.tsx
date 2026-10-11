import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, total, featured = false }: ProjectCardProps) {
  const image = project.images?.[0];

  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      <Link className="project-card__link" href={`/work/${project.slug}`}>
        {image ? (
          <figure className="project-card__media">
            <Image
              alt={image.alt}
              className="project-card__image"
              height={image.height}
              quality={86}
              sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1200px) 58vw, 760px"
              src={image.src}
              width={image.width}
            />
            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        ) : null}

        <div className="project-card__content">
          <span aria-hidden="true" className="project-card__index">
            {String(index + 1).padStart(2, "0")}
            <span> / {String(total).padStart(2, "0")}</span>
          </span>
          <div className="project-card__identity">
            <div className="project-card__meta">
              <span>{project.category}</span>
              <span>{project.year ?? "Year not listed"}</span>
            </div>
            <h3>{project.displayTitle ?? project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <span className="project-card__read">
              View engagement <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
