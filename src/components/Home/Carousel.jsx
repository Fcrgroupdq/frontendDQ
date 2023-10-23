import { useState, useEffect } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import bg from "../../assets/bg.jpg";
import { FiSkipForward, FiSkipBack } from "react-icons/fi";
import axios from "axios";

let images = [
  "https://doctorsqueries.com/wp-content/uploads/2023/10/Dq-Banner_3-1.webp",
  "https://doctorsqueries.com/wp-content/uploads/2023/10/Dq-Banner_2-1.webp",
  "https://doctorsqueries.com/wp-content/uploads/2023/10/Dq-Banner_1-1.webp",
];

const imageWidth = "80%"; // Set your desired width
const imageHeight = "300px"; // Set your desired height

const Carouse = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    axios.get("https://drab-blue-mite-belt.cyclic.app/banner").then((res) => {
      res.data.map((item, index) => {
        images[index] = res.data[index].Image;
      });
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={["100%", "80%"]}
          margin={"auto"}
        >
          {/* <Box p={["6px", "12px"]}>
          <Button p={"5px"} colorScheme="red" onClick={handlePrevClick}>
            <FiSkipBack />
          </Button>
        </Box> */}
          <Image
            h={["120px", "200px", "300px"]}
            objectFit={"fill"}
            borderRadius={["10px", "20px", "30px"]}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            // style={{
            //   objectFit: "fill",
            //   height: "120px",
            //   borderRadius: "10px",
            // }}
          />
          {/* <Box p={["6px", "12px"]}>
          <Button p={"5px"} colorScheme="red" onClick={handleNextClick}>
            <FiSkipForward />
          </Button>
        </Box> */}
        </Box>
        <br />
        <br />
      </>
    );
  }
};

export default Carouse;
