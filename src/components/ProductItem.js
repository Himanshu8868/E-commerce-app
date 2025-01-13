import React from 'react';
import '../styles/ProductList.css';

const ProductItem = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <p className="product-rating">Rating: {product.rating} ★</p>
      <button className="btn btn-primary" onClick={() => onViewDetails(product)}>View Details</button>
      <button className="btn btn-success" onClick={() => onAddToCart(product)}>
        <i className="fas fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;