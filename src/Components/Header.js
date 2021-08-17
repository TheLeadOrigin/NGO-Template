import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const headerItem = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Causes",
      link: "/causes",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contactus",
    },
  ];
  return (
    <>
      <div className="navBar">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand logo">
                <p>
                  SMILE<span className="yellowColor">FOUNDATION</span>
                </p>
                <p className="tagLine">CHARITY THEME</p>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {headerItem.map((val, index) => {
                    const { title, link } = val;
                    return (
                      <>
                        <li className="nav-item" key={index}>
                          <Link
                            to={link}
                            className="nav-link text-light"
                            href="#"
                          >
                            {title}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
