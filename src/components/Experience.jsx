import experiences from "../data/experience";

function Experience() {
  return (
    <section className="experience" aria-labelledby="experience-heading">
      <div className="section-heading">
        <p className="section-label">Career</p>
        <h2 id="experience-heading">Work Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-item" key={item.company}>
            <p className="experience-period">{item.period}</p>

            <div className="experience-content">
              <h3>{item.company}</h3>
              <p className="experience-role">{item.role}</p>
              <p className="experience-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
