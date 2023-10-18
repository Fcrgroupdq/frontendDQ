import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Grid, Badge, Flex, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Allapointment = () => {
  const [userAppointment, setUserAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select,setSelect] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/appointment?token=${localStorage.getItem("dqAuthTo")}&status=${select}`
      )
      .then((res) => setUserAppointment(res.data))
      .finally(() => setLoading(false));
  }, [select]);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "530px",
          fontSize: "44px",
          color: "red",
        }}
      >
        Loading...
      </div>
    );
  }

  if (userAppointment.length === 0) {
    <Box height={530} textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        you have not book any appointment
      </Heading>
      <Text color={"gray.500"}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>;
  }
  return (
    <div>
      <SimpleGrid columns={[1, 2]} margin={"22px"}>
        <Heading color={"blue.400"} width={"70%"}>
          See all Your Appointment
        </Heading>
        <Select value={select} onChange={(e)=>setSelect(e.target.value)} placeholder="Filter your Appointment">
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="visited">Visited</option>
          <option value="cancel">Cancel</option>
        </Select>
      </SimpleGrid>

      {userAppointment.map((item) => (
        <Box
          bg="white"
          p={6}
          rounded="md"
          boxShadow="md"
          width="100%"
          marginTop={"12px"}
          marginBottom={'20px'}
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
            Doctor: <Text as="span">{item.doctorName}</Text>
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
          <Box display={'flex'} justifyContent={'space-between'}>
          <Text color="gray.600">
            Date: <Text as="span">{item.date}</Text>
          </Text>
          <Button colorScheme="red"><Link to={`/doctors/${item.doctorName}`}>See More About Doctor</Link></Button>
          </Box>
          <Text color="gray.600">
            Time: <Text as="span">{item.time}</Text>
          </Text>
        </Box>
      ))}
    </div>
  );
};

export default Allapointment;
