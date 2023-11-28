import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <>{children}</>;
};
