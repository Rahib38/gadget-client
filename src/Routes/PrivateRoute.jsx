import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
