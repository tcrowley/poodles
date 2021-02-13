import ballGif from '../images/pupBall.gif';
import ballWebP from '../images/pupBall.webp';

function Wait({ waitText = 'Loading...', visible = false }) {
  return (
    <div className="app-wait" style={{ display: visible ? 'block' : 'none' }}>
      <picture>
        <source srcSet={ ballWebP } />
        <img src={ ballGif } alt="" /><br />
      </picture>
      { waitText }
    </div>
  );
}

export default Wait;
