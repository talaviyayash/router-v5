import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "../history-hook/HistoryHook";
import LocationHook from "../location-hook/LocationHook";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import About from "./container/About";
import Home from "./container/Home";
import Contact from "./container/Contact";
import Show from "./container/Show";
export default function Root() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/home">
            <About />
          </Route>
          <Route path="/about/:id">
            <About />
          </Route>
          <Route path="/show">
            <Show />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const NavBar = () => (
  <header className="navbar">
    <Link
      className="navbar__title navbar__item"
      to={{
        pathname: "/",
      }}
      state={{ data: "yash" }}
      style={{ color: "white" }}
    >
      Cutco
    </Link>
    <Link to="/about/10" className="navbar__item" style={{ color: "white" }}>
      About Us
    </Link>
    <Link to="/home" className="navbar__item" style={{ color: "white" }}>
      Home
    </Link>
    <Link to="/contact" className="navbar__item" style={{ color: "white" }}>
      Conatct Us
    </Link>
    <Link to="/show" className="navbar__item" style={{ color: "white" }}>
      Show
    </Link>
  </header>
);
