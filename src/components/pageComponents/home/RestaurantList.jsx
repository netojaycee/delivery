import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const rest = [
  { id: 1, name: "McDonald's" },
  { id: 2, name: "Taco Bell" },
  { id: 3, name: "KFC" },
  { id: 4, name: "Burger King" },
  { id: 5, name: "Wendy's" },
  { id: 6, name: "Popeyes" },
  { id: 7, name: "Dairy Queen" },
  { id: 8, name: "Carl's Jr." },
  { id: 9, name: "Arby's" },
  { id: 10, name: "Chick-fil-A" },
  { id: 11, name: "In-N-Out" },
  { id: 12, name: "Jimmy John's" },
  { id: 13, name: "Panera Bread" },
  { id: 14, name: "Subway" },
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
