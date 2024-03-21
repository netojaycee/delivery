import React, { useEffect, useState } from "react";
import {
  faHeart,
  faLocationDot,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-tailwind/react";
import DrawerRight from "./Drawer";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import logo from '../assets/images/logo.png';

export default function Nav() {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleLoginModal = () => setLoginOpen(!loginOpen);
  const toggleFavoritesDrawer = () => setFavoritesOpen(!favoritesOpen);
  const toggleCartDrawer = () => setCartOpen(!cartOpen);

  // Function to fetch user's location from browser
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Fetch address using reverse geocoding
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            const formattedAddress = data.display_name;
            setAddress(formattedAddress);
          } catch (error) {
            console.error("Error getting address:", error);
            // Handle error if fetching address fails
          }
        },
        (error) => {
          console.error("Error getting location:", error.message);
          // Handle error if getting location fails
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle if geolocation is not supported
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <nav className="w-full py-5 shadow-md bg-white mb-5">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div className="flex items-center mr-2">
          <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[150px] h-[50px] object-cover flex-shrink-0" />
          </Link>
          <div className="ml-2 flex items-center">
            <FontAwesomeIcon icon={faLocationDot} style={{color: 'green'}}/>
            <input
              className="w-full border-b border-gray-900 px-2 text-xs md:text-sm py-1 focus:outline-none focus:border-blue-500"
              placeholder="Enter Address"
              onClick={getLocation} // Call getLocation when input is clicked
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
