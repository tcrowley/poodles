import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import BackSubNav from 'components/common/BackSubNav';
import Wait from 'components/common/Wait';
import ErrorPage from 'components/ErrorPage';
import PuppyList from './PuppyList';
import puppiesService from 'services/puppies.service';
import { formatDisplayDate } from 'services/date.util';
import { Litter } from 'models/puppy.model';
import Gallery from 'components/common/Gallery';

function Nursery() {
  const { id } = useParams<{ id: string; }>();
  const [litter, setLitter] = useState<Litter | null>(null);
  const [availableCount, setAvailableCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Litter ' + id;
  }, [id]);


  useEffect(() => {
    setLoading(true);
    
    puppiesService.getLitter(id)
      .then(response => {
        setLitter(response.litter);
        setAvailableCount(response.litter?.puppies.filter(({ saleStatus }) => saleStatus === 'Available!').length || 0)
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <>
      <BackSubNav />
      <Wait waitText="Getting Litter Info" visible={ loading } />
    </>
  );

  if (!litter) return <ErrorPage />;

  return (
    <>
      <BackSubNav />
      <h1 className="app-h1">"{ litter.theme }" Litter</h1>
      <p className="app-lead-paragraph">
        { availableCount ? 
          `${availableCount} ${availableCount > 1 ? 'puppies are' : 'puppy is' } still available!` : 
          'All the puppies in this litter have homes' }
      </p>
      
      <p className="app-card">
        Born { formatDisplayDate(litter.dateOfBirth) }. { !!litter.comments && litter.comments }
      </p>

      <h2 className="app-h3">See the parents</h2>
      <div className="app-gallery captioned fill">
        <Link to={`/dog/${litter.femaleId}`}>
          <figure>
            <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${litter.femalePictureId}`} alt="" />
            <figcaption>{ litter.female }</figcaption>
          </figure>
        </Link>
      
        <Link to={`/dog/${litter.maleId}`}>
          <figure>
            <img src={`https://pamperedpoodles4u.net//PHP/util/view.php?id=${litter.malePictureId}`} alt="" />
            <figcaption>{ litter.male }</figcaption>
          </figure>
        </Link>
      </div>

      <h2 className="app-h3">Meet the puppies</h2>
      <PuppyList pups={litter.puppies} groupByGender={false} />

      { !!litter.pictures.length && (<>
        <h2 className="app-h3">Check out the group photos</h2>
        <Gallery pictures={litter.pictures} />
      </>)}
    </>
  );
};

export default Nursery;
