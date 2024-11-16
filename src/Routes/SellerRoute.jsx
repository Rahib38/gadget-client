import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseUserData from "../Hooks/UseUserData";
import Loading from "../pages/Loading";

function SellerRoute({children}) {
    const location = useLocation();
    const userData = UseUserData()
    const { user, loading } = UseAuth();
    if (loading || !userData.role) {
      return <Loading></Loading>;
    }
    if (user && userData.role ==="seller") {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  
}

export default SellerRoute


