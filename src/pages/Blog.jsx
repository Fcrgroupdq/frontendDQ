import React from 'react'
// import BlogCart from '../components/Blog/BlogCart'
// import BlogModel from '../components/Blog/BlogModel'
// import LetestBlog from '../components/About/LetestBlog'
import dentist from "../assets/blog/delhi/dentist.webp"
import {Helmet} from "react-helmet";

const Blog = () => {
   
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Blog |Doctors Queries</title>
                <meta name="description" content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com" />
                <link rel="canonical" href="https://www.doctorsqueries.com/blog" />
                <meta name="keywords" content=" Doctors Queries, Partner with Doctors Queries" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@doctorsqueries" />
                <meta name="twitter:title" content=" Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta name="twitter:description" content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta name="twitter:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
            </Helmet>
       
 <div>

 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-full my-4 object-fill" src={dentist} alt="Sunset in the mountains" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DoctorsQueries</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Who Is the Best General Physician Doctor in Delhi?</h1>
            <p class="leading-relaxed mb-3">Generally speaking, people in good health rarely need medications or need to see a specialist. So it’s natural that most give little thought to selecting a primary care physician or General physician in Delhi.</p>
            <div class="flex items-center flex-wrap ">
              <a href='https://www.doctorsqueries.com/where-to-find-the-best-general-physician-in-delhi' class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-full my-4 object-fill" src={dentist} alt="Sunset in the mountains" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='https://www.doctorsqueries.com' >Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-full my-4 object-fill" src={dentist} alt="Sunset in the mountains" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>

 </div>
 




    </div>
  )
}

export default Blog
