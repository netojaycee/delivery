import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();

  const refresh = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const decodedToken = jwtDecode(storedUser);
    const { email, userId, role } = decodedToken;

    if (!storedUser) {
      setAuth({});
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    setAuth((prev) => ({
      ...prev,
      user: {
        email,
        userId,
        role,
      },
    }));

    return storedUser;
  };

  return refresh;
};

export default useRefreshToken;
