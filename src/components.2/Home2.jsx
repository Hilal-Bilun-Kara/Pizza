
import home from '../assets/home-banner.png'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        
        <div className="home-image">
      <img
        className="fullscreen-image"
        src={home}
      />
      <div className="overlay">
      <img src={logo} />
        <h1>KOD ACIKTIRIR PİZZA,</h1>
        <button><Link to="/order">ACIKTIM</Link></button>
      </div>
    </div>
  );
};
