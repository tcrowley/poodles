import { NavLink } from 'react-router-dom';

function AboutSubNav() {
  return (
    <nav className="app-sub-nav app-content">
      <NavLink to="/about" activeClassName="active">About Us</NavLink>
      <NavLink to="/reunions" activeClassName="active">Reunions</NavLink>
      <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
      <NavLink to="/treats" activeClassName="active">Treats</NavLink>
    </nav>
  );
}

export default AboutSubNav;
