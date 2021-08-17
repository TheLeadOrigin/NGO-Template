import React from "react";
import Blog from "../Components/Blog";
import Branding from "../Components/Branding";
import CareChildren from "../Components/CareChildren";
import Copyright from "../Components/Copyright";
import Footer from "../Components/Footer";
import LoveCareCharity from "../Components/LoveCareCharity";
import OurCauses from "../Components/OurCauses";
import Services from "../Components/Services";
import TechnicalStatistics from "../Components/TechnicalStatistics";
import Testimonials from "../Components/Testimonials";
import Volunteer from "../Components/Volunteer";
const Index = () => {
  return (
    <>
      <Branding />
      <Services />
      <TechnicalStatistics />
      <OurCauses />
      <LoveCareCharity />
      <Volunteer />
      <Testimonials />
      <CareChildren />
      <Blog />
      <Footer />
      <Copyright />
    </>
  );
};

export default Index;
