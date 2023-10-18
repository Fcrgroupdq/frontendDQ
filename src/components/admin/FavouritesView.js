import React, { useEffect, useState } from "react";
import axios from "axios";
import {useMediaQuery} from "@chakra-ui/react"; // Corrected import
import NewDoctorCart from "./doctor/NewDoctorCart";

const FavouritesView = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isLargerThanTablet] = useMediaQuery("(min-width: 868px)");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllText, setShowAllText] = useState("See More");
  const [refrace,setRefrace] = useState(false);

  const refract = () => {
    setRefrace(!refrace)
  }

  const toggleShowFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
    setShowAllText(showAllFeatures ? "See More" : "See Less");
  };

  const extractFeatures = () => {
    const features = [];

    for (const key in data) {
      if (key.startsWith("feature") && data[key]) {
        features.push(data[key]);
      }
    }

    return features;
  };

  const visibleFeatures = showAllFeatures
    ? extractFeatures()
    : extractFeatures().slice(0, 3);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://drab-blue-mite-belt.cyclic.app/doctors/all`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [refrace]);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  let fouund = [];
  data.forEach(item => 
    item.status === "Not Verified" ? fouund.push(item):""
  )


  if(fouund.length === 0){
    return <div style={{textAlign:'center',fontSize:'20px',color:'red'}}>Not found any Data</div>
  }

  return (
    <div>
      {fouund.map((data) => (
       data.status === "Not Verified" ? <NewDoctorCart refract={refract} data={data} /> :""
      ))}
    </div>
  );
};

export default FavouritesView;
