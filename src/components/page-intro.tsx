import type { ReactNode } from "react";

type PageIntroProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageIntro({ index, eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro container-shell">
      <div className="page-intro__topline">
        <p className="eyebrow"><span className="eyebrow__mark" />{eyebrow}</p>
        <span className="page-intro__index">{index} / 05</span>
      </div>
      <h1 className="font-display">{title}</h1>
      <p className="page-intro__description">{description}</p>
    </section>
  );
}
