import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";
import dentist from "../../../assets/blog/delhi/dentist.webp"
import hospitaldent from "../../../assets/blog/delhi/dental-treatment-in-delhi.webp"


function Dentistsindelhi() {
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
          <title>How to Find the Best Dentists in Delhi? Doctorsqueries</title>
          <meta
            name="description"
            content="Looking for the best dentists in Delhi? Look no further than Doctorsqueries, your ultimate resource for finding top-quality dental care in the city."
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/dentists-in-delhi"
          />
          <meta
            name="keywords"
            content="dentists in Delhi"
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
             
              <h1 class="sm:text-5xl font-medium text-gray-900">What are some good dentists in Delhi?</h1>

                
              
            </div>

            <div class="conatiner-fluid">
             <img class="w-full my-4" src={dentist} alt="Sunset in the mountains" />
         
              <p>
              Dentists in Delhi&nbsp;offer world-class dental services at a fraction of the cost without compromising on quality, making it an ideal choice for dental tourists. Delhi boasts state-of-the-art <a href="https://www.doctorsqueries.com/doctors"><strong><em><u>dental facilities</u></em></strong></a>&nbsp;that adhere to international standards of hygiene and safety.<br /> <br />
              Delhi has become famous for Cosmetic dentistry and smile makeovers. Cosmetic dentistry allows you to talk, smile, laugh, and eat in front of others without worrying about having your teeth judged. As you become more outgoing, people will be drawn to your positive attitude. This encourages you to socialize more, further boosting your self-confidence.
                
      
          
              </p>

             
            
              <h3 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
              What is Cosmetic dentistry or Smile makeover?
              </h3>

                <p>
                Cosmetic dentistry is dentistry aimed at creating a positive change in your teeth and your smile. Most think of tooth whitening or porcelain veneers, but a cosmetic dentist can provide much more. <br /><br />
                Skilled, experienced <b><i>dentists in Delhi </i></b>or cosmetic dentists can help to improve your appearance, your smile, and even your self-esteem and confidence. Today, cosmetic dentistry has continued to evolve to where cosmetic dentists can address functional and aesthetic patient concerns. <br /><br />
                Cosmetic dentistry in Delhi has evolved from simply replacing and restoring damaged teeth to covering a wide scope of aesthetic procedures. <br /><br />
                Today’s cosmetic dentistry includes tooth whitening, tooth bonding, tooth-colored restorations and fillings, porcelain veneers orthodontics, dental implants, and more. You may be surprised by how dentistry has evolved and what can be done by an experienced cosmetic dentist. <br /><br />
                </p>
            

                <h3 class="sm:text-4xl font-medium text-gray-900 mt-6 mb-2">
                Importance of Cosmetic dentistry or Smile makeover?
              </h3>

                <p>
                 The importance of cosmetic dentistry is easily defined – making someone gain confidence in the way that best fits their needs. <br /><br />
                 Cosmetic dentistry is important because in life, there are so many factors that cause teeth to chip, or to become discolored. Cosmetic dentistry fixes all of the imperfections you may see in yourself. <br /><br />
                 Something as simple as food and drink has natural or manmade dyes in them. Coffee, soda, and processed foods all have colors that can leave permanent stains on the enamel of your teeth. Brushing your teeth regularly will help correct the discoloration but enamel does not regenerate back – so if you want a way to fix it, cosmetic dentistry has your back. <br /><br />
                 This is where cosmetic dentistry becomes very prominent. Cosmetic dentistry now creates the fix for what was before the unfixable. From teeth whitening to crowns, and dentures to veneers, there are endless choices for cosmetic procedures. <br /><br />
                 Want to know more about DoctorsQueries, click <a href="https://www.instagram.com/doctorsqueries/"><strong><em><u>here</u></em></strong></a> <br /><br />
                 The demand for teeth reconstruction and restoration is very high, and the only way to compensate is to study and reinvent the industry. <br /><br />
                 The reinvention of older procedures has proven to be better and more effective in terms of time and results. Whitening teeth is now available in much less time needed—one hour and you can already flash your eight-time brighter white teeth! <br /><br />
                 Gapped teeth have also been a subject of reinvention. Reshaping and resizing teeth will help you achieve the look of properly aligned teeth in just a few visits to your cosmetic dentistry practitioner. <br /><br />


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

export default Dentistsindelhi;
