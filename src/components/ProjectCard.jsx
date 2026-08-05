function ProjectCard({ project, featured = false }) {
  const mainImage = project.images?.[0];
  const secondImage = project.images?.[1];

  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      <div className="project-image-wrapper">
        {mainImage ? (
          <>
            <img
              className="project-image project-image-main"
              src={mainImage}
              alt={`${project.title} website`}
              loading="lazy"
              decoding="async"
            />

            {secondImage && (
              <img
                className="project-image project-image-second"
                src={secondImage}
                alt={`${project.title} admin dashboard`}
                loading="lazy"
                decoding="async"
              />
            )}
          </>
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className="project-card-content">
        <p className="project-type">{project.type}</p>

        <h3>{project.title}</h3>

        <p className="project-role">{project.role}</p>

        <p className="project-description">{project.description}</p>

        <ul className="project-technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.liveUrl && (
          <a
            className="project-link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
