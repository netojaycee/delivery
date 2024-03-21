import { useContext, useEffect, useState } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Loader from "../Loader";
import { useLoading } from "../../context/LoadingContext";


const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(true);
  const {isLoading, setIsLoading} = useLoading(true);

  useEffect(() => {
    console.log(allowedRoles)
    // console.log(auth.profile.role)

    const delayRedirect = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(delayRedirect);
  }, []);

  if (isLoading) {
    // Return null during the loading period
    return <Loader />
  } else if (allowedRoles.includes(auth?.profile?.role)) {
    // If the user has one of the allowed roles, render the child routes
    return <Outlet />;
  } else if (auth?.profile) {
    // If the user is logged in but doesn't have the required role, navigate to unauthorized page
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else {
    // If the user is not logged in, navigate to action page
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
