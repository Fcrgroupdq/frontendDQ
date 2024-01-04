import axios from "axios";
import React, { useEffect, useState } from "react";
import MainCart from "../../DoctorDashboard/OverviewCart/MainCart";
import { Button, Heading, Stack } from "@chakra-ui/react";
import AllDoctorCart from "./AllDoctorCart";
import TableOne from "./TableRecent";

const Alldoctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState()

  const getData = () => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/doctors/approved/?page=${page}`
      )
      .then((res) => {
        setLoading(false);
        setDoctor(res.data.pendingDoctors);
        setTotalPages(res.data.totalPages)
      });
  }

  useEffect(() => {
   getData()
  }, [page]);

  const refrace = () => {
    getData()
  };

  if (loading) {
    return (
      <h2 style={{ color: "red", textAlign: "center", fontSize: "20px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div>
      {doctor.map((item) => (
        <AllDoctorCart key={Math.random()} doctor={item} refrace={refrace} />

      ))}
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
          onClick={() => setPage(page - 1)}
          isDisabled={page === 1}
        >
          Previous
        </Button>
         <Button
          size="sm"
          colorScheme="red"
          
          disabled
        >
          {page}
        </Button>
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => setPage(page + 1)}
          isDisabled={page === totalPages}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default Alldoctor;
