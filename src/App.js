import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Navbar from './Navbar.js';
import apiIcon from './api.png';
import mobile from './mobile.png';
import responsive from './responsive.png';
import {Link} from 'react-scroll';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="landing-page-container" id="main">
        <div className="homepage-slogan">
          <div className="slogan-line">Go fast.</div>
          <div className="slogan-line">Break things.</div>
          <div className="slogan-line">Raise money.</div>
          <Link
            className="contact-cta"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
        <div className="platforms-container">
          <div className="section-header">Services we offer</div>
          <div className="platform-box">
            <div className="platform-title">Mobile</div>
            <div className="platform-image">
              <img src={mobile} alt="" />
            </div>
            <div className="platform-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </div>
          </div>
          <div className="platform-box">
            <div className="platform-title">Web Responsive</div>
            <div className="platform-image">
              <img src={responsive} alt="" />
            </div>
            <div className="platform-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </div>
          </div>
          <div className="platform-box">
            <div className="platform-title">API</div>
            <div className="platform-image">
              <img src={apiIcon} alt="" />
            </div>
            <div className="platform-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
