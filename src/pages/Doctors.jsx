import DoctorHeader from "../components/doctors/doctorHeader";
import SearchSection from "../components/doctors/searchSection";
import { useState, useEffect } from "react";
import { useContext } from "react";
import searchContext from "../context/searchContext";
import ExtraSearch from "../components/doctors/ExtraSearch";
import Carouse from "../components/Home/Carousel";
import { Box, GridItem, Select, SimpleGrid } from "@chakra-ui/react";

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
