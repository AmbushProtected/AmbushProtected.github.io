import React, {Component} from 'react';
import ScrollLink from './ScrollLink.js';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ScrollLink
          className="navbar-content"
          to="main"
          name="Ambush Protected"
        ></ScrollLink>
        <ScrollLink
          className="navbar-content"
          to="contact"
          name="Contact Us"
        ></ScrollLink>
      </div>
    );
  }
}

export default Navbar;
