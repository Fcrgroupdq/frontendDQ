import { Button, ChakraProvider, Spinner, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DoctorCart from "./doctorCart";
import searchContext from "../../context/searchContext";

export default function DoctorHeader({setFilterVisible}) {
  const { search } = useContext(searchContext);
  // alert(location,search)
 

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getDoctors = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://drab-blue-mite-belt.cyclic.app/doctors?page=${currentPage}&status=approved`,
        {
          headers: {
            token:
              "YOUR_API_TOKEN_HERE",
          },
        }
      );
      setDoctors(response.data.doctor);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getNearestDoctor = async () => {
    // console.log(search)
    setLoading(true);
    try {
      const response = await axios.get(
        `https://drab-blue-mite-belt.cyclic.app/doctors/doctors/near/?lat=${search.latitude}&lon=${search.longitude}&cat=${search.category}&status=approved&day=${search.day}&min=${search.min}&max=${search.max}&query=${search.location}`,
        {
          headers: {
            token: "YOUR_API_TOKEN_HERE",
          },
        }
      );
    
      // Splitting doctors into premium and non-premium arrays
      const premiumDoctors = response.data.filter(doctor => doctor.isPremium);
      const nonPremiumDoctors = response.data.filter(doctor => !doctor.isPremium);
    
      // Concatenating premium and non-premium doctors (premium first)
      const sortedDoctors = premiumDoctors.concat(nonPremiumDoctors);
    
      setDoctors(sortedDoctors);
      setShowPagination(false);
      setFilterVisible(true);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search.latitude === "") {
      getDoctors();
    }
  }, [currentPage]);

  useEffect(() => {
    if (search.latitude) {
      getNearestDoctor();
    }
  }, [search.category, search.latitude,,search.day,search.min]);

  if (loading) {
    return (
      <ChakraProvider>
        <h1 style={{ fontSize: "30px", textAlign: "center" }}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            ""
          )}
        </h1>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <div>
        {doctors.length === 0 ? (
          <h1
            style={{
              color: "red",
              fontSize: "24px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            No Doctor Found At Your Location
          </h1>
        ) : (
          doctors.map((item, index) => (
            <div key={Math.random()}>
              
              
              <DoctorCart data={item} />
            </div>
          ))
        )}
      </div>

      {/* Pagination controls */}
      {showPagination === false ? (
        ""
      ) : (
        <Stack
        direction={{ base: "row", md: "row", lg: "row" }} // Stack horizontally on small and medium screens, vertically on large screens
        justifyContent="center"
        alignItems="center"
        mt={{ base: "4", md: "0" }} // Adjust margin-top for different screen sizes
        spacing={2} // Adjust the spacing between pagination buttons
        flexWrap="wrap" // Allow buttons to wrap to the next row on small screens
      >
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            size="sm"
            colorScheme={currentPage === index + 1 ? "red" : "gray"}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Stack>
      
      )}
    </ChakraProvider>
  );
}
