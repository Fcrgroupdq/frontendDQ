import { FormControl, FormLabel, Input, Box, Button, useToast, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditorState,convertToRaw, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const UpdateBlog = () => {
  const { MetaTitle } = useParams();
  console.log(MetaTitle)

  const [loading, setLoading] = useState(true);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState();
  const [postImage, setPostImage] = useState({ image: "" });
 const  [UpdateBlog,setUpdate] = useState(false)

 const toast = useToast()
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://drab-blue-mite-belt.cyclic.app/blog/${MetaTitle}`)
      .then((res) => {
        console.log(res.data)
        setFormData(res.data);
        const initialHtmlContent = res.data[0].MetaDescription;

        // Convert HTML content to ContentState
        const blocksFromHTML = convertFromHTML(initialHtmlContent);
        const contentState = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );

        // Set the initial content in the rich text editor
        setEditorState(EditorState.createWithContent(contentState));
        setPostImage({ ...postImage, image: res.data[0].FeaturedImage });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [MetaTitle]);

//   console.log(formData._id)

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

  const handleUpdate = () => {
    setUpdate(true)
    axios.patch(`https://drab-blue-mite-belt.cyclic.app/blog/update/${formData[0]._id}`,{
        ...formData,
        FeaturedImage:postImage.image,
        MetaDescription:draftToHtml(
            convertToRaw(editorState.getCurrentContent())
          ),
    })
    .then(res => {
        setUpdate(false)
        toast({
            title:res.data.msg,
            description: "",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <Box width={["90%", "80%", "70%"]} m={"auto"} p={["10px", "30px", "50px"]}>
      <FormControl>
        <FormLabel>Url</FormLabel>
        <Input
          type="text"
          name="Url"
          value={formData[0].Url}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          name="Title"
          value={formData[0].Title}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Meta Title</FormLabel>
        <Input
          type="text"
          name="MetaTitle"
          value={formData[0].MetaTitle}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Meta Tag</FormLabel>
        <Input
          type="text"
          name="MetaTag"
          value={formData[0].MetaTag}
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
        <div style={{ color: "red", padding: "10px" }} id="image-width"></div>
      </FormControl>

      <img src={postImage.image} />

      <FormControl mt={4}>
        <FormLabel>Meta-Description</FormLabel>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
        />
      </FormControl>
      <Button w={'150px'} onClick={handleUpdate}>{UpdateBlog?<Spinner/>:"Update"}</Button>
    </Box>
  );
};

export default UpdateBlog;

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
