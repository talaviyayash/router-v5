import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import NavBar from "./Navbar";
const RouteProtected = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        {" "}
        {login ? "logout" : "login"}
      </button>
      <Router>
        <NavBar />
        {login ? (
          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
            <Route exact path="/home">
              <div>Home</div>
            </Route>
            <Route exact path="/about">
              <div>about</div>
            </Route>
            <Route path="/help">
              <div>help</div>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <div>Login first</div>
            </Route>
            <Route exact path="/home">
              <div>Login first</div>
            </Route>
            <Route exact path="/about">
              <div>Login first</div>
            </Route>
            <Route path="/help">
              <div>Login first</div>
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
};
export default RouteProtected;
