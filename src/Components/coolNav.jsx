import React from "react";
import { Link } from "react-router-dom";

const coolNav = () => {
  return (
    <>
      <div className="container-link">
        <div className="link-contents">
          <div className="Link">
            <Link to="/home">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default coolNav;
