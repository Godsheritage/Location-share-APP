import { createContext, useState } from "react";
import { contextTypes } from "../../types";

const AuthContext = createContext<contextTypes | any>({isLoggedIn:true});

export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
