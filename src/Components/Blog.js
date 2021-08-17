import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./assets/img/1.jpg";
import img2 from "./assets/img/2.jpg";
import img3 from "./assets/img/3.jpg";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let blog = [
    {
      img: img1,
      title: "Provide Food to Hungry",
      sub_title:
        "With just Rs.550/- you can provide food to 50 person. Donate Now",
    },
    {
      img: img2,
      title: "Donate Hygiene Kit",
      sub_title:
        "With just Rs.500/- you can provide a hygiene kit to a woman. Donate Now",
    },
    {
      img: img3,
      title: "Feed The Needy on Your Birthday",
      sub_title:
        "Celebrate your birthday by feeding the poor patients. Donate Nows",
    },
  ];
  return (
    <>
      <div className="blog" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="col-12 header">
              <p>OUR BLOG</p>
              <h1>Recent From Blog</h1>
            </div>
          </div>
          <div className="row">
            {blog.map((val, index) => {
              const { img, title, sub_title } = val;
              return (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="card">
                      <img
                        src={img}
                        className="card-img-top img-fluid"
                        alt={title}
                      />
                      <div className="card-body">
                        <div className="card-pallet">
                          <span>ADMIN</span>
                          <span>FEB. 22.2021</span>
                          <span>3</span>
                          <small>COMMENTS</small>
                        </div>
                        <div className="card-content">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">{sub_title}</p>
                          <a href="#" className="btn">
                            Read More
                          </a>
                        </div>
                      </div>
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

export default Blog;
