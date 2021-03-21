import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pup } from "models/puppy.model";
import { Link } from "react-router-dom";

function PuppyLink({ pup, showPendingOnly = false }: { pup: Pup; showPendingOnly?: boolean; }) {
  return (
    <Link to={`/puppy/${pup.id}`}>
      <figure>
        <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${pup.pictureId || pup.mainPicture}`} alt="" />
        <figcaption>
          { pup.name } 
          { showPendingOnly && pup.saleStatusId === 'P' && 
            <span className="banner">
              <FontAwesomeIcon icon={faHeart} transform="rotate--20" /> { pup.saleStatus } <FontAwesomeIcon icon={faHeart}  transform="rotate-20"/> 
            </span>
          }
          { !showPendingOnly && <span className="banner">{ pup.saleStatus }</span> }
        </figcaption>
      </figure>
    </Link>
  );
}

export default PuppyLink;
