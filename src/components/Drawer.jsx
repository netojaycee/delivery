// DrawerRight.jsx
import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import Wishlist from "./Wishlist";
import Cart from "./Cart";

export default function DrawerRight({ open, onClose, type }) {
  return (
    <Drawer placement="right" open={open} onClose={onClose} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          {type === "favorites" ? "Wishlist" : "Cart"}
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <Typography color="gray" className="mb-8 pr-4 font-normal">
        {type === "favorites" ? <Wishlist /> : <Cart />}
      </Typography>
    </Drawer>
  );
}
