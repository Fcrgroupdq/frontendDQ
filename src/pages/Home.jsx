import React from "react";
import HomeMain from "../components/Home/Home";
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Become a Partner with Doctors Queries</title>
                <meta name="description" content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <link rel="canonical" href="https://www.doctorsqueries.com/" />
                <meta name="keywords" content=" Doctors Queries, Partner with Doctors Queries" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@doctorsqueries" />
                <meta name="twitter:title" content="Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta name="twitter:description" content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta name="twitter:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
              
            </Helmet>
      <HomeMain />

    </div>
  );
};

export default Home;
