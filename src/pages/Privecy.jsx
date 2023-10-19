import React from 'react';
import {Box} from "@chakra-ui/react"

const Privecy = () => {
  const containerStyle = {
    textAlign: 'left',
    
    margin:'auto' // Center-align text
  };

  const headingStyle = {
    color: 'black',  
    fontWeight: 'bold', 
       // Red color for headings
    fontSize: '24px',
    marginBottom:"5px"  // Font size 22px for headings
  };

  return (
    <Box m='auto' width={["85%","70%"]}>
        <div  className="privacy-policy" style={containerStyle}>
      <h2 style={headingStyle}>Privacy Policy</h2>

      <h3 style={headingStyle}>Introduction</h3>
      <p>
        This privacy policy, according to the Data Protection Act 1988, sets out how any data that you provide us or the data that we collect from you is processed by Doctorsqueries. We are focused on guaranteeing that your security is protected or ensured when utilizing this site. Should we request that you give certain information by which you can be distinguished, then you can be assured that it may be utilized as a part of an agreement along with this security statement. By refreshing this page, We may change this policy every once in a while. You should check this page now and again to guarantee that you are content with any progressions.
      </p>

      <h3 style={headingStyle}>Data Collection</h3>
      <p>
        We may collect the following data:
      </p>
      <ul>
        <li>Name and job title</li>
        <li>Contact data including mobile number, email address</li>
        <li>Statistic data, for example, preferences, postcode, and interests</li>
        <li>Other additional data related to client studies</li>
      </ul>

      <h3 style={headingStyle}>How We Use Information</h3>
      <p>
        Contact data will be used to keep up contact, and information gathered is utilized just to enhance the connection between the Company and its customers, at times to issue surveys that might be disregarded by the customer on the off chance that they so want. Personal data that we gather won't be sold, imparted, or leased to some other outsider, and your entitlement to data security will be regarded consistently by one of our Companies Security.
      </p>

      <h3 style={headingStyle}>Data Protection</h3>
      <p>
        We are focused on guaranteeing that your data is always secure. We have set up appropriate physical, electronic, and administrative procedures with a specific end goal to counteract unapproved access or disclosure, to shield and secure the data that we gather on the web.
      </p>

      <h3 style={headingStyle}>How We Use Cookies</h3>
      <p>
        A little record that requests permission to be placed on your computer's hard drive is a cookie. When you concur, the cookie and the document are included and breaks down web activity or tells you when and where you visit a specific website. Cookies permit all web applications to react to you as an individual. The web application can tailor its operations to your likes, necessities, and aversions by get-together and recollecting data about your inclinations. We also utilize activity log cookies to distinguish which pages are being utilized still. This encourages us to examine website page information movement and enhances our site with a specific end goal to tailor it according to client needs. We just utilize the statistical analysis of this data for purposes, and afterward, the data is expelled from all the framework. Cookies, in general, enable us to provide you a superior site by enabling us to screen which pages you discover helpful and which you don't find helpful at all. A cookie, not the slightest bit gives us access to data or computer about you, other than the data you share with us. You can decline or accept cookies. Most web programs consequently recognize cookies, yet you can modify your program settings to decrease cookies if you lean toward. This may help keep you from taking full advantage of our site.
      </p>

      <h3 style={headingStyle}>Links to Different Sites</h3>
      <p>
        Our site may also contain links to different sites of intrigue. In any such cases, once you have used along these associations to leave our site page, you should keep observing that we don't have any control over that other site. We can't be in charge of the assurance and security of any data which you give while going to such destinations, and such destinations are not thought to be governed by this protection proclamation. You should exercise caution and take a gander at the protection explanation applicable to the sites being referred to.
      </p>

      <h3 style={headingStyle}>Information Storage</h3>
      <p>
        We also additionally collect all necessary information that is given to us by our guests rounding out structures on our website. This information will be put away securely by our servers and cookies. All information will be put away safely, and we take strides inside the United Kingdom. We will make all strides that are sensibly necessary for guaranteeing that your information is being dealt with safely and as per the Data Protection Act 1998 and our Privacy and Cookie Policy.
      </p>

      <h3 style={headingStyle}>Changes to Privacy Policy</h3>
      <p>
        We claim all authority to change this Privacy and Cookie Policy whenever that may influence your utilization of the site. It is your moral duty to inquire regularly for any changes and the way that we will treat your own data. For more information, please contact us at info@doctorsqueries.com.
      </p>
    </div>
    </Box>
  );
}

export default Privecy;
