import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

export function RecruiterSection({ recruiter }) {
  return (
    <section className="section-band recruiter-band">
      <SectionHeader kicker={recruiter.kicker} title={recruiter.title} />

      <div className="recruiter-grid">
        <div className="recruiter-points">
          {recruiter.points.map((point) => (
            <div key={point} className="recruiter-point">
              <CheckCircle2 size={18} />
              <p>{point}</p>
            </div>
          ))}
        </div>
        <aside className="availability-card">
          <span className="availability-label">{recruiter.availabilityTitle}</span>
          <p>{recruiter.availabilityText}</p>
        </aside>
      </div>
    </section>
  );
}
