import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";
import { Modal } from "../../Modal";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [role, setRole] = React.useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleLoginModal = () => setLoginOpen(!loginOpen);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!agreeTerms) {
      setError("Please agree to the terms and conditions.");
      return;
    }
    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
        role, // Include role in registration data
      });
      console.log("User registered:", response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to register. Please try again.");
      setLoading(false);
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center font-serif">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Sign Up to Continue!
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-4">
            {error && (
              <Typography color="red" className="mt-2 text-center font-normal">
                {error}
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Role
            </Typography>
            <Select
              label="Select Role"
              value={role}
              onChange={(val) => setRole(val)}
            >
              <Option value="html">User</Option>
              <Option value="react">Restaurant</Option>
              <Option value="vue">Rider</Option>
            </Select>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link
                  to="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />

          <Button type="submit" className="mt-6" fullWidth>
            {loading ? "Processing" : "Sign Up"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Modal
              open={loginOpen}
              onClose={toggleLoginModal}
              type="login"
              triggerText="Sign In"
            />
          </Typography>
        </form>
      </Card>
    </div>
  );
}
