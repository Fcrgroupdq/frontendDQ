import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Text,
  Heading,
  Grid,
  Select,
  Box,
  Badge,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import OneCart from "../DoctorDashboard/OverviewCart/OneCart";
import TwoCart from "../DoctorDashboard/OverviewCart/TwoCart";
import CartThree from "../DoctorDashboard/OverviewCart/CartThree";
import CartFour from "../DoctorDashboard/OverviewCart/CartFour";

const ExploreView = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("");

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://drab-blue-mite-belt.cyclic.app/appointment`)
      .then((res) => setAppointment(res.data))
      .finally(() => setLoading(false));
  };

  let visited = 0;
  let cancelled = 0;
  let pendingAppointments = [];
  let pending = 0;
  let approved = 0;

  appointment.forEach((item) => {
    console.log(item.status);
    if (item.status === "approved") {
      approved++;
    } else if (item.status === "pending") {
      pendingAppointments.push(item);
      pending++;
    } else if (item.status === "cancel") {
      cancelled++;
    } else if (item.status === "visited") {
      visited++;
    }
  });

  useEffect(() => {
    getData();
  }, [select]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
        loading...
      </h2>
    );
  }

  return (
    // <div>
    //   <SimpleGrid columns={[1, 2]} margin={"12px"}>
    //     <Heading color={"blue.400"} width={"80%"}>
    //       See All Appointment
    //     </Heading>
    //     <Select
    //       value={select}
    //       onChange={(e) => setSelect(e.target.value)}
    //       placeholder="Filter your Appointment"
    //     >
    //       <option value="pending">Pending</option>
    //       <option value="approved">Approved</option>
    //       <option value="visited">Visited</option>
    //       <option value="cancel">Cancel</option>
    //     </Select>
    //   </SimpleGrid>

    //   {appointment.map((item) => (
    //     <Box
    //       bg="white"
    //       p={6}
    //       rounded="md"
    //       boxShadow="md"
    //       width="100%"
    //       marginTop={"12px"}
    //       marginBottom={"20px"}
    //       // maxW="400px"
    //     >
    //       <Heading size="lg" mb={4} color="red.400">
    //         Patient Information
    //       </Heading>
    //       <Grid templateColumns="2fr 2fr" gap={5}>
    //         <Text fontWeight="bold" color="gray.600">
    //           Name:
    //         </Text>
    //         <Text>{item.name}</Text>
    //         <Text fontWeight="bold" color="gray.600">
    //           Age:
    //         </Text>
    //         <Text>{item.age}</Text>
    //         <Text fontWeight="bold" color="gray.600">
    //           Gender:
    //         </Text>
    //         <Text>{item.gender}</Text>
    //         <Text fontWeight="bold" color="gray.600">
    //           Address:
    //         </Text>
    //         <Text>{item.address}</Text>
    //         <Text fontWeight="bold" color="gray.600">
    //           Email:
    //         </Text>
    //         <Text>{item.email}</Text>
    //         <Text fontWeight="bold" color="gray.600">
    //           Mobile:
    //         </Text>
    //         <Text>{item.mobile}</Text>
    //       </Grid>
    //       <Text color="gray.600" mt={4}>
    //         Reason for Visit: <Text as="span">{item.reason}</Text>
    //       </Text>
    //       <Text color="gray.600">
    //         Doctor: <Text as="span">{item.doctorName}</Text>
    //       </Text>
    //       <Text color="gray.600">
    //         Specialty: <Text as="span">{item.specilaty}</Text>
    //       </Text>
    //       <Flex alignItems="center">
    //         <Text fontWeight="bold" color="gray.600">
    //           Status:
    //         </Text>
    //         <Badge
    //           fontSize={"20px"}
    //           colorScheme={
    //             item.status === "approved"
    //               ? "green"
    //               : item.status === "visited"
    //               ? "blue"
    //               : item.status === "cancel"
    //               ? "red"
    //               : "yellow"
    //           }
    //           ml={2}
    //         >
    //           {item.status}
    //         </Badge>
    //       </Flex>
    //       <Box display={"flex"} justifyContent={"space-between"}>
    //         <Text color="gray.600">
    //           Date: <Text as="span">{item.date}</Text>
    //         </Text>
    //         <Button colorScheme="red">
    //           <Link to={`/doctors/${item.doctorName}`}>
    //             See More About Doctor
    //           </Link>
    //         </Button>
    //       </Box>
    //       <Text color="gray.600">
    //         Time: <Text as="span">{item.time}</Text>
    //       </Text>
    //     </Box>
    //   ))}
    // </div>
    <>
      <Heading mb={"20px"} color={"teal"}>
       Appointment Overviews
      </Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <OneCart pending={pending} />
        <TwoCart visited={visited} />
        <CartThree canclled={cancelled} />
        <CartFour approved={approved} />
      </div>
      <Text fontSize={'20px'} m={"20px"} color={"red.400"}>
        New Appointment
      </Text>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white"></h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                S.N
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Patient Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Doctor Name
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Booking Date
              </h5>
            </div>
          </div>

          {pendingAppointments.map((item,index) => (
            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
              <div className="flex items-center gap-2 p-2.5 xl:p-5">
                <div className="flex-shrink-0 rounded-md">
                <p className="text-black dark:text-white font-bold">
                  {index+1}
                </p>
                </div>
                {/* <p className="hidden text-black dark:text-white sm:block">Google</p> */}
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white font-bold">
                  {item.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-7 font-bold">{item.doctor}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-7 font-bold">{item.status}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreView;
