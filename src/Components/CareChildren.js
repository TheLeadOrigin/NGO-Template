import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./assets/img/careChild.jpg";
const CareChildren = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="careChildren" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img1} alt="Img" className="img-fluid" />
            </div>
            <div className="col-md-6 careChildren-right">
              <div className="header">
                <p>WELCOME TO LOVECARE NON-PROFIT CHARITY</p>
                <h1>
                  Do You Care Our <br /> Children?
                </h1>
              </div>
              <div className="content-careChildren">
                <p>
                  Education is the process of facilitating learning, or the
                  acquisition of knowledge, skills, values, morals, beliefs, and
                  habits. Educational methods include teaching, training,
                  storytelling, discussion and directed research. Education
                  frequently takes place under the guidance of educators.
                </p>
                <p>
                  however learners can also educate themselves. Education can
                  take place in formal or informal settings and any experience
                  that has a formative effect on the way one thinks, feels, or
                  acts may be considered educational. The methodology of
                  teaching is called pedagogy.
                </p>
                <button className="btn voluenteer">Be A Volunteer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareChildren;
