import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import Login from "./pageComponents/auth/Login";
import Register from "./pageComponents/auth/Register";
import ForgotPassword from "./pageComponents/auth/ForgotPassword";

export function Modal({ open, onClose, type, triggerText }) {
  //   const [open, setOpen] = React.useState(false);

  // const handleOpen = () => setOpen(!open);
  const handleOpen = () => onClose();

  return (
    <>
      {type === "login" ? (
        triggerText ? (
          <span
            onClick={handleOpen}
            className="font-medium text-purple-400 cursor-pointer"
          >
            {triggerText}
          </span>
        ) : (
          <FontAwesomeIcon
            icon={faPerson}
            className="border p-2 rounded-full bg-gray-900 mr-2 cursor-pointer"
            style={{ color: "white" }}
            onClick={handleOpen}
          />
        )
      ) : type === "register" ? (
        <span
          onClick={handleOpen}
          className="font-medium text-purple-400 cursor-pointer"
        >
          Sign Up
        </span>
      ) : (
        <span
          onClick={handleOpen}
          className="font-medium text-purple-400 cursor-pointer"
        >
          forgot Password?
        </span>
      )}
      <Dialog open={open} handler={handleOpen}>
        {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
        <DialogBody>
          {type === "login" ? (
            <Login onClose={onClose} />
          ) : type === "register" ? (
            <Register onClose={onClose} />
          ) : (
            <ForgotPassword onClose={onClose} />
          )}
        </DialogBody>
      </Dialog>
    </>
  );
}
