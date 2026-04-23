import { Globe, Mail, Phone } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

export function ContactSection({ contact }) {
  return (
    <section className="section-band contact-band" id="contact">
      <div className="contact-card">
        <SectionHeader kicker={contact.kicker} title={contact.title} compact />

        <div className="contact-grid">
          <a className="contact-item" href={`mailto:${contact.email}`}>
            <Mail size={18} />
            <span>{contact.email}</span>
          </a>
          <a className="contact-item" href="tel:+212612667045">
            <Phone size={18} />
            <span>{contact.phone}</span>
          </a>
          <a className="contact-item" href={contact.linkedinHref} target="_blank" rel="noreferrer">
            <Globe size={18} />
            <span>{contact.linkedin}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
