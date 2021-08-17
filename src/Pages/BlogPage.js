import React from "react";
import DyanmicBranding from "../Components/DyanmicBranding";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
const BlogPage = () => {
  return (
    <>
      <div className="blogPage">
        <DyanmicBranding
          title={"Our Blog"}
          pageLocation={"Home > Our Blog"}
          classN={"ourBlogs"}
        />
        <Blog />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default BlogPage;
