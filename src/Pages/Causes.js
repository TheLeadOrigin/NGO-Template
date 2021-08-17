import React from "react";
import DyanmicBranding from "../Components/DyanmicBranding";
import Copyright from "../Components/Copyright";
import Footer from "../Components/Footer";
import OurCauses from "../Components/OurCauses";

const Causes = () => {
  return (
    <>
      <div className="causesPage">
        <DyanmicBranding
          title={"Causes Campaign"}
          pageLocation={"Home > Causes Campaign"}
          classN={"causesMain"}
        />
        <OurCauses />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Causes;
