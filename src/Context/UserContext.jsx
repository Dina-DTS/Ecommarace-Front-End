import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [isLogin, setisLogin] = useState(!!localStorage.getItem("token"));
  const [token, settoken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token == null) {
        localStorage.removeItem("token")
      setisLogin(false);
    } else {
        localStorage.setItem("token",token)
      setisLogin(true);
    }
  }, [token]);

  // isLogin==>Navbar
  // settoken==>Login ,Register
  // settoken==>navbar ,logout

  return (
    <UserContext.Provider value={{ isLogin, setisLogin, token, settoken }}>
      {children}
    </UserContext.Provider>
  );
}
