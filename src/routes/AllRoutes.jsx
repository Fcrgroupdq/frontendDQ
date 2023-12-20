import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors";
import Hospital from "../pages/Hospital";
import About from "../pages/About";
import SingleDoctor from "../pages/SingleDoctor";
import SingleHospital from "../pages/SingleHospital";
import Appointment from "../pages/Appointment";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import PrivateRouteUser from "./PrivateRouteUser";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import Allapointment from "../pages/Allapointment";
import Add_doctors from "../components/admin/doctor/AddNewDoctor";
import DoctorAppointment from "../pages/DoctorAppointment";
import DoctorDashboard from "../pages/DoctorDashboard";
import PrivateRouteDoctorDashboard from "./PrivateRouteDoctorDashboard";
import DoctorDashboardLogin from "../pages/DoctorDashboardLogin";
import DoctorDashboardSignup from "../pages/DoctorDashboardSignup";
import Addblog from "../pages/Addblog";
import Blog from "../pages/Blog";
import UserDashboard from "../pages/UserDashboard";
import SingleBlogPage from "../pages/SingleBlogPage";
import AdminResetPassword from "../pages/AdminResetPassword";
import DoctorResetPassword from "../pages/doctor-reset-password";
import UserResetPassword from "../pages/UserResetPassword";
import NotFound from "../pages/NotFound";
import UpdateBlog from "../pages/UpdateBlog";
import Privecy from "../pages/Privecy";
import AddHospital from "../pages/AddHospital";
import UpdateHospital from "../pages/updateHospital";
import dentist from "../delhi/dentist";


const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route
        path="/admin"
        element={
          <PrivateRouteAdmin>
            <Admin />
          </PrivateRouteAdmin>
        }
      />
      <Route path="/doctors/:id" element={<SingleDoctor />} />
      <Route
        path="/doctors/:id/appointment"
        element={
          <PrivateRouteUser>
            <Appointment />
          </PrivateRouteUser>
        }
      />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/hospitals" element={<Hospital />} />
      <Route path="/admin/doctors" element={<Add_doctors />} />
      <Route path="/privacy-policy" element={<Privecy />} />
      <Route
        path="/admin/hospital/add-new"
        element={
          <PrivateRouteAdmin>
            <AddHospital />
          </PrivateRouteAdmin>
        }
      />
      <Route path="/admin/hospital/update/:id" element={<UpdateHospital />} />
      <Route path="/hospitals/:id" element={<SingleHospital />} />
      <Route path="/blog/:MetaTitle" element={<SingleBlogPage />} />
      <Route path="/blog/:MetaTitle/edit" element={<UpdateBlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctorappointment" element={<DoctorAppointment />} />
      <Route
        path="/doctor-dashboard"
        element={
          <PrivateRouteDoctorDashboard>
            <DoctorDashboard />
          </PrivateRouteDoctorDashboard>
        }
      />
      <Route
        path="/doctor-dashboard-login"
        element={<DoctorDashboardLogin />}
      />
      <Route
        path="/doctor-dashboard-signup"
        element={<DoctorDashboardSignup />}
      />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/user-dashboard"
        element={
          <PrivateRouteUser>
            <UserDashboard />
          </PrivateRouteUser>
        }
      />
      <Route path="/admin-reset-password" element={<AdminResetPassword />} />
      <Route path="/doctor-reset-password" element={<DoctorResetPassword />} />
      <Route path="/user-reset-password" element={<UserResetPassword />} />
      <Route path="*" element={<NotFound />} />

      {/*       Static Routes */}
           <Route
        path="/dentist-in-delhi"
        element={<dentist />}
      />
      {/*    End     */}
      
    </Routes>
  );
};

export default Allroute;
