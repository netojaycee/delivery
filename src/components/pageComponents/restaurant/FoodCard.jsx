import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../../context/CartContext";

export default function FoodCard({ food, restaurant }) {
  const { addToCart } = useContext(CartContext);

  const cartAdd = () => {
    addToCart(food, food.id, restaurant.id);
    // toast.success("Login successful");
  };
  return (
    <>
      <Card className="mt-6 w-[200px] shadow-lg shadow-gray-600 ">
        <CardHeader color="blue-gray" className="">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="flex flex-col p-2">
          <div className="flex items-center justify-between">
            <Typography variant="h6" color="blue-gray">
              {food.name}
            </Typography>
            {/* <FontAwesomeIcon
              icon={isFavorite ? faHeart : faHeartOutline}
              style={{ color: isFavorite ? "red" : "gray" }}
              size="lg"
              className="cursor-pointer"
              onClick={toggleFavorite}
            /> */}
          </div>

          <div className="flex items-center gap-2">
            <Typography variant="h6" color="blue-gray">
              N {food.price}
            </Typography>
          </div>
          <Button onClick={() => cartAdd()} color="gray" ripple="light">
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
