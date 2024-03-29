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
          <span className="p-4 pt-0 h-screen flex-[30%] hidden md:block border-r-4 border-gray-400">
            <SideBar />
          </span>

          <span className="flex flex-col overflow-x-hidden w-full">
            <SpecialNav />

            <span className=" p-4 overflow-y-auto">
              <Outlet />
            </span>

            <SpecialFooter />
          </span>  
        </div>
      )} 
    </>
  );
};

export default SpecialLayout;
