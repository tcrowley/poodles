import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import christmasBlingImg from '../images/carousel/christmas_bling.jpg';
import dawsonWithPuppyImg from '../images/carousel/dawsonwithpuppy.jpg';
import goingForRideImg from '../images/carousel/going_for_a_ride.jpg';
import harleeTackledImg from '../images/carousel/harleetackled.jpg';
import lilyBedImg from '../images/carousel/lilybed.jpg';
import nappingImg from '../images/carousel/napping.jpg';
import onDeckImg from '../images/carousel/on_deck.jpg';
import pontoonImg from '../images/carousel/pontoon_ride.jpg';
import puppySwarmImg from '../images/carousel/puppyswarm.jpg';
import snowDogImg from '../images/carousel/snowdog.jpg';
import swimmingBallImg from '../images/carousel/swimming_ball.jpg';
import waitingPrettyImg from '../images/carousel/waiting_pretty.jpg';
import walkImg from '../images/carousel/walk.jpg';
import picturesService from '../services/pictures.service';
import puppiesService from '../services/puppies.service';

function Home() {
  const carouselList = [
    { src: christmasBlingImg, alt: 'christmas bling', current: true }, 
    { src: puppySwarmImg, alt: 'puppy swarm' }, 
    { src: dawsonWithPuppyImg, alt: 'puppy laying on toddler' }, 
    { src: harleeTackledImg, alt: 'puppy with momma' }, 
    { src: onDeckImg, alt: 'poodles on deck' },
    { src: nappingImg, alt: 'taking a nap' },
    { src: pontoonImg, alt: 'pontoon ride' },
    { src: swimmingBallImg, alt: 'diving in the lake for the ball' },
    { src: waitingPrettyImg, alt: 'everyone waiting patiently' },
    { src: walkImg, alt: 'going for a walk with Harlee' },
    { src: goingForRideImg, alt: 'car ride' },
    { src: snowDogImg, alt: 'snow dog' },
    { src: lilyBedImg, alt: 'poodle in bed' }
  ];

  const [count, setCount] = React.useState('');
  const [haveAvailablePuppies, setHaveAvailablePuppies] = React.useState(false);
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
    puppiesService.getAvailablePuppies().then(res => setHaveAvailablePuppies(!!res.puppies.length));
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

      <h1 className="app-h1">Mid-Michigan Standard Poodles</h1>
      <p className="app-lead-paragraph">Loving, smart, beautiful, and calm. We have your new best friend!</p>

      { haveAvailablePuppies && 
        <p>
          <strong>We have puppies! <Link to="/puppies">See who's available for adoption.</Link></strong>
        </p>
      }

      <p>
        New pictures posted for every puppy every day they are with us. We have <strong>{ count }</strong> pictures and counting! 
      </p>

      <p>
        If you <em>are</em> considering adopting one of our babies, please take some time to read about <Link to="/about">who we are and what we do</Link> first!
      </p>

      <p>
        Looking for news and updates? Want to join in the birthday celebrations? Get pupdates from the pups in their new homes? Follow us on <a href="https://www.facebook.com/125192348492/" target="_blank" rel="noopener noreferrer">FaceBook</a>.
      </p>
    </div>
  );
}

export default Home;
