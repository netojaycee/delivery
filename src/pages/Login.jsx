import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

export default function Login() {
  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send login request to your backend server
      const response = await axios.post("/login", { email, password });
      // Assuming the response contains user data or authentication token
      console.log("User logged in:", response.data);
      setLoading(false);
      // Redirect the user to dashboard or home page
      // Example: history.push("/dashboard");
    } catch (error) {
      setError("Invalid email or password. Please try again.", error);
      setLoading(false)
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen font-serif">
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

          <Typography color="gray" className="mt-4 text-center font-normal flex justify-between">
            <span>new to SendUs?{" "}
            <Link to={"/register"} className="font-medium text-purple-400">
                Sign Up
            </Link></span>
            <Link to={"/register"} className="font-medium text-purple-400">
                forgot Password?
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
