import React from 'react';
import AboutSubNav from "./AboutSubNav";
import loungingImg from '../images/lounging.jpg';
import beemerPontoonImg from '../images/beemerpontoon.jpg';
import puppyDoorImg from '../images/puppydoor.jpg';
import puppyWavingImg from '../images/puppywaving.jpg';
import puppyKissesImg from '../images/puppykisses.jpg';
import sandbarImg from '../images/sandbar.jpg';
import sandbarBallImg from '../images/sandbarball.jpg';

function About() {

  React.useEffect(() => {
    document.title = "Pampered Poodles 4 U - About Us"
  });

  return (
    <>
      <AboutSubNav />
      
      <h1 className="app-h1">About Us</h1>
      <p className="about-us-intro">
        We are a family of standard poodle enthusiasts in mid-Michigan. We proudly brag about our <strong>eight</strong> generations of wonderful poodles, many of which have lived to 15 years old. Follow us on <a href="https://www.facebook.com/Pampered-Poodles-4u-10-Standard-Poodles-and-their-babies-125192348492/" target="_blank" rel="noopener noreferrer">FaceBook</a>!
      </p>

      <article className="app-content-with-media">
        <div>
          <h2 className="app-h2">Our Poodles are <em>pets</em> not breeding <em>stock</em></h2>
          <p>
            Every poodle is a beloved pet, here with us for life! We do not unload them when they are no longer "useful"! Because they are with us at all times we know what health and personality traits they will pass on to their babies.
          </p>

          <p>
            We do not breed our girls with every heat. They are PETS FIRST and get time to rest between litters. Our expecting and nursing moms get a special diet, producing happy fat healthy babies. They are retired as my vet suggests.
          </p>
        </div>
        <div className="media-container">
          <img src={ loungingImg } alt="lounging poodles" /> 
        </div>
      </article>

      <article className="app-content-with-media wrap-reverse">
        <div className="media-container">
          <img src={ beemerPontoonImg } alt="pontoon ride" /> 
        </div>
        <div>
          <h2 className="app-h2">Don't ask to come visit my <em>facility</em></h2>
          <p>
            We are not a kennel or a FACILITY! We are a home with pets that have puppies. Our adult poodles are with us at all times. NO ONE IS CAGED (unless someone is in season) or in kennels outside (we don't have any). In the event we do leave them, they stay home and guard the house. The pontoon NEVER leaves the dock without them and we swim a few times a week.
          </p>
        </div>
      </article>

      <article className="app-content-with-media">
        <div>
          <h2 className="app-h2">Our puppies are <em>fabulous</em></h2>
          <p>
            We adore each and every puppy! They are treated as if we were going to keep them - because we'd like to! Every puppy has their own webpage with daily photos and while the website may change over time, we never remove puppy pages. Our website is a scrapbook of the puppies we love.
          </p>

          <p>
            Our puppies are born in the nursery, a room exclusively used for mom and new babies. At three weeks the pups are introduced to a dog door and outside. They love the extra room and new things to explore. Because it is instinct to keep the "nest" clean they go outside to potty and are 95% potty trained when they go to their new homes at 8 weeks. 
          </p>

          <p>
            They are exposed to kids, other dogs, the vacuum, clippers, etc. They get weekly haircuts (either face, feet, or butts) and two vet visits -- shots are always current. If we have them longer than 8 weeks, we take them for short car rides to the Pet Park and expose them to as many new situations as possible. 
          </p>
              
          <p>
            They are fed a combination of Taste of the Wild High Praire Puppy Formula with Roasted Venison and Bison and ground meat. 
          </p>
              
          <p>
            To help them adjustment to their new home, we send each baby home with something that smells like us, making their first night easier for everyone. We do everything possible to produce confident, secure, happy, healthy pets.
          </p>
        </div>
        <div className="media-container">
          <img src={ puppyWavingImg } alt="puppy with momma dog" /> 
        </div>
      </article>

      <article className="app-content-with-media wrap-reverse">
        <div className="media-container">
          <img src={ puppyDoorImg } alt="momma dog peeking out the puppy door" /> 
        </div>
        <div>
          <h2 className="app-h2"> Visitors are welcome... at the proper time</h2>
          <p>
            Ten adult poodles and puppies keep me very busy, Although I am retired, I'm sure you can uderstand my time is very valuable. I can not spend time with visitors when we do not have available babies, as what typically happens is, people leave so impressed with my poodles and so excited about a new poodle puppy, they don't wait for one of mine. I get a nice letter and photo of their new puppy thanking me for my time. I hope I don't sound rude, but our home is not a "petting zoo".  
          </p>
              
          <p>
            We reserve Sunday mornings for puppy visitation, by appointment, for families that have deposits on babies. Although you are welcome to come here to pick up your puppy when they're ready to go home, I often meet families part way. I bring related adults so you can meet everyone (sisters, moms, dads, aunts, grandmas).  I DO consider the agreed time an appointment and expect you arrive on time or very close to it. Again, an issue of time management. I have had people show up 4-7 hours late.
          </p>
        </div>
      </article>

      <article className="app-content-with-media">
        <div>
          <h2 className="app-h2">We carefully select homes for our poodle babies</h2>
          <p>
              I carefully select PET homes. I have certain things I look for when we talk. In my 20 plus years of finding homes for my babies, these "things" have proven to be the formula for a happy poodle life. I do all I can to ensure the families that get my babies will keep them fur-ever.  Re-homing MUST be confusing and upsetting for any dog and I try to avoid it if at all possible. I rarely get my puppies back (4 in 20 years). <em>Please contact us only if you can provide a happy poodle home for LIFE!</em>
          </p>
        </div>
        <div className="media-container">
          <img src={ puppyKissesImg } alt="puppy kisses for Harlee" /> 
        </div>
      </article>

      <article className="app-content-with-media wrap-reverse">
        <div className="media-container">
          <img src={ sandbarBallImg } alt="poodles playing on the sandbar in the lake with a ball" /> 
        </div>
        <div>
          <h2 className="app-h2">We guarantee our puppies health and for their sake, we also have limitations</h2>
          <p>
            Our puppies are sold with spay/neuter agreements. <em>No exceptions</em>. I have seen too many dogs DISCARDED by breeders and passed around like hot potatoes! That is not what I want for my babies. I OWE it to my pets to find their babies loving homes no matter how long that takes. Since this is my 8th generation of poodles I know we are free of illness (I have 24 generations of pedigree). I do not guarantee color (no one does or can). But I guarantee they are healthy! Our puppies LOVE people and have calm, wonderful temperaments. They adapt easily to their new home, children, and other pets.
          </p>
        </div>
      </article>

      <article className="app-content-with-media">
        <div>
          <h2 className="app-h2">How we feel about champions and dog shows</h2>
          <p>
            Breeders that show their dogs consider ALL other dogs sub-standard (no pun intended), especially parti colors. Our poodles definitely are NOT! They are still 100% poodle! I do NOT show my dogs as I get enough politics as it is! Many show dogs spend their lives in a crate. Again, not what I want for my babies. My focus is a wonderful pet that adds years of smiles and love to your life. Visit our <a href="https://www.facebook.com/Pampered-Poodles-4u-10-Standard-Poodles-and-their-babies-125192348492/" target="_blank" rel="noopener noreferrer">FaceBook</a> page to chat with the many people that have welcomed our babies into their homes. They say it much better than I can!
          </p>
        </div>
        <div className="media-container">
          <img src={ sandbarImg } alt="poodles swimming on the sandbar in the lake" /> 
        </div>
      </article>

      <br />
      <figure className="app-quote">
        <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>
              He is your friend, your partner, your defender, your dog. <br />
              You are his life, his love, his leader, the center of his universe. <br />
              He will be yours, faithful and true to the last beat of his heart. <br />
              You owe it to him to be WORTHY of such devotion.
            </p>
        </blockquote>
        <figcaption>—Anonymous</figcaption>
      </figure>
    </>
  );
}

export default About;
