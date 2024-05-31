import React, { createContext, useContext, useState } from "react";

const Auth = createContext();
const ContextWrap = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Auth.Provider value={{ isLogin, setIsLogin }}>{children}</Auth.Provider>
    </>
  );
};
const useAut = () => {
  return useContext(Auth);
};

export { ContextWrap, useAut };
