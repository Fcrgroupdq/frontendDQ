import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";


function Cosmeticgurgaon() {
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
          <title>Top Cosmetic Surgeon in Gurgaon: Updated List 2024</title>
          <meta
            name="description"
            content="Find the top cosmetic surgeon in Gurgaon at DoctorsQueries's website. Get an updated list for 2024 to choose the best specialist for your needs."
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/cosmetic-surgeon-in-gurgaon"
          />
          <meta
            name="keywords"
            content="cosmetic surgeon in Gurgaon, best cosmetic surgeon in Gurgaon"
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
             
              <h1 class="sm:text-5xl font-medium text-gray-900">Best Cosmetic Surgeon in Gurgaon: DoctorsQueries</h1>

                
              
            </div>

            <div class="conatiner-fluid">
              {/* <img class="w-full my-4" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500" alt="Sunset in the mountains" /> */}

              <p>
             
              These days finding the <b><i>best cosmetic surgeon in Gurgaon </i></b>is a hard nut to crack. But you are lucky enough as we are here to guide you on the same so that you can get the best treatment followed by high-class care and many more.
                
                <br />
                With the help of the <b><i><a href="https://www.doctorsqueries.com/cosmetic-surgeons-in-south-delhi">best cosmetic surgeon</a></i></b>, you can get your cosmetic surgery done in the right manner and get the right guidance so that everything goes as you want it. Now, let us take you on a tour of some of the best cosmetic surgeons in Gurgaon. 
                <br />
                In this blog post, we will explore the factors to consider when selecting the best dental hospital in Gurgaon and highlight some of the top hospitals known for their excellence in dental care.             
                
              </p>

            
         
              <ul class="pl-6">
                <li>
                  <b>➥ Dr Ritesh Anand:</b> With over 22 years of experience, Dr Ritesh Anand is a highly renowned cosmetic surgeon in Gurgaon. In addition to this, he has expertise in performing multiple successful cosmetic surgeries. Furthermore, many patients have seen the visible results and found cosmetic surgeries to be extremely helpful.
                </li>
                <li>
                  <b>➥ Dr Anmol Chugh: </b> Best known for plastic surgery, Dr Anmol Chugh is recognized for plastic surgery. Up until now, he has gained hundreds of successful patient stories and positive reviews as well. In addition to this, you get to pay an affordable consultation fee and the right guidance.
                </li>
                <li>
                  <b>➥ Dr Ashit Gupta:</b> With an overall 23 years of experience, Dr Ashit Gupta holds expertise in cosmetic surgeries like hair transplant, laser surgery, and many more. Furthermore, you can easily book your appointment and get the right guidance for your cosmetic surgery.
                </li>
                <li>
                  <b>➥ Dr Shiksha Bansal: </b> Equipped with over 10 years of experience, Dr Shiksha Bansal can be reached at South City-I, Gurgaon with a nominal consultation fee. In addition to this, you should know that she has assisted many patients in getting the desirable look and guided them in the right manner.
                </li>
                <li>
                  <b>➥ Dr Preeti Yadav: </b> Known for her expertise in plastic surgery and many other cosmetic surgeries, Dr Preeti Yadav holds 13 years of experience in total and is available for consultation in Sector-57, Gurgaon. Also, she is available for online consultation so that you can get your consultation done at your house.
                </li>
                <li>
                  <b>➥ Dr Raghav Mantri: </b> Highly recognized for expertise in all types of cosmetic surgeries, Dr Raghav Mantri holds 22 years of experience and can be consulted at Sushant Lok I, Gurgaon in Max Hospital. His appointments can be easily booked and one can get expert guidance from him.
                </li>
                <li>
                  <b>➥ Dr Lokesh: </b> One of the most senior and best cosmetic surgeons in Gurgaon, Dr Lokesh is highly reliable when it comes to performing any kind of cosmetic surgery. You can easily reach him and share your concerns for a reliable solution.
                </li>
                

              </ul>




              <h4 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
              Get the Best Cosmetic Surgeon in Gurgaon
              </h4>
              <p>
              These days you cannot rely on any random <b><i><a href="https://www.instagram.com/doctorsqueries">doctor </a></i></b>for your cosmetic surgery and only the experienced ones can help you out in choosing the right type of cosmetic surgery with minimal disadvantages. <br />
              Now that you have a list of some best cosmetic surgeons in Gurgaon, it’s time to make a choice and get started with getting guidance with the right type of cosmetic surgery. <br />
              Do visit our website again as we will be appearing soon with another interesting write-up for our readers!
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

export default Cosmeticgurgaon;
