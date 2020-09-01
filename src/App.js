import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Navbar from './Navbar.js';
import Platforms from './Platforms.js';
import Scrollink from './ScrollLink.js';
import AgileSlingshot from './AgileSlingshot.js';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="hero-text-background"></div>
      <div className="landing-page-container" id="main">
        <div className="homepage-slogan">
          <div className="hero-text-background-fade"></div>
          <div className="slogan-line">Go fast.</div>
          <div className="slogan-line">Break things.</div>
          <div className="slogan-line">Raise money.</div>
          <Scrollink className="contact-cta" to="contact">
            Let's Go
          </Scrollink>
        </div>
        <Platforms />
        <AgileSlingshot />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
