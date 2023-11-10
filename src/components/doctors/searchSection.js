import React, { useContext, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import {
  SimpleGrid,
  Input,
  Select,
  Container,
  Box,
  Heading,
  Text,
  Button,
  ChakraProvider,
  Spinner,
  Stack,
  useToast,
  Flex,
} from "@chakra-ui/react";

import axios from "axios";
import searchContext from "../../context/searchContext";
import { Search2Icon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const API_KEY = "125c85ac34cf44adb8a0dedab61ca3da";

const SearchSection = ({ getLocationFromChild }) => {
  const { search: contextSearch, setSearch: contextSetSearch } =
    useContext(searchContext);
  const [currentLocation, setCurrentLocation] = useState(false);
  const [search, setSearch] = useState(contextSearch.location);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [category, setCategory] = useState(contextSearch.categoryName);
  // Array of headings
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0); // Initial index

  let dropDowns = [
    "Urology",
    "Laparoscopic Surgeon",
    "Gastroenterology",
    "General Surgeon",
    "Cardiac Surgeon",
    "Dentist",
    "Dermatologist",
    "Endoscopy",
    "Ent",
    "Eye Surgeon",
    "General Physician",
    "Hair Transplant",
    "Hematology",
    "Infectious Disease",
    "Kidney Transplant",
    "M.D. MEDICINE",
    "Nephrology",
    "Neuro Surgeon",
    "Neurologist",
    "Oncologist",
    "Orthopedic",
    "Pediatric",
    "Plastic Surgeon",
    "Pulmonology",
    "Senior Consultant",
    "Thoracic Surgeon",
    "Anesthesiology",
    "Audiology and Speech",
    "Internal Medicine",
    "IVF and Infertility",
    "Lab Medicine",
    "Obstetrics and Gynecology",
    "Ophthalmology",
    "Physiotherapy",
    "Plastic Surgery & Cosmetology",
    "Psychiatrist",
    "Radiology",
    "Rheumatology",
    "Homeopathy",
  ];

  const [currentHeading, setCurrentHeading] = useState(dropDowns[0]);

  const toast = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % dropDowns.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  

  useEffect(() => {
    setCurrentHeading(dropDowns[currentHeadingIndex]);
  }, [currentHeadingIndex]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const searchPlace = `${FiSearch} enter Your Location`;

  dropDowns = dropDowns.sort((a, b) => b.localeCompare(a)).reverse();

  async function geocodeCity(city) {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          city
        )}&key=${API_KEY}`
      );
      const { results } = response.data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry;
        return { latitude: lat, longitude: lng };
      }
      return null;
    } catch (error) {
      console.error("Error geocoding city:", error);
      return null;
    }
  }

  function GetLocation() {
    if ("geolocation" in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Retrieve latitude and longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          if (category) {
            getLocationFromChild(latitude, longitude, category, loading);
          } else {
            toast({
              title: `please select a category`,
              position: "top-right",
              isClosable: true,
              status: "error",
              duration: 4000,
            });
          }

          // Update state with the location coordinates
        },
        function (error) {
          // Handle errors
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }

  const handleSearch = async () => {
    if (category === "") {
      toast({
        title: `Please select Treatment Category`,
        position: "top-right",
        isClosable: true,
        status: "error",
        duration: 4000,
      });
      return;
    }
    if (search === "") {
      toast({
        title: `please enter your location`,
        position: "top-right",
        isClosable: true,
        status: "error",
        duration: 4000,
      });
      return;
    }
    //  else if (category === "") {
    //   toast({
    //     title: `please select your category`,
    //     position: "top-right",
    //     isClosable: true,
    //     status: "error",
    //     duration: 4000,
    //   });
    // }
    else {
      setLoading(true);
      if (search === "Near Me") {
        GetLocation();
      } else {
        const location = await geocodeCity(`${search},India,india`);
        getLocationFromChild(
          location.latitude,
          location.longitude,
          category,
          loading
        );
      }
      setLoading(false);
      contextSetSearch({
        ...contextSearch,
        location: search,
        categoryName: category,
      });
    }
  };


  const handleCurrentLocation = () => {
    if ("geolocation" in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Retrieve latitude and longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Display a success alert
          toast({
            title: "Location Access Successful",
            description: "Your location has been accessed successfully.",
            position: "top-right",
            isClosable: true,
            status: "success",
            duration: 4000,
          });

          setCurrentLocation(false);
          setSearch("Near Me");
          GetLocation();

          // Continue with your logic (e.g., pass location to the parent component)
          getLocationFromChild(latitude, longitude, category, loading);
        },
        function (error) {
          // Handle errors and display a failure alert
          setError(error.message);

          // Display an error alert
          toast({
            title: "Location Access Failed",
            description:
              "Unable to access your location. Please check your settings.",
            position: "top-right",
            isClosable: true,
            status: "error",
            duration: 4000,
          });
        }
      );
    } else {
      // Display an error alert if geolocation is not supported
      setError("Geolocation is not supported by this browser.");
      toast({
        title: "Geolocation Not Supported",
        description: "Your browser does not support geolocation.",
        position: "top-right",
        isClosable: true,
        status: "error",
        duration: 4000,
      });
    }
  };

  const handleUserLocation = (e) => {
    setCurrentLocation(true);
    setSearch(e.target.value);
  };

  // return (
  //   <ChakraProvider>
  //    <div style={{border:'1px solid black',borderRadius:'15px',padding:'15px',marginTop:'20px'}}>
  //    <div style={{ width: "80%", margin: "auto" }}>
  //       <SimpleGrid  columns={[1, 3]} spacing="40px">
  //         <div>
  //         <div style={{display:'flex',gap:'6px'}}>
  //         <FiSearch style={{ width: '40px', height: '40px' }} /><br/>
  //           <Input
  //             name="search"
  //             onChange={handleUserLocation}
  //             value={search}
  //             placeholder="Enter Your Location"
  //             size="md"
  //           />
  //         </div>

  //           {currentLocation ? (
  //             <Button onClick={handleCurrentLocation} colorScheme="red" mt={2}>
  //               Use my Current Location
  //             </Button>
  //           ) : (
  //             ""
  //           )}
  //         </div>
  //         <div>
  //           <Select
  //             name="category"
  //             value={category}
  //             onChange={handleCategoryChange}
  //             placeholder="Select A Category"
  //           >
  //             {
  //               dropDowns.map(item => <option value={item.toLowerCase()}>{item}</option>)
  //             }
  //           </Select>
  //         </div>
  //         <div style={{ width: "20%" }}>
  //           <Button onClick={handleSearch} colorScheme="red">
  //             {loading ? <Spinner /> : "Search"}
  //           </Button>
  //         </div>
  //       </SimpleGrid>
  //     </div>
  //    </div>
  //   </ChakraProvider>
  // );

  return (
    <>
      <Box backgroundColor={"#fef6f6"} height={"400px"}>
        <Flex
          width={"80%"}
          margin={"auto"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box mt={"40px"} height={["100px", "150px", "200px"]}>
            <Heading
              as="h2"
              size={["lg", "2xl", "3xl"]}
              noOfLines={1}
              fontWeight="medium"
            >
              Book Your <span style={{ color: "red" }}>{currentHeading}</span>
            </Heading>
            <Heading
              as="h2"
              size={["lg", "2xl", "3xl"]}
              noOfLines={1}
              fontWeight="medium"
            >
              who take your Concerns
            </Heading>
          </Box>
          <Box>
            {/* <img width={'200px'} src='https://banner2.cleanpng.com/20180702/zgx/kisspng-health-care-medicine-emergency-medical-services-ph-cloud-banner-5b39c7735e84d6.1182360015305132673872.jpg' /> */}
          </Box>
        </Flex>

        <Box width={"80%"} margin={"auto"}>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            mt={{ base: "10px", md: "10px" }}
            // p={{ base: "0", md: "12px" }}
            border="1.5px solid gray"
            borderRadius="5px"
            backgroundColor="white"
          >
            {/* Left section */}

            <Flex
              gap={"5px"}
              flexDirection="row"
              width={{ base: "100%", md: "30%" }}
              m={"20px"}
            >
              {/* Location icon */}
              <Box>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ width: "25px" }}
                />
              </Box>
              {/* Location input */}
              <Input
                onChange={handleUserLocation}
                value={search}
                name="search"
                variant="unstyled"
                placeholder="Enter Your Location"
              />
            </Flex>

            {/* Middle section */}
            {window.innerWidth >= 768 && (
              <Box
                mt="5px"
                mb="5px"
                border="0.5px solid gray"
                height={{ base: "50px", md: "auto" }}
              ></Box>
            )}
            <Flex
              m={"20px"}
              flexDirection="row"
              width={{ base: "100%", md: "30%" }}
            >
              {/* Search icon */}
              <Box mt={{ base: "20px", md: "0" }}>
                <Search2Icon w="25px" mr="7px" />
              </Box>
              {/* Category dropdown */}
              <Select
                name="category"
                value={category}
                onChange={handleCategoryChange}
                mt={{ base: "30px", md: "0" }}
                variant="unstyled"
                placeholder="Select a category"
              >
                {/* Dropdown options */}
                {dropDowns.map((item) => (
                  <option
                    key={item}
                    style={{ padding: "5px" }}
                    value={item.toLowerCase()}
                  >
                    {item}
                  </option>
                ))}
              </Select>
            </Flex>

            {/* Right section */}
            {window.innerWidth >= 768 && (
              <Box
                mt="5px"
                mb="5px"
                border="0.5px solid gray"
                height={{ base: "50px", md: "auto" }}
              ></Box>
            )}

            <Box>
              <Button
                padding={["15px", ""]}
                onClick={handleSearch}
                colorScheme="red"
                height={"100%"}
                borderRadius={"none"}
                size="md" // Set the button size to "md" for all screen sizes
                width={{ base: "100%", md: "auto" }} // Set the width to "100%" on mobile screens and "auto" on larger screens
                fontSize="md" // Adjust the font size if needed
              >
                {loading ? <Spinner /> : "Search"}
              </Button>
            </Box>
          </Flex>
          {currentLocation ? (
            <Button onClick={handleCurrentLocation} colorScheme="red" mt={2}>
              Use my Current Location
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default SearchSection;
