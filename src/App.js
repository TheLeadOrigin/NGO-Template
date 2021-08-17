import React from "react";
import Index from "./Pages/Index";
import About from "./Pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Causes from "./Pages/Causes";
import Blog from "./Pages/BlogPage";
import ContactUs from "./Pages/ContactUs";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
          <Route path="/causes" exact component={Causes} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route>404 not Found!</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
