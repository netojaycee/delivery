import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import SpecialNav from "./SpecialNav";
import SpecialFooter from "./SpecialFooter";
import { useLoading } from "../../../context/LoadingContext";
import Loader from "../../Loader";

const SpecialLayout = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-row ">
          <div className="p-4 pt-0 h-screen flex-[30%] hidden md:block border-r-4 border-gray-400">
            <SideBar />
          </div>

          <div className="flex flex-col overflow-x-hidden w-full">
            <SpecialNav />

            <main className=" p-4 overflow-y-auto">
              <Outlet />
            </main>

            <SpecialFooter />
          </div>  
        </div>
      )}
    </>
  );
};

export default SpecialLayout;
