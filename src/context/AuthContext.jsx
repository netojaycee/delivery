import { createContext, useState } from "react";
import axios  from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const logout = () => {
    try {
      axios.post("/log-out");
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      navigate('/');
      setAuth(null);
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
