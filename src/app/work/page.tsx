import { ContactCallout } from "@/components/contact-callout";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work",
  description: "Documented projects and engagements from UltraX Solutions.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        description="A selection of documented engagements across digital products, conferences, public-sector initiatives, campaigns, and consumer brands."
        eyebrow="Selected work"
        index="02"
        title={<>Ideas into <em>outcomes.</em></>}
      />
      <section className="page-content container-shell">
        <p className="work-index-note">Seven engagements documented in the UltraX company profile.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal delay={(index % 3) * 0.05} key={project.slug}>
              <ProjectCard index={index} project={project} total={projects.length} />
            </Reveal>
          ))}
        </div>
        <ContactCallout
          description="Bring the objective, and we can talk through the capabilities that fit."
          eyebrow="Start a conversation"
          title={<>What are you <em>working toward?</em></>}
        />
      </section>
    </>
  );
}
