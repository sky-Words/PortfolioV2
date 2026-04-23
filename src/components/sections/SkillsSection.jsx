import { SectionHeader } from "../ui/SectionHeader";

export function SkillsSection({ skills }) {
  return (
    <section className="section-band" id="skills">
      <SectionHeader kicker={skills.kicker} title={skills.title} />

      <div className="skills-grid">
        {skills.groups.map((group) => {
          const Icon = group.icon;

          return (
            <article key={group.title} className="skill-card">
              <div className="skill-heading">
                <div className="skill-icon">
                  <Icon size={18} />
                </div>
                <h3>{group.title}</h3>
              </div>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
