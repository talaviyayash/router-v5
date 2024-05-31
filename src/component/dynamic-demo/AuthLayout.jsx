import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAut } from "./Context/Context";
import photo from "./photo.avif";
import { memo, useEffect } from "react";
import NavBar from "./Navbar";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

const Auth = ({ children }) => {
  const { isLogin } = useAut();
  let history = useHistory();
  // if (isLogin) {
  //   history.push("/dashboard");
  // }
  return (
    <>
      {!isLogin ? (
        <>
          <img src={photo} />
          {children}
        </>
      ) : (
        <Redirect to="/dashboard" />
      )}
      {/* <img src={photo} />
      {children} */}
    </>
  );
};

export default memo(Auth);
