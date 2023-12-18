import DoctorHeader from "../components/doctors/doctorHeader";
import SearchSection from "../components/doctors/searchSection";
import { useState, useEffect } from "react";
import { useContext } from "react";
import searchContext from "../context/searchContext";
import ExtraSearch from "../components/doctors/ExtraSearch";
import Carouse from "../components/Home/Carousel";
import { Box, GridItem, Select, SimpleGrid } from "@chakra-ui/react";
import {Helmet} from "react-helmet";


export default function DoctorsMain() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);

  const { search, setSearch } = useContext(searchContext);

  const getLocationFromChild = (lat, lon, cat, search) => {
    setLatitude(lat);
    setLongitude(lon);
    setCategory(cat);
    setLocation(search)
  };

  useEffect(() => {
    let obj = { ...search };
    if (latitude) {
      obj.latitude = latitude;
    }
    if (longitude) {
      obj.longitude = longitude;
    }
    if (category) {
      obj.category = category;
    }
    if(location){
      obj.location = location
    }

    setSearch(obj);
  }, [latitude, longitude, category]);

  const handleDayChange = (e) => {
    setSearch({ ...search, day: e.target.value });
  };

  const hnadlePriceChange = (e) => {
    setSearch({
      ...search,
      min: e.target.value.split(",")[0],
      max: e.target.value.split(",")[1],
    });
  };

  return (
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title>List of Best Doctors Near You: Doctors Queries</title>
                <meta name="description" content=" Find the best doctors near you with Doctors Queries - your trusted source for the top healthcare professionals in your area. Quickly and easily access a list of the best doctors near you." />
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="keywords" content=" best doctors near you, find best doctors near you" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@doctorsqueries" />
                <meta name="twitter:title" content="Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta name="twitter:description" content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta name="twitter:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
            </Helmet>
      
      <ExtraSearch getLocationFromChild={getLocationFromChild} />

      {filterVisible ? (
        <Box p="5px" background="#FA6B6C">
          <SimpleGrid
            w={["90%", "80%", "70%"]}
            m="auto"
            columns={2}
            spacing={4}
          >
            <Select
              onChange={hnadlePriceChange}
              h="40px"
              p="5px"
              bg="white"
              placeholder="Select fees Range"
              paddingLeft="6px" // Add 6px of padding to the left side of the text
            >
              <option value={["0", "500"]}>0 - 500</option>
              <option value={["500", "1000"]}>500 - 1000</option>
              <option value={["1000", "1500"]}>1000 - 1500</option>
              <option value={["1500", "2000"]}>1500 - 2000</option>
              <option value={["2000", "3000"]}>2000 - 3000</option>
            </Select>
            <Select
              onChange={handleDayChange}
              h="40px"
              p="5px"
              bg="white"
              placeholder="Select A Day"
              paddingLeft="6px" // Add 6px of padding to the left side of the text
            >
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </Select>
          </SimpleGrid>
        </Box>
      ) : (
        ""
      )}
      <div style={{ marginTop: "20px" }}>
        {/* <Carouse /> */}

        <DoctorHeader setFilterVisible={setFilterVisible} />
      </div>
    </div>
  );
}
