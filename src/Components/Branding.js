import React from "react";
import Header from "./Header";
import demoVideo from "./assets/video/demo.mp4";
import { Link } from "react-router-dom";
const Branding = () => {
  return (
    <>
      <div className="landingPage">
        <div className="container">
          <Header />
          <div className="row landingPage_content">
            <div className="col-12">
              <p>Rasing Hope</p>
              <h1>
                Charity is Investments &amp; <br />
                helps you to earn Smiles
              </h1>
              <Link to="/contactus" className="btn joinBtn text-light">
                Join Us
              </Link>
              <button
                className="btn watchbtn text-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <video controls autoPlay className="img-fluid">
                <source src={demoVideo} type="video/mp4" />
                <source src={demoVideo} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
