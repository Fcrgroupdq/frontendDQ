import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Spinner,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date}</Text>
    </HStack>
  );
};

const EachBlogCart = ({ item }) => {
  const [deleteLoding, setDeleteLoding] = useState(false);

  const toast = useToast();
  const navigate = useNavigate()

  const handleDelete = (id) => {
    setDeleteLoding(true);
    axios
      .delete(`https://drab-blue-mite-belt.cyclic.app/blog/delete/${id}`)
      .then((res) => {
        toast({
          title: `${res.data.msg}`,
          position: "top-right",
          isClosable: true,
          status: "success",
          duration: 4000,
        });
        setDeleteLoding(false);
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
        // Handle the error and display an error message to the user if necessary
        toast({
          title: "Error",
          description: "An error occurred while deleting the resource.",
          position: "top-right",
          isClosable: true,
          status: "error",
          duration: 4000,
        });
        setDeleteLoding(false);
      });
  };

  const handleViewBlog = () => {
     navigate(`/blog/${item._id}`)
  }

  const handleEditBlog = () => {
    navigate(`/blog/${item._id}/edit`)
  }

  return (
    <div>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        backgroundColor={"white"}
        borderRadius={"15px"}
        key={item._id}
        p={'8px'}
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box
              pb={"20px"}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Image
                width={"50%"}
                borderRadius="lg"
                src={item.FeaturedImage}
                alt="some good alt text"
                objectFit="contain"
                border={"2px solid red"}
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              {item.Title.slice(0, 300)}
            </Text>
          </Heading>
          <Text as="p" marginTop="2" color={"gray"} fontSize="lg">
            {parse(item.MetaDescription.slice(0, 900))}
          </Text>
          {/* {item.description.slice(0, 150)}... */}
          {/* <BlogAuthor name={item.Author} date={item.date} /> */}
          <Flex gap={'20px'}>
          <Button
            onClick={() => handleDelete(item._id)}
            mt={"10px"}
            variant={"outline"}
            colorScheme="red"
            width={"200px"}
          >
            {deleteLoding ? <Spinner /> : "Delete"}
          </Button>
          <Button
            mt={"10px"}
            variant={"outline"}
            colorScheme="blue"
            width={"200px"}
            onClick={handleViewBlog}
          >
            {/* <Link to={`/blog/${item._id}`}>View</Link> */}View
          </Button>
          <Button
            mt={"10px"}
            variant={"solid"}
            colorScheme="teal"
            width={"150px"}
            onClick={handleEditBlog}
          >
            {/* <Link to={`/blog/${item._id}/edit`}>Edit</Link> */}Edit
          </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default EachBlogCart;
