import './Home.css'
import home from '../assets/home-banner.png'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import kore from '../assets/icons/1.svg';
import pizza from '../assets/icons/2.svg';
import burger from '../assets/icons/3.svg';
import kızartmalar from '../assets/icons/4.svg';
import fastfood from '../assets/icons/5.svg';
import gazlı from '../assets/icons/6.svg';
import kart1 from '../assets/cta/kart-1.png';
import kart2 from '../assets/cta/kart-2.png';
import kart3 from '../assets/cta/kart-3.png';
import { Card, CardGroup, CardImg } from 'reactstrap';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  margin-top: 35px;
  margin-bottom: 30px;
`;

const StyledNavItem = styled.div`
  margin-right: 20px;
`;

export default function Home() {
    return(
        
        <div className="home-image">
      <img
        className="fullscreen-image"
        src={home}
      />
      <div className="overlay">
      <img src={logo} />
      <p className='firsat'>fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR PİZZA,DOYURUR</h1>
        <button><Link to="/order">ACIKTIM</Link></button>
      </div>


  <StyledNav pills>

  <StyledNavItem><img alt="Kore" src={kore}/>YENİ! Kore</StyledNavItem>
  <StyledNavItem><img alt="Pizza" src={pizza}/>Pizza</StyledNavItem >
  <StyledNavItem><img alt="Burger" src={burger}/>Burger</StyledNavItem>
  <StyledNavItem><img alt="Burger" src={kızartmalar}/>Kızartmalar</StyledNavItem>
  <StyledNavItem><img alt="Burger" src={fastfood}/>Fast food</StyledNavItem>
  <StyledNavItem><img alt="Burger" src={gazlı}/>Gazlı İçecek</StyledNavItem></StyledNav>


  <div className="home-image">
      <img
        className="fullscreen-image"
        src={home}
      />
      <div className="overlay">
      <img src={logo} />
      <p className='firsat'>fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR PİZZA,DOYURUR</h1>
        <button><Link to="/order">ACIKTIM</Link></button>
      </div>

   

     
    </div>
    
  );
};
