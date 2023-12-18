import React from 'react'
import BlogCart from '../components/Blog/BlogCart'
import BlogModel from '../components/Blog/BlogModel'
import LetestBlog from '../components/About/LetestBlog'
import {Helmet} from "react-helmet";

const Blog = () => {
   
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Doctors Queries | Blog </title>
                <meta name="description" content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com" />
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="keywords" content=" Doctors Queries, Partner with Doctors Queries" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@doctorsqueries" />
                <meta name="twitter:title" content=" Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta name="twitter:description" content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta name="twitter:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
            </Helmet>
       
        <BlogCart />
        {/* <BlogModel /> */}
        {/* <LetestBlog /> */}
    </div>
  )
}

export default Blog
