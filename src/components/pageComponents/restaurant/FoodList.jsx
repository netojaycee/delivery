import React, { useState } from "react";
import FoodCard from "./FoodCard";
import { useLocation } from "react-router-dom";


export default function FoodList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();
  const { restaurant: selectedRestaurant } = location.state || {};
  const food = selectedRestaurant ? selectedRestaurant.products : {};

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredFood =
    selectedCategory === "All"
      ? food
      : food.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="flex justify-center mt-4 font-serif">
        <div className="flex gap-4 bg-white shadow-lg px-3 py-1 w-full justify-between rounded-md overflow-x-auto">
          <p
            onClick={() => handleCategorySelect("All")}
            className={`p-2 px-4 text-sm font-semibold  cursor-pointer ${
              selectedCategory === "All" ? "text-gray-500" : ""
            }`}
          >
            All
          </p>
          {Array.from(new Set(food.map((item) => item.category))).map(
            (category) => (
              <p
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`p-2 px-4 text-sm font-semibold  cursor-pointer ${
                  selectedCategory === category ? " text-gray-500" : ""
                }`}
              >
                {category}
              </p>
            )
          )}
        </div>
      </div>
      <div className="flex p-3 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-8 mx-auto">
          {filteredFood.map((food) => (
            <div key={food.id} className="">
              <FoodCard food={food} restaurant={selectedRestaurant} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
