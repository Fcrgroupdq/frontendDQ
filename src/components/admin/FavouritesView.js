import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack, useMediaQuery } from "@chakra-ui/react"; // Corrected import
import NewDoctorCart from "./doctor/NewDoctorCart";

const FavouritesView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(1)

  const [isLargerThanTablet] = useMediaQuery("(min-width: 868px)");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllText, setShowAllText] = useState("See More");
  const [refrace, setRefrace] = useState(false);

  const refract = () => {
    setRefrace(!refrace);
  };

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

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/doctors/pending/?page=${page}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.pendingDoctors);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      });
  }, [refrace,page]);

  // console.log(data)

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      {data.map((data) => (
        <NewDoctorCart refract={refract} data={data} />
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
        <Button size="sm" colorScheme="red" disabled>
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

export default FavouritesView;
