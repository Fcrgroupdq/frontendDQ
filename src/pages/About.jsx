import React from "react";
import Contact from "../components/About/Contact";
import LetestBlog from "../components/About/LetestBlog";
import ArticleList from "../components/About/Blog";
import AboutTop from "../components/About/AboutTop";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <AboutTop />
      <LetestBlog />
      {/* <Contact /> */}
    </div>
  );
};

export default About;
