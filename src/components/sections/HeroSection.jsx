import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function HeroSection({ hero }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="badge-row">
          <span className="eyebrow-pill">{hero.badgePrimary}</span>
          <span className="eyebrow-pill soft">{hero.badgeSecondary}</span>
        </div>

        <h1>Elmehdi Sadki</h1>
        <p className="hero-title">{hero.title}</p>
        <p className="hero-description">{hero.description}</p>

        <div className="focus-strip">
          {hero.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="cta-row">
          <a className="primary-cta" href="mailto:elmehdi.sadki@outlook.fr">
            <Mail size={18} />
            <span>{hero.primaryCta}</span>
          </a>
          <a className="secondary-cta" href="#projects">
            <span>{hero.secondaryCta}</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="stats-grid">
          {hero.stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <img src="/assets/hero-workspace.png" alt="" />
        <div className="visual-card insight-card">
          <Sparkles size={18} />
          <div>
            <strong>{hero.recruiterCardTitle}</strong>
            <span>{hero.recruiterCardText}</span>
          </div>
        </div>
        <div className="visual-card stack-card">
          <div className="stack-line">
            <span>Python</span>
            <span>SQL</span>
            <span>React</span>
          </div>
          <div className="stack-line muted">
            <span>MongoDB</span>
            <span>Express</span>
            <span>LLaMA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
