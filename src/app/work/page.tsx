import { ContactCallout } from "@/components/contact-callout";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SelectedWork } from "@/components/selected-work";
import { additionalProjects } from "@/data/projects";
import Link from "next/link";

export const metadata = {
  title: "Work",
  description: "Documented projects and engagements from UltraX Solutions.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        description="A considered selection across digital products, conference identity, environmental design, and social communication."
        eyebrow="Selected work"
        index="02"
        title={<>Ideas into <em>outcomes.</em></>}
      />
      <section className="page-content container-shell">
        <p className="work-index-note">Five selected engagements · additional projects documented below</p>
        <Reveal>
          <SelectedWork />
        </Reveal>

        {additionalProjects.length ? (
          <section aria-labelledby="additional-work-title" className="additional-work">
            <div className="additional-work__heading">
              <p className="eyebrow"><span className="eyebrow__mark" />Further documented work</p>
              <h2 id="additional-work-title">More from the <em>profile.</em></h2>
            </div>
            <ul>
              {additionalProjects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`}>
                    <span className="additional-work__meta">
                      <span>{project.category}</span>
                      <span>{project.year ?? "Year not listed"}</span>
                    </span>
                    <strong>{project.displayTitle ?? project.title}</strong>
                    <span aria-hidden="true" className="additional-work__arrow">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <ContactCallout
          description="Bring the objective, and we can talk through the capabilities that fit."
          eyebrow="Start a conversation"
          title={<>What are you <em>working toward?</em></>}
        />
      </section>
    </>
  );
}
