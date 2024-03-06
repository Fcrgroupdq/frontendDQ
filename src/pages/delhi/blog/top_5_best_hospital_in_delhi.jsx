import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function Hospital() {
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
          <title> List of Top 5 Best Hospital in Delhi- Find the Best</title>
          <meta
            name="description"
            content="Find the best hospital in Delhi with the list of top 5 hospitals on DoctorsQueries. Get the best medical care and treatment for your needs."
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/list-of-top-5-best-hospital-in-delhi"
          />
          <meta
            name="keywords"
            content="hospital in delhi, best hospital in delhi, top 5 hospital in delhi, top 5 hospital in delhi"
          />
        </Helmet>
        <style>
          
        </style>
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
                <h2 class="sm:text-4xl font-medium text-gray-900">Top 5 Best Hospital in Delhi</h2>
                <h3>1. The best hospital in Delhi, Sir Ganga Ram Hospital -</h3>
<p><strong>About Hospital</strong></p>
<p>Sir Ganga Ram Hospital, one of the best <a href="https://www.doctorsqueries.com/hospitals"><strong><em><u>hospital</u></em></strong></a>&nbsp;in Delhi takes pride in its cutting-edge facilities and innovative medical technology, which demonstrate its commitment to providing the highest level of treatment. Its medical centers have 35 perfectly equipped operating rooms that adhere to the highest standards for the best surgical results.</p>
<p><strong>Location:</strong><strong>&nbsp;</strong>Rajinder Nagar, New Delhi, Delhi 110060</p>
<p><strong>Team and Specialities</strong></p>
<ul>
<li>Major renal transplantation center with over 650 live-related transplants in 10&nbsp;years.</li>
<li>Department of Nephrology leading center in the country.</li>
<li>Highest success rate of IVF units in India is 25% pregnancy rates.</li>
</ul>
<p><strong>Infrastructure</strong></p>
<ul>
<li>675 bedded multispecialty hospital.</li>
<li>Ambulance available round the clock.</li>
<li>Pharmacy and emergency services are also available.</li>
</ul>
<p>Official Website: <a href="https://sgrh.com/"><strong><u>Sir Ganga Ram Hospital</u></strong></a></p>
<h3>2. Indraprastha Apollo Hospital</h3>
<p>Indraprastha Apollo, the best Hospital in New Delhi was established in 1996 and is NABH, NABL &amp; JCI accredited. This hospital includes and offers 10,000 beds across 64 hospitals, more than 2,200 pharmacies, over 100 primary care &amp; and diagnostic clinics, and 115 telemedicine units across 9 countries.&nbsp;Indraprastha Apollo Hospital, the best hospital in New Delhi is the first hospital in India to perform a Paediatric Liver Transplant in 1998.</p>
<p><strong>Location</strong>:&nbsp;Indraprastha Apollo Hospitals, Sarita Vihar, Delhi Mathura Road New Delhi Delhi 110076 India</p>
<p><strong>Team and Specialities</strong></p>
<p>The Indraprastha Apollo Hospital ranked first in Neurosciences, Renal Sciences, Oncology, Paediatrics, Gynaecology, and Obstetrics and Emergency in The Times of India Healthcare Survey 2016.</p>
<p><strong>Infrastructure</strong></p>
<ul>
<li>Spread over 15 acres, the hospital has 710 beds.</li>
<li>6 beds dedicated to bone marrow transplant units with very strict infection control practices.</li>
<li>64-Slice Scan coupled with data acquisition which provides the highest temporal resolution</li>
</ul>
<p>Official Website: <a href="https://www.apollohospitals.com/delhi/"><strong><u>Indraprastha Apollo Hospital</u></strong></a></p>
<h3>3. Max Super Speciality Hospital, the best hospital in Delhi</h3>
<ul>
<li>Max Super Specialty Hospital is a multi-specialty hospital situated in Shalimar Bagh, one of the best hospital in Delhi. It offers services in various medical specialties such as cardiology, gastroenterology, neurology, oncology, and renal transplant.</li>
<li>Additionally, it has a blood bank and pathology laboratory. The hospital has tie-ups with some of the best hospitals in India for tertiary care.</li>
</ul>
<p><strong>Location</strong>: Max Super Specialty Hospital is located in Shalimar Bagh.</p>
<p><strong>Team and Specialities</strong></p>
<ul>
<li>Max Super Specialty Hospital in Shalimar Bagh is a 350-bed hospital that offers world-class treatment in all specialties. With 70% of its doctors holding an overseas qualification, the hospital offers cutting-edge treatment and the latest technology.</li>
<li>Some of the key specialties offered at Max Super Specialty Hospital Shalimar Bagh include cardiology, neurology, oncology, orthopedics, and urology.</li>
</ul>
<p><strong>Infrastructure</strong></p>
<ul>
<li>Max Super Specialty Hospital is a 240-bed hospital in Shalimar Bagh. It has a team of over 1000 doctors and 3000 staff. The hospital has a full-fledged laboratory and testing unit.&nbsp;</li>
</ul>
<p>Official Website: <a href="https://www.maxhealthcare.in/"><strong><u>Max Super Specialty Hospital</u></strong></a></p>
<h3>4. BLK Super Speciality Hospital, Best hospital in Delhi</h3>
<p>BLK Super<strong>&nbsp;</strong>Speciality Hospital is one of the best largest stand-alone private sector hospital headquartered in New Delhi, India. It was established by B.L. Kapur on 2 January 1959. It is also accredited by the NABH and National Accreditation Board for its Testing and Calibration Laboratories.</p>
<p><strong>Location:&nbsp;</strong>803, Tower B4, Spaze iTech Park, Sec &ndash; 49, Gurgaon, India</p>
<p><strong>Team and Specialities</strong></p>
<p>Dr. B L Kapur, a reputed Obstetrician and Gynaecologist settled a Charitable Hospital in 1930 at Lahore. In 1947, after moving to post-partition India, and settled in a Maternity Hospital at Ludhiana. In 1956 on the invitation of Prime Minister, Dr. B L Kapur started the project for setting up a 200-bed hospital in Delhi.</p>
<p><strong>Infrastructure</strong></p>
<p>Spread across five acres of land, with a capacity of approximately 650 beds, BLK Super Speciality Hospital is the largest tertiary care private hospital in the country; the outpatient services are spread over two floors with around 80 consultation rooms.</p>
<p>Official Website: <a href="https://www.blkmaxhospital.com/"><strong><u>BLK Super Speciality Hospital</u></strong></a></p>
<h3>5. Fortis Escorts Heart Institute</h3>
<p>Fortis Escorts Heart Institute is one of the best hospital in Delhi. It is a multispecialty hospital that provides world-class healthcare services to patients from all over the world.</p>
<p><strong>Location</strong>:</p>
<p>Fortis Escorts Heart Institute is located in the heart of Delhi, the capital of India. The hospital has been operational for over 25 years and is one of the most advanced cardiac care facilities in the country.</p>
<p><strong>Team and Specialities</strong></p>
<p>Fortis Escorts Heart Institute is one of the leading hospitals in Delhi for cardiac care. It offers a wide range of specialties such as interventional cardiology, electrophysiology, cardiac surgery, and others.</p>
<p><strong>Infrastructure</strong></p>
<p>The hospital has a total of 575 beds, which makes it one of the largest hospitals in Delhi. The hospital offers a wide range of medical services, including cardiology, neurology, nephrology, and oncology.</p>
<p>Official Website: <a href="https://www.fortishealthcare.com/"><strong><u>Fortis Escorts Heart Institute</u></strong></a></p>



              <p>
                Generally speaking, people in good health rarely need
                medications or need to see a specialist. So it’s natural that
                most give little thought to selecting a primary care physician
                or
                <b>
                  <i>General physician in Delhi</i>
                </b>
                . At some point, though, everyone is going to feel under the
                weather, which might call for a medical opinion.
                <br />
                This is where and when it makes sense to have the best general
                physician in Delhi you can trust and who can act as a first
                point of contact into a health care system. The best general
                physician
                <a href="https://www.doctorsqueries.com/doctors"> doctor </a> in
                Delhi can provide preventive care, teach healthy lifestyle
                choices, identify and treat common medical conditions, and make
                referrals to medical specialists when needed. 
              </p>

              <h2 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
                Importance of General Physician in Delhi?
              </h2>
              <p>
                With healthcare now becoming a priority to most, even the
                smallest signs of sickness receive care. From an itchy throat to
                a mild cough or a spike in temperature, many rush to clinics to
                seek care from the general physician. The best General physician
                in Delhi have become more occupied with the current rise of
                pollution. General physician in Delhi are also available on a
                call basis. 
                <br />A General Physician in Delhi is essential to help an
                individual navigate to good health and stay healthy. Preventing
                diseases by identifying the risk factors. Coordinating and
                managing chronic disease care for longevity and better quality
                of life. 
              </p>

            
              <h3 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
              Role of a General Physician
              </h3>
              <p>
                A General Physician is a key member of the primary healthcare
                team. They are trained to provide comprehensive care to
                individuals and families, from preventive care to
                the management of acute and chronic illnesses.
              </p>
              <h4 class="sm-text-2xl font-medium text-gray-900 mb-5 mt-5">Their role involves:</h4>
              <ul class="pl-6">
                <li>
                  <b>➥ Preventive care:</b> It is an important aspect of primary
                  healthcare. General Physicians play a crucial role in
                  promoting health and preventing diseases through.
                </li>
                <li>
                  <b>➥ Regular health check-ups:</b> General Physicians conduct
                  regular health check-ups to detect health problems early on
                  and provide appropriate interventions
                </li>
                <li>
                  <b>➥ Immunizations:</b> General Physicians provide vaccinations
                  to prevent infectious diseases.
                </li>
                <li>
                  <b>➥ Health Education: </b> General Physicians educate patients
                  about healthy lifestyle choices, such as healthy eating
                  habits, regular exercise, and avoiding tobacco and alcohol.
                </li>
              </ul>

              <h4 class="sm-text-2xl font-medium text-gray-900 mt-6 mb-6">
                Diagnosis and treatment of illnesses
              </h4>
              <p>
                General Physicians are trained to diagnose and treat a wide
                range of health conditions, including:
              </p>
              <ul class="pl-6">
                <li> 
                  <b>➥ Acute illnesses:</b> General Physicians treat acute
                  illnesses, such as colds, flu, infections, and injuries.
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

export default Hospital;
