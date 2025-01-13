import React from "react";
import "../styles/Footer.css";
import promoImage from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer_bgpath footer_copyright">
      <div className="container py-5 text-white">
        <div className="row">
          
          {/* Contact Section */}
          <div className="col-md-4">
            <img
              src={promoImage}
              alt="Logo"
              className="footer_logo mb-3"
            />
            <p className="footer_contact_color">
              <i className="fa fa-map-marker-alt"></i> 123 E-Shop St, New York, USA
            </p>
            <p className="footer_contact_color">
              <i className="fa fa-phone"></i> +012 345 67890
            </p>
            <p className="footer_contact_color">
              <i className="fa fa-envelope"></i> support@eshop.com
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <h5 className="footer_border pb-2">Customer Service</h5>
            <ul className="footer_menu">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-4">
            <h5 className="footer_border pb-2">Subscribe to Our Newsletter</h5>
            <div className="input-group">
              <input
                type="email"
                className="form-control footer_newsletter"
                placeholder="Enter your email"
              />
              <button className="btn footer_subcribe">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="text-center mt-4">
          <a href="#facebook" className="footer_social_icon">
            <i className="fab fa-facebook-f vertical-middle"></i>
          </a>
          <a href="#twitter" className="footer_social_icon">
            <i className="fab fa-twitter vertical-middle"></i>
          </a>
          <a href="#linkedin" className="footer_social_icon">
            <i className="fab fa-linkedin-in vertical-middle"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-3">
          <p className="footer_text-body">© 2025 E-Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
