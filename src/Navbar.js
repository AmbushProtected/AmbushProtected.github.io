import React, {Component} from 'react';
import ScrollLink from './ScrollLink.js';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ScrollLink className="navbar-content" to="main">
          Ambush Protected
        </ScrollLink>
        <ScrollLink className="navbar-content" to="contact">
          Contact Us
        </ScrollLink>
      </div>
    );
  }
}

export default Navbar;
