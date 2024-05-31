import React, { useEffect } from "react";
import { useAuth } from "../context/Context";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Show() {
  const { login } = useAuth();
  // const history = useHistory();

  useEffect(() => {
    if (!login) {
      // console.log(history);s
      // history.push("/");
    }
  }, [login]);
  return (
    <>
      {/* {!login && <Redirect to="/" />} */}
      {!login && (
        <Redirect
          from="/about/:id"
          push={true}
          to={{
            pathname: "/home/:id",
            // search: "?utm=your+face",
            // state: { referrer: "currentLocation" },
          }}
        />
      )}
      <div>Show page is here</div>
    </>
  );
}
