import React from "react";
import Contact from "../components/About/Contact";
// import LetestBlog from "../components/About/LetestBlog";
import ArticleList from "../components/About/Blog";
import AboutTop from "../components/About/AboutTop";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>About | Doctors Queries</title>
                <meta name="description" content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com" />
                <link rel="canonical" href="https://www.doctorsqueries.com/about" />
                <meta name="keywords" content=" Doctors Queries, Partner with Doctors Queries" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@doctorsqueries" />
                <meta name="twitter:title" content="Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta name="twitter:description" content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta name="twitter:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
            </Helmet>
      <AboutTop />
{/*       <LetestBlog /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default About;
