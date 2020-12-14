import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="app-header">
        <Link to="/" className="logo">Pampered Poodles</Link>

        <nav aria-label="Main">
            <Link to="/about">Get to Know Us</Link>
            <Link to="/parents">Meet the Parents</Link>
            <Link to="/puppies">See the Puppies</Link>
        </nav>
        <img src="/images/poodle.svg" alt="" className="poodle-icon" />
        <button type="button" className="menu-action"><img src="/images/menu-icon.svg" alt="menu" /></button>
      </header>
  );
}

export default Header;
