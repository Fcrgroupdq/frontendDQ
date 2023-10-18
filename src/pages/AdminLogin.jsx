import { SimpleGrid, Spinner, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = input;
  const toast = useToast();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post("https://drab-blue-mite-belt.cyclic.app/admin/login", input)
      .then((res) => {
        toast({
          title: res.data.msg,
          position: "top-right",
          isClosable: true,
          status: "success",
          duration: 4000,
        });
        setLoading(false);
        if (res.data.token) {
          sessionStorage.setItem("dqAdminToken", res.data.token);
          navigate("/admin");
        }
      });
  };

  return (
    <SimpleGrid column={[1, 2]}>
      <Box>
        <Flex
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Tell Me Who Are You</Heading>
            </Stack>
            <Box
              rounded={"lg"}
              // bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    name="email"
                    onChange={handleChange}
                    value={email}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    onChange={handleChange}
                    value={password}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link to={'/admin-reset-password'}>Forget Password</Link>
                  </Stack>
                  <Button
                    onClick={handleSubmit}
                    bg={"red.400"}
                    color={"white"}
                    _hover={{
                      bg: "red.500",
                    }}
                  >
                    {loading ? <Spinner /> : "Login"}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default AdminLogin;
