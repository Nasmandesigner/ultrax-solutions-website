import type { Capability } from "@/data/capabilities";

type CapabilityRowProps = {
  capability: Capability;
  compact?: boolean;
};

export function CapabilityRow({ capability, compact = false }: CapabilityRowProps) {
  return (
    <article className={`capability-row${compact ? " capability-row--compact" : ""}`} id={`capability-${capability.number}`}>
      <span className="capability-row__number">{capability.number}</span>
      <div className="capability-row__body">
        <h3>{capability.title}</h3>
        <p>{capability.summary}</p>
        {!compact ? (
          <ul className="service-list">
            {capability.services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        ) : null}
      </div>
      <span aria-hidden="true" className="capability-row__arrow">↘</span>
    </article>
  );
}
