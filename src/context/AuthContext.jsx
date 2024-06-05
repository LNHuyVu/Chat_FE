/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const Aucontext = createContext();

export const useAuthContext = () => {
  return useContext(Aucontext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null,
  );
  return (
    <Aucontext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </Aucontext.Provider>
  );
};
