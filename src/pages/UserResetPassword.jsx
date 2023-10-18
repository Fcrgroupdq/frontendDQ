import {
  Button,
  Spinner,
  useToast,
  Box,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import dq from "../assets/Logo Dq.png";

const UserResetPassword = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Add confirmPassword to match the input field in the form
  });
  const { email, password, confirmPassword } = input;
  const [otpVisible, setOtpVisible] = useState(false);
  const [pinValues, setPinValues] = useState(["", "", "", ""]);
  const [otpLoading, setOtpLoading] = useState(false);
  const [verify, setVerify] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handlePinChange = (index, value) => {
    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    setPinValues(newPinValues);
  };

  const handleOtpVerify = () => {
    setVerify(true);
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
          axios
            .patch("https://drab-blue-mite-belt.cyclic.app/user/forget", {
              email,
              password,
            })
            .then((res) => {
              toast({
                title: `${res.data.msg}`,
                position: "top-right",
                isClosable: true,
                status: "error",
                duration: 4000,
              });
              setVerify(false);
              setOtpVisible(false);
              setInput({
                email: "",
                password: "",
                confirmPassword: "",
              });
            });
        }
        setVerify(false);
      });
  };

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      alert("please correct the password");
      return;
    }
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    setOtpLoading(true);
    axios
      .post("https://drab-blue-mite-belt.cyclic.app/otp/send", {
        email: email,
      })
      .then((res) => {
        if (res.data.err) {
          // Handle the error response
          // You can display an error message to the user
          // For example:
          toast({
            title: res.data.err.message, // Use the actual structure of the error response
            description: "",
            position: "top-right",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        } else {
          // The request was successful, handle accordingly
          toast({
            title: "OTP sent successfully !!",
            description: "",
            position: "top-right",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          // You may want to update the UI or take further actions here
        }
      })
      .catch((err) =>
        toast({
          title: "Error sending OTP",
          description: "",
          position: "top-right",
          status: "error",
          duration: 4000,
          isClosable: true,
        })
      )
      .finally(() => {
        setOtpLoading(false);
        setOtpVisible(true);
      });
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-4">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img width={'90px'} src={dq} alt="logo" />
          </a>
          <div className="w-full p-6 bg-purple-200 rounded-lg shadow md:mt-0 sm:max-w-md">
            <h2 className="mb-1 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
              Reset Your Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-light text-gray-500"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <Button
                onClick={handleResetPassword}
                w={"100%"}
                colorScheme="red"
              >
                {otpLoading ? <Spinner /> : "Reset password"}
              </Button>
              {otpVisible ? (
                <Box
                  marginTop={"12px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <HStack>
                    <PinInput>
                      {pinValues.map((value, index) => (
                        <PinInputField
                          key={index}
                          value={value}
                          onChange={(e) =>
                            handlePinChange(index, e.target.value)
                          }
                        />
                      ))}
                    </PinInput>
                  </HStack>
                  <Button onClick={handleOtpVerify} colorScheme="red">
                    {verify ? <Spinner /> : "Verify OTP"}
                  </Button>
                </Box>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserResetPassword;
