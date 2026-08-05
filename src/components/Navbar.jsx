import { NavLink } from "react-router";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="site-header">
      <nav className="navbar">
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
