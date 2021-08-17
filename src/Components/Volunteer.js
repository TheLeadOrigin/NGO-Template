import React, { useEffect } from "react";
import img1 from "./assets/img/vol1.webp";
import img2 from "./assets/img/vol2.webp";
import img3 from "./assets/img/vol3.webp";
import img4 from "./assets/img/vol4.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Volunteer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let volunteerArr = [
    {
      img: img1,
      title: "Jason Smith",
    },
    {
      img: img2,
      title: "Anne Hayes",
    },
    {
      img: img3,
      title: "Martha Smith",
    },
    {
      img: img4,
      title: "Mike Tyson",
    },
  ];
  return (
    <>
      <div className="ourVolunteer" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-12 py-2 header">
              <p>MEET OUR VOLUNTEER</p>
              <h1>Our Volunteer</h1>
            </div>
          </div>
          <div className="row ourVolunteer_section">
            {volunteerArr.map((val, index) => {
              const { img, title } = val;
              return (
                <>
                  <div
                    className="col-md-3 ourVolunteer_section_items"
                    key={index}
                  >
                    <div className="ourVolunteer_section_img">
                      <img
                        src={img}
                        alt={title}
                        className="img-fluid rounded-circle mx-auto d-block"
                      />
                    </div>
                    <div className="ourVolunteer_section_content py-4 text-center">
                      <h3 className="ourVolunteer_section_content_title">
                        {title}
                      </h3>
                      <p className="volunp">Volunteer</p>
                      <div class="footer_social_icon">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                      </div>
                      <p className="ourVolunteer_section_content_p">
                        I am an ambitious workaholic, but apart from that,
                        pretty simple person.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
