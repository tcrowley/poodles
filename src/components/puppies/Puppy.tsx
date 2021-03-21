import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import BackSubNav from 'components/common/BackSubNav';
import ErrorPage from 'components/ErrorPage';
import Gallery from 'components/common/Gallery';
import Wait from 'components/common/Wait';
import PuppyAgreement from './PuppyAgreement';
import PuppyList from './PuppyList';
import puppiesService from 'services/puppies.service';
import { formatDisplayDate, getDateFromString } from 'services/date.util';
import { Pup } from 'models/puppy.model';

function Puppy() {
  const { id } = useParams<{ id: string; }>();

  const [loading, setLoading] = React.useState(true);
  const [puppy, setPuppy] = React.useState< Pup | null >(null);

  const hasDepartureDate = () => {
    return !!puppy?.departureDate && puppy.departureDate !== '0000-00-00';
  };

  const getDepartureDate = () => {
    if (!hasDepartureDate()) {
      return;
    }
    
    return getDateFromString(puppy?.departureDate);
  };

  const getStatusText = () => {
    let text;
    
    switch (puppy?.saleStatusId) {
      case 'A':
        text = 'This puppy is available for adoption!';
        break;

      case 'P':
        text = 'This puppy\'s adoption is pending!';
        break;

      case 'H':
        text = 'Call to discuss this puppy\'s availability.';
        break;

      case 'N':
        text = 'This puppy is not for sale.';
        break;

      case 'S':
        text = 'This puppy has a new home!';
        break;

      case 'R':
        text = 'This puppy has been reserved.';
        break;

      default: 
        text = '';
        break;
    }
    
    return text;
  }

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U' + (puppy?.name ? ` - ${ puppy?.name }` : 'Puppy');
  }, [puppy]);

  React.useEffect(() => {
    setLoading(true);

    (async () => {
      const response = await puppiesService.getPuppy(id)
      setPuppy(response.puppy);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return (
    <>
      <BackSubNav />
      <Wait waitText="Getting Puppy Info" visible={ loading } />
    </>
  );

  if (!puppy) return <ErrorPage />;

  return (
    <>
      <BackSubNav />
      
      <h1 className="app-h1">
        { puppy.name } 
        { !!puppy.nickName && puppy.name !== puppy.nickName && `(${ puppy.nickName })` }
      </h1>
      <p className="app-lead-paragraph">
        { puppy.color } { puppy.sex }
      </p>

      <p>
      { puppy.nickName || puppy.name } is a <Link to={`/dog/${puppy.litter.femaleId}`}>{ puppy.litter.female }</Link> and <Link to={`/dog/${puppy.litter.maleId}`}>{ puppy.litter.male }</Link> baby from our <Link to={`/litter/${ puppy.litter.id }`}>{ puppy.litter.theme }</Link> litter born { formatDisplayDate(puppy.litter.dateOfBirth) }.
      </p>

      <p><strong>{ getStatusText() }</strong></p>
      { puppy.saleStatusId === 'A' && <><PuppyAgreement /><br /></> }
      
      { !!puppy.family && 
        <p>
          { puppy.nickName || puppy.name } 
          { hasDepartureDate() && new Date() >= (getDepartureDate() || 0) ? ' went ' : ' is going ' } 
          home with the { puppy.family } family { !!puppy.homeTown && <> ({ puppy.homeTown }) </>}
          { hasDepartureDate() && <> on { formatDisplayDate(puppy.departureDate, { month: 'long', day: 'numeric' }) }</> }. 
          
          { !!puppy.newName && ![puppy.name, puppy.nickName].includes(puppy.newName) && <>{ puppy.sex === 'Girl' ? ' Her' : ' His' } new name is { puppy.newName }! </> }
          
          { !!puppy.newName && [puppy.name, puppy.nickName].includes(puppy.newName) && <>{ puppy.sex === 'Girl' ? ' She ' : ' He ' } is keeping { puppy.sex === 'Girl' ? ' her ' : ' his ' } name! </> }
        </p>
      }

      <p>{ puppy.comments }</p>

      <details>
        <summary>See { puppy.nickName || puppy.name }'s siblings!</summary>
        <p>
          Check out the <Link to={`/litter/${ puppy.litter.id }`}>
            <span className="fa-layers fa-fw fa-lg">
              <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-10 shrink-5 left-4 down-8"  />
              <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-20 shrink-5 right-6"  />
            </span>
            { puppy.litter.theme }
            <span className="fa-layers fa-fw fa-lg">
              <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-10 shrink-5 left-4 down-8"  />
              <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-20 shrink-5 right-6"  />
            </span>
          </Link> page for daily group pictures!  
        </p>

        <PuppyList pups={puppy.litter.puppies.filter(({ id }) => id !== puppy.id)} groupByGender={false} />
      </details>
      <br />

      <span className="app-supplimental-text">Look for the <span className="lowercase">{ puppy.collar }</span> collar in pictures!</span>
      <Gallery pictures={puppy.pictures} />
    </>
  );
}

export default Puppy;
