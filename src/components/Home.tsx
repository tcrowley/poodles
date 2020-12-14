import picturesService from '../services/pictures.service';
import React from 'react';

function Home() {
  const [count, setCount] = React.useState('');

  React.useEffect(() => {
    picturesService.getCount().then(res => setCount(res.count));
  }, []);

  return (
      <>
        { count }
      </>
  );
}

export default Home;
