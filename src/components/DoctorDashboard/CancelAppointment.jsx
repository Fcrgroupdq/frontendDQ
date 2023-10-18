import { Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import EachAppointment from '../doctorAppointment/EachAppointment';
import axios from 'axios';

const CancelAppointment = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false);
    const [refrace,setRefrace] = useState(false)

  

    useEffect(() => {
        setLoading(true)
        axios.get(`https://drab-blue-mite-belt.cyclic.app/appointment?token=${localStorage.getItem('dqDoctorAu')}&status=cancel`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
    },[refrace])

    const refract = () => {
        setRefrace(!refrace);
      };
    
      if(loading){
        return <div style={{width:'20px',margin:"auto"}}>
          {<Spinner />}
        </div>
      } else if (data.length === 0) {
        return (
          <h2 style={{ textAlign: "center", color: "red",fontSize:'22px' }}>
           You don't have any Cancelled Appointment.
          </h2>
        );
      }
    
      return (
        <div>
          {data.reverse().map((item) => (
            <EachAppointment refrace={refract} item={item} />
          ))}
        </div>
      );
}

export default CancelAppointment