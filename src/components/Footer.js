import React from "react";
import "../styles/Footer.css";
import promoImage from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer-container footer-background">
      <div className="container py-5 text-white">
        <div className="row">
          
          {/* Contact Section */}
          <div className="col-md-4">
            <img
              src={promoImage}
              alt="Logo"
              className="footer-logo mb-3"
            />
            <p className="footer-contact">
              <i className="fa fa-map-marker-alt"></i> 123, New Street, Selaqui
            </p>
            <p className="footer-contact">
              <i className="fa fa-phone"></i> 2511251121
            </p>
            <p className="footer-contact">
              <i className="fa fa-envelope"></i> help@him.com
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <h5 className="footer-title pb-2">Customer Service</h5>
            <ul className="footer-navigation">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-4">
            <h5 className="footer-title pb-2">Subscribe to Our Newsletter</h5>
            <div className="input-group">
              <input
                type="email"
                className="d-flex mt-3 form-control footer-newsletter"
                placeholder="Enter your email"
              />
              <button className="btn footer-subscribe mb-3">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="text-center mt-4">
          <a href="#facebook" className="footer-social-icon">
            <i className="fab fa-facebook-f vertical-middle"></i>
          </a>
          <a href="#twitter" className="footer-social-icon">
            <i className="fab fa-twitter vertical-middle"></i>
          </a>
          <a href="#linkedin" className="footer-social-icon">
            <i className="fab fa-linkedin-in vertical-middle"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-3">
          <p className="footer-text">© 2025 HDE-shop All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
