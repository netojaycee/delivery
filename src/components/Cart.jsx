import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faMinusCircle,
  faPlus,
  faPlusCircle,
  faSortDown,
  faSortUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import emptyCart from "../assets/images/emptycart.png";

export default function Cart() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    total,
  } = useContext(CartContext);

  return (
    <>
      <div className="flex p-2">
        <div className="grid grid-cols-2 gap-10 mt-5 mx-auto">
          {cart.length > 0 ? (
            cart.map((cartItem) => (
              <div key={cartItem.id} className="">
                <Card className="mt-3 h-[120px] w-[120px] shadow-md shadow-gray-400 ">
                  <CardHeader color="blue-gray" className="">
                    <img
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="card-image"
                      className="w-full h-full object-cover "
                    />
                  </CardHeader>
                  <CardBody className="flex flex-col p-2">
                    <div className="flex items-center justify-between">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-xs"
                      >
                        {cartItem.name}
                      </Typography>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "red" }}
                        className="cursor-pointer"
                        onClick={() => removeFromCart(cartItem.id)}
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-xs"
                      >
                        N {parseFloat(cartItem.price * cartItem.amount).toFixed(2)}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1 flex-row self-end flex-shrink-0">
                      <div className="flex flex-row items-center gap-2">
                        <FontAwesomeIcon
                          onClick={() => decreaseAmount(cartItem.id)}
                          icon={faMinusCircle}
                          className="cursor-pointer hover:bg-gray-500  ease-linear duration-200"
                          style={{ color: "red" }}
                          // size="xl"
                        />

                        <div>{cartItem.amount}</div>
                        <FontAwesomeIcon
                          onClick={() => increaseAmount(cartItem.id)}
                          icon={faPlusCircle}
                          className="cursor-pointer hover:bg-gray-500 ease-linear duration-200"
                          style={{ color: "green" }}
                          // size="xl"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img src={emptyCart} alt="Empty Cart" className="w-1/2" />
              <p className="text-xl font-semibold">Your cart is empty</p>
              <p className="text-gray-500">Add some items to your cart</p>
            </div>
          )}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <hr className="border border-gray-700 w-[90%] mx-auto" />

          <div className="flex flex-row items-center justify-between w-full">
            <div className="font-serif font-semibold">
              Total: {parseFloat(total).toFixed(2)}
            </div>
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="lg"
              className="cursor-pointer"
              style={{ color: "red" }}
              title="Clear Cart"
              onClick={() => clearCart()}
            />
          </div>
          <hr className="border border-gray-700 w-[90%] mx-auto" />

          <Button color="gray" ripple="light" className="">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </>
  );
}
