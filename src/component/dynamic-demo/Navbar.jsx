import React, { memo } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const NavBar = ({ children }) => {
  return (
    <>
      <header className="navbar">
        <NavLink
          to="/"
          className="navbar__title navbar__item"
          activeClassName="red"
          exact
        >
          Cutco
        </NavLink>
        <NavLink exact to="/" activeClassName="red" className="navbar__item">
          Home
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/login"
          className="navbar__item"
        >
          Login
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/register"
          className="navbar__item"
        >
          Register
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/userInfo"
          className="navbar__item"
        >
          User Information
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/user"
          className="navbar__item"
        >
          User
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/dashboard"
          className="navbar__item"
        >
          Dashboard
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/product"
          className="navbar__item"
        >
          Products
        </NavLink>
        <NavLink
          activeClassName="red"
          exact
          to="/product/1"
          className="navbar__item"
        >
          Product with Id
        </NavLink>
      </header>
      {children}
    </>
  );
};
export default memo(NavBar);
