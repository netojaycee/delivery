import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantCard({restaurant}) {
  return (
    <Card className="mt-6 w-[200px] shadow-lg shadow-gray-600 ">
      <CardHeader color="blue-gray" className="relative">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            {restaurant.name}
          </Typography>
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} size="lg" />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} style={{ color: "red" }} />
          <Typography variant="small" color="blue-gray">
            10 - 25 mins
          </Typography>
        </div>
        <div className="w-[60%] mx-auto">
          <button className="p-2 text-sm font-semibold bg-gray-900 text-white rounded-md">
            Visit now
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
