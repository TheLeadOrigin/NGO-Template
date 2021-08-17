import React, { useEffect } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { RiHome8Fill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
const TechnicalStatistics = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="technicalStatistics" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 header">
              <p>GREAT REVIEWS FOR OUR SERVICES</p>
              <h2>Technical Statistics</h2>
            </div>
          </div>
          <div className="row technicalStatisticsCards">
            <div className="col-md-3">
              <div className="technicalStatistics_card">
                <FaHandHoldingHeart />
                <h3>$60</h3>
                <p>FUND RAISED</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="technicalStatistics_card">
                <FaHandsHelping />
                <h3>$60</h3>
                <p>FUND RAISED</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="technicalStatistics_card">
                <FaDonate />
                <h3>$60</h3>
                <p>FUND RAISED</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="technicalStatistics_card">
                <RiHome8Fill />
                <h3>$60</h3>
                <p>FUND RAISED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalStatistics;
