import { useEffect, useState } from "react";
import DoctorCart from "../../components/doctors/doctorCart";
import axios from "axios";

function NoidaInfectiousDisease() {

    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        axios.get(`https://drab-blue-mite-belt.cyclic.app/doctors/doctors/near/?cat=${'infectiousDisease'}&status=approved&query=${'noida'}`)
        .then(res => {
           setDoctors(res.data)
        })
    },[])


  return <>{
    doctors.map(item => <DoctorCart  data={item} />)
  }</>;
}

export default NoidaInfectiousDisease;
