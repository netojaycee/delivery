import React from "react";
import { WishContext } from "../context/WishContext";
import RestaurantCard from "./pageComponents/home/RestaurantCard";

export default function Wishlist() {
  const { wish } = React.useContext(WishContext);

  return (
    <>
      <div className="flex p-3">
        <div className="flex flex-wrap gap-5">
          {wish.map((restaurant) => (
            <div key={restaurant.name} className="">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
