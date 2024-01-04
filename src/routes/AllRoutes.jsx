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


import GurgaonAnesthesiology from "../pages/gurgaon/Anesthesiology";
import GurgaonAudiologyandSpeech from "../pages/gurgaon/AudiologyandSpeech";
import GurgaonCardiacSurgeon from "../pages/gurgaon/CardiacSurgeon";
import GurgaonDentist from "../pages/gurgaon/Dentist";
import GurgaonDermatologist from "../pages/gurgaon/Dermatologist";
import GurgaonEndoscopy from "../pages/gurgaon/Endoscopy";
import GurgaonEnt from "../pages/gurgaon/Ent";
import GurgaonEyeSurgeon from "../pages/gurgaon/EyeSurgeon";
import GurgaonGastroenterology from "../pages/gurgaon/Gastroenterology";
import GurgaonGeneralPhysician from "../pages/gurgaon/GeneralPhysician";
import GurgaonGeneralSurgeon from "../pages/gurgaon/GeneralSurgeon";
import GurgaonHairTransplant from "../pages/gurgaon/HairTransplant";
import GurgaonHematology from "../pages/gurgaon/Hematology";
import GurgaonHomeopathy from "../pages/gurgaon/Homeopathy";
import GurgaonInfectiousDisease from "../pages/gurgaon/InfectiousDisease";
import GurgaonInternalMedicine from "../pages/gurgaon/InternalMedicine";
import GurgaonIVFandinfertility from "../pages/gurgaon/IVFandInfertility";
import GurgaonKidneyTransplant from "../pages/gurgaon/KidneyTransplant";
import GurgaonLabMedicine from "../pages/gurgaon/LabMedicine";
import GurgaonLaparoscopicSurgeon from "../pages/gurgaon/LaparoscopicSurgeon";
import GurgaonMdMedicine from "../pages/gurgaon/MdMedicine";
import GurgaonNephrology from "../pages/gurgaon/Nephrology";
import GurgaonNeurologist from "../pages/gurgaon/Neurologist";
import GurgaonNeuroSurgeon from "../pages/gurgaon/NeuroSurgeon";
import GurgaonOncologist from "../pages/gurgaon/Oncologist";
import GurgaonOphthalmology from "../pages/gurgaon/Ophthalmology";
import GurgaonOrthopedic from "../pages/gurgaon/Orthopedic";
import GurgaonPediatric from "../pages/gurgaon/Pediatric";
import GurgaonPhysiotherapy from "../pages/gurgaon/Physiotherapy";
import GurgaonPlasticSurgeon from "../pages/gurgaon/PlasticSurgeon";
import GurgaonPsychiatrist from "../pages/gurgaon/Psychiatrist";
import GurgaonPulmonology from "../pages/gurgaon/Pulmonology";
import GurgaonRadiology from "../pages/gurgaon/Radiology";
import GurgaonRheumatology from "../pages/gurgaon/Rheumatology";
import GurgaonSeniorConsultant from "../pages/gurgaon/SeniorConsultant";
import GurgaonThoracicSurgeon from "../pages/gurgaon/ThoracicSurgeon";
import GurgaonUrology from "../pages/gurgaon/Urology";


