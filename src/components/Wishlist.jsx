import React from "react";
import { WishContext } from "../context/WishContext";
import RestaurantCard from "./pageComponents/home/RestaurantCard";
import emptywish from "../assets/images/emptywish.png"; // Import your empty wishlist image

export default function Wishlist() {
  const { wish } = React.useContext(WishContext);

  return (
    <>
      <div className="flex p-3">
        {wish.length > 0 && ( // Check if the wishlist is not empty
          <div className="flex flex-wrap gap-5">
            {wish.map((restaurant) => (
              <div key={restaurant.name} className="">
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        )}
      </div>

      {wish.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={emptywish}
            alt="Empty Wishlist"
            className="w-[50%] object-cover"
          />
          <p className="text-xl font-semibold">Your wishlist is empty</p>
          <p className="text-gray-500">Add some restaurants to your wishlist</p>
        </div>
      )}
    </>
  );
}
