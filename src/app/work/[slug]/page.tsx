import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCallout } from "@/components/contact-callout";
import { ProjectGallery } from "@/components/project-gallery";
import { portfolioProjects, projects } from "@/data/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.displayTitle ?? project.title,
    description: project.caseStudy.overview,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const index = portfolioProjects.findIndex((item) => item.slug === slug);
  const previousProject = portfolioProjects[index - 1];
  const nextProject = portfolioProjects[index + 1];

  return (
    <article className="case-study">
      <header className="case-study__header container-shell">
        <nav aria-label="Breadcrumb" className="case-study__breadcrumb">
          <ol>
            <li><Link href="/work">Work</Link></li>
            <li aria-current="page">{project.displayTitle ?? project.title}</li>
          </ol>
        </nav>
        <div className="case-study__topline">
          <p className="eyebrow"><span className="eyebrow__mark" />{project.category}</p>
          <span>{project.year ?? "Year not listed in profile"}</span>
        </div>
        <h1>{project.displayTitle ?? project.title}</h1>
        <p className="case-study__lede">{project.caseStudy.overview}</p>
        <div className="case-study__index">
          <span>Documented engagement</span>
          <span>{String(index + 1).padStart(2, "0")} <i>/</i> {String(portfolioProjects.length).padStart(2, "0")}</span>
        </div>
        {project.reference ? (
          <a
            aria-label={`${project.reference.label} (external reference, opens in a new tab)`}
            className="case-study__reference"
            href={project.reference.href}
            rel="noreferrer noopener"
            target="_blank"
          >
            {project.reference.label}
            <span aria-hidden="true">↗</span>
            <small>External reference</small>
          </a>
        ) : null}
      </header>

      <ProjectGallery images={project.images} />

      <div className="case-study__content container-shell">
        <section aria-labelledby="case-scope-title" className="case-study__scope">
          <div className="case-study__section-heading">
            <p className="eyebrow"><span className="eyebrow__mark" />Documented scope</p>
            <h2 id="case-scope-title">What the engagement covered</h2>
            <p>Scope items below are based on the project description in the UltraX company profile.</p>
          </div>
          <ol className="case-study__scope-list">
            {project.caseStudy.scope.map((item, itemIndex) => (
              <li key={item}>
                <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        {project.caseStudy.documentedNote ? (
          <aside aria-label="Additional information from the company profile" className="case-study__note">
            <p className="eyebrow"><span className="eyebrow__mark" />Additional profile context</p>
            <p>{project.caseStudy.documentedNote}</p>
          </aside>
        ) : null}

        <nav aria-label="Other case studies" className="case-study__pagination">
          <Link href={previousProject ? `/work/${previousProject.slug}` : "/work"}>
            <span>{previousProject ? "Previous engagement" : "All engagements"}</span>
            <strong>{previousProject?.displayTitle ?? previousProject?.title ?? "Back to work"}</strong>
            <span aria-hidden="true">←</span>
          </Link>
          <Link href={nextProject ? `/work/${nextProject.slug}` : "/work"}>
            <span>{nextProject ? "Next engagement" : "All engagements"}</span>
            <strong>{nextProject?.displayTitle ?? nextProject?.title ?? "Back to work"}</strong>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <ContactCallout
          description="Tell us what you need to achieve, and we can discuss the right capabilities for the work."
          eyebrow="Work with UltraX"
          title={<>What are you <em>working toward?</em></>}
        />
      </div>
    </article>
  );
}
