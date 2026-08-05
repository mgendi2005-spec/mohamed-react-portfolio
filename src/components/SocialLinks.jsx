const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mgendi2005-spec",
  },
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
    <ul className="social-links">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
