import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/action">Action</a></li>
                  <li><a className="dropdown-item" href="/another-action">Another action</a></li>
                  <li className="dropdown-divider"></li>

                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link to="/cart" className="btn btn-cart mx-2">
              <i className="fas fa-shopping-cart"></i> Cart <span className="badge badge-light">{cartItems.length}</span>
            </Link>
            <button className="btn btn-login mx-2">LogIn</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;