import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "./assets/img/3.jpg";
import img2 from "./assets/img/4.jpg";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="footer" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="header">
                <h1>
                  LOVE<span className="yellow">CARE</span>
                </h1>
                <p>THAPER THEME</p>
              </div>
              <p className="footer_content">
                Giving to charity is great — not just for the recipients but for
                the givers, too. If you have a good reason you will get a good
                amount of Charity for any Cause. If you have a Proper Message
                and a Perfect plan to Spend that Money that its what you can get
                more Charity from your End.
              </p>
              <div class="footer_social_icon">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
            <div className="col-md-4 footer_middle">
              <h4>Recent Posts</h4>
              <div className="footer_middle_content">
                <div className="row">
                  <div className="col-4">
                    <img src={img1} alt="img1" className="img-fluid rounded" />
                  </div>
                  <div className="col-8">
                    <small>
                      <span> Feb. 22, 2021</span>
                      <span>Admin</span>
                    </small>
                    <p>Ecological System Responsible for Green Energy</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img src={img2} alt="img1" className="img-fluid rounded" />
                  </div>
                  <div className="col-8">
                    <small>
                      <span> Feb. 22, 2021</span>
                      <span>Admin</span>
                    </small>
                    <p>Ecological System Responsible for Green Energy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer_right">
              <h4>Have a Question?</h4>
              <address>
                203 Fake St. Mountain View, San Francisco, California, USA
              </address>
              <p>
                <a
                  href="tel:	+2 392 3929 210
"
                >
                  +2 392 3929 210
                </a>
              </p>
              <p>
                <a href="mailto:theleadorigin@gmail.com">info@leadorigin.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
