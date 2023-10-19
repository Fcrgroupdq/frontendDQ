import { Spinner, useToast } from "@chakra-ui/react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";

export default function Add_doctors() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [spacility, setSpacility] = useState("");
  const [fees, setFees] = useState("");
  const [exp, setExp] = useState("");
  const [org, setOrg] = useState("");
  const [features, setFeatures] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [file, setFile] = useState(null);
  const [Expertise, setExpertise] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Display the selected profile picture
    const url = URL.createObjectURL(selectedFile);
    setProfilePictureUrl(url);
  };
  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = [
    "9:00 am to 10:00 am",
    "10:00 am to 11:00 am",
    "11:00 am to 12:00 pm",
    "12:00 pm to 01:00 pm",
    "01:00 pm to 02:00 pm",
    "02:00 pm to 03:00 pm",
    "03:00 pm to 04:00 pm",
    "04:00 pm to 05:00 pm",
    "05:00 pm to 06:00 pm",
  ];

  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [postImage, setPostImage] = useState({ image: "" });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createPost(postImage)
  //   console.log("Uploaded")
  // }

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

  const handleSelectTime = (e) => {
    const selectedTimeSlot = e.target.value;
    if (selectedTimeSlot && !selectedTimeSlots.includes(selectedTimeSlot)) {
      setSelectedTimeSlots([...selectedTimeSlots, selectedTimeSlot]);
    }
  };

  const handleRemoveTimeSlot = (timeSlot) => {
    const updatedTimeSlots = selectedTimeSlots.filter(
      (slot) => slot !== timeSlot
    );
    setSelectedTimeSlots(updatedTimeSlots);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    const selectedDay = e.target.value;
    if (!selectedDays.includes(selectedDay)) {
      setSelectedDays([...selectedDays, selectedDay]);
    }
  };

  const handleRemoveDay = (dayToRemove) => {
    const updatedDays = selectedDays.filter((day) => day !== dayToRemove);
    setSelectedDays(updatedDays);
  };

  const toast = useToast();

  const newDoctor = {};
  if (name) {
    newDoctor["name"] = name;
  }
  if (about) {
    newDoctor["about"] = about;
  }
  if (image) {
    newDoctor["image"] = image;
  }
  if (location) {
    newDoctor["location"] = location;
  }
  if (spacility) {
    newDoctor["spacility"] = spacility;
  }
  if (fees) {
    newDoctor["fees"] = fees;
  }
  if (exp) {
    newDoctor["exp"] = exp;
  }
  if (org) {
    newDoctor["org"] = org;
  }
  if (selectedDays) {
    newDoctor["Availability"] = selectedDays;
  }
  if (selectedTimeSlots) {
    newDoctor["timeSlots"] = selectedTimeSlots;
  }


  let dropDowns = [
    "Urology",
    "Laparoscopic Surgeon",
    "Gastroenterology",
    "General Surgeon",
    "Cardiac Surgeon",
    "Dentist",
    "Dermatologist",
    "Endoscopy",
    "Gastroenterology",
    "Ent",
    "Eye Surgeon",
    "General Physician",
    "Hair Transplant",
    "Hematology",
    "Infectious Disease",
    "Kidney Transplant",
    "M.D. MEDICINE",
    "Nephrology",
    "Neuro Surgeon",
    "Neurologist",
    "Oncologist",
    "Orthopedic",
    "Pediatric",
    "Plastic Surgeon",
    "Pulmonology",
    "Senior Consultant",
    "Thoracic Surgeon",
    "Anesthesiology",
    "Audiology and Speech",
    "Internal Medicine",
    "IVF and Infertility",
    "Lab Medicine",
    "Obstetrics and Gynecology",
    "Ophthalmology",
    "Physiotherapy",
    "Plastic Surgery & Cosmetology",
    "Psychiatrist",
    "Radiology",
    "Rheumatology",
    "Homeopathy"
  ];


  dropDowns = dropDowns.sort((a, b) => b.localeCompare(a)).reverse();

  useEffect(() => {
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/doctors/?token=${localStorage.getItem(
          "dqDoctorAu"
        )}`
      )
      .then((res) => {
        setName(res.data[0].name);
        setAbout(res.data[0].about);
        setEmail(res.data[0].email);
        setExp(res.data[0].exp);
        setCity(res.data[0].city);
        setState(res.data[0].state);
        setExpertise(res.data[0].expertise);
        setFees(res.data[0].fees);
        setImage(res.data[0].image);
        setLocation(res.data[0].location);
        setOrg(res.data[0].org);
        setSpacility(res.data[0].spacility);
        setSelectedDays(res.data[0].Availability);
        setSelectedTimeSlots(res.data[0].timeSlots);
        setPostImage({ ...postImage, image: res.data[0].image });
        let feat = "";
        let feFind = res.data[0];
        if (feFind.feature1) {
          feat += feFind.feature1 + "#";
        }
        if (feFind.feature2) {
          feat += feFind.feature2 + "#";
        }
        if (feFind.feature3) {
          feat += feFind.feature3 + "#";
        }
        if (feFind.feature4) {
          feat += feFind.feature4 + "#";
        }
        if (feFind.feature5) {
          feat += feFind.feature5 + "#";
        }
        if (feFind.feature6) {
          feat += feFind.feature6 + "#";
        }
        if (feFind.feature7) {
          feat += feFind.feature7 + "#";
        }
        if (feFind.feature8) {
          feat += feFind.feature8 + "#";
        }
        if (feFind.feature9) {
          feat += feFind.feature9 + "#";
        }
        if (feFind.feature10) {
          feat += feFind.feature10 + "#";
        }

        setFeatures(feat);
      });
  }, []);

  const fetureFunction = () => {
    const fetureObj = {};

    let fetureArr = features.trim().split("#");
    let run = 9;
    if (fetureArr.length < run) {
      run = fetureArr.length;
    }

    for (let i = 0; i < run; i++) {
      fetureObj[`feature${i + 1}`] = fetureArr[i];
    }
    return fetureObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedData = {};
    if (features) {
      let featuresOBj = fetureFunction();
      updatedData = { ...newDoctor, status: "Not Verified", ...featuresOBj };
    } else {
      updatedData = { ...newDoctor, status: "Not Verified" };
    }

    if (postImage.image) {
      updatedData["image"] = postImage.image;
    }

    e.preventDefault();
    setLoading(true);
    axios
      .patch(
        `https://drab-blue-mite-belt.cyclic.app/doctors/update?token=${localStorage.getItem(
          "dqDoctorAu"
        )}`,
        { ...updatedData, city: city, state: state, expertise: Expertise }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast({
          title: res.data.msg,
          description: "",
          position: "top-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" text-3xl leading-7 mt-4 mb-4 text-purpul3">
            Doctor Profile
          </h2>
          {/* <h2 className=" text-3xl leading-7 mt-4 mb-4 text-purpul4">
            {status !== "Approved" ? "Approved" : "Not Approved"}
          </h2> */}
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
                Doctor name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="username"
                    // autoComplete="username"
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
          <div className="col-span-full">
            <label
              htmlFor="Expertise"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Expertise
            </label>
            <div className="mt-2">
              <textarea
                value={Expertise}
                onChange={(e) => setExpertise(e.target.value)}
                id="Expertise"
                name="Expertise"
                rows={4}
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              add `#` between two Expertise.
            </p>
          </div>
          <br />

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Add more details about the Doctor
            </label>
            <div className="mt-2">
              <textarea
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                id="about"
                name="about"
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
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
          {/* Display the selected profile picture */}
          {/* {profilePictureUrl && (
            <img
              src={profilePictureUrl}
              alt="Selected Profile Picture"
              className="mt-4 max-w-xs"
            />
          )} */}

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
            {/* <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image URL
              </label>
              <div className="mt-2">
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  name="image"
                  id="image"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Spacility
              </label>
              <div className="mt-2">
                <Select
                  value={spacility}
                  border={"1px solid blue"}
                  onChange={(e) => setSpacility(e.target.value)}
                  name="category"
                  background={"white"}
                  placeholder="Select A Category"
                >
                  {dropDowns.map((item) => (
                    <option value={item.toLowerCase()}>{item}</option>
                  ))}
                </Select>
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
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="address-level2"
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fees
              </label>
              <div className="mt-2">
                <input
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  type="text"
                  name="fees"
                  id="fees"
                  autoComplete="fees"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Organization
              </label>
              <div className="mt-2">
                <input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  type="text"
                  name="org"
                  id="org"
                  autoComplete="address-level1"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Experiences (in year)
              </label>
              <div className="mt-2">
                <input
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                  type="text"
                  name="exp"
                  id="exp"
                  autoComplete="postal-code"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <ul className="flex flex-wrap">
            {selectedDays.map((day, index) => (
              <li
                style={{
                  backgroundColor: "#fef6f6",
                  padding: "8px",
                  borderRadius: "50px",
                }}
                key={index}
                className="text-blue-600 m-2"
              >
                <span style={{ color: "red" }} className="block md:inline">
                  {day}
                </span>
                <button
                  className="ml-2 text-red-600 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveDay(day);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline text-red-600 hover:text-red-800 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <label className="block text-gray-700 font-bold mb-2" htmlFor="day">
            Select Availability days:
          </label>
          <select
            id="day"
            name="day"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={""}
            onChange={handleSelectChange}
          >
            <option value="">Select a day</option>
            {daysOfWeek.map(
              (day) =>
                !selectedDays.includes(day) && (
                  <option key={day} value={day}>
                    {day}
                  </option>
                )
            )}
          </select>
          {selectedDays.length > 0 && (
            <div className="mt-2">
              {/* <p className="text-green-600">Selected days:</p> */}
            </div>
          )}
        </div>

        <div className="mt-4">
          <ul className="flex flex-wrap">
            {selectedTimeSlots.map((timeSlot, index) => (
              <li
                style={{
                  backgroundColor: "#fef6f6",
                  padding: "8px",
                  borderRadius: "50px",
                }}
                key={index}
                className="text-blue-600 m-2"
              >
                <span style={{ color: "red" }} className="block md:inline">
                  {timeSlot}
                </span>
                <button
                  className="ml-2 text-red-600 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveTimeSlot(timeSlot);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline text-red-600 hover:text-red-800 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="timeSlot"
          >
            Select Time Slots:
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={""}
            onChange={handleSelectTime}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map(
              (timeSlot) =>
                !selectedTimeSlots.includes(timeSlot) && (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                )
            )}
          </select>
          {selectedTimeSlots.length > 0 && (
            <div className="mt-2">
              {/* <p className="text-green-600">Selected time slots:</p> */}
            </div>
          )}
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
          {loading ? <Spinner /> : "update"}
        </button>
      </div>
    </form>
  );
}

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
