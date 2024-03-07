import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function HospitalDelhi() {
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
        
              <ul type="1">
               
               
                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">The best hospital in Delhi, Sir Ganga Ram Hospital -</h4>
                  
                  <p><b>➥ About Hospital:</b> 
                  Sir Ganga Ram Hospital, one of the best <a href="https://www.doctorsqueries.com/hospitals"><strong><em><u>hospital</u></em></strong></a> in Delhi takes pride in its cutting-edge facilities and innovative medical technology, which demonstrate its commitment to providing the highest level of treatment. Its medical centers have 35 perfectly equipped operating rooms that adhere to the highest standards for the best surgical results.
                 <br />

                 <strong>Location:</strong><strong>&nbsp;</strong>Rajinder Nagar, New Delhi, Delhi 110060</p> <br />

                 <p><b>➥ Team and Specialities:</b> 
                 <ol style="list-style-type: lower-roman;">
                    <li>Major renal transplantation center with over 650 live-related transplants in 10&nbsp;years.</li>
                    <li>Department of Nephrology leading center in the country.</li>
                    <li>Highest success rate of IVF units in India is 25% pregnancy rates.</li>
                 </ol>
                  
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                 <ol style="list-style-type: lower-roman;">
                    <li>675 bedded multispecialty hospital.</li>
                    <li>Ambulance available round the clock.</li>
                    <li>Pharmacy and emergency services are also available</li>
                 </ol>
                  
                  </p>

                  <p>Official Website: <a href="https://sgrh.com/"><strong><u>Sir Ganga Ram Hospital</u></strong></a></p>

                </li>

                <li>
                  
                  <h4 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">The best hospital in Delhi, Sir Ganga Ram Hospital -</h4>
                  
                  <p><b>➥ About Hospital:</b> 
                  Sir Ganga Ram Hospital, one of the best <a href="https://www.doctorsqueries.com/hospitals"><strong><em><u>hospital</u></em></strong></a> in Delhi takes pride in its cutting-edge facilities and innovative medical technology, which demonstrate its commitment to providing the highest level of treatment. Its medical centers have 35 perfectly equipped operating rooms that adhere to the highest standards for the best surgical results.
                 <br />

                 <strong>Location:</strong><strong>&nbsp;</strong>Rajinder Nagar, New Delhi, Delhi 110060</p> <br />

                 <p><b>➥ Team and Specialities:</b> 
                 <ol style="list-style-type: lower-roman;">
                    <li>Major renal transplantation center with over 650 live-related transplants in 10&nbsp;years.</li>
                    <li>Department of Nephrology leading center in the country.</li>
                    <li>Highest success rate of IVF units in India is 25% pregnancy rates.</li>
                 </ol>
                  
                  </p>
              
                  <p><b>➥ Infrastructure:</b> 
                 <ol style="list-style-type: lower-roman;">
                    <li>675 bedded multispecialty hospital.</li>
                    <li>Ambulance available round the clock.</li>
                    <li>Pharmacy and emergency services are also available</li>
                 </ol>
                  
                  </p>

                  <p>Official Website: <a href="https://sgrh.com/"><strong><u>Sir Ganga Ram Hospital</u></strong></a></p>

                </li>

                


              </ul>

              <p>
              By carefully considering these factors, you can confidently select the <b><i>best hospital for dental treatment in Gurgaon</i></b> that meets your specific needs and ensures optimal oral health care.
              </p>

            
              <h2 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
              The best hospital for dental treatment in Gurgaon
              </h2>
              <p>
              Now that we've discussed the important factors to consider when choosing the best hospital for dental treatment in Gurgaon, let's delve into some of the top hospitals that are known for their exceptional dental care.
              </p>
              <ul class="pl-6">
                <li> 
                  <b>➥ Medanta :</b> The Medicity: Medanta is a renowned multi-specialty hospital that offers top-notch dental care services. Their team of highly skilled dentists and state-of-the-art facilities ensure that patients receive the best possible treatment.
                  <br />
                  <p>Official Website: <a href="https://www.medanta.org/"><u>https://www.medanta.org/</u></a></p>
                </li>
                <li>
                  <b> ➥ Chronic illnesses:</b> General Physicians manage chronic
                  illnesses, such as diabetes, hypertension, asthma, and
                  arthritis.
                </li>
                <li> 
                  <b> ➥ Mental Health Conditions:</b> General Physicians diagnose
                  and treat mental health conditions, such as depression,
                  anxiety, and bipolar disorder.
                </li>
              </ul>

              <h3 class="sm-text-3xl font-medium text-gray-900 mt-6">
                Referral to Specialists of General Physician in Delhi
              </h3>
              <p>
                General Physicians work closely with other healthcare
                professionals, including specialists, to provide comprehensive
                care to patients. They refer patients to specialist general
                physician in Delhi when necessary and coordinate care to ensure
                that patients receive the appropriate care and treatment.

                <h4 class="sm-text-2xl font-medium text-gray-900 mt-6">Their role involves:</h4>
                <ul class="pl-6">
                  <li>
                    <b>➥ Coordination of care:</b> General Physicians play a key
                    role in coordinating care for patients with complex health
                    needs. They work with other healthcare professionals to
                    develop a care plan that meets the patient's needs and
                    ensures continuity of care across different healthcare
                    settings.
                  </li>
                  <li>
                    <b>➥ Patient Advocacy:</b> General Physicians are advocates for their patients. They help patients navigate the healthcare system and ensure that their rights and needs are met. They also advocate for policies and programs that promote health equity and access to healthcare for all individuals and families.
                  </li>
                 
                </ul>

              </p>
              <p class="mt-6">
              General Physicians are advocates for their patients. They help patients navigate the healthcare system and ensure that their rights and needs are met. They also advocate for policies and programs that promote health equity and access to healthcare for all individuals and families. <br/>              You may find the best doctors and more information about the best general physician in Delhi which are mentioned below sites –
              <ul class="pl-6">
                <b>
                <li>➥ Lybrate</li>
                <li>➥ Mediindia</li>
                <li>➥ Practo</li>
                <li>➥ <a href="https://www.doctorsqueries.com/" class="text-red-900"> Doctorsqueries</a></li>
                <li>➥ Ourdoctors</li>
                </b>
              </ul>
              </p>
              <p class="mt-3" >Also, you can find information on all doctors around Delhi in depth on our website <a href="https://www.doctorsqueries.com/doctors"></a>Doctors Queries</p>
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

export default HospitalDelhi;
