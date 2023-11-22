import { authServiceFactory } from "../services/authService";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      console.log(error.message);
    }
  };
  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...registerData } = data;
    try {
      if (confirmPassword !== registerData.password) {
        throw new Error("Passwords don't match!");
      }
      // registerData is passed to register because it doesn't contain the value of confirmPassword
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogout = async () => {
    // todo authorized request
    // await authService.logout();
    setAuth({});
  };
  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    // double negation !! translates the truthy values to true and tha falsy values to false similar to Boolean(value)
    isAuthenticated: !!auth.accessToken,
  };
  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
