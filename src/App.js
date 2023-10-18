import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Allroute from './routes/AllRoutes';
import { useLocation } from 'react-router-dom';
import Preloader from './components/Preloader'; // Import your preloader component

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a delay (you can replace this with your actual loading logic)
    setTimeout(() => {
      setLoading(false); // Set loading to false when your application is ready
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader /> // Display the preloader while loading is true
      ) : (
        <>
          {location.pathname !== '/doctor-dashboard' &&
            location.pathname !== '/user-dashboard' &&
            location.pathname !== '/admin' && <Navbar />}

          <div style={{ width: '100%', margin: 'auto' }}>
            <Allroute />
          </div>

          {location.pathname !== '/doctor-dashboard' &&
            location.pathname !== '/user-dashboard' &&
            location.pathname !== '/admin' && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
