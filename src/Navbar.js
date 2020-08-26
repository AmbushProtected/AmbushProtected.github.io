import React, {Component} from 'react';
import './Navbar.css';
import ScrollLink from './ScrollLink.js';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ScrollLink
          className="navbar-content"
          location="main"
          name="Ambush Protected"
        ></ScrollLink>
        <ScrollLink
          className="navbar-content"
          location="contact"
          name="Contact Us"
        ></ScrollLink>
      </div>
    );
  }
}

export default Navbar;
