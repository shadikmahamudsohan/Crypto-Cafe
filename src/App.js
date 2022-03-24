import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';



function App() {

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, []);

  return (
    <div>
      <Header cart={cart} />
      <div>

      </div>
      <div className='card-container'>
        {
          guns.map(gun => (
            <Card key={gun.id} data={gun} handleAddToCart={handleAddToCart} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
