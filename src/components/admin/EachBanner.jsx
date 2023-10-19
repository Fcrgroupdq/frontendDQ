import {
  Button,
  Box,
  Image,
  Text,
  Spinner,
  useDisclosure,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const EachBanner = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bannerURL, setBannerUrl] = useState("");
  const [name, setName] = useState("");
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postImage, setPostImage] = useState({ image: "" });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostImage({ ...postImage, image: base64 });
  
    if (file) {
      const imageElement = document.createElement("img");
  
      imageElement.onload = function () {
        const width = imageElement.width; // Get the width of the image
        const widthDisplay = document.getElementById("image-width");
        widthDisplay.textContent = `Image Width: ${width} pixels`;
  
        const imageSize = file.size; // Get the size of the image in bytes


        if (imageSize < 20480 || imageSize > 153600) {
          alert(`Image size must be between 20 KB and 150 KB. and given size is ${imageSize/1024} kB`);
          e.target.value = "";
          widthDisplay.textContent = "";
          setPostImage({ ...postImage, image: null });
        }
      };
  
      imageElement.src = URL.createObjectURL(file);
    }
  };
  

  const toast = useToast();

  const handleUpdate = (id) => {
    if (name == "" || postImage.image === "") {
      alert("please fill all the fields");
      return;
    }
    setLoading(true);
    axios
      .patch(`https://drab-blue-mite-belt.cyclic.app/banner/update/${id}`, {
        Image: postImage.image,
        name,
      })
      .then((res) => {
        setUpdate(!update);
        setLoading(false);
        toast({
          title: `${res.data.msg}`,
          position: "top-right",
          isClosable: true,
          status: "success",
          duration: 4000,
        });
      });
  };

  return (
    <div>
      <Box mt={"20px"}>
        <Image  src={item.Image} alt="banner" />
        <Text>{item.name}</Text>
        <Button onClick={onOpen} colorScheme="red">
          Update Banner
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update This banner</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={item.Image} />
              <br />
              <label htmlFor="file-upload" className="custom-file-upload">
                <img src={postImage.image} alt="" />
              </label>
              <br />

              <label for="file-upload">Image:</label>
              <input
                type="file"
                name="myFile"
                id="file-upload"
                accept=".jpeg, .png, .jpg, .web"
                size="20480-51200"
                class="custom-file-input"
                onChange={(e) => handleFileUpload(e)}
              />
              <div
                style={{ color: "red", padding: "10px" }}
                id="image-width"
              ></div>
              <br />
              <Input
                value={name}
                required={true}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Updated Name"
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="red"
                onClick={(e) => handleUpdate(item._id)}
                variant="ghost"
              >
                {loading ? <Spinner /> : "Update"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default EachBanner;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
