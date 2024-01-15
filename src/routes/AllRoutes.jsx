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


      <Route path="delhi/anesthesiologist-in-delhi" element={<Anesthesiology/>} />
      <Route path="delhi/AudiologyandSpeech-in-delhi" element={<AudiologyandSpeech/>} />
      <Route path="delhi/cardiac-surgeon-in-delhi" element={<CardiacSurgeon/>} />
      <Route path="delhi/dentist-in-delhi" element={<Dentist/>} />
      <Route path="delhi/dermatologist-specialist-in-delhi" element={<Dermatologist/>} />
      <Route path="delhi/endoscopy-doctors-in-delhi" element={<Endoscopy/>} />
      <Route path="delhi/ent-specialist-doctors-in-delhi" element={<Ent/>} />
      <Route path="delhi/eye-surgeon-in-delhi" element={<EyeSurgeon/>} />
      <Route path="delhi/gastroenterology-doctor-in-delhi" element={<Gastroenterology/>} />
      <Route path="delhi/general-physician-in-delhi" element={<GeneralPhysician/>} />
      <Route path="delhi/GeneralSurgeon-in-delhi" element={<GeneralSurgeon/>} />
      <Route path="delhi/hair-transplant-in-delhi" element={<HairTransplant/>} />
      <Route path="delhi/hematologists-in-delhi" element={<Hematology/>} />
      <Route path="delhi/Homeopathy-in-delhi" element={<Homeopathy/>} />
      <Route path="delhi/infectious-disease-specialists-in-delhi" element={<InfectiousDisease/>} />
      <Route path="delhi/InternalMedicine-in-delhi" element={<InternalMedicine/>} />
      <Route path="delhi/ivf-and-infertility-specialist-in-delhi" element={<IVFandinfertility/>} />
      <Route path="delhi/kidney-transplant-specialist-in-delhi" element={<KidneyTransplant/>} />
      <Route path="delhi/LabMedicine-in-delhi" element={<LabMedicine/>} />
      <Route path="delhi/laparoscopic-surgeon-in-delhi" element={<LaparoscopicSurgeon/>} />
      <Route path="delhi/md-medicine-in-delhi" element={<MdMedicine/>} />
      <Route path="delhi/nephrologist-in-delhi" element={<Nephrology/>} />
      <Route path="delhi/neurologist-in-delhi" element={<Neurologist/>} />
      <Route path="delhi/neuro-surgeon-in-delhi" element={<NeuroSurgeon/>} />
      <Route path="delhi/oncologist-in-delhi" element={<Oncologist/>} />
      <Route path="delhi/ophthalmology-in-delhi" element={<Ophthalmology/>} />
      <Route path="delhi/Orthopedic-in-delhi" element={<Orthopedic/>} />
      <Route path="delhi/pediatricians-in-delhi" element={<Pediatric/>} />
      <Route path="delhi/physiotherapist-in-delhi" element={<Physiotherapy/>} />
      <Route path="delhi/plastic-and-cosmetic-surgeon-in-delhi" element={<PlasticSurgeon/>} />
      <Route path="delhi/psychiatrist-surgeon-in-delhi" element={<Psychiatrist/>} />
      <Route path="delhi/pulmonologists-in-delhi" element={<Pulmonology/>} />
      <Route path="delhi/radiology-doctor-in-delhi" element={<Radiology/>} />
      <Route path="delhi/Rheumatology-in-delhi" element={<Rheumatology/>} />
      <Route path="delhi/SeniorConsultant-in-delhi" element={<SeniorConsultant/>} />
      <Route path="delhi/thoracic-surgeon-in-delhi" element={<ThoracicSurgeon/>} />
      <Route path="delhi/urologist-doctor-in-delhi" element={<Urology/>} />


      <Route path="gurgaon/anesthesiologist-in-gurgaon" element={<GurgaonAnesthesiology/>} />
      <Route path="gurgaon/AudiologyandSpeech-in-Gurgaon" element={<GurgaonAudiologyandSpeech/>} />
      <Route path="gurgaon/CardiacSurgeon-in-Gurgaon" element={<GurgaonCardiacSurgeon/>} />
      <Route path="gurgaon/Dentist-in-Gurgaon" element={<GurgaonDentist/>} />
      <Route path="gurgaon/Dermatologist-in-Gurgaon" element={<GurgaonDermatologist/>} />
      <Route path="gurgaon/Endoscopy-in-Gurgaon" element={<GurgaonEndoscopy/>} />
      <Route path="gurgaon/Ent-in-Gurgaon" element={<GurgaonEnt/>} />
      <Route path="gurgaon/EyeSurgeon-in-Gurgaon" element={<GurgaonEyeSurgeon/>} />
      <Route path="gurgaon/Gastroenterology-in-Gurgaon" element={<GurgaonGastroenterology/>} />
      <Route path="gurgaon/GeneralPhysician-in-Gurgaon" element={<GurgaonGeneralPhysician/>} />
      <Route path="gurgaon/GeneralSurgeon-in-Gurgaon" element={<GurgaonGeneralSurgeon/>} />
      <Route path="gurgaon/HairTransplant-in-Gurgaon" element={<GurgaonHairTransplant/>} />
      <Route path="gurgaon/Hematology-in-Gurgaon" element={<GurgaonHematology/>} />
      <Route path="gurgaon/Homeopathy-in-Gurgaon" element={<GurgaonHomeopathy/>} />
      <Route path="gurgaon/InfectiousDisease-in-Gurgaon" element={<GurgaonInfectiousDisease/>} />
      <Route path="gurgaon/InternalMedicine-in-Gurgaon" element={<GurgaonInternalMedicine/>} />
      <Route path="gurgaon/ivf-and-infertility-specialist-in-gurgaon" element={<GurgaonIVFandinfertility/>} />
      <Route path="gurgaon/KidneyTransplant-in-Gurgaon" element={<GurgaonKidneyTransplant/>} />
      <Route path="gurgaon/LabMedicine-in-Gurgaon" element={<GurgaonLabMedicine/>} />
      <Route path="gurgaon/LaparoscopicSurgeon-in-Gurgaon" element={<GurgaonLaparoscopicSurgeon/>} />
      <Route path="gurgaon/MdMedicine-in-Gurgaon" element={<GurgaonMdMedicine/>} />
      <Route path="gurgaon/Nephrology-in-Gurgaon" element={<GurgaonNephrology/>} />
      <Route path="gurgaon/Neurologist-in-Gurgaon" element={<GurgaonNeurologist/>} />
      <Route path="gurgaon/NeuroSurgeon-in-Gurgaon" element={<GurgaonNeuroSurgeon/>} />
      <Route path="gurgaon/Oncologist-in-Gurgaon" element={<GurgaonOncologist/>} />
      <Route path="gurgaon/ophthalmology-in-gurgaon" element={<GurgaonOphthalmology/>} />
      <Route path="gurgaon/Orthopedic-in-Gurgaon" element={<GurgaonOrthopedic/>} />
      <Route path="gurgaon/pediatricians-in-gurgaon" element={<GurgaonPediatric/>} />
      <Route path="gurgaon/physiotherapist-in-gurgaon" element={<GurgaonPhysiotherapy/>} />
      <Route path="gurgaon/plastic-surgeon-in-gurgaon" element={<GurgaonPlasticSurgeon/>} />
      <Route path="gurgaon/Psychiatrist-in-Gurgaon" element={<GurgaonPsychiatrist/>} />
      <Route path="gurgaon/pulmonologists-in-gurgaon" element={<GurgaonPulmonology/>} />
      <Route path="gurgaon/Radiology-in-Gurgaon" element={<GurgaonRadiology/>} />
      <Route path="gurgaon/Rheumatology-in-Gurgaon" element={<GurgaonRheumatology/>} />
      <Route path="gurgaon/SeniorConsultant-in-Gurgaon" element={<GurgaonSeniorConsultant/>} />
      <Route path="gurgaon/thoracic-surgeon-in-gurgaon" element={<GurgaonThoracicSurgeon/>} />
      <Route path="gurgaon/Urology-in-Gurgaon" element={<GurgaonUrology/>} />


      
      <Route path="noida/anesthesiologist-in-noida" element={<NoidaAnesthesiology/>} />
      <Route path="noida/AudiologyandSpeech-in-Noida" element={<NoidaAudiologyandSpeech/>} />
      <Route path="noida/CardiacSurgeon-in-Noida" element={<NoidaCardiacSurgeon/>} />
      <Route path="noida/Dentist-in-Noida" element={<NoidaDentist/>} />
      <Route path="noida/Dermatologist-in-Noida" element={<NoidaDermatologist/>} />
      <Route path="noida/Endoscopy-in-Noida" element={<NoidaEndoscopy/>} />
      <Route path="noida/Ent-in-Noida" element={<NoidaEnt/>} />
      <Route path="noida/EyeSurgeon-in-Noida" element={<NoidaEyeSurgeon/>} />
      <Route path="noida/Gastroenterology-in-Noida" element={<NoidaGastroenterology/>} />
      <Route path="noida/GeneralPhysician-in-Noida" element={<NoidaGeneralPhysician/>} />
      <Route path="noida/GeneralSurgeon-in-Noida" element={<NoidaGeneralSurgeon/>} />
      <Route path="noida/HairTransplant-in-Noida" element={<NoidaHairTransplant/>} />
      <Route path="noida/Hematology-in-Noida" element={<NoidaHematology/>} />
      <Route path="noida/Homeopathy-in-Noida" element={<NoidaHomeopathy/>} />
      <Route path="noida/InfectiousDisease-in-Noida" element={<NoidaInfectiousDisease/>} />
      <Route path="noida/InternalMedicine-in-Noida" element={<NoidaInternalMedicine/>} />
      <Route path="noida/ivf-and-infertility-specialist-in-noida" element={<NoidaIVFandinfertility/>} />
      <Route path="noida/KidneyTransplant-in-Noida" element={<NoidaKidneyTransplant/>} />
      <Route path="noida/LabMedicine-in-Noida" element={<NoidaLabMedicine/>} />
      <Route path="noida/LaparoscopicSurgeon-in-Noida" element={<NoidaLaparoscopicSurgeon/>} />
      <Route path="noida/MdMedicine-in-Noida" element={<NoidaMdMedicine/>} />
      <Route path="noida/Nephrology-in-Noida" element={<NoidaNephrology/>} />
      <Route path="noida/Neurologist-in-Noida" element={<NoidaNeurologist/>} />
      <Route path="noida/NeuroSurgeon-in-Noida" element={<NoidaNeuroSurgeon/>} />
      <Route path="noida/Oncologist-in-Noida" element={<NoidaOncologist/>} />
      <Route path="noida/ophthalmology-in-noida" element={<NoidaOphthalmology/>} />
      <Route path="noida/orthopedic-in-noida" element={<NoidaOrthopedic/>} />
      <Route path="noida/pediatricians-in-noida" element={<NoidaPediatric/>} />
      <Route path="noida/physiotherapist-in-noida" element={<NoidaPhysiotherapy/>} />
      <Route path="noida/plastic-surgeon-in-noida" element={<NoidaPlasticSurgeon/>} />
      <Route path="noida/Psychiatrist-in-Noida" element={<NoidaPsychiatrist/>} />
      <Route path="noida/pulmonologists-in-noida" element={<NoidaPulmonology/>} />
      <Route path="noida/Radiology-in-Noida" element={<NoidaRadiology/>} />
      <Route path="noida/Rheumatology-in-Noida" element={<NoidaRheumatology/>} />
      <Route path="noida/SeniorConsultant-in-Noida" element={<NoidaSeniorConsultant/>} />
      <Route path="noida/thoracic-surgeon-in-noida" element={<NoidaThoracicSurgeon/>} />
      <Route path="noida/Urology-in-Noida" element={<NoidaUrology/>} />
      
    </Routes>
  );
};

export default Allroute;
