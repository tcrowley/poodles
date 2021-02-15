import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackSubNav from 'components/common/BackSubNav';
import Wait from 'components/common/Wait';
import Gallery from 'components/common/Gallery';
import ErrorPage from 'components/ErrorPage';
import adultsService from 'services/adults.service';
import { calculateAge, formatDisplayDate } from 'services/date.util';
import { Adult } from 'models/adult.model';
import { Litter } from 'models/puppy.model';

function Dog() {
  const { id } = useParams<{ id: string; }>();

  const [loading, setLoading] = React.useState(true);
  const [dog, setDog] = React.useState< Adult | null >(null);

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U' + (dog?.nickName ? ` - ${ dog?.nickName }` : '');
  }, [dog]);

  React.useEffect(() => {
    setLoading(true);

    (async () => {
      const response = await adultsService.getAdult(id)
      setDog(response.adult);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return (
    <>
      <BackSubNav />
      <Wait waitText="Getting Poodle Info" visible={ loading } />
    </>
  );

  if (!dog) return <ErrorPage />;

  return (
    <>
      <BackSubNav />
     
      <h1 className="app-h1">
        { dog?.fullName } 
        { dog?.fullName !== dog?.nickName && `(${ dog?.nickName })` }
      </h1>
      <p className="app-lead-paragraph">
        Our <span className="lowercase">{ dog?.color } { dog?.sexDescription }</span> born { formatDisplayDate(dog?.dateOfBirth) }.
      </p>

      <p>
        { dog?.dateOfDeath &&
          `${ dog?.nickName } left us ${ formatDisplayDate(dog?.dateOfDeath) } when ${ dog?.sex === 'M' ? 'he' : 'she' } was ${ calculateAge(dog?.dateOfBirth, dog?.dateOfDeath) } years old. If love alone could keep them alive, they’d live forever.`
        }
      </p>

      <p>
        { !dog?.dateOfDeath && dog?.retired === 'Y' &&
          `${ dog?.nickName } is enjoying the pampered pet life and will not being having any more babies.`
        }
      </p>
      
      { dog?.comments && <p>{ dog?.comments }</p> }

      <details>
        <summary>Facts about { dog?.nickName }</summary>
        <dl>
          { dog?.height && <><div><dt>Height:</dt> <dd>{ dog?.height }"</dd></div></> }
          { dog?.weight && <><div><dt>Weight:</dt> <dd>{ dog?.weight } lbs</dd></div></> }
          { dog?.registration && <><div><dt>Registration:</dt> <dd>{ dog?.registration }</dd></div></> }
          { dog?.testingInfo && <><div><dt>Testing Info:</dt> <dd>{ dog?.testingInfo }</dd></div></> }
        </dl>
      </details>

      { !!dog?.litters.length &&
        <details>
          <summary>Past Litters</summary>
          <ul className="app-list">
            { dog?.litters.map((litter: Litter) => (
              <li key={litter.id}>
                <Link to={`/litter/${ litter.id }`}>{ litter.theme }</Link> <span className="app-supplimental-text">({ formatDisplayDate(litter.dateOfBirth, {}) })</span>
              </li>
            ))}
          </ul>
        </details>
      }

      <br />

      <Gallery pictures={dog?.pictures} />
    </>
  );
}

export default Dog;
