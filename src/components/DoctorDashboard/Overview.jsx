import React, { useEffect, useState } from "react";
import OneCart from "./OverviewCart/OneCart";
import TwoCart from "./OverviewCart/TwoCart";
import CartThree from "./OverviewCart/CartThree";
import CartFour from "./OverviewCart/CartFour";
import ChartOne from "./OverviewCart/ChartOne";
import { Heading } from "@chakra-ui/react";
import axios from "axios";

const Overview = () => {
  const [appointments, setAppontments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/appointment?token=${localStorage.getItem(
          "dqDoctorAu"
        )}`
      )
      .then((res) => {
        setAppontments(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/doctors?token=${localStorage.getItem(
          "dqDoctorAu"
        )}`
      )
      .then((res) => {
        setDoctor(res.data[0]);
        setLoading(false);
      });
  }, []);

  let visited = 0;
  let cancelled = 0;
  let pending = 0;
  let approved = 0;

  appointments.forEach((item) => {
    console.log(item.status);
    if (item.status === "approved") {
      approved++;
    } else if (item.status === "pending") {
      pending++;
    } else if (item.status === "cancel") {
      cancelled++;
    } else if (item.status === "visited") {
      visited++;
    }
  });

  if (loading) {
    return <h2 style={{ color: "red" }}>Loading...</h2>;
  }
  return (
    <div>
      {doctor.status === "approved" ? (
        <Heading mb={"20px"} color={"teal"}>
          Thank You for completing Your Profile
        </Heading>
      ) : doctor.status === "Not Verified" ? <Heading p={'10px'} mb={'10px'} color={'#FA6B6C'} as='h4' size='md' >Hey {doctor.name} your Profile Under verification, We will update you once profile get's approved</Heading> : (
        <Heading mb={"20px"} color={"red"}>
          Please Complete Your Profile.
        </Heading>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <OneCart pending={pending} />
        <TwoCart visited={visited} />
        <CartThree canclled={cancelled} />
        <CartFour approved={approved} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
      </div>
    </div>
  );
};

export default Overview;
