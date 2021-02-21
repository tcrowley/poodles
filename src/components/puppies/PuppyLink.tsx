import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pup } from "models/puppy.model";
import { Link } from "react-router-dom";

function PuppyLink({ pup, showPendingOnly = false }: { pup: Pup; showPendingOnly?: boolean; }) {
  return (
    <Link to={`/puppy/${pup.puppyId}`}>
      <figure>
        <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${pup.pictureId}`} alt="" />
        <figcaption>
          { pup.name } 
          { showPendingOnly && pup.saleStatus === 'P' && 
            <span className="banner">
              <FontAwesomeIcon icon={faHeart} transform="rotate--20" /> Adoption Pending <FontAwesomeIcon icon={faHeart}  transform="rotate-20"/> 
            </span>
          }
          { !showPendingOnly && <span className="banner">{ pup.saleStatus }</span> }
        </figcaption>
      </figure>
    </Link>
  );
}

export default PuppyLink;
