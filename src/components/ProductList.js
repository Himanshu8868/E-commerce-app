import React, { useEffect, useState, useContext } from 'react';
import ProductItem from './ProductItem';
import BuyModal from './BuyModal';
import { CartContext } from '../context/CartContext';
import items from './Items';
import '../styles/ProductList.css';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setShowBuyModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); // Show message for 2 seconds
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseDetails();
        handleCloseBuyModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-grid">
        {items.map((product) => (
          <ProductItem key={product.id} product={product} onViewDetails={handleViewDetails} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details-modal">
          <div className="product-details-content">
            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-details-image" />
            <p>{selectedProduct.description}</p>
            <p className="product-price">{selectedProduct.price}</p>
            <p className="product-rating">Rating: {selectedProduct.rating} ★</p>
            <button className="btn btn-warning mx-2" onClick={() => handleBuyClick(selectedProduct)}>Buy</button>
            <button className="btn btn-success mx-2" onClick={() => handleAddToCart(selectedProduct)}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={handleCloseDetails}>
              <i className="fa-solid fa-xmark"></i> Close
            </button>
          </div>
        </div>
      )}

      {showBuyModal && selectedProduct && (
        <BuyModal product={selectedProduct} onClose={handleCloseBuyModal} />
      )}

      {showSuccessMessage && (
        <div className="success-message">
          Product added to cart successfully!
        </div>
      )}
    </div>
  );
};

export default ProductList;