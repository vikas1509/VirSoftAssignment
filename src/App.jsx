import React, { useState } from 'react';
import CryptoItem from './components/CryptoItem';
import Cart from "./components/Cart"
import "./App.css"
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (coin, qty, price) => {
    const newCart = [...cart];
    const existingItem = newCart.find(item => item.coin === coin);
    if (existingItem) {
      existingItem.qty += qty;
      existingItem.amount += qty * price;
    } else {
      newCart.push({ coin, qty, amount: qty * price });
    }
    setCart(newCart);
  };

  return (
    <div className="app">
      <div className="crypto-container">
        <CryptoItem coin="BTC" price={30000} addToCart={addToCart} />
        <CryptoItem coin="DOGE" price={0.75} addToCart={addToCart} />
        <CryptoItem coin="RIPPLE" price={1.5} addToCart={addToCart} />
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default App;