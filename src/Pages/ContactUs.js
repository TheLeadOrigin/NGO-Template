import React from "react";
import DyanmicBranding from "../Components/DyanmicBranding";
import Map from "../Components/Map";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
const ContactUs = () => {
  return (
    <>
      <div className="contactUs">
        <DyanmicBranding
          title={"Contact Us"}
          pageLocation={"Home > Contact Us"}
          classN={"contactpage"}
        />
        <Map />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default ContactUs;
