import { NavLink } from 'react-router-dom';

function AboutSubNav() {
  return (
    <nav className="app-sub-nav app-content">
      <NavLink to="/about" className={({ isActive }) => (isActive ? " active" : "")}>About Us</NavLink>
      <NavLink to="/reunions" className={({ isActive }) => (isActive ? " active" : "")}>Reunions</NavLink>
      <NavLink to="/faq" className={({ isActive }) => (isActive ? " active" : "")}>FAQ</NavLink>
      <NavLink to="/treats" className={({ isActive }) => (isActive ? " active" : "")}>Treats</NavLink>
    </nav>
  );
}

export default AboutSubNav;
