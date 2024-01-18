import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function Demo() {
 

  return (
   
      {/* SEO Meta */}
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dentist in Noida | Doctors Queries</title>
          <meta
            name="description"
            content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com"
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/Dentist-in-Noida"
          />
          <meta
            name="keywords"
            content=" Doctors Queries, Partner with Doctors Queries"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@doctorsqueries" />
          <meta
            name="twitter:title"
            content="Become a Partner with Doctors Queries: doctorsqueries.com"
          />
          <meta
            name="twitter:description"
            content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com."
          />
          <meta
            name="twitter:image"
            content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png"
          />
        </Helmet>
      </div>
      {/*End SEO meta  */}

      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-3 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-6">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                DoctorsQueries
              </h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">
                Best Dentist in Noida
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                DOCTORSQUERIES is a brand new platform, our mission is to make
                quality healthcare affordable and accessible from
                anywhere.DOCTORSQUERIES is a brand new platform, our mission is
                to make quality healthcare affordable and accessible from
                anywhere.
              </p>

              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">
                Best Dentist in Noida
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed quo quibusdam eligendi sequi eos illum distinctio animi itaque omnis, quasi id, a ex necessitatibus officiis ab consequatur voluptatibus repellendus cupiditate! Quidem consequuntur, itaque magni ut aspernatur sunt dolor sed et cumque iure aliquam nesciunt officia maxime quos sint perspiciatis quia distinctio sequi soluta explicabo. Non soluta doloremque sequi, architecto earum ad possimus doloribus consectetur libero. Veritatis est laudantium expedita mollitia, non fugit nesciunt eligendi nostrum a illo animi nobis quibusdam distinctio velit porro eius consequatur exercitationem inventore neque aut deleniti repellat, facilis consequuntur corrupti! Obcaecati saepe voluptate voluptatibus officia? Magni possimus nemo sunt non veritatis ipsa voluptates illum corporis dolorem debitis quasi voluptatem praesentium ex voluptate odio eaque nobis officiis dolores, eius, maiores sed? Architecto rerum officiis libero quas!</p>
            </div>
          </div>
        </section>
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
   
  );
}

export default Demo;
