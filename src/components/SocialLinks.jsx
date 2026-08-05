import Reveal from "./Reveal";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamed-el-gendy-b2a99235a",
  },
  {
    name: "Email",
    url: "mailto:m.gendi2005@gmail.com?subject=Portfolio%20Inquiry",
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/201021774776",
  },
];

function SocialLinks() {
  return (
    <Reveal delay={0.38}>
      <ul className="social-links">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default SocialLinks;
