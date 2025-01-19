import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import { CartProvider } from './context/CartContext';
import './App.css';
import Blank from './components/Blank';
import OrderHistory from './components/OrderHistory';
// import Checkout from './components/Checkout';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
          
          <Route path="/order-history" element={<OrderHistory />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/Blank" element={<Blank />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;