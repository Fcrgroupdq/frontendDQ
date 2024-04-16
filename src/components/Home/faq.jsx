import React from 'react';
import {
  Box,
  Heading,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function YourComponent() {
  const displayImage = useBreakpointValue({ base: 'none', md: 'block' }); // Show image on medium screens and above

  return (
    <Box
      width={{ base: '100%', md: '90%' }}
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap-reverse" // Reverse wrap on small screens to keep text above the image
      alignItems={{ base: 'flex-start', md: 'center' }} // Align items differently on small screens
    >
      <Box
        margin="20px"
        padding="40px"
        width={{ base: '100%', md: '50%' }}
        maxWidth={{ base: '100%', md: '550px' }} // Adjust the max width for better visibility
      >
        <img
          width="120%"
          height="auto" // Maintain aspect ratio
          src="https://d1uhlocgth3qyq.cloudfront.net/provider-message-1232w___4b6fa.jpg"
          alt="Your Image"
        />
      </Box>
      <Box
      width={{ base: '100%', md: '50%' }}
        pt={{ base: '20px', md: '0' }}
        flexDirection={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
        order={{ base: 2, md: 1 }} // Control the order of the second child Box
      >
        <Heading padding="5px" as="h4" size="md">
        Find Doctors Near You
        </Heading>
        <Heading padding="5px" as="h2" size="xl">
        Consult Top Doctors For Any Health Concern
        </Heading>
        <ol>
          <li style={{ fontSize: '20px', paddingLeft: '10px' }}>
            Reach patients in your area looking for a new provider
          </li>
          <li style={{ fontSize: '20px', paddingLeft: '10px' }}>
            Fill last-minute openings in your schedule
          </li>
          <li style={{ fontSize: '20px', paddingLeft: '10px' }}>
            Strengthen your online reputation with verified reviews
          </li>
        </ol>
        <Button margin="12px" colorScheme="red">
          List Your Practice
        </Button>
      </Box>
    </Box>
  );
}
