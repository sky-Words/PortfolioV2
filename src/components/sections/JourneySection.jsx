import { SectionHeader } from "../ui/SectionHeader";

export function JourneySection({ journey }) {
  return (
    <section className="section-band alt-band" id="journey">
      <SectionHeader kicker={journey.kicker} title={journey.title} />

      <div className="journey-grid">
        {journey.items.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="journey-card">
              <div className="journey-icon">
                <Icon size={18} />
              </div>
              <span className="journey-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p className="journey-place">{item.place}</p>
              <p>{item.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
