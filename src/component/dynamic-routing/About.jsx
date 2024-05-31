import React from "react";
import {
  NavLink,
  useLocation,
  useParams,
  Switch,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom";
import { Route } from "react-router-dom";
const data = [
  {
    id: 1,
    name: "yash",
    friend: [2, 3, 4],
  },
  {
    id: 2,
    name: "dhruv",
    friend: [1, 3],
  },
  {
    id: 3,
    name: "milan",
    friend: [1, 2, 4],
  },
  {
    id: 4,
    name: "vimal",
    friend: [1, 3],
  },
];
export const About = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const filteredData = data.reduce((total, value) => {
    if (Number(id) === value.id) {
      return { ...value };
    }
    return total;
  }, {});
  return (
    <>
      {/* <BrowserRouter> */}
      <br />
      <br />
      Friend of the :-{filteredData?.name}
      {data
        ?.filter((value) => filteredData?.friend?.includes(value.id))
        ?.map((value, index) => {
          return (
            <div key={index}>
              <NavLink
                activeClassName="red"
                exact
                to={`${pathname}/${value.id}`}
              >
                {value.name}
              </NavLink>
            </div>
          );
        })}
      {/* <Switch> */}
      <Route path={`/${pathname}/:id`} exact component={About} />
      {/* </Switch> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default About;
