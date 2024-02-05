import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";


const SingleBlogPage = () => {
  const { MetaTitle } = useParams();
 
  
  const [blog, setBlog] = useState({}); // Initialize blog state as null
  const [loading, setLoading] = useState(true); // Initialize loading state as true


  const location = useLocation();

  // useEffect(() => {
  //   // Assuming metaTitle is a state or prop
  //   const newUrl = `/your-base-url/${metaTitle}`;
  //   window.history.replaceState(null, '', newUrl);
  // }, [metaTitle, location.pathname]);


  useEffect(() => {
    axios.get(`https://drab-blue-mite-belt.cyclic.app/blog/${MetaTitle}`)
      .then((res) => {
        console.log(res.data)
        // Update the blog state with the fetched data
        setBlog(res.data);
        setLoading(false);
        // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Include metaUrl as a dependency to re-fetch data when it changes

  if (loading) {
    return <h2 style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>Loading...</h2>;
  }

  if (!blog) {
    // Handle the case when blog data is not available
    return <h2 style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>Blog not found</h2>;
  }
  
  return (
    <div>


<div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{blog[0].Title}</title>
          <meta
            name="description"
            content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com"
          />
          <link rel="canonical" href="https://www.doctorsqueries.com/Dentist-in-Gurgaon" />
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

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col">
          <div class="lg:w-full mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={blog[0].FeaturedImage} />
            </div>
            <Heading color={'red'} m={'20px'}>{blog[0].Title}</Heading>
            
            <p class="leading-relaxed text-lg m-5 mb-4">{parse(blog[0].Description)}</p>
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
