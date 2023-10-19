import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  ChakraProvider,
  useMediaQuery,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DoctorCart({ data }) {
  const [isLargerThanTablet] = useMediaQuery("(min-width: 968px)");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllText, setShowAllText] = useState("See More");

  const toggleShowFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
    setShowAllText(showAllFeatures ? "See More" : "See Less");
  };

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
    <ChakraProvider>
      <Container py={10} maxW={isLargerThanTablet ? "container.xl" : "100%"}>
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
            w={["150px","250px"]}
            src={data.image}
            alt={data.name}
          />
          <Box
            ml={isLargerThanTablet ? 6 : 0}
            mt={isLargerThanTablet ? 0 : 4}
            textAlign={isLargerThanTablet ? "left" : "left"}
          >
            <Heading as="h1" size="xl" mb={2}>
              {data.name}
            </Heading>
            <SimpleGrid
              display={"flex"}
              justifyContent={"space-between"}
              column={[1, null, 2]}
            >
              <Box>
                <Text fontSize="lg" color="teal.500" fontWeight="bold" mb={2}>
                  {data.city ? `${data?.city},${data?.state}`:''}
                </Text>
              </Box>
              <Box>
                <Text fontSize="2xl" color="blue.500" fontWeight="bold" mb={2}>
                  {Math.floor(data.distance)
                    ? Math.floor(data.distance) === 0
                      ? "1 Km"
                      : `${Math.floor(data.distance)} Km`
                    : ""}
                </Text>
              </Box>
            </SimpleGrid>
            <Text fontSize="lg" color="red.500" fontWeight="bold" mb={2}>
           { data?.spacility?.charAt(0).toUpperCase() + data?.spacility?.slice(1)}
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Fees: ₹{data.fees}
            </Text>
            <Text fontSize="md" color="gray.500" mb={4}>
              {data.exp}
            </Text>
            <Text fontSize="md" color="gray.500" mb={4}>
              {data.org}
            </Text>
            <List spacing={2}>
              {visibleFeatures.map((feature, index) => (
                <ListItem key={index}>
                  <ListIcon textAlign={'left'} as={CheckIcon} color="red.500" />
                  {feature}
                </ListItem>
              ))}
            </List>

            <Button mt={2} ml={2} size="sm" colorScheme="red">
              <Link to={`/doctors/${data._id}/appointment`}>
                Book Appointment
              </Link>
            </Button>
            <Button mt={2} size="sm" onClick={toggleShowFeatures}>
              <Link to={`/doctors/${data._id}`}>show more</Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
