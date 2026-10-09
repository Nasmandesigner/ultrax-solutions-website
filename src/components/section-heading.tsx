import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  sideNote?: string;
};

export function SectionHeading({ eyebrow, title, description, sideNote }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__main">
        <p className="eyebrow"><span className="eyebrow__mark" />{eyebrow}</p>
        <h2 className="font-display">{title}</h2>
        {description ? <p className="section-heading__description">{description}</p> : null}
      </div>
      {sideNote ? <p className="section-heading__side-note">{sideNote}</p> : null}
    </div>
  );
}
