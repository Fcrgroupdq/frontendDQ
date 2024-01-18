import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";


function Blog = () => {
   
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
       
        <BlogCart />

        <h2>Test</h2>
        {/* <BlogModel /> */}
        {/* <LetestBlog /> */}
    </div>
  )
}

export default Blog
