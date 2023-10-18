
import axios from "axios";
import React, { useEffect, useState } from "react";

import EachBanner from "./EachBanner";

const BannerView = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

 

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://drab-blue-mite-belt.cyclic.app/banner")
      .then((res) => {
        setBanners(res.data)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{color:'red',textAlign:"center",fontSize:'20px'}}>Loading...</h2>;
  }

  return (
    <div>
      {banners.map((item) => <EachBanner item={item} />)}
    </div>
  );
};

export default BannerView;
