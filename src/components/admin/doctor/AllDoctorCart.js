import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  useColorModeValue,
  ChakraProvider,
  Button,
  useDisclosure,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import {
  Avatar,
  Heading,
  List,
  ListItem,
  Container,
  useMediaQuery,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const AllDoctorCart = ({ doctor: data, refrace }) => {
  const { name, image, location, specialty, isPremium, _id } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState();
  const [isLargerThanTablet] = useMediaQuery("(min-width: 868px)");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllText, setShowAllText] = useState("See More");
  const [activeLoadind,setActiveLoading] = useState(false)
  const toast = useToast();

  const toggleShowFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
    setShowAllText(showAllFeatures ? "See More" : "See Less");
  };

  const handleActive = (id) => {
    setActiveLoading(true)
    axios.patch(`https://drab-blue-mite-belt.cyclic.app/doctors/update/${id}`,{
      status:'Not Verified'
    })
    .then(res => {
      toast({
        title: `Inactive successfully updated`,
        position: "top-right",
        isClosable: true,
        status: "success",
        duration: 4000,
      });
      setActiveLoading(false)
      refrace()
    })
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

  const handleDeleteDoctor = (id) => {
    setLoading(true);
    axios
      .delete(`https://drab-blue-mite-belt.cyclic.app/doctors/delete/${id}`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
        },
      })
      .then((res) => {
        toast({
          title: `${res.data.msg}`,
          position: "top-right",
          isClosable: true,
          status: "error",
          duration: 4000,
        });
      })
      .catch((err) => alert(err))
      .finally(() => {
        setLoading(false);
        refrace();
      });
  };

  return (
    <ChakraProvider>
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
              {data && data.spacility
                ? data.spacility.charAt(0).toUpperCase() +
                  data.spacility.slice(1)
                : ""}
            </Text>

            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Fees: ₹{data.fees}
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Status :{" "}
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
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
                      <ListItem textAlign={"left"} key={index}>
                        <ListIcon as={CheckIcon} color="red.500" />
                        {data[key]}
                      </ListItem>
                    ))
                : visibleFeatures.map((feature, index) => (
                    <ListItem textAlign={"left"} key={index}>
                      <ListIcon as={CheckIcon} color="red.500" />
                      {feature}
                    </ListItem>
                  ))}
            </List>
            <Button
              mt={2}
              mr={3}
              size="sm"
              colorScheme="teal"
              onClick={toggleShowFeatures}
            >
              {showAllText}
            </Button>
            <Button mt={2} mr={3} size="sm" colorScheme="red" onClick={onOpen}>
              Delete
            </Button>
            <Button onClick={()=>handleActive(data._id)} variant={'outline'} mt={2} mr={3} size="sm" colorScheme="red">
              {activeLoadind?<Spinner/> : data.status==="approved"?"Make Inactive":"Make Active"}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Do You Really Want To Delete ?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  If you delete this Doctor you can't do undo
                </ModalBody>
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  shadow="md"
                  bg={useColorModeValue("white", "gray.700")}
                  mt={"12px"}
                >
                  <Flex direction="row" justifyContent={"space-evenly"}>
                    <Box w={"30%"}>
                      <Image
                        borderRadius={"25px"}
                        src={image}
                        alt={name}
                        boxSize="120px"
                        objectFit="cover"
                      />
                    </Box>
                    <Box w={"30%"} ml={4}>
                      <Text fontSize="xl" fontWeight="bold">
                        {name}
                      </Text>
                      <Text fontSize="md" color="gray.500">
                        {location}
                      </Text>
                      <Text fontSize="sm" color="gray.600" mt={1}>
                        {specialty}
                      </Text>
                      {isPremium && (
                        <Badge
                          colorScheme="pink"
                          fontSize="sm"
                          mt={2}
                          variant="solid"
                        >
                          Premium
                        </Badge>
                      )}
                    </Box>
                  </Flex>
                </Box>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={() => handleDeleteDoctor(_id)}
                    colorScheme="red"
                    variant="ghost"
                  >
                    {loading ? <Spinner /> : "Yes Delete"}
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default AllDoctorCart;
