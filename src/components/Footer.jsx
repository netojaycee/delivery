import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleRight,
  faArrowCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';


export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-[60px] pb-3 bottom-0 w-full text-white font-serif mt-5">
      <div className="flex flex-col w-[95%] mx-auto gap-4 ">
        <div className="flex md:flex-row flex-col justify-between w-[98%] mx-auto mb-7 gap-3  items-center">
          <div className="w-[40%]">
          <img src={logo} alt="logo" className="w-[150px] h-[50px] object-cover flex-shrink-0" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs">
              Have any complaints or inquiries? Send us a message
            </p>
            <div className="flex flex-row gap-2 items-center">
              <Input type="text" className="text-white" />
              <FontAwesomeIcon
                icon={faArrowRight}
                className="p-2 border rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-row justify-around w-full">
            <div className="flex flex-col">
              <p>FOLLOW US</p>
              <div className="flex items-center gap-3">
                <Link to="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="border rounded-full p-1"
                    style={{ color: "#fff" }}
                  />
                </Link>
                <Link to="">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="mt-4 border rounded-full p-1 "
                    style={{ color: "#fff" }}
                  />
                </Link>
                <Link to="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="border rounded-full p-1"
                    style={{ color: "#fff" }}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p>CALL US</p>
              <p className="text-xs">+2349123456678</p>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="flex md:flex-row flex-col justify-between w-[98%] mx-auto items-center gap-3">
          <p className="text-xs">
            2024 SendUs, Food Delivery Services, Lokoja, Kogi State. All Rights
            Reserved
          </p>
          <p className="text-xs">
            Do you want to be a rider?{" "}
            <Link className="text-purple-300 italic" to="">
              {" "}
              Register here
            </Link>
          </p>
          <p className="text-xs">
            Register your restaurant
            <Link className="text-purple-300 italic" to="">
              {" "}
              here
            </Link>
          </p>
          <Link to="" className="text-sm">
            Privacy Policy
          </Link>
          <Link to="" className="text-sm">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
