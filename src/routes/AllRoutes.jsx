import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors";
import Hospital from "../pages/Hospital";
import About from "../pages/About";
import About2 from "../pages/About2";
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


import Anesthesiology from "../pages/delhi/Anesthesiology";
<<<<<<< HEAD
import AudiologyandSpeech from "../pages/delhi/AudiologyandSpeech";
import CardiacSurgeon from "../pages/delhi/CardiacSurgeon";
import Dentist from "../pages/delhi/Dentist";
import Dermatologist from "../pages/delhi/Dermatologist";
import Endoscopy from "../pages/delhi/Endoscopy";
import Ent from "../pages/delhi/Ent";
import EyeSurgeon from "../pages/delhi/EyeSurgeon";
import Gastroenterology from "../pages/delhi/Gastroenterology";
import GeneralPhysician from "../pages/delhi/GeneralPhysician";
import GeneralSurgeon from "../pages/delhi/GeneralSurgeon";
import HairTransplant from "../pages/delhi/HairTransplant";
import Hematology from "../pages/delhi/Hematology";
import Homeopathy from "../pages/delhi/Homeopathy";
import InfectiousDisease from "../pages/delhi/InfectiousDisease";
import InternalMedicine from "../pages/delhi/InternalMedicine";
import IVFandinfertility from "../pages/delhi/IVFandInfertility";
import KidneyTransplant from "../pages/delhi/KidneyTransplant";
import LabMedicine from "../pages/delhi/LabMedicine";
import LaparoscopicSurgeon from "../pages/delhi/LaparoscopicSurgeon";
import MdMedicine from "../pages/delhi/MdMedicine";
import Nephrology from "../pages/delhi/Nephrology";
import Neurologist from "../pages/delhi/Neurologist";
import NeuroSurgeon from "../pages/delhi/NeuroSurgeon";
import Oncologist from "../pages/delhi/Oncologist";
import Ophthalmology from "../pages/delhi/Ophthalmology";
import Orthopedic from "../pages/delhi/Orthopedic";
import Pediatric from "../pages/delhi/Pediatric";
import Physiotherapy from "../pages/delhi/Physiotherapy";
import PlasticSurgeon from "../pages/delhi/PlasticSurgeon";
import Psychiatrist from "../pages/delhi/Psychiatrist";
import Pulmonology from "../pages/delhi/Pulmonology";
import Radiology from "../pages/delhi/Radiology";
import Rheumatology from "../pages/delhi/Rheumatology";
import SeniorConsultant from "../pages/delhi/SeniorConsultant";
import ThoracicSurgeon from "../pages/delhi/ThoracicSurgeon";
import Urology from "../pages/delhi/Urology";



import NoidaAnesthesiology  from "../pages/noida/Anesthesiology";
import NoidaAudiologyandSpeech from "../pages/noida/AudiologyandSpeech";
import NoidaCardiacSurgeon from "../pages/noida/CardiacSurgeon";
import NoidaDentist from "../pages/noida/Dentist";
import NoidaDermatologist from "../pages/noida/Dermatologist";
import NoidaEndoscopy from "../pages/noida/Endoscopy";
import NoidaEnt from "../pages/noida/Ent";
import NoidaEyeSurgeon from "../pages/noida/EyeSurgeon";
import NoidaGastroenterology from "../pages/noida/Gastroenterology";
import NoidaGeneralPhysician from "../pages/noida/GeneralPhysician";
import NoidaGeneralSurgeon from "../pages/noida/GeneralSurgeon";
import NoidaHairTransplant from "../pages/noida/HairTransplant";
import NoidaHematology from "../pages/noida/Hematology";
import NoidaHomeopathy from "../pages/noida/Homeopathy";
import NoidaInfectiousDisease from "../pages/noida/InfectiousDisease";
import NoidaInternalMedicine from "../pages/noida/InternalMedicine";
import NoidaIVFandinfertility from "../pages/noida/IVFandInfertility";
import NoidaKidneyTransplant from "../pages/noida/KidneyTransplant";
import NoidaLabMedicine from "../pages/noida/LabMedicine";
import NoidaLaparoscopicSurgeon from "../pages/noida/LaparoscopicSurgeon";
import NoidaMdMedicine from "../pages/noida/MdMedicine";
import NoidaNephrology from "../pages/noida/Nephrology";
import NoidaNeurologist from "../pages/noida/Neurologist";
import NoidaNeuroSurgeon from "../pages/noida/NeuroSurgeon";
import NoidaOncologist from "../pages/noida/Oncologist";
import NoidaOphthalmology from "../pages/noida/Ophthalmology";
import NoidaOrthopedic from "../pages/noida/Orthopedic";
import NoidaPediatric from "../pages/noida/Pediatric";
import NoidaPhysiotherapy from "../pages/noida/Physiotherapy";
import NoidaPlasticSurgeon from "../pages/noida/PlasticSurgeon";
import NoidaPsychiatrist from "../pages/noida/Psychiatrist";
import NoidaPulmonology from "../pages/noida/Pulmonology";
import NoidaRadiology from "../pages/noida/Radiology";
import NoidaRheumatology from "../pages/noida/Rheumatology";
import NoidaSeniorConsultant from "../pages/noida/SeniorConsultant";
import NoidaThoracicSurgeon from "../pages/noida/ThoracicSurgeon";
import NoidaUrology from "../pages/noida/Urology";
=======
import Dentist from "../pages/delhi/Dentist";
>>>>>>> 1754893a6d89001bf362b634829d56cbb0c48d57

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
      {/* <Route path="/de" element={<About2 />} /> */}

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
      <Route path="/anesthesiology-in-delhi" element={<Anesthesiology />} />
