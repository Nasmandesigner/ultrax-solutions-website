import Link from "next/link";
import { ContactCallout } from "@/components/contact-callout";
import { capabilities } from "@/data/capabilities";
import { CapabilityRow } from "@/components/capability-row";
import { PageIntro } from "@/components/page-intro";

export const metadata = {
  title: "Capabilities",
  description: "Technology, creative thinking, design, and strategic execution across five capability areas.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        description="Five connected capability areas cover the work required to take an idea from strategy and concept through development, launch, and growth."
        eyebrow="Capabilities"
        index="03"
        title={<>Many disciplines. <em>One team.</em></>}
      />
      <section className="page-content container-shell">
        <nav aria-label="Capability areas" className="capability-index">
          {capabilities.map((capability) => (
            <Link href={`#capability-${capability.number}`} key={capability.number}>
              <span>{capability.number}</span>
              <span>{capability.title}</span>
              <span aria-hidden="true">↘</span>
            </Link>
          ))}
        </nav>
        <div className="capability-list">
          {capabilities.map((capability) => <CapabilityRow capability={capability} key={capability.number} />)}
        </div>
        <ContactCallout
          description="Tell us what you’re trying to achieve. We’ll start with the objective and find the right mix of capabilities."
          eyebrow="The next step"
          title={<>Bring us the <em>challenge.</em></>}
        />
      </section>
    </>
  );
}