import NoidaAnesthesiology from "../pages/noida/Anesthesiology";
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





      <Route path="/Anesthesiology-in-delhi" element={<Anesthesiology/>} />
      <Route path="/AudiologyandSpeech-in-delhi" element={<AudiologyandSpeech/>} />
      <Route path="/CardiacSurgeon-in-delhi" element={<CardiacSurgeon/>} />
      <Route path="/Dentist-in-delhi" element={<Dentist/>} />
      <Route path="/Dermatologist-in-delhi" element={<Dermatologist/>} />
      <Route path="/Endoscopy-in-delhi" element={<Endoscopy/>} />
      <Route path="/Ent-in-delhi" element={<Ent/>} />
      <Route path="/EyeSurgeon-in-delhi" element={<EyeSurgeon/>} />
      <Route path="/Gastroenterology-in-delhi" element={<Gastroenterology/>} />
      <Route path="/GeneralPhysician-in-delhi" element={<GeneralPhysician/>} />
      <Route path="/GeneralSurgeon-in-delhi" element={<GeneralSurgeon/>} />
      <Route path="/HairTransplant-in-delhi" element={<HairTransplant/>} />
      <Route path="/Hematology-in-delhi" element={<Hematology/>} />
      <Route path="/Homeopathy-in-delhi" element={<Homeopathy/>} />
      <Route path="/InfectiousDisease-in-delhi" element={<InfectiousDisease/>} />
      <Route path="/InternalMedicine-in-delhi" element={<InternalMedicine/>} />
      <Route path="/IVFandinfertility-in-delhi" element={<IVFandinfertility/>} />
      <Route path="/KidneyTransplant-in-delhi" element={<KidneyTransplant/>} />
      <Route path="/LabMedicine-in-delhi" element={<LabMedicine/>} />
      <Route path="/LaparoscopicSurgeon-in-delhi" element={<LaparoscopicSurgeon/>} />
      <Route path="/MdMedicine-in-delhi" element={<MdMedicine/>} />
      <Route path="/Nephrology-in-delhi" element={<Nephrology/>} />
      <Route path="/Neurologist-in-delhi" element={<Neurologist/>} />
      <Route path="/NeuroSurgeon-in-delhi" element={<NeuroSurgeon/>} />
      <Route path="/Oncologist-in-delhi" element={<Oncologist/>} />
      <Route path="/Ophthalmology-in-delhi" element={<Ophthalmology/>} />
      <Route path="/Orthopedic-in-delhi" element={<Orthopedic/>} />
      <Route path="/Pediatric-in-delhi" element={<Pediatric/>} />
      <Route path="/Physiotherapy-in-delhi" element={<Physiotherapy/>} />
      <Route path="/PlasticSurgeon-in-delhi" element={<PlasticSurgeon/>} />
      <Route path="/Psychiatrist-in-delhi" element={<Psychiatrist/>} />
      <Route path="/Pulmonology-in-delhi" element={<Pulmonology/>} />
      <Route path="/Radiology-in-delhi" element={<Radiology/>} />
      <Route path="/Rheumatology-in-delhi" element={<Rheumatology/>} />
      <Route path="/SeniorConsultant-in-delhi" element={<SeniorConsultant/>} />
      <Route path="/ThoracicSurgeon-in-delhi" element={<ThoracicSurgeon/>} />
      <Route path="/Urology-in-delhi" element={<Urology/>} />


      <Route path="/Anesthesiology-in-Gurgaon" element={<GurgaonAnesthesiology/>} />
      <Route path="/AudiologyandSpeech-in-Gurgaon" element={<GurgaonAudiologyandSpeech/>} />
      <Route path="/CardiacSurgeon-in-Gurgaon" element={<GurgaonCardiacSurgeon/>} />
      <Route path="/Dentist-in-Gurgaon" element={<GurgaonDentist/>} />
      <Route path="/Dermatologist-in-Gurgaon" element={<GurgaonDermatologist/>} />
      <Route path="/Endoscopy-in-Gurgaon" element={<GurgaonEndoscopy/>} />
      <Route path="/Ent-in-Gurgaon" element={<GurgaonEnt/>} />
      <Route path="/EyeSurgeon-in-Gurgaon" element={<GurgaonEyeSurgeon/>} />
      <Route path="/Gastroenterology-in-Gurgaon" element={<GurgaonGastroenterology/>} />
      <Route path="/GeneralPhysician-in-Gurgaon" element={<GurgaonGeneralPhysician/>} />
      <Route path="/GeneralSurgeon-in-Gurgaon" element={<GurgaonGeneralSurgeon/>} />
      <Route path="/HairTransplant-in-Gurgaon" element={<GurgaonHairTransplant/>} />
      <Route path="/Hematology-in-Gurgaon" element={<GurgaonHematology/>} />
      <Route path="/Homeopathy-in-Gurgaon" element={<GurgaonHomeopathy/>} />
      <Route path="/InfectiousDisease-in-Gurgaon" element={<GurgaonInfectiousDisease/>} />
      <Route path="/InternalMedicine-in-Gurgaon" element={<GurgaonInternalMedicine/>} />
      <Route path="/IVFandinfertility-in-Gurgaon" element={<GurgaonIVFandinfertility/>} />
      <Route path="/KidneyTransplant-in-Gurgaon" element={<GurgaonKidneyTransplant/>} />
      <Route path="/LabMedicine-in-Gurgaon" element={<GurgaonLabMedicine/>} />
      <Route path="/LaparoscopicSurgeon-in-Gurgaon" element={<GurgaonLaparoscopicSurgeon/>} />
      <Route path="/MdMedicine-in-Gurgaon" element={<GurgaonMdMedicine/>} />
      <Route path="/Nephrology-in-Gurgaon" element={<GurgaonNephrology/>} />
      <Route path="/Neurologist-in-Gurgaon" element={<GurgaonNeurologist/>} />
      <Route path="/NeuroSurgeon-in-Gurgaon" element={<GurgaonNeuroSurgeon/>} />
      <Route path="/Oncologist-in-Gurgaon" element={<GurgaonOncologist/>} />
      <Route path="/Ophthalmology-in-Gurgaon" element={<GurgaonOphthalmology/>} />
      <Route path="/Orthopedic-in-Gurgaon" element={<GurgaonOrthopedic/>} />
      <Route path="/Pediatric-in-Gurgaon" element={<GurgaonPediatric/>} />
      <Route path="/Physiotherapy-in-Gurgaon" element={<GurgaonPhysiotherapy/>} />
      <Route path="/PlasticSurgeon-in-Gurgaon" element={<GurgaonPlasticSurgeon/>} />
      <Route path="/Psychiatrist-in-Gurgaon" element={<GurgaonPsychiatrist/>} />
      <Route path="/Pulmonology-in-Gurgaon" element={<GurgaonPulmonology/>} />
      <Route path="/Radiology-in-Gurgaon" element={<GurgaonRadiology/>} />
      <Route path="/Rheumatology-in-Gurgaon" element={<GurgaonRheumatology/>} />
      <Route path="/SeniorConsultant-in-Gurgaon" element={<GurgaonSeniorConsultant/>} />
      <Route path="/ThoracicSurgeon-in-Gurgaon" element={<GurgaonThoracicSurgeon/>} />
      <Route path="/Urology-in-Gurgaon" element={<GurgaonUrology/>} />


      
      <Route path="/Anesthesiology-in-Noida" element={<NoidaAnesthesiology/>} />
      <Route path="/AudiologyandSpeech-in-Noida" element={<NoidaAudiologyandSpeech/>} />
      <Route path="/CardiacSurgeon-in-Noida" element={<NoidaCardiacSurgeon/>} />
      <Route path="/Dentist-in-Noida" element={<NoidaDentist/>} />
      <Route path="/Dermatologist-in-Noida" element={<NoidaDermatologist/>} />
      <Route path="/Endoscopy-in-Noida" element={<NoidaEndoscopy/>} />
      <Route path="/Ent-in-Noida" element={<NoidaEnt/>} />
      <Route path="/EyeSurgeon-in-Noida" element={<NoidaEyeSurgeon/>} />
      <Route path="/Gastroenterology-in-Noida" element={<NoidaGastroenterology/>} />
      <Route path="/GeneralPhysician-in-Noida" element={<NoidaGeneralPhysician/>} />
      <Route path="/GeneralSurgeon-in-Noida" element={<NoidaGeneralSurgeon/>} />
      <Route path="/HairTransplant-in-Noida" element={<NoidaHairTransplant/>} />
      <Route path="/Hematology-in-Noida" element={<NoidaHematology/>} />
      <Route path="/Homeopathy-in-Noida" element={<NoidaHomeopathy/>} />
      <Route path="/InfectiousDisease-in-Noida" element={<NoidaInfectiousDisease/>} />
      <Route path="/InternalMedicine-in-Noida" element={<NoidaInternalMedicine/>} />
      <Route path="/IVFandinfertility-in-Noida" element={<NoidaIVFandinfertility/>} />
      <Route path="/KidneyTransplant-in-Noida" element={<NoidaKidneyTransplant/>} />
      <Route path="/LabMedicine-in-Noida" element={<NoidaLabMedicine/>} />
      <Route path="/LaparoscopicSurgeon-in-Noida" element={<NoidaLaparoscopicSurgeon/>} />
      <Route path="/MdMedicine-in-Noida" element={<NoidaMdMedicine/>} />
      <Route path="/Nephrology-in-Noida" element={<NoidaNephrology/>} />
      <Route path="/Neurologist-in-Noida" element={<NoidaNeurologist/>} />
      <Route path="/NeuroSurgeon-in-Noida" element={<NoidaNeuroSurgeon/>} />
      <Route path="/Oncologist-in-Noida" element={<NoidaOncologist/>} />
      <Route path="/Ophthalmology-in-Noida" element={<NoidaOphthalmology/>} />
      <Route path="/Orthopedic-in-Noida" element={<NoidaOrthopedic/>} />
      <Route path="/Pediatric-in-Noida" element={<NoidaPediatric/>} />
      <Route path="/Physiotherapy-in-Noida" element={<NoidaPhysiotherapy/>} />
      <Route path="/PlasticSurgeon-in-Noida" element={<NoidaPlasticSurgeon/>} />
      <Route path="/Psychiatrist-in-Noida" element={<NoidaPsychiatrist/>} />
      <Route path="/Pulmonology-in-Noida" element={<NoidaPulmonology/>} />
      <Route path="/Radiology-in-Noida" element={<NoidaRadiology/>} />
      <Route path="/Rheumatology-in-Noida" element={<NoidaRheumatology/>} />
      <Route path="/SeniorConsultant-in-Noida" element={<NoidaSeniorConsultant/>} />
      <Route path="/ThoracicSurgeon-in-Noida" element={<NoidaThoracicSurgeon/>} />
      <Route path="/Urology-in-Noida" element={<NoidaUrology/>} />
      
    </Routes>
  );
};

export default Allroute;
