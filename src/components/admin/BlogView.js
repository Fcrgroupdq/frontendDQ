import {
  Box,
  Heading,
  Spinner,
  Text,
  HStack,
  Tag,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import EachBlogCart from "../Blog/EachBlogCart";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogView = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    Url: "",
    Title: "", // Updated to 'description' to store HTML content
    MetaTitle: "",
    MetaTag: "",
    MetaDescription:"",
  });
  const {Url,Title,MetaTitle,MetaTag,MetaDescription} = formData

  const [postImage, setPostImage] = useState({ image: "" });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, image: base64 });

    if (file) {
      const imageSize = file.size;
      const image = new Image();

      image.onload = function () {
        const width = image.width;
        const widthDisplay = document.getElementById("image-width");
        widthDisplay.textContent = `Image Width: ${width} pixels`;

        if (width < 150 || width > 1400) {
          alert("Image width must be between 350 and 400 pixels.");
          e.target.value = "";
          widthDisplay.textContent = "";
          setPostImage({ ...postImage, image: null });
          return;
        }

        if (imageSize < 20480 || imageSize > 512000) {
          alert("Image size must be between 20 KB and 50 KB.");
          e.target.value = "";
          widthDisplay.textContent = "";
          setPostImage({ ...postImage, image: null });
        }
      };

      image.src = URL.createObjectURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setNewLoading(true);
      axios
        .post("https://drab-blue-mite-belt.cyclic.app/blog", {
          ...formData,
         Description: draftToHtml(
            convertToRaw(editorState.getCurrentContent())
          ),
          
          FeaturedImage: postImage.image,
          Auther:'Admin'
        })
        .then((res) => {
          console.log(res)
     
          toast({
            title: "New Blog Added Success",
            description: "",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          onClose();
          setNewLoading(false);
        });
    } catch (error) {
      console.error("Error adding blog post:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`https://drab-blue-mite-belt.cyclic.app/blog`).then((res) => {
      setBlogs(res.data.reverse());
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  // Url:{type:String,required:true},
  // Title:{type:String,required:true},
  // MetaTitle :{type:String},
  // MetaDescription:{type:String,required:true},
  // MetaTag:{type:String,required:true},
  // FeaturedImage:{type:String,required:true}
  return (
    <div>
      <Button colorScheme="blue" onClick={onOpen}>
        Add a New Blog Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Url</FormLabel>
              <Input
                type="text"
                name="Url"
                value={Url}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="Title"
                value={Title}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Meta Title</FormLabel>
              <Input
                type="text"
                name="MetaTitle"
                value={MetaTitle}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Meta Tag</FormLabel>
              <Input
                type="text"
                name="MetaTag"
                value={MetaTag}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Meta Description</FormLabel>
              <Input
                type="text"
                name="MetaDescription"
                value={MetaDescription}
                onChange={handleChange}
                required
              />
            </FormControl>

            
            <FormControl>
              <FormLabel>Featured Image</FormLabel>
              <label htmlFor="file-upload">Image:</label>
              <input
                required
                type="file"
                name="myFile"
                id="file-upload"
                accept=".jpeg, .png, .jpg, .web"
                size="20480-51200"
                className="custom-file-input"
                onChange={(e) => handleFileUpload(e)}
              />
              <div
                style={{ color: "red", padding: "10px" }}
                id="image-width"
              ></div>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
              />

              {/* <textarea
                disabled
                style={{ width: "100%" }}
                value={draftToHtml(
                  convertToRaw(editorState.getCurrentContent())
                )}
              /> */}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              {newLoading ? <Spinner /> : "Submit"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {blogs.map((item) => (
        <EachBlogCart item={item} />
      ))}
    </div>
  );
};

export default BlogView;

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
