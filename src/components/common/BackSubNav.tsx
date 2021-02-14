import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BackSubNav() {
  return (
    <nav className="app-back-sub-nav app-sub-nav app-content">
      <button type="button" className="button-link" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="sm" /> Back
      </button>
    </nav>
  );
}

export default BackSubNav;
