import React, { useEffect, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "../../../api/axios";
import { Modal } from "../../Modal";
import AuthContext from "../../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function Login({ onClose }) {
  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = React.useContext(AuthContext);

  const [registerOpen, setRegisterOpen] = useState(false);

  const [forgotPassOpen, setForgotPassOpen] = useState(false);

  const toggleRegisterModal = () => {
    setRegisterOpen(!registerOpen);
  };

  const toggleForgotPassModal = () => {
    setForgotPassOpen(!forgotPassOpen);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("api/auth/login", { email, password });

      setLoading(false);
      if (response.data.AccessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.AccessToken));
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const decodedToken = jwtDecode(storedUser);
        const { email, userId, role } = decodedToken;

        setAuth({
          user: {
            email,
            userId,
            role,
          },
        });
        setEmail("");
        setPassword("");
        toast.success("Login successful");
        onClose();
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center font-serif">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Sign In to Continue!
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            {error && (
              <Typography color="red" className="mt-2 text-center font-normal">
                {error}
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            {loading ? "processing" : "Sign In"}
          </Button>

          <Typography
            color="gray"
            className="mt-4 text-center font-normal flex justify-between"
          >
            <span>
              new to SendUs?{" "}
              <Modal
                open={registerOpen}
                onClose={toggleRegisterModal}
                type="register"
              />
            </span>

            <Modal
              open={forgotPassOpen}
              onClose={toggleForgotPassModal}
              type="forgotPass"
            />
          </Typography>
        </form>
      </Card>
    </div>
  );
}
