import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects-page">
      <header className="page-header">
        <Reveal delay={0}>
          <p className="page-label">Selected Work</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1>My Projects</h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="page-description">
            A collection of full-stack, WordPress, and e-commerce projects that I
            have built, managed, maintained, or helped improve.
          </p>
        </Reveal>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal delay={0.18 + index * 0.04} key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
