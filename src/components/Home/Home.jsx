
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
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>


{/* End Faq */}

      <div class="">
        <marquee behavior="smooth" direction="left"><b>Disclaimer:</b> All doctor profiles listed on the website are taken from the Internet. If you have any concerns or suggestions, drop us a mail at <b><i> <a href="mailto:support@doctorsqueries.com">support@doctorsqueries.com</a></i></b>.</marquee>
      </div>
    </main>
  );
}
