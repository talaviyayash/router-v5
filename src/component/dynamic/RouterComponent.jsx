import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WithNavbar } from "./WithNavbar";
import NestedRouter from "./NestedRouter";
const RouterComponent = () => {
  const routerInArray = [
    {
      path: "/home",
      ComponentRoute: <NestedRouter />,
    },
    {
      path: "/",
      ComponentRoute: <WithNavbar />,
      // exact: true,
    },
  ];

  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        {routerInArray.map(({ ComponentRoute, ...attribute }, index) => (
          <Route {...attribute} key={index}>
            {ComponentRoute}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default RouterComponent;
