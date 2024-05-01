import { NavLink } from 'react-router-dom';

function ParentsSubNav() {
  return (
    <nav className="app-sub-nav app-content">
      <NavLink to="/girls" className={({ isActive }) => (isActive ? " active" : "")}>Beautiful Girls</NavLink>
      <NavLink to="/studmuffins" className={({ isActive }) => (isActive ? " active" : "")}>Studmuffins</NavLink>
    </nav>
  );
}

export default ParentsSubNav;
