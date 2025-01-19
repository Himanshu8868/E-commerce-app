import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/OrderForm.css';

const OrderForm = () => {
  const location = useLocation();
  const { product, quantity } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    postalCode: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSuccessMessage('Order placed successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/order-history');
    }, 3000); // Show message for 3 seconds
  };

  // If no product is selected, display a message
  if (!product) {
    return <div>No product selected</div>;
  }

  // Calculate the total price of the order
  const totalPrice = (parseFloat(product.price.replace('$', '')) * quantity).toFixed(2);

  return (
    <div className="order-form-container">
      <h2>Order Form</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <p>Total Price: ${totalPrice}</p>
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;