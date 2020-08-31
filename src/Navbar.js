import React, {Component} from 'react';
import ScrollLink from './ScrollLink.js';
import logo from './logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ScrollLink className="navbar-logo-container" to="main">
          <img src={logo} alt="" className="logo" />
          <div className="navbar-content">Ambush Protected</div>
        </ScrollLink>
        <ScrollLink className="navbar-content" to="contact">
          Contact Us
        </ScrollLink>
      </div>
    );
  }
}

export default Navbar;
