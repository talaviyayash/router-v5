import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useAut } from "./Context/Context";
import { memo, useEffect } from "react";
import NavBar from "./Navbar";

const Private = ({ children }) => {
  const { isLogin } = useAut();
  // let history = useHistory();
  // useEffect(() => {
  //   if (!isLogin) {
  //     history.push("/login");
  //   }
  // }, [isLogin]);
  return <>{isLogin ? children : <Redirect to="/login" />}</>;
};
export default memo(Private);
