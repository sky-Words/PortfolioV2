import { SectionHeader } from "../ui/SectionHeader";

export function ProjectsSection({ projects }) {
  return (
    <section className="section-band" id="projects">
      <SectionHeader kicker={projects.kicker} title={projects.title} />

      <div className="projects-grid">
        {projects.items.map((project) => (
          <article
            key={project.title}
            className={`project-tile${project.featured ? " featured" : ""}`}
          >
            <span className="project-meta">{project.meta}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
