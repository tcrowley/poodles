import React from 'react';
import { useParams } from 'react-router-dom';
import BackSubNav from 'components/common/BackSubNav';

function Litter() {
  const { id } = useParams<{ id: string; }>();

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Litter ' + id;
  }, [id]);

  return (
    <>
      <BackSubNav />
      
      <p>Litter { id }</p>
    </>
  );
}

export default Litter;
