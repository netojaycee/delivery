import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";

export default function RestaurantCard({ restaurant }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you can send a request to your backend to add/remove from favorites
    if (!isFavorite) {
      // Send a request to add restaurant to favorites
      console.log("Adding to favorites:", restaurant.name);
    } else {
      // Send a request to remove restaurant from favorites
      console.log("Removing from favorites:", restaurant.name);
    }
  };

  return (
    <Card className="mt-6 w-[200px] shadow-lg shadow-gray-600 ">
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
          <FontAwesomeIcon icon={faClock} style={{ color: "red" }} />
          <Typography variant="small" color="blue-gray">
            10 - 25 mins
          </Typography>
        </div>
        <Button color="gray" ripple="light">
          Visit now
        </Button>
      </CardBody>
    </Card>
  );
}
