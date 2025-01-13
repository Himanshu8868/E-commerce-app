import React, { useState } from 'react';
import '../styles/BuyModal.css';

const BuyModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuy = () => {
    const totalPrice = (parseFloat(product.price.replace('$', '')) * quantity).toFixed(2);
    alert(`You have purchased ${quantity} ${product.name}(s) for $${totalPrice}`);
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