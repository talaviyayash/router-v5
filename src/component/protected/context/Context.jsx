import { createContext, useContext, useState } from "react";

export const authContext = createContext(null);

export const useAuth = () => useContext(authContext);
