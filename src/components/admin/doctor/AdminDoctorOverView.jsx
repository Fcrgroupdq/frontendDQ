import axios from "axios";
import React, { useEffect, useState } from "react";
import MainCart from "../../DoctorDashboard/OverviewCart/MainCart";
import { Heading } from "@chakra-ui/react";
import AllDoctorCart from "./AllDoctorCart";
import TableOne from "./TableRecent";

const AdminDoctorOverView = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://drab-blue-mite-belt.cyclic.app/doctors/all`)
      .then((res) => {
        setLoading(false);
        setDoctor(res.data);
      });
  }, []);

  let approved = 0;
  let nonApproved = 0;
  let recentApproved = [];

  doctor.forEach((item) => {
    if (item.status === "approved") {
      approved++;
    } else {
      nonApproved++;
    }
  });

  for (let i = 0; i < doctor.length; i++) {
    const item = doctor[i];
    if (item.status === "approved") {
      recentApproved.push(item);
      if (recentApproved.length === 5) {
        break; // Exit the loop after 5 approved items are found
      }
    }
  }

  const refrace = () => {

  }

  if(loading){
    return <h2 style={{color:'red',textAlign:'center',fontSize:'20px'}}>Loading...</h2>
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <MainCart name={"Total Doctor"} value={doctor.length} />
        <MainCart color={"green"} name={"Approved Doctor"} value={approved} />
        <MainCart name={"Pending Doctor"} value={nonApproved} />
      </div>
      <Heading color={"teal.600"} m={"5"}>
        Recent Approved Doctors
      </Heading>
      <TableOne key={Math.random()} doctor={recentApproved}  />
      {/* {recentApproved.map((item) => (
        <AllDoctorCart key={Math.random()} doctor={item} refrace={refrace} />
      ))} */}
    </div>
  );
};

export default AdminDoctorOverView;
