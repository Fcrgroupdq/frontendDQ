import React from "react";
import { Box, Heading, Flex, Image } from "@chakra-ui/react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

export default function YourComponent() {
  return (
    <Box padding={["10px", "20px", "40px"]} backgroundColor="#fef6f6">
      <Heading
        textAlign="center"
        fontSize={["xl", "2xl", "3xl"]}
        marginBottom={["20px", "60px"]}
      >
        Let’s get you a doc who gets you
      </Heading>

      <Flex flexWrap="wrap" justifyContent="space-evenly" alignItems="center">
        <Box
          borderRadius="12px"
          backgroundColor="white"
          marginBottom="20px"
          width={["100%", "45%", "30%"]} // Adjust the width for different screen sizes
          textAlign="center"
        >
          <Image
            width="80%"
            src={img1}
            alt="Image 1"
            mx="auto" // Center the image horizontally
          />
          <Heading
            mb={"20px"}
            padding={"10px"}
            fontSize={"20px"}
            as="h5"
            size="sm"
          >
            Best Care from Us
          </Heading>
        </Box>

        <Box
          borderRadius="12px"
          backgroundColor="white"
          marginBottom="20px"
          width={["100%", "45%", "30%"]} // Adjust the width for different screen sizes
          textAlign="center"
        >
          <Image
            width="80%"
            src={img2}
            alt="Image 2"
            mx="auto" // Center the image horizontally
          />
          <Heading
            mb={"20px"}
            padding={"10px"}
            fontSize={"20px"}
            as="h5"
            size="sm"
          >
            Book an Appointment with Doctor
          </Heading>
        </Box>

        <Box
          borderRadius="12px"
          backgroundColor="white"
          marginBottom="20px"
          width={["100%", "45%", "30%"]} // Adjust the width for different screen sizes
          textAlign="center"
        >
          <Image
            width="80%"
            src={img3}
            alt="Image 2"
            mx="auto" // Center the image horizontally
          />
          <Heading
            mb={"20px"}
            padding={"10px"}
            fontSize={"20px"}
            as="h5"
            size="sm"
          >
            Read reviews from users
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
