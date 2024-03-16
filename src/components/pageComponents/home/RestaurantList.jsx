import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const rest = [
  { name: "McDonald's" },
  { name: "Taco Bell" },
  { name: "KFC" },
  { name: "Burger King" },
  { name: "Wendy's" },
  { name: "Popeyes" },
  { name: "Dairy Queen" },
  { name: "Carl's Jr." },
  { name: "Arby's" },
  { name: "Chick-fil-A" },
  { name: "In-N-Out" },
  { name: "Jimmy John's" },
  { name: "Panera Bread" },
  { name: "Subway" },
];

export default function RestaurantList() {
  const [visibleRestaurants, setVisibleRestaurants] = useState(10);

  const handleViewMore = () => {
    setVisibleRestaurants((prevVisible) => prevVisible + 5);
  };

  return (
    <>
      <div className="flex p-3 ">
        <div className="flex flex-wrap gap-10">
          {rest.slice(0, visibleRestaurants).map((restaurant) => (
            <div key={restaurant.name} className="">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
 
      </div>
      <div className="flex self-end mt-3">
        {visibleRestaurants < rest.length && (
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
