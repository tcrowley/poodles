import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PictureInfo } from 'models/picture.model';

function GalleryImage({ pic }: { pic: PictureInfo }) {
  const [showFull, setShowFull] = React.useState(false);

  const showFullImage = () => {
    setShowFull(true);
    setTimeout(() => getOverlayElement().focus());
  }

  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      setShowFull(false);
    }

    // trap the focus
    if (event.code === 'Tab') {
      event.preventDefault();
      
      if (document.activeElement === getCloseElement()) {
        getOverlayElement().focus();
      } else {
        getCloseElement().focus();
      }
    }
  }

  const getOverlayElement = () => {
    return document.querySelector(`#full-image-${pic.id}`) as HTMLElement;
  }

  const getCloseElement = () => {
    return document.querySelector(`#full-image-${pic.id} button`) as HTMLElement;
  }

  return (
    <>
      <button type="button" className="button-link" onClick={() => showFullImage()}>
        <figure>
          <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${pic.id}`} alt="" />
          <figcaption>{ pic.caption }</figcaption>
        </figure>
      </button>

      { showFull && 
        <div className="app-gallery-full-image" onClick={() => setShowFull(false)} onKeyDown={(event) => handleKeyDown(event)} tabIndex={-1} id={`full-image-${pic.id}`}>
          <span className="app-gallery-image-container">
            <figure onClick={(event) => event.stopPropagation() }>
              <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${pic.id}`} alt="" />
              <figcaption>{ pic.caption }</figcaption>
            </figure>

            <button type="button" className="app-action-icon" onClick={() => setShowFull(false)} aria-label="Close">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </span>
        </div>
      }
    </>
  );
}

export default GalleryImage;
