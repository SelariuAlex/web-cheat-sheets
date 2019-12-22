import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact activeClassName="navbar__link--active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="navbar__link--active" to="/html">
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="navbar__link--active" to="/css">
            CSS
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="navbar__link--active" to="/js">
            JS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