<<<<<<< HEAD
      <Route path="/audiologyandSpeech-in-delhi" element={<AudiologyandSpeech />} />
      <Route path="/cardiacsurgeon-in-delhi" element={<CardiacSurgeon />} />
      <Route path="/dentist-in-delhi" element={<Dentist />} />
      <Route path="/dermatologist-in-delhi" element={<Dermatologist />} />
      <Route path="/endoscopy-in-delhi" element={<Endoscopy />} />
      <Route path="/ent-in-delhi" element={<Ent />} />
      <Route path="/eye-surgeon-in-delhi" element={<EyeSurgeon />} />
      <Route path="/gastroenterology-in-delhi" element={<Gastroenterology />} />
      <Route path="/generalPhysician-in-delhi" element={<GeneralPhysician />} />
      <Route path="/generalSurgeon-in-delhi" element={<GeneralSurgeon />} />
      <Route path="/hairTransplant-in-delhi" element={<HairTransplant />} />
      <Route path="/Hematology-in-delhi" element={<Hematology />} />
      <Route path="/Homeopathy-in-delhi" element={<Homeopathy />} />
      <Route path="/InfectiousDisease-in-delhi" element={<InfectiousDisease />} />
      <Route path="/InternalMedicine-in-delhi" element={<InternalMedicine />} />
      <Route path="/IVFandinfertility-in-delhi" element={<IVFandinfertility />} />
      <Route path="/KidneyTransplant-in-delhi" element={<KidneyTransplant />} />
      <Route path="/LabMedicine-in-delhi" element={<LabMedicine />} />
      <Route path="/LaparoscopicSurgeon-in-delhi" element={<LaparoscopicSurgeon />} />
      <Route path="/MdMedicine-in-delhi" element={<MdMedicine />} />
      <Route path="/Nephrology-in-delhi" element={<Nephrology />} />
      <Route path="/Neurologist-in-delhi" element={<Neurologist />} />
      <Route path="/NeuroSurgeon-in-delhi" element={<NeuroSurgeon />} />
      <Route path="/Oncologist-in-delhi" element={<Oncologist />} />
      <Route path="/Ophthalmology-in-delhi" element={<Ophthalmology />} />
      <Route path="/Orthopedic-in-delhi" element={<Orthopedic />} />
      <Route path="/Pediatric-in-delhi" element={<Pediatric />} />
      <Route path="/Physiotherapy-in-delhi" element={<Physiotherapy />} />
      <Route path="/PlasticSurgeon-in-delhi" element={<PlasticSurgeon />} />
      <Route path="/Psychiatrist-in-delhi" element={<Psychiatrist />} />
      <Route path="/Pulmonology-in-delhi" element={<Pulmonology />} />
      <Route path="/Radiology-in-delhi" element={<Radiology />} />
      <Route path="/Rheumatology-in-delhi" element={<Rheumatology />} />
      <Route path="/SeniorConsultant-in-delhi" element={<SeniorConsultant />} />
      <Route path="/ThoracicSurgeon-in-delhi" element={<ThoracicSurgeon />} />
      <Route path="/Urology-in-delhi" element={<Urology />} />

      {/*    End     */}



       {/*       Static Routes */}
       <Route path="/anesthesiology-in-noida" element={<NoidaAnesthesiology />} />
      <Route path="/audiologyandSpeech-in-noida" element={<NoidaAudiologyandSpeech />} />
      <Route path="/cardiacsurgeon-in-noida" element={<NoidaCardiacSurgeon />} />
      <Route path="/dentist-in-noida" element={<NoidaDentist />} />
      <Route path="/dermatologist-in-noida" element={<NoidaDermatologist />} />
      <Route path="/endoscopy-in-noida" element={<NoidaEndoscopy />} />
      <Route path="/ent-in-noida" element={<NoidaEnt />} />
      <Route path="/eye-surgeon-in-noida" element={<NoidaEyeSurgeon />} />
      <Route path="/gastroenterology-in-noida" element={<NoidaGastroenterology />} />
      <Route path="/generalPhysician-in-noida" element={<NoidaGeneralPhysician />} />
      <Route path="/generalSurgeon-in-noida" element={<NoidaGeneralSurgeon />} />
      <Route path="/hairTransplant-in-noida" element={<NoidaHairTransplant />} />
      <Route path="/Hematology-in-noida" element={<NoidaHematology />} />
      <Route path="/Homeopathy-in-noida" element={<NoidaHomeopathy />} />
      <Route path="/InfectiousDisease-in-noida" element={<NoidaInfectiousDisease />} />
      <Route path="/InternalMedicine-in-noida" element={<NoidaInternalMedicine />} />
      <Route path="/IVFandinfertility-in-noida" element={<NoidaIVFandinfertility />} />
      <Route path="/KidneyTransplant-in-noida" element={<NoidaKidneyTransplant />} />
      <Route path="/LabMedicine-in-noida" element={<NoidaLabMedicine />} />
      <Route path="/LaparoscopicSurgeon-in-noida" element={<NoidaLaparoscopicSurgeon />} />
      <Route path="/MdMedicine-in-noida" element={<NoidaMdMedicine />} />
      <Route path="/Nephrology-in-noida" element={<NoidaNephrology />} />
      <Route path="/Neurologist-in-noida" element={<NoidaNeurologist />} />
      <Route path="/NeuroSurgeon-in-noida" element={<NoidaNeuroSurgeon />} />
      <Route path="/Oncologist-in-noida" element={<NoidaOncologist />} />
      <Route path="/Ophthalmology-in-noida" element={<NoidaOphthalmology />} />
      <Route path="/Orthopedic-in-noida" element={<NoidaOrthopedic />} />
      <Route path="/Pediatric-in-noida" element={<NoidaPediatric />} />
      <Route path="/Physiotherapy-in-noida" element={<NoidaPhysiotherapy />} />
      <Route path="/PlasticSurgeon-in-noida" element={<NoidaPlasticSurgeon />} />
      <Route path="/Psychiatrist-in-noida" element={<NoidaPsychiatrist />} />
      <Route path="/Pulmonology-in-noida" element={<NoidaPulmonology />} />
      <Route path="/Radiology-in-noida" element={<NoidaRadiology />} />
      <Route path="/Rheumatology-in-noida" element={<NoidaRheumatology />} />
      <Route path="/SeniorConsultant-in-noida" element={<NoidaSeniorConsultant />} />
      <Route path="/ThoracicSurgeon-in-noida" element={<NoidaThoracicSurgeon />} />
      <Route path="/Urology-in-noida" element={<NoidaUrology />} />

=======
      <Route path="/dentist-in-delhi" element={<Dentist/>} />
>>>>>>> 1754893a6d89001bf362b634829d56cbb0c48d57
      {/*    End     */}
    </Routes>
  );
};

export default Allroute;
