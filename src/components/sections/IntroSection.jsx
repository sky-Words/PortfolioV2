import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

export function IntroSection({ intro }) {
  return (
    <section className="section-band intro-band">
      <SectionHeader kicker={intro.kicker} title={intro.title} />
      <div className="intro-grid">
        <p>{intro.description}</p>
        <div className="info-panel">
          <div className="info-row">
            <MapPin size={18} />
            <span>{intro.location}</span>
          </div>
          <div className="info-row">
            <Mail size={18} />
            <span>{intro.email}</span>
          </div>
          <div className="info-row">
            <Phone size={18} />
            <span>{intro.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
