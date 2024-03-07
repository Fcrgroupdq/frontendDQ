import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function Besthospital() {
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
          <title>List of Top 5 Best Hospital in Delhi- Find the Best</title>
          <meta
            name="description"
            content=" Find the best hospital in Delhi with the list of top 5 hospitals on DoctorsQueries. Get the best medical care and treatment for your needs."
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/list-of-top-5-best-hospital-in-delhi"
          />
          <meta
            name="keywords"
            content="hospital in delhi, best hospital in delhi, top 5 hospital in delhi, top 5 hospital in delh"
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
             
              <h1 class="sm:text-5xl font-medium text-gray-900">Top 5 Best Hospitals in Delhi - Updated List 2024</h1>

              
            </div>

            <div class="conatiner-fluid">
              {/* <img class="w-full my-4" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500" alt="Sunset in the mountains" /> */}

              <h2 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
              Top 5 Best Hospital in Delhi
              </h2>
        
              <ul>
               
               
                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">The best hospital in Delhi, Sir Ganga Ram Hospital -</h4>
                  
                  <p><b>➥ About Hospital:</b> 
                  Sir Ganga Ram Hospital, one of the best <a href="https://www.doctorsqueries.com/hospitals"><b><em><u>hospital</u></em></b></a> in Delhi takes pride in its cutting-edge facilities and innovative medical technology, which demonstrate its commitment to providing the highest level of treatment. Its medical centers have 35 perfectly equipped operating rooms that adhere to the highest standards for the best surgical results.
                 <br />

                 <b>Location:</b> Rajinder Nagar, New Delhi, Delhi 110060</p> <br />

                 <p><b>➥ Team and Specialities:</b> 
                 <ol >
                    <li>Major renal transplantation center with over 650 live-related transplants in 10&nbsp;years.</li>
                    <li>Department of Nephrology leading center in the country.</li>
                    <li>Highest success rate of IVF units in India is 25% pregnancy rates.</li>
                 </ol>
                  
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                 <ol >
                    <li>675 bedded multispecialty hospital.</li>
                    <li>Ambulance available round the clock.</li>
                    <li>Pharmacy and emergency services are also available</li>
                 </ol>
                  
                  </p>

                  <p><b>Official Website:</b> <a href="https://sgrh.com/">Sir Ganga Ram Hospital</a></p>

                </li>

                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">Indraprastha Apollo Hospital</h4>
                  
                  <p>
                  Indraprastha Apollo, the best Hospital in New Delhi was established in 1996 and is NABH, NABL & JCI accredited. This hospital includes and offers 10,000 beds across 64 hospitals, more than 2,200 pharmacies, over 100 primary care & and diagnostic clinics, and 115 telemedicine units across 9 countries. Indraprastha Apollo Hospital, the best hospital in New Delhi is the first hospital in India to perform a Paediatric Liver Transplant in 1998.
                 <br />

                 <b>Location:</b> Indraprastha Apollo Hospitals, Sarita Vihar, Delhi Mathura Road New Delhi Delhi 110076 India</p> <br />

                 <p><b>➥ Team and Specialities:</b> 
                 The Indraprastha Apollo Hospital ranked first in Neurosciences, Renal Sciences, Oncology, Paediatrics, Gynaecology, and Obstetrics and Emergency in The Times of India Healthcare Survey 2016.
                  
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                 <ol >
                    <li>Spread over 15 acres, the hospital has 710 beds.</li>
                    <li>6 beds dedicated to bone marrow transplant units with very strict infection control practices</li>
                    <li>64-Slice Scan coupled with data acquisition which provides the highest temporal resolution</li>
                 </ol>
                  
                  </p>

                  <p>Official Website: <a href="https://www.apollohospitals.com/delhi/"><b>Indraprastha Apollo Hospital</b></a></p>

                </li>

                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">Max Super Speciality Hospital, the best hospital in Delhi</h4>
                  
                  <p>
                  
                 <ul>
                  <li>
                  Max Super Specialty Hospital is a multi-specialty hospital situated in Shalimar Bagh, one of the best hospital in Delhi. It offers services in various medical specialties such as cardiology, gastroenterology, neurology, oncology, and renal transplant.
                  </li>
                  <li>Additionally, it has a blood bank and pathology laboratory. The hospital has tie-ups with some of the best hospitals in India for tertiary care.</li>
                 </ul>
                 
                 </p> <br />

                 <p><b>Location:</b> 
                 Max Super Specialty Hospital is located in Shalimar Bagh                  
                  </p>
                 
                 <p><b>➥ Team and Specialities:</b> 
                 
                 <ol >
                    <li>Max Super Specialty Hospital in Shalimar Bagh is a 350-bed hospital that offers world-class treatment in all specialties. With 70% of its doctors holding an overseas qualification, the hospital offers cutting-edge treatment and the latest technology.</li>
                    <li>Some of the key specialties offered at Max Super Specialty Hospital Shalimar Bagh include cardiology, neurology, oncology, orthopedics, and urology.</li>
                    
                 </ol>
                   
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                 <ol style="list-style-type: lower-roman;">
                    <li>Max Super Specialty Hospital is a 240-bed hospital in Shalimar Bagh. It has a team of over 1000 doctors and 3000 staff. The hospital has a full-fledged laboratory and testing unit</li>
                    
                 </ol>
                  
                  </p>

                  <p>Official Website: <a href="https://www.maxhealthcare.in/"><b>Max Super Specialty Hospital</b></a></p>

                </li>


                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">BLK Super Speciality Hospital, Best hospital in Delhi</h4>
                  
                  <p>
                  BLK Super Speciality Hospital is one of the best largest stand-alone private sector hospital headquartered in New Delhi, India. It was established by B.L. Kapur on 2 January 1959. It is also accredited by the NABH and National Accreditation Board for its Testing and Calibration Laboratories

                 
                 </p> <br />

                 <p><b>Location:</b> 
                 803, Tower B4, Spaze iTech Park, Sec – 49, Gurgaon, India                  
                  </p>
                 
                 <p><b>➥ Team and Specialities:</b> 
                 Dr. B L Kapur, a reputed Obstetrician and Gynaecologist settled a Charitable Hospital in 1930 at Lahore. In 1947, after moving to post-partition India, and settled in a Maternity Hospital at Ludhiana. In 1956 on the invitation of Prime Minister, Dr. B L Kapur started the project for setting up a 200-bed hospital in Delhi.

                   
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                  Spread across five acres of land, with a capacity of approximately 650 beds, BLK Super Speciality Hospital is the largest tertiary care private hospital in the country; the outpatient services are spread over two floors with around 80 consultation rooms. 
                  </p>

                  <p>Official Website: <a href="https://www.blkmaxhospital.com/"><b>BLK Super Speciality Hospital</b></a></p>

                </li>

                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">Fortis Escorts Heart Institute</h4>
                  
                  <p>
                  Fortis Escorts Heart Institute is one of the best hospital in Delhi. It is a multispecialty hospital that provides world-class healthcare services to patients from all over the world.
                 
                 </p> <br />

                 <p><b>Location:</b> 
                 Fortis Escorts Heart Institute is located in the heart of Delhi, the capital of India. The hospital has been operational for over 25 years and is one of the most advanced cardiac care facilities in the country  
                 </p>
                 
                 <p><b>➥ Team and Specialities:</b> 
                 Fortis Escorts Heart Institute is one of the leading hospitals in Delhi for cardiac care. It offers a wide range of specialties such as interventional cardiology, electrophysiology, cardiac surgery, and others.
                   
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                  The hospital has a total of 575 beds, which makes it one of the largest hospitals in Delhi. The hospital offers a wide range of medical services, including cardiology, neurology, nephrology, and oncology
                  </p>

                  <p>Official Website: <a href="https://www.fortishealthcare.com/"><b>Fortis Escorts Heart Institute</b></a></p>

                </li>


              </ul>

             
            
              <h2 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
              Conclusion
              </h2>
              <p>
              In summary, the <b><i>top 5 best hospital in Delhi </i></b>have been carefully curated based on their quality of care, expertise, and facilities. This updated list for 2024 is a reliable resource for individuals seeking the best hospital in Delhi.
              <br /><br />
              Whether you need specialized treatment, advanced medical procedures, or exceptional patient care, these hospitals have proven their excellence. When it comes to your health, choose from the top 5 best hospitals in Delhi for the best possible medical care and outcomes. <br /><br />
              
              Visit DoctorsQueries to find the best hospital in Delhi that suits your needs.
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

export default Besthospital;
