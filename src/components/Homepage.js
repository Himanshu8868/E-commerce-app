import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import promoImage from '../assets/images/logo.jpg';

const categories = [
  { name: 'Gadgets', image: 'https://th.bing.com/th?id=OIP.Y-nPHJk5yGzEqgpoQFpbKwHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
  { name: 'Clothing', image: 'https://th.bing.com/th?id=OIP.uLjs00VograBKzw_CQBOyQHaEm&w=317&h=196&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
  { name: 'Furniture', image: 'https://th.bing.com/th?id=OIP.ov0P-tFNP0ee7e7QjhnRTQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
  { name: 'Outdoor', image: 'https://img.freepik.com/free-photo/beautiful-vertical-symmetric-shot-wooden-bridge-leading-beach-taken-golden-hour_181624-3842.jpg?semt=ais_hybrid' },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="promo-banner">
        <img src={promoImage} alt="Promo Banner" className="promo-banner-img" />
        <div className="promo-text">
          <h1>Amazing Products Just for You!</h1>
          <Link to="/products" className="shop-now-btn">Explore Now</Link>
        </div>
      </section>

      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.name} className="category-image" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;