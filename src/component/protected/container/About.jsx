import React from "react";
import {
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom";

export default function About() {
  // let id = useParams();
  // console.log(id);
  // const history = useHistory();
  // console.log(history);
  // const location = useLocation();
  // console.log(location);
  const match = useRouteMatch();
  console.log(match);
  return (
    <>
      <div>About page is here</div>
    </>
  );
}
