import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
      <footer className="app-footer app-content">
        <FontAwesomeIcon icon={faPaw} />
        <span>Barb Dunlop</span>

        <nav className="footer-nav" aria-label="Footer">
          <a href="mailto:bjdpamperedpets@yahoo.com">
              <span className="app-action-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <span className="footer-nav-description">bjdpamperedpets@yahoo.com</span>
          </a>
          <a href="tel:231-972-7592">
            <span className="app-action-icon"><FontAwesomeIcon icon={faPhoneAlt} /></span>
            <span className="footer-nav-description">(231) 972-7592</span>
          </a>
          <a href="https://www.facebook.com/125192348492/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <span className="app-action-icon"><FontAwesomeIcon icon={faFacebookF} /></span>
            <span className="footer-nav-description">Follow Us</span>
          </a>
        </nav>
      </footer>
  );
}

export default Footer;
