import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouteDoctorDashboard = ({ children }) => {
  const isAuth = localStorage.getItem('dqDoctorAu');


  if (!isAuth) {
    return <Navigate to={"/doctor-dashboard-login"} />;
  }
  return children;
};

export default PrivateRouteDoctorDashboard;
