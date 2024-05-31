import { NavLink } from "react-router-dom/cjs/react-router-dom";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { LogIn, SignUp, UserInfo } from "./Form";

const NestedRouter = () => {
  let { path, url } = useRouteMatch();
  console.log("NestedRouter path:", path, "url:", url);
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`${url}/userinfo`} activeClassName="red">
            User Info
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/login`} activeClassName="red">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/signup`} activeClassName="red">
            Sign Up
          </NavLink>
        </li>
      </ul>
      <br />
      <br />
      <Switch>
        <Route exact path={path}>
          <h3>Please select a choice</h3>
        </Route>
        <Route path={`${path}/userinfo`}>
          <UserInfo />
        </Route>
        <Route path={`${path}/login`}>
          <LogIn />
        </Route>
        <Route path={`${path}/signup`}>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};
export default NestedRouter;
