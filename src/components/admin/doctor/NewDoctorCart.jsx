import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Text,
  Container,
  useMediaQuery,
  ListIcon,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import axios from "axios";

const NewDoctorCart = ({ data, refract }) => {
  const [isLargerThanTablet] = useMediaQuery("(min-width: 868px)");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllText, setShowAllText] = useState("See More");
  const [premiumLoading, setPremiumLoading] = useState(false)
  const [statusLoading,setStatusLoading] = useState(false);

  const toast = useToast();

  const toggleShowFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
    setShowAllText(showAllFeatures ? "See More" : "See Less");
  };

  const sendNotifaction = (data) => {
    axios.post(`https://drab-blue-mite-belt.cyclic.app/otp/send-mail`,data)
    .then(res => {})
  }

  const handleApprovel = () => {
    setStatusLoading(true)
    axios
    .patch(
      `https://drab-blue-mite-belt.cyclic.app/doctors/update/${data._id}`,
      {  status: "approved" }
    )
    .then((res) => {
     
      toast({
        title: "Approved Successfully",
        description: "",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setStatusLoading(false)
      refract()
    });
  }

  const handlepremium = () => {
    setPremiumLoading(true)
    axios
    .patch(
      `https://drab-blue-mite-belt.cyclic.app/doctors/update/${data._id}`,
      { isPremium:!data.isPremium }
    )
    .then((res) => {
      toast({
        title: "premium update Successfully",
        description: "",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setPremiumLoading(false)
      refract()
    });
  }

  const extractFeatures = () => {
    const features = [];

    for (const key in data) {
      if (key.startsWith("feature") && data[key]) {
        features.push(data[key]);
      }
    }

    return features;
  };

  const visibleFeatures = showAllFeatures
    ? extractFeatures()
    : extractFeatures().slice(0, 3);

  return (
    <div>
      <Container py={8} maxW={isLargerThanTablet ? "container.lg" : "full"}>
        <Box
          p={6}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          display="flex"
          flexDirection={isLargerThanTablet ? "row" : "column"}
          alignItems={isLargerThanTablet ? "flex-start" : "center"}
          _hover={{
            boxShadow: "lg",
          }}
        >
          <Avatar
            size={isLargerThanTablet ? "3xl" : "2xl"}
            src={data.image}
            alt={data.name}
          />
          <Box
            ml={isLargerThanTablet ? 6 : 0}
            mt={isLargerThanTablet ? 0 : 4}
            textAlign={isLargerThanTablet ? "left" : "center"}
          >
            <Heading as="h1" size="xl" mb={2}>
              {data.name}
            </Heading>
            <Text fontSize="lg" color="red.500" fontWeight="bold" mb={2}>
              {data.spacility}
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Fees: ₹{data.fees}
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Status : {data.status}
            </Text>
            <Text fontSize="md" color="gray.500" mb={4}>
              {data.exp}
            </Text>
            <Text fontSize="md" color="gray.500" mb={4}>
              {data.org}
            </Text>
            <List spacing={2}>
              {showAllFeatures
                ? Object.keys(data)
                    .filter((key) => key.startsWith("feature"))
                    .map((key, index) => (
                      <ListItem key={index}>
                        <ListIcon as={CheckIcon} color="red.500" />
                        {data[key]}
                      </ListItem>
                    ))
                : visibleFeatures.map((feature, index) => (
                    <ListItem key={index}>
                      <ListIcon as={CheckIcon} color="red.500" />
                      {feature}
                    </ListItem>
                  ))}
            </List>
            <Button
              mt={2}
              mr={3}
              size="sm"
              colorScheme="red"
              onClick={toggleShowFeatures}
            >
              {showAllText}
            </Button>
            <Button onClick={handleApprovel} mr={3} mt={2} variant="outline" size="sm" colorScheme="teal">
              {statusLoading ? <Spinner /> : data.status === "approved" ? "Remove approvel" : "Give Approvel"}
            </Button>
            <Button onClick={handlepremium} mt={2} variant="outline" size="sm" colorScheme="red">
              { premiumLoading ? <Spinner /> : data.isPremium ? "Remove premium" :  "Make Premiun"}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default NewDoctorCart;
