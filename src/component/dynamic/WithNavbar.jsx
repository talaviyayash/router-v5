import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./Navbar";

export const WithNavbar = () => {
  const routerInArray = [
    {
      attribute: {
        exact: true,
        path: "/",
      },
    },
    {
      attribute: {
        exact: true,
        path: "/about",
      },
      ComponentRoute: <div>About</div>,
    },
    {
      attribute: {
        path: "/help",
        exact: true,
      },
      ComponentRoute: <div>Help</div>,
    },
  ];
  return (
    <>
      <NavBar />
      <Switch>
        {routerInArray.map(({ attribute, ComponentRoute }, index) => (
          <Route {...attribute} key={index}>
            {ComponentRoute}
          </Route>
        ))}
      </Switch>
    </>
  );
};
