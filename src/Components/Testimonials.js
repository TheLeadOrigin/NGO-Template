import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/img/feed1.webp";
import img2 from "./assets/img/feed2.webp";
import img3 from "./assets/img/feed3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let settings = {
    dot: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      title: "Roger Scott",
      para: "Marketing Manager",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      img: img2,
      title: "Roger Scott",
      para: "Marketing Manager",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      img: img3,
      title: "Roger Scott",
      para: "Marketing Manager",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      img: img2,
      title: "Roger Scott",
      para: "Marketing Manager",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
  ];
  return (
    <>
      <div className="testimonials" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 header">
              <p>TESTIMONIAL</p>
              <h1>What People Says</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Slider {...settings}>
                {cards.map((val, index) => {
                  const { img, title, para, sub_title } = val;
                  return (
                    <>
                      <div className="card" key={index}>
                        <div className="card-body">
                          <div className="card-content">
                            <p className="card-text">{sub_title}</p>
                            <div className="row footer_content text-start">
                              <div className="col-4">
                                <img
                                  src={img}
                                  alt={title}
                                  className="img-fluid rounded-circle"
                                />
                              </div>
                              <div className="col-8">
                                <h5 className="card-title">{title}</h5>
                                <p>{para}</p>
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

export default Testimonials;
