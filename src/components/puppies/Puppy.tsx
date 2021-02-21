import React from 'react';
import { useParams } from 'react-router-dom';
import BackSubNav from 'components/common/BackSubNav';
import { Pup } from 'models/puppy.model';

function Puppy() {
  const { id } = useParams<{ id: string; }>();

  const [puppy] = React.useState< Pup | null >(null);

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U' + (puppy?.name ? ` - ${ puppy?.name }` : 'Puppy');
  }, [puppy]);

  return (
    <>
      <BackSubNav />
      
      <p>Puppy { id }</p>
    </>
  );
}

export default Puppy;
