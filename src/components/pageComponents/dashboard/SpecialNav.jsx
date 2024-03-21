import React from "react";
import SideBarDrawer from "./SideBarDrawer";
import NavListMenu from "./NavListMenu";

export default function SpecialNav() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between items-center p-5 bg-white shadow-md w-[90%] mx-auto">
          <div className="flex flex-row gap-2 items-center">
            <SideBarDrawer />
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <div>
            <NavListMenu />
          </div>
        </div>
        <hr className="border-2 w-[90%] mx-auto" />
      </div>
    </>
  );
}
