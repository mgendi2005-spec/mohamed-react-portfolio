import { Link } from "react-router";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <section id="projects" className="projects-section">
      <p>Selected Work</p>
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link to="/projects">View Projects Page →</Link>
    </section>
  );
}

export default ProjectSection;
