import React from 'react';
function Puppies() {

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Puppies';
  }, []);

  return (
      <>
        Puppies
      </>
  );
}

export default Puppies;
