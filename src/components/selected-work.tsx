import { ProjectCard } from "@/components/project-card";
import { selectedProjects, type Project } from "@/data/projects";

type SelectedWorkProps = {
  projects?: Project[];
};

export function SelectedWork({ projects = selectedProjects }: SelectedWorkProps) {
  if (!projects.length) return null;

  const lead = projects.find((project) => project.images?.length) ?? projects[0];
  const leadIndex = projects.findIndex((project) => project.slug === lead.slug);
  const supportingProjects = projects.filter((project) => project.slug !== lead.slug);

  return (
    <section aria-label="Selected engagements" className="selected-work-grid">
      <ProjectCard featured index={leadIndex} project={lead} total={projects.length} />
      {supportingProjects.length ? (
        <div className="selected-work-grid__support">
          <p className="selected-work-grid__label">
            <span className="eyebrow__mark" />
            More selected work <span>{String(supportingProjects.length).padStart(2, "0")}</span>
          </p>
          <ol>
            {supportingProjects.map((project) => {
              const index = projects.findIndex((item) => item.slug === project.slug);

              return (
                <li key={project.slug}>
                  <ProjectCard index={index} project={project} total={projects.length} />
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}
    </section>
  );
}
