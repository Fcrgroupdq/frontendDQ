import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function Cosmetiicsurgeon() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/doctors/doctors/near/?cat=${"dentist"}&status=approved&query=${"gurugram"}`
      )
      .then((res) => {
        setDoctors(res.data);
      });
  }, []);

  return (
    <>
      {/* SEO Meta */}
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Best Cosmetic Surgeons in South Delhi: DoctorsQueries</title>
          <meta
            name="description"
            content="Find the best cosmetic surgeons in South Delhi on DoctorsQueries website. Book your consultation today and enhance your beauty with the experts."
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/cosmetic-surgeons-in-south-delhi"
          />
          <meta
            name="keywords"
            content="cosmetic surgeons in South Delhi, best cosmetic surgeons in South Delhi"
          />
        </Helmet>
        <style></style>
      </div>
      {/*End SEO meta  */}

      <div>
        <div class="rounded-md border-2 border-red-500 text-gray-600 body-font">
          <div class="container px-3 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-6">
              <h2 class="text-indigo-500 tracking-widest font-medium title-font mb-1">
                DoctorsQueries
              </h2>
             
              <h1 class="sm:text-5xl font-medium text-gray-900">Top Cosmetic Surgeons in South Delhi: Updated List 2024</h1>

                
              
            </div>

            <div class="conatiner-fluid">
              {/* <img class="w-full my-4" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500" alt="Sunset in the mountains" /> */}

              <p>
              Are you looking for a top cosmetic surgeon? If yes, then you’ll be glad to know we have brought you some reliable <b><i>cosmetic surgeons in South Delhi</i></b>! With best-in-class service and specialization in various aspects of cosmetics, you are bound to experience visible results within the stipulated time frame.
               <br /><br />

               In addition to this, you can get expert guidance and reviews from verified users to make the right choice for yourself. Now, let us take you on a short tour of some of the best <b><i><a href="https://www.doctorsqueries.com/doctors">cosmetic surgeons </a></i></b>in South Delhi! 
              
               
               <h3 class="sm:text-3xl font-medium text-gray-900">List of Top 6 Surgeons in South Delhi</h3>
              <ul class="pl-6">
                <li>
                  <b>➥ Dr Manisha Kapoor Aesthetic: </b> With over 22 years of experience in the field of cosmetics, Dr Manisha is a highly reputed name specializing in plastic surgery. In addition to this, she brings to the table more than 280 patient stories.
                </li><br />
                <li>
                  <b>➥ Dr Anil Kumar Kaler: </b> Mainly known for Rhinoplasty surgery, Dr Anil Kumar Kaler delivers the best treatment and best patient care to assist patients in feeling good about themselves through a safe transformation. Up until now, many patients have been successfully treated.
                </li><br />
                <li>
                  <b>➥ Dr Amit Gupta :</b> The next reliable option for you is Dr Amit Gupta who brings you specialization in hair transplant and many other cosmetic surgeries. Situated in South Extension, you can easily get his appointment with an affordable consultation fee.
                </li><br />
                <li>
                  <b>➥ Dr. (Col) Vijay Langer : </b> With multiple degrees and a gold medal in plastic surgery, Dr Vijay is highly reputed for body contouring, non-operative facial rejuvenation, hair treatment, hand surgery, and many more. With him, no issue is a barrier and you get best-in-class treatment for your cosmetic surgery.
                 
                  <b>Official Website: <a href="https://www.langersculpt.com/">Dr. (Col) Vijay Langer</a></b>
                </li><br />
                <li> 
                  <b>➥ Dr SK Chawla:  </b> With over 29 years of experience, Dr SK Chawla is another reputed name in the field of cosmetic surgery. You can easily reach out to him at his clinic, South Delhi Cosmetic Clinic at any time between 10 AM to 7:30 PM. So, better to reach him if you are located near the clinic.
                </li><br />
                <li>
                  <b>➥ Dr Shilpi Bhadani:  </b> The next name for you is Dr Shipli Bhadani with over 19 years of experience in cosmetic surgeries. She is usually consulted by patients for hair transplants, skin scars, and other related surgeries. In addition to this, you can reach her anytime between 10 AM to 6 PM.
                </li><br />
                
              </ul>

              <h2 class="sm:text-2xl font-medium text-gray-900">Why Choose Cosmetic Surgeons in South Delhi?</h2>

            <p>
            Although you have multiple surgeons to choose from, <b><i>cosmetic surgeons in South Delhi </i></b>are known for performing successful cosmetic surgeries to help patients return their bodies to their natural form. The above-listed cosmetic surgeons are licensed followed by professional training. You can simply rely on them for tissue transfer, body contouring, laser surgery, and many more.
            <br />
            With these surgeons, you are guaranteed to get the best treatments, periodic consultation, after-surgery patient care, testing before surgery, and many more. <br />
            Furthermore, you should also know that many of these cosmetic surgeons in South Delhi provide online consultations, so need not go anywhere and get your queries solved at your place. <br />
            So, what are you waiting for? If you are looking forward to getting any cosmetic surgery done, choose from the listed reliable names!

           
            </p>
              </p>

        
      
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      {/* <section class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              DoctorsQueries | Best Dentist in Delhi
            </h1>
            <p class="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="flex flex-wrap list-none -mb-1">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a href="/anesthesiology-in-delhi" class="text-gray-600 hover:text-red-500">Anesthesiology</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Fifth Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Sixth Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Seventh Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section> */}

      {/* End Quick Links */}
    </>
  );
}

export default Cosmetiicsurgeon;
