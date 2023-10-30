import React from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";

const PrivateRouteUser = ({ children }) => {
  let isAuth = localStorage.getItem("dqAuthTo");
  const location = useLocation();
  location.navigate = location.pathname;

  if (isAuth === undefined) {
    return <Navigate to={"/login"} />;
  }

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRouteUser;
