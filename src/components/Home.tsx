import React from 'react';
import { Link } from 'react-router-dom';
import picturesService from '../services/pictures.service';

function Home() {
  const [count, setCount] = React.useState('');

  React.useEffect(() => {
    picturesService.getCount().then(res => setCount(res.count));
  }, []);

  return (
      <>
        <h1 className="app-h1">Standard Poodles from Mid-Michigan</h1>
        <p className="app-lead-paragraph">Loving, smart, beautiful, and calm. We have your new best friend!</p>

        {/* <div className="placeholder">pictures</div> */}

        <p>
          New pictures posted for every puppy every day they are with us. We have <strong>{ count }</strong> pictures and counting! 
        </p>

        <p>
          Looking for news and updates? Want to join in the birthday celebrations? Get pupdates from the pups in their new homes? Follow us on <a href="https://www.facebook.com/Pampered-Poodles-4u-10-Standard-Poodles-and-their-babies-125192348492/" target="_blank" rel="noopener noreferrer">FaceBook</a>.
        </p>

        <p>
          If you <em>are</em> considering adopting one of our babies, please take some time to read about <Link to="/about">who we are and what we do</Link> first!
        </p>
      </>
  );
}

export default Home;
