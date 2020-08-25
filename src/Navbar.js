import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-name">Ambush Protected</div>
        <div className="navbar-contact">Contact Us</div>
      </div>
    );
  }
}

export default Navbar;
