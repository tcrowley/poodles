import React from 'react';
import { Link } from 'react-router-dom';
import ParentsSubNav from './ParentsSubNav';
import adultsService from 'services/adults.service';
import { Adult } from 'models/adult.model';

function Girls() {
  const [activeDogs, setActiveDogs] = React.useState< Adult[] >([]);
  const [retiredDogs, setRetiredDogs] = React.useState< Adult[] >([]);
  const [passedDogs, setPassedDogs] = React.useState< Adult[] >([]);
  
  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Beautiful Girls';
  }, []);

  React.useEffect(() => {
    adultsService.getAdults().then(res => {
      const dogs = res.adults
                    .filter(({ sex }) => sex === 'F')
                    .sort((a, b) => +new Date(b.dateOfBirth) - +new Date(a.dateOfBirth));

      setActiveDogs(dogs.filter(dog => !dog.dateOfDeath && dog.retired === 'N'));
      setRetiredDogs(dogs.filter(dog => !dog.dateOfDeath && dog.retired === 'Y'));
      setPassedDogs(dogs.filter(dog => !!dog.dateOfDeath));
    });
  }, []);

  return (
      <>
        <ParentsSubNav />

        <h1 className="app-h1">Our Beautiful Girls</h1>
        <p className="app-lead-paragraph">Our fabulous, loving girls!</p>

        <div className="app-gallery captioned">
          { activeDogs.map((dog) => ( 
            <Link key={dog.id} to={`/dog/${dog.id}`}>
              <figure>
                <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${dog.mainPictureId}`} alt="" />
                <figcaption>{ dog.nickName }</figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <h2 className="app-h1">Our Retired Girls</h2>
        <p className="app-lead-paragraph">These girls' job is enjoying the pampered pet life.</p>

        <div className="app-gallery captioned">
          { retiredDogs.map((dog) => ( 
            <Link key={dog.id} to={`/dog/${dog.id}`}>
              <figure>
                <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${dog.mainPictureId}`} alt="" />
                <figcaption>{ dog.nickName }</figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <h2 className="app-h1">In Loving Memory</h2>
        <p className="app-lead-paragraph">We'll see them again at the rainbow bridge.</p>

        <div className="app-gallery captioned">
          { passedDogs.map((dog) => ( 
            <Link key={dog.id} to={`/dog/${dog.id}`}>
              <figure>
                <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${dog.mainPictureId}`} alt="" />
                <figcaption>{ dog.nickName }</figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </>
  );
}

export default Girls;
