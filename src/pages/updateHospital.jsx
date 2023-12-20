import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";

const UpdateHospital = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [established, setEstablished] = useState(0);
  const [beds, setBeds] = useState(0);
  const [about, setAbout] = useState("");
  const [features, setFeatures] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [file, setFile] = useState(null);
  const [postImage, setPostImage] = useState({ image: "" });
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false)

  const { id } = useParams();

  const getData = () => {
    axios
      .get(`https://drab-blue-mite-belt.cyclic.app/hospital/${id}`)
      .then((res) => {
        setName(res.data.name);
        setLocation(res.data.location);
        setAbout(res.data.about);
        setSpecialist(res.data.specialist);
        setBeds(res.data.beds);
        setFeatures(res.data.features);
        setEstablished(res.data.established);
        setPostImage({ image: res.data.image });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const toast = useToast();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const url = URL.createObjectURL(selectedFile);
    setProfilePictureUrl(url);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostImage({ ...postImage, image: base64 });

    if (file) {
      const imageSize = file.size; // Get the size of the image in bytes
      const image = new Image();

      image.onload = function () {
        const width = image.width; // Get the width of the image
        const widthDisplay = document.getElementById("image-width");
        widthDisplay.textContent = `Image Width: ${width} pixels`;

        if (width < 150 || width > 400) {
          alert("Image width must be between 350 and 400 pixels.");
          // Clear the selected file (optional)
          e.target.value = "";
          widthDisplay.textContent = ""; // Clear the displayed width
          setPostImage({ ...postImage, image: null }); // Clear the image in your state
          return; // Exit the function if width is not as expected
        }

        if (imageSize < 20480 || imageSize > 212000) {
          alert("Image size must be between 20 KB and 200 KB.");
          // Clear the selected file (optional)
          e.target.value = "";
          widthDisplay.textContent = ""; // Clear the displayed width
          setPostImage({ ...postImage, image: null }); // Clear the image in your state
        }
      };

      image.src = URL.createObjectURL(file);
    }
  };

  const newHospital = {
    name,
    location,
    about,
    features,
    specialist,
    beds,
    established,
    image: postImage.image,
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setUpdateLoading(true)
    axios
      .patch(
        `https://drab-blue-mite-belt.cyclic.app/hospital/update/${id}`,
        newHospital
      )
      .then((res) => {
        toast({
            title:res.data.msg,
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
      }).finally(()=>{
        setUpdateLoading(false)
      })
  };

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>{<Spinner />}</h1>;
  }
  return (
    <form>
      <div className="space-y-12 p-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" text-3xl leading-7 mt-4 mb-4 text-purpul3">
            Add a new Hospital
          </h2>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hospital Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="username"
                    className="block pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Doctor name"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Add more details about the Hospital
            </label>
            <div className="mt-2">
              <textarea
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                id="features"
                name="features"
                rows={5}
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              add `#` between two Details.
            </p>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <label htmlFor="file-upload" className="custom-file-upload">
            <img src={""} alt="" />
          </label>
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
          <div style={{ color: "red", padding: "10px" }} id="image-width"></div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full ">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Specialist
              </label>
              <div className="mt-2">
                <input
                  value={specialist}
                  onChange={(e) => setSpecialist(e.target.value)}
                  type="text"
                  name="specialist"
                  id="specialist"
                  autoComplete="specialist"
                  className="block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full ">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Address
              </label>
              <div className="mt-2">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="location"
                  className="block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="established"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                established
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="established"
                  id="established"
                  value={established}
                  onChange={(e) => setEstablished(e.target.value)}
                  autoComplete="established"
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                beds
              </label>
              <div className="mt-2">
                <input
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  type="text"
                  name="beds"
                  id="beds"
                  autoComplete="beds"
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-md bg-purpul4 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {updateLoading ? <Spinner /> : "update"}
        </button>
      </div>
    </form>
  );
};

export default UpdateHospital;

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
