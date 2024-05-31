import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import AboutPage from "../history-hook/HistoryHook";
import LocationHook from "../location-hook/LocationHook";
import {
  HashRouter,
  MemoryRouter,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import About from "./container/About";
import Home from "./container/Home";
import Contact from "./container/Contact";
import Show from "./container/Show";
import { authContext, useAuth } from "./context/Context";
import {} from "react-router-dom/cjs/react-router-dom.min";
export default function ProtectedRoute() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <authContext.Provider value={{ login, setLogin }}>
        <Router
          basename="/api"
          //  forceRefresh={true}
          // keyLength={1}
        >
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about/:id">
              <About />
            </Route>
            <Route exact path="/show">
              <Show />
            </Route>
            <Route exact sensitive strict path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        <button
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? "logout" : "Login"}
        </button>
      </authContext.Provider>
    </>
  );
}

const NavBar = () => (
  <header className="navbar">
    {/* <Link
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
    </Link> */}
    {ARRAY_OF_ROUTES.map((val, key) => {
      return (
        <ForLink key={key} attributes={val.attributes} value={val.value} />
      );
    })}
  </header>
);

const ARRAY_OF_ROUTES = [
  {
    value: "Cutco",
    attributes: {
      to: {
        pathname: "/",
        // hash: "#the-hash",
        // search: "?sort=10",
        state: { name: "yash" },
      },
      className: "navbar__title navbar__item",
      state: { data: "yash" },
      style: { color: "white" },
    },
    activeOnlyWhenExact: true,
  },
  {
    value: "About Us",
    attributes: {
      to: {
        pathname: "/about/10",
      },
      className: "navbar__item",
      style: { color: "white" },
    },
    activeOnlyWhenExact: true,
  },
  {
    value: "Home",
    attributes: {
      to: {
        pathname: "/home",
      },
      className: "navbar__item",
      style: { color: "white" },
    },
    activeOnlyWhenExact: true,
  },
  {
    value: "Conatct Us",
    attributes: {
      to: {
        pathname: "/contact",
      },
      className: "navbar__item",
      style: { color: "white" },
    },
    activeOnlyWhenExact: true,
  },
  {
    value: "Show",
    attributes: {
      to: {
        pathname: "/show",
      },
      className: "navbar__item",
      style: { color: "white" },
    },
    activeOnlyWhenExact: true,
  },
  {
    value: "Yash",
    attributes: {
      to: {
        pathname: "/",
      },
      className: "navbar__item",
      style: { color: "white" },
      replace: true,
      innerRef: (node) => {
        // console.log(node);
      },
    },
    activeOnlyWhenExact: true,
  },
];

function ForLink({ attributes, activeOnlyWhenExact, value }) {
  let match = useRouteMatch({
    path: attributes.to.pathname || attributes.to,
    isExact: activeOnlyWhenExact,
  });
  return (
    <>
      <NavLink
        exact
        {...attributes}
        // style={{ color: match?.isExact ? "red" : "white" }}
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        {value}
      </NavLink>
    </>
  );
}
