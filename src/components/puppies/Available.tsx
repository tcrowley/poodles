import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wait from 'components/common/Wait';
import PuppyAgreement from './PuppyAgreement';
import PuppyLink from './PuppyLink';
import puppiesService from 'services/puppies.service';
import { formatDisplayDate } from 'services/date.util';
import { Litter, Pup } from 'models/puppy.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Available() {
  const [pupsByLitter, setPupsByLitter] = useState<Record<string, Pup[]>>({});
  const [litters, setLitters] = useState<Litter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Puppies';
  }, []);

  useEffect(() => {
    setLoading(true);
    
    puppiesService.getAvailablePuppies()
      .then(response => {
        const pupsByLitter = response.puppies?.reduce(function (litters, pup) {
          litters[pup.litterId] = [ ...litters[pup.litterId] || [], pup ];
          return litters;
        }, {});

        setPupsByLitter(pupsByLitter);
        
        return Promise.all(Object.keys(pupsByLitter).map(id => puppiesService.getLitter(id)))
          .then(responses => {
            const litters = responses.map(res => res.litter).filter(litter => !!litter) as Litter[];
            setLitters(litters);
          })
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Wait waitText="Getting Puppies" visible={ loading } />;
  
  return (
      <>
        <h1 className="app-h1">Our Fabulous Puppies</h1>
        { !!Object.keys(litters).length && 
          <>
            <p className="app-lead-paragraph">Look who's available for adoption!</p>

            { litters.map(litter => (
              <article key={litter.id}>
                <h2 className="app-h3">{ litter.female } and { litter.male } babies born { formatDisplayDate(litter.dateOfBirth) }</h2>
                <p className="app-h5">
                <Link to={`/litter/${ litter.id }`}></Link>
                  Check the <Link to={`/litter/${ litter.id }`}>
                  <span className="fa-layers fa-fw fa-lg">
                    <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-10 shrink-5 left-4 down-8"  />
                    <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-20 shrink-5 right-6"  />
                  </span>
                  nursery
                  <span className="fa-layers fa-fw fa-lg">
                    <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-10 shrink-5 left-4 down-8"  />
                    <FontAwesomeIcon icon={faPaw} size="xs" transform="rotate-20 shrink-5 right-6"  />
                  </span></Link> for details and daily group pictures!  
                </p>
                <div className="app-gallery captioned">
                  { pupsByLitter[litter.id].map((pup) => <PuppyLink key={pup.id} pup={pup} showPendingOnly={true} />) }
                </div>
              </article>
            ))}
          </>
        }

        { !litters.length &&
          <>
            <p className="app-lead-paragraph">Sadly, we don't have any puppies available at the moment.</p>

            <p>
              Contact us at <a href="mailto:bjdpamperedpets@yahoo.com">bjdpamperedpets@yahoo.com</a> or <a href="tel:231-972-7592">(231) 972-7592</a> to find out who we hope to have soon.
            </p>

            <details>
              <summary><h2 className="app-h6">Want to reserve a puppy from an upcoming litter?</h2></summary>
              <p>
                $100 will reserve your puppy before birth - Deposit is not refundable but can be moved to another litter (no time limit). We can make initial arrangements via email, but a home for a new baby is too important to do without a live phone conversation. Another deposit of half the puppy price is requested once you have selected your baby. I accept checks for deposit but request balance in cash.
              </p>
            </details>
          </>
        }

        <PuppyAgreement />
      </>
  );
}

export default Available;
