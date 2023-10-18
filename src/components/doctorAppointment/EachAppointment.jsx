import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Grid, Badge, Flex, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const EachAppointment = ({ item, refrace }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const sendNotifaction = (data) => {
    axios
      .post(`https://drab-blue-mite-belt.cyclic.app/otp/send-mail`, data)
      .then((res) => {});
  };

  const handleUpdate = () => {
    setLoading(true);
    let Admin = {
      email: "sharmaashish7251@gmail.com",
      subject: `Appointment ${select}`,
      massage: ` 
       Dear Admin,

       A new appointment has been ${select}:

       - Patient Name: ${item.name}
       - Doctor: ${item.doctor}
       - Date: ${item.date}
       - Time: ${item.time}
       
       Please review and confirm this appointment in our system. If you have any questions or need to make adjustments, please take the necessary actions accordingly.

       Thank you for your attention to this appointment.

       Best regards,
       Doctorsqeries
       info@doctorsqueries.com
      `,
    };
    let user = {
      email: item.email,
      subject: `Appointment ${select}`,
      massage: `
      Dear ${item.name},

      We are pleased to confirm your appointment has been ${select} with ${item.doctor} on  at ${item.date}. Below are the appointment details: https://doctorsquery.vercel.app/user-dashboard

      - Date: ${item.date}
      - Time: ${item.time}
      - Doctor: ${item.doctor}

      Thank you for choosing Doctorsqeries! We look forward to serving you.

      Best regards,
      Doctorsqeries
      info@doctorsqueries.com
      `,
    };

    axios
      .patch(`https://drab-blue-mite-belt.cyclic.app/appointment/${item._id}`, {
        ...item,
        status: select,
      })
      .then((res) => {
        toast({
          title: res.data.msg,
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
        onClose();
        refrace();
        sendNotifaction(Admin);
        sendNotifaction(user);

      });
  };

  return (
    <div>
      <Box
        bg="white"
        p={6}
        rounded="md"
        boxShadow="md"
        width="100%"
        marginTop={"12px"}
        marginBottom={"20px"}
        // maxW="400px"
      >
        <Heading size="lg" mb={4} color="red.400">
          Patient Information
        </Heading>
        <Grid templateColumns="2fr 2fr" gap={5}>
          <Text fontWeight="bold" color="gray.600">
            Name:
          </Text>
          <Text>{item.name}</Text>
          <Text fontWeight="bold" color="gray.600">
            Age:
          </Text>
          <Text>{item.age}</Text>
          <Text fontWeight="bold" color="gray.600">
            Gender:
          </Text>
          <Text>{item.gender}</Text>
          <Text fontWeight="bold" color="gray.600">
            Address:
          </Text>
          <Text>{item.address}</Text>
          <Text fontWeight="bold" color="gray.600">
            Email:
          </Text>
          <Text>{item.email}</Text>
          <Text fontWeight="bold" color="gray.600">
            Mobile:
          </Text>
          <Text>{item.mobile}</Text>
        </Grid>
        <Text color="gray.600" mt={4}>
          Reason for Visit: <Text as="span">{item.reason}</Text>
        </Text>
        <Text color="gray.600">
          Doctor: <Text as="span">{item.doctor}</Text>
        </Text>
        <Text color="gray.600">
          Specialty: <Text as="span">{item.specilaty}</Text>
        </Text>
        <Flex alignItems="center">
          <Text fontWeight="bold" color="gray.600">
            Status:
          </Text>
          <Badge
            fontSize={"16px"}
            colorScheme={
              item.status === "approved"
                ? "green"
                : item.status === "visited"
                ? "blue"
                : item.status === "cancel"
                ? "red"
                : "yellow"
            }
            ml={2}
          >
            {item.status}
          </Badge>
        </Flex>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text color="gray.600">
            Date: <Text as="span">{item.date}</Text>
          </Text>
          <Button colorScheme="red" onClick={onOpen}>
            Update Appointment
          </Button>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"red.500"}>Update Appointment</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  id : {item._id}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  {item.name}
                </Text>
                <Badge
                  fontSize={"16px"}
                  colorScheme={
                    item.status === "approved"
                      ? "green"
                      : item.status === "visited"
                      ? "blue"
                      : item.status === "cancel"
                      ? "red"
                      : "yellow"
                  }
                  ml={2}
                >
                  Status : {item.status}
                </Badge>
                <br />
                <Select
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                  marginTop={"10px"}
                  placeholder="Select option"
                >
                  <option value="approved">Approved</option>
                  <option value="visited">Visited</option>
                  <option value="cancel">Cancel</option>
                </Select>
                <Text marginTop={"12px"}>
                  Make This Appointment{" "}
                  <Badge
                    fontSize={"16px"}
                    colorScheme={
                      select === "approved"
                        ? "green"
                        : select === "visited"
                        ? "blue"
                        : select === "cancel"
                        ? "red"
                        : "yellow"
                    }
                    ml={2}
                  >
                    {select}
                  </Badge>
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  onClick={handleUpdate}
                  colorScheme="red"
                  variant="outline"
                >
                  Update {loading ? <Spinner /> : ""}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Text color="gray.600">
          Time: <Text as="span">{item.time}</Text>
        </Text>
      </Box>
    </div>
  );
};

export default EachAppointment;
