import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import NavBar from "./Navbar";
import { About } from "./About";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
const Routing = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route exact path="/home">
            <div>Home</div>
          </Route>
          <Route exact path="/about/:id">
            <About />
          </Route>
          <Route path="/help">
            <div>help</div>
          </Route>
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </>
  );
};
export default Routing;
