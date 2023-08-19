import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
      </Router>
    
    </>
  );
};

export default App;
