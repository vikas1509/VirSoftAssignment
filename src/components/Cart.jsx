import React from 'react';

const Cart = ({ cart }) => {
  const totalAmount = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="cart">
      <h2>MY CART</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>COIN</th>
            <th>QTY.</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.coin}</td>
              <td>{item.qty.toFixed(2)}</td>
              <td>{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">TOTAL: ${totalAmount.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
