import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Hero() {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10">
        <Card className="mt-6 w-96 bg-gray-900 text-white font-serif flex-1 relative">
          <CardBody className="flex flex-row gap-2 p-5 items-center">
            <div className="flex flex-col gap-4">
              <Typography variant="h5" className="">
                Delivery from Any Restaurant
              </Typography>
              <p className="text-sm">
                With our service, you can order from any restaurant within the
                state and have it delivered straigh to your doorstep
              </p>
            </div>
            <div className="">
              <img src="https://i.ibb.co/qpjR3W/delivery.png" alt="" />
            </div>
          </CardBody>
          <span className="absolute rounded-full bg-gray-200 p-6 -top-5 -left-1">

          </span>
        </Card>

        <Card className="mt-6 w-96 bg-gray-900 text-white font-serif flex-1 relative">
          <CardBody className="flex flex-row gap-2 p-5 items-center">
            <div className="">
              <img src="https://i.ibb.co/qpjR3W/delivery.png" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <Typography variant="h5" className="">
               Fast and Realiable delivery
              </Typography>
              <p className="text-sm">
                With our service, you can order from any restaurant within the
                state and have it delivered straigh to your doorstep
              </p>
            </div>
          </CardBody>
          <span className="absolute rounded-full bg-gray-200 p-6 -top-5 -right-1">

          </span>
        </Card>
      </div>
    </>
  );
}
