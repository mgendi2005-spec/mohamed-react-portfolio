import Reveal from "./Reveal";
import experiences from "../data/experience";

function Experience() {
  return (
    <section className="experience" aria-labelledby="experience-heading">
      <div className="section-heading">
        <Reveal delay={0}>
          <p className="section-label">Career</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 id="experience-heading">Work Experience</h2>
        </Reveal>
      </div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <Reveal delay={0.12 + index * 0.05} key={item.company}>
            <article className="experience-item">
              <p className="experience-period">{item.period}</p>

              <div className="experience-content">
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
                <p className="experience-description">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
