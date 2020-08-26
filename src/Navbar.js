import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link
          className="navbar-content"
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Ambush Protected
        </Link>
        <Link
          className="navbar-content"
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
    );
  }
}

export default Navbar;
