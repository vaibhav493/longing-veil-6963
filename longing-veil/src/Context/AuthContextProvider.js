import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authState, setauthState] = useState({
    isAuth: false,
    token: null,
  });

  const Logout = () => {
    setauthState({ ...authState, isAuth: false, token: null });
  };

  const Login = (tok) => {
    
    setauthState({ ...authState, isAuth: true, token: tok });
  };

  // console.log('iam outside context', authState);
  return (
    <AuthContext.Provider value={{ authState, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
