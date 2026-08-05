import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects-page">
      <header className="page-header">
        <p className="page-label">Selected Work</p>
        <h1>My Projects</h1>

        <p className="page-description">
          A collection of full-stack, WordPress, and e-commerce projects that I
          have built, managed, maintained, or helped improve.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
