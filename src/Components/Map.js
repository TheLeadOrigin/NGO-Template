import React from "react";

const Map = () => {
  return (
    <>
      <div className="mapArea pt-5">
        <div className="container mapArea-container">
          <div className="row">
            <div className="col-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.5572105382703!2d77.29414511459575!3d30.13548142122241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efb4fde39e8f1%3A0x40b8a6b01414aa84!2sLead%20Origin!5e0!3m2!1sen!2sin!4v1629091303034!5m2!1sen!2sin"
                height="500"
                style={{ border: "0", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="map-content">
            <div className="row">
              <div className="col-12">
                <h2>Contact Us</h2>
                <p className="textLine">
                  We're open for any suggestion or just to have a chat
                </p>
              </div>
            </div>
            <div className="row map-Address">
              <div className="col-md-4">
                <p className="fw-bold">ADDRESS:</p>
                <p className="grey">
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              <div className="col-md-4">
                <p className="fw-bold">Email:</p>
                <p>
                  <a href="mailto:leadorigin@gmail.com" className="yellow">
                    leadorigin@gmail.com
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <p className="fw-bold">Phone:</p>
                <p>
                  <a href="tel:+123 456 789" className="yellow">
                    +123 456 789
                  </a>
                </p>
              </div>
            </div>
            {/* form */}
            <div className="row map-form">
              <div className="col-12">
                <form action="#">
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="row py-4">
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        rows="7"
                        placeholder="Create a message here"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn submitBtn"
                      />
                    </div>
                  </div>
                  <div className="row py-5 socialSection">
                    <div className="col-12">
                      <p>Follow us here</p>
                      <div className="socialLinks">
                        <a href="#">FACEBOOK</a>
                        <a href="#">TWITTER</a>
                        <a href="#">INSTAGRAM</a>
                        <a href="#">DRIBBBLE</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
