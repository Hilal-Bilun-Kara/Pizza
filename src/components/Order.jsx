import { useEffect, useState } from 'react';
import './Order.css';
import logo from '../assets/logo.svg';
import axios from 'axios';

const Order = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [hamurKalinliği, setHamurKalinliği] = useState('');
  const [malzemeler, setMalzemeler] = useState([]);
  const [notlar, setNotlar] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(!size || !hamurKalinliği || name.length > 3 || malzemeler.length < 4 || malzemeler.length > 10);
  }, [size, hamurKalinliği, name, malzemeler]);

  const playLoud = {
    name: name,
    size: size,
    hamur: hamurKalinliği,
    malzemeler: malzemeler,
    not: notlar,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    axios.post('https://reqres.in/api/pizza', playLoud)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleHamurChange = (e) => {
    setHamurKalinliği(e.target.value);
  };

  const handleMalzemelerChange = (e) => {
    const malzeme = e.target.value;
    if (malzemeler.includes(malzeme)) {
      setMalzemeler(malzemeler.filter((item) => item !== malzeme));
    } else {
      setMalzemeler([...malzemeler, malzeme]);
    }
  };

  const handleNotlarChange = (e) => {
    setNotlar(e.target.value);
  };

  return (
    <div className='order-container'>
      <div className='header'>
        <header>
          <img className='logoImage' src={logo} alt='Logo' />
          <p>Anasayfa- <strong>Sipariş Oluştur</strong></p>
        </header>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className='isim'
          type='text'
          placeholder='Minimum 3 karakter olacak şekilde isminizi giriniz..'
          minLength='3'
          value={name}
          onChange={handleNameChange}
        />

        <h4 className='pizzaName'>Position Absolute Acı Pizza</h4>
        <p className='pizzaDetail'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
<div className='boyut-hamur'>
        <BoyutCard size={size} handleSizeChange={handleSizeChange} />

        <HamurCard hamurKalinliği={hamurKalinliği} handleHamurChange={handleHamurChange} />
        </div>
        <MalzemeCard malzemeler={malzemeler} handleMalzemelerChange={handleMalzemelerChange} />

        <NoteCard notlar={notlar} handleNotlarChange={handleNotlarChange} />
        <SiparisToplami malzemeler={malzemeler} />

        <button type='submit' disabled={isValid}>
          SİPARİŞ VER
        </button>
      </form>
    </div>
  );
};

const BoyutCard = ({ size, handleSizeChange }) => {
  return (
    <div className='boyut-card'>
      <h4>Boyut Seç</h4>
      <label>
        <input
          type='radio'
          value='Küçük'
          checked={size === 'Küçük'}
          onChange={handleSizeChange}
        />
        Küçük
      </label>
      <label>
        <input
          type='radio'
          value='Orta'
          checked={size === 'Orta'}
          onChange={handleSizeChange}
        />
        Orta
      </label>
      <label>
        <input
          type='radio'
          value='Büyük'
          checked={size === 'Büyük'}
          onChange={handleSizeChange}
        />
        Büyük
      </label>
      {size && (
        <div className='secilen-boyut'>
          <p>Seçilen Boyut: {size}</p>
        </div>
      )}
    </div>
  );
};

const HamurCard = ({ hamurKalinliği, handleHamurChange }) => {
  return (
    <div className='hamur-card'>
      <h4>Hamur Seç</h4>
      <select value={hamurKalinliği} onChange={handleHamurChange}>
        <option value=''>Seçiniz</option>
        <option value='İnce'>İnce</option>
        <option value='Standart'>Standart</option>
        <option value='Kalın'>Kalın</option>
      </select>
      {hamurKalinliği && (
        <div className='secilen-hamur'>
          <p>Seçilen Hamur: {hamurKalinliği}</p>
        </div>
      )}
    </div>
  );
};

const MalzemeCard = ({ malzemeler, handleMalzemelerChange }) => {
  const ingredients = [
    'Pepperoni',
    'Tavuk Izgara',
    'Mısır',
    'Sarımsak',
    'Ananas',
    'Sosis',
    'Soğan',
    'Sucuk',
    'Biber',
    'Kabak',
    'Kanada Jambonu',
    'Domates',
    'Jalepeno',
    'Mantar',
  ];

  const grup1 = ingredients.slice(0, 5);
  const grup2 = ingredients.slice(5, 10);
  const grup3 = ingredients.slice(10);

  return (
    <div className='boyut-card'>
      <h4>Ek Malzemeler</h4>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <form>
        <div className='topping-container'>
          {grup1.map((topping, index) => (
            <div key={index} className='topping-item'>
              <input
                type='checkbox'
                value={topping}
                checked={malzemeler.includes(topping)}
                onChange={handleMalzemelerChange}
              />
              <label htmlFor={topping}>{topping}</label>
            </div>
          ))}
          {grup2.map((topping, index) => (
            <div key={index} className='topping-item'>
              <input
                type='checkbox'
                value={topping}
                checked={malzemeler.includes(topping)}
                onChange={handleMalzemelerChange}
              />
              <label htmlFor={topping}>{topping}</label>
            </div>
          ))}
          {grup3.map((topping, index) => (
            <div key={index} className='topping-item'>
              <input
                type='checkbox'
                value={topping}
                checked={malzemeler.includes(topping)}
                onChange={handleMalzemelerChange}
              />
              <label htmlFor={topping}>{topping}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

const NoteCard = ({ notlar, handleNotlarChange }) => {
  return (
    <div className='siparis-notu'>
      <h4>Sipariş Notu</h4>
      <textarea
        rows='2'
        cols='50'
        value={notlar}
        placeholder='Siparişine eklemek istediğin bir not var mı?'
        onChange={handleNotlarChange}
      />
    </div>
  );
};

const SiparisToplami = ({ malzemeler }) => {
  const malzemePrice = 5;
  const totalMalzemePrice = malzemeler.length * malzemePrice;
  const totalPrice = totalMalzemePrice + 85.5;

  return (
    <div className='siparis-toplami'>
      <h4>Sipariş Toplamı</h4>
      <p>
        Seçimler:<span>{totalMalzemePrice}₺</span>
      </p>
      <p className='toplam'>
        Toplam:<span>{totalPrice}₺</span>
      </p>
    </div>
  );
};

export default Order;