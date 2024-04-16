
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



{/* faq */}
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="FAq" class="object-cover object-center h-full w-full" src={Dq_Faq} />
      

    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Booking after what happens</h2>
          <p class="leading-relaxed text-base">After Booking our team will contact you. </p>
       
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Is Login nesscesry?</h2>
          <p class="leading-relaxed text-base">Yes, Login is necessary for Providing you Best Treatment services.</p>
         
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Hospital don't have any Doctor search?</h2>
          <p class="leading-relaxed text-base">Sometimes it may occur due to server load or may be webiste is not loaded properly , reload website and try. <br />
          if  u still face issue drop us a mail at <a href="mailto:support@doctorsqueries.com">support@doctorsqueries.com</a> 
          </p>
        
        </div>
      </div>
    </div>
  </div>
</section>

{/* End Faq */}

      <div class="">
        <marquee behavior="smooth" direction="left"><b>Disclaimer:</b> All doctor profiles listed on the website are taken from the Internet. If you have any concerns or suggestions, drop us a mail at <b><i> <a href="mailto:support@doctorsqueries.com">support@doctorsqueries.com</a></i></b>.</marquee>
      </div>
    </main>
  );
}
