function Contact() {
  const whatsappUrl =
    "https://wa.me/201021774776?text=Hello%20Mohamed%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

  const emailUrl =
    "mailto:m.gendi2005@gmail.com?subject=Portfolio%20Project%20Inquiry&body=Hello%20Mohamed%2C%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project.";

  return (
    <section className="contact-page">
      <div className="contact-content">
        <p className="page-label">Get in Touch</p>

        <h1>Let’s build something valuable together.</h1>

        <p className="contact-introduction">
          I’m available for e-commerce websites, agency websites, WordPress
          development, and full-stack opportunities.
        </p>

        <div className="contact-options">
          <a
            className="contact-card"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>WhatsApp</span>
            <strong>Start a conversation ↗</strong>
          </a>

          <a className="contact-card" href={emailUrl}>
            <span>Email</span>
            <strong>Send me an email ↗</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
