import React from "react";
import restaurant from "../../../assets/images/restaurant.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";

export default function Hero() {
  return (
    <div
      className="relative h-[300px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("${restaurant}")` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white px-4 py-1 rounded bg-gradient-to-r from-white to-gray-700 ">
          <div className="text-center border-2 border-black py-1 px-[70px] rounded font-bold font-serif text-black">
            LAFRESH
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        Opening Time: 9-4pm
      </div>
      <div className="absolute bottom-4 right-4 text-white flex items-center gap-1">
        <FontAwesomeIcon icon={faClockFour} style={{ color: "red" }} />
        <p>10 - 25 mins</p>
      </div>
    </div>
  );
}
