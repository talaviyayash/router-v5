import React from "react";
import {
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";

export default function AboutPage() {
  //   go(n) -(function) Moves the pointer in the history stack by n entries.
  // goBack() -(function) Moves the pointer in the history stack by -1.
  // goForward() -(function) Moves the pointer in the history stack by +1.
  // length-(number) The number of entries in the history stack.
  // location -(object) The current location object.
  // push(path) -(function) Pushes a new entry onto the history stack.
  // replace(path) -(function) Replace the current entry on the history stack
  // action -(string) The current action (PUSH, REPLACE, or POP)
  // block(prompt) - (function) Prevents navigation
  // console.log("AboutPage", useParams());
  // console.log("AboutPage", useHistory().go(-1));
  // console.log("AboutPage", useHistory().goBack());
  // console.log("AboutPage", useHistory().goForward());
  // console.log("AboutPage", useHistory().length); // max number of pages to display in history 50
  // console.log("AboutPage", useHistory().location);
  // console.log("AboutPage", useHistory().replace("/about"));
  // console.log("AboutPage", useHistory().push("/about"));
  // console.log("AboutPage", useHistory().action("PUSH"));
  // console.log("AboutPage", useHistory().block(prompt));
  // console.log("AboutPage", useHistory().location);

  return <div>AboutPage</div>;
}
