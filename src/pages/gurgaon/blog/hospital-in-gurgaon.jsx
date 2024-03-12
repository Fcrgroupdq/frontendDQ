import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function Hospitalgurgaon() {
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
          <title>Hospital in Gurgaon | Top 5 Best Hospitals in Gurgaon</title>
          <meta
            name="description"
            content="Find the top 5 best hospital in Gurgaon on Doctorsqueries.com. Get expert medical advice and find the perfect hospital for your healthcare needs."
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/hospital-in-gurgaon"
          />
          <meta name="keywords" content="Hospital in Gurgaon" />
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

              <h1 class="sm:text-5xl font-medium text-gray-900">
                Top 5 Hospital in Gurgaon | Best Hospital in Gurugram
              </h1>
            </div>

            <div class="conatiner-fluid">
              {/* <img class="w-full my-4" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500" alt="Sunset in the mountains" /> */}

              <p>
                Hospital in Gurgaon are important for several reasons:
                <ul>
                  <li>
                    <p>
                      <b>➥ Rising Healthcare Demand: </b>
                      Gurgaon's population and average per capita income are growing steadily, leading to an increasing demand for <b><i><a href="https://www.doctorsqueries.com/doctors">healthcare services.</a></i></b>
                      <br />
                    </p>

                    <p>
                      <b>➥ Medical Tourism: </b>
                      India has emerged as a popular destination for medical tourism due to its world-class healthcare facilities, skilled doctors, and affordable treatment options. Gurgaon, being a prominent city in India, attracts a significant number of medical tourists.
                      <br />
                    </p>

                    <p>
                      <b>➥ Educational Institutions: </b>
                      Gurgaon is home to several universities and colleges, which attract a large number of students. The presence of the best hospital in Gurgaon area ensures that students and working professionals have access to healthcare facilities in case of emergencies. <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Manufacturing Hub:: </b>
                      Gurgaon has been a manufacturing hub since its inception, and the presence of hospitals in the area is crucial for the well-being of the workers employed in these industries.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ State of Art Facilities: </b>
                      Many hospital in Gurgaon are equipped with advanced medical equipment and technology, providing patients with top-notch medical care.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Experienced Medical Professional: </b>
                      Best Hospitals are staffed by highly qualified and experienced doctors, nurses, and other healthcare professionals, ensuring that patients receive the best possible care.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Speciality Departments: </b>
                      Gurgaon-based hospitals offer specialized departments, such as Mother and Child Care, Orthopaedics, Joint Replacement and spinal Surgery, Kidney Transplantation and renal Diseases, Oncology, General Surgery, and Cardiology.
                      <br />
                      The best hospital in Gurgaon are important due to the rising healthcare demand, the potential for medical tourism, the presence of educational institutions, the manufacturing sector, the state-of-the-art facilities, experienced medical professionals, and specialized departments.
                      <br />
                    </p>

                  </li>
                </ul>
              </p>



              <h2 class="sm:text-2xl font-medium text-blue-900 mt-6 mb-2">
              Some of the key facilities available in the best hospital in Gurgaon include:
              </h2>

              <p>
             
                <ul>
                  <li>
                    <p>
                      <b>➥ Advanced Medical Equipment: </b>
                      Best Hospital in Gurgaon are equipped with state-of-the-art medical equipment and technology, ensuring that patients receive the best possible care.
                      <br />
                    </p>

                    <p>
                      <b>➥ Speciality Departments:: </b>
                      Hospitals offer specialized departments, such as Mother and Child Care, Orthopaedics, Joint Replacement & Spinal Surgery, Kidney Transplantation & Renal Diseases, Oncology, General Surgery, and Cardiology.
                      <br />
                    </p>

                    <p>
                      <b>➥ Emergency & Trauma Care: </b>
                      Immediate medical attention for accidents, injuries, and
                      critical medical conditions.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Diagnostic Services: </b>
                      Including laboratory tests, imaging services (X-rays, CT
                      scans, etc.), and other diagnostic procedures.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Maternity & Child Care: </b>
                      Services related to pregnancy, childbirth, and pediatric
                      care.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Surgery Services: </b>
                      Both minor and major surgical procedures.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Pharmacy Services: </b>
                      Dispensing of medications prescribed by hospital doctors
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Vaccination & Immunization: </b>
                      Providing vaccines for preventable diseases.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Specialty Clinics: </b>
                      Depending on the hospital, there may be specialized
                      clinics for specific medical conditions or specialties.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Rehabilitation Services: </b>
                      Physiotherapy and rehabilitation services for patients
                      recovering from surgeries or injuries.
                      <br />
                      <br />
                    </p>

                    <p>
                      <b>➥ Community Health Services: </b>
                      Outreach programs and health camps for the community.
                      <br />
                      <br />
                    </p>
                  </li>
                </ul>
              </p>

              {/* New */}

              <h3 class="sm:text-3xl font-medium text-blue-900 mt-6 mb-2">
                Top 5 Government Hospital in Gurgaon
              </h3>

              <p>
                <ul>
                  <li>
                    <li>
                      <p>
                        <b>1. Civil Hospital Gurgaon </b>
                        <br /> <br />
                        <b>Location: </b> Sector 10A, Gurgaon, Haryana.
                        <br />
                        <b>Description: </b> Civil Hospital Gurgaon is a
                        well-known government hospital that provides a wide
                        range of medical services to the community.
                        <br />
                      </p>
                    </li>

                    <br />
                    <br />

                    <li>
                      <p>
                        <b>2. General Hospital, Manesar </b>
                        <br /> <br />
                        <b>Location: </b> Manesar, Gurgaon, Haryana.
                        <br />
                        <b>Description: </b> The General Hospital in Manesar is
                        a government healthcare facility that offers various
                        medical treatments and services.
                        <br />
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>
                          3.{" "}
                          <a href="https://www.esic.gov.in/hospitals">
                            {" "}
                            ESIC Hospital{" "}
                          </a>{" "}
                        </b>
                        <br /> <br />
                        <b>Location: </b> Sector 3, IMT Manesar, Gurgaon,
                        Haryana.
                        <br />
                        <b>Description: </b> ESIC Hospital in Gurgaon is a
                        government hospital that caters to the healthcare needs
                        of workers and employees under the Employee State
                        Insurance Corporation (ESIC) scheme.
                        <br />
                      </p>
                    </li>

                    <br />
                    <br />

                    <li>
                      <p>
                        <b>4. Primary Centre, Pataudi </b>
                        <br /> <br />
                        <b>Location: </b> Pataudi, Gurgaon, Haryana.
                        <br />
                        <b>Description: </b> The primary health center in
                        Pataudi is a government healthcare facility that offers
                        basic medical services to the residents of Pataudi and
                        nearby areas.
                        <br />
                      </p>
                    </li>

                    <br />
                    <br />

                    <li>
                      <p>
                        <b>5. Primary Centre, Farrukhnagar </b>
                        <br /> <br />
                        <b>Location: </b> Farrukhnagar, Gurgaon, Haryana.
                        <br />
                        <b>Description: </b> The primary health center in
                        Pataudi is a government healthcare facility that offers
                        basic medical services to the residents of Pataudi and
                        nearby areas.
                        <br />
                      </p>
                    </li>
                  </li>
                </ul>
              </p>

              <br />
              <br />

              <p>
                These government hospitals in Gurgaon play a crucial role in
                providing affordable and accessible healthcare services to the
                residents of Gurgaon and its surrounding areas.
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

export default Hospitalgurgaon;
