import React from 'react';
import AboutSubNav from './AboutSubNav';
import treats1Img from 'images/treats/treats1.jpg';
import treats2Img from 'images/treats/treats2.jpg';
import treats3Img from 'images/treats/treats3.jpg';
import treats4Img from 'images/treats/treats4.jpg';
import puppyTreat1Img from 'images/treats/puppytreat1.jpg';
import puppyTreat2Img from 'images/treats/puppytreat2.jpg';
import puppiesTreatsImg from 'images/treats/puppiestreats.jpg';
import izzietreat1Img from 'images/treats/izzietreat.jpg';
import izzietreat2Img from 'images/treats/izzietreat2.jpg';

function Treats() {

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Treat Recipes';
  }, []);

  return (
    <div className="app-treats">
      <AboutSubNav />

      <h1 className="app-h1">Treats my poodles love!</h1>
      <p className="app-lead-paragraph">Easy to make, most of the ingredents you have in your kitchen!</p>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Turkey Treats</h2>
          <h3 className="app-h6">Ingredients:</h3>
          <ul>
            <li>1 lb. Ground Turkey</li>
            <li>3 C flour</li>
            <li>1 C water</li>
            <li>2 eggs</li>
            <li>1 C quick Oats</li>
          </ul>

          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on floured surface, cut into squares, and bake 45-55 minutes at 350&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={treats3Img} alt="poodles waiting excitedly for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">K-9 Peanut Butter Cookies</h2>
          <h3 className="app-h6">Ingredients:</h3>
          <ul>
            <li>1 1/2 cups whole wheat flour</li>
            <li>1 T baking powder</li>
            <li>1 cup milk</li>
            <li>1/2 cup flour</li>
            <li>1 cup Peanut butter</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on floured surface, cut into tasty shapes, and bake 20-25 minutes at 350&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={puppyTreat2Img} alt="poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Cheddar Biscuits</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>2 cups flour</li>
            <li>1 T baking powder</li>
            <li>1/2 tsp. salt</li>
            <li>1 1/2 cups grated cheddar</li>
            <li>1 1/2 cups heavy cream</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on floured surface, cut into tasty shapes, and bake 17 minutes at 425&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={treats1Img} alt="more poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Tuna Treats</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>1 small can of tuna</li>
            <li>1 cup pumpkin or apple sauce</li>
            <li>1 cup flour</li>
            <li>1 tsp. ginger (optional)</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on greased and floured cookie sheet, score with pizza cutter, and bake at 350&#8457; until dry and crunchy.
          </p>
        </div>
        <div className="media-container">
          <img src={puppyTreat1Img} alt="poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Tempting Tomato Bites</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>2 1/2 cups whole wheat flour</li>
            <li>1/2 cup dry powered milk</li>
            <li>1 tsp. garlic powder</li>
            <li>2 tsp. brown sugar</li>
            <li>1 tsp granulated beef bouillion</li>
            <li>1 egg</li>
            <li>6 tsp. (1/2 can) tomato paste</li>
            <li>1/2 cup water</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on floured surface, cut into tasty shapes, and bake 20-25 minutes at 350&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={treats2Img} alt="poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Liver Snacks</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>12-16 oz. raw liver</li>
            <li>1 1/2 lbs. white flour</li>
            <li>8 oz. Quick Oats</li>
            <li>3 bouillon cubes (beef or chicken)</li>
            <li>1 cup water</li>
            <li>2 eggs</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Chop liver in blender or food processor. Mix with hands, roll out on floured surface, cut into tasty shapes, and bake 1 hour at 350&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={puppiesTreatsImg} alt="poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Bacon Bites</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>3 cups whole wheat flour</li>
            <li>1/2 cup milk</li>
            <li>1 egg</li>
            <li>1/4 cup bacon grease</li>
            <li>1 tsp garlic powder</li>
            <li>5-6 slices bacon</li>
            <li>1/2 cup cold water</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on floured surface, cut into tasty shapes, and bake 35-40 minutes at 350&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={izzietreat1Img} alt="poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Cheesy Treats</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>2 1/3 cups flour</li>
            <li>1/4 cup olive oil or bacon grease</li>
            <li>1/4 cup applesauce</li>
            <li>1/2 C parmesian cheese</li>
            <li>1 egg</li>
            <li>1 tsp garlic</li>
            <li>1/4 c powdered milk</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, press on to cookie sheet, score with pizza cutter, sprinkle with cheese or garlic, and bake 15 minutes at 350&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={treats4Img} alt="poodles waiting patiently for treats" />
        </div>
      </article>

      <article className="app-content-with-media">
        <div className="app-card">
          <h2 className="app-h2">Cheese Cookies</h2>
          <h3 className="app-h5">Ingredients:</h3>
          <ul>
            <li>2 cups flour</li>
            <li>1 1/2 Shredded Cheddar cheese</li>
            <li>1/4 t garlic powder</li>
            <li>1/2 c veg oil</li>
            <li>5 T water</li>
            <li>2 eggs</li>
          </ul>
          <h3 className="app-h6">Instructions:</h3>
          <p>
            Mix with hands, roll out on floured surface, cut into tasty shapes, and bake 15 minutes at 400&#8457;.
          </p>
        </div>
        <div className="media-container">
          <img src={izzietreat2Img} alt="poodles waiting patiently for treats" />
        </div>
      </article>
    </div>
  );
}

export default Treats;
