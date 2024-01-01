import { useEffect, useState } from "react";
import DoctorCart from "../../components/doctors/doctorCart";
import axios from "axios";

function NoidaLabMedicine() {

    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        axios.get(`https://drab-blue-mite-belt.cyclic.app/doctors/doctors/near/?cat=${'labmedicine'}&status=approved&query=${'noida'}`)
        .then(res => {
           setDoctors(res.data)
        })
    },[])


  return <>{
    doctors.map(item => <DoctorCart  data={item} />)
  }</>;
}

export default NoidaLabMedicine;
