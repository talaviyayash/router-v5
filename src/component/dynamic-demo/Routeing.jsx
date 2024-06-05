import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextWrap } from "./Context/Context";
import Loader from "./Loader";
const NavBar = lazy(() => import("./Navbar"));
const Home = lazy(() => import("./Home"));
const Form = lazy(() => import("./Form"));
const Auth = lazy(() => import("./AuthLayout"));
const Private = lazy(() => import("./Private"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const Product = lazy(() => import("./Product"));
export const Routeing = () => {
  const routerInArray = [
    {
      Element: NavBar,
      children: [
        {
          path: "/",
          exact: true,
          Element: Home,
        },
        {
          Element: Auth,
          children: [
            {
              path: "/login",
              exact: true,
              Element: Form,
              props: {
                header: "Login",
              },
              children: [
                {
                  path: "/login",
                  Element: Form,
                },
              ],
            },
            {
              path: "/register",
              exact: true,
              Element: Form,
              props: {
                header: "Register",
              },
            },
          ],
        },

        {
          Element: Private,
          children: [
            {
              path: "/user",
              exact: true,
              Element: Form,
              props: {
                header: "User",
              },
            },
            {
              path: "/dashboard",
              exact: true,
              Element: Form,
              props: {
                header: "Dashboard",
              },
            },
            {
              path: "/userInfo",
              exact: true,
              Element: Form,
              props: {
                header: "UserInfo",
              },
            },
            {
              path: "/product",
              Element: Product,
              props: {
                header: "UserInfo",
              },
              children: [
                {
                  path: "/product/:id",
                  exact: true,
                  Element: ProductDetail,
                  props: {
                    header: "UserInfo",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <ContextWrap>
        <Router>
          <RenderRoute routerInArray={routerInArray} />
        </Router>
      </ContextWrap>
    </>
  );
};
function RenderRoute({ routerInArray }) {
  const routingJsx = routerInArray.map(
    ({ Element, children, props, path, ...attribute }, index) => {
      if (children && !path) {
        path = findAllChildrenRoute(children);
      }
      return (
        <Route {...attribute} path={path} key={index}>
          <Suspense fallback={<Loader />}>
            <Element {...props}>
              {children && <RenderRoute routerInArray={children} />}
            </Element>
          </Suspense>
        </Route>
      );
    }
  );
  return <>{routingJsx}</>;
}

function findAllChildrenRoute(arrayOfChildren) {
  const routingPathArray = arrayOfChildren.map(({ children, path }) => {
    if (path) {
      return path;
    } else if (children) {
      return findAllChildrenRoute(children);
    }
  });
  // const path = flatArray(routingPathArray);
  const path = routingPathArray.flat();
  return path;
}
// const flatArray = (array1, howMany = 0) => {
//   if (howMany === 1) {
//     return array1;
//   }
//   return array1.reduce((item, val) => {
//     return Array.isArray(val)
//       ? [...item, ...flatArray(val, howMany - 1)]
//       : [...item, val];
//   }, []);
// };
