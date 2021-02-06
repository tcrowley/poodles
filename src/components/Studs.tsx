import React from 'react';
import { Link } from 'react-router-dom';
import { Adult } from '../models/adult.model';
import adultsService from '../services/adults.service';
import ParentsSubNav from "./ParentsSubNav";

function Studs() {
  const [activeDogs, setActiveDogs] = React.useState< Adult[] >([]);
  const [retiredDogs, setRetiredDogs] = React.useState< Adult[] >([]);
  const [passedDogs, setPassedDogs] = React.useState< Adult[] >([]);
  
  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Studmuffins';
  });

  React.useEffect(() => {
    adultsService.getAdults().then(res => {
      const dogs = res.adults
                    .filter(({ sex }) => sex === 'M')
                    .sort((a, b) => +new Date(b.dateOfBirth) - +new Date(a.dateOfBirth));

      setActiveDogs(dogs.filter(dog => !dog.dateOfDeath && dog.retired === 'N'));
      setRetiredDogs(dogs.filter(dog => !dog.dateOfDeath && dog.retired === 'Y'));
      setPassedDogs(dogs.filter(dog => !!dog.dateOfDeath));
    });
  }, []);

  return (
      <>
        <ParentsSubNav />

        <h1 className="app-h1">Our Handsome Studmuffins</h1>
        <p className="app-lead-paragraph">Our fabulous, loving boys!</p>

        <div className="app-gallery captioned">
          { activeDogs.map((dog, index) => ( 
            <Link  key={index} to={`/dog/${dog.id}`}>
              <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${dog.mainPictureId}`} alt="" />
              <strong>{ dog.nickName }</strong>
            </Link>
          ))}
        </div>

        <h2 className="app-h1">Our Retired Boys</h2>
        <p className="app-lead-paragraph">These boys' job is enjoying the pampered pet life.</p>

        <div className="app-gallery captioned">
          { retiredDogs.map((dog, index) => ( 
            <Link key={index} to={`/dog/${dog.id}`}>
              <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${dog.mainPictureId}`} alt="" />
              <strong>{ dog.nickName }</strong>
            </Link>
          ))}
        </div>

        <h2 className="app-h1">In Loving Memory</h2>
        <p>We miss these beloved boys every day.</p>

        <div className="app-gallery captioned">
          { passedDogs.map((dog, index) => ( 
            <Link key={index} to={`/dog/${dog.id}`}>
              <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${dog.mainPictureId}`} alt="" />
              <strong>{ dog.nickName }</strong>
            </Link>
          ))}
        </div>
      </>
  );
}

export default Studs;
