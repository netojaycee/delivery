import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import Loader from "../Loader";
import { useLoading } from "../../context/LoadingContext";
import useRefreshToken from "./useRefreshToken";
import AuthContext from "../../context/AuthContext";

const PersistLogin = () => {
  const { isLoading, setIsLoading } = useLoading();
  const refresh = useRefreshToken();
  const { auth } = useContext(AuthContext);

  //   useEffect(() => {
  //     const storedProfile = JSON.parse(localStorage.getItem("profile"));
  //     if (storedProfile) {
  //       setAuth({ profile: storedProfile });
  //     } else {
  //       setAuth({ profile: null });
  //     }
  //   }, []);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        setIsLoading(true);
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!auth?.profile) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
  }, []);

  //   useEffect(() => {
  //     console.log(`isLoading: ${isLoading}`);
  //     console.log(`aT: ${auth?.token}`);
  //     console.log(`aT: ${auth?.profile?.email}`);
  //     console.log(auth);
  //   }, [isLoading]);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
