import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
     
  const stylecart = {
    color:'black'
  }
 
  return (
    <div>
    <div className="cart-container">
      <h2 style={stylecart}> Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="item-remove"><h1>Your cart is empty.</h1></div>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">{item.price}</p>
                <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Cart;