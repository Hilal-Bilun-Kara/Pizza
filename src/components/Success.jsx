import logo from '../assets/logo.svg';
import './Success.css';
export default function Success() {
    return (
        <div className="overlay-1">
            <img className='success-image' src={logo} />
            <h1>Tebrikler!</h1>
      <p>Siparişiniz alındı!</p>
        
     </div>
 
     
    )
    }
    