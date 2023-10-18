"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import dq from "../assets/Logo Dq.png"

const DoctorDashboardLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://drab-blue-mite-belt.cyclic.app/doctors/login", input)
      .then((res) => {
        setLoading(false);
        toast({
          title: res.data.msg,
          description: "",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
        setInput({ email: "", password: "" });
        if (res.data.status) {
          localStorage.setItem("dqDoctorAu",res.data.token)
          navigate("/doctor-dashboard");
        }
      });
  };

  const handleChnage = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            width={'80px'}
            src={dq}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your Doctor Dashboard
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={input.email}
                  onChange={handleChnage}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    <Button variant={'link'} colorScheme="red"><Link to={'/doctor-reset-password'}>Forget Password</Link></Button>
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={input.password}
                  onChange={handleChnage}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-purpul3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/doctor-dashboard-signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              please Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardLogin;
