import React from "react";
import {
  faHeart,
  faPerson,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-tailwind/react";

export default function Nav() {
  return (
    <nav className="w-full py-5 shadow-md bg-white">
      <div className="flex items-center justify-between w-[90%] mx-auto ">
        {/* Logo and first search box always visible */}
        <div className="flex items-center mr-2">
          <img src="" alt="logo" className="flex-shrink-0" />
          <div className="ml-2 flex flex-wrap">
            <input className="w-full border-b border-gray-900 px-2 text-xs md:text-[18px]" placeholder="Enter Address" />
          </div>
        </div>
        <div className="md:block hidden w-[40%]">
          <Input variant="" className="" />
        </div>

        {/* Icons always visible */}
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHeart}
            className="border p-2 rounded-full bg-gray-900 mr-2"
            style={{ color: "white" }}
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="border p-2 rounded-full bg-gray-900 mr-2"
            style={{ color: "white" }}
          />
          <FontAwesomeIcon
            icon={faPerson}
            className="border p-2 rounded-full bg-gray-900 mr-2"
            style={{ color: "white" }}
          />
        </div>
      </div>

      {/* Second search box hidden on small devices */}
      <div className="md:hidden mt-4 w-[90%] mx-auto">
        <Input variant="" className="" />
      </div>
    </nav>
  );
}
