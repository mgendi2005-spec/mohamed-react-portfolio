import { Link } from "react-router";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

function ProjectSection() {
  return (
    <section id="projects" className="projects-section">
      <Reveal delay={0}>
        <p className="section-label">Selected Work</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h2>My Projects</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal delay={0.16 + index * 0.05} key={project.id}>
            <ProjectCard project={project} featured={index < 4} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <Link className="view-all-projects" to="/projects">
          View Projects Page →
        </Link>
      </Reveal>
    </section>
  );
}

export default ProjectSection;
