import React from 'react';
import AboutSubNav from "./AboutSubNav";
import aerialImg from '../images/reunions/petparkaerial.jpg';
import play1Img from '../images/reunions/petparkplay1.jpg';
import play2Img from '../images/reunions/petparkplay2.jpg';
import play3Img from '../images/reunions/petparkplay3.jpg';

function Reunions() {

  React.useEffect(() => {
    document.title = "Pampered Poodles 4 U - Reunions"
  });

  return (
    <>
      <AboutSubNav />

      <h1 className="app-h1">Pet Park Reunions</h1>
      <p className="app-lead-paragraph">Where our poodles go to play!</p>

      <p>
        We host poodle reunions at our private Pet Park twice a year, on the Saturday before Memorial Day and the Saturday after Labor Day.
      </p>
      <p>
        Check out our <a href="https://www.facebook.com/125192348492/photos/?tab=album" target="_blank" rel="noopener noreferrer">FaceBook Albums</a> for pictures of past events.
      </p>

      <address>
        <a href="https://goo.gl/maps/q62tE1jo6Fe8gyJB8" target="_blank" rel="noopener noreferrer">13746 60th Ave, <br />Remus, MI 49340</a>
      </address>

      <div className="app-gallery cover">
        <img src={aerialImg} alt="aerial view of the pet park" />
        <img src={play1Img} alt="poodles playing at the pet park" />
        <img src={play2Img} alt="poodles playing at the pet park" />
        <img src={play3Img} alt="poodles playing at the pet park" />
      </div>
    </>
  );
}

export default Reunions;
