import Reveal from "../components/Reveal";

function Contact() {
  const whatsappUrl =
    "https://wa.me/201021774776?text=Hello%20Mohamed%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

  const emailUrl =
    "mailto:m.gendi2005@gmail.com?subject=Portfolio%20Project%20Inquiry&body=Hello%20Mohamed%2C%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project.";

  return (
    <section className="contact-page">
      <div className="contact-content">
        <Reveal delay={0}>
          <p className="page-label">Get in Touch</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1>Let’s build something valuable together.</h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="contact-introduction">
            I’m available for e-commerce websites, agency websites, WordPress
            development, and full-stack opportunities.
          </p>
        </Reveal>

        <div className="contact-options">
          <Reveal delay={0.18}>
            <a
              className="contact-card"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              <strong>Start a conversation ↗</strong>
            </a>
          </Reveal>

          <Reveal delay={0.22}>
            <a className="contact-card" href={emailUrl}>
              <span>Email</span>
              <strong>Send me an email ↗</strong>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
