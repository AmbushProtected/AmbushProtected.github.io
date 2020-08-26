import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

class ScrollLink extends Component {
  render() {
    return (
      <Link
        className={this.props.styling}
        activeClass="active"
        to={this.props.location}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {this.props.name}
      </Link>
    );
  }
}

export default ScrollLink;
