import { PageIntro } from "@/components/page-intro";
import { ButtonLink } from "@/components/button-link";
import { contactDetails } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with UltraX Solutions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        description="Get in touch about a digital platform, brand system, event, campaign, or another challenge you are working through."
        eyebrow="Contact"
        index="05"
        title={<>Let’s make <em>something matter.</em></>}
      />
      <section className="page-content container-shell">
        <div className="contact-grid">
          <div className="contact-invitation">
            <p className="eyebrow"><span className="eyebrow__mark" />Let’s start with the objective</p>
            <h2>Tell us what you’re <em>working toward.</em></h2>
            <p className="contact-grid__intro">UltraX brings strategy, technology, design, and creative execution together to help organizations communicate better, operate smarter, and create meaningful digital experiences.</p>
            <ButtonLink href={`mailto:${contactDetails.email}`}>Email UltraX</ButtonLink>
          </div>
          <div className="contact-list">
            <div className="contact-item">
              <span>Email</span>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </div>
            <div className="contact-item">
              <span>Phone</span>
              <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
            </div>
            <div className="contact-item">
              <span>Website</span>
              <a aria-label="Visit the UltraX website in a new tab" href={`https://${contactDetails.website}`} rel="noreferrer" target="_blank">{contactDetails.website} ↗</a>
            </div>
            <div className="contact-item">
              <span>Social</span>
              <div className="contact-item__plain">
                <strong>@{contactDetails.socialHandle}</strong>
                <small>Social profile URLs are not included in the supplied company profile.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
