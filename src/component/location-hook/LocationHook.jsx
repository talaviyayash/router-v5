import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export default function LocationHook() {
  //     hash — (string) The URL hash (#) fragment.
  // pathname — (string) The path of the URL.
  // search — (string) The URL query string (?).

  // use For path name and state and search parameters
  //   console.log(useLocation().hash);
  //   console.log(useLocation().pathname);
  //   console.log(useLocation().search);
  console.log(useLocation().state);
  return <div>LocationHook</div>;
}
