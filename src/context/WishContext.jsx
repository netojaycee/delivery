import React, { createContext, useEffect, useState } from "react";

export const WishContext = createContext();

const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  const addToWish = (data, id) => {
    const newItem = { ...data, amount: 1 };
    // check if item already exists
    const wishItem = wish.find((item) => {
      return item.id === id;
    });
    // if wish item exists
    if (wishItem) {
      const newWish = [...wish].map((item) => {
        if (item.id === id) {
          return { ...item, amount: wishItem.amount + 1 };
        } else {
          return item;
        }
      });
      setWish(newWish);
    } else {
      setWish([...wish, newItem]);
    }
  // console.log(wishItem);
};
console.log(wish);
  const removeFromWish = (id) => {
    const newWish = [...wish].filter((item) => item.id !== id);
    setWish(newWish);
  };
  const clearWish = () => {
    setWish([]);
  };

  return (
    <WishContext.Provider
      value={{
        wish,
        addToWish,
        removeFromWish,
        clearWish,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export default WishProvider;
