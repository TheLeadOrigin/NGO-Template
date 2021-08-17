import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Copyright = () => {
  useEffect(() => {
    AOS.init({
      offset: 40,
    });
  }, []);
  return (
    <>
      <div className="copyright" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                Copyright ©2021 All rights reserved | This template is made with
                by Ashish Ratewal
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
