import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

const ScrollLink = props => {
  return (
    <Link
      className={props.className}
      activeClass="active"
      to={props.to}
      spy={props.spy || true}
      smooth={props.smooth || true}
      offset={props.offset || -70}
      duration={props.duration || 500}
    >
      {props.children}
    </Link>
  );
};

export default ScrollLink;
