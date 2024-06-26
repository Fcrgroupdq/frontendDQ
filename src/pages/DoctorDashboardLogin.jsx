"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import dq from "../assets/Logo Dq.png"
import doctorLogin  from "../assets/doctorLogin.jpeg"

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
    if(input.email===""){
      alert("please enter your email")
      return
    }

    if(input.password===""){
      alert("please enter your password")
      return
    }
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

  return <>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
          <iframe
            className="absolute inset-0"
            // style={{ filter: ' contrast(1.2) opacity(0.4)' }}
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src={doctorLogin}
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
          {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:example@email.com" className="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div> */}
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <img   width={'120px'} height={'120px'} src={dq}/>
          <h2 className="text-gray-900 text-lg mb-1 mt-5 font-medium title-font">Hey Doc!! Please Login to See your Appointments </h2>
          
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={input.email}
                  onChange={handleChnage}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={input.password}
                  onChange={handleChnage}
            />
          </div>
          
          <button onClick={handleLogin} className="text-white bg-purpul3 border-0 py-2 px-6 focus:outline-none hover:bg-purpul4 rounded text-lg">{loading ? <Spinner /> : "Login"}</button>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/doctor-dashboard-signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
        </div>
        
      </div>
    </section>
  </>
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
