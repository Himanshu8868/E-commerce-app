import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BuyModal.css';

const BuyModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuy = () => {
    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      total: `$${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}`,
      items: [product.name],
      quantity: quantity,
      image: product.image,
    };

    // Save order to local storage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    navigate('/order', { state: { product, quantity } });
    onClose();
  };

  return (
    <div className="buy-modal">
      <div className="buy-modal-content">
        <h3>Buy {product.name}</h3>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>Price: {product.price}</p>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
        </label>
        <p>Total Price: ${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}</p>
        <button className="btn btn-primary" onClick={handleBuy}>Confirm Purchase</button>
        <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyModal;