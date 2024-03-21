// Nav.jsx
import React, { useState } from "react";
import {
  faHeart,
  faPerson,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-tailwind/react";
import DrawerRight from "./Drawer";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export default function Nav() {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  const toggleLoginModal = () => setLoginOpen(!loginOpen);

  const toggleFavoritesDrawer = () => setFavoritesOpen(!favoritesOpen);
  const toggleCartDrawer = () => setCartOpen(!cartOpen);

  return (
    <nav className="w-full py-5 shadow-md bg-white mb-5">
      <div className="flex items-center justify-between w-[90%] mx-auto ">
        <div className="flex items-center mr-2">
          <Link to={"/"}>
            <img src="" alt="logo" className="flex-shrink-0" />
          </Link>
          <div className="ml-2 flex flex-wrap">
            <input
              className="w-full border-b border-gray-900 px-2 text-xs md:text-[18px]"
              placeholder="Enter Address"
            />
          </div>
        </div>
        <div className="md:block hidden w-[40%]">
          <Input variant="" className="" />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHeart}
            className="border p-2 rounded-full bg-gray-900 mr-2 cursor-pointer"
            style={{ color: "white" }}
            onClick={toggleFavoritesDrawer}
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="border p-2 rounded-full bg-gray-900 mr-2 cursor-pointer"
            style={{ color: "white" }}
            onClick={toggleCartDrawer}
          />
          <Modal open={loginOpen} onClose={toggleLoginModal} type="login" />
        </div>
      </div>
      <div className="md:hidden mt-4 w-[90%] mx-auto">
        <Input variant="" className="" />
      </div>
      <DrawerRight
        open={favoritesOpen}
        onClose={toggleFavoritesDrawer}
        type="favorites"
      />
      <DrawerRight open={cartOpen} onClose={toggleCartDrawer} type="cart" />
    </nav>
  );
}
