import React from "react";
import { useNavigate } from "react-router-dom";
import FoodList from "../components/pageComponents/restaurant/FoodList";
import Hero from "../components/pageComponents/restaurant/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Restaurant({ restaurant }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <div className="flex flex-col gap-4 mt-5">
        <div className="w-[90%] mx-auto" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" size="lg" />
        </div>
        <div className="flex flex-col gap-3 mx-auto w-[90%]">
          <Hero />
          <FoodList restaurant={restaurant} />
        </div>
      </div>
    </>
  );
}
