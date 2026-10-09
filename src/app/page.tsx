import Link from "next/link";
import Image from "next/image";
import { approach } from "@/data/team";
import { capabilities } from "@/data/capabilities";
import { featuredProjects } from "@/data/projects";
import { companyPositioning } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { CapabilityRow } from "@/components/capability-row";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  return (
    <>
      <section className="hero container-shell">
        <div aria-hidden="true" className="hero__art">
          <Image
            alt=""
            className="hero__art-image"
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 78vw, 48vw"
            src="/images/illustrations/idea-lightbulb.png"
          />
          <span className="hero__art-label">Ideas into action <i>／</i> 01—05</span>
        </div>
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow"><span className="eyebrow__mark" />Technology · Creative thinking · Design</p>
          <h1 className="font-display">
            Experience
            <span>Beyond</span>
            <em className="text-electric">Digital.</em>
          </h1>
          <div className="hero__bottom">
            <p className="hero__copy">Technology, creative thinking, design, and strategic execution—working together.</p>
            <div className="hero__actions">
              <ButtonLink href="/work">Explore selected work</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink>
            </div>
            <div aria-label="One partner, multiple capabilities, one connected experience" className="hero__stamp">
              One partner
              <strong>01</strong>
              One experience
            </div>
          </div>
        </div>
        <a className="hero__scroll" href="#intro">Scroll to explore</a>
      </section>

      <section className="section-block" id="intro">
        <div className="container-shell positioning-section">
          <div className="positioning-section__label">
            <p className="eyebrow"><span className="eyebrow__mark" />A connected approach</p>
            <div aria-hidden="true" className="positioning-section__visual">
              <Image
                alt=""
                className="positioning-section__visual-image"
                fill
                sizes="(max-width: 760px) 62vw, 28vw"
                src="/images/illustrations/idea-lightbulb.png"
                unoptimized
              />
              <span className="positioning-section__visual-index">IDEA <i>／</i> EXECUTION</span>
            </div>
          </div>
          <Reveal>
            <div className="positioning-section__body">
              <p className="positioning-section__statement">
                Different disciplines. <strong>One connected experience.</strong>
              </p>
              <p className="positioning-section__copy">{companyPositioning}</p>
              <div aria-label="Our disciplines" className="positioning-section__disciplines">
                <span>Technology</span>
                <span>Creative thinking</span>
                <span>Design</span>
                <span>Strategic execution</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              description="A selection of documented engagements across digital products, event identities, communication, and campaigns."
              eyebrow="Selected work"
              sideNote="Engagements documented in the company profile."
              title={<>Built around <em>the objective.</em></>}
            />
          </Reveal>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <Reveal delay={index * 0.08} key={project.slug}>
                <ProjectCard index={index} project={project} total={featuredProjects.length} />
              </Reveal>
            ))}
          </div>
          <div className="section-action">
            <Link className="text-link" href="/work">View all engagements <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              description="From platform design and development to brand systems, media, campaigns, and data-led tools."
              eyebrow="What we do"
              sideNote="One partner. Multiple capabilities. One connected experience."
              title={<>One team. <em>Five capabilities.</em></>}
            />
          </Reveal>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <CapabilityRow capability={capability} compact key={capability.number} />
            ))}
          </div>
          <div className="section-action">
            <Link className="text-link" href="/capabilities">Explore capabilities <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              description="We start with the objective, choose the right mix of capabilities, and design for real-world use."
              eyebrow="How we work"
              title={<>Intentional from <em>the start.</em></>}
            />
          </Reveal>
          <div className="approach-grid">
            {approach.map((item, index) => (
              <div className="approach-step" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-shell">
          <Reveal>
            <div className="cta-panel">
              <div>
                <p className="eyebrow"><span className="eyebrow__mark" />Let’s work together</p>
                <h2>Bring your next idea <em>into focus.</em></h2>
              </div>
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
