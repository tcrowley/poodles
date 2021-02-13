import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Adult } from '../models/adult.model';
import { PictureInfo } from '../models/picture.model';
import { Litter } from '../models/puppy.model';
import adultsService from '../services/adults.service';
import { calculateAge, formatDisplayDate } from '../services/date.util';
import BackSubNav from './BackSubNav';
import GalleryImage from './GalleryImage';
import Wait from './Wait';

function Dog() {
  const { id } = useParams<{ id: string; }>();
  const [loading, setLoading] = React.useState(true);
  const [dog, setDog] = React.useState< Adult | null >(null);

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U' + (dog?.nickName ? ` - ${ dog?.nickName }` : '');
  });

  React.useEffect(() => {
    setLoading(true);
    adultsService.getAdult(id).then(res => {
      setDog(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <BackSubNav />
     
      <Wait waitText="Getting Poodle Info" visible={ loading } />
     
      { !loading && 
        <React.Fragment>
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
              { dog?.height && <React.Fragment><div><dt>Height:</dt> <dd>{ dog?.height }"</dd></div></React.Fragment> }
              { dog?.weight && <React.Fragment><div><dt>Weight:</dt> <dd>{ dog?.weight } lbs</dd></div></React.Fragment> }
              { dog?.registration && <React.Fragment><div><dt>Registration:</dt> <dd>{ dog?.registration }</dd></div></React.Fragment> }
              { dog?.testingInfo && <React.Fragment><div><dt>Testing Info:</dt> <dd>{ dog?.testingInfo }</dd></div></React.Fragment> }
            </dl>
          </details>

          { !!dog?.litters.length &&
            <details>
              <summary>Past Litters</summary>
              <ul className="app-list">
                { dog?.litters.map((litter: Litter, index) => (
                  <li key={index}>
                    <Link to={`/litter/${ litter.id }`}>{ litter.theme }</Link> <span className="app-supplimental-text">({ formatDisplayDate(litter.dateOfBirth, {}) })</span>
                  </li>
                ))}
              </ul>
            </details>
          }
          <br />

          <div className="app-gallery show-placeholder">
            { dog?.pictures.map((pic: PictureInfo, index) => <GalleryImage pic={pic} key={index} /> ) }
          </div>
        </React.Fragment>
      }
    </>
  );
}

export default Dog;
