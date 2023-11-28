import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

//! better way because it is possible to nest multiple routes inside the export const EditRouteGuard

export const RouteGuard = () => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to={"/login"}></Navigate>;
  }
  // the Outlet component is the nested component inside the route that loads the RouteGuard component (see App.jsx /catalog/:gameId)
  return <Outlet />;
};

//! impossible to nest routes inside the component CreateRouteGuard in this way of usage
// export const CreateRouteGuard = ({ children }) => {
//   const { isAuthenticated } = useAuthContext();
//   // * only if authenticated load the children of the RouteGuard component (see App.jsx create-game)
//   if (!isAuthenticated) {
//     return <Navigate to={"/login"}></Navigate>;
//   }
//   return <>{children}</>;
// };
