import React from 'react';
import { Link } from 'react-router-dom';
import memoryOrbImg from '../images/faq/memoryorb.jpg';
import memoryPendantImg from '../images/faq/memorypendant.jpg';
import portrait1Img from '../images/faq/portrait1.jpg';
import portrait2Img from '../images/faq/portrait2.jpg';
import petSittingImg from '../images/faq/harleepetsitting.jpg';
import AboutSubNav from './AboutSubNav';

function Faq() {

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - FAQ'
  });

  return (
    <div className="app-faq">
      <AboutSubNav />

      <h1 className="app-h1">Frequently Asked Questions</h1>

      <details>
        <summary><h2 className="app-h2">About the Breed</h2></summary>
        <h3 className="app-h4">The Standard Poodle</h3>
        <ul>
          <li>Regarded as one of the most intelligent and easily trained breeds of dog.</li>
          <li>Originated in Germany and was standardized in France where it was commonly used for retrieving</li>
          <li>Sporting (waterfowl) dogs - therefore excel in agility, obedience, tracking, and even herding.</li>
          <li>Poodles have a dense, curly, non-shedding, hypo-allergenic** coat that requires regular grooming.</li>
          <li>A pet owner can anticipate grooming a poodle every six to eight weeks.</li>
          <li>Poodles are extremely people-oriented dogs and generally eager to please.</li>
          <li>Standard Poodles in particular tend to be good with children.</li>
          <li>They have a median lifespan of 11.5 to 12 years. Ours often live longer than this.</li>
        </ul>

        <p>
          **Note: You'll probably find references stating there is no such thing. Here's our experience (25+ years). We've <strong>never</strong> had a puppy returned to us due to allergies and we've had many people come to us because they or their children do have allergies. The biggest allergy complaint we have had is if the puppy licks bare skin, the skin gets irritated but simply washing the affected area corrects the problem.
        </p>

        <h3 className="app-h4">Parti and Phantom Colors</h3>
        <p>
          We love them. We think they're fantastic. What gorgeous, unique dogs! No, these colors do not meet AKC's standards for conformation shows. Yes, they are still pure-bred registered dogs. In fact, the breed was originally multi-colored. No they are NOT inferior in any way! We appreciate when those that feel they are keep their opinions to themselves. We think these people are ridiculous.
          </p>
      </details>

      <details>
        <summary><h2 className="app-h2">Breeding & Breeders</h2></summary>
        <h3 className="app-h4">Thinking about adding one of our poodles to your breeding program?</h3>
        <p>
          If you're looking to start a breeding program, please do not contact us about our puppies. We do not allow them to be bred and we do not make exceptions. I am also not interested in mentoring. I "mentor" my daughter and that is enough for me.
        </p>

        <p>
          Why do we feel this way? Puppies sold for breeding are far too often treated like cattle and property, used as a source of income and discarded when they are no longer useful. This <strong> will not</strong> be the life I send one of my precious babies to. I made exceptions to this rule a couple times in the past and regretted it. It will not happen again.
        </p>

        <h3 className="app-h4">You think breeding is easy money? Don't be a back yard breeder</h3>
        <p>
          If you think breeding is easy money and just anyone can do it, please read.
        </p>

        <ul>
          <li><a href="https://aces.illinois.edu/news/dog-breeding-not-fun-and-profit" target="_blank" rel="noopener noreferrer">Dog Breeding Is Not for "Fun and Profit"</a></li>
          <li><a href="https://www.boutonveterinaryhospital.com/blog/107903-know-the-facts-before-breeding-your-dog" target="_blank" rel="noopener noreferrer">Know the Facts BEFORE Breeding Your Dog</a></li>
        </ul>

        <p>
          In additional to all of that, if you're considering breeding Standard Poodles specifically, don't forget that starting at three weeks old, you also have to find the time to groom each and every puppy each and every week.
        </p>

        <h3 className="app-h4">Rescue Poodles</h3>
        <p>
          I had always gotten my dogs as puppies. I had never given a thought to an adult dog that needed a home. Didn't have anything against it, just never thought of it. 
        </p>
        
        <p>
          Since I opened our home to <Link to="/adult/5">Jazz</Link> and <Link to="/adult/6">Checkers</Link> I have a completely different view of rescue. Those girls were wonderful! SO loving and devoted! They loved the car, the boat, the water. They did not want to be 12 inches from me. They would gaze at me with total adoration in their eyes, wagging their tail when I spoke to them. When they came here, they hardly wagged and did not play. 
        </p>

        <p>
          PLEASE give a wonderful dog a chance to be happy. They may have some issues, but be patient, work with them, it's very rewarding! <a href="http://www.petfinder.com/" target="_blank" rel="noopener noreferrer">Check out Pet Finder Rescue!</a>
        </p>
      </details>


      <details>
        <summary><h2 className="app-h2">Feeding</h2></summary>
        <p>
          I used to feed the babies Eukanuba and/or Pro Plan. I no longer believe it to be the nutritious high quality puppy food it used to be. Instead we now feed our puppies Taste of the Wild High Prairie Puppy Formula with Roasted Venison and Bison.
        </p>

        <p>
          Trying to decide what to feed your puppy? Check out the below site for ratings on dog/puppy food.
        </p>
        <ul>
          <li><a href="http://www.dogfoodadvisor.com" target="_blank" rel="noopener noreferrer">www.dogfoodadvisor.com</a></li>
          <li><a href="http://www.dogfoodanalysis.com" target="_blank" rel="noopener noreferrer">www.dogfoodanalysis.com</a></li>
        </ul>
        <p>
          Poodles are grazers. I recommend leaving food and water out at all times if possible as this is not a breed that over eats. We do this at all times so I really cannot tell you exactly how much any of our pets eats or how often.
        </p>

        <p>
          Be sure your pup is getting a high quality puppy food for at least the first year of his/her life. Also, be careful feeding canned dog food and special treats to young puppies as it may be too rich for their little system. Best to introduce new foods gradually to their diet.
        </p>
      </details>


      <details>
        <summary><h2 className="app-h2">Grooming</h2></summary>
        <p>
          The amount of grooming a poodle needs depends a lot on the owner. If you like to keep them trimmed down with a specific cut, then just like your own hair, they'll need a trim every 4-6 weeks. If you like you pet a bit fluffier and want to grow their hair out, or it's cold outside and you don't want to put a coat on them, then you won't need to trim them as often.
        </p>
        
        <p>
          You can expect some monthly ear maintenance, which includes trimming and pulling ear hair as well as using an ear cleaner as a preventative. Of course, like every other dog, you'll also need to trim their nails.
        </p>
        
        <p>
          Many people ask me what grooming supplies I use. The following items are generally available on Amazon. Where possible, I've included a link.<br /> 
        </p>
                
        <h3 className="app-h6">Clippers</h3>
        <p>
          Oster A6 Cool Comfort Heavy Duty Clipper with Detachable Blade #10 (<a href="https://www.amazon.com/dp/B00ADWJSVC" target="_blank" rel="noopener noreferrer">Amazon</a>)
        </p>

        <h3 className="app-h6">Blades</h3>
        <p>
          The quality of the blade matters. We recommend Zerion or Elite CryogenX-AgION Blades. Here is a <a href="https://www.petedge.com/blade-usage-guide" target="_blank" rel="noopener noreferrer">list of blades</a> with detailed information. Blades get hot so you'll need several of each. Start with the #10 blade (face, feet, tail - 1/16 inch) and the #7 blade (body - 1/8 inch).
        </p>

        <h3 className="app-h6">Brushes and Combs</h3>
        <p>
          Chris Christensen Baby G Coral Slicker Brush (<a href="https://www.amazon.com/dp/B07HMG64R2" target="_blank" rel="noopener noreferrer">Amazon</a>)<br /> 
          Chris Christensen 7 1/2" Fine/Coarse Buttercomb (<a href="https://www.amazon.com/dp/B0155XV2K8" target="_blank" rel="noopener noreferrer">Amazon</a>)
        </p>

        <h3 className="app-h6">Shears</h3>
        <p>
          Kenchii Five Star 5.5" Straight Pro Dog Grooming Shear (<a href="https://www.amazon.com/dp/B0025YU1FI" target="_blank" rel="noopener noreferrer">Amazon</a>)
        </p>

        <h3 className="app-h6">Shampoo</h3>
        <p>
          I use human shampoo with a cream rinse (Poodle hair is most like human hair). In August, I use Dawn dish soap as a flea shampoo, seems to be the only time we have a problem.
        </p>

        <h3 className="app-h6">Ear Hair Pullers and Ear Wash</h3>
        <p>
          Sadly, ear hair pullers are a necessary tool. I use a 5 1/2" curved hemostat (<a href="https://www.amazon.com/dp/B002C5O6D8" target="_blank" rel="noopener noreferrer">Amazon</a>) <br />
          If you'd like to buy an ear wash, try Vet Organics EcoEars Dog Ear Cleaner (<a href="https://www.amazon.com/dp/B008QYVL1Y" target="_blank" rel="noopener noreferrer">Amazon</a>) but I recommend checking out our "Home Remedies" section for an amazing ear cleaner you can make at home.
        </p>

        <h3 className="app-h6">Nails</h3>
        <p>
          I usually I use my Dremel, but you can use a nail clipper, I suggest the kind with the guard that doesn't let you cut too far, available at pet stores. Don't forget Styptic Powder!
        </p>

        <p><em>(this list was last updated January 2021)</em></p>
      </details>


      <details>
        <summary><h2 className="app-h2">Training</h2></summary>
        <p>
          <strong>Don't hit a Poodle!!</strong> Don't hit any dog but especially, do not hit a Poodle. They are intelligent dogs
          who love to please. Hitting them <strong>will not</strong> help.
        </p>

        <h3 className="app-h4">House breaking</h3>
        <p>
          We give our pups an excellent start on house training by using only positive reinforcement and playing on their basic instincts. Puppies tend to go potty on the surface they're used to. Therefore, if they're used to going potty on your rug, they'll continue to do so. On the other hand, if they're used to going potty outside, that's where they'll prefer to go. Also, puppies instinctively dislike soiling their "den", where they eat and sleep which is why it's so unusual for a pup to soil it's crate. Don't give them so much space inside unsupervised that they feel comfortable soiling the area.
        </p>

        <p>
          One thing to keep in mind when you get your pup home, however, is that our puppies are house trained with a doggie door. They do not know how to tell you they need out. You have to be very vigilant until they know how to communicate their needs. Many of our new puppies families have had great success with hanging a bell on the door and teaching their pup to ring it when he/she wants out.
        </p>

        <p>
          Check out <a href="https://www.dog-breeds.net/puppy-housebreaking/" target="_blank" rel="noopener noreferrer">this article</a> out for more information on housebreaking your puppy.
        </p>

        <h3 className="app-h4">Crates</h3>
        <p>
          I highly recommend a crate for the safety of the puppy and your personal belongings. When not used as a punishment, puppies love their own place. Cover it with a blanket for that cave like feeling dogs love. There are tons of good sites that address crate training. I'd suggest reading several and do what seems logical and kind. Every pup is different.
        </p>

        <p>
          This is one of of them: <a href="https://www.humanesociety.org/resources/crate-training-101" target="_blank" rel="noopener noreferrer">The Humane Society Crate Training 101</a>
        </p>

        <p>
          All pet stores carry crates so I wouldn't have one shipped. Get 42x28x31 at the least and 48x30x34 for larger males.
        </p>

        <h3 className="app-h4">Barking</h3>
        <p>
          When you're home, it'd be better to work on training your dog/pup appropriately than using a bark collar or other such device. Here are a few quick tips followed by a helpful link.
        </p>

        <ul>
          <li>
            This is maybe the simplest and most difficult. Make sure your dog is getting enough exercise, attention and stimulation!
          </li>
          <li>
            As with all training, be consistent! The fourth time the pup starts barking in an hour don't get lazy, stay on the couch and give up.
          </li>
          <li>
            Positive reinforcement. When he/she starts barking, stand between them and use a command (quiet, hush, no bark) firmly. If/when the pup stops barking, pet and reward them.
          </li>
        </ul>

        <p>
          <a href="http://www.peteducation.com/article.cfm?c=2+2085&aid=153" target="_blank" rel="noopener noreferrer">Excessive Barking: A Common Behavior Problem</a>
        </p>
      </details>


      <details>
        <summary><h2 className="app-h2">Home Remedies</h2></summary>
        <h3 className="app-h4">Ear Cleaner</h3>
        <p>
          Found a website that brags about a fabulous ear cleaner. Tried it and they are right!! Some of the ingredients were a little hard to find but they can be gotten online. Easy to make, cheap and truely more effective than any other ear cleaner I've ever used or heard of! The first ingredient can be gotten pretty much anywhere (Meijer, Walmart, etc). The last two ingredients can be found online at several websites including <a href="http://www.amazon.com" target="_blank" rel="noopener noreferrer">www.amazon.com</a>.
        </p>

        <h4 className="app-h6">Indredients</h4>
        <ul>
          <li>16 oz ISOPROPYL ALCHOL</li>
          <li>4 T Boric Acid Powder</li>
          <li>16 drops Gentian Violet Solution 1 %</li>
        </ul>

        <h4 className="app-h6">Instructions</h4>
        <p>
          Mix together in large bottle (the plastic squeeze dispenser bottles used for things like food decorating or hair dye - can be gotten from Jo-Ann Fabrics or Sally's Beauty Salon) and shake well. Be sure to shake well with each use). If ears are inflamed do not pluck hair or clean, flush with solution twice a day and wait for inflamation to go away (2-4 days). Treat twice a day for the first week. Once a week for the next 1 or 2 weeks and once monthly after that.
        </p>

        <h3 className="app-h4">Skunk Funk Be Gone</h3>
        <p>
          Mix together 1 quart peroxide, two tablespoons baking soda, and two drops dish soap. Use a spray bottle to soak down the smelly spots and rinse. Magic.
        </p>

        <h3 className="app-h4">Flea Medications and Shampoo</h3>
        <p>
          Yes! The original Dawn dish soap is an excellent flea shampoo! You can watch those little buggers perish right before your eyes. It's very safe (used on wildlife after oil spills). Regular baths will go a long way toward preventing fleas.
        </p>

        <p>
          We try to avoid using flea medications and shampoos as it does not seem like a great idea to us to put something on your dogs skin to be absorbed into their blood that you're not supposed to touch yourself. However, sometimes a flea outbreak can get out of hand and it's totally unavoidable. At that point, we recommend Frontline PLUS and do occasionally use it ourselves (safe on pregnant and nursing mothers according to the packaging).
        </p>
      </details>


      <details>
        <summary><h2 className="app-h2">Products & Services</h2></summary>
        <h3 className="app-h4">Pet Sitting</h3>
        <p>
          Harlee, my granddaughter, pet sits!
        </p>

        <div className="app-gallery">
            <img src={ petSittingImg } alt="Safe Treasures personal care dog sitting, Harlee Dunlop (231) 250-6126" />
        </div>

        <h3 className="app-h4">Microchip Implants</h3>
        <p>
          We don't require them, we don't do this to our puppies, and we don't have them for our adults. Why?
          Couple reasons. In part, because most vets do not check for them. If no one checks for them, then they
          do no good. Yes, some do check and theoretically, shelters will check. The decision is yours.
        </p>

        <p>
          The other reason. They <em>may</em> cause cancer. Not proven. Again, the decision
          is yours to make.<br />
          <a href="http://www.itchmo.com/microchip-implants-linked-to-animal-tumors-in-research-animals-2731" target="_blank" rel="noopener noreferrer">Microchip Implants Linked To Animal Tumors In Research Animals</a>
          </p>

        <h3 className="app-h4">Dog Doors</h3>
        <p>
          Living on the lake the west wind is a problem, especially in the winter, so having a dog
          door is like leaving a window open). Gunner's dad (Gunner is a Jazz/Ruben baby who lives in Texas)
          told me about this wonderful motorized dog door that opens and closes similar
          to a garage door. The dog approaches with a magnet on their collar and the door
          goes up and closes a few seconds later. We love it! As an added bonus, no unwanted animals can
          get in either. <br />
          <a href="http://www.solopetdoors.com/" target="_blank" rel="noopener noreferrer">www.solopetdoors.com</a>
          </p>
  
        <p>
          If you don't want a motorized pet door or perhaps are looking for something a bit more simple,
          this is the best quality non-motorized pet door we've found! An excellent door. <br />
          <a href="http://www.freedompetpass.com" target="_blank" rel="noopener noreferrer">www.freedompetpass.com</a>
          </p>

        <h3 className="app-h4">Pet Chime</h3>
        <p>
          We're often asked how to teach a puppy/dog to tell you he/she wants outside. One popular option
          is to hang bells on the door the puppy can ring. Here's another. We love this product. Our poodles
          learn how to use the door bell and love it. It's quite entertaining.<br />
          <a href="https://www.amazon.com/gp/product/B00006JHRH" target="_blank" rel="noopener noreferrer">Lentek Pet Chime</a>
        </p>

        <h3 className="app-h4">Bark Collars</h3>
        <p>
          We don't like them. Who would? When you're home, it'd be better to work on training your dog/pup appropriately (see "Training" section). When you're not home or if it's just not working and you need a solution now because you're neighbors are getting madder by the minute, perhaps its time to use a bark collar but please consider the age of the pup before doing so! We do not recommend use on pups younger than six months old. These are the collars we use: <a href="https://www.petsafe.net/bark-control" target="_blank" rel="noopener noreferrer">PetSafe Bark Control</a>
        </p>

        <h3 className="app-h4">In Loving Memory</h3>
        <p>
          At a pet expo they had a display of these <a href="http://www.memoryglass.com/" target="_blank" rel="noopener noreferrer">wonderful handblown glass balls</a> for your pets ashes (pendants too). What a great way to have your pet close. There are also companies that can turn your pets ashes or hair into a lab grown diamond!
        </p>

        <div className="app-gallery">
            <img src={ memoryPendantImg } alt="memory glass pendant" />
            <img src={ memoryOrbImg } alt="memory glass orb" /> 
        </div>

        <h3 className="app-h4">Pet Portraits</h3>
        <p>
          Check out the work of Cynthia Christman at <a href="http://www.christmanpetportraits.com/" target="_blank" rel="noopener noreferrer">www.christmanpetportraits.com</a>. She does beautiful pet portraits. This is Max! 
        </p>
        
        <div className="app-gallery">
            <img src={ portrait1Img } alt="standard poodle portrait" />
            <img src={ portrait2Img } alt="standard poodle portrait" /> 
        </div>
      </details>
    </div>
  );
}

export default Faq;
