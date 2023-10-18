import {
  Button,
  HStack,
  PinInput,
  PinInputField,
  Box,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import dq from "../assets/Logo Dq.png"

const DoctorDashboardSignup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [otpVisible, setOtpVisible] = useState(false);
  const [pinValues, setPinValues] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [otpLoding, setOtpLoading] = useState(false);

  const toast = useToast();

  const handlePinChange = (index, value) => {
    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    setPinValues(newPinValues);
  };

  const sendNotifaction = (data) => {
    axios
      .post(`https://drab-blue-mite-belt.cyclic.app/otp/send-mail`, data)
      .then((res) => {});
  };

  const submitData = () => {
    setLoading(true);
    axios
      .post("https://drab-blue-mite-belt.cyclic.app/doctors", {
        ...input,
        status: "Add_data",
      })
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
        setOtpVisible(true);
        setInput({ email: "", password: "" });
      });
  };

  const handleOtpVerify = () => {
    setOtpLoading(true);
    axios
      .post("https://drab-blue-mite-belt.cyclic.app/otp/verify", {
        email: input.email,
        otp: pinValues.join(""),
      })
      .then((res) => {
        toast({
          title: res.data.msg,
          description: "",
          position: "top-right",
          status: res.data.msg === "otp verify success" ? "success" : "error",
          duration: 4000,
          isClosable: true,
        });
        if (res.data.msg === "otp verify success") {
          submitData();
          let dataDoc = {
            email:input.email,
            massage:'You have Successfully Registered with DoctorsQueries. Please complete your profile to receive appointments.'
          }
          let dataAdmin = {
            email:"sharmaashish7251@gmail.com",
            massage:'New Doctor Added'
          }
          sendNotifaction(dataDoc)
          sendNotifaction(dataAdmin)
         
        }
      });
      setOtpLoading(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post("https://drab-blue-mite-belt.cyclic.app/otp/send", {
        email: input.email,
      })
      .then((res) => {
        toast({
          title: "otp sent successfully !!",
          description: "",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
        setOtpVisible(true);
        setLoading(false);
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
            src={dq}
            width={'80px'}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to beacome a doctor on doctorQueiry
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
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={input.password}
                  onChange={handleChnage}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {otpVisible ? (
              <Box
                marginTop={"12px"}
                display={"flex"}
                justifyContent={"space-between"}
                width={"400px"}
              >
                <HStack>
                  <PinInput>
                    {pinValues.map((value, index) => (
                      <PinInputField
                        key={index}
                        value={value}
                        onChange={(e) => handlePinChange(index, e.target.value)}
                      />
                    ))}
                  </PinInput>
                </HStack>
                <Button onClick={handleOtpVerify} colorScheme="red">
                  {otpLoding ? <Spinner /> : "verify OTP"}
                </Button>
              </Box>
            ) : (
              ""
            )}

            <div>
              <button
                onClick={handleSignup}
                className="flex w-full justify-center rounded-md bg-purpul3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? <Spinner /> : "Signup"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Allready a member?{" "}
            <Link
              to="/doctor-dashboard-login"
              className="font-semibold leading-6 text-purpul2 hover:text-purpul4"
            >
              please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardSignup;
