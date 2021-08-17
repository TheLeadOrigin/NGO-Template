import React from "react";
import Header from "./Header";
const DyanmicBranding = ({ title, pageLocation, classN }) => {
  return (
    <>
      <div className={classN}>
        <div className="container">
          <Header />
          <div className="row landingPage_content text-center">
            <div className="col-12">
              <p>{pageLocation}</p>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DyanmicBranding;
