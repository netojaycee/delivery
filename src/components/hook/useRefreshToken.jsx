import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();

  const refresh = () => {
    const token = localStorage.getItem("token");
    const profile = JSON.parse(localStorage.getItem("profile"));

    if (!token || !profile) {
      // Redirect to action page if token or profile is missing
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    // Set authentication state with retrieved profile and token
    setAuth((prev) => ({
      ...prev,
      profile: profile,
      token: token,
    }));

    return profile;
  };

  return refresh;
};

export default useRefreshToken;
