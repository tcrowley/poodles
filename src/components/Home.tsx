import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import christmasBlingImg from '../images/christmas_bling.jpg';
import goingForRideImg from '../images/going_for_a_ride.jpg';
import nappingImg from '../images/napping.jpg';
import onDeckImg from '../images/on_deck.jpg';
import pontoonImg from '../images/pontoon_ride.jpg';
import swimmingBallImg from '../images/swimming_ball.jpg';
import waitingPrettyImg from '../images/waiting_pretty.jpg';
import walkImg from '../images/walk.jpg';
import picturesService from '../services/pictures.service';

function Home() {
  const carouselList = [
    { src: christmasBlingImg, alt: 'christmas bling', current: true }, 
    { src: onDeckImg, alt: 'poodles on deck' },
    { src: nappingImg, alt: 'taking a nap' },
    { src: pontoonImg, alt: 'pontoon ride' },
    { src: swimmingBallImg, alt: 'diving in the lake for the ball' },
    { src: waitingPrettyImg, alt: 'everyone waiting patiently' },
    { src: walkImg, alt: 'going for a walk with Harlee' },
    { src: goingForRideImg, alt: 'car ride' }
  ];

  const [count, setCount] = React.useState('');
  const [carouselItems, setCarouselItems] = React.useState(carouselList);

  const selectCarouselItem = (selectedIndex) => {
    const list = carouselList.map((item, itemIndex) => {
      item.current = false;
      return item;
    });

    (list[selectedIndex] || list[0]).current = true;
    setCarouselItems(list);
  }

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      const currentIndex = carouselItems.findIndex(item => item.current);
      selectCarouselItem(currentIndex+1);
    }, 4000);
    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    picturesService.getCount().then(res => setCount(res.count));
  }, []);

  return (
    <div className="home-content">
      <div className="app-carousel">
        { carouselItems.map((item, index) => ( 
          <img key={index} src={item.src} alt="" className={ item.current ? 'current' : '' }></img>
        ))}
        
        <div className="app-carousel-actions">
          { carouselItems.map((item, index) => ( 
            <button key={index} className={ item.current ? 'current' : '' } onClick={() => selectCarouselItem(index)}>
              <FontAwesomeIcon icon={faCircle} />
            </button>
          ))}
        </div>
      </div>

      <h1 className="app-h1">Standard Poodles from Mid-Michigan</h1>
      <p className="app-lead-paragraph">Loving, smart, beautiful, and calm. We have your new best friend!</p>

      <p>
        New pictures posted for every puppy every day they are with us. We have <strong>{ count }</strong> pictures and counting! 
      </p>

      <p>
        Looking for news and updates? Want to join in the birthday celebrations? Get pupdates from the pups in their new homes? Follow us on <a href="https://www.facebook.com/Pampered-Poodles-4u-10-Standard-Poodles-and-their-babies-125192348492/" target="_blank" rel="noopener noreferrer">FaceBook</a>.
      </p>

      <p>
        If you <em>are</em> considering adopting one of our babies, please take some time to read about <Link to="/about">who we are and what we do</Link> first!
      </p>
    </div>
  );
}

export default Home;
