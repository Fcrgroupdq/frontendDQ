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
  Spinner,
  useToast,
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

const AllHospitalCart = ({ hospital }) => {
  const { name, image1, image2, location, isPremium, _id } = hospital;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false)

  const toast = useToast();

  const handleDelete =  (id) => {
    setLoading(true)
    axios.delete(`https://drab-blue-mite-belt.cyclic.app/hospital/delete/${id}`)
    .then(res => {
      setLoading(false)
      toast({
        title: `${res.data.msg}`,
        position: "top-right",
        isClosable: true,
        status: "success",
        duration: 4000,
      });
    })
  }

  return (
    <ChakraProvider>
       <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      shadow="md"
      bg={useColorModeValue("white", "gray.700")}
      mt={["12px", "12px", "0"]}
    >
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-evenly"
        alignItems={["center", "center", "initial"]}
        gap={["10px", "10px", "20px"]}
      >
        <Box w={["100%", "100%", "30%"]}>
          <Image
            borderRadius={"25px"}
            src={image1}
            alt={name}
            boxSize={["80%", "80%", "auto"]}
            objectFit="cover"
          />
        </Box>
        <Box w={["100%", "100%", "40%"]} ml={[0, 0, 4]}>
          <Text fontSize={["xl", "xl", "2xl"]} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize={["md", "md", "lg"]} color="gray.500">
            {location}
          </Text>
          <Text fontSize={["md", "md", "lg"]} color="gray.500">
            {_id}
          </Text>
          {isPremium && (
            <Badge colorScheme="pink" fontSize="sm" mt={2} variant="solid">
              Premium
            </Badge>
          )}
        </Box>
        <Flex w={["100%", "100%", "30%"]} gap={["10px", "10px", "20px"]}>
          <Button colorScheme="blue">Update</Button>
          <Button color={"red"} onClick={onOpen}>
            Delete
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do You Really Want To Delete ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>If you delete this Hospital you can't undo</ModalBody>
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
              <Box w={["100%", "100%", "30%"]}>
                <Image
                  borderRadius={"25px"}
                  src={image1}
                  alt={name}
                  boxSize={["120px", "120px", "auto"]}
                  objectFit="cover"
                />
              </Box>
              <Box w={["100%", "100%", "30%"]} ml={[0, 0, 4]}>
                <Text fontSize={["xl", "xl", "2xl"]} fontWeight="bold">
                  {name}
                </Text>
                <Text fontSize={["md", "md", "lg"]} color="gray.500">
                  {location}
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
            <Button onClick={() => handleDelete(_id)} colorScheme="red" variant="ghost">
              {loading ? <Spinner /> : "delete" }
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    </ChakraProvider>
  );
};

export default AllHospitalCart;
