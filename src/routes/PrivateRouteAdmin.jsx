import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const PrivateRouteAdmin = ({ children }) => {
  let adminAuth = sessionStorage.getItem("dqAdminToken");

  const toast = useToast();


  if (!adminAuth) {
    toast({
      title: `Admin Please Login`,
      position: "top-right",
      isClosable: true,
      status: "error",
      duration: 4000,
    });
    return <Navigate to={"/admin/login"} />;
  }

  return children;
};

export default PrivateRouteAdmin;
