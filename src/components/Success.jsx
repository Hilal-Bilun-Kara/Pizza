import logo from "../assets/logo.svg";
import "./Success.css";
import SiparisToplami from "./Order.jsx";

export default function Success() {
  return (
    <div className="overlay-1">
      <img className="success-image" src={logo} />
      <p className="firsat2">fırsatın yolda</p>
      <h2>SİPARİŞİNİZ ALINDI!</h2>
      <h4>Position Absolute Acı Pizza</h4>
      <div>
        <br />
        Boyut:
        <br />
        Hamur:
        <br />
        Ek Malzemeler:
      </div>
      <SiparisToplami
        malzemeler={malzemeler}
        totalMalzemePrice={totalMalzemePrice}
        productCount={productCount}
      />{" "}
      ??
    </div>
  );
}
