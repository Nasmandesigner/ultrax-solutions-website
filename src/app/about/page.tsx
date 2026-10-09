import { PageIntro } from "@/components/page-intro";
import { ContactCallout } from "@/components/contact-callout";
import {
  approachDetails,
  companyHistory,
  companyValues,
  differentiators,
  leadership,
  mission,
  vision,
} from "@/data/team";
import { companyPositioning, tagline } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Learn about UltraX Solutions, its mission, vision, values, and team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        description={companyPositioning}
        eyebrow="About UltraX"
        index="04"
        title={<>A wider view of <em>what’s possible.</em></>}
      />
      <div className="page-content container-shell">
        <section className="page-section company-story">
          <div className="page-section__heading">
            <h2>Company overview</h2>
            <p>{companyHistory.description}</p>
          </div>
          <div className="company-story__line">
            <p>{tagline}</p>
            <span>Founded {companyHistory.founded}</span>
          </div>
        </section>

        <section aria-labelledby="mission-vision-title" className="page-section">
          <div className="page-section__heading">
            <h2 id="mission-vision-title">Mission & vision</h2>
            <p>The direction described in the company profile.</p>
          </div>
          <div className="mission-grid mission-grid--cards">
            <article className="mission-card">
              <p className="eyebrow"><span className="eyebrow__mark" />Our mission</p>
              <p className="mission-statement">{mission}</p>
            </article>
            <article className="mission-card">
              <p className="eyebrow"><span className="eyebrow__mark" />Our vision</p>
              <p className="mission-statement">{vision}</p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__heading">
            <h2>Why UltraX</h2>
            <p>Four principles from the company profile describe how UltraX brings its disciplines together.</p>
          </div>
          <div className="differentiator-grid">
            {differentiators.map((item, index) => (
              <article className="differentiator-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__heading">
            <h2>Our approach</h2>
            <p>How the team describes moving from an objective to solutions designed for use and growth.</p>
          </div>
          <div className="approach-detail-list">
            {approachDetails.map((item, index) => (
              <article className="approach-detail" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__heading">
            <h2>Values in practice</h2>
            <p>The company profile’s values emphasize curiosity, quality, responsibility, adaptability, collaboration, and meaningful contribution.</p>
          </div>
          <div className="values-grid values-grid--descriptive">
            {companyValues.map((value, index) => (
              <article className="value-item" key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__heading">
            <h2>Leadership team</h2>
            <p>Leadership roles and biographies are drawn from the company profile.</p>
          </div>
          <div className="leadership-list">
            {leadership.map((member) => (
              <article className="leader-row" key={member.name + member.role}>
                <h3>{member.name}</h3>
                <p className="leader-row__role">{member.role}</p>
                <p className="leader-row__bio">{member.description}</p>
              </article>
            ))}
          </div>
        </section>

        <ContactCallout
          description="Share the goal behind your next digital product, campaign, or communication challenge."
          eyebrow="Work with UltraX"
          title={<>Let’s make the next step <em>clear.</em></>}
        />
      </div>
    </>
  );
}
