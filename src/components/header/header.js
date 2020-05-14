import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar--list">
        <li className="item">
          <Link to="/signin/">Sign In</Link>
        </li>
        <li className="item">
          <Link to="/signup/">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;