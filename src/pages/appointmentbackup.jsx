import {
    ChakraProvider,
    Image,
    Text,
    Spinner,
    useToast,
    SimpleGrid,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  
  import {
    Box,
    HStack,
    PinInput,
    PinInputField,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    Textarea,
  } from "@chakra-ui/react";
  import { useEffect, useRef, useState } from "react";
  import { useParams } from "react-router-dom";
  import { CheckCircleIcon } from "@chakra-ui/icons";
  import DoctorCart from "../components/doctors/doctorCart";
  
  const Appointment = () => {
    const param = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    let interval = useRef(null);
  
    const getCurrentTime = () => {
      const currentDate = new Date(); // Creates a new Date object with the current date and time
  
      const currentYear = currentDate.getFullYear(); // Get the current year
      const currentMonth = currentDate.getMonth(); // Get the current month (0-11, where 0 is January)
      const currentDay = currentDate.getDate(); // Get the current day of the month (1-31)
      const currentHour = currentDate.getHours(); // Get the current hour (0-23)
      const currentMinute = currentDate.getMinutes(); // Get the current minute (0-59)
      const currentSecond = currentDate.getSeconds(); // Get the current second (0-59)
  
      // Function to format the hour in 12-hour format with AM or PM
      function formatHour(hour) {
        const amPm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
        return `${formattedHour}:${currentMinute} ${amPm}`;
      }
  
      const formattedTime = `${currentYear}-${
        currentMonth + 1
      }-${currentDay} ${formatHour(currentHour)}`;
  
      return formattedTime;
    };
  
    const AppointmentModel = {
      doctorName: param.id,
      date: "",
      appointmentDay: "",
      specilaty: "",
      reason: "",
      checkup: "",
      name: "",
      age: "",
      address: "",
      email: "",
      mobile: "",
      gender: "",
      times: "",
    };
  
    const [appointment, setAppointment] = useState(AppointmentModel);
    const [loading, setLoading] = useState(false);
    const [booking, setBooking] = useState(false);
    // const [count, setCount] = useState(0);
    const [otpVisible, setOtpVisible] = useState(false);
    const [pinValues, setPinValues] = useState(["", "", "", ""]);
    const [otpLoding, setOtpLoding] = useState(false);
    const [doctor, setDoctor] = useState({});
    const [pageLoad, setPageLoad] = useState(false);
  
    useEffect(() => {
      setPageLoad(true);
      axios
        .get(`https://drab-blue-mite-belt.cyclic.app/doctors/${param.id}`)
        .then((res) => {
          setDoctor(res.data);
          setAppointment({ ...appointment, specilaty: res.data.spacility });
          setPageLoad(false);
        });
    }, []);
  
    // useEffect(() => {
    //   if (booking) {
    //     interval.current = setInterval(() => {
    //       setCount((pre) => pre + 1);
    //     }, 1000);
    //   }
    // }, [booking]);
  
    const sendNotifaction = (data) => {
      axios
        .post(`https://drab-blue-mite-belt.cyclic.app/otp/send-mail`, data)
        .then((res) => {});
    };
  
    const handleOtpVerify = () => {
      setOtpLoding(true);
      axios
        .post("https://drab-blue-mite-belt.cyclic.app/otp/verify", {
          email: appointment.email,
          otp: pinValues.join(""),
        })
        .then((res) => {
          toast({
            title: res.data.msg,
            description: "",
            position: "top-right",
            status: res.data.msg === "otp verify success" ? "success" : "error",
            duration: 4000,
            isClosable: true,
          });
          if (res.data.msg === "otp verify success") {
            setBooking(true);
            axios
              .post(
                `https://drab-blue-mite-belt.cyclic.app/appointment`,
                {
                  ...appointment,
                  token: localStorage.getItem("dqAuthTo"),
                  status: "pending",
                  doctor: doctor.name,
                  date: getCurrentTime(),
                },
                {
                 
                }
              )
              .then((res) => {
                if (res.status === 201) {
                  toast({
                    title: res.data.msg,
                    description: "",
                    position: "top-right",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                  });
  
                  let user = {
                    email: appointment.email,
                    subject: "Appointment Confirmation",
                    massage: `
                    Dear ${name},
  
                    We are pleased to confirm your appointment with ${doctor.name} on  at ${date}. Below are the appointment details: https://doctorsquery.vercel.app/user-dashboard
  
                    - Date: ${date}
                    - Time: ${time}
                    - Doctor: ${doctor.name}
                    - Clinic/Location: ${doctor.location}
  
                    Please arrive a few minutes before your appointment time. If you need to reschedule or have any questions, please contact us at info@doctorsqueries.com.
  
                    Thank you for choosing Doctorsqeries! We look forward to serving you.
  
                    Best regards,
                    Doctorsqeries
                    info@doctorsqueries.com
                    `,
                  };
                  let doctorMail = {
                    email: doctor.email,
                    subject: "New Appointment Confirmation",
                    massage: `
                    Dear Dr. ${doctor.name},
  
                    You have a new appointment scheduled with you:
  
                    - Patient Name: ${name}
                    - Date: ${date}
                    - Time: ${time}
                    - Clinic/Location: ${doctor.location}
  
                    Please make sure to be available and prepared for the appointment. If you have any questions or need additional information, please contact the patient at ${email}.
  
                    Thank you for your commitment to providing excellent healthcare services.
  
                    Best regards,
                    Doctorsqeries
                    info@doctorsqueries.com
                    `,
                  };
                  let Admin = {
                    email: "sharmaashish7251@gmail.com",
                    subject: "New Appointment Confirmation",
                    massage: ` 
                     Dear Admin,
  
                     A new appointment has been scheduled:
  
                     - Patient Name: ${name}
                     - Doctor: ${doctor.name}
                     - Date: ${date}
                     - Time: ${time}
                     - Clinic/Location:${doctor.location}
  
                     Please review and confirm this appointment in our system. If you have any questions or need to make adjustments, please take the necessary actions accordingly.
  
                     Thank you for your attention to this appointment.
  
                     Best regards,
                     Doctorsqeries
                     info@doctorsqueries.com
                    `,
                  };
  
                  sendNotifaction(user);
                  sendNotifaction(doctorMail);
                  sendNotifaction(Admin);
  
                  setAppointment(AppointmentModel);
                }
              })
              .catch((err) => console.log(err))
              .finally(() => {
                setLoading(false);
              });
          }
  
          setOtpLoding(false);
        });
    };
  
    
  
    const handleChange = (e) => {
      setAppointment({ ...appointment, [e.target.name]: e.target.value });
    };
  
    // Function to handle changes in PIN input fields
    const handlePinChange = (index, value) => {
      const newPinValues = [...pinValues];
      newPinValues[index] = value;
      setPinValues(newPinValues);
    };
  
    const handleBookAppointment = (e) => {
      e.preventDefault();
      console.log(appointment);
  
      if (
        doctorName === "" ||
        appointmentDay === "" ||
        specilaty == "" ||
        reason == "" ||
        checkup == "" ||
        name === "" ||
        age === "" ||
        address === "" ||
        email === "" ||
        mobile === "" ||
        gender === "" ||
        time === ""
      ) {
        toast({
          title: "All inputs are required!",
          description: "",
          position: "top-right",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        setLoading(true);
        axios
          .post("https://drab-blue-mite-belt.cyclic.app/otp/send", {
            email: appointment.email,
          })
          .then((res) =>
            toast({
              title: "otp sent successfully !!",
              description: "",
              position: "top-right",
              status: "success",
              duration: 4000,
              isClosable: true,
            })
          )
          .catch((err) =>
            toast({
              title: "facing error to send otp",
              description: "",
              position: "top-right",
              status: "error",
              duration: 4000,
              isClosable: true,
            })
          )
          .finally(() => {
            setLoading(false);
            setOtpVisible(true);
          });
      }
    };
  
    const {
      doctorName,
      date,
      specilaty,
      reason,
      checkup,
      name,
      age,
      address,
      email,
      mobile,
      gender,
      time,
      appointmentDay,
    } = appointment;
  
    if (booking) {
      return (
        <>
          <Box h={"530px"} textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              your Appointment is Saved
            </Heading>
            <Text color={"gray.500"}>
              your appointment is saved. we will get back to you as soon as
              possible. please check your appointment section.
            </Text>
  
            <Box fontSize={35} color={"red.600"} marginTop={22}>
              {}
            </Box>
          </Box>
        </>
      );
    }
  
    return (
      <ChakraProvider>
        <Box m={"40px"} p={4}>
          <Heading p={"12px"} textAlign={"center"} as="h2" size="lg" mb={4}>
            Book an Appointment
          </Heading>
          <DoctorCart data={doctor} />
          <form>
            <SimpleGrid columns={[1, 2]} gap={6}>
              {" "}
              <Box colSpan={1}>
                <FormControl id="doctor" isRequired>
                  <FormLabel>Doctor</FormLabel>
                  <Input
                    name="doctorName"
                    value={doctor.name}
                    disabled
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter doctor's name"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                </FormControl>
                {/* <br /> */}
                {/* <FormControl id="day" isRequired>
                  <FormLabel>Appointment Day</FormLabel>
                  <Input
                    value={date}
                    name="date"
                    onChange={handleChange}
                    type="date"
                    fontSize="lg"
                    mt={2}
                  />{" "} */}
                {/* Increased font size and added more spacing */}
                {/* </FormControl> */}
                <br />
  
                <FormControl id="time" isRequired>
                  <FormLabel>Available Time slots</FormLabel>
                  <Select
                    value={time}
                    name="time"
                    onChange={handleChange}
                    placeholder="Select appointment time"
                    fontSize="lg"
                    mt={2}
                  >
                    {" "}
                    {/* Increased font size and added more spacing */}
                    {doctor?.timeSlots?.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </Select>
                </FormControl>
                <br />
  
                <FormControl id="time" isRequired>
                  <FormLabel>Appointment Date</FormLabel>
                  <Select
                    value={appointmentDay}
                    name="appointmentDay"
                    onChange={handleChange}
                    placeholder="Select appointment date"
                    fontSize="lg"
                    mt={2}
                  >
                    {" "}
                    {/* Increased font size and added more spacing */}
                    {doctor?.Availability?.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </Select>
                </FormControl>
                <br />
  
                <FormControl id="specialty" isRequired>
                  <FormLabel>Specialty</FormLabel>
                  <Input
                    name="specilaty"
                    value={doctor.spacility}
                    onChange={handleChange}
                    disabled
                    type="text"
                    placeholder="Enter specialty"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="reason" isRequired>
                  <FormLabel>Reason for Appointment</FormLabel>
                  <Textarea
                    value={reason}
                    name="reason"
                    onChange={handleChange}
                    placeholder="Enter reason for appointment"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="checkupType" isRequired>
                  <FormLabel>Checkup Type</FormLabel>
                  <Select
                    value={checkup}
                    name="checkup"
                    onChange={handleChange}
                    placeholder="Select checkup type"
                    fontSize="lg"
                    mt={2}
                  >
                    {" "}
                    {/* Increased font size and added more spacing */}
                    <option value="regular">Regular Checkup</option>
                    <option value="specialist">Specialist Consultation</option>
                    <option value="follow-up">Follow-up</option>
                  </Select>
                </FormControl>
                <br />
              </Box>
              {/* Right Section */}
              <Box colSpan={1}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    value={name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter patient's name"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    name="age"
                    value={age}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter age"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    value={address}
                    name="address"
                    onChange={handleChange}
                    placeholder="Enter address"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    value={email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    name="mobile"
                    value={mobile}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter mobile number"
                    fontSize="lg"
                    mt={2}
                  />{" "}
                  {/* Increased font size and added more spacing */}
                </FormControl>
                <br />
  
                <FormControl id="Gender" isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    value={gender}
                    name="gender"
                    onChange={handleChange}
                    placeholder="Select gender type"
                    fontSize="lg"
                    mt={2}
                  >
                    {" "}
                    {/* Increased font size and added more spacing */}
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <br />
              </Box>
            </SimpleGrid>
  
            <Button
              onClick={handleBookAppointment}
              colorScheme="teal"
              isDisabled={otpVisible}
              mt={6}
              type="submit"
            >
              {" "}
              {/* Increased the top margin */}
              Book Appointment {loading ? <Spinner /> : ""}
            </Button>
  
            {otpVisible ? (
              <Box
                marginTop={"30px"}
                // display={"flex"}
                justifyContent={"space-between"}
                // width={"400px"}
              >
                <HStack>
                  <PinInput>
                    {pinValues.map((value, index) => (
                      <PinInputField
                        key={index}
                        value={value}
                        onChange={(e) => handlePinChange(index, e.target.value)}
                      />
                    ))}
                  </PinInput>
                </HStack>
                <Button onClick={handleOtpVerify} colorScheme="red">
                  {otpLoding ? <Spinner /> : "verify OTP"}
                </Button>
              </Box>
            ) : (
              ""
            )}
          </form>
        </Box>
      </ChakraProvider>
    );
  };
  
  export default Appointment;
  