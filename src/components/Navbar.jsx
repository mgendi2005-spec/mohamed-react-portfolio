import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <NavLink className="brand" to="/" end>
          Mohamed El Gendy
        </NavLink>

        <div className="nav-links">
          <NavLink className={getLinkClass} to="/about">
            About
          </NavLink>

          <NavLink className={getLinkClass} to="/projects">
            Projects
          </NavLink>

          <NavLink className={getLinkClass} to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
