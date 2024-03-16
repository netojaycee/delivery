import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { useLoading } from "../context/LoadingContext";
import Loader from "./Loader";

const Layout = () => {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="overflow-x-hidden bg-gray-200">
          <Nav />

          <Outlet />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Layout;
