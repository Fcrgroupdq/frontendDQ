import React, { useEffect, useState } from "react";
import axios from "axios";
import EachAppointment from "../components/doctorAppointment/EachAppointment";
import { Spinner } from "@chakra-ui/react";

const DoctorAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [refrace, setRefrace] = useState(false);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://drab-blue-mite-belt.cyclic.app/appointment`)
      .then((res) => {setAppointment(res.data)
        setLoading(false)
      });
  }, [refrace]);

  const refract = () => {
    setRefrace(!refrace);
  };

  if(loading){
    return <div style={{width:'20px',margin:"auto"}}>
      {<Spinner />}
    </div>
  }

  return (
    <div>
      {appointment.reverse().map((item) => (
        <EachAppointment refrace={refract} item={item} />
      ))}
    </div>
  );
};

export default DoctorAppointment;
