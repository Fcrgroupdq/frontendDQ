import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
  Badge,
  Link,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import axios from "axios";

const UserAppointmenntView = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/appointment?token=${localStorage.getItem(
          "dqAuthTo"
        )}&status=pending`
      )
      .then((res) => {
        console.log(res.data);
        setAppointment(res.data);
        setLoading(false);
      });
  }, []);

  const handleDownloadPDF = (item) => {
    console.log(item)
    setPdfLoading(true);
    // You can fetch the appointment data from your state or API as needed

    // Send a request to your server to generate the PDF
    axios
    .post(
      "https://drab-blue-mite-belt.cyclic.app/api/appointments/generate-pdf",
      item,
      { responseType: 'arraybuffer' } // Ensure response type is set to 'arraybuffer'
    )
    .then((response) => {
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
  
      // Create a temporary link to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "appointment-details.pdf";
      a.click();
  
      window.URL.revokeObjectURL(url);
      setPdfLoading(false);
    })
    .catch((error) => {
      console.error("Error generating PDF:", error);
      setPdfLoading(false);
    });
  
  };

  if (loading) {
    return (
      <div style={{ fontSize: "20px", color: "red", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  if (appointment.length === 0) {
    return (
      <>
        <Box textAlign="center" py={10} px={6}>
          <InfoIcon boxSize={"50px"} color={"blue.500"} />
          <Heading color={"teal.600"} as="h2" size="xl" mt={6} mb={2}>
            {`Your have not any pending appointment`}
          </Heading>
        </Box>
      </>
    );
  }

  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          {`Your ${appointment.length} appointment is pending now`}
        </Heading>
      </Box>
      {appointment.map((item) => (
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

            <Text fontWeight="bold" color="gray.600" mt={4}>
              Reason for Visit:
            </Text>
            <Text as="span">{item.reason}</Text>

            <Text fontWeight="bold" color="gray.600">
              Doctor:
            </Text>
            <Text as="span">{item.doctor}</Text>
            <Text fontWeight="bold" color="gray.600">
              Specialty:
            </Text>
            <Text as="span">{item.specilaty}</Text>
            <Text fontWeight="bold" color="gray.600">
              Date:
            </Text>
            <Text as="span">{item.date}</Text>
            <Text fontWeight="bold" color="gray.600">
              Time:
            </Text>
            <Text as="span">{item.time}</Text>
          </Grid>
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
            <Box></Box>
            <Flex gap={"20px"}>
              <Button colorScheme="red">
                <Link to={`/doctors/${item.doctorName}`}>
                  See More About Doctor
                </Link>
              </Button>
              <Button onClick={()=>handleDownloadPDF(item)} colorScheme="teal">
                {pdfLoading ? <Spinner /> : "Download PDF"}
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default UserAppointmenntView;
