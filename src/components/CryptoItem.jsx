import React, { useState } from 'react';

const CryptoItem = ({ coin, price, addToCart }) => {
  const [qty, setQty] = useState('');

  const handleAdd = () => {
    const parsedQty = parseFloat(qty);
    if (!isNaN(parsedQty) && parsedQty > 0) {
      addToCart(coin, parsedQty, price);
      setQty(''); // reset quantity after adding to cart
    }
  };

  return (
    <div className="crypto-item">
      <div className="crypto-item-header">{coin} @${price}</div>
      <input
        type="number"
        step="0.01"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="crypto-item-input"
      />
      <button onClick={handleAdd} className="crypto-item-button">
        ADD
      </button>
    </div>
  );
};

export default CryptoItem;
