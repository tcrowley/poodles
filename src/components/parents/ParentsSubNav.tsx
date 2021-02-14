import { NavLink } from 'react-router-dom';

function ParentsSubNav() {
  return (
    <nav className="app-sub-nav app-content">
      <NavLink to="/girls" activeClassName="active">Beautiful Girls</NavLink>
      <NavLink to="/studmuffins" activeClassName="active">Studmuffins</NavLink>
    </nav>
  );
}

export default ParentsSubNav;
