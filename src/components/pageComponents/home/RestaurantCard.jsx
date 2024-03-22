import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faClockFour,
  faHeart as faHeartOutline,
} from "@fortawesome/free-regular-svg-icons";
import { WishContext } from "../../../context/WishContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const { addToWish, removeFromWish, wish } = React.useContext(WishContext);
  const navigate = useNavigate();

  const isFavorite = wish.some((item) => item.id === restaurant.id);

  const toggleFavorite = () => {
    if (!isFavorite) {
      addToWish(restaurant, restaurant.id);
      toast.success(`${restaurant.name} added to wishlist`);
    } else {
      removeFromWish(restaurant.id);
      toast.success(`${restaurant.name} removed from wishlist`);
    }
  };

  const handleVisitNow = () => {
    // Encode the restaurant name to include in the URL
    const encodedName = encodeURIComponent(restaurant.name);
    navigate(`/restaurant/${encodedName}`, {
      state: { restaurant: restaurant },
    });
  };

  return (
    <>
      <Card className="mt-6 w-[200px] shadow-lg shadow-gray-600">
        <CardHeader color="blue-gray" className="">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="flex flex-col gap-2 p-2">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {restaurant.name}
            </Typography>
            <FontAwesomeIcon
              icon={isFavorite ? faHeart : faHeartOutline}
              style={{ color: isFavorite ? "red" : "gray" }}
              size="lg"
              className="cursor-pointer"
              onClick={toggleFavorite}
            />
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClockFour} style={{ color: "red" }} />
            <Typography variant="small" color="blue-gray">
              10 - 25 mins
            </Typography>
          </div>
          <Button color="gray" ripple={true} onClick={handleVisitNow}>
            Visit now
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
