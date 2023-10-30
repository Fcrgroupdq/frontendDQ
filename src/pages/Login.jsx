import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  useToast,
  Spinner,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" /> */}
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      {/* <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" /> */}
    </Icon>
  );
};

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [otpVisible, setOtpVisible] = useState(false);
  const [pinValues, setPinValues] = useState(["", "", "", ""]);
  const [otpLoding, setOtpLoding] = useState(false);
  const [verify, setVerify] = useState(false);
  const [msg, setmsg] = useState(false);

  const location = useLocation();
  console.log(location)

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    setLoading(true);

    if (msg) {
      await axios
        .post("https://drab-blue-mite-belt.cyclic.app/user/forget", login)
        .then((res) => {
          console.log(res);
          toast({
            title: `${res.data.msg}`,
            position: "top-right",
            isClosable: true,
            status: "error",
            duration: 4000,
          });
          setmsg(false);
          setVerify(false);
          setOtpVisible(false);
          setLoading(false);
        });
    } else {
      setLoading(true);
      await axios
        .post("https://drab-blue-mite-belt.cyclic.app/user/login", login)
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("dqAuthTo", res.data.token);
            navigate(location.navigate);
            toast({
              title: `${res.data.msg}`,
              position: "top-right",
              isClosable: true,
              status: "success",
              duration: 4000,
            });
          } else {
            toast({
              title: `${res.data.msg}`,
              position: "top-right",
              isClosable: true,
              status: "error",
              duration: 4000,
            });
          }
          setLogin({
            email: "",
            password: "",
          });
          setLoading(false);
        })
        .catch((res) => console.log(res));
    }
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
        email: login.email,
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
          setVerify(false);
          setmsg(true);
        }
      });
  };
  const handleForget = () => {
    if (login.email === "") {
      alert("Please enter your email");
      return;
    }
    setOtpLoding(true);
    axios
      .post("https://drab-blue-mite-belt.cyclic.app/otp/send", {
        email: login.email,
      })
      .then((res) =>
        toast({
          title: "otp sent successfully !!",
          description: "",
          position: "top-right",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      )
      .catch((err) =>
        toast({
          title: "facing error to send otp",
          description: "",
          position: "top-right",
          status: "error",
          duration: 4000,
          isClosable: true,
        })
      )
      .finally(() => {
        setOtpLoding(false);
        setOtpVisible(true);
      });
  };
  const { email, password } = login;
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Senior Doctors{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Trusted Hospitals
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Join our Doctors Queries Team
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              {msg ? (
                <h3 style={{ color: "red" }}>Please Enter New Password</h3>
              ) : (
                ""
              )}
              <Input
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </Stack>
            <Button
              onClick={handleSubmitLogin}
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              {loading ? <Spinner /> : "Login"}
            </Button>
            <div
              style={{
                display: "flex",
                marginTop: "6px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>New user ?</h3>
                <Link color="blue" to={"/signup"}>
                  Please Signup
                </Link>
              </div>
              <Button colorScheme="red" variant={"link"}>
                <Link to={"/user-reset-password"}>Forget Password</Link>
              </Button>
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
                  {verify ? <Spinner /> : "verify OTP"}
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}
