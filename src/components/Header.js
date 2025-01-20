import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import items from './Items'; // Import items
import '../styles/Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredSuggestions = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSuggestions.length === 0) {
      alert('No results found');
    } else {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setSuggestions([]);
    navigate(`/products?search=${suggestion.name}`);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };
  
const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/login')
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" onClick={(e) => handleNavClick(e, '/')}>
            <i>E-HDC-SHOP</i>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blank" onClick={(e) => handleNavClick(e, '/Blank')}>Action</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/Blank" onClick={(e) => handleNavClick(e, '/Blank')}>Another action</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link" href="/Blank" onClick={(e) => handleNavClick(e, '/Blank')}>Even more items</a>
              </li> */}
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Order
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/action" onClick={(e) => handleNavClick(e, '/action')}>Action</a></li>
                  <li><a className="dropdown-item" href="/another-action" onClick={(e) => handleNavClick(e, '/another-action')}>Another action</a></li>
                  <li className="dropdown-divider"></li>

                  <Link to="/order-history" className="btn btn-order-history mx-2">
                    <i className="fas fa-history"></i> Orders
                  </Link>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input className="form-control me-2 my-3" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
              <button className="btn btn-outline-success" type="submit">Search</button>
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
            <Link to="/cart" className="btn btn-cart mx-2">
              <i className="fas fa-shopping-cart"></i> Cart <span className="badge badge-light">{cartItems.length}</span>
            </Link>
               {!localStorage.getItem('token') ? <form>
            <Link className="btn btn-login- mx-2 mb-3" to="/login" role='button'>LogIn</Link>
               </form> :  <button onClick={handleLogout} className='btn btn-logout-primary  mb-3 mx-2'>Logout</button> }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;