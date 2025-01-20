import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  //navbar
import Footer from './components/Footer';
import HomePage from './components/Homepage'; 
import ProductList from './components/ProductList';   //list of products
import Cart from './components/Cart';         //cart page
import OrderForm from './components/OrderForm';   //item order form
import { CartProvider } from './context/CartContext';   
import './App.css'; 
import Blank from './components/Blank';  //working on a page
import OrderHistory from './components/OrderHistory';  
import Signup from './components/Signup';  //user signup
import Login from './components/Login';  //user login
import Dashboard from './components/Dashboard'; // Protected component
import ProtectedRoute from './components/ProtectedRoute';   //when user login success redirect
import AdminLogin from './components/AdminLogin';

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
          <Route path="/login" element={<Login/>} />
          <Route                         //user when login ,user redirect deshboard ,without login not access deshbard page //
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
          <Route path="/signup" element={<Signup/>} />      {/*  user for signup    */}
          <Route path="/admin-login" element={<AdminLogin/>} />
          <Route path="/Blank" element={<Blank />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;