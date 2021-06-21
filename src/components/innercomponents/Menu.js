import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  let scroller = props.scroller;
  let mover = `translateY(-${scroller * 0.8}px)`;
  return (
    <nav>
      <Link
        className="text-link"
        to="/mywork"
        style={{ transform: `${mover}` }}
      >
        <li>Portfolio</li>
      </Link>
      <Link
        className="text-link"
        to="/getintouch"
        style={{ transform: `${mover}` }}
      >
        <li>Get in touch</li>
      </Link>
    </nav>
  );
};

export default Menu;
