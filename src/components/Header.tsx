import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import poodle from 'images/poodle.svg';

function Header() {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNavMenu = (event) => {
    if (event.target.closest('button, a')) {
      setNavOpen(!navOpen);
    }
  }

  return (
    <header className="app-header app-content">
      <div className="app-header-wrapper">
        <Link to="/" className="logo">Pampered Poodles <small>4 U</small></Link>

        <nav aria-label="Main" className="app-main-nav">
            <Link to="/availablepuppies">See the Puppies</Link>
            <Link to="/girls">Meet the Parents</Link>
            <Link to="/about">Get to Know Us</Link>
        </nav>
        <img src={ poodle } alt="" className="poodle-icon" />
        <button type="button" className="menu-action" aria-label="Navigation Menu" onClick={toggleNavMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        { navOpen && 
          <nav role="navigation" aria-label="Site" className="app-popover-nav" onClick={toggleNavMenu}>
            <button type="button" className="close-menu-action" aria-label="Navigation Menu">
             Close Menu <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <Link to="/availablepuppies">See the Puppies</Link>
            <Link to="/girls">Meet the Parents</Link>
            <Link to="/about">Get to Know Us</Link>
          </nav>
        }
      </div>
    </header>
  );
}

export default Header;
