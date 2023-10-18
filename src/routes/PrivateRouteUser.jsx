import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouteUser = ({ children }) => {
  let isAuth = localStorage.getItem("dqAuthTo");
  // alert(isAuth)
console.log(!isAuth)
  if(isAuth===undefined){
    return <Navigate to={"/login"} />;
  }
  
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRouteUser;
