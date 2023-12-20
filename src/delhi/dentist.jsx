import { useEffect, useState } from "react";
import DoctorCart from "../components/doctors/doctorCart";
import axios from "axios";

function Dentist() {

    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        axios.get(`https://drab-blue-mite-belt.cyclic.app/doctors/doctors/near/?cat=${'dentist'}&status=approved&query=${'delhi'}`)
        .then(res => {
            console.log(res.data)
        })
    },[])


  return <>{
    doctors.map(item => <DoctorCart  data={item} />)

    <h1>Dentist Route test</h1>

  }</>;
}

export default Dentist;
