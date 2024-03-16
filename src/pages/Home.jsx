import React from "react";
import RestaurantCard from "../components/pageComponents/home/RestaurantCard";
import RestaurantList from "../components/pageComponents/home/RestaurantList";
import { Typography } from "@material-tailwind/react";
import Hero from "../components/pageComponents/home/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 my-5 w-[90%] mx-auto">
        <Hero />
        <Typography
          variant="h4"
          color="blue-gray"
          className="font-serif relative w-[140px] mb-2"
        >
          Restaurants
          <hr className="w-[60%] absolute right-0 border-gray-500 border rounded" />
        </Typography>
        {/* <div className="flex justify-center"> */}
          
        <RestaurantList />

        
      </div>

    </>
  );
}
