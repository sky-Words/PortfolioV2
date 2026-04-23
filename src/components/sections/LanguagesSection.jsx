import { SectionHeader } from "../ui/SectionHeader";

export function LanguagesSection({ languages }) {
  return (
    <section className="section-band languages-band">
      <SectionHeader kicker={languages.kicker} title={languages.title} />
      <div className="language-list">
        {languages.items.map((item) => (
          <div key={item} className="language-pill">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
