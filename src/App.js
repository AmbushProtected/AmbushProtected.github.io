import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Navbar from './Navbar.js';
import Platforms from './Platforms.js';
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
        <Platforms />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
