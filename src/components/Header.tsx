import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import poodle from '../images/poodle.svg';

function Header() {
  return (
      <header className="app-header app-content">
        <div className="app-header-wrapper">
          <Link to="/" className="logo">Pampered Poodles</Link>

          <nav aria-label="Main">
              <Link to="/puppies">See the Puppies</Link>
              <Link to="/parents">Meet the Parents</Link>
              <Link to="/about">Get to Know Us</Link>
          </nav>
          <img src={ poodle } alt="" className="poodle-icon" />
          <button type="button" className="menu-action"><FontAwesomeIcon icon={faBars} /></button>
        </div>
      </header>
  );
}

export default Header;
