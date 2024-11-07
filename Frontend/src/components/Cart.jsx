import React from 'react';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    { title: 'Course 1', price: '$50' },
    { title: 'Course 2', price: '$75' },
  ];

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
