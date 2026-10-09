import type { ReactNode } from "react";
import { ButtonLink } from "@/components/button-link";

type ContactCalloutProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  linkLabel?: string;
};

export function ContactCallout({
  eyebrow = "Have an idea in motion?",
  title,
  description,
  linkLabel = "Start a conversation",
}: ContactCalloutProps) {
  return (
    <section aria-label={eyebrow} className="cta-panel page-cta">
      <div>
        <p className="eyebrow"><span className="eyebrow__mark" />{eyebrow}</p>
        <h2>{title}</h2>
        <p className="page-cta__description">{description}</p>
      </div>
      <ButtonLink href="/contact">{linkLabel}</ButtonLink>
    </section>
  );
}
