
import { useEffect, useState } from "react";

import { useContext } from "react";
import searchContext from "../../context/searchContext";

import FeatureDiv from "./Feature";
import DoctorCatDiv from "./DoctorCatDive";
import ClientSpeak from "./ClientSpeak";
import GetStarted from "./GetStarted";
import SearchSection from "../doctors/searchSection";
import { useNavigate } from "react-router-dom";
import TypeDives from "./TypeDives";
import Homeadd from "./Homeadd";
import BlogCart from "../Blog/BlogCart";
import Dq_Faq from "../../assets/Dq_Faq.png"


export default function HomeMain() {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [category, setCategory] = useState(null);
  const { search, setSearch } = useContext(searchContext);
  const [redirect, setRedirect] = useState(false);

  const getLocationFromChild = (lat, lon, cat) => {
    setLatitude(lat);
    setLongitude(lon);
    setCategory(cat);
  };

  useEffect(() => {
    let obj = { ...search };

    obj.latitude = latitude;
    obj.longitude = longitude;
    obj.category = category;


    if(latitude){
      setSearch(obj);
      setRedirect(true);
    }

  }, [latitude, longitude, category]);

  if (redirect) {
    navigate("/doctors");
  }

  return (
    <main>
      <SearchSection getLocationFromChild={getLocationFromChild} />

      <div style={{ marginTop: "20px" }}>
        {" "}
        {/* <Carouse /> */}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 m-9">
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={findDo} />
          <h3 className={roboto.className}>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={surg} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={surg} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={medi} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={test} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="m-8"
      >
        <div>
          <h1 style={{ fontSize: "24px" }} className="m-4">
            Consult top doctors online for any health concern
          </h1>
          <p style={{ marginLeft: "1rem" }}>
            Private consultations with verified doctors in all specialists
          </p>
        </div>
        <button
          style={{ padding: "6px", height: "35px", border: "1px solid red" }}
        >
          View all Doctors
        </button>
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* <FeatureDiv /> */}
      </div>
      <div style={{ margin: "20px" }}>
        <DoctorCatDiv />
      </div>

      <div >
        <TypeDives />
      </div>
      
      <div>
        <Homeadd/>
      </div>

      <div>
        <faq/>
      </div>

      {/* <div style={{ margin: "20px",marginBottom:'0px' }}> */}
        {/* <ClientSpeak /> */}
        {/* <BlogCart /> */}
      {/* </div> */}

      <div style={{ margin: "20px",marginTop:'0px' }}>
        <GetStarted />
      </div>





      <div class="">
        <marquee behavior="smooth" direction="left"><b>Disclaimer:</b> All doctor profiles listed on the website are taken from the Internet. If you have any concerns or suggestions, drop us a mail at <b><i> <a href="mailto:support@doctorsqueries.com">support@doctorsqueries.com</a></i></b>.</marquee>
      </div>
    </main>
  );
}
