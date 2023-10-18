import React from "react";
import Contact from "../components/About/Contact";
import LetestBlog from "../components/About/LetestBlog";
import ArticleList from "../components/About/Blog";
import AboutTop from "../components/About/AboutTop";

const About = () => {
  return (
    <div>
      <AboutTop />
      <LetestBlog />
      {/* <Contact /> */}
    </div>
  );
};

export default About;
