import React, { useState, useEffect } from 'react';
import '../styles/OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order history from local storage
    const fetchedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(fetchedOrders);
  }, []);

  const handleRemoveOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="order-history-list">
          {orders.map((order) => (
            <li key={order.id} className="order-history-item">
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: {order.total}</p>
              <p>Items: {order.items.join(', ')}</p>
              <img src={order.image} alt={order.items.join(', ')} className="order-image" />
              <button className="remove-btn  btn-danger" onClick={() => handleRemoveOrder(order.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;