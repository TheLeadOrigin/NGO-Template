import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/img/4.jpg";
import img2 from "./assets/img/5.jpg";
import img3 from "./assets/img/6.jpg";
import img4 from "./assets/img/7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const OurCauses = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let settings = {
    dot: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let cards = [
    {
      img: img1,
      title: "Are mid day meals the way to bring back children to school?",
      sub_title:
        "Many a times we notice poor children begging on the streets, sitting on pavements or just roaming around.",
    },
    {
      img: img2,
      title: "Can you thrive on an empty stomach? ",
      sub_title:
        "How do you define a powerful nation? Is it their natural reserves, or its financial resources, or its People? Leaders across the globe",
    },
    {
      img: img3,
      title: "A pledge to nourish- with food, love and care!",
      sub_title:
        "Whether you’re in a lavish apartment in a big, sprawling city, or in a small hut in a tiny village,",
    },
    {
      img: img4,
      title:
        "A pledge to build a generation of healthy leaders this World Food Day",
      sub_title:
        "As a nation, we have long battled with the problem of hunger,",
    },
  ];
  return (
    <>
      <div className="ourCauses" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 header">
              <p>OUR CAUSES</p>
              <h1>
                Our Causes & Help <br /> Us
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Slider {...settings}>
                {cards.map((val, index) => {
                  const { img, title, sub_title } = val;
                  return (
                    <>
                      <div
                        className="card d-flex align-items-stretch"
                        key={index}
                      >
                        <img
                          src={img}
                          className="card-img-top"
                          alt="img"
                          className="img-fluid"
                        />
                        <div className="card-body">
                          <div className="card-content">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{sub_title}</p>
                          </div>
                          <div className="card-progress">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                75%
                              </div>
                            </div>
                            <div className="row card-progress_second">
                              <div className="col-6">
                                <p className="text-muted">
                                  Raised:{" "}
                                  <span className="text-dark">$9800</span>
                                </p>
                              </div>
                              <div className="col-6 text-end">
                                <p className="text-muted">
                                  Goal: <span className="fifteen">$15000</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCauses;
