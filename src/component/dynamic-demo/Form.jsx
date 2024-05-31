import React, { memo, useEffect } from "react";
import { useAut } from "./Context/Context";
const Form = ({ header }) => {
  const { isLogin, setIsLogin } = useAut();

  return (
    <>
      <div className="form">
        <h3>{header}</h3>
        name : - <input type="text" />
        <br />
        <br />
        email : - <input type="email" />
        <br />
        <br />
        password : - <input type="password" />
        <br />
        <br />
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default memo(Form);
