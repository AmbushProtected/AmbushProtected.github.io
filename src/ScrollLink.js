import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

const ScrollLink = props => {
  return (
    <Link
      className={props.className}
      activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {props.name}
    </Link>
  );
};

export default ScrollLink;
