import React from 'react'
import HospitaltopSection from '../components/hospital/topSection'
import {Helmet} from "react-helmet";

const Hospital = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>List of Top 5 Hospitals Near You: Doctors Queries</title>
                <meta name="description" content=" Find the best hospitals near you with Doctors Queries' curated list of the top 5 hospitals in your area. Easily access a list of top 5 hospitals near you.
" />
                <link rel="canonical" href="https://www.doctorsqueries.com/hospitals" />
                <meta name="keywords" content=" Doctors Queries, Partner with Doctors Queries" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@doctorsqueries" />
                <meta name="twitter:title" content="Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta name="twitter:description" content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta name="twitter:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
                {/* OG Title*/}
                <meta property="og:title" content="Become a Partner with Doctors Queries: doctorsqueries.com" />
                <meta property="og:site_name" content="Doctors Queries" />
                <meta property="og:url" content="https://www.doctorsqueries.com/" />
                <meta property="og:description" content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png" />
            </Helmet>
      <HospitaltopSection />
    </div>
  )
}

export default Hospital
