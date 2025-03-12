import React, { useEffect } from 'react';
import './App.css';
import CountdownTimer from "./CountdownTimer";
import logoImage from './white_logo.png';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

// Initialize Google Analytics
const initializeAnalytics = () => {
  ReactGA.initialize('G-CQJH6F41TR'); // Replace with your actual Measurement ID
};

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleVoucherTypeClick = (type) => {
    console.log(`Redirecting to ${type} vouchers`);
    // Implement redirection logic here
  };

  return (
    <Router>
      <RouteTracker />
      <div className="landing-page">
        <div className="banner-section">
          <div className="overlay">
            <div className="logo-and-name">
              <img src={logoImage} alt="Logo" className="logo" />
              <h1 className="company-name">VoucherZen</h1>
            </div>
            <div className="countdown">
              <p className="launch-message">
                Exciting News! We are thrilled to announce that VoucherZen is
                launching soon. Get ready for a seamless experience in trading
                your favorite vouchers.
              </p>
              <CountdownTimer />
            </div>
          </div>
          <img
            src="https://i.pinimg.com/originals/0b/ba/cc/0bbacc2f5ca9afef682e081b4c14331e.jpg"
            alt="Banner"
            className="banner-image"
          />
        </div>
        <section className="preview">
          <h2>Our Services</h2>
          <p>
            At VoucherZen, we offer a seamless experience for trading various
            types of vouchers, including:
          </p>
          <div className="voucher-list">
            <div className="voucher-item movie" onClick={() => handleVoucherTypeClick("Movie")}>
              Movie
            </div>
            <div className="voucher-item food" onClick={() => handleVoucherTypeClick("Food")}>
              Food
            </div>
            <div className="voucher-item shopping" onClick={() => handleVoucherTypeClick("Shopping")}>
              Shopping
            </div>
            <div className="voucher-item travel" onClick={() => handleVoucherTypeClick("Travel")}>
              Travel
            </div>
            <div className="voucher-item electronics" onClick={() => handleVoucherTypeClick("Electronics")}>
              Electronics & Other
            </div>
          </div>
          <p>
            To access our services, you need to create an account. Sign up today
            to get started!
          </p>
        </section>
        <div className="buttons-section">
          {/* <button className="login-button">Login</button> */}
          {/* <button className="signup-button">Sign Up</button> */}
        </div>
        <footer className="footer">
          <p>© 2025 VoucherZen is Proudly Powered By Shams Innovations.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
