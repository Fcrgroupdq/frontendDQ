import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";


const SingleBlogPage = () => {
  const { MetaTitle } = useParams();
 
  
  const [blog, setBlog] = useState(null); // Initialize blog state as null
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    axios.get(`https://drab-blue-mite-belt.cyclic.app/blog/${MetaTitle}`)
      .then((res) => {
        // Update the blog state with the fetched data
        setBlog(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [MetaTitle]); // Include metaUrl as a dependency to re-fetch data when it changes

  if (loading) {
    return <h2 style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>Loading...</h2>;
  }

  if (!blog) {
    // Handle the case when blog data is not available
    return <h2 style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>Blog not found</h2>;
  }
  
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col">
          <div class="lg:w-full mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={blog[0].FeaturedImage} />
            </div>
            <Heading color={'red'} m={'20px'}>{blog[0].Title}</Heading>
            
            <p class="leading-relaxed text-lg m-5 mb-4">{parse(blog[0].MetaDescription)}</p>
            {/* <a class="text-indigo-500 inline-flex items-center" href={blog[0].learnMoreLink}>Learn More */}
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
            {/* </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
