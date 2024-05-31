import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <NavLink
        to="/"
        className="navbar__title navbar__item"
        activeClassName="red"
        exact
      >
        Cutco
      </NavLink>
      <NavLink exact to="/home" activeClassName="red" className="navbar__item">
        Home
      </NavLink>
      <NavLink activeClassName="red" exact to="/about" className="navbar__item">
        About us
      </NavLink>
      <NavLink activeClassName="red" exact to="/help" className="navbar__item">
        Help
      </NavLink>
    </header>
  );
};
export default NavBar;
