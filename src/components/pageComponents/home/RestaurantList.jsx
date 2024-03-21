import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { data } from "../../../db/data.js";

export default function RestaurantList() {
  const [visibleRestaurants, setVisibleRestaurants] = useState(10);

  const handleViewMore = () => {
    setVisibleRestaurants((prevVisible) => prevVisible + 5);
  };

  return (
    <>
      <div className="flex p-3 ">
        {/* <div className="flex flex-wrap gap-10">
          {data.slice(0, visibleRestaurants).map((restaurant) => (
            <div key={restaurant.name} className="">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-8 mx-auto">
  {data.slice(0, visibleRestaurants).map((restaurant) => (
    <div key={restaurant.name} className="">
      <RestaurantCard restaurant={restaurant} />
    </div>
  ))}
</div>

      </div>
      <div className="flex self-end mt-3">
        {visibleRestaurants < data.length && (
          <button
            onClick={handleViewMore}
            className="p-2 px-4 text-sm font-semibold border border-gray-900 rounded-lg"
          >
            View more
          </button>
        )}
      </div>
    </>
  );
}
